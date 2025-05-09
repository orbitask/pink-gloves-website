import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="copyright">
                        &copy; {currentYear} Pink Gloves Cleaning Services. All rights reserved.
                    </div>
                    {/* Temporarily hidden social links
                    <ul className="social-links">
                        <li>
                            <a href="#" aria-label="Facebook">
                                <span style={{ fontSize: '18px' }}>📱</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-label="Instagram">
                                <span style={{ fontSize: '18px' }}>📷</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-label="Twitter">
                                <span style={{ fontSize: '18px' }}>🐦</span>
                            </a>
                        </li>
                    </ul>
                    */}
                </div>
            </div>
        </footer>
    );
}

export default Footer; 