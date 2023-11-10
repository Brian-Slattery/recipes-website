import React, {useState, useEffect} from 'react';
import './pageTop.css';

function PageTop() {

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

    const backgroundClassName = scrolled ? 'topBackgroundContainerScrolled' : 'normalBackground';

    return (
        
    <div id="topBackgroundContainer" className={backgroundClassName}>
    <div id="topContainer">

        <div id="navigationButtonsContainer">
            <div id="logoContainer">
                <a href="" id="logoLink">
                    <img src="photos/logo.png" alt="brian's logo"/>
                </a>
            </div>

            <div id="searchbarAndDropdownContainer">

                <div id="searchbarContainer">
                    <div id="searchbarImage"></div>
                    <input type="text" id="searchbar" placeholder="search"/>
                </div>

                <div id="dropdownButtonContainer">
                    <div id="dropdownButton">
                        <img src="photos/icon4.PNG" alt="menu"/>
                    </div>
                </div>

            </div>

            <div id="mealTypeButtonContainer">

                <div id="breakfastContainer">
                    <a href="" id="breakfastLink">
                        <img src="photos/icon1.PNG" alt="breakfast"/>
                    </a>
                    <p class="iconTitles">Breakfast</p>
                </div>

                <div id="lunchContainer">
                    <a href="" id="lunchLink">
                        <img src="photos/icon2.PNG" alt="lunch"/>
                    </a>
                    <p class="iconTitles">Lunch</p>
                </div>

                <div id="dinnerContainer">
                    <a href="" id="dinnerLink">
                        <img src="photos/icon3.PNG" alt="dinner"/>
                    </a>
                    <p class="iconTitles">Dinner</p>
                </div>

                <div id="dessertContainer">
                    <a href="" id="dessertLink">
                        <img src="photos/icon4.PNG" alt="dessert"/>
                    </a>
                    <p class="iconTitles">Dessert</p>
                </div>
            </div>
        </div>

        <div id="searchbarAndDropdownContainer2">

            <div id="searchbarContainer2">
                <div id="searchbarImage"></div>
                <input type="text" id="searchbar2" placeholder="search"/>
            </div>

            <div id="dropdownbutton2">
                <img src="photos/icon4.PNG" alt=""/>
            </div>

        </div>

    </div>

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
</div>
)}

export default PageTop;