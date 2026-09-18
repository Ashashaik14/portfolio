import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLayout, FiCheckCircle, FiSearch, FiUser, FiSliders, FiEye } from 'react-icons/fi';
import './CaseStudies.css';

export default function WireframeToggle({ wireframeData, finalUiData, projectTitle }) {
  const [viewMode, setViewMode] = useState('transformation'); // 'wireframe' | 'final' | 'transformation'

  return (
    <div className="wireframe-toggle-wrapper">
      <div className="toggle-control-bar">
        <div className="toggle-info">
          <span className="process-pill">Process Evolution</span>
          <h4 className="toggle-title">Wireframe → Final Figma UI Transformation</h4>
        </div>

        <div className="mode-switch-pills">
          <button 
            className={`switch-btn ${viewMode === 'wireframe' ? 'active' : ''}`}
            onClick={() => setViewMode('wireframe')}
          >
            <FiLayout />
            <span>Low-Fi Wireframe</span>
          </button>
          <button 
            className={`switch-btn ${viewMode === 'transformation' ? 'active' : ''}`}
            onClick={() => setViewMode('transformation')}
          >
            <FiSliders />
            <span>Side-by-Side Comparison</span>
          </button>
          <button 
            className={`switch-btn ${viewMode === 'final' ? 'active' : ''}`}
            onClick={() => setViewMode('final')}
          >
            <FiEye />
            <span>Polished Final UI</span>
          </button>
        </div>
      </div>

      <div className={`preview-canvas-container mode-${viewMode}`}>
        {/* Wireframe View */}
        {(viewMode === 'wireframe' || viewMode === 'transformation') && (
          <div className="canvas-frame wireframe-frame">
            <div className="frame-meta-bar">
              <span className="frame-label">LOW-FIDELITY WIREFRAME (B&amp;W)</span>
              <span className="frame-tech">Figma Canvas • Layout &amp; Architecture</span>
            </div>

            <div className="wireframe-mockup-inner">
              {/* Header wireframe */}
              <div className="wf-navbar">
                <div className="wf-box wf-logo">LOGO</div>
                <div className="wf-box wf-search">
                  <FiSearch /> Search Patients, Doctors or Records...
                </div>
                <div className="wf-box wf-profile">
                  <FiUser /> Profile
                </div>
              </div>

              {/* Welcome banner */}
              <div className="wf-welcome-banner">
                <div className="wf-welcome-text">
                  <h5>Welcome, Ashabi</h5>
                  <p>Clinical overview &amp; daily department schedule</p>
                </div>
                <div className="wf-btn-group">
                  <div className="wf-btn active">Patients</div>
                  <div className="wf-btn">Appointments</div>
                </div>
              </div>

              {/* Stats wireframe */}
              <div className="wf-stats-grid">
                <div className="wf-stat-card">
                  <div className="wf-line w-40" />
                  <div className="wf-number">2,840</div>
                  <div className="wf-line w-70" />
                </div>
                <div className="wf-stat-card">
                  <div className="wf-line w-40" />
                  <div className="wf-number">18</div>
                  <div className="wf-line w-70" />
                </div>
                <div className="wf-stat-card">
                  <div className="wf-line w-40" />
                  <div className="wf-number">7</div>
                  <div className="wf-line w-70" />
                </div>
                <div className="wf-stat-card">
                  <div className="wf-line w-40" />
                  <div className="wf-number">142</div>
                  <div className="wf-line w-70" />
                </div>
              </div>

              {/* Recent Patients Section Wireframe */}
              <div className="wf-panel">
                <div className="wf-panel-header">
                  <span>Recent Patients</span>
                  <span className="wf-subtext">View All (42)</span>
                </div>
                <div className="wf-list-rows">
                  <div className="wf-row">
                    <div className="wf-circle" />
                    <div className="wf-row-content">
                      <div className="wf-line w-30" />
                      <div className="wf-line w-50" />
                    </div>
                    <div className="wf-badge-placeholder">Status</div>
                  </div>
                  <div className="wf-row">
                    <div className="wf-circle" />
                    <div className="wf-row-content">
                      <div className="wf-line w-40" />
                      <div className="wf-line w-60" />
                    </div>
                    <div className="wf-badge-placeholder">Status</div>
                  </div>
                </div>
              </div>

              {/* Bottom Nav Wireframe */}
              <div className="wf-bottom-nav">
                <span>Dashboard</span>
                <span className="wf-active-tab">Patients</span>
                <span>Appointments</span>
                <span>Reports</span>
                <span>More</span>
              </div>
            </div>
          </div>
        )}

        {/* Final Polished UI View */}
        {(viewMode === 'final' || viewMode === 'transformation') && (
          <div className="canvas-frame final-ui-frame">
            <div className="frame-meta-bar final-bar">
              <span className="frame-label">POLISHED FIGMA FINAL UI</span>
              <span className="frame-tech">Design System: #4F46E5 • Inter • WCAG Compliant</span>
            </div>

            <div className="final-ui-inner">
              {/* Top Navigation */}
              <div className="final-nav">
                <div className="final-brand">
                  <span className="final-logo-icon">H+</span>
                  <span className="final-brand-text">MedPulse AI</span>
                </div>
                <div className="final-search-bar">
                  <FiSearch className="search-icon" />
                  <input type="text" placeholder="Search patient ID, name, or records..." readOnly value="Search patient details..." />
                </div>
                <div className="final-user-profile">
                  <div className="user-avatar">SA</div>
                  <div className="user-details">
                    <span className="user-name">Ashabi</span>
                    <span className="user-dept">Chief Administrator</span>
                  </div>
                </div>
              </div>

              {/* Welcome Section */}
              <div className="final-welcome-row">
                <div>
                  <h4 className="welcome-title">Welcome back, Ashabi</h4>
                  <p className="welcome-sub">Here is your hospital's live patient status and consultation schedule for today.</p>
                </div>
                <div className="final-quick-actions">
                  <button className="final-btn-primary">+ Admit Patient</button>
                  <button className="final-btn-secondary">Export Log</button>
                </div>
              </div>

              {/* Metric Cards */}
              <div className="final-stats-grid">
                {finalUiData.stats.map((stat, sIdx) => (
                  <div key={sIdx} className={`final-stat-card ${stat.highlight ? 'highlight-stat' : ''}`}>
                    <span className="stat-label">{stat.label}</span>
                    <div className="stat-value-row">
                      <span className="stat-number">{stat.value}</span>
                    </div>
                    <span className="stat-change-tag">{stat.change}</span>
                  </div>
                ))}
              </div>

              {/* Recent Patients Table & Upcoming Appointments */}
              <div className="final-content-columns">
                {/* Patients Table */}
                <div className="final-card-container">
                  <div className="card-header-flex">
                    <h5 className="card-title">Recent Patients</h5>
                    <button className="card-action-btn">View All</button>
                  </div>

                  <div className="final-table-wrapper">
                    <table className="patients-table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Patient Name</th>
                          <th>Condition</th>
                          <th>Status</th>
                          <th>Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        {finalUiData.recentPatients.map((patient) => (
                          <tr key={patient.id}>
                            <td className="id-cell">{patient.id}</td>
                            <td className="name-cell">
                              <strong>{patient.name}</strong>
                              <span className="age-span">Age {patient.age}</span>
                            </td>
                            <td>{patient.condition}</td>
                            <td>
                              <span className={`status-pill pill-${patient.status.toLowerCase().replace(/\s+/g, '-')}`}>
                                {patient.status}
                              </span>
                            </td>
                            <td className="time-cell">{patient.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Upcoming Appointments */}
                <div className="final-card-container">
                  <div className="card-header-flex">
                    <h5 className="card-title">Upcoming Appointments</h5>
                    <span className="badge-count">3 Today</span>
                  </div>

                  <div className="appointments-list">
                    {finalUiData.upcomingAppointments.map((apt, aIdx) => (
                      <div key={aIdx} className="appointment-card-item">
                        <div className="apt-time-badge">{apt.time}</div>
                        <div className="apt-info">
                          <div className="apt-patient-name">{apt.patient}</div>
                          <div className="apt-room">{apt.room}</div>
                        </div>
                        <span className="apt-type-tag">{apt.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
