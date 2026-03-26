import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
            <div
                className="glass animate-slide-up"
                style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    padding: '60px 40px',
                    background: 'radial-gradient(circle at center, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95))',
                }}
            >
                <div style={{ display: 'inline-block', padding: '8px 16px', background: 'rgba(0, 247, 255, 0.1)', border: '1px solid var(--secondary)', borderRadius: '100px', color: 'var(--secondary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '24px' }}>
                    🚀 The Ultimate Prompt Toolbox
                </div>

                <h1 style={{ fontSize: '3.5rem', lineHeight: 1.1, marginBottom: '24px', fontWeight: 700 }}>
                    Supercharge Your AI with <br />
                    <span className="text-gradient">Perfect Prompts</span>
                </h1>

                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                    Stop struggling to get the right output. Generate high-quality, perfectly engineered AI prompts instantly for coding, business, studying, and more.
                </p>

                <a href="#generator" className="btn" style={{ fontSize: '1.1rem', padding: '14px 32px' }}>
                    <Sparkles size={20} />
                    Start Generating Free
                </a>
            </div>
        </section>
    );
};

export default Hero;
