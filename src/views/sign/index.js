import React, { memo, Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom'
import './sign.scss'
import NavBar from '../../general_components/navbar'
import SignIn from './components/sign_in'
import SignUp from './components/sign_up'
import Logo from '../../images/white_logo.png'
import axios from 'axios'
const Index = memo((props) => {

    const [signUp, setsignUp] = useState(false)
    const [signIn, setsignIn] = useState(false)
    const Submit = (values, type) => {
        if (type === 'up') {
            axios.post('/auth/signup', values)
                .then(response => {
                    if (response.data.ok) {
                        console.log(response, 'save')
                        setsignUp(!signUp)
                    } else {
                        console.log(response.data.error)
                    }

                })
        } else {
            axios.post('/auth/signIn', values)
                .then(response => {
                    if (response.data.ok) {
                        console.log(response, 'logged')
                        setsignIn(!signIn)
                    } else {
                        console.log(response.data.error)
                    }

                })
        }
    }
    if (signUp) return <Redirect to='/' />
    if (signIn) return <Redirect to='/' />
    console.log(props.location.pathname)
    return (
        <Fragment>
            <NavBar pathname={props.location.pathname} />
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