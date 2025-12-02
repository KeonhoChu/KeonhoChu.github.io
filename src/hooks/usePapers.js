import { useState, useEffect } from 'react';
import matter from 'gray-matter';
import { Buffer } from 'buffer';

// Polyfill buffer for gray-matter in browser
window.Buffer = window.Buffer || Buffer;

const usePapers = () => {
    const [papers, setPapers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPapers = async () => {
            try {
                setLoading(true);
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
            } catch (err) {
                console.error("Error loading papers:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadPapers();
    }, []);

    return { papers, loading, error };
};

export default usePapers;
