import React, { memo } from 'react';
import './funcSix.scss'
import intl from 'react-intl-universal'
import pic from '../../../../../images/functionalities/FUNCIONALIDADES_5.png'
import ScrollAnimation from 'react-animate-on-scroll';
const Index = memo(() => {
    return (
        <div className="functionalities-container-six">
            <ScrollAnimation animateIn='fadeInLeft' className="picture">
                <img src={pic} alt="pic laptop 1" />
            </ScrollAnimation>

            <div className="text">
                <h2>{intl.get('funtionalities.section_six.title')} </h2>
                <p>{intl.get('funtionalities.section_six.paragraph_one')}</p>
                <p>{intl.get('funtionalities.section_six.paragraph_two')}</p>
            </div>
        </div>
    );
});

export default Index;