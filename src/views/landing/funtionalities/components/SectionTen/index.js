import React, { memo } from 'react';
import './funcTen.scss'
import intl from 'react-intl-universal'
import pic from '../../../../../images/functionalities/FUNCIONALIDADES_9.png'
import ScrollAnimation from 'react-animate-on-scroll';
const Index = memo(() => {
    return (
        <div className="functionalities-container-ten">
            <ScrollAnimation animateIn='fadeInLeft' className="picture">
                <img src={pic} alt="pic laptop 1" />
            </ScrollAnimation>

            <div className="text">
                <h2>{intl.get('funtionalities.section_ten.title')} </h2>
                <p>{intl.get('funtionalities.section_ten.paragraph_one')}</p>
                <p>{intl.get('funtionalities.section_ten.paragraph_two')}</p>
            </div>
        </div>
    );
});

export default Index;