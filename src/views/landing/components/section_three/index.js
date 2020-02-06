import React from 'react';
import './three.scss'
import Laptop from '../../../../images/shadowLaptop.png'
import intl from 'react-intl-universal'
const Index = () => {
    return (
        <div className="container-three">
            <div className="text">
                <h2>{intl.get('tittle_four')} </h2>
                <p>{intl.get('paragraph_one')}</p>
                <p>{intl.get('paragraph_two')}</p>
            </div>
            <div id='leng' className="lengua">
                <div className="text-l">
                    <label>{intl.get('tittle_five')}</label>
                    <p>{intl.get('subtitle_three')} </p>
                </div>
            </div>
            <img src={Laptop} alt="laptop" />

        </div>
    );
};

export default Index;