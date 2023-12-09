import React from 'react';
import PizzaData from './PizzaData';
import PageTop from './pageTop';
import Ad from './ad.jsx';
import InfoPanel from './infoPanel';
import Instructions from './instructionPanel';
import FAQPanel from './faqPanel';
import CommentPanel from './commentStuff';

function PizzaPage({onBreakfastClick}){
    return(
        <div>
            <PageTop
            onBreakfastClick={onBreakfastClick}/>
            <InfoPanel
            title={PizzaData.title}
            cookingTime={PizzaData.cookingTime}
            dishDescription={PizzaData.dishDescription}
            clockImg={PizzaData.clockImg}
            />
            <Ad/>
            <Instructions
            CookingSteps={PizzaData.CookingSteps}
            IngredientsList={PizzaData.IngredientsList} />
            <FAQPanel 
            FaQs={PizzaData.FaQs} />
            <Ad/>
            <CommentPanel 
            recipeId={PizzaData.id}
            CommentsData={PizzaData.CommentsData} />
        </div>
    );
}

export default PizzaPage; 