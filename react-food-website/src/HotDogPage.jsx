import React from 'react';
import HotDogData from './HotDogData.js';
import Ad from './ad.jsx';
import InfoPanel from './infoPanel';
import Instructions from './instructionPanel';
import FAQPanel from './faqPanel';
import CommentPanel from './commentStuff';

function HotDogPage({onLunchClick}){
    return(
        <div>
            <InfoPanel
            title={HotDogData.title}
            cookingTime={HotDogData.cookingTime}
            dishDescription={HotDogData.dishDescription}
            clockImg={HotDogData.clockImg}
            />
            <Ad/>
            <Instructions
            CookingSteps={HotDogData.CookingSteps}
            IngredientsList={HotDogData.IngredientsList} />
            <FAQPanel 
            FaQs={HotDogData.FaQs} />
            <Ad/>
            <CommentPanel 
            recipeId={HotDogData.id}
            CommentsData={HotDogData.CommentsData} />
        </div>
    );
}

export default HotDogPage; 