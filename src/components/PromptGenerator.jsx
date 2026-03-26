import React, { useState, useEffect } from 'react';
import { Sparkles, Copy, Check, Loader2 } from 'lucide-react';

const PROMPT_TEMPLATES = {
    Coding: (baseTopic, tone) => `You are an elite Staff Software Engineer. Your task is to implement: "${baseTopic}".\n\nRequirements:\n1. Provide production-ready code with appropriate error handling.\n2. Include brief, insightful comments explaining non-obvious logic.\n3. Detail the time complexity (Big O) of your approach.\n4. Suggest one potential optimization or trade-off.\n\nPlease maintain a ${tone} tone throughout your explanation and use modern best practices.`,
    Business: (baseTopic, tone) => `Context: We are looking for high-level business strategy and consulting.\nTopic: "${baseTopic}"\n\nDeliverables:\n- Executive Summary (1 paragraph)\n- Market & Competitive Landscape Insights\n- 3-Step Actionable Strategy\n- Key Performance Indicators (KPIs) to measure success\n\nTone constraints: Ensure the language used is strictly ${tone} and geared towards stakeholders.`,
    Study: (baseTopic, tone) => `I am a student trying to grasp the following concept: "${baseTopic}".\n\nPlease act as a world-class educator and break it down as follows:\n- Core Concept: Explain it simply in 2-3 sentences.\n- Analogy: Relate it to an everyday real-world example.\n- Deep Dive: Outline the key mechanisms or historical context.\n- Assessment: Provide 2 multiple-choice questions to test my understanding.\n\nKeep your teaching style ${tone}.`,
    Arts: (baseTopic, tone) => `Role: Creative Art & Craft Instructor\nTask: Provide a detailed, easy-to-follow guide or idea for "${baseTopic}".\n\nStructure:\n1. Inspiration: A brief overview of the project and its creative value.\n2. Materials Needed: A complete list of supplies required.\n3. Step-by-Step Instructions: Clear, numbered steps to complete the project.\n4. Pro Tip: One unique piece of advice to make the project stand out.\n\nNote: Maintain an encouraging and ${tone} tone to inspire the creator.`,
    All: (baseTopic, tone) => `Task: Provide a comprehensive and structured response regarding "${baseTopic}".\n\nInstructions:\n- Analyze the topic from multiple angles.\n- Break down your response into logical sections with clear headings.\n- Highlight any potential challenges, alternatives, or unique insights.\n- Limit fluff and focus on high-value information.\n\nPlease ensure your tone is ${tone} throughout the response.`
};

const PLACEHOLDERS = {
    Coding: 'e.g. "Create a login form in React" or "Explain how useEffect works"',
    Business: 'e.g. "Marketing plan for a new coffee shop" or "Write an email to negotiate a contract"',
    Study: 'e.g. "Explain the theory of relativity" or "Summarize the events of World War II"',
    Arts: 'e.g. "How to make a paper mache volcano" or "DIY room decor using old jars"',
    All: 'e.g. "Plan a 3-day itinerary for a trip to Tokyo" or "Give me recipe ideas for dinner"'
};

const PromptGenerator = ({ category }) => {
    const [topic, setTopic] = useState('');
    const [tone, setTone] = useState('Professional');
    const [generatedPrompt, setGeneratedPrompt] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    // Clear when category changes
    useEffect(() => {
        setTopic('');
        setGeneratedPrompt('');
        setTone('Professional');
    }, [category]);

    const generatePrompt = () => {
        if (!topic.trim()) return;

        setIsGenerating(true);
        setGeneratedPrompt('');
        setIsCopied(false);

        // Simulate API delay for dramatic effect
        setTimeout(() => {
            const baseTopic = topic.trim();
            const template = PROMPT_TEMPLATES[category] || PROMPT_TEMPLATES.All;
            const prompt = template(baseTopic, tone);

            setGeneratedPrompt(prompt);
            setIsGenerating(false);
        }, 1200);
    };

    const copyToClipboard = () => {
        if (!generatedPrompt) return;
        navigator.clipboard.writeText(generatedPrompt);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    const placeholderText = PLACEHOLDERS[category] || PLACEHOLDERS.All;

    return (
        <div className="glass" style={{ maxWidth: '800px', margin: '0 auto', padding: '32px', position: 'relative', overflow: 'hidden' }}>

            {/* Decorative background glow */}
            <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px', background: 'var(--primary)', filter: 'blur(100px)', opacity: 0.15, borderRadius: '50%', pointerEvents: 'none' }}></div>
            <div style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--secondary)', filter: 'blur(100px)', opacity: 0.15, borderRadius: '50%', pointerEvents: 'none' }}></div>

            <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {category === 'All' ? 'General' : category} <span className="text-gradient">Generator</span>
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            Describe what you want to generate:
                        </label>
                        <textarea
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            placeholder={placeholderText}
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'end' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                Select Tone of Voice:
                            </label>
                            <select
                                value={tone}
                                onChange={(e) => setTone(e.target.value)}
                                style={{ appearance: 'none', background: 'rgba(15, 23, 42, 0.6) url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E") no-repeat right 16px top 50%', backgroundSize: '12px auto' }}
                            >
                                <option value="Professional">Professional</option>
                                <option value="Creative">Creative / Casual</option>
                                <option value="Direct">Direct / Concise</option>
                                <option value="Humorous">Humorous / Witty</option>
                            </select>
                        </div>

                        <button
                            className="btn"
                            onClick={generatePrompt}
                            disabled={!topic.trim() || isGenerating}
                            style={{ width: '100%', padding: '12px' }}
                        >
                            {isGenerating ? (
                                <>
                                    <Loader2 size={18} className="spin" style={{ animation: 'spin 1s linear infinite' }} />
                                    Generating...
                                </>
                            ) : (
                                <>
                                    <Sparkles size={18} />
                                    Generate Prompt
                                </>
                            )}
                        </button>
                        <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                    </div>

                </div>

                {/* Output Area */}
                {generatedPrompt && (
                    <div className="animate-slide-up" style={{ marginTop: '32px', borderTop: '1px solid var(--glass-border)', paddingTop: '32px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Your Optimized Prompt:</h4>

                            <button
                                onClick={copyToClipboard}
                                style={{
                                    background: 'transparent',
                                    border: '1px solid var(--glass-border)',
                                    color: isCopied ? '#10b981' : 'var(--text-main)',
                                    padding: '8px 16px',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    transition: 'all 0.2s ease',
                                    backgroundColor: isCopied ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255, 255, 255, 0.05)'
                                }}
                            >
                                {isCopied ? <Check size={16} /> : <Copy size={16} />}
                                {isCopied ? 'Copied!' : 'Copy to Clipboard'}
                            </button>
                        </div>

                        <div style={{
                            background: 'rgba(15, 23, 42, 0.8)',
                            padding: '24px',
                            borderRadius: '12px',
                            border: '1px solid var(--glass-border)',
                            lineHeight: 1.6,
                            fontSize: '1.05rem',
                            color: '#e2e8f0'
                        }}>
                            {generatedPrompt}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PromptGenerator;
