import React from 'react';
import { Link } from 'react-router-dom';
import ParticleBackground from './ParticleBackground';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <ParticleBackground />
            <div className="hero-content">
                <h1 className="hero-title">
                    <span className="neon-text" data-text="Keonho-Chu">Keonho-Chu</span>
                </h1>
                <p className="hero-subtitle">
                    AI Engineer & Researcher<br />
                    <span className="script-text">Exploring the boundaries of Intelligence</span>
                </p>
                <div className="hero-buttons">
                    <Link to="/papers" className="btn btn-primary">Read Papers</Link>
                    <a href="#projects" className="btn btn-secondary">View Projects</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
