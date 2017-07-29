import React from 'react';
import SVG from '../SVG';
import './index.css';

const Header = () => (
  <header className="header">
    <a
      className="logo"
      href="https://www.billin.net/"
      rel="noreferrer noopener"
      target="_blank"
    >
      <SVG id="billin-usage" />
    </a>
    <div className="title"><h2 >Billin code challenge</h2></div>
  </header>
);

export default Header;
