import React from 'react';
import { motion } from 'framer-motion';
import { FiMonitor, FiTablet, FiSmartphone, FiCheck, FiLayers } from 'react-icons/fi';
import { responsiveShowcaseData } from '../../data/portfolioData';
import './ResponsiveShowcase.css';

export default function ResponsiveShowcase() {
  return (
    <section id="responsive-showcase" className="responsive-showcase-section">
      <div className="section-wrapper">
        <div className="res-showcase-header">
          <span className="section-tag">23 // RESPONSIVE DESIGN</span>
          <h2 className="section-title">
            DESIGNED FOR<br />EVERY SCREEN
          </h2>
          <div className="res-quote-box">
            <p className="res-quote-text">
              "{responsiveShowcaseData.quote}"
            </p>
          </div>
        </div>

        {/* Three versions side by side */}
        <div className="three-devices-side-by-side">
          {/* 1. Desktop 1440 x 900 */}
          <div className="device-column desktop-column">
            <div className="device-spec-tag">
              <FiMonitor className="d-icon" />
              <span>Desktop — 1440 × 900</span>
            </div>

            <div className="device-bezel desktop-bezel">
              <div className="bezel-topbar">
                <span className="b-dot" />
                <span className="b-dot" />
                <span className="b-dot" />
                <span className="browser-url">medpulse.health/dashboard</span>
              </div>
              <div className="bezel-content desktop-content">
                <div className="d-sidebar">
                  <div className="d-brand">H+</div>
                  <div className="d-nav-item active">Dash</div>
                  <div className="d-nav-item">Patients</div>
                  <div className="d-nav-item">Apts</div>
                </div>
                <div className="d-main">
                  <div className="d-hero-row">
                    <h6>Welcome, Ashabi</h6>
                    <span className="d-pill">+ Patient</span>
                  </div>
                  <div className="d-stats-4">
                    <div className="d-stat"><small>Patients</small><strong>2,840</strong></div>
                    <div className="d-stat"><small>Visits</small><strong>18</strong></div>
                    <div className="d-stat"><small>Pending</small><strong>7</strong></div>
                    <div className="d-stat"><small>Done</small><strong>142</strong></div>
                  </div>
                  <div className="d-table-preview">
                    <div className="d-table-header">Recent Patient Queue</div>
                    <div className="d-row"><span>Sarah Jenkins</span><span className="status-ok">Checked In</span></div>
                    <div className="d-row"><span>David Chen</span><span className="status-prog">Consult</span></div>
                  </div>
                </div>
              </div>
            </div>
            <p className="device-explanation">Persistent multi-column layout with expanded telemetry grids and high data density.</p>
          </div>

          {/* 2. Tablet 768 x 1024 */}
          <div className="device-column tablet-column">
            <div className="device-spec-tag">
              <FiTablet className="d-icon" />
              <span>Tablet — 768 × 1024</span>
            </div>

            <div className="device-bezel tablet-bezel">
              <div className="bezel-topbar">
                <span className="b-dot" />
                <span className="b-dot" />
                <span className="browser-url">medpulse.health</span>
              </div>
              <div className="bezel-content tablet-content">
                <div className="t-nav-bar">
                  <strong>MedPulse</strong>
                  <span>SA</span>
                </div>
                <div className="t-stats-2">
                  <div className="d-stat"><small>Patients</small><strong>2,840</strong></div>
                  <div className="d-stat"><small>Visits</small><strong>18</strong></div>
                </div>
                <div className="t-card">
                  <div className="t-card-title">Patient Queue</div>
                  <div className="d-row"><span>Sarah Jenkins</span><span className="status-ok">Active</span></div>
                  <div className="d-row"><span>David Chen</span><span className="status-prog">Consult</span></div>
                </div>
              </div>
            </div>
            <p className="device-explanation">Fluid 2-column reorganization with touch-first cards and condensed navigation.</p>
          </div>

          {/* 3. Mobile 390 x 844 */}
          <div className="device-column mobile-column">
            <div className="device-spec-tag">
              <FiSmartphone className="d-icon" />
              <span>Mobile — 390 × 844</span>
            </div>

            <div className="device-bezel mobile-bezel">
              <div className="mobile-notch-bar">
                <span className="notch-time">9:41</span>
                <span className="notch-pill" />
                <span className="notch-status">5G</span>
              </div>
              <div className="bezel-content mobile-content">
                <div className="m-header">
                  <strong>MedPulse</strong>
                  <span className="m-menu-icon">☰</span>
                </div>
                <div className="m-stat-card">
                  <small>Today's Consultations</small>
                  <h4>18 Visits Scheduled</h4>
                </div>
                <div className="m-list">
                  <div className="m-patient-card">
                    <strong>Sarah Jenkins</strong>
                    <small>Cardiology • 10:30 AM</small>
                    <span className="status-ok">Checked In</span>
                  </div>
                  <div className="m-patient-card">
                    <strong>David Chen</strong>
                    <small>Post-Op • 11:15 AM</small>
                    <span className="status-prog">In Consult</span>
                  </div>
                </div>
                <div className="m-bottom-tabs">
                  <span className="m-tab active">Home</span>
                  <span className="m-tab">Patients</span>
                  <span className="m-tab">Profile</span>
                </div>
              </div>
            </div>
            <p className="device-explanation">Single-column stack with thumb navigation and essential vital cards prioritized.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
