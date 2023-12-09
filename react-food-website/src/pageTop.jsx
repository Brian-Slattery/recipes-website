import React, { useState, useEffect } from 'react';
import './pageTop.css';

function PageTop({ onBreakfastClick, onDinnerClick, onDessertClick, onLunchClick}) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState('normalBackground');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const changePoint = 50;
            setScrolled(window.scrollY > changePoint);
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    useEffect(() => {
        setBackgroundImage(isDropdownOpen ? 'newBackground' : 'initialBackground');
    }, [isDropdownOpen]);

    const backgroundClassName = scrolled ? 'topBackgroundContainerScrolled' : 'normalBackground';

    return (

        <div id="topBackgroundContainer" className={`${backgroundClassName} ${backgroundImage}`}>
            <div id="topContainer">

                <div id="navigationButtonsContainer">
                    <div id="logoContainer">
                        <a href="" id="logoLink">
                            <img src="photos/logo.png" alt="brian's logo" />
                        </a>
                    </div>

                    <div id="searchbarAndDropdownContainer">

                        <div id="searchbarContainer">
                            <div id="searchbarImage"></div>
                            <input type="text" id="searchbar" placeholder="search" />
                        </div>

                        <div id="dropdownButtonContainer">
                            <div id="dropdownButton" onClick={toggleDropdown}>
                                <img src="photos/icon4.PNG" alt="menu" />
                            </div>
                        </div>

                    </div>

                    <div id="mealTypeButtonContainer">

                        <div id="breakfastContainer" onClick={onBreakfastClick}>
                                <img src="photos/icon1.PNG" alt="breakfast" />
                            <p class="iconTitles">Breakfast</p>
                        </div>

                        <div id="lunchContainer">
                                <img src="photos/icon2.PNG" alt="lunch" onClick={onLunchClick} />
                            <p class="iconTitles">Lunch</p>
                        </div>

                        <div id="dinnerContainer" onClick={onDinnerClick}>
                                <img src="photos/icon3.PNG" alt="dinner" />
                            <p class="iconTitles">Dinner</p>
                        </div>

                        <div id="dessertContainer">
                                <img src="photos/icon4.PNG" alt="dessert" onClick={onDessertClick} />
                            <p class="iconTitles">Dessert</p>
                        </div>
                    </div>
                </div>

                <div id="searchbarAndDropdownContainer2">

                    <div id="searchbarContainer2">
                        <div id="searchbarImage"></div>
                        <input type="text" id="searchbar2" placeholder="search" />
                    </div>

                    <div id="dropdownbutton2" onClick={toggleDropdown}>
                        <img src="photos/icon4.PNG" alt="" />
                    </div>

                </div>

            </div>
            {isDropdownOpen && (
                <div id="dropdownMenu">

                    <div id="block1">
                        <h3 class="dropdownTitle">dietary</h3>

                        <div class="dropdownOptions">
                            <a href="" class="dropOp">option</a>
                            <a href="" class="dropOp">option</a>
                            <a href="" class="dropOp">option</a>
                            <a href="" class="dropOp">option</a>
                        </div>

                    </div>

                    <div id="block2">
                        <h3 class="dropdownTitle">Seasonal</h3>

                        <div class="dropdownOptions">
                            <a href="" class="dropOp">option</a>
                            <a href="" class="dropOp">option</a>
                            <a href="" class="dropOp">option</a>
                            <a href="" class="dropOp">option</a>
                            <a href="" class="dropOp">option</a>
                            <a href="" class="dropOp">option</a>
                            <a href="" class="dropOp">option</a>
                            <a href="" class="dropOp">option</a>
                        </div>

                    </div>

                    <div id="block3">
                        <h3 class="dropdownTitle">All Recipies</h3>

                        <div class="dropdownOptions">
                            <a href="" class="dropOp">option</a>
                            <a href="" class="dropOp">option</a>
                            <a href="" class="dropOp">option</a>
                            <a href="" class="dropOp">option</a>
                            <a href="" class="dropOp">option</a>
                            <a href="" class="dropOp">option</a>
                            <a href="" class="dropOp">option</a>
                            <a href="" class="dropOp">option</a>
                        </div>

                    </div>

                </div>
            )}

        </div>
    )
}

export default PageTop;