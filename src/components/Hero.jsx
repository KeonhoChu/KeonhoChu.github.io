import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="container hero-content">
                <h1 className="hero-title">
                    Building the <br />
                    <span className="gradient-text">Future Web</span>
                </h1>
                <p className="hero-subtitle">
                    Creating premium digital experiences with modern technologies.
                    Focusing on performance, accessibility, and design.
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
