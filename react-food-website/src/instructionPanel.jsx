import React from "react"
import './instructionPanel.css';

function Instructions (){

    return(
    <div id="mainContentContainer">

            <div id="instructionPanelContainer">

                <div id="topOfInstructPanel">
                    <div id="ingredientsButtonContainer">
                        <p class="buttonText">Ingredients</p>
                    </div>
                    <div id="instructionsButtonContainer">
                        <p class="buttonText">instructions</p>
                    </div>
                </div>

                <div id="bottomOfInstructPanel">
                    <div id="contentContainer">

                        <h2 id="stepTitle">step title</h2>

                        <div id="arrowAndPageNumberContainer">
                            <img id="previousPage" src="photos/icon4.PNG" alt=""/>
                            <p id="pageNumber">1</p>
                            <img src="photos/icon4.PNG" alt="" id="nextPage"/>
                        </div>

                        <div id="instructTextContainer">
                            <p id="instructText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nobis, fugiat
                                velit laudantium mollitia alias pariatur esse error impedit fuga. Odio itaque corporis
                                ducimus.</p>
                        </div>

                        <div id="stepIngredsContainer">

                            <div class="ingredContainer">
                                <h2 class="ingredTitles">1 Cup Flour</h2>
                                <img src="photos/icon2.PNG" alt="" class="ingredPhoto"/>
                            </div>


                            <div class="ingredContainer">
                                <h2 class="ingredTitles">1 1/2 teaspoon on sugar</h2>
                                <img src="photos/icon1.PNG" alt="" class="ingredPhoto"/>
                            </div>


                        </div>

                    </div>
                </div>

            </div>
    </div>
    )}

export default Instructions;