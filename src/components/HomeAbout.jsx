import React from 'react';
// import Animation
// import { motion } from "framer-motion";
// import components

import aboutus from '../assets/coffee.mp4';

function HomeAbout() {
    return (
        <section className="home-services">
            <div className="container">
                <h3 className="section-title-yellow"><span>About Us</span></h3>
                <p className="centered2" >Learn more about the team behind our success.</p>
                <div className="row">
                    <div className="column">
                        <video src={aboutus} alt="about the PixelByPixel team" className="column-video" autoPlay loop muted />
                    </div>
                    <div className="column">
                        <p>Since we first started designing websites way back in early 2014,
                            we understood that a company's website represents much more than just being some online banner.
                            It's the very first interaction potential customers has with your company, and should be handled with a certain level of gravitas.</p><br />
                        <p>With this fact in mind, we have dedicated the past 8 years to master website design, graphic design, SEO and various other digital marketing services.
                            These valuable skills helps us design websites that not only looks great, but also drives real results for our customers.</p><br />
                        <p>From our humble beginnings, we have grown to become probably the number one website design agency in Limpopo, based on raw skill and our relentless unwillingness to accept mediocre as good enough.</p>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default HomeAbout;