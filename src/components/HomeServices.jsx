import React from 'react';
// import Animation
// import { motion } from "framer-motion";
// import components

// import images
import monthtomonth from '../img/month-to-month-website-package.jpg'
import websitedesign from '../img/website-design-services.jpg'
import graphicdesign from '../img/graphic-design-services.jpg'

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
                            <h3>Get your business website designed, hosted and maintained on our month to month package deal</h3>
                        </div>
                    </div>
                    <div className="work-block">
                        <img src={websitedesign} alt="our new Month to Month website renting service" />
                        <div className="work-block-text">
                            <p>Website Design</p>
                            <h3>Let's build a custom website designed from a professional website design company?</h3>
                        </div>
                    </div>
                    <div className="work-block">
                        <img src={graphicdesign} alt="our new Month to Month website renting service" />
                        <div className="work-block-text">
                            <p>Graphic Design</p>
                            <h3>Let's build your brand new logo and supporting graphics with our qualified graphic design team</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeServices;