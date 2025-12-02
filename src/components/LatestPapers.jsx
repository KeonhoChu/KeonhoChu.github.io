import React from 'react';
import { Link } from 'react-router-dom';
import usePapers from '../hooks/usePapers';
import './LatestPapers.css';

const LatestPapers = () => {
    const { papers, loading } = usePapers();

    // Get latest 3 papers
    const latestPapers = papers.slice(0, 3);

    if (loading) return null;

    return (
        <section className="latest-papers">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Latest Reviews</h2>
                    <Link to="/papers" className="view-all-link">View All Papers →</Link>
                </div>

                <div className="latest-grid">
                    {latestPapers.map((paper) => (
                        <Link to={`/papers/${paper.slug}`} key={paper.slug} className="latest-card">
                            <div className="latest-content">
                                <span className="latest-date">{paper.date}</span>
                                <h3 className="latest-title">{paper.title}</h3>
                                <div className="latest-tags">
                                    {paper.tags && paper.tags.slice(0, 2).map(tag => (
                                        <span key={tag} className="latest-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestPapers;
