import React from 'react';
import { NavLink } from "react-router-dom";
import ScrollTop from './ScrollTop';
// import Animation
// import { motion } from "framer-motion";
// import components

// import images
import footerLogo from '../assets/pbp-2023-footerlogo.png';

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
                            <p>Pixel By Pixel is a digital marketing agency that specializes in website design and web app development.</p>
                        </div>
                        <div>
                            <p className="copyright">© Copyright 2022 | All Rights Reserved | PixelByPixel</p>
                        </div>
                    </div>
                    <div className="column-three quick-links">
                        <div>
                            <h4><span style={{ textDecoration: "underline" }}>Quick Links</span></h4>
                            <li><NavLink className="" to="/">Home</NavLink></li>
                            <li><NavLink className="" to="/monthtomonth">Month To Month</NavLink></li>
                            <li><NavLink className="" to="/webdesign">Website Design</NavLink></li>
                            <li><NavLink className="" to="/graphicdesign">Graphic Design</NavLink></li>
                            <li><NavLink className="" to="/aboutus">About Us</NavLink></li>
                            <li><NavLink className="" to="/contact">Contact Us</NavLink></li>
                        </div>
                    </div>
                    <div className="column-three">
                        <div className="footer-up">
                            <button onClick={ScrollTop} className="footer-btn">BACK TO TOP <FontAwesomeIcon icon={faAngleUp} /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;