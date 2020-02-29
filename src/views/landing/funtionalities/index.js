import React, { memo, useState, useEffect } from 'react';
import './funtionalities.scss'
import Navbar from '../../../general_components/navbar'
import intl from 'react-intl-universal'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import SectionFour from './components/SectionFour'
import SectionFive from './components/SectionFive'
import SectionSix from './components/SectionSix'
import SectionSeven from './components/SectionSeven'
import SectionEight from './components/SectionEight'
import SectionNine from './components/SectionNine'
import SectionTen from './components/SectionTen'
import Footer from '../../../general_components/footer'
const Index = memo((props) => {
    const [initDone, setinitDone] = useState(false)
    const locales = {
        en: require('../../../lenguages/en.json'),
        es: require('../../../lenguages/es.json')
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

    return (
        <div className='container-functionalities'>
            <Navbar pathname={props.location.pathname} loadLenguage={loadLenguage} />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
            <SectionEight />
            <SectionNine />
            <SectionTen />
            <Footer />
        </div>
    );
});

export default Index;