import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import PizzaPage from './PizzaPage';
import PancakePage from './PancakePage';

function Main() {
    const [currentPage, setCurrentPage] = useState('pizza');

    const showPizzaPage = () => setCurrentPage('pizza');
    const showPancakePage = () => setCurrentPage('pancake');

    return (
        <div>
            {currentPage === 'pizza' && <PizzaPage onBreakfastClick={showPancakePage} />}
            {currentPage === 'pancake' && <PancakePage onDinnerClick={showPizzaPage} />}
        </div>
    );
}

ReactDOM.render(<Main />, document.getElementById('root'));