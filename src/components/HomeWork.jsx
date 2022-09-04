import React from 'react';
// import Animation
// import { motion } from "framer-motion";
// import components

// import images
import nty from '../assets/nty-website-design.jpg';
import jaco from '../assets/jaco-terblanche-website-design.jpg';
import greenco from '../assets/greenco-website-development.jpg';
import huweliksfokus from '../assets/huweliksfokus-website-development.jpg';
import galaxydoors from '../assets/galaxy-doors-website-development.jpg';
import cycad from '../assets/cycad-estate-websitedesign.jpg';

function HomeServices() {
    return (
        <section className="home-work">


            <div className="container2 white-font">
                <div className="portfolio-work">
                    <div className="portfolio-column sticky">
                        <div className="sticky">
                            <h2>Some of the website design projects we just recently launched</h2>
                            <p>Here's a small selection of the most recent projects we've launched. For a broader sense of our work, check out our other website design projects.</p>
                        </div>
                    </div>
                    <div className="portfolio-column">
                        <div className="portfolio-column-div1 rem-spacing">
                            <img src={nty} alt="Some of our latest website design projects" />
                            <h3>NTY Steel</h3>
                            <p className="small-project-text">Website Design | Wordpress</p>
                        </div>
                        <div className="portfolio-column-div1">
                            <img src={jaco} alt="Some of our latest website design projects" />
                            <h3>Jaco Terblanche Designs</h3>
                            <p className="small-project-text">Website Design | Wordpress | MonthToMonth</p>
                        </div>
                        <div className="portfolio-column-div1">
                            <img src={huweliksfokus} alt="Some of our latest website design projects" />
                            <h3>Huweliksfokus Councillors</h3>
                            <p className="small-project-text">Brand Development | Website Design | Wordpress</p>
                        </div>
                    </div>
                    <div className="portfolio-column">
                        <div className="portfolio-column-div2">
                            <img src={galaxydoors} alt="Some of our latest website design projects" />
                            <h3>Galaxy Doors</h3>
                            <p className="small-project-text">Brand Development | Website Design | SEO</p>
                        </div>
                        <div className="portfolio-column-div2">
                            <img src={cycad} alt="Some of our latest website design projects" />
                            <h3>Cycad Estate Polokwane</h3>
                            <p className="small-project-text">Website Design | Wordpress</p>
                        </div>
                        <div className="portfolio-column-div2">
                            <img src={greenco} alt="Some of our latest website design projects" />
                            <h3>Tychoset Engineering</h3>
                            <p className="small-project-text">Website Design | Wordpress</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default HomeServices;