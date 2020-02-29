import React, { memo } from 'react';
import './funcTwo.scss'
import intl from 'react-intl-universal'
import pic from '../../../../../images/solutions/uno.png'
import ScrollAnimation from 'react-animate-on-scroll';
const Index = memo(() => {
    return (
        <div className="company-container-two">
            <ScrollAnimation animateIn='fadeInLeft' className="picture">
                <img src={pic} alt="pic laptop 1" />
            </ScrollAnimation>

            <div className="text">
                <h2>{intl.get('solutions.section_two.title')} </h2>
                <p>{intl.get('solutions.section_two.paragraph_one')}</p>
                <p>{intl.get('solutions.section_two.paragraph_two')}</p>
            </div>
        </div>
    );
});

export default Index;