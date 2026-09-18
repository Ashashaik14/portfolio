import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCornerDownRight, FiCheck } from 'react-icons/fi';
import './CaseStudies.css';

export default function UserFlowVisual({ flowData }) {
  if (!flowData) return null;

  return (
    <div className="user-flow-container">
      <div className="user-flow-header">
        <span className="flow-badge">User Flow Architecture</span>
        <p className="flow-focus-note">{flowData.focus}</p>
      </div>

      <div className="flow-paths-wrapper">
        {flowData.paths.map((path, idx) => (
          <div key={idx} className="flow-path-card">
            <div className="path-title-row">
              <span className="path-index">Flow {idx + 1}</span>
              <span className="path-name">{path.title}</span>
            </div>

            {/* Linear Step Sequence */}
            <div className="flow-steps-sequence">
              {path.steps.map((step, sIdx) => (
                <React.Fragment key={sIdx}>
                  <div className={`flow-node ${sIdx === path.steps.length - 1 ? 'node-terminal' : ''}`}>
                    <span className="node-number">{sIdx + 1}</span>
                    <span className="node-text">{step}</span>
                  </div>
                  {sIdx < path.steps.length - 1 && (
                    <div className="flow-arrow">
                      <FiArrowRight />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Branches if present */}
            {path.branches && path.branches.length > 0 && (
              <div className="flow-branches-container">
                <div className="branch-label">
                  <FiCornerDownRight className="branch-icon" />
                  <span>Sub-Sections / Features Accessible:</span>
                </div>
                <div className="branch-chips-grid">
                  {path.branches.map((branch, bIdx) => (
                    <div key={bIdx} className="branch-chip">
                      <FiCheck className="chip-icon" />
                      <span>{branch}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
