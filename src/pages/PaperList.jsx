import React from 'react';
import { Link } from 'react-router-dom';
import usePapers from '../hooks/usePapers';
import RevealOnScroll from '../components/RevealOnScroll';
import './PaperList.css';

const PaperList = () => {
    const { papers, loading } = usePapers();

    if (loading) {
        return (
            <section className="paper-list-section">
                <div className="container">
                    <h2 className="section-title">Loading...</h2>
                </div>
            </section>
        );
    }

    return (
        <section className="paper-list-section">
            <div className="container">
                <h2 className="section-title">Paper Reviews</h2>
                <div className="papers-grid">
                    {papers.map((paper, index) => (
                        <RevealOnScroll key={paper.slug} delay={index * 50}>
                            <Link to={`/papers/${paper.slug}`} className="paper-card neon-card">
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
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PaperList;
