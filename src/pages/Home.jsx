import React from 'react';
// import Animation
// import { motion } from "framer-motion";
// import components
import HomeHero from '../components/HomeHero';
import HomeIntro from '../components/HomeIntro';
import HomeServices from '../components/HomeServices';
import HomeClients from '../components/HomeClients';
import HomeWork from '../components/HomeWork';
import HomeAbout from '../components/HomeAbout';
import Calltoaction from '../components/Calltoaction';


function Home() {
    return (
        <div>
            <HomeHero />
            <HomeIntro />
            <HomeServices />
            <HomeClients />
            <HomeWork />
            <HomeAbout />
            <Calltoaction />
        </div>
    )
}

export default Home;