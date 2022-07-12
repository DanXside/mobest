import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Shop from './components/pages/Shop';
import { authRoutes, publicRoutes } from './routes';

const AppRouter = () => {
    const isAuth = false;
    return (
        <Routes>
            {
            isAuth && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component />} exact/>
            )}
            {
            publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component />} exact/>
            )}
            <Route path='*' element={<Shop />} />
        </Routes>
    );
};

export default AppRouter;