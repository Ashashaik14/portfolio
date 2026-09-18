import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

export default function Loader({ onLoadingComplete }) {
  const [percent, setPercent] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING ENVIRONMENT...');

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Smooth progression
        const step = prev < 60 ? Math.floor(Math.random() * 4) + 2 : Math.floor(Math.random() * 3) + 1;
        const next = Math.min(100, prev + step);

        if (next > 25 && next < 55) {
          setStatusText('INITIALIZING FIGMA DESIGN CANVAS...');
        } else if (next >= 55 && next < 85) {
          setStatusText('LOADING INTERACTIVE WIREFRAMES...');
        } else if (next >= 85) {
          setStatusText('RENDERING DESIGN SYSTEM SPECIMENS...');
        }

        return next;
      });
    }, 35);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (percent === 100) {
      const timeout = setTimeout(() => {
        onLoadingComplete();
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [percent, onLoadingComplete]);

  return (
    <motion.div
      className="loader-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
    >
      <div className="loader-ambient-glow" />

      {/* Top telemetry bar */}
      <div className="loader-top-bar">
        <div className="loader-top-left">
          <span className="loader-blink-dot" />
          <span>INITIALIZING DESIGN SYSTEM</span>
        </div>
        <div className="loader-top-right">
          <span>PORTFOLIO 2026</span>
        </div>
      </div>

      {/* Center content */}
      <div className="loader-center-content">
        <motion.h1
          className="loader-name"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          SHAIK GANNARAM ASHABI
        </motion.h1>

        <motion.div
          className="loader-role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          JUNIOR UI/UX DESIGNER
        </motion.div>

        <div className="loader-percentage-display">
          <span className="loader-number">{String(percent).padStart(2, '0')}</span>
          <span className="loader-percent-symbol">%</span>
        </div>
      </div>

      {/* Bottom status & progress bar */}
      <div className="loader-bottom-bar">
        <div className="loader-progress-track">
          <motion.div
            className="loader-progress-fill"
            style={{ width: `${percent}%` }}
          />
        </div>

        <div className="loader-status-row">
          <span className="loader-status-text">{statusText}</span>
          <span className="loader-secure-text">SECURE CONNECTION // 256-BIT</span>
        </div>
      </div>
    </motion.div>
  );
}
