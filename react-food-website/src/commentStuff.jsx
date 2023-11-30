import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './commentStuff.css'

const commentsData = [
    { 
    name: "exampleName1",
    commentText:"First comment text...",
    profilePicSrc: "photos/icon4.PNG",
    rating:5,
    reviewPhoto: "photos/download.jpg",
    }, 

    {
    name: "exampleName2",
    commentText:"second comment text...",
    profilePicSrc: "photos/icon4.PNG",
    rating:4, 
    },

    {
        name: "exampleName3",
        commentText:"third comment text...",
        profilePicSrc: "photos/icon4.PNG",
        rating:5, 
        reviewPhoto: "photos/example2.jpg",
        },
]

function CommentPanel() {
    const [comments, setComments] = useState(commentsData);

    useEffect(() => {
        axios.get('http://localhost:3001/api/comments')
            .then(response => setComments(response.data))
            .catch(error => console.error('Error fetching comments:', error));
    }, []);

        const [name, setName] = useState('');
        const [comment, setComment] = useState('');
        const [rating, setRating] = useState(0);
        // Add states for other fields if needed

        const handleNameChange = (event) => {
            setName(event.target.value);
        };
    
        const handleCommentChange = (event) => {
            setComment(event.target.value);
        };

        const handleStarClick = (starRating) => {
            setRating(starRating);
        };

        const handleSubmit = async (event) => {
            event.preventDefault();
            const newComment = {
                name,
                commentText: comment,
                rating,
                // Add other fields here
            };

            axios.post('http://localhost:3001/api/comments', newComment)
            .then(response => setComments([...comments, response.data]))
            .catch(error => console.error('Error posting comment:', error));

            setName('');
            setComment('');
            setRating(0);

        };

    return (
        <div className="commentPanelWrapper">
            <div id="commentPanel">
                <form id="commentForm" onSubmit={handleSubmit}>
                    <input type="text" name="Name" id="nameField" placeholder="Name" value={name} onChange={handleNameChange} required/>
                    <input type="file" name="ProfilePicture" id="ProfilePicture" accept="image/*"/>
                    <div id="starOptions">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <img 
                            key={star} 
                            src="photos/star.png" 
                            alt={`star ${star}`} 
                            className="starInput" 
                            onClick={() => handleStarClick(star)}
                        />))}
                    </div>

                    <textarea name="commentField" placeholder="Your review" value={comment} onChange={handleCommentChange} required></textarea>
                    <input type="file" name="attachedPhoto" id="postPhoto" accept="image/*"/>
                    <button type="submit">Post Comment</button>
                </form>
            </div>

            <div id="commentsContainer">
                <div id="comments">
                {comments.map((comment, index) => (
                        <div className="comment" key={index}>
                            <div className="topOfComment">
                                <img src={comment.profilePicSrc} alt="" className="profilePic"/>
                                <p className="commentName">{comment.name}</p>
                                <div className="starRating">
                                    {Array.from({ length: comment.rating }, (_, i) => (
                                        <img key={i} src="photos/star.png" alt="" className="star"/>
                                    ))}
                                </div>
                            </div>
                            <div className="bottomOfComment">
                                <p className="commentText">{comment.commentText}</p>
                                <img src={comment.reviewPhoto} class="commentPhoto"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
            );
            
        }


export default CommentPanel;