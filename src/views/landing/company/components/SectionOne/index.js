import React, { memo } from 'react';
import './funcOne.scss'
import intl from 'react-intl-universal'
import pic from '../../../../../images/company/city.png'

const Index = memo(() => {
    return (
        <div className="company-container-one">
            <div className="text">
                <h2>{intl.get('solutions.section_three.title')} </h2>
                <p>{intl.get('solutions.section_three.paragraph_one')}</p>
                <p>{intl.get('solutions.section_three.paragraph_two')}</p>
            </div>
            <div className="picture">
                <img src={pic} alt="pic laptop 1" />
            </div>


        </div>
    );
});

export default Index;