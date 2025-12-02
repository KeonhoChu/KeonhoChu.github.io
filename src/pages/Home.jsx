import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import LatestPapers from '../components/LatestPapers';

const Home = () => {
    return (
        <>
            <Hero />
            <LatestPapers />
            <About />
            <Projects />
        </>
    );
};

export default Home;
