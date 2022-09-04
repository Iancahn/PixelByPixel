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
                    <div className="column">
                        <h2>How we stand out:</h2>
                        <p>We believe great website design consists of more than just adding some images and words to a webpage. It's getting the customer to trust your company. It's getting visitors to convert into actual paying customers.</p>
                        <br />
                        <p>It's supposed to be your 24/7 always on salesman. Which is why you shouldnt leave this vital business tool in the hands of your "techie" matric nephew. If you are serious about growing your company online, let's have a chat today.</p>
                    </div>
                    <div className="column">
                        <img src={homeIntro} alt="Website design services to help you grow online." className="column-img" />
                    </div>
                </div>
            </div>
            {/* <div className="home-container">
                <p id="home-intro-text">Great website design is more than adding some images and words to a webpage. It's getting the customer to trust your company. It's getting visitor to convert into actual paying clients. It's supposed to be your 24/7 always on salesman. Which is why you shouldnt leave this vital business tool in the hands of your "techie" matric nephew. If you are serious about growing your company online, let's have a chat today.</p>
                <button className="intro-button">Get in Touch</button>
            </div> */}
        </section>
    )
}

export default HomeIntro;