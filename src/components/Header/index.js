import React from 'react';
import { NavLink } from 'react-router-dom';
import SVG from '../SVG';
import './index.css';

const Header = () => (
  <header className="header">
    <NavLink className="logo" to="/">
      <SVG id="billin-usage" />
    </NavLink>
    <div className="titleHeader"><h2 >Billin code challenge</h2></div>
  </header>
);

export default Header;
