import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-left">
                    <p>&copy; {new Date().getFullYear()} KeonhoChu. All rights reserved.</p>
                </div>
                <div className="footer-right">
                    <a href="https://github.com/KeonhoChu" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
