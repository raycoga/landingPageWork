import React from 'react';
import './two.scss'
import Table from '../../../../images/tableTwo.png'
import intl from 'react-intl-universal'
const Index = () => {
    /*  window.onresize = function (event) {
         if (event.target.innerWidth > 992 && event.target.innerWidth < 1461) {
             document.getElementById('leng').style.top = `${(event.target.innerWidth - 670)}px`
         } else if (event.target.innerWidth > 1462) {
             document.getElementById('leng').style.top = '640px'
         }
 
     }; */
    return (
        <div className="container-two">
            <div className="left-container">
                <h2>{intl.get('tittle_two')}</h2>

                <ul>
                    <li>{intl.get('list_two.cero')}</li>
                    <li>{intl.get('list_two.one')}</li>
                    <li>{intl.get('list_two.two')}</li>
                    <li>{intl.get('list_two.three')}</li>
                    <li>{intl.get('list_two.four')}</li>
                    <li>{intl.get('list_two.five')}</li>
                    <li>{intl.get('list_two.six')}</li>
                    <li>{intl.get('list_two.seven')}</li>
                    <li>{intl.get('list_two.eight')}</li>
                    <li>{intl.get('list_two.nine')}</li>
                    <li>{intl.get('list_two.ten')}</li>
                    <li>{intl.get('list_two.eleven')}</li>
                </ul>




            </div>

            <div className="right-container">
                <img id='image' src={Table} alt="tablet" />
                <div id='leng' className="lengua">
                    <div className="text-l">
                        <label>{intl.get('tittle_three')} </label>
                        <p>{intl.get('subtitle_two')} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;