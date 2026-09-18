import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLayout, FiActivity, FiUsers, FiFilm, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { projectsData } from '../../data/portfolioData';
import HealthcareCaseStudy from './CaseStudies/HealthcareCaseStudy';
import CustomerCaseStudy from './CaseStudies/CustomerCaseStudy';
import MovieCaseStudy from './CaseStudies/MovieCaseStudy';
import './Projects.css';

export default function Projects() {
  const [activeProjectTab, setActiveProjectTab] = useState(projectsData[0].id);

  const getProjectIcon = (id) => {
    switch(id) {
      case 'healthcare-system': return <FiActivity />;
      case 'customer-system': return <FiUsers />;
      case 'movie-prediction': return <FiFilm />;
      default: return <FiLayout />;
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="projects-header">
          <div className="header-meta-row">
            <span className="section-tag">04 // SELECTED PROJECTS</span>
            <div className="process-pill-badge">
              <span>Process: Problem → Flow → Wireframe → UI → Responsive</span>
            </div>
          </div>

          <h2 className="section-title">
            SELECTED<br />UI/UX PROJECTS
          </h2>

          <p className="projects-subtitle">
            Every project demonstrates human-centered problem solving, information architecture, Figma design systems, and responsive layouts.
          </p>
        </div>

        {/* Interactive Case Study Project Switcher Tabs */}
        <div className="projects-nav-tabs">
          {projectsData.map((project) => {
            const isActive = activeProjectTab === project.id;
            return (
              <button
                key={project.id}
                className={`project-tab-btn ${isActive ? 'tab-active' : ''}`}
                onClick={() => setActiveProjectTab(project.id)}
              >
                <div className="tab-icon-wrap">
                  {getProjectIcon(project.id)}
                </div>
                <div className="tab-text-wrap">
                  <span className="tab-number">PROJECT {project.number}</span>
                  <span className="tab-name">{project.title}</span>
                </div>
                {isActive && (
                  <motion.div
                    className="tab-active-indicator"
                    layoutId="activeProjectTab"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Render Active Case Study */}
        <div className="project-active-display">
          <AnimatePresence mode="wait">
            {activeProjectTab === 'healthcare-system' && (
              <motion.div
                key="healthcare-system"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <HealthcareCaseStudy project={projectsData[0]} />
              </motion.div>
            )}

            {activeProjectTab === 'customer-system' && (
              <motion.div
                key="customer-system"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <CustomerCaseStudy project={projectsData[1]} />
              </motion.div>
            )}

            {activeProjectTab === 'movie-prediction' && (
              <motion.div
                key="movie-prediction"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <MovieCaseStudy project={projectsData[2]} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
