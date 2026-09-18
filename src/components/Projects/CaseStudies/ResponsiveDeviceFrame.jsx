import React, { useState } from 'react';
import { FiMonitor, FiTablet, FiSmartphone, FiCheck, FiInfo } from 'react-icons/fi';
import './CaseStudies.css';

export default function ResponsiveDeviceFrame({ projectType }) {
  const [device, setDevice] = useState('desktop'); // 'desktop' | 'tablet' | 'mobile'

  const deviceSpecs = {
    desktop: {
      name: "Desktop Screen",
      resolution: "1440 × 900",
      description: "Full multi-column dashboard with persistent navigation sidebar, expansive KPI cards, and detailed tables.",
      containerClass: "view-desktop"
    },
    tablet: {
      name: "Tablet Screen",
      resolution: "768 × 1024",
      description: "Adaptive 2-column layout with icon sidebar, compact touch cards, and responsive horizontal table scrolling.",
      containerClass: "view-tablet"
    },
    mobile: {
      name: "Mobile Screen",
      resolution: "390 × 844",
      description: "Single-column stacked hierarchy, collapsible navigation drawer, thumb-friendly tap targets, and streamlined cards.",
      containerClass: "view-mobile"
    }
  };

  const current = deviceSpecs[device];

  return (
    <div className="responsive-device-wrapper">
      <div className="responsive-controls-header">
        <div className="res-header-text">
          <span className="res-kicker">Multi-Device Strategy</span>
          <h4 className="res-title">Responsive Design Architecture</h4>
          <p className="res-subtitle">
            Engineered with fluid breakpoints so essential actions and vital information remain accessible across all form factors.
          </p>
        </div>

        <div className="res-device-buttons">
          <button
            className={`device-tab-btn ${device === 'desktop' ? 'active' : ''}`}
            onClick={() => setDevice('desktop')}
          >
            <FiMonitor />
            <span>Desktop (1440px)</span>
          </button>
          <button
            className={`device-tab-btn ${device === 'tablet' ? 'active' : ''}`}
            onClick={() => setDevice('tablet')}
          >
            <FiTablet />
            <span>Tablet (768px)</span>
          </button>
          <button
            className={`device-tab-btn ${device === 'mobile' ? 'active' : ''}`}
            onClick={() => setDevice('mobile')}
          >
            <FiSmartphone />
            <span>Mobile (390px)</span>
          </button>
        </div>
      </div>

      <div className="device-spec-banner">
        <div className="spec-info-left">
          <span className="spec-active-name">{current.name}</span>
          <span className="spec-dim-badge">{current.resolution}</span>
        </div>
        <p className="spec-info-desc">{current.description}</p>
      </div>

      {/* Simulated Device Window */}
      <div className="device-viewport-outer">
        <div className={`simulated-frame ${current.containerClass}`}>
          {/* Frame Top Bar */}
          <div className="sim-frame-bar">
            <div className="sim-dots">
              <span className="s-dot s-red" />
              <span className="s-dot s-yellow" />
              <span className="s-dot s-green" />
            </div>
            <span className="sim-url">https://ashabi.design/preview/{projectType}</span>
            <span className="sim-res-tag">{current.resolution}</span>
          </div>

          {/* Frame Content Body */}
          <div className="sim-viewport-body">
            {projectType === 'healthcare' && (
              <div className="sim-healthcare-content">
                {/* Header / Nav */}
                <div className="sim-hc-nav">
                  <div className="sim-logo">MedPulse AI</div>
                  {device === 'mobile' ? (
                    <div className="sim-mobile-burger">☰</div>
                  ) : (
                    <div className="sim-desktop-menu">
                      <span className="sim-menu-item active">Dashboard</span>
                      <span className="sim-menu-item">Patients</span>
                      <span className="sim-menu-item">Appointments</span>
                      {device === 'desktop' && <span className="sim-menu-item">Reports</span>}
                    </div>
                  )}
                  <div className="sim-profile-avatar">SA</div>
                </div>

                {/* Banner */}
                <div className="sim-hero-banner">
                  <div className="sim-banner-text">
                    <h6>Welcome, Ashabi</h6>
                    <span>Clinical Operations Dashboard</span>
                  </div>
                  <button className="sim-pill-btn">+ New Patient</button>
                </div>

                {/* Metric Cards Grid */}
                <div className={`sim-stats-grid ${device}`}>
                  <div className="sim-stat-box">
                    <span className="s-lbl">Total Patients</span>
                    <span className="s-val">2,840</span>
                  </div>
                  <div className="sim-stat-box">
                    <span className="s-lbl">Today's Visits</span>
                    <span className="s-val">18</span>
                  </div>
                  {(device === 'desktop' || device === 'tablet') && (
                    <div className="sim-stat-box">
                      <span className="s-lbl">Pending Reports</span>
                      <span className="s-val">7</span>
                    </div>
                  )}
                  {device === 'desktop' && (
                    <div className="sim-stat-box">
                      <span className="s-lbl">Completed</span>
                      <span className="s-val">142</span>
                    </div>
                  )}
                </div>

                {/* Table or Cards depending on device */}
                <div className="sim-main-section">
                  <div className="sim-section-header">
                    <span>Recent Patients</span>
                    <span className="sim-sub">Active Consultation</span>
                  </div>
                  <div className="sim-rows-list">
                    <div className="sim-row-item">
                      <div className="sim-row-col">
                        <strong>Sarah Jenkins</strong>
                        <small>Cardiology • 10:30 AM</small>
                      </div>
                      <span className="sim-status-chip chip-green">Checked In</span>
                    </div>
                    <div className="sim-row-item">
                      <div className="sim-row-col">
                        <strong>David Chen</strong>
                        <small>Post-Op • 11:15 AM</small>
                      </div>
                      <span className="sim-status-chip chip-blue">In Consult</span>
                    </div>
                    {device !== 'mobile' && (
                      <div className="sim-row-item">
                        <div className="sim-row-col">
                          <strong>Priya Sharma</strong>
                          <small>Annual Wellness • 01:00 PM</small>
                        </div>
                        <span className="sim-status-chip chip-gray">Scheduled</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {projectType === 'customer' && (
              <div className="sim-customer-content">
                <div className="sim-hc-nav">
                  <div className="sim-logo">ClientPulse AI</div>
                  {device === 'mobile' ? (
                    <div className="sim-mobile-burger">☰</div>
                  ) : (
                    <div className="sim-desktop-menu">
                      <span className="sim-menu-item active">Overview</span>
                      <span className="sim-menu-item">Customers</span>
                      <span className="sim-menu-item">Analytics</span>
                      {device === 'desktop' && <span className="sim-menu-item">Reports</span>}
                    </div>
                  )}
                  <div className="sim-profile-avatar">SA</div>
                </div>

                <div className={`sim-stats-grid ${device}`}>
                  <div className="sim-stat-box">
                    <span className="s-lbl">Total Customers</span>
                    <span className="s-val">14,250</span>
                  </div>
                  <div className="sim-stat-box">
                    <span className="s-lbl">Active Now</span>
                    <span className="s-val">9,820</span>
                  </div>
                  {(device === 'desktop' || device === 'tablet') && (
                    <div className="sim-stat-box">
                      <span className="s-lbl">New Leads</span>
                      <span className="s-val">412</span>
                    </div>
                  )}
                  {device === 'desktop' && (
                    <div className="sim-stat-box">
                      <span className="s-lbl">Retention</span>
                      <span className="s-val">99.4%</span>
                    </div>
                  )}
                </div>

                <div className="sim-main-section">
                  <div className="sim-section-header">
                    <span>Customer Activity Table</span>
                    <span className="sim-sub">Live Telemetry</span>
                  </div>
                  <div className="sim-rows-list">
                    <div className="sim-row-item">
                      <div className="sim-row-col">
                        <strong>Acme Cloud Corp</strong>
                        <small>Contact: Alex Rivera</small>
                      </div>
                      <span className="sim-status-chip chip-green">Active</span>
                      <button className="sim-mini-btn">View Details</button>
                    </div>
                    <div className="sim-row-item">
                      <div className="sim-row-col">
                        <strong>Nova Fintech</strong>
                        <small>Contact: Emily Watson</small>
                      </div>
                      <span className="sim-status-chip chip-green">Active</span>
                      <button className="sim-mini-btn">View Details</button>
                    </div>
                    {device !== 'mobile' && (
                      <div className="sim-row-item">
                        <div className="sim-row-col">
                          <strong>BlueSky Logistics</strong>
                          <small>Contact: Rahul Mehra</small>
                        </div>
                        <span className="sim-status-chip chip-yellow">Onboarding</span>
                        <button className="sim-mini-btn">View Details</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
