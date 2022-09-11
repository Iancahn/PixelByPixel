import React from 'react';
// import Animation
// import { motion } from "framer-motion";
// import components

// import images
import aboutus from '../assets/pixelbypixel-mission-statement.jpg'
import aboutus from '../assets/pixelbypixel-mission-statement.jpg'
import aboutus from '../assets/pixelbypixel-mission-statement.jpg'
import aboutus from '../assets/pixelbypixel-mission-statement.jpg'
import aboutus from '../assets/pixelbypixel-mission-statement.jpg'
import aboutus from '../assets/pixelbypixel-mission-statement.jpg'
import aboutus from '../assets/pixelbypixel-mission-statement.jpg'

function HomeAbout() {
    return (
        <section>
            <div className="container">
                <h2>About Us:</h2>
                <div className="row">
                    <div className="column">
                        <img src={aboutus} alt="about the PixelByPixel team" className="column-img" />
                    </div>
                    <div className="column">
                        <p>Since we first started designing websites way back in early 2014,
                            we understood that a company's website represents much more than just being some online banner.
                            It's the very first interaction potential customers has with your company, and should be handled with a certain level of gravitas.</p><br />
                        <p>With this fact in mind, we have dedicated the past 8 years to master website design, graphic design, SEO and various other digital marketing services.
                            These valuable skills helps us design websites that not only looks great, but also drives real results for our customers.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="centered">
                        <h3>Companies we have worked with</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="padding">
                        <div className="column-six"><img src="" alt="companies we have worked with" /> </div>
                        <div className="column-six"><img src="" alt="companies we have worked with" /> </div>
                        <div className="column-six"><img src="" alt="companies we have worked with" /> </div>
                        <div className="column-six"><img src="" alt="companies we have worked with" /> </div>
                        <div className="column-six"><img src="" alt="companies we have worked with" /> </div>
                        <div className="column-six"><img src="" alt="companies we have worked with" /> </div>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default HomeAbout;