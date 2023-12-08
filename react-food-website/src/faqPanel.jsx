import React from "react"
import './faqPanel.css';

function FAQPanel({FaQs}){
    return(
    <div id="mainContentContainer">
        
        <div id="faqContainer">

                <div id="topOfFaqPanel">
                    <div id="faqDropdownButton">
                        <p class="buttonText">FAQ</p>
                    </div>
                </div>
                <div id="FAQText">
            {FaQs.map((faq, index) => (
                <React.Fragment key={index}>
                    <li className="FAQOption">{faq.question}</li>
                    <p className="FAQAnswer">{faq.answer}</p>
                </React.Fragment>
            ))}
                </div>
        </div>
    </div>
    )}

    export default FAQPanel;