import React from 'react';
// import Animation
// import { motion } from "framer-motion";
// import components
import HomeHero from '../components/HomeHero';
import HomeIntro from '../components/HomeIntro';
import BlackLine from '../components/BlackLine';
import HomeServices from '../components/HomeServices';
import HomeWork from '../components/HomeWork';
import HomeAbout from '../components/HomeAbout';


function Home() {
    return (
        <div>
            <HomeHero />
            <HomeIntro />
            <HomeServices />
            <HomeWork />
            <HomeAbout />
        </div>
    )
}

export default Home;