import React from 'react';
import videoBg from '../assets/PixelByPixel-homevideo.mp4'

function HomeHero() {
    return (
        <div className="home-hero">
            <video src={videoBg} autoPlay loop muted />
            <div className="hero-text">
                <div className="hero-text-wrap">
                    <h1 className="home-h1">BIG IDEAS, <br />CREATIVE PEOPLE,<br /> NEW TECHNOLOGY<span className="yellow">.</span></h1>
                    {/* <div>
                        <button className="black-btn">VIEW CASE STUDIES</button>
                        <button className="white-btn">CONTACT US NOW</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default HomeHero;