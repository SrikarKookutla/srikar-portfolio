
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { profile } from '../data';

const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="timeline">
                    {profile.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="timeline-item glass-panel"
                        >
                            <div className="timeline-header">
                                <div>
                                    <h3 className="role">{exp.role}</h3>
                                    <h4 className="company">{exp.company}</h4>
                                </div>
                                <div className="timeline-meta">
                                    <span className="meta-item"><Calendar size={16} /> {exp.period}</span>
                                    <span className="meta-item"><MapPin size={16} /> {exp.location}</span>
                                </div>
                            </div>
                            <p className="exp-description">{exp.description}</p>
                            <ul className="responsibilities">
                                {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx}>{resp}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
