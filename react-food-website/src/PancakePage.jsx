import React from 'react';
import PancakeData from './pancakeData';
import Ad from './ad.jsx';
import InfoPanel from './infoPanel';
import Instructions from './instructionPanel';
import FAQPanel from './faqPanel';
import CommentPanel from './commentStuff';

function PancakePage({ onDinnerClick }){
    return(
        <div>
            <InfoPanel
            title={PancakeData.title}
            cookingTime={PancakeData.cookingTime}
            dishDescription={PancakeData.dishDescription}
            clockImg={PancakeData.clockImg}
            />
            <Ad/>
            <Instructions
            CookingSteps={PancakeData.CookingSteps}
            IngredientsList={PancakeData.IngredientsList} />
            <FAQPanel 
            FaQs={PancakeData.FaQs} />
            <Ad/>
            <CommentPanel 
            recipeId={PancakeData.id}
            CommentsData={PancakeData.CommentsData} />
        </div>
    );
}

export default PancakePage; 