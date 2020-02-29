import React, { memo } from 'react';
import './funcFour.scss'
import intl from 'react-intl-universal'
import pic from '../../../../../images/functionalities/FUNCIONALIDADES_3.png'
import ScrollAnimation from 'react-animate-on-scroll';
const Index = memo(() => {
    return (
        <div className="functionalities-container-four">
            <ScrollAnimation animateIn='fadeInLeft' className="picture">
                <img src={pic} alt="pic laptop 1" />
            </ScrollAnimation>

            <div className="text">
                <h2>{intl.get('funtionalities.section_four.title')} </h2>
                <p>{intl.get('funtionalities.section_four.paragraph_one')}</p>
                <p>{intl.get('funtionalities.section_four.paragraph_two')}</p>
            </div>
        </div>
    );
});

export default Index;