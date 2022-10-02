import React from 'react';
// import Animation
// import { motion } from "framer-motion";
// import components

// import images
import homeIntro from '../assets/Intro-Website-design-services.jpg';

function HomeIntro() {
    return (
        <section>
            <div className="container">
                <div className="row">
                    {/* <div className="column">
                        <h2>How we stand out</h2>
                        <p className="large-text">By always improving our skillset, we continue to deliver innovative web solutions that drives real online success.</p>
                        <br />
                        <p>We believe great website design consists of more than just adding some images and words to a webpage. It's getting the customer to trust your company. It's getting visitors to convert into actual paying customers.</p>
                    </div> */}
                    <div className="column">
                        <h2>Generate Leads and Grow Online</h2>
                        <p className="large-text">We are web designers, developers, project managers, and digital marketing professionals dedicated to creative and results-driven web-based solutions using the latest trends and technologies.</p>
                        <br />
                        <p>We believe great website design consists of more than just adding some images and words to a webpage. It's getting the customer to trust your company. It's getting visitors to convert into actual paying customers.</p>
                    </div>
                    <div className="column">
                        <img src={homeIntro} alt="Website design services to help you grow online." className="column-img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeIntro;