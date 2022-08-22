import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../../utils/consts';

import './auth.scss';

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    return (
        <div className='auth'>
            <h2 className='auth__title'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
            <form className='auth__form'>
                <input className='auth__form_input' placeholder='Введите ваш email...'></input>
                <input className='auth__form_input' placeholder='Введите ваш пароль...'></input>
            </form>
            <div className='auth__footer'>
                <div className='auth__footer_describe'>
                    {
                    isLogin ? 
                        <div>Нет аккаунта? <Link to={REGISTRATION_ROUTE}>Зарегистрируйся!</Link></div>
                    :
                        <div>Есть аккаунт? <Link to={LOGIN_ROUTE}>Войдите!</Link></div>
                    }
                </div>
                <button className='auth__footer_btn'>{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
            </div>
        </div>
    );
}

export default Auth;