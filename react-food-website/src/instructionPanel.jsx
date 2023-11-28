import React, { useState, useEffect } from 'react';
import './instructionPanel.css';

function Instructions (){

    const steps = [
        {
            stepTitle: "Step 1",
            pageNumber: 1,
            instructText: "Step 1 instructions...",
            ingreds: [
                { id: 'flour1', title: "1 Cup Flour", imageSrc: "photos/icon2.PNG" },
                { id: 'sugar1', title: "1 1/2 teaspoon sugar", imageSrc: "photos/icon1.PNG" },
                { id: 'flour2', title: "1 Cup Flour", imageSrc: "photos/icon2.PNG" },
                
            ]
        },
        {
            stepTitle: "Step 2",
            pageNumber: 2,
            instructText: "Step 2 instructions...",
            ingreds: [
                { id: 'oil1', title: "1 tablespoon oil", imageSrc: "photos/icon2.PNG" },
                { id: 'water1', title: "2 cups of water", imageSrc: "photos/icon1.PNG" },

            ]
        },
        {
            stepTitle: "Step 3",
            pageNumber: 3,
            instructText: "Step 3 instructions...",
            ingreds: [
            ]
        },
    ]
    
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const incrementStep = () => {
        if (currentStepIndex < steps.length - 1) {
            setCurrentStepIndex(currentStepIndex + 1);
        }
    };

    const decrementStep = () => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex(currentStepIndex - 1);
        }
    };

    const currentStep = steps[currentStepIndex];

    const Ingredients = (
            <div id= "IngredientsTab">
                <div id="ingredientsText">
                    <li class="ingred">1/2lbs Flour</li>
                    <li class="ingred">olive oil</li>
                    <li class="ingred">1lbs provalone cheese</li>
                    <li class="ingred">pizza sause</li>
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