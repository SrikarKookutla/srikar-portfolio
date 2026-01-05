
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
                        <a href={`${import.meta.env.BASE_URL}Srikar_Kookutla.docx`} className="btn btn-outline" download>
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
                    <div className="profile-photo-container animate-float">
                        <img src={profile.profilePhoto} alt={profile.name} className="profile-photo" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
