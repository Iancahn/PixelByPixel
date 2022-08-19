import React from 'react';
// import Animation
// import { motion } from "framer-motion";
// import components
import HomeHero from '../components/HomeHero';
import HomeIntro from '../components/HomeIntro';
import HomeServices from '../components/HomeServices';

function Home() {
    return (
        <div>
            <HomeHero />
            <HomeIntro />
            <HomeServices />
        </div>
    )
}

export default Home;