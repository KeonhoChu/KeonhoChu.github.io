import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container about-content">
                <h2 className="section-title">About Me</h2>
                <div className="about-grid">
                    <div className="about-text">
                        <div className="current-role">
                            <h3>AI Engineer</h3>
                            <p className="company-highlight">@ LIG System AI Tech Research Lab</p>
                        </div>

                        <div className="experience-section">
                            <h3 className="subsection-title">Work Experience ⭐</h3>
                            <ul className="experience-list">
                                <li className="experience-item">
                                    <span className="company">LIG System</span>
                                    <span className="role">AI Software Engineer</span>
                                </li>
                                <li className="experience-item">
                                    <span className="company">Bionutrion (Bundang Seoul Nat'l Univ Hospital)</span>
                                    <span className="role">AI Research Engineer</span>
                                </li>
                                <li className="experience-item">
                                    <span className="company">Korea Disease Control Agency</span>
                                    <span className="role">Machine Learning Engineer</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="skills-container">
                        <h3 className="skills-title">Tech Stack</h3>
                        <div className="skills-list">
                            <span className="skill-tag">Python</span>
                            <span className="skill-tag">PyTorch</span>
                            <span className="skill-tag">LLM</span>
                            <span className="skill-tag">RAG</span>
                            <span className="skill-tag">FastAPI</span>
                            <span className="skill-tag">React</span>
                            <span className="skill-tag">Docker</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
