import React from 'react';
import { Zap, Target, Smile } from 'lucide-react';

const Features = () => {
    const featureList = [
        {
            icon: <Zap size={32} className="text-gradient" />,
            title: "Instant Generation",
            desc: "Generate high-quality, engineered AI prompts in mere seconds without any prompt engineering knowledge."
        },
        {
            icon: <Target size={32} className="text-gradient" />,
            title: "Multiple Categories",
            desc: "Tailored prompts for diverse use cases: Coding, Instagram growth, Business strategies, and Study aids."
        },
        {
            icon: <Smile size={32} className="text-gradient" />,
            title: "Beginner Friendly",
            desc: "A beautifully simple, distraction-free UI designed for everyone, from novices to AI power users."
        }
    ];

    return (
        <section id="about" className="container about-section">
            <div className="generator-header">
                <h2 className="section-title">Why Use <span className="text-gradient">PromptGenius?</span></h2>
                <p className="generator-subtitle">Stop guessing with vague statements. Instantly construct highly optimized, context-rich AI prompts tailored specificially for any use case.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '40px' }}>
                {featureList.map((f, i) => (
                    <div key={i} className="glass" style={{ padding: '32px', textAlign: 'center', transition: 'transform 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(0, 247, 255, 0.1)', border: '1px solid rgba(0, 247, 255, 0.2)', marginBottom: '24px' }}>
                            {f.icon}
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', fontWeight: 600 }}>{f.title}</h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
