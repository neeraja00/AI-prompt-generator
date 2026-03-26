import React, { useState } from 'react';
import Hero from './components/Hero';
import PromptGenerator from './components/PromptGenerator';
import Features from './components/Features';
import { Sparkles, Code, Briefcase, GraduationCap, Palette, Github, Twitter, Linkedin, Mail, Instagram, Phone } from 'lucide-react';
import InteractiveBackground from './components/InteractiveBackground';
import './App.css';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'All', icon: <Sparkles size={18} />, label: 'All Prompts' },
    { id: 'Coding', icon: <Code size={18} />, label: 'Coding' },
    { id: 'Business', icon: <Briefcase size={18} />, label: 'Business' },
    { id: 'Study', icon: <GraduationCap size={18} />, label: 'Study' },
    { id: 'Arts', icon: <Palette size={18} />, label: 'Arts' },
  ];

  return (
    <div className="app-container">
      <InteractiveBackground />
      <header className="app-header">
        <div className="container header-container">
          <div className="header-logo">
            <Sparkles className="text-gradient" />
            <span>Prompt<span className="text-gradient">Genius</span></span>
          </div>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <a href="#generator" className="header-link">Generator</a>
            <a href="#about" className="header-link">About</a>
            <a href="#contact" className="header-link">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />

        <section id="generator" className="container generator-section">
          <div className="generator-header">
            <h2 className="generator-title">Generate <span className="text-gradient">AI Prompts</span></h2>
            <p className="generator-subtitle">Select a category below and describe what you need. Our tool will construct the perfect prompt for ChatGPT, Claude, or any other AI.</p>
          </div>

          <div className="category-container">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`glass category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>

          <PromptGenerator category={activeCategory} />
        </section>

        <div id="about">
          <Features />
        </div>

        <section id="contact" className="container contact-section">
          <div className="contact-content glass">
            <h2 className="section-title">Get in <span className="text-gradient">Touch</span></h2>
            <p className="contact-subtitle">Have a suggestion for a new category or feature? We'd love to hear from you!</p>
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Thanks for reaching out! We'll get back to you soon."); }}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="email@example.com" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="How can we help?" required></textarea>
              </div>
              <button type="submit" className="btn submit-btn">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <div className="container footer-container">
          <div className="footer-top" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            <div className="footer-brand">
              <div className="header-logo">
                <Sparkles className="text-gradient" />
                <span>Prompt<span className="text-gradient">Genius</span></span>
              </div>
              <p className="footer-description">The ultimate tool for crafting the perfect AI prompts, every single time. Stop guessing, start generating.</p>
              <div className="footer-socials" style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
                <a href="tel:+91 7569928536" className="social-link" aria-label="Phone"><Phone size={20} /></a>
                <a href="https://github.com/neeraja00/" className="social-link" aria-label="Github"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/neeraja05/" className="social-link" aria-label="LinkedIn"><Linkedin size={20} /></a>
                <a href="mailto:neerajalpu@gmail.com" className="social-link" aria-label="Email"><Mail size={20} /></a>
              </div>
            </div>

            <div className="footer-links-group" style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
              <div className="footer-links">
                <h4>Product</h4>
                <ul>
                  <li><a href="#generator">AI Generator</a></li>
                  <li><a href="#about">Features</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Changelog</a></li>
                </ul>
              </div>

              <div className="footer-links">
                <h4>Resources</h4>
                <ul>
                  <li><a href="#">Documentation</a></li>
                  <li><a href="#">Prompt Guide</a></li>
                  <li><a href="#">Community</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              </div>

              <div className="footer-links">
                <h4>Legal</h4>
                <ul>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-text">© {new Date().getFullYear()} PromptGenius. Built with ReactJS by Neeraja. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
