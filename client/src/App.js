import './App.scss';
import React from 'react';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
