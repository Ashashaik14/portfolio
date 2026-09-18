import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiGithub, FiCheckCircle } from 'react-icons/fi';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          className="modal-container"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Close Button */}
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <FiX size={20} />
          </button>

          {/* Modal Header */}
          <div className="modal-header">
            <span className="modal-tag">{project.tagline}</span>
            <h2 className="modal-title">{project.title}</h2>
          </div>

          {/* Visual Preview */}
          <div className="modal-image-wrapper">
            <img src={project.image} alt={project.title} className="modal-preview-img" />
          </div>

          {/* Body Content */}
          <div className="modal-body">
            <div className="modal-desc-col">
              <h3 className="modal-section-title">Project Overview</h3>
              <p className="modal-description">{project.description}</p>
              <p className="modal-detailed">{project.detailedInfo}</p>

              <h3 className="modal-section-title" style={{ marginTop: '24px' }}>Tech &amp; Methodologies</h3>
              <div className="modal-skills-list">
                {project.skills.map((s, idx) => (
                  <span key={idx} className="modal-skill-chip">{s}</span>
                ))}
              </div>
            </div>

            <div className="modal-metrics-col">
              <h3 className="modal-section-title">Key Analytics Metrics</h3>
              <div className="modal-metrics-grid">
                {project.metrics && project.metrics.map((m, idx) => (
                  <div key={idx} className="modal-metric-card">
                    <span className="modal-metric-val">{m.value}</span>
                    <span className="modal-metric-lbl">{m.label}</span>
                  </div>
                ))}
              </div>

              <div className="modal-actions-row">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-action-btn secondary"
                >
                  <FiGithub />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
