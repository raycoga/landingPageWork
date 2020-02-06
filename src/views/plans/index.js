import React, { memo, useState, useEffect } from 'react';
import './funtionalities.scss'
import Navbar from '../../general_components/navbar'
import intl from 'react-intl-universal'
const Index = memo((props) => {
    const [initDone, setinitDone] = useState(false)
    const locales = {
        en: require('../../lenguages/en.json'),
        es: require('../../lenguages/es.json')
    }

    const actualLeng = localStorage.getItem('lan') || 'en'

    const loadLenguage = (lan) => {
        localStorage.setItem('lan', lan);
        setinitDone(false)
        setinitDone('false')
        intl.init({ currentLocale: lan, locales }).then(() => {
            setinitDone(true)
        })
    }

    useEffect(() => {
        loadLenguage(actualLeng)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!initDone) {
        return (
            <div className="loader">
                <div className="lds-ripple"><div></div><div></div></div>
            </div>
        )
    }

    return (
        <div className='container-functionalities'>
            <Navbar pathname={props.location.pathname} loadLenguage={loadLenguage} />
        </div>
    );
});

export default Index;