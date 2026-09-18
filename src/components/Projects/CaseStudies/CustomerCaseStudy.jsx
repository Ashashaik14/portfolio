import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiAlertCircle, FiTarget, FiUsers, FiExternalLink, FiSearch, FiSliders } from 'react-icons/fi';
import UserFlowVisual from './UserFlowVisual';
import ResponsiveDeviceFrame from './ResponsiveDeviceFrame';
import './CaseStudies.css';

export default function CustomerCaseStudy({ project }) {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  return (
    <div className="case-study-container">
      {/* 1. Project Meta & Hero Header */}
      <div className="case-study-hero">
        <div className="cs-meta-bar">
          <span className="cs-number">CASE STUDY 02</span>
          <span className="cs-role-badge">Role: {project.role}</span>
          <span className="cs-tools-badge">Tools: {project.tools.join(', ')}</span>
        </div>

        <h3 className="cs-main-title">{project.title}</h3>
        <p className="cs-subtitle-text">{project.subtitle}</p>
        <p className="cs-tagline-text">{project.tagline}</p>

        {/* Main Screens List */}
        <div className="cs-screens-strip">
          <span className="screens-strip-label">Screens Designed:</span>
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
            "Overloaded customer data tables caused navigation friction and delayed customer success interventions."
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

      {/* 3. User Flow */}
      <div className="cs-section-block">
        <div className="block-title-row">
          <span className="block-index">12</span>
          <h4>Linear Customer Journey Flow</h4>
        </div>
        <UserFlowVisual flowData={project.userFlow} />
      </div>

      {/* 4. Final UI Showcase */}
      <div className="cs-section-block">
        <div className="block-title-row">
          <span className="block-index">13</span>
          <h4>Final UI: Dashboard &amp; Customer List</h4>
        </div>

        <div className="final-ui-inner customer-ui-theme">
          {/* Top Bar */}
          <div className="final-nav">
            <div className="final-brand">
              <span className="final-logo-icon customer-logo">CP</span>
              <span className="final-brand-text">ClientPulse AI</span>
            </div>
            <div className="final-search-bar">
              <FiSearch className="search-icon" />
              <input type="text" placeholder="Search enterprise accounts, ARR, or contact name..." readOnly value="Search enterprise accounts..." />
            </div>
            <div className="final-user-profile">
              <div className="user-avatar">SA</div>
              <div className="user-details">
                <span className="user-name">Ashabi</span>
                <span className="user-dept">Success Lead</span>
              </div>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="final-stats-grid">
            {project.finalUi.stats.map((stat, sIdx) => (
              <div key={sIdx} className={`final-stat-card ${stat.highlight ? 'highlight-stat' : ''}`}>
                <span className="stat-label">{stat.label}</span>
                <div className="stat-value-row">
                  <span className="stat-number">{stat.value}</span>
                </div>
                <span className="stat-change-tag">{stat.change}</span>
              </div>
            ))}
          </div>

          {/* Customer Table */}
          <div className="final-card-container">
            <div className="card-header-flex">
              <div>
                <h5 className="card-title">Customer Overview &amp; Health</h5>
                <span className="card-subtitle-small">Showing high-value corporate accounts</span>
              </div>
              <div className="table-filter-pills">
                <button className="tab-pill-btn active">All Customers</button>
                <button className="tab-pill-btn">Active</button>
                <button className="tab-pill-btn">Churn Risk</button>
              </div>
            </div>

            <div className="final-table-wrapper">
              <table className="customers-table">
                <thead>
                  <tr>
                    <th>Customer Name</th>
                    <th>Account Contact</th>
                    <th>Status</th>
                    <th>Recent Activity</th>
                    <th>Lifetime Value</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {project.finalUi.customerList.map((cust, cIdx) => (
                    <tr key={cIdx}>
                      <td className="name-cell">
                        <strong>{cust.name}</strong>
                      </td>
                      <td>{cust.contact}</td>
                      <td>
                        <span className={`status-pill pill-${cust.status.toLowerCase().replace(/\s+/g, '-')}`}>
                          {cust.status}
                        </span>
                      </td>
                      <td className="activity-cell">{cust.activity}</td>
                      <td className="ltv-cell">{cust.ltv}</td>
                      <td>
                        <button 
                          className="view-details-btn"
                          onClick={() => setSelectedCustomer(cust)}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Interactive Selected Customer Drawer Modal Preview */}
            {selectedCustomer && (
              <div className="customer-modal-preview">
                <div className="modal-header-row">
                  <div>
                    <h6>{selectedCustomer.name} — Customer Profile</h6>
                    <small>Primary Contact: {selectedCustomer.contact} • LTV: {selectedCustomer.ltv}</small>
                  </div>
                  <button className="close-modal-btn" onClick={() => setSelectedCustomer(null)}>✕ Close</button>
                </div>
                <div className="modal-body-pills">
                  <span className="pill-check">Telemetry: Health Score 96/100</span>
                  <span className="pill-check">Next Renewal: Dec 2026</span>
                  <span className="pill-check">Auto-Invoicing Enabled</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 5. Responsive Design */}
      <div className="cs-section-block">
        <div className="block-title-row">
          <span className="block-index">14</span>
          <h4>Responsive Layout &amp; Adaptation Features</h4>
        </div>
        <p className="block-desc-text">{project.responsive.explanation}</p>

        {/* Feature List */}
        <div className="responsive-features-list">
          {project.responsive.features.map((feat, fIdx) => (
            <div key={fIdx} className="res-feat-card">
              <FiCheck className="feat-check" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        <ResponsiveDeviceFrame projectType="customer" />
      </div>
    </div>
  );
}
