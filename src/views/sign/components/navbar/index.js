import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../../../images/color_logo.png'
import BurgerMenu from '../../../../general_components/burgerMenu'
const index = memo(({ pathname }) => {
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




            <div className={`link-container ${toggle}`}>
                <div class="collapse" id="collapseExample">
                    <ul>
                        <li><Link to='/functionalities'>Functionalities</Link></li>
                        <li><Link to='/solutions'>Solutions</Link></li>
                        <li><Link to='/plans'>Plans</Link></li>
                        <li><Link to='/company'>Company</Link></li>
                        <li>
                            {pathname === '/sign_in' ?
                                <button>Sign in</button> :
                                <Link to='/sign_in'><button>Sign in</button></Link>}

                        </li>
                    </ul>
                </div>

            </div>

        </div>
    );
});

export default index;