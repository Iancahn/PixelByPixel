import React from 'react';
// import Animation
// import { motion } from "framer-motion";
// import components

// import images
import footerLogo from '../img/pbp-2023-footerlogo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className='row'>
                    <div className="column-three">
                        <div>
                            <img src={footerLogo} alt="pixelbypixel footer logo" id="footer-logo" />
                            <p>Pixel By Pixel is a digital marketing agency that specializes in website design and development.</p>
                        </div>
                        <div>
                            <p className="copyright">© Copyright 2022 | All Rights Reserved | PixelByPixel</p>
                        </div>
                    </div>
                    <div className="column-three quick-links">
                        <div>
                            <h4><span style={{ textDecoration: "underline", paddingBottom: "0.5em" }}>Quick Links</span></h4>
                            <p>Home</p>
                            <p>Month To Month</p>
                            <p>Website Design</p>
                            <p>Graphic Design</p>
                            <p>About Us</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
                    <div className="column-three">
                        <div className="footer-up">
                            <button className="footer-btn">BACK TO TOP <FontAwesomeIcon icon={faAngleUp} /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;