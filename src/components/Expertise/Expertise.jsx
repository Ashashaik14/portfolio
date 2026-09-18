import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiLayout, 
  FiLayers, 
  FiSliders, 
  FiFigma, 
  FiCode, 
  FiSmartphone, 
  FiGrid, 
  FiCheckCircle,
  FiCompass,
  FiBox
} from 'react-icons/fi';
import { SiJavascript, SiHtml5, SiCss } from 'react-icons/si';

const CanvaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1.1em" height="1.1em">
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M14.5 9.5C13.8 8.5 12.6 8 11.2 8 8.9 8 7 9.8 7 12.2c0 2.4 1.9 4.2 4.2 4.2 1.4 0 2.6-.6 3.3-1.6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

import { skillsData } from '../../data/portfolioData';
import './Expertise.css';

export default function Expertise() {
  return (
    <section id="skills" className="expertise-section">
      <div className="section-wrapper">
        <div className="expertise-header">
          <span className="section-tag">03 // SKILLS</span>
          <h2 className="section-title">SKILLS &amp; CAPABILITIES</h2>
          <p className="expertise-subtitle">
            Focused on crafting intuitive digital products with design precision and practical development awareness.
          </p>
        </div>

        <div className="skills-three-col-grid">
          {/* Column 1: Design Skills */}
          <motion.div
            className="skill-category-card highlight-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="skill-cat-header">
              <div className="cat-icon-wrap cat-purple">
                <FiLayout />
              </div>
              <div>
                <span className="cat-kicker">Core Specialization</span>
                <h3 className="cat-title">Design Skills</h3>
              </div>
            </div>
            <p className="cat-desc">
              Human-centered methodologies applied across all stages of interface discovery and execution.
            </p>

            <div className="cat-pills-wrap">
              {skillsData.categories[0].skills.map((skill) => (
                <div key={skill} className="skill-pill-item design-pill">
                  <FiCheckCircle className="pill-check-icon" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Tools */}
          <motion.div
            className="skill-category-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="skill-cat-header">
              <div className="cat-icon-wrap cat-blue">
                <FiBox />
              </div>
              <div>
                <span className="cat-kicker">Design Software</span>
                <h3 className="cat-title">Tools</h3>
              </div>
            </div>
            <p className="cat-desc">
              Industry applications used daily for wireframing, high-fidelity UI, component systems, and visual assets.
            </p>

            <div className="cat-tools-cards">
              <div className="tool-box-card">
                <div className="tool-icon-circle figma-icon">
                  <FiFigma />
                </div>
                <div className="tool-info">
                  <div className="tool-name">Figma</div>
                  <div className="tool-usage">UI Design, Wireframing, Auto Layout &amp; Interactive Prototyping</div>
                </div>
              </div>

              <div className="tool-box-card">
                <div className="tool-icon-circle canva-icon">
                  <CanvaIcon />
                </div>
                <div className="tool-info">
                  <div className="tool-name">Canva</div>
                  <div className="tool-usage">Visual Graphics, Presentation Decks &amp; Asset Preparation</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Technical Knowledge */}
          <motion.div
            className="skill-category-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="skill-cat-header">
              <div className="cat-icon-wrap cat-emerald">
                <FiCode />
              </div>
              <div>
                <span className="cat-kicker">Developer Collaboration</span>
                <h3 className="cat-title">Technical Knowledge</h3>
              </div>
            </div>
            <p className="cat-desc">
              Basic HTML and CSS knowledge to understand web structure, responsive layout principles, and communicate effectively with developers.
            </p>

            <div className="cat-tech-list">
              <div className="tech-item-row">
                <div className="tech-item-left">
                  <SiHtml5 className="tech-logo html-logo" />
                  <span className="tech-label">HTML</span>
                </div>
                <span className="tech-level-pill">Basic Knowledge</span>
              </div>

              <div className="tech-item-row">
                <div className="tech-item-left">
                  <SiCss className="tech-logo css-logo" />
                  <span className="tech-label">CSS</span>
                </div>
                <span className="tech-level-pill">Basic Knowledge</span>
              </div>

              <div className="tech-item-row">
                <div className="tech-item-left">
                  <SiJavascript className="tech-logo js-logo" />
                  <span className="tech-label">Basic JavaScript</span>
                </div>
                <span className="tech-level-pill">Basic Awareness</span>
              </div>
            </div>

            <div className="tech-job-note">
              <span className="note-dot" />
              <span>Job aligned: Strong design craft with clear front-end awareness.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
