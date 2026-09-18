import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Expertise from './components/Expertise/Expertise';
import Projects from './components/Projects/Projects';
import Roadmap from './components/Roadmap/Roadmap';
import Capabilities from './components/Capabilities/Capabilities';
import DesignSystemSection from './components/DesignSystem/DesignSystemSection';
import ResponsiveShowcase from './components/ResponsiveShowcase/ResponsiveShowcase';
import HtmlCssSection from './components/HtmlCss/HtmlCssSection';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Cursor from './components/Cursor/Cursor';
import './App.css';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app-container">
      {/* Interactive Custom Cursor */}
      <Cursor />

      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {loading && (
          <Loader onLoadingComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* Atmospheric Background FX */}
      <div className="ambient-glow-top" />
      <div className="ambient-glow-side" />
      <div className="grid-overlay" />
      <div className="vignette-overlay" />

      {/* Main Website Experience */}
      {!loading && (
        <motion.main
          className="main-site-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <Navbar />
          {/* 01 Cover */}
          <Hero />
          {/* 02 About Me */}
          <About />
          {/* 03 Skills */}
          <Expertise />
          {/* 04-19 Selected Projects & Case Studies (Healthcare, Customer, Movie) */}
          <Projects />
          {/* 20 Design Process (Appears after projects) */}
          <Roadmap />
          {/* 21 Figma Skills */}
          <Capabilities />
          {/* 22 Design System */}
          <DesignSystemSection />
          {/* 23 Responsive Design (Designed for Every Screen) */}
          <ResponsiveShowcase />
          {/* 24 HTML & CSS (Design + Dev Awareness) */}
          <HtmlCssSection />
          {/* 25-26 Contact Page */}
          <Contact />
          <Footer />
        </motion.main>
      )}
    </div>
  );
}
