import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiLinkedin, FiGithub, FiFigma, FiCheckCircle, FiCopy, FiSend } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-ambient-glow" />

      <div className="section-wrapper">
        <div className="contact-content-grid">
          {/* Left Column: Heading, Role & Pitch */}
          <div className="contact-left-col">
            <span className="section-tag">24 // CONTACT</span>
            <motion.h2
              className="contact-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              LET'S<br />
              <span className="heading-accent">CONNECT.</span>
            </motion.h2>

            <div className="designer-title-card">
              <h3 className="designer-name">{personalInfo.name}</h3>
              <span className="designer-badge">{personalInfo.title}</span>
            </div>

            <motion.p
              className="contact-subtext"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I'm interested in opportunities where I can learn, contribute and grow as a UI/UX Designer.
            </motion.p>

            <motion.div
              className="contact-actions-list"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <a
                href={`mailto:${personalInfo.email}`}
                className="contact-btn primary"
              >
                <FiMail />
                <span>Email: {personalInfo.email}</span>
                <FiArrowRight className="action-arrow" />
              </a>

              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="contact-btn secondary"
              >
                <FiLinkedin />
                <span>LinkedIn: Asha Shaik</span>
                <FiArrowRight className="action-arrow" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="contact-btn secondary"
              >
                <FiGithub />
                <span>GitHub: Ashashaik14</span>
                <FiArrowRight className="action-arrow" />
              </a>

              <a
                href={personalInfo.figmaProfile}
                target="_blank"
                rel="noreferrer"
                className="contact-btn secondary figma-btn"
              >
                <FiFigma />
                <span>Figma: Shaik Gannaram Ashabi</span>
                <FiArrowRight className="action-arrow" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Direct Message Form Card */}
          <motion.div
            className="contact-right-col"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="contact-transmission-card">
              <div className="card-telemetry-header">
                <div className="telemetry-pulse-box">
                  <span className="telemetry-dot" />
                  <span className="telemetry-title">DIRECT INQUIRY // ACTIVE</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="quick-copy-btn"
                  title="Copy email address"
                  type="button"
                >
                  {copied ? <FiCheckCircle className="copy-ok" /> : <FiCopy />}
                  <span>{copied ? "COPIED" : "COPY EMAIL"}</span>
                </button>
              </div>

              <div className="card-inner-message-form">
                {formSent ? (
                  <div className="form-success-banner">
                    <FiCheckCircle className="success-icon" />
                    <h5>Thank you for reaching out!</h5>
                    <p>Your message has been dispatched to Shaik Gannaram Ashabi. I'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSendMessage} className="inquiry-form">
                    <div className="form-input-field">
                      <label>Your Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Alex Henderson" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>

                    <div className="form-input-field">
                      <label>Email Address</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="alex@company.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    <div className="form-input-field">
                      <label>Project / Opportunity Details</label>
                      <textarea 
                        rows={4} 
                        required 
                        placeholder="Tell me about the UI/UX role, project scope, or collaboration..." 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    <button type="submit" className="contact-submit-btn">
                      <span>Contact Me</span>
                      <FiSend />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
