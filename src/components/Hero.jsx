import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="container hero-content">
                <h1 className="hero-title">
                    Hello, I'm <br />
                    <span className="gradient-text">Keonho Chu</span>
                </h1>
                <p className="hero-subtitle">
                    AI Engineer & Researcher. <br />
                    Building meaningful AI experiences.
                </p>
                <div className="hero-actions">
                    <button className="btn btn-primary">View Projects</button>
                    <button className="btn btn-secondary">Contact Me</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
