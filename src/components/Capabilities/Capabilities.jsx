import React from 'react';
import { motion } from 'framer-motion';
import { FiLayout, FiMaximize2, FiBox, FiPlay, FiLayers, FiSmartphone, FiFigma } from 'react-icons/fi';
import { figmaSkillsData } from '../../data/portfolioData';
import './Capabilities.css';

export default function Capabilities() {
  const iconMap = {
    "Wireframing": <FiLayout />,
    "Auto Layout": <FiMaximize2 />,
    "Components": <FiBox />,
    "Prototyping": <FiPlay />,
    "Design Systems": <FiLayers />,
    "Responsive Design": <FiSmartphone />
  };

  return (
    <section id="figma-skills" className="capabilities-section">
      <div className="section-wrapper">
        <div className="capabilities-header">
          <div className="figma-header-badge">
            <FiFigma className="badge-figma-icon" />
            <span>21 // TOOL MASTERY</span>
          </div>
          <h2 className="section-title">
            FIGMA SKILLS
          </h2>
          <p className="capabilities-subtitle">
            {figmaSkillsData.intro}
          </p>
        </div>

        <div className="figma-skills-grid">
          {figmaSkillsData.skills.map((skill, sIdx) => (
            <motion.div
              key={skill.title}
              className="figma-skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: sIdx * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className="figma-card-glow" />

              <div className="figma-card-top">
                <div className="figma-icon-bubble">
                  {iconMap[skill.title] || <FiBox />}
                </div>
                <span className="figma-badge-tag">{skill.badge}</span>
              </div>

              <h3 className="figma-skill-title">{skill.title}</h3>
              <p className="figma-skill-main-desc">{skill.description}</p>
              <p className="figma-skill-subdetail">{skill.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
