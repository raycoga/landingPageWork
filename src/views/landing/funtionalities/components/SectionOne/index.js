import React, { memo } from 'react';
import './funcOne.scss'
import imagelaptops from '../../../../../images/functionalities/BANNER_FUNCIONALIDADES.png'
import Like1 from '../../../../../images/functionalities/LIKE_FLOTANTES_1.png'
import Like2 from '../../../../../images/functionalities/LIKE_FLOTANTES_2.png'

const Index = memo(() => {
    return (
        <div className="functionalities-container-one">
            <img src={imagelaptops} alt="laptops" className='laptops' />
            <img src={Like1} alt="" className='likes' />
            <img src={Like2} alt="" className='likes' />
        </div>
    );
});

export default Index;