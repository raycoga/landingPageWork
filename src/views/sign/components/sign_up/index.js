import React, { memo, useState, useEffect } from 'react';
import handleChange from '../../../../utilities/handleChange'
import { Link } from 'react-router-dom'
import Selector from '../../../../utilities/specialFormInputs/Selector';
import axios from 'axios'
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
    console.log(signUpForm)
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


    const handleSubmit = e => {
        e.preventDefault()
        Submit(signUpForm, 'up')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className='sign-input-form'>
                            <label> Full Name</label>
                            <input type="text" name='full_name' onChange={e => handleChange(e, signUpForm, setsignUpForm)} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className='sign-input-form'>
                            <label> Company Name</label>
                            <input type="text" name='company_name' onChange={e => handleChange(e, signUpForm, setsignUpForm)} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className='sign-input-form'>
                            <label> Job Title</label>
                            <input type="text" name='job_title' onChange={e => handleChange(e, signUpForm, setsignUpForm)} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className='sign-input-form'>
                            <label> Gender</label>
                            <Selector signUpForm={signUpForm} setsignUpForm={setsignUpForm} itemsSelector={genderSelector} atribute='gender' classNameContainer='select-div' />

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className='sign-input-form'>
                            <label>Time Zone</label>
                            <Selector signUpForm={signUpForm} setsignUpForm={setsignUpForm} itemsSelector={timeZones} atribute='time_zone' classNameContainer='select-div' />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className='sign-input-form'>
                            <label>Account Type</label>
                            <Selector signUpForm={signUpForm} setsignUpForm={setsignUpForm} itemsSelector={userType} atribute='account_type' classNameContainer='select-div' />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className='sign-input-form'>
                            <label> E-mail</label>
                            <input type="email" name='email' onChange={e => handleChange(e, signUpForm, setsignUpForm)} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className='sign-input-form'>
                            <label> Password</label>
                            <input type="password" name='password' onChange={e => handleChange(e, signUpForm, setsignUpForm)} />
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
                        <button type='submit' >Sign Up</button>
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

