import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-bg-overlay"></div>
            <div className="container hero-content">
                <div className="neon-wrapper">
                    <h2 className="hero-subtitle-neon">Hello, I'm</h2>
                    <h1 className="hero-title-neon">
                        Keonho Chu
                    </h1>
                    <p className="hero-description">
                        AI Engineer & Researcher. <br />
                        Building meaningful AI experiences.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
