import React from 'react';
import updateUserState from '../../reducers/updateUserState';

import './header.scss';
import logIn from '../../icons/login.png';
import fav from '../../icons/fav.png';
import basket from '../../icons/basket.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className='header__logo'>MOBEST</div>
            <div className='header__icons'>
                <Link to='#'>
                    <img src={logIn} alt='login' />
                </Link>
                <Link to='#'>
                    <img src={fav} alt='heart' />
                </Link>
                <Link to='#'>
                    <img src={basket} alt='basket' />
                </Link>
            </div>
        </div>
    );
};

/*
    Использовать функцию connect и action updateUserState для прокидки стейта и изменения состояния log in/log out
*/

export default Header;