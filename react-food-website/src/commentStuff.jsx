import React, { useState, useEffect } from 'react';
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
    return (
        <div className="commentPanelWrapper">
            <div id="commentPanel">
                <form id="commentForm">
                    <input type="text" name="Name" id="nameField" placeholder="Name" required/>
                    <input type="file" name="ProfilePicture" id="ProfilePicture" accept="image/*"/>
                    <div id="starOptions">
                        <img src="photos/star.png" alt="" class="starInput" id="star1"/>
                        <img src="photos/star.png" alt="" class="starInput" id="star2"/>
                        <img src="photos/star.png" alt="" class="starInput" id="star3"/>
                        <img src="photos/star.png" alt="" class="starInput" id="star4"/>
                        <img src="photos/star.png" alt="" class="starInput" id="star5"/>
                    </div>
                    <textarea name="commentField" placeholder="Your review" required></textarea>
                    <input type="file" name="attachedPhoto" id="postPhoto" accept="image/*"/>
                    <button type="submit">Post Comment</button>
                </form>
            </div>

            <div id="commentsContainer">
                <div id="comments">
                {commentsData.map((comment, index) => (
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