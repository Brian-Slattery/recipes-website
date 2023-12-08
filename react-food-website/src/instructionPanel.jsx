import React, { useState, useEffect } from 'react';
import './instructionPanel.css';

function Instructions ({ CookingSteps,IngredientsList }){
    
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const incrementStep = () => {
        if (currentStepIndex < CookingSteps.length - 1) {
            setCurrentStepIndex(currentStepIndex + 1);
        }
    };

    const decrementStep = () => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex(currentStepIndex - 1);
        }
    };

    const currentStep = CookingSteps[currentStepIndex];

    const Ingredients = (
            <div id= "IngredientsTab">
                <div id="ingredientsText">
                {IngredientsList.map((ingredient, index) => (
                    <li key={index} className="ingred">{ingredient}</li>
                ))}
                </div>
            </div>
        );

    const instructions = (
        <div id="instructionContainer">
        <h2 id="stepTitle">{currentStep.stepTitle}</h2>

        <div id="arrowAndPageNumberContainer">
            <img id="previousPage" src="photos/icon4.PNG" alt="" onClick={decrementStep}/>
            <p id="pageNumber">{currentStep.pageNumber}</p>
            <img src="photos/icon4.PNG" alt="" id="nextPage" onClick={incrementStep}/>
        </div>

        <div id="instructTextContainer">
            <p id="instructText">{currentStep.instructText}</p>
        </div>

        <div id="stepIngredsContainer">

        {currentStep.ingreds.map(ingred => (
        <div className="ingredContainer" key={ingred.id}>
            <h2 className="ingredTitles">{ingred.title}</h2>
            <img src={ingred.imageSrc} alt="" className="ingredPhoto"/>
        </div>
    ))}


        </div>
        </div>
    );

    const [IsTabSetToInstructions, setIsTabSetToInstructions] = useState(false);

    return(
    <div id="mainContentContainer">

            <div id="instructionPanelContainer">

                <div id="topOfInstructPanel">
                    <div id="ingredientsButtonContainer"onClick={() => setIsTabSetToInstructions(false)}>
                        <p class="buttonText">Ingredients</p>
                    </div>
                    <div id="instructionsButtonContainer"onClick={() => setIsTabSetToInstructions(true)}>
                        <p class="buttonText">instructions</p>
                    </div>
                </div>

                <div id="bottomOfInstructPanel">

                    <div id="contentContainer">
                    {IsTabSetToInstructions ? instructions : Ingredients}
                    </div>
                </div>

            </div>
    </div>
    )}

export default Instructions;