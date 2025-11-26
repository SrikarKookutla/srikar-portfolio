
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { profile } from '../data';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text"
                >
                    <span className="greeting">Hello, I'm</span>
                    <h1 className="name">{profile.name}</h1>
                    <h2 className="title text-gradient">{profile.role}</h2>
                    <p className="description">
                        Specializing in Automation Testing with Playwright & TypeScript.
                        Building robust frameworks and ensuring quality at speed.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            View Work <ArrowRight size={18} />
                        </a>
                        <a href="/resume.pdf" className="btn btn-outline" download>
                            Download CV <Download size={18} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-visual"
                >
                    <div className="glow-circle"></div>
                    <div className="glass-card profile-card animate-float">
                        <div className="code-block">
                            <div className="code-header">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <pre>
                                <code>
                                    <span className="keyword">const</span> <span className="variable">qaEngineer</span> = {'{'}
                                    <span className="property">name</span>: <span className="string">"{profile.name}"</span>,
                                    <span className="property">skills</span>: [<span className="string">"Playwright"</span>, <span className="string">"TypeScript"</span>],
                                    <span className="property">passion</span>: <span className="string">"Quality"</span>
                                    {'}'};
                                </code>
                            </pre>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
