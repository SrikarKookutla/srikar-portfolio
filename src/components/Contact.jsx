
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { profile } from '../data';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-panel contact-card"
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="contact-text">
                        I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="contact-links">
                        <a href={`mailto:${profile.email}`} className="contact-item">
                            <div className="icon-box"><Mail size={24} /></div>
                            <span>{profile.email}</span>
                        </a>
                        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
                            <div className="icon-box"><Linkedin size={24} /></div>
                            <span>LinkedIn</span>
                        </a>
                        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-item">
                            <div className="icon-box"><Github size={24} /></div>
                            <span>GitHub</span>
                        </a>
                        <div className="contact-item">
                            <div className="icon-box"><MapPin size={24} /></div>
                            <span>{profile.location}</span>
                        </div>
                    </div>
                </motion.div>

                <footer className="footer">
                    <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
