import React from 'react';
import './five.scss'
import Phones from '../../../../images/3phones.png'
import Playstore from '../../../../images/playstore.png'
import intl from 'react-intl-universal'
const index = () => {
    return (
        <div className="container-five">
            <h2>{intl.get('title_six')}</h2>
            <p className="paragraph">
                {intl.get('subtitle_four')}
            </p>
            <p className="paragraph">{intl.get('subtitle_five')}</p>
            <div className="circle"></div>
            <div className="circle2"></div>
            <img src={Phones} alt="phones" />
            <img src={Playstore} className="button" alt="phones" />
            <i><p>{intl.get('subtitle_six')}</p></i>

        </div>
    );
};

export default index;