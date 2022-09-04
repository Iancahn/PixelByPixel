import React from 'react';
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
                <h2>Our Services:</h2>
                <div className="work-container">
                    <div className="work-block">
                        <img src={monthtomonth} alt="our new Month to Month website renting service" />
                        <div className="work-block-text">
                            <p>Month2Month</p>
                            <h3>Let us get your company online, with our month to month website package plans</h3>
                        </div>
                    </div>
                    <div className="work-block">
                        <img src={websitedesign} alt="our new Month to Month website renting service" />
                        <div className="work-block-text">
                            <p>Website Design</p>
                            <h3>Let us build your company a brand new custom websites with all the bells and whistles</h3>
                        </div>
                    </div>
                    <div className="work-block">
                        <img src={graphicdesign} alt="our new Month to Month website renting service" />
                        <div className="work-block-text">
                            <p>Graphic Design</p>
                            <h3>Let us build your exciting new brand and logo with all the supporting graphic elements</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeServices;