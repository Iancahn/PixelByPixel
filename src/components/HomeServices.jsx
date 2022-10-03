import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faChessKnight } from '@fortawesome/free-solid-svg-icons'

// import Animation
// import { motion } from "framer-motion";
// import components

// import images
import monthtomonth from '../assets/month-to-month-website-package.jpg'
import websitedesign from '../assets/website-design-services.jpg'
import graphicdesign from '../assets/graphic-design-services.jpg'

function HomeServices() {
    return (
        <section className="home-services">
            <div className="container">
                <h3 className="section-title-yellow"><span>Our Services</span></h3>
                <div className="work-container">
                    <div className="work-block">
                        <FontAwesomeIcon icon={faPenNib} className="service-icon"></FontAwesomeIcon>
                        <div className="work-block-text">
                            <h4 className="service-name">Brand Design</h4>
                            <p>Every great company starts with a brilliant brand design. A professional brand design works across all the touchpoints of your brand. These include logo design, branding elements and so much more.</p>
                            <button className="black-btn2">View Service</button>
                        </div>
                    </div>
                    <div className="work-block">
                        <FontAwesomeIcon icon={faCode} className="service-icon"></FontAwesomeIcon>
                        <div className="work-block-text">
                            <h4 className="service-name">Website Design</h4>
                            <p>Your company's website is the very first impression potential clients get of your company. Get your website professionally designed using the latest web technologies and mobile friendly and responsive design styles.</p>
                            <button className="black-btn2">View Service</button>
                        </div>
                    </div>
                    <div className="work-block">
                        <FontAwesomeIcon icon={faChessKnight} className="service-icon"></FontAwesomeIcon>
                        <div className="work-block-text">
                            <h4 className="service-name">Digital Marketing</h4>
                            <p>Once your new brand and website has been designed, its time to get it infront of potential customers. We use our wide range of digital marketing to generate leads and convert online visitors into customers for our clients.</p>
                            <button className="black-btn2">View Service</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeServices;