import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import matter from 'gray-matter';
import { Buffer } from 'buffer';
import './PaperList.css';

// Polyfill buffer for gray-matter in browser
window.Buffer = window.Buffer || Buffer;

const PaperList = () => {
    const [papers, setPapers] = useState([]);

    useEffect(() => {
        const loadPapers = async () => {
            // Import all markdown files from content/papers
            const modules = import.meta.glob('/src/content/papers/*.md', { as: 'raw' });

            const paperPromises = Object.keys(modules).map(async (path) => {
                const content = await modules[path]();
                const { data } = matter(content);
                // Extract filename as slug
                const slug = path.split('/').pop().replace('.md', '');
                return {
                    slug,
                    ...data
                };
            });

            const loadedPapers = await Promise.all(paperPromises);
            // Sort by date descending
            loadedPapers.sort((a, b) => new Date(b.date) - new Date(a.date));
            setPapers(loadedPapers);
        };

        loadPapers();
    }, []);

    return (
        <section className="paper-list-section">
            <div className="container">
                <h2 className="section-title">Paper Reviews</h2>
                <div className="papers-grid">
                    {papers.map((paper) => (
                        <Link to={`/papers/${paper.slug}`} key={paper.slug} className="paper-card">
                            <div className="paper-content">
                                <div className="paper-meta">
                                    <span className="paper-date">{paper.date}</span>
                                    <div className="paper-tags">
                                        {paper.tags && paper.tags.map(tag => (
                                            <span key={tag} className="paper-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <h3 className="paper-title">{paper.title}</h3>
                                <p className="paper-summary">{paper.summary}</p>
                                <span className="read-more">Read Review →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PaperList;
