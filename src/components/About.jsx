
import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About Me</h2>
                    <div className="glass-panel about-content">
                        {profile.about.map((paragraph, index) => (
                            <p key={index} className="about-text">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
