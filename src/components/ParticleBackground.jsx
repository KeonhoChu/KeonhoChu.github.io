import React, { useMemo } from 'react';
import './ParticleBackground.css';

const ParticleBackground = () => {
    const particleCount = 200;
    const baseHue = 180; // Cyan/Blue range

    const particles = useMemo(() => {
        return Array.from({ length: particleCount }).map((_, i) => {
            const z = Math.random() * 360;
            const y = Math.random() * 360;
            const hue = (40 / particleCount * i) + baseHue;
            const delay = i * 0.01;

            return {
                id: i,
                style: {
                    '--z': `${z}deg`,
                    '--y': `${y}deg`,
                    '--hue': hue,
                    '--delay': `${delay}s`
                }
            };
        });
    }, []);

    return (
        <div className="particle-wrapper" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            background: 'black', // Fallback/Base
            zIndex: 0
        }}>
            <div className="particle-container">
                {particles.map((p) => (
                    <div key={p.id} className="particle" style={p.style} />
                ))}
            </div>
        </div>
    );
};

export default ParticleBackground;
