import React from 'react';
import PizzaData from './PizzaData';
import PageTop from './pageTop';
import Ad from './ad.jsx';
import InfoPanel from './infoPanel';
import Instructions from './instructionPanel';
import FAQPanel from './faqPanel';
import CommentPanel from './commentStuff';

function PizzaPage(){
    return(
        <div>
            <PageTop/>
            <InfoPanel
            title={PizzaData.title}
            cookingTime={PizzaData.cookingTime}
            dishDescription={PizzaData.dishDescription}
            clockImg={PizzaData.clockImg}
            />
            <Ad/>
            <Instructions/>
            <FAQPanel/>
            <Ad/>
            <CommentPanel/>
        </div>
    );
}

export default PizzaPage; 