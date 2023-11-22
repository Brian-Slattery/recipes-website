import React, { useState, useEffect } from 'react';
import './infoPanel.css';

function InfoPanel(){

    const mainText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, doloribus ex fuga dicta architecto obcaecati illum quia veritatis! Inventore fugiat praesentium dicta expedita excepturi sed alias eveniet perferendis sunt hic?"
    const mainText2 = ""

    const [ismaintextClosed, setIsmaintextClosed] = useState(false);

    const toggleMaintext = () => {
        setIsmaintextClosed(!ismaintextClosed);
    };

    return (
        <div id="intoPanelContainer">
                <div id="titleAndTimeContainer">
                    <div id="titlecontainer">
                        <h1 id="title">Deep Dish Pizza</h1>
                    </div>
                    <div id="timeContainer">
                        <p id="time">1hr</p>
                        <img src="photos/icon3.PNG" alt="" id="clockImage"/>
                    </div>
                </div>

                <div id="textAndDropdownContainer">
                    <div id="emptyContainer"></div>
                    <div id="textContainer">
                        <h2 id="textTitle">Chicago Deep Dish Pizza</h2>
                        <p id="maintext">{ismaintextClosed ? mainText2 : mainText}</p>
                    </div>
                    <div id="textDropdownContainer">
                        <div id="dropdownImageContainer" onClick={toggleMaintext}>
                            <img src="photos/icon4.PNG" alt="" id="dropdownImageButton" />
                        </div>
                    </div>
                </div>

            </div>
    )}

    export default InfoPanel;