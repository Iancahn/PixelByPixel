import React from 'react';
import { NavLink } from "react-router-dom";
import WorkProject from './WorkProject';
// import Animation
// import { motion } from "framer-motion";
// import components

// import images
import nty from '../assets/nty-website-design.jpg';
import jaco from '../assets/jaco-terblanche-website-design.jpg';
import steakshop from '../assets/steakshop-portfolio.jpg';
import huweliksfokus from '../assets/huweliksfokus-website-development.jpg';
import galaxydoors from '../assets/galaxy-doors-website-development.jpg';
import cycad from '../assets/cycad-estate-websitedesign.jpg';

function HomeServices() {
    return (
        <section>
            <div className='centered'>
                <h3 className="section-title-yellow"><span>Recent Projects</span></h3>
                <p>Some of our most recent digital marketing projects that we've launched.</p>
            </div>
            <div className="container">
                <div className="column2">
                    <WorkProject />
                </div>
                <div className="column2">
                    <div className="latest-work">Test2</div>
                </div>
                <div className="column2">
                    <div className="latest-work">Test</div>
                </div>
                <div className="column2">
                    <div className="latest-work">Test</div>
                </div>
                <div className="column2">
                    <div className="latest-work">Test</div>
                </div>
                <div className="column2">
                    <div className="latest-work">Test</div>
                </div>
            </div>



            {/* <div className="container white-font">
                <div className="portfolio-work">
                    <div className="portfolio-column">
                        <div className="sticky">
                            <h2>Some of our recent website design projects</h2>
                            <p>Here's a small selection of the most recent projects we've launched. For a broader sense of our work, check out our other website design projects.</p>
                        </div>
                    </div>
                    <div className="portfolio-column">
                        <NavLink className="navlink" to="/case-studies/nty" target="_blank">
                            <div className="portfolio-column-div1 rem-spacing">
                                <img src={nty} alt="Some of our latest website design projects" />
                                <h3>NTY Steel</h3>
                                <p className="small-project-text">Website Design | Wordpress</p>
                            </div>
                        </NavLink>
                        <NavLink className="navlink" to="/case-studies/jaco" target="_blank">
                            <div className="portfolio-column-div1">
                                <img src={jaco} alt="Some of our latest website design projects" />
                                <h3>Jaco Terblanche Designs</h3>
                                <p className="small-project-text">Website Design | Wordpress | MonthToMonth</p>
                            </div>
                        </NavLink>
                        <NavLink className="navlink" to="/case-studies/huweliksfokus" target="_blank">
                            <div className="portfolio-column-div1">
                                <img src={huweliksfokus} alt="Some of our latest website design projects" />
                                <h3>Huweliksfokus Councillors</h3>
                                <p className="small-project-text">Brand Development | Website Design | Wordpress</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className="portfolio-column">
                        <NavLink className="navlink" to="/case-studies/galaxydoors" target="_blank">
                            <div className="portfolio-column-div2">
                                <img src={galaxydoors} alt="Some of our latest website design projects" />
                                <h3>Galaxy Doors</h3>
                                <p className="small-project-text">Brand Development | Website Design | SEO</p>
                            </div>
                        </NavLink>
                        <NavLink className="navlink" to="/case-studies/cycad" target="_blank">
                            <div className="portfolio-column-div2">
                                <img src={cycad} alt="Some of our latest website design projects" />
                                <h3>Cycad Estate Polokwane</h3>
                                <p className="small-project-text">Website Design | Wordpress</p>
                            </div>
                        </NavLink>
                        <NavLink className="navlink" to="/case-studies/steakshop" target="_blank">
                            <div className="portfolio-column-div2">
                                <img src={steakshop} alt="Some of our latest website design projects" />
                                <h3>SteakShop Polokwane</h3>
                                <p className="small-project-text">Website Design | E-Commerce | Wordpress</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div > */}
        </section >
    )
}

export default HomeServices;