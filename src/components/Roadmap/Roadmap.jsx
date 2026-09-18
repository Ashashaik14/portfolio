import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiSearch, 
  FiTarget, 
  FiLayout, 
  FiFigma, 
  FiPlay, 
  FiCheckCircle, 
  FiRefreshCw, 
  FiArrowRight, 
  FiArrowDown,
  FiHelpCircle
} from 'react-icons/fi';
import { designProcessData } from '../../data/portfolioData';
import './Roadmap.css';

export default function Roadmap() {
  const stepIcons = {
    "Understand": <FiHelpCircle />,
    "Research": <FiSearch />,
    "Define": <FiTarget />,
    "Wireframe": <FiLayout />,
    "Design": <FiFigma />,
    "Prototype": <FiPlay />,
    "Test": <FiCheckCircle />,
    "Iterate": <FiRefreshCw />
  };

  return (
    <section id="process" className="roadmap-section">
      <div className="section-wrapper">
        <div className="roadmap-header">
          <span className="section-tag">20 // DESIGN PROCESS</span>
          <h2 className="section-title">
            MY DESIGN<br />PROCESS
          </h2>
          <p className="roadmap-subtitle">
            {designProcessData.intro}
          </p>
        </div>

        {/* Visual Step Sequence Pipeline */}
        <div className="process-pipeline-visual">
          <div className="pipeline-title-bar">
            <span>End-to-End Design Flow</span>
          </div>
          <div className="pipeline-steps-row">
            {designProcessData.steps.map((step, idx) => (
              <React.Fragment key={step.name}>
                <div className="pipeline-node">
                  <span className="p-num">{step.number}</span>
                  <span className="p-name">{step.name}</span>
                </div>
                {idx < designProcessData.steps.length - 1 && (
                  <div className="pipeline-arrow">
                    <FiArrowRight className="arrow-desktop" />
                    <FiArrowDown className="arrow-mobile" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 8 Process Stage Cards Grid */}
        <div className="roadmap-grid process-cards-grid">
          {designProcessData.steps.map((step, index) => (
            <motion.div
              key={step.name}
              className="roadmap-card process-stage-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className="roadmap-card-glow" />

              <div className="roadmap-card-header">
                <span className="roadmap-number">{step.number}</span>
                <div className="stage-icon-circle">
                  {stepIcons[step.name] || <FiCheckCircle />}
                </div>
              </div>

              <h3 className="roadmap-card-title">{step.name}</h3>
              <p className="roadmap-card-desc primary-desc">{step.description}</p>
              <p className="stage-detail-note">{step.details}</p>

              <div className="roadmap-card-indicator" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
