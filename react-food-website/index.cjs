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
    rating: Number,
    recipeId: String
});

const Comment = mongoose.model('Comment', CommentSchema);


app.get('/api/comments/:recipeId', async (req, res) => {
    const { recipeId } = req.params;
    try {
        const comments = await Comment.find({ recipeId });
        res.json(comments);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

app.post('/api/comments/:recipeId', async (req, res) => {
    const recipeId = req.params.recipeId;
    const commentData = { ...req.body, recipeId }; 
    const comment = new Comment(commentData);
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