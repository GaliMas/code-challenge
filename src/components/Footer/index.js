import React from 'react';
import SVG from '../SVG';
import './index.css';

const Footer = () => (
  <footer className="footer">
    <a
      href="https://github.com/GaliMas"
      rel="noreferrer noopener"
      target="_blank"
    >
      <SVG id="github-usage" />
    </a>
    <a
      href="www.linkedin.com/in/jorge-galimas"
      rel="noreferrer noopener"
      target="_blank"
    >
      <SVG id="linkedin" />
    </a>
    <a
      href="https://twitter.com/sagins05"
      rel="noreferrer noopener"
      target="_blank"
    >
      <SVG id="twitter" />
    </a>
  </footer >
);

export default Footer;
