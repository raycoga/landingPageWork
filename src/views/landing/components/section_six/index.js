import React, { memo } from 'react';
import './six.scss'
import Form from './form'
const index = memo(() => {
    const Submit = (values) => {
        console.log(values)
    }
    return (
        <div className="message-container">
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
                                                <h2 style={{ fontWeight: 100 }}>Send a Message</h2>
                                            </div>
                                            <div className="col-12">
                                                <Form Submit={Submit} />
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
    );
});

export default index;