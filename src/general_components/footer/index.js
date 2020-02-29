import React from 'react';
import './footer.scss'
import { Link } from 'react-router-dom'
import fb from '../../images/fb_foot.png'
import tw from '../../images/tw_foot.png'
import ig from '../../images/ig_foot.png'
import intl from 'react-intl-universal'
const Index = () => {
    return (
        <div className='footer'>
            <div className="layout">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="row pt-4 ">
                                <div className="col-12 size left text-justify">
                                    {intl.get('paragraph_three')}
                                </div>

                            </div>
                            <div className="row pt-lg-2 pb-lg-4 pt-md-0 pb-md-0">
                                <div className="col-12 size2 left">
                                    {intl.get('copy')}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="row align-items-end pt-4 ">
                                <div className="col-12 size right">
                                    <div className="img-container">
                                        <ul>
                                            <li><img src={fb} alt="facebook account" /></li>
                                            <li><img src={tw} alt="twitter account" /></li>
                                            <li><img src={ig} alt="instagram account" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-2 pb-4">
                                <div className="col-12 size2 right">
                                    <div className="links">
                                        <ul>
                                            <li>
                                                <Link to='/terms_and_condition'>
                                                    {intl.get('list_Three.cero')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/privacity_policity'>
                                                    {intl.get('list_Three.one')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/child_protection'>
                                                    {intl.get('list_Three.two')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/contact'>
                                                    {intl.get('list_Three.three')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/contact'>
                                                    {intl.get('list_Three.four')}
                                                </Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;