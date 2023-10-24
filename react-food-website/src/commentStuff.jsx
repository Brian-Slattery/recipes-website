import React from "react"
import './commentStuff.css'

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
                    <textarea name="commentField" placeholder="Your comment" required></textarea>
                    <input type="file" name="attachedPhoto" id="postPhoto" accept="image/*"/>
                    <button type="submit">Post Comment</button>
                </form>
            </div>

            <div id="commentsContainer">
                <div id="comments">
                    <div class="comment">
                        <div class="topOfComment">
                            <img src="photos/icon4.PNG" alt="" class="profilePic"/>
                            <p class="commentName">exampleName</p>
                            <div class="starRating">
                                <img src="photos/star.png" alt="" class="star"/>
                                <img src="photos/star.png" alt="" class="star"/>
                                <img src="photos/star.png" alt="" class="star"/>
                                <img src="photos/star.png" alt="" class="star"/>
                                <img src="photos/star.png" alt="" class="star"/>
                            </div>
                        </div>

                        <div class="bottomOfComment">
                            <p class="commentText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem itaque quam
                                nam dolor architecto, at amet aliquid distinctio rem inventore laborum mollitia voluptates
                                reiciendis.</p>
                        </div>
                    </div>

                    <div class="comment">
                        <div class="topOfComment">
                            <img src="photos/icon4.PNG" alt="" class="profilePic"/>
                            <p class="commentName">exampleName</p>
                            <div class="starRating">
                                <img src="photos/star.png" alt="" class="star"/>
                                <img src="photos/star.png" alt="" class="star"/>
                                <img src="photos/star.png" alt="" class="star"/>
                                <img src="photos/star.png" alt="" class="star"/>
                                <img src="photos/star.png" alt="" class="star"/>
                            </div>
                        </div>

                        <div class="bottomOfComment">
                            <p class="commentText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem itaque quam
                                nam dolor architecto, at amet aliquid distinctio rem inventore laborum mollitia voluptates
                                reiciendis.</p>

                            <img src="photos/icon4.PNG" alt="" class="commentPhoto"/>
                        </div>
                    </div>
                </div>

                <div id="CommentPageContainer">
                    <div id="CommentArrowAndPageNumberContainer">
                        <img id="commentPreviousPage" src="photos/icon4.PNG" alt=""/>
                        <p id="commentPageNumber">1</p>
                        <img src="photos/icon4.PNG" alt="" id="commentNextPage"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentPanel;