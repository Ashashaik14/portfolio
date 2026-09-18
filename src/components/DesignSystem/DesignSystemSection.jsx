import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLayers, FiSearch, FiChevronDown, FiX, FiCheck, FiArrowRight } from 'react-icons/fi';
import { designSystemData } from '../../data/portfolioData';
import './DesignSystemSection.css';

export default function DesignSystemSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState("Healthcare Department (Cardio)");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [testInput, setTestInput] = useState("Ashabi Shaik");

  const dropdownOptions = [
    "Healthcare Department (Cardio)",
    "Customer Success (Enterprise)",
    "Movie Analytics (Production)",
    "System Settings"
  ];

  return (
    <section id="design-system" className="design-system-section">
      <div className="section-wrapper">
        <div className="ds-header">
          <span className="section-tag">22 // DESIGN SYSTEM</span>
          <h2 className="section-title">
            DESIGN SYSTEM<br />SPECIFICATION
          </h2>
          <p className="ds-subtitle">
            {designSystemData.intro}
          </p>
        </div>

        {/* 1. Typography Specimen */}
        <div className="ds-block">
          <div className="ds-block-header">
            <span className="ds-block-kicker">Typography Scale</span>
            <h3>Typography Hierarchy</h3>
            <p className="ds-block-desc">Inter font family across consistent weight and optical scale tiers.</p>
          </div>

          <div className="typography-specimen-grid">
            {designSystemData.typography.map((type, tIdx) => (
              <div key={tIdx} className="type-specimen-card">
                <div className="type-spec-meta">
                  <span className="type-tier-label">{type.label}</span>
                  <span className="type-tech-specs">{type.font} — {type.weight} — {type.size}</span>
                </div>
                <div className={`type-preview-text tier-${type.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  {type.sample}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Color Palette Swatches */}
        <div className="ds-block">
          <div className="ds-block-header">
            <span className="ds-block-kicker">Color Architecture</span>
            <h3>Core Color Palette</h3>
            <p className="ds-block-desc">Purpose-built contrast ratios meeting WCAG AA accessibility standards.</p>
          </div>

          <div className="color-swatches-grid">
            {designSystemData.colors.map((color, cIdx) => (
              <div key={cIdx} className="color-swatch-card">
                <div 
                  className="swatch-color-box" 
                  style={{ 
                    backgroundColor: color.hex,
                    border: color.hex === '#F8FAFC' || color.hex === '#E5E7EB' ? '1px solid #CBD5E1' : 'none'
                  }}
                >
                  <span className="swatch-contrast-label" style={{ color: color.textColor }}>
                    {color.name}
                  </span>
                </div>
                <div className="swatch-meta">
                  <div className="swatch-hex-row">
                    <strong className="swatch-name">{color.name}</strong>
                    <span className="swatch-hex">{color.hex}</span>
                  </div>
                  <span className="swatch-role">{color.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Live Interactive UI Components */}
        <div className="ds-block">
          <div className="ds-block-header">
            <span className="ds-block-kicker">Component Library</span>
            <h3>UI Component Specimens</h3>
            <p className="ds-block-desc">Reusable, accessible tokens tested across states and responsive viewports.</p>
          </div>

          <div className="components-specimens-canvas">
            {/* Component 1: Buttons */}
            <div className="component-showcase-box">
              <span className="comp-label">1 &amp; 2. Primary &amp; Secondary Buttons</span>
              <div className="buttons-demo-row">
                <button className="ds-btn-primary">
                  <span>Primary Button</span>
                  <FiArrowRight />
                </button>
                <button className="ds-btn-secondary">
                  <span>Secondary Button</span>
                </button>
                <button className="ds-btn-primary" disabled>
                  <span>Disabled State</span>
                </button>
              </div>
            </div>

            {/* Component 2: Inputs & Search Bar */}
            <div className="component-showcase-box">
              <span className="comp-label">3 &amp; 4. Input Field &amp; Search Bar</span>
              <div className="inputs-demo-row">
                <div className="ds-field-group">
                  <label>Input Field (Interactive)</label>
                  <input 
                    type="text" 
                    value={testInput} 
                    onChange={(e) => setTestInput(e.target.value)} 
                    className="ds-input-element" 
                    placeholder="Enter designer name..." 
                  />
                </div>
                <div className="ds-field-group">
                  <label>Search Bar</label>
                  <div className="ds-search-wrapper">
                    <FiSearch className="ds-search-icon" />
                    <input 
                      type="text" 
                      defaultValue="Search patient records or telemetry..." 
                      className="ds-search-element" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Component 3: Navigation Specimen */}
            <div className="component-showcase-box">
              <span className="comp-label">5. Navigation Bar Specimen</span>
              <div className="ds-nav-specimen">
                <div className="ds-nav-brand">
                  <span className="brand-circle">H+</span>
                  <span className="brand-text">MedPulse AI</span>
                </div>
                <div className="ds-nav-links">
                  <span className="nav-item active">Dashboard</span>
                  <span className="nav-item">Patients</span>
                  <span className="nav-item">Appointments</span>
                  <span className="nav-item">Reports</span>
                </div>
                <button className="ds-nav-cta">Action</button>
              </div>
            </div>

            {/* Component 4: Card Component Specimen */}
            <div className="component-showcase-box">
              <span className="comp-label">6. Card Component Specimen</span>
              <div className="ds-card-specimen">
                <div className="ds-card-head">
                  <div>
                    <h6>Clinical Patient Consultation</h6>
                    <small>Department: Routine Cardiology</small>
                  </div>
                  <span className="ds-status-badge">Active Visit</span>
                </div>
                <p className="ds-card-body-text">
                  Standardized high-contrast card surface styled with a subtle 1px border (#E5E7EB) and soft elevation shadows.
                </p>
                <div className="ds-card-footer">
                  <span className="ds-meta-pill">Doctor: Dr. Alena Vance</span>
                  <button className="ds-text-btn">View Full Details →</button>
                </div>
              </div>
            </div>

            {/* Component 5: Dropdown & Modal Demo */}
            <div className="component-showcase-box">
              <span className="comp-label">7 &amp; 8. Dropdown Menu &amp; Modal Dialog</span>
              <div className="dropdown-modal-demo-row">
                {/* Dropdown */}
                <div className="ds-dropdown-wrapper">
                  <span className="micro-label">Interactive Dropdown Select:</span>
                  <button 
                    className="ds-dropdown-btn"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <span>{selectedDropdown}</span>
                    <FiChevronDown className={`chevron-icon ${dropdownOpen ? 'rotate' : ''}`} />
                  </button>

                  {dropdownOpen && (
                    <div className="ds-dropdown-menu">
                      {dropdownOptions.map((opt) => (
                        <div 
                          key={opt} 
                          className={`ds-dropdown-item ${selectedDropdown === opt ? 'active' : ''}`}
                          onClick={() => {
                            setSelectedDropdown(opt);
                            setDropdownOpen(false);
                          }}
                        >
                          <FiCheck className={`item-check ${selectedDropdown === opt ? 'visible' : ''}`} />
                          <span>{opt}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Modal Trigger */}
                <div className="ds-modal-trigger-wrapper">
                  <span className="micro-label">Interactive Modal Dialog:</span>
                  <button 
                    className="ds-btn-primary"
                    onClick={() => setModalOpen(true)}
                  >
                    <span>Open Modal Dialog</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Modal Dialog */}
        <AnimatePresence>
          {modalOpen && (
            <div className="ds-modal-backdrop" onClick={() => setModalOpen(false)}>
              <motion.div 
                className="ds-modal-card"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
              >
                <div className="modal-top">
                  <h5>Design System Modal Component</h5>
                  <button className="modal-close-icon" onClick={() => setModalOpen(false)}>
                    <FiX />
                  </button>
                </div>
                <p className="modal-desc">
                  This modal demonstrates keyboard trapping, backdrop blur, high visual hierarchy, and cohesive #4F46E5 branding.
                </p>
                <div className="modal-actions-row">
                  <button className="ds-btn-secondary" onClick={() => setModalOpen(false)}>
                    Cancel
                  </button>
                  <button className="ds-btn-primary" onClick={() => setModalOpen(false)}>
                    Confirm Action
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
