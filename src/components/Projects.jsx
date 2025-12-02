import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Project One",
            description: "A brief description of the first project. Highlighting key features and technologies used.",
            tags: ["React", "Vite", "CSS"],
            link: "#"
        },
        {
            id: 2,
            title: "Project Two",
            description: "Description for the second project. Explaining the problem solved and the outcome.",
            tags: ["Node.js", "API", "Database"],
            link: "#"
        },
        {
            id: 3,
            title: "Project Three",
            description: "Details about the third project. Showcasing design skills and user experience focus.",
            tags: ["UI/UX", "Design", "Figma"],
            link: "#"
        }
    ];

    return (
        <section className="projects" id="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <RevealOnScroll key={project.id} delay={index * 100}>
                            <div className="project-card neon-card">
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-tags">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="project-tag">{tag}</span>
                                        ))}
                                    </div>
                                    <a href={project.link} className="project-link">View Project →</a>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
