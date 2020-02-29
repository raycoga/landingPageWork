import React, { memo, useState, useRef } from 'react';
import handleChange from '../../../../utilities/handleChange'
import SimpleReactValidator from 'simple-react-validator';

const Index = memo(({ Submit }) => {
    const validator = useRef(new SimpleReactValidator({
        element: message => <div>{message}</div>,
        messages: {
            in: 'The passwords must be the same',
        },
        validators: {
            password: {  // name the rule
                message: 'The password requires at least 1 lower case, 1 upper case, 1 numeric, 1 non-word, no whitespace and minimum 8 caracters.',
                rule: (val, params, validator) => {
                    return validator.helpers.testRegex(val, /^(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{7,30}$/g) && params.indexOf(val) === -1
                },
            }
        }
    }));
    const [, forceUpdate] = useState();


    const [changePassForm, setchangePassForm] = useState({
        email: '',
        password: '',
        password_confirmation: ''
    })

    const handleSubmit = e => {

        e.preventDefault()
        if (validator.current.allValid()) {
            Submit(changePassForm, 'repass')
        } else {
            forceUpdate(1)
            validator.current.showMessages();

        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xs-12 col-md-7 col-lg-7">
                        <div className='sign-input-form'>
                            <label><i className="fas fa-envelope-open"></i>  E-mail</label>
                            <input type="text" name='email' value={changePassForm.email} onChange={e => { handleChange(e, changePassForm, setchangePassForm) }} />
                            {validator.current.message('email', changePassForm.email, 'required|email')}
                        </div>
                    </div>

                </div>
                <div className="row justify-content-center">
                    <div className="col-xs-12 col-md-7 col-lg-7">
                        <div className='sign-input-form'>
                            <label><i className="fas fa-lock"></i> Password</label>
                            <input type="password" name='password' onChange={e => { handleChange(e, changePassForm, setchangePassForm) }} />
                            {validator.current.message('password', changePassForm.password, 'required|password')}
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xs-12 col-md-7 col-lg-7">
                        <div className='sign-input-form'>
                            <label><i className="fas fa-lock"></i> Repeat Password</label>
                            <input type="password" name='password_confirmation' onChange={e => { handleChange(e, changePassForm, setchangePassForm) }} />
                            {validator.current.message('password_confirmation', changePassForm.password_confirmation, `required|in:${changePassForm.password}`)}
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-xs-12 col-md-7 col-lg-7 text-center">
                        <button type='submit' className='signIn'>Change Password</button>
                    </div>
                </div>

            </div>
        </form>
    );
});

export default Index;