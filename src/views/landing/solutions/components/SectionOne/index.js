import React, { memo } from 'react';
import './one.scss'
import intl from 'react-intl-universal'
const Index = memo(() => {
    return (
        <div className="solutions-container-one">
            <div className="content">
                <h2> <strong>{intl.get('solutions.section_one.title')} </strong> </h2>
                <p>{intl.get('solutions.section_one.paragraph_one')} </p>
                <button>{intl.get('solutions.section_one.button')}</button>
            </div>

        </div>
    );
});

export default Index;