import React, {Component} from 'react';

import './header.scss';
import logIn from '../../icons/login.png';
import logOut from '../../icons/logout.png';
import fav from '../../icons/fav.png';
import basket from '../../icons/basket.png';
import { userLogout, userLogin } from '../../actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {

    render() {
        const {isAuth, userLogin, userLogout} = this.props;
        if (isAuth) {
            return (
                <div className="header">
                    <div className='header__logo'>MOBEST</div>
                    <div className='header__icons'>
                        <Link to='#' onClick={userLogout}>
                            <img src={logOut} alt='logout' />
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
        }

        return (
            <div className="header">
                <div className='header__logo'>MOBEST</div>
                <div className='header__icons'>
                    <Link to='#' onClick={userLogin}>
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
};

const mapStateToProps = ({userState: {isAuth}}) => {
    return {isAuth};
};

const mapDispatchToProps = (dispatch) => {
   return {
        userLogout: () => dispatch(userLogout()),
        userLogin: () => dispatch(userLogin())
   }; 
};

/*
    Использовать функцию connect и action updateUserState для прокидки стейта и изменения состояния log in/log out
*/

export default connect(mapStateToProps, mapDispatchToProps)(Header);