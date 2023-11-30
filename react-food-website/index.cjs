const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect', err));

  const CommentSchema = new mongoose.Schema({
    name: String,
    commentText: String,
    profilePicSrc: String,
    rating: Number
});

const Comment = mongoose.model('Comment', CommentSchema);

app.get('/api/comments', async (req, res) => {
    const comments = await Comment.find();
    res.send(comments);
});

app.post('/api/comments', async (req, res) => {
    const comment = new Comment(req.body);
    await comment.save();
    res.send(comment);
});

app.post('/api/clear-comments-db', async (req, res) => {
    try {
        await mongoose.connection.collections['comments'].drop();
        res.send('Comments cleared');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error clearing comments');
    }
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));