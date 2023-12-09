import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import PizzaPage from './PizzaPage';
import PageTop from './pageTop';
import PancakePage from './PancakePage';
import DonutPage from './DonutPage';
import HotDogPage from './HotDogPage';

function Main() {
    const [currentPage, setCurrentPage] = useState('dinner');

    const navigateToBreakfast = () => setCurrentPage('breakfast');
    const navigateToDinner = () => setCurrentPage('dinner');
    const navigateToDessert = () => setCurrentPage('dessert');
    const navigateToLunch = () => setCurrentPage('lunch');

    return (
        <div>
            <PageTop 
                onBreakfastClick={navigateToBreakfast}
                onDinnerClick={navigateToDinner}
                onDessertClick={navigateToDessert}
                onLunchClick={navigateToLunch}
            />
            {currentPage === 'dinner' && <PizzaPage />}
            {currentPage === 'breakfast' && <PancakePage />}
            {currentPage === 'dessert' && <DonutPage />}
            {currentPage === 'lunch' && <HotDogPage/>}
        </div>
    );
}

ReactDOM.render(<Main />, document.getElementById('root'));