import React, { memo, useState, useEffect } from 'react';

/* Imported Styles */
import './landing.scss'
/* Imported Components */
import Navbar from '../../general_components/navbar'
import SeccionOne from './components/section_one'
import SeccionTwo from './components/section_two'
import SeccionThree from './components/section_three'
import SeccionFour from './components/section_four'
import SeccionFive from './components/section_five'
import SeccionSix from './components/section_six'
import Footer from '../../general_components/footer'
/* Imported Dependencies */
import intl from 'react-intl-universal'


const Index = memo((props) => {
    /* LENGUAGE FUNCTION */
    const [initDone, setinitDone] = useState(false)
    const locales = {
        en: require('../../lenguages/en.json'),
        es: require('../../lenguages/es.json')
    }

    const actualLeng = localStorage.getItem('lan') || 'en'

    const loadLenguage = (lan) => {
        localStorage.setItem('lan', lan);
        setinitDone(false)

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
    /*END OF LENGUAGE FUNCTION */
    return (
        <div className="container-landing">
            <Navbar pathname={props.location.pathname} loadLenguage={loadLenguage} />
            <SeccionOne />
            <SeccionTwo />
            <SeccionThree />
            <SeccionFour />
            <SeccionFive />
            <SeccionSix />
            <Footer />
        </div>);
});

export default Index;