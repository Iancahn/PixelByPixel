import React from 'react';
// import Animation
// import { motion } from "framer-motion";
// import components

// import images
import footerLogo from '../img/pixelbypixel-footer-logo.png';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className='row'>
                    <div className="column-three">
                        <div>
                            <img src={footerLogo} alt="pixelbypixel footer logo" id="footer-logo" />
                            <p>Copyright 2022 | All Rights Reserved</p>
                        </div>
                    </div>
                    <div className="column-three">
                        <div>
                            <img src={footerLogo} alt="pixelbypixel footer logo" id="footer-logo" />
                            <p>This is my footer</p>
                        </div>
                    </div>
                    <div className="column-three">
                        <div>
                            <button>Back to Top</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;