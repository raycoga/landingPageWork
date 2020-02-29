import React, { memo } from 'react';
import './funcSeven.scss'
import intl from 'react-intl-universal'
import pic from '../../../../../images/functionalities/FUNCIONALIDADES_6.png'
import ScrollAnimation from 'react-animate-on-scroll';
const Index = memo(() => {
    return (
        <div className="functionalities-container-seven">
            <div className="text">
                <h2>{intl.get('funtionalities.section_seven.title')} </h2>
                <p>{intl.get('funtionalities.section_seven.paragraph_one')}</p>
            </div>
            <ScrollAnimation animateIn='fadeIn' className="picture">
                <img src={pic} alt="pic laptop 1" />
            </ScrollAnimation>
        </div>
    );
});

export default Index;