import React, { memo, useState, useEffect, useRef } from 'react';
import handleChange from '../../../../utilities/handleChange'
import { Link } from 'react-router-dom'
import Selector from '../../../../utilities/specialFormInputs/Selector';
import axios from 'axios'
import SimpleReactValidator from 'simple-react-validator';

const Index = memo(({ Submit }) => {
    const [signUpForm, setsignUpForm] = useState({
        full_name: '',
        company_name: '',
        job_title: '',
        gender: '',
        time_zone: '',
        account_type: '',
        email: '',
        password: '',
        condition_terms: false
    })

    const genderSelector = [{ _id: 'Male', option: 'Male' }, { _id: 'Female', option: 'Female' }]

    const [userType, setuserType] = useState([])
    useEffect(() => {
        axios.get('/database/account/all')
            .then(response => {
                if (response.data.ok) {
                    setuserType(response.data.account_type)
                } else {
                    console.log(response.data.error)
                }

            })
    }, [])

    const [timeZones, settimeZones] = useState([])
    useEffect(() => {
        axios.get('/database/timezone/all')
            .then(response => {
                if (response.data.ok) {
                    settimeZones(response.data.time_zone)
                } else {
                    console.log(response.data.error)
                }

            })
    }, [])

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

    const handleSubmit = e => {
        e.preventDefault()
        if (validator.current.allValid()) {
            Submit(signUpForm, 'up')
        } else {
            forceUpdate(1)
            validator.current.showMessages();

        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className='sign-input-form'>
                            <label><i className="fas fa-user"></i> Full Name</label>
                            <input type="text" name='full_name' onChange={e => handleChange(e, signUpForm, setsignUpForm)} />
                            {validator.current.message('full name', signUpForm.full_name, 'required|alpha_space|min:2|max:25')}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className='sign-input-form'>
                            <label><i className="fas fa-building"></i> Company Name</label>
                            <input type="text" name='company_name' onChange={e => handleChange(e, signUpForm, setsignUpForm)} />
                            {validator.current.message('company name', signUpForm.company_name, 'required|alpha_num_space|min:2|max:25')}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className='sign-input-form'>
                            <label><i className="fas fa-briefcase"></i> Job Title</label>
                            <input type="text" name='job_title' onChange={e => handleChange(e, signUpForm, setsignUpForm)} />
                            {validator.current.message('job title', signUpForm.job_title, 'required|alpha_num_space|min:2|max:25')}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className='sign-input-form'>
                            <label><i className="fas fa-venus-mars"></i> Gender</label>
                            <Selector signUpForm={signUpForm} setsignUpForm={setsignUpForm} itemsSelector={genderSelector} atribute='gender' classNameContainer='select-div' />
                            {validator.current.message('Gender', signUpForm.gender, 'required')}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className='sign-input-form'>
                            <label><i className="fas fa-globe"></i> Time Zone</label>
                            <Selector signUpForm={signUpForm} setsignUpForm={setsignUpForm} itemsSelector={timeZones} atribute='time_zone' classNameContainer='select-div' />
                            {validator.current.message('time zone', signUpForm.time_zone, 'required')}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className='sign-input-form'>
                            <label><i className="fas fa-user-tag"></i> Account Type</label>
                            <Selector signUpForm={signUpForm} setsignUpForm={setsignUpForm} itemsSelector={userType} atribute='account_type' classNameContainer='select-div' />
                            {validator.current.message('account type', signUpForm.account_type, 'required')}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className='sign-input-form'>
                            <label><i className="fas fa-envelope-open"></i> E-mail</label>
                            <input type="email" name='email' onChange={e => handleChange(e, signUpForm, setsignUpForm)} />
                            {validator.current.message('email', signUpForm.email, 'required|email')}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className='sign-input-form'>
                            <label><i className="fas fa-lock"></i> Password</label>
                            <input type="password" name='password' onChange={e => handleChange(e, signUpForm, setsignUpForm)} />
                            {validator.current.message('password', signUpForm.password, `required|password`)}
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-xs-12 mt-4 ">
                        <div className="radio-input">
                            <label
                                className="radio-form"
                                onClick={() => {
                                    if (signUpForm.condition_terms) {
                                        setsignUpForm({ ...signUpForm, condition_terms: false });
                                    } else {
                                        setsignUpForm({ ...signUpForm, condition_terms: true });
                                    }
                                }}
                            >
                                <span
                                    className={`radio-form-input ${signUpForm.condition_terms &&
                                        "active"}`}
                                />
                                <label>
                                    I agree with the{" "}
                                    <a href="/">Terms and conditions.</a>{" "}
                                </label>
                            </label>
                        </div>

                    </div>



                    {/* 
                    <div className="col-lg-12 mt-4">
                        <input type="checkbox" name='condition_terms' onChange={e => handleChange(e, signUpForm, setsignUpForm)} /> I agree with the terms and coditions
                    </div> */}


                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-xs-12 text-right">
                        <Link to='/'><button type='button'>Cancel</button> </Link>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12 text-left">
                        {signUpForm.condition_terms ?
                            <button type='submit' >Sign Up</button> : <button type='button' disabled >Sign Up</button>}

                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <p>Already member? <Link to='/sign_in'>Sign in </Link></p>
                </div>
            </div>
        </form>
    );
});

export default Index;

