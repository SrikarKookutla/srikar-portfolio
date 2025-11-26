
import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data';

const Skills = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="skills-grid"
                >
                    {profile.skills.map((skillGroup, index) => (
                        <motion.div key={index} variants={item} className="glass-panel skill-card">
                            <div className="skill-header">
                                <skillGroup.icon className="skill-icon" size={24} />
                                <h3>{skillGroup.category}</h3>
                            </div>
                            <div className="skill-tags">
                                {skillGroup.items.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
