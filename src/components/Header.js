import React from 'react';
import { smoothScrollTo } from '../utils/scrollUtils';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <img
                            src="/pink-glove-logo.png"
                            alt="Pink Gloves Logo"
                            className="logo-icon"
                        />
                        <div className="logo-text">PINK <span>GLOVES</span></div>
                    </div>
                    <nav>
                        <ul className="nav-links">
                            <li><a href="#home" onClick={smoothScrollTo}>Home</a></li>
                            <li><a href="#services" onClick={smoothScrollTo}>Services</a></li>
                            <li><a href="#about" onClick={smoothScrollTo}>About</a></li>
                            <li><a href="#contact" onClick={smoothScrollTo}>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header; 