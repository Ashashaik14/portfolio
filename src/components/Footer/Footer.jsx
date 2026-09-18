import React from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <div className="footer-top-row">
          {/* Brand Column */}
          <div className="footer-brand">
            <h3 className="footer-name">SHAIK GANNARAM ASHABI</h3>
            <span className="footer-role">JUNIOR UI/UX DESIGNER</span>
          </div>

          {/* Links Column */}
          <div className="footer-links">
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="footer-nav-link"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="footer-nav-link"
            >
              GitHub
            </a>
            <a
              href={personalInfo.figmaProfile}
              target="_blank"
              rel="noreferrer"
              className="footer-nav-link"
            >
              Figma
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="footer-nav-link"
            >
              Email
            </a>
            <button
              className="footer-scroll-top"
              onClick={scrollToTop}
              title="Scroll to Top"
            >
              <span>BACK TO TOP</span>
              <FiArrowUp />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            &copy; 2026 Shaik Gannaram Ashabi. All rights reserved.
          </p>
          <span className="footer-edition">PORTFOLIO // UI/UX DESIGN EDITION</span>
        </div>
      </div>
    </footer>
  );
}
