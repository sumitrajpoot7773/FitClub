import React from 'react';
import './Footer.css';

import GitHub from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

function Footer() {
  return (
    <div className='footer-container'>
        <hr />
        <div className="footer">
            <div className="social-links">
                <img src={GitHub} alt="GitHub" />
                <img src={Instagram} alt="Instagram" />
                <img src={LinkedIn} alt="LinkedIn" />
            </div>
            <div className="logo-f">
                <img src={Logo} alt="Logo" />
            </div>
        </div>

        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer;
