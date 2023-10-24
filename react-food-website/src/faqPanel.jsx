import React from "react"
import './faqPanel.css';

function FAQPanel(){
    return(
    <div id="mainContentContainer">
        
        <div id="faqContainer">

                <div id="topOfFaqPanel">
                    <div id="faqDropdownButton">
                        <p class="buttonText">FAQ</p>
                    </div>
                </div>
                <div id="FAQText">
                    <li class="FAQOption">how many people does this serve?</li>
                    <p class="FAQAnswer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aliquam consequatur,
                        recusandae voluptates doloremque incidunt, distinctio tempora aliquid.</p>
                    <li class="FAQOption">Special Tools (affiliate links)</li>
                    <p class="FAQAnswer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aliquam consequatur,
                        recusandae voluptates doloremque incidunt, distinctio tempora aliquid.</p>
                    <li class="FAQOption">Reheating and freezing</li>
                    <p class="FAQAnswer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aliquam consequatur,
                        recusandae voluptates doloremque incidunt, distinctio tempora aliquid.</p>
                    <li class="FAQOption">ingredients options</li>
                    <p class="FAQAnswer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aliquam consequatur,
                        recusandae voluptates doloremque incidunt, distinctio tempora aliquid.</p>
                </div>

            </div>
    </div>
    )}

    export default FAQPanel;