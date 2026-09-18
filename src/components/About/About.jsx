import React from 'react';
import { motion } from 'framer-motion';
import { FiUserCheck, FiEye, FiSmartphone, FiCompass, FiAward, FiLayers } from 'react-icons/fi';
import { aboutData, personalInfo } from '../../data/portfolioData';
import './About.css';

export default function About() {
  const focusIcons = {
    "user-centered": <FiUserCheck />,
    "visual-design": <FiEye />,
    "responsive-design": <FiSmartphone />,
    "product-thinking": <FiCompass />
  };

  const highlights = [
    { label: "ROLE", value: "Junior UI/UX Designer" },
    { label: "EDUCATION", value: "Final-Year Engineering Student" },
    { label: "CORE TOOLS", value: "Figma · Canva" },
    { label: "CODE AWARENESS", value: "HTML · CSS (Responsive Layouts)" }
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="about-header-row">
          <span className="section-tag">02 // ABOUT</span>
          <h2 className="section-title">ABOUT ME</h2>
        </div>

        <div className="about-grid">
          {/* Left Column: System Profile Card */}
          <motion.div
            className="about-profile-card-container"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-profile-card">
              <div className="profile-card-glow" />

              <div className="profile-card-inner">
                <div className="profile-card-header">
                  <div className="profile-tag">
                    <span className="tag-pulse" />
                    <span>// DESIGNER PROFILE</span>
                  </div>
                  <span className="profile-id">UI/UX • 2026</span>
                </div>

                <div className="profile-image-box">
                  <img
                    src="/profile.jpg"
                    alt="Shaik Gannaram Ashabi Profile"
                    className="about-card-img"
                  />
                  <div className="profile-card-overlay" />
                </div>

                <div className="profile-card-footer">
                  <div className="profile-card-name">{personalInfo.name}</div>
                  <div className="profile-card-badge">
                    <span className="badge-dot" />
                    <span>JUNIOR UI/UX DESIGNER</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Specs Under Card */}
            <div className="about-quick-specs">
              {highlights.map((item, idx) => (
                <div key={idx} className="quick-spec-item">
                  <span className="spec-label">{item.label}</span>
                  <span className="spec-value">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Bio & The 4 Focus Areas */}
          <motion.div
            className="about-content-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about-intro-greeting">
              <span className="greeting-pill">// DESIGN PHILOSOPHY</span>
              <h3 className="about-subheading">
                Transforming Complex Ideas into Simple, Intuitive Interfaces
              </h3>
            </div>

            <p className="about-paragraph lead">
              {aboutData.intro}
            </p>

            {/* What I Focus On Section */}
            <div className="about-focus-section">
              <h4 className="focus-heading">
                <FiLayers className="focus-heading-icon" />
                What I focus on
              </h4>

              <div className="focus-cards-grid">
                {aboutData.focusAreas.map((area) => (
                  <div key={area.id} className="focus-card">
                    <div className="focus-card-header">
                      <div className="focus-icon-wrap">
                        {focusIcons[area.id]}
                      </div>
                      <span className="focus-tag">{area.tag}</span>
                    </div>
                    <h5 className="focus-title">{area.title}</h5>
                    <p className="focus-desc">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
