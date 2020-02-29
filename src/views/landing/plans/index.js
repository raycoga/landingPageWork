import React, { memo, useEffect, useState } from 'react';
import './plans.scss'
import axios from 'axios'

import fb from './images/redfb.png'
import ig from './images/redig.png'
import lk from './images/redlk.png'
import tw from './images/redtw.png'
import swal from 'sweetalert2'
import Navbar from '../../../general_components/navbar'
/* Imported Dependencies */
import intl from 'react-intl-universal'

const index = memo((props) => {
    /* LENGUAGE FUNCTION */
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
    /*END OF LENGUAGE FUNCTION */
    const buttonsSwalModalStyle = swal.mixin({
        buttonsStyling: false
    })

    const resendMail = (user, token) => {
        let object = {
            user: user, token: token
        }
        axios.post('/auth/resend', object)
            .then(response => {
                if (response.data.ok) {
                    buttonsSwalModalStyle.fire(
                        'Done!',
                        'An mail has been send to your email, please check it and verify your account!',
                        'success'
                    )
                } else {
                    swal.fire(
                        'Error!',
                        'And error has ocurred, please try again!',
                        'error'
                    )
                }

            })
    }

    return (
        <div className="container-plans">
            <Navbar pathname={props.location.pathname} loadLenguage={loadLenguage} />

            <h3>Your contribution is very important</h3>

            <p style={{ textAlign: 'center' }}>We have no stablished plans, we only have your help to continue with our <br /> operations. When you contribute you make a Programmer happy! </p>

            <button /* onClick={() => resendMail(props.history.location.state.user, props.history.location.state.token)} */>
                <b style={{ color: 'white' }}>Contribute</b>
            </button>
            <div className="networks">
                <a href="/" target="_blank">
                    <img className="logo" src={lk} alt="logolk" />
                </a>
                <a href="/" target="_blank">
                    <img className="logo" src={tw} alt="logotw" />
                </a>
                <a href="/" target="_blank">
                    <img className="logo" src={fb} alt="logofb" />
                </a>
                <a href="/" target="_blank">
                    <img className="logo" src={ig} alt="logoig" />
                </a>
            </div>
            <a className="page" href="/" target="_blank">
                URL www.ajosocial.com
        </a>
            <p> <i>Copyright &copy; 2020 AjoSocial, All rights reserved.</i>
            </p>
        </div>
    );
});

export default index;