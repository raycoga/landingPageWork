import React, { memo, Fragment, useState,useEffect } from 'react';
/* Routing Dependencies */
import { Redirect } from 'react-router-dom'
/* Import style */
import './sign.scss'
import Logo from '../../images/white_logo.png'
/* Import Components */
import NavBar from '../../general_components/navbar'
import SignIn from './components/sign_in'
import SignUp from './components/sign_up'
import ChangePassword from './components/newPassword'
/* Import Dependencies */
import intl from 'react-intl-universal'


import axios from 'axios'
const Index = memo((props) => {
    const [signUp, setsignUp] = useState(false)
    const [signIn, setsignIn] = useState(false)
    const [ChangePass, setChangePass] = useState(false)
    const [userData, setuserData] = useState({ user: '', token: '' })

    const Submit = (values, type) => {
        switch (type) {
            case 'up':
                axios.post('/auth/signup', values)
                    .then(response => {
                        if (response.data.ok) {
                            setuserData({
                                user: response.data.user,
                                token: response.data.token
                            })
                            setsignUp(!signUp)
                        } else {
                            console.log(response.data.error)
                        }

                    })
                break;
            case 'repass':
                axios.post('/password/newPassword ', values)
                    .then(response => {
                        if (response.data.ok) {
                            setChangePass(!ChangePass)
                        } else {
                            console.log(response.data.error)
                        }

                    })
                break;
            default:
                axios.post('/auth/signIn', values)
                    .then(response => {
                        if (response.data.ok) {
                            setsignIn(!signIn)
                        } else {
                            console.log(response.data.error)
                        }

                    })
                break;
        }

    }
/* LENGUAGE CHANGE FUNCTION */
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
/* END LENGUAGE CHANGE FUNCTION */

    if (signUp) return <Redirect to={{
        pathname: '/activate_account_email_send',
        state: userData
    }} />
    if (ChangePass) return <Redirect to={{
        pathname: '/',
    }} />
    if (signIn) return <Redirect to='/' />


    return (
        <Fragment>
            <NavBar pathname={props.location.pathname} loadLenguage={loadLenguage} />
            <div className="sign-container">
                <div className="layout">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 p-0"></div>
                            <div className="col-md-6 col-lg-6 col-xs-12 p-0">
                                <div className="form-side">
                                    <div className="form-container">
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <div className="col-12 text-center">
                                                    <img src={Logo} className="white-logo" alt="Ajo social logo" />
                                                </div>
                                                <div className="col-12">
                                                    {props.location.pathname === '/sign_in' && <SignIn Submit={Submit} />}
                                                    {props.location.pathname === '/sign_up' && <SignUp Submit={Submit} />}
                                                    {props.location.pathname === '/change_password' && <ChangePassword Submit={Submit} />}
                                                </div>



                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    );
});

export default Index;