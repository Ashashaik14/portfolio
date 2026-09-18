import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'about', 'skills', 'projects', 'process', 'figma-skills', 'design-system', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    { name: 'SKILLS', id: 'skills' },
    { name: 'PROJECTS', id: 'projects' },
    { name: 'PROCESS', id: 'process' },
    { name: 'FIGMA', id: 'figma-skills' },
    { name: 'SYSTEM', id: 'design-system' },
    { name: 'CONTACT', id: 'contact' }
  ];

  return (
    <>
      <motion.header
        className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo" onClick={() => scrollToSection('home')}>
            <span className="logo-badge">UI/UX</span>
            <span className="logo-name">Ashabi</span>
            <span className="logo-dot">.</span>
          </div>

          {/* Desktop Nav */}
          <nav className="navbar-desktop-nav">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                  onClick={() => scrollToSection(link.id)}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.span
                      className="nav-active-pill"
                      layoutId="activePill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Contact CTA */}
          <button
            className="navbar-cta-btn"
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </button>

          {/* Mobile Hamburger Button */}
          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <HiX size={26} /> : <HiMenuAlt4 size={26} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="navbar-mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-drawer-links">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  className="mobile-nav-link"
                  onClick={() => scrollToSection(link.id)}
                >
                  {link.name}
                </button>
              ))}
            </div>
            <div className="mobile-drawer-footer">
              <span className="drawer-role">SHAIK GANNARAM ASHABI // JUNIOR UI/UX DESIGNER</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
