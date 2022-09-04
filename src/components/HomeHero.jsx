import React from 'react';
import videoBg from '../assets/PixelByPixel-home-intro.mp4'

function HomeHero() {
    return (
        <div className="home-hero">
            <video src={videoBg} autoPlay loop muted />
            <div className="hero-text">
                <div className="hero-text-wrap">
                    {/* <p className="upper-p">Welcome to Pixel By Pixel, a webdesign company that makes website design easy</p> */}
                    {/* <h1 className="home-h1">Every great business needs a great website.</h1> */}
                    <h1 className="home-h1">Your online partner for innovative and impactful digital solutions.</h1>
                    <div>
                        <button className="black-btn">VIEW CASE STUDIES</button>
                        <button className="white-btn">CONTACT US NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHero;