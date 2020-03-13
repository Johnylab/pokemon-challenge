import React from 'react';
import './AppHeader.css';
import logo from './logo.svg';

const AppHeader = ({ children }) => (
  <header className="App-header">
    <img src={logo} height="40" className="App-logo" alt="logo" />
    <nav className="App-header-nav">
      { children }
    </nav>
  </header>
);

export default AppHeader;
