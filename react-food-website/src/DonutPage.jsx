import React from 'react';
import DonutsData from './DonutsData';
import Ad from './ad.jsx';
import InfoPanel from './infoPanel';
import Instructions from './instructionPanel';
import FAQPanel from './faqPanel';
import CommentPanel from './commentStuff';

function DonutPage({onDessertClick}){
    return(
        <div>
            <InfoPanel
            title={DonutsData.title}
            cookingTime={DonutsData.cookingTime}
            dishDescription={DonutsData.dishDescription}
            clockImg={DonutsData.clockImg}
            />
            <Ad/>
            <Instructions
            CookingSteps={DonutsData.CookingSteps}
            IngredientsList={DonutsData.IngredientsList} />
            <FAQPanel 
            FaQs={DonutsData.FaQs} />
            <Ad/>
            <CommentPanel 
            recipeId={DonutsData.id}
            CommentsData={DonutsData.CommentsData} />
        </div>
    );
}

export default DonutPage; 