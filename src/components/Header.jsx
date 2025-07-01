import React from 'react';
import { useTheme } from '../context/ThemeContext';
import logoUrl from '../assets/tradingLogo.png'; // Make sure path is correct

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="logo">
        <img src={logoUrl} alt="ProTrade Logo" />
        <h1>ProTrade</h1>
      </div>
      <div className="theme-toggle">
        <label>
          <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
          <span className="slider"></span>
        </label>
      </div>
    </header>
  );
};

export default Header;