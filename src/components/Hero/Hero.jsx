import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiArrowRight, FiFigma, FiLayout, FiSmartphone, FiCheckCircle } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import './Hero.css';

export default function Hero() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Dynamic Background Glow Aura */}
      <div className="hero-backdrop-glow" />

      <div className="hero-container">
        {/* Left Column: Typography & Narrative */}
        <div className="hero-left">
          {/* Small Intro Badge */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="hero-badge-dot" />
            <span className="hero-badge-text">UI/UX PORTFOLIO</span>
          </motion.div>

          {/* Full Name */}
          <motion.h2
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            SHAIK GANNARAM<br />ASHABI
          </motion.h2>

          {/* Role Title */}
          <motion.div
            className="hero-title-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className="hero-main-title">
              Junior UI/UX Designer
            </h1>
          </motion.div>

          {/* Core Proposition */}
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Designing clean, intuitive and responsive digital experiences with a focus on usability, visual consistency and user needs.
          </motion.p>

          {/* Skills Badges */}
          <motion.div
            className="hero-skills-group"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <span className="skills-pill-label">Skills:</span>
            <div className="skills-pill-list">
              {personalInfo.skillsPills.map((skill) => (
                <span key={skill} className="skills-pill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <button
              className="btn-primary"
              onClick={() => scrollTo('projects')}
            >
              <span>View My Work</span>
              <FiArrowRight className="btn-icon" />
            </button>
            <button
              className="btn-secondary"
              onClick={() => scrollTo('contact')}
            >
              <span>Contact Me</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Interactive UI/UX Craft Showcase */}
        <div className="hero-right">
          <div className="portrait-glow-halo" />

          {/* Floating Figma Status Card */}
          <motion.div
            className="hero-status-card"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="status-header">
              <span className="status-badge-live">● Figma Active</span>
              <span className="status-label">Inter • 8pt Grid</span>
            </div>
            <p className="status-text">Crafting accessible design systems and fluid responsive layouts.</p>
          </motion.div>

          {/* UI/UX Canvas Mockup Preview Card */}
          <motion.div
            className="hero-ui-preview-card"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="canvas-header">
              <div className="canvas-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="canvas-title">Healthcare-System-v2.fig</span>
              <span className="canvas-zoom">100%</span>
            </div>
            <div className="canvas-body">
              <div className="canvas-layer-tag">
                <FiFigma className="canvas-figma-icon" />
                <span>Auto Layout & Components</span>
              </div>
              <div className="mockup-screen-preview">
                <div className="mockup-header-bar">
                  <div className="mockup-pill-active" />
                  <div className="mockup-search-dummy" />
                  <div className="mockup-avatar-dummy" />
                </div>
                <div className="mockup-grid-dummy">
                  <div className="mockup-stat-box">
                    <span className="mini-label">Total Patients</span>
                    <span className="mini-val">2,840</span>
                  </div>
                  <div className="mockup-stat-box accent-box">
                    <span className="mini-label">Today</span>
                    <span className="mini-val">18 Visits</span>
                  </div>
                </div>
                <div className="mockup-card-dummy">
                  <div className="mockup-row">
                    <span className="indicator-dot" />
                    <span>Recent Patients & Electronic Records</span>
                  </div>
                  <div className="mockup-skeleton-lines">
                    <div className="sk-line w-80" />
                    <div className="sk-line w-60" />
                  </div>
                </div>
              </div>
              <div className="canvas-footer-badges">
                <span className="badge-item"><FiLayout /> Wireframe → UI</span>
                <span className="badge-item"><FiSmartphone /> 390 × 844</span>
                <span className="badge-item"><FiCheckCircle /> WCAG AA</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        className="hero-scroll-indicator"
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
      >
        <FiArrowDown className="scroll-arrow-icon" />
        <span className="scroll-text">SCROLL TO EXPLORE</span>
        <div className="scroll-line-animated" />
      </motion.div>
    </section>
  );
}
