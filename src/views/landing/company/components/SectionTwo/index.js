import React, { memo, useState, useEffect } from 'react';
import './funcTwo.scss'
import intl from 'react-intl-universal'
import pic from '../../../../../images/company/TLF.png'
import alix from '../../../../../images/company/alix.png'
import jona from '../../../../../images/company/jona.png'
import eduardo from '../../../../../images/company/eduardo.png'
import gian from '../../../../../images/company/gian.png'

const Index = memo(() => {
    const [alixConfig, setAlixConfig] = useState({
        opacity: 0,
        translate: 0,
        scale1: 0,
        scale2: 0,
    })
    const [jonaConfig, setjonaConfig] = useState({
        opacity: 0,
        translate: 0,
        scale1: 0,
        scale2: 0,
    })
    const [eduConfig, seteduConfig] = useState({
        opacity: 0,
        translate: 0,
        scale1: 0,
        scale2: 0,
    })
    const [GianConfig, setGianConfig] = useState({
        opacity: 0,
        translate: 0,
        scale1: 0,
        scale2: 0,
    })
    const Animation = () => {
        window.onscroll = function () {
            console.log(window.pageYOffset)
            if (window.pageYOffset > 83 && window.pageYOffset < 177) {
                setAlixConfig({
                    ...alixConfig,
                    opacity: (window.pageYOffset - 80) / 100,
                    translate: (160 - window.pageYOffset),
                    scale1: (window.pageYOffset - 80) / 100,
                    scale2: (window.pageYOffset - 80) / 100,
                })
            }
            if (window.pageYOffset > 154 && window.pageYOffset < 244) {
                setjonaConfig({
                    ...jonaConfig,
                    opacity: (window.pageYOffset - 140) / 100,
                    translate: (200 - window.pageYOffset),
                    scale1: (window.pageYOffset - 140) / 100,
                    scale2: (window.pageYOffset - 140) / 100,
                })
            }
            if (window.pageYOffset > 213 && window.pageYOffset < 295) {
                seteduConfig({
                    ...eduConfig,
                    opacity: (window.pageYOffset - 200) / 100,
                    translate: (250 - window.pageYOffset),
                    scale1: (window.pageYOffset - 190) / 100,
                    scale2: (window.pageYOffset - 190) / 100,
                })
            }
            if (window.pageYOffset > 328 && window.pageYOffset < 387) {
                setGianConfig({
                    ...GianConfig,
                    opacity: (window.pageYOffset - 270) / 100,
                    translate: (390 - window.pageYOffset),
                    scale1: (window.pageYOffset - 290) / 100,
                    scale2: (window.pageYOffset - 290) / 100,
                })
            }
        };
    }
    useEffect(() => {
        Animation()
    })


    return (
        <div className="company-container-two">

            <div className="text">
                <h2>{intl.get('solutions.section_three.title')} </h2>
                <p>{intl.get('solutions.section_three.paragraph_one')}</p>
                <p>{intl.get('solutions.section_three.paragraph_two')}</p>

            </div>
            <div className="picture">
                <img className="cel" src={pic} alt="pic laptop 1" />


                <img className="pics"  src={alix} alt="alix" style={{ opacity: `${alixConfig.opacity}`, visibility: 'inherit', transform: `translate3d(0px, ${alixConfig.translate}px, 0px) scale(${alixConfig.scale1}, ${alixConfig.scale2})` }}/>
                <img className="pics" src={jona} alt="jonathan" style={{ opacity: `${jonaConfig.opacity}`, visibility: 'inherit', transform: `translate3d(0px, ${jonaConfig.translate}px, 0px) scale(${jonaConfig.scale1}, ${jonaConfig.scale2})` }} />
                <img className="pics" src={eduardo} alt="eduardo" style={{ opacity: `${eduConfig.opacity}`, visibility: 'inherit', transform: `translate3d(0px, ${eduConfig.translate}px, 0px) scale(${eduConfig.scale1}, ${eduConfig.scale2})` }} />
                <img className="pics" src={gian} alt="gian" style={{ opacity: `${GianConfig.opacity}`, visibility: 'inherit', transform: `translate3d(0px, ${GianConfig.translate}px, 0px) scale(${GianConfig.scale1}, ${GianConfig.scale2})` }}/>
            </div>


        </div>
    );
});

export default Index;