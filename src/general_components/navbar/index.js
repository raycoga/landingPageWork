import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../images/color_logo.png'
import BurgerMenu from '../burgerMenu'
import lenguage from '../../images/lenguage.png'
import './navbar.scss'
import intl from 'react-intl-universal'
const Index = (props) => {

    const { pathname, loadLenguage } = props

    /* the function and the state is needed to make the toogle function of the burger menu */
    const [toggle, settoggle] = useState('')
    const change = () => {
        if (toggle === '') { settoggle('change') }
        else { settoggle('') }
    }
    /* Burger menu function end */

    return (
        <div className='sign-navbar'>
            <div className='image-container'>
                <img src={Logo} alt='ajo color logo' />
                <BurgerMenu toggle={toggle} change={change} />
            </div>

            <div className='link-container-large' >
                <ul>
                    <li><Link to='/functionalities'>  {intl.get('list_one.cero')}</Link></li>
                    <li><Link to='/plans'>{intl.get('list_one.two')}</Link></li>
                    <li><Link to='/company'>{intl.get('list_one.three')}</Link></li>
                    <li><Link to='/contact'>{intl.get('list_one.four')}</Link></li>
                    <li className='changeLenguage'>
                        <img src={lenguage} style={{ height: '20px', marginRight: '10px' }} alt="lenguage" /><i className="fas fa-caret-down"></i>
                        <div className="container-selector">
                            <ul>
                                <li onClick={(_) => loadLenguage('es')}>Español</li>
                                <li onClick={(_) => loadLenguage('en')}>Ingles</li>
                            </ul>
                        </div>
                    </li>
                    {pathname !== '/' && <li><Link to='/'>{intl.get('list_one.five')}</Link></li>}
                    <li>
                        {pathname === '/sign_in' ?
                            <button>{intl.get('button_one')}</button> :
                            <Link to='/sign_in'><button>{intl.get('button_one')}</button></Link>}

                    </li>
                </ul>
            </div>


            <div className={`link-container ${toggle}`}>
                <div className="collapse" id="collapseExample">
                    <ul>
                        <li><Link to='/functionalities'>  {intl.get('list_one.cero')}</Link></li>
                        <li><Link to='/solutions'>{intl.get('list_one.two')}</Link></li>
                        <li><Link to='/plans'>{intl.get('list_one.three')}</Link></li>
                        <li><Link to='/company'>{intl.get('list_one.four')}</Link></li>
                        <li className='responsive'>
                            <img src={lenguage} style={{ height: '20px', marginRight: '10px' }} alt="lenguage" /><i className="fas fa-caret-right"></i>
                            <div className="container-selector-responsive">
                                <ul>
                                    <li onClick={(_) => loadLenguage('es')}>Español</li>
                                    <li onClick={(_) => loadLenguage('en')}>Ingles</li>
                                </ul>
                            </div>
                        </li>
                        {pathname !== undefined && <li><Link to='/'>{intl.get('list_one.five')}</Link></li>}
                        <li>
                            {pathname === '/sign_in' ?
                                <button>{intl.get('button_one')}</button> :
                                <Link to='/sign_in'><button>{intl.get('button_one')}</button></Link>}

                        </li>
                    </ul>
                </div>

            </div>

        </div>
    );
}

export default Index;