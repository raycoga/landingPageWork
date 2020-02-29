import React, { memo } from 'react';
import './checkEmail.scss'
import axios from 'axios'
import logo from './images/logo.png'
import fb from './images/redfb.png'
import ig from './images/redig.png'
import lk from './images/redlk.png'
import tw from './images/redtw.png'
import swal from 'sweetalert2'
import Navbar from '../../navbar'
const index = memo((props) => {
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
        <div className="container-verification">
            <Navbar pathname={props.location.pathname} />
            <img className="logo1" src={logo} alt="logo" />
            <h3>Check your email</h3>

            <p style={{ textAlign: 'center' }}>To activate your account please check your email</p>
            <p style={{ textAlign: 'center' }}>If you still have not received an email?</p>
            <button onClick={() => resendMail(props.history.location.state.user, props.history.location.state.token)}>
                <b style={{ color: 'white' }}>Send Again</b>
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