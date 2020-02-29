import React, { memo } from 'react';
import './funcNine.scss'
import intl from 'react-intl-universal'
import pic from '../../../../../images/functionalities/FUNCIONALIDADES_8.png'
import ScrollAnimation from 'react-animate-on-scroll';
const Index = memo(() => {
    return (
        <div className="functionalities-container-nine">
            <div className="text">
                <h2>{intl.get('funtionalities.section_nine.title')} </h2>
                <p>{intl.get('funtionalities.section_nine.paragraph_one')}</p>
            </div>
            <ScrollAnimation animateIn='fadeInRight' className="picture">
                <img src={pic} alt="pic laptop 1" />
            </ScrollAnimation>


        </div>
    );
});

export default Index;