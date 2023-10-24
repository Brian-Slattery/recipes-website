import React from 'react';
import PageTop from './pageTop.jsx';
import InfoPanel from './infoPanel.jsx';
import Ad from './ad.jsx';
import Instructions from './instructionPanel.jsx';
import FAQPanel from './faqPanel.jsx';
import CommentPanel from './commentStuff.jsx';

function PageLayout(){
    return(
        <div>
            <PageTop />
            <InfoPanel />
            <Ad />
            <Instructions />
            <FAQPanel />
            <Ad />
            <CommentPanel />
        </div>
    );
}

export default PageLayout;