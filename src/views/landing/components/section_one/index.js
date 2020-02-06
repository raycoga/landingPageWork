import React from 'react';
import { Link } from 'react-router-dom'
import './one.scss'
import Shape from '../../../../images/shapeOne.png'
import Logo from '../../../../images/white_logo.png'
import ajo from '../../../../images/redajo.png'
import fb from '../../../../images/redfb.png'
import ig from '../../../../images/redig.png'
import lk from '../../../../images/redlk.png'
import tw from '../../../../images/redtw.png'
import fb2 from '../../../../images/redfb2.png'
import ig2 from '../../../../images/redig2.png'
import lk2 from '../../../../images/redlk2.png'
import tw2 from '../../../../images/redtw2.png'
import monitor from '../../../../images/monitorOne.png'
import intl from 'react-intl-universal'
const Index = () => {

    return (
        <div className="container-one">
            <img src={Shape} className="shape" alt="shape" />
            <div className="intern-container">
                <div className="left-side">
                    <img src={Logo} alt="white logo" />
                    <h6>{intl.get('title_one')}</h6>
                    <p> {intl.get('sub_title')}</p>
                    <Link to='/sign_in'><button>{intl.get('button_two')}</button></Link>
                </div>
                <div className="right-side">
                    <img src={ajo} className="floating-circles" alt="white logo" />
                    <img src={ig} className="floating-circles" alt="white logo" />
                    <img src={fb} className="floating-circles" alt="white logo" />
                    <img src={lk} className="floating-circles" alt="white logo" />
                    <img src={tw} className="floating-circles" alt="white logo" />
                    <img src={ig2} className="floating-circles" alt="white logo" />
                    <img src={fb2} className="floating-circles" alt="white logo" />
                    <img src={lk2} className="floating-circles" alt="white logo" />
                    <img src={tw2} className="floating-circles" alt="white logo" />
                    <img src={monitor} className="screen" alt="white logo" />


                </div>
            </div>
        </div>
    );
};

export default Index;