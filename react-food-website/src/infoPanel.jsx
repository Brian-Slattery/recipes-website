import React, { useState, useEffect } from 'react';
import './infoPanel.css';

function InfoPanel({title, cookingTime, dishDescription, clockImg }){

    const mainText2 = ""

    const [ismaintextClosed, setIsmaintextClosed] = useState(false);

    const toggleMaintext = () => {
        setIsmaintextClosed(!ismaintextClosed);
    };

    return (
        <div id="intoPanelContainer">
                <div id="titleAndTimeContainer">
                    <div id="titlecontainer">
                        <h1 id="title">{title}</h1>
                    </div>
                    <div id="timeContainer">
                        <p id="time">{cookingTime}</p>
                        <img src={clockImg} alt="" id="clockImage"/>
                    </div>
                </div>

                <div id="textAndDropdownContainer">
                    <div id="emptyContainer"></div>
                    <div id="textContainer">
                        <h2 id="textTitle">{title}</h2>
                        <p id="maintext">{ismaintextClosed ? mainText2 : dishDescription}</p>
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