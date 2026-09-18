import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiAlertCircle, FiTarget, FiLayers, FiActivity, FiFigma, FiCode } from 'react-icons/fi';
import UserFlowVisual from './UserFlowVisual';
import WireframeToggle from './WireframeToggle';
import ResponsiveDeviceFrame from './ResponsiveDeviceFrame';
import './CaseStudies.css';

export default function HealthcareCaseStudy({ project }) {
  return (
    <div className="case-study-container">
      {/* 1. Project Meta & Hero Header */}
      <div className="case-study-hero">
        <div className="cs-meta-bar">
          <span className="cs-number">CASE STUDY 01</span>
          <span className="cs-role-badge">Role: {project.role}</span>
          <span className="cs-tools-badge">Tools: {project.tools.join(', ')}</span>
        </div>

        <h3 className="cs-main-title">{project.title}</h3>
        <p className="cs-subtitle-text">{project.subtitle}</p>
        <p className="cs-tagline-text">{project.tagline}</p>

        {/* Main Screens List */}
        <div className="cs-screens-strip">
          <span className="screens-strip-label">Main Screens Designed:</span>
          <div className="screens-pills-row">
            {project.mainScreens.map((screen) => (
              <span key={screen} className="screen-pill">{screen}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Problem & Design Goals */}
      <div className="cs-dual-grid">
        <div className="cs-problem-card">
          <div className="card-header-icon problem-icon">
            <FiAlertCircle />
          </div>
          <h4 className="card-block-title">The Problem</h4>
          <p className="card-block-text">{project.problem.statement}</p>
          <div className="callout-quote">
            "High cognitive load and buried patient records delay critical clinical decisions."
          </div>
        </div>

        <div className="cs-goals-card">
          <div className="card-header-icon goals-icon">
            <FiTarget />
          </div>
          <h4 className="card-block-title">Design Goals</h4>
          <ul className="goals-checklist">
            {project.problem.goals.map((goal, idx) => (
              <li key={idx}>
                <FiCheck className="goal-check" />
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 3. User Flow Architecture */}
      <div className="cs-section-block">
        <div className="block-title-row">
          <span className="block-index">06</span>
          <h4>User Flow Mapping</h4>
        </div>
        <UserFlowVisual flowData={project.userFlow} />
      </div>

      {/* 4. Wireframes & Wireframe → Final UI Transformation */}
      <div className="cs-section-block">
        <div className="block-title-row">
          <span className="block-index">07 &amp; 08</span>
          <h4>Wireframes &amp; Final UI Design</h4>
        </div>
        <p className="block-desc-text">
          Demonstrating the progression from low-fidelity black-and-white structural wireframes into high-fidelity Figma components with strict design system adherence.
        </p>
        <WireframeToggle 
          wireframeData={project.wireframe} 
          finalUiData={project.finalUi} 
          projectTitle={project.title}
        />
      </div>

      {/* 5. Responsive Design */}
      <div className="cs-section-block">
        <div className="block-title-row">
          <span className="block-index">09</span>
          <h4>Responsive Layouts Across Devices</h4>
        </div>
        <p className="block-desc-text">{project.responsive.explanation}</p>
        <ResponsiveDeviceFrame projectType="healthcare" />
      </div>
    </div>
  );
}
