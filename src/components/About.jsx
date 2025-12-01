import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container about-content">
                <h2 className="section-title">About Me</h2>
                <div className="about-grid">
                    <div className="about-text">
                        <p>
                            I am a passionate developer focused on creating intuitive and dynamic user experiences.
                            With a strong foundation in modern web technologies, I love solving complex problems
                            and bringing ideas to life through code.
                        </p>
                        <p>
                            Always learning and exploring new technologies to stay ahead in the rapidly evolving tech landscape.
                        </p>
                    </div>
                    <div className="skills-container">
                        <h3 className="skills-title">Tech Stack</h3>
                        <div className="skills-list">
                            <span className="skill-tag">React</span>
                            <span className="skill-tag">JavaScript</span>
                            <span className="skill-tag">HTML/CSS</span>
                            <span className="skill-tag">Node.js</span>
                            <span className="skill-tag">Git</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
