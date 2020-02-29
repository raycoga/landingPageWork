import React, { memo } from 'react';
import './funcFive.scss'
import intl from 'react-intl-universal'
import pic from '../../../../../images/solutions/cuatro.png'
import ScrollAnimation from 'react-animate-on-scroll';
const Index = memo(() => {
    return (
        <div className="company-container-five">
            <div className="text">
                <h2>{intl.get('solutions.section_five.title')} </h2>
                <p>{intl.get('solutions.section_five.paragraph_one')}</p>
                <p>{intl.get('solutions.section_five.paragraph_two')}</p>
            </div>
            <ScrollAnimation animateIn='fadeInRight' className="picture">
                <img src={pic} alt="pic laptop 1" />
            </ScrollAnimation>


        </div>
    );
});

export default Index;