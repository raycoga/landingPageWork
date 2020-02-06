import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom'
import handleChange from '../../../../../utilities/handleChange'

const Index = memo(({ Submit }) => {
    const [signInForm, setsignInForm] = useState({
        email: '',
        message: ''
    })
    const handleSubmit = e => {
        e.preventDefault()
        Submit(signInForm, 'in')
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xs-12 col-md-7 col-lg-7">
                        <div className='message-input-form'>
                            <label> E-mail</label>
                            <input type="email" name='email' onChange={e => handleChange(e, signInForm, setsignInForm)} />
                        </div>
                    </div>

                </div>
                <div className="row justify-content-center">
                    <div className="col-xs-12 col-md-7 col-lg-7">
                        <div className='message-input-form'>
                            <label> Write your message</label>
                            <input type="text" name='message' onChange={e => handleChange(e, signInForm, setsignInForm)} />
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
                    </div>
                </div>

            </div>
        </form>
    );
});

export default Index;