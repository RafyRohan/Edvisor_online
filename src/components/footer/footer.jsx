import React from 'react';
import './footerStyle.css';

function Footer() {
    return (
        <footer className="footer  py-0 bg-light bottom-0 " >
            <div className="container  justify-content-between pt-3 ">
                <div className="footer-links  ">
                    <a href="#" className="me-3" style={{ fontWeight: "400", fontStyle: "Inter, sans-serif" }}>Home</a>
                    <a href="#" className="me-3">Resources</a>
                    <a href="#">Help</a>
                </div>
                <div className="footer-copy">
                    <span>Copyrights @ Edviser.online</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
