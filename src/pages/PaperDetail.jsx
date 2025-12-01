import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import { Buffer } from 'buffer';
import './PaperDetail.css';

window.Buffer = window.Buffer || Buffer;

const PaperDetail = () => {
    const { slug } = useParams();
    const [content, setContent] = useState('');
    const [meta, setMeta] = useState({});

    useEffect(() => {
        const loadPaper = async () => {
            try {
                // Dynamic import based on slug
                // Note: Vite requires string literals for glob imports usually, 
                // but for dynamic single file import we can iterate or try direct import if path is known.
                // A safer way with Vite glob is to load all and find the one matching slug.
                const modules = import.meta.glob('/src/content/papers/*.md', { as: 'raw' });
                const targetPath = `/src/content/papers/${slug}.md`;

                if (modules[targetPath]) {
                    const rawContent = await modules[targetPath]();
                    const { data, content } = matter(rawContent);
                    setMeta(data);
                    setContent(content);
                } else {
                    setContent('# Paper not found');
                }
            } catch (error) {
                console.error('Error loading paper:', error);
                setContent('# Error loading paper');
            }
        };

        loadPaper();
    }, [slug]);

    return (
        <article className="paper-detail-section">
            <div className="container paper-container">
                <Link to="/papers" className="back-link">← Back to Papers</Link>

                <header className="paper-header">
                    <div className="paper-meta-detail">
                        <span className="paper-date">{meta.date}</span>
                        <div className="paper-tags">
                            {meta.tags && meta.tags.map(tag => (
                                <span key={tag} className="paper-tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <h1 className="paper-title-detail">{meta.title}</h1>
                </header>

                <div className="markdown-content">
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>
            </div>
        </article>
    );
};

export default PaperDetail;
