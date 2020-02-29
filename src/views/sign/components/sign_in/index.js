import React, { memo, useState, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom'
import handleChange from '../../../../utilities/handleChange'
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert2'
import axios from 'axios'
import './sign_in.scss'
const Index = memo(({ Submit }) => {


    const validator = useRef(new SimpleReactValidator({
        element: message => <div>{message}</div>,
        validators: {
            password: {  // name the rule
                message: 'The password requires at least 1 lower case, 1 upper case, 1 numeric, 1 non-word, no whitespace and minimum 8 caracters.',
                rule: (val, params, validator) => {
                    return validator.helpers.testRegex(val, /^(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,30}$/g) && params.indexOf(val) === -1
                },
            }
        }

    }));
    const [, forceUpdate] = useState();

    const [signInForm, setsignInForm] = useState({
        email: '',
        password: ''
    })
    const [userData, setuserData] = useState({ user: '', token: '' })

    const handleSubmit = e => {
        e.preventDefault()

        if (validator.current.allValid()) {

            Submit(signInForm, 'in')
        } else {

            forceUpdate(1)
            validator.current.showMessages();

        }
    }


    const [newPass, setnewPass] = useState(false)
    /* MODAL */
    const buttonsSwalModalStyle = swal.mixin({
        customClass: {
            confirmButton: 'confirm-button',
            cancelButton: 'cancel-button'
        },
        buttonsStyling: false
    })
    const forgotPasswordModal = () => {
        buttonsSwalModalStyle.fire({
            title: 'Submit your mail',
            text: 'An email will be send to you',
            input: 'email',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Send',
            showLoaderOnConfirm: true,
            preConfirm: (email) => {

                axios.post(' /password/sendEmail ', { email: email })
                    .then(response => {
                        console.log(response)
                        if (response.data.ok) {
                            setuserData({
                                user: response.data.user,
                                token: response.data.token
                            })
                            setnewPass(!newPass)
                        } else if (response.data.error === 'User not found') {
                            buttonsSwalModalStyle.fire({
                                title: 'Error!',
                                text: `${response.data.error}`,
                            })
                        } else {
                            forgotPasswordModal()
                        }

                    })
            },
            allowOutsideClick: () => !swal.isLoading()
        })

    }


    if (newPass) return <Redirect to={{ pathname: '/email_send', state: userData }} />

    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xs-12 col-md-7 col-lg-7">
                        <div className='sign-input-form'>
                            <label><i className="fas fa-envelope-open"></i> E-mail</label>
                            <input type="text" name='email' onChange={e => handleChange(e, signInForm, setsignInForm)} />
                            {validator.current.message('email', signInForm.email, 'required|email')}
                        </div>
                    </div>

                </div>
                <div className="row justify-content-center">
                    <div className="col-xs-12 col-md-7 col-lg-7">
                        <div className='sign-input-form'>
                            <label><i className="fas fa-lock"></i> Password</label>
                            <input type="password" name='password' onChange={e => handleChange(e, signInForm, setsignInForm)} />
                            {validator.current.message('password', signInForm.password, `required|password`)}
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xs-12 col-md-7 col-lg-7 text-center">
                        <button type='submit' className='signIn'>Sign In</button>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <p>You still do not have an account? <Link to='/sign_up'>Sign up </Link></p>
                        <p onClick={forgotPasswordModal} className='forgot-pass'>Forgot your password?  </p>
                    </div>
                </div>

            </div>
        </form>
    );
});

export default Index;