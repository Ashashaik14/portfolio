import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiAlertCircle, FiTarget, FiFilm, FiPlay, FiBarChart2, FiPieChart, FiTrendingUp } from 'react-icons/fi';
import UserFlowVisual from './UserFlowVisual';
import './CaseStudies.css';

export default function MovieCaseStudy({ project }) {
  // Interactive Form State
  const [formData, setFormData] = useState({
    movieName: "Vanguard Odyssey",
    genre: "Action / Sci-Fi",
    director: "Christopher Nolan",
    leadActor: "Leonardo DiCaprio",
    budget: "₹65 Cr",
    releaseYear: "2026"
  });

  const [predictedResult, setPredictedResult] = useState(project.resultsScreen);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePredict = (e) => {
    e.preventDefault();
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setPredictedResult({
        predictedOutcome: "High Box-Office Potential (Hit)",
        summary: `Strong historical alignment for ${formData.director} directing a ${formData.genre} production with ${formData.budget} capital allocation.`,
        movie: formData.movieName,
        genre: formData.genre,
        budget: formData.budget,
        releaseYear: formData.releaseYear,
        indicators: [
          { metric: "Historical Genre Alignment", score: "88/100", status: "Optimal" },
          { metric: "Director Track Record", score: "91/100", status: "High Impact" },
          { metric: "Budget-to-Screen Ratio", score: "84/100", status: "Balanced" }
        ]
      });
    }, 450);
  };

  return (
    <div className="case-study-container">
      {/* 1. Project Meta & Hero Header */}
      <div className="case-study-hero">
        <div className="cs-meta-bar">
          <span className="cs-number">CASE STUDY 03</span>
          <span className="cs-role-badge">Role: {project.role}</span>
          <span className="cs-tools-badge">Tools: {project.tools.join(', ')}</span>
        </div>

        <h3 className="cs-main-title">{project.title}</h3>
        <p className="cs-subtitle-text">{project.subtitle}</p>
        <p className="cs-tagline-text">{project.tagline}</p>
      </div>

      {/* 2. Problem & Design Goals */}
      <div className="cs-dual-grid">
        <div className="cs-problem-card">
          <div className="card-header-icon problem-icon">
            <FiAlertCircle />
          </div>
          <h4 className="card-block-title">The Problem</h4>
          <p className="card-block-text">{project.problem.statement}</p>
          <div className="callout-quote">
            "Excessive statistical jargon creates cognitive overload, preventing producers from acting on insights."
          </div>
        </div>

        <div className="cs-goals-card">
          <div className="card-header-icon goals-icon">
            <FiTarget />
          </div>
          <h4 className="card-block-title">Design Goals</h4>
          <ul className="goals-checklist">
            {project.problem.goals.map((goal, idx) => (
              <li key={idx}>
                <FiCheck className="goal-check" />
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 3. User Flow */}
      <div className="cs-section-block">
        <div className="block-title-row">
          <span className="block-index">17</span>
          <h4>Predictive Analytics User Flow</h4>
        </div>
        <UserFlowVisual flowData={project.userFlow} />
      </div>

      {/* 4. Section 18: Input Screen & Section 19: Results Screen */}
      <div className="cs-section-block">
        <div className="block-title-row">
          <span className="block-index">18 &amp; 19</span>
          <h4>Interactive Input Screen &amp; Prediction Outcome</h4>
        </div>
        <p className="block-desc-text">
          Designed with clean form input grouping and immediate visual feedback to eliminate confusion.
        </p>

        <div className="movie-interactive-split">
          {/* Form Input Screen */}
          <div className="movie-form-card">
            <div className="form-header-row">
              <span className="form-step-badge">Screen 01 // Input Details</span>
              <h5>Enter Movie Parameters</h5>
            </div>

            <form onSubmit={handlePredict} className="movie-form-body">
              <div className="form-group-field">
                <label>Movie Name</label>
                <input 
                  type="text" 
                  value={formData.movieName} 
                  onChange={(e) => handleInputChange('movieName', e.target.value)}
                  placeholder="e.g. Inception Horizon" 
                  required 
                />
              </div>

              <div className="form-row-two-col">
                <div className="form-group-field">
                  <label>Genre</label>
                  <input 
                    type="text" 
                    value={formData.genre} 
                    onChange={(e) => handleInputChange('genre', e.target.value)}
                    placeholder="Action, Sci-Fi" 
                    required 
                  />
                </div>
                <div className="form-group-field">
                  <label>Release Year</label>
                  <input 
                    type="text" 
                    value={formData.releaseYear} 
                    onChange={(e) => handleInputChange('releaseYear', e.target.value)}
                    placeholder="2026" 
                    required 
                  />
                </div>
              </div>

              <div className="form-row-two-col">
                <div className="form-group-field">
                  <label>Director</label>
                  <input 
                    type="text" 
                    value={formData.director} 
                    onChange={(e) => handleInputChange('director', e.target.value)}
                    placeholder="e.g. Christopher Nolan" 
                    required 
                  />
                </div>
                <div className="form-group-field">
                  <label>Lead Actor</label>
                  <input 
                    type="text" 
                    value={formData.leadActor} 
                    onChange={(e) => handleInputChange('leadActor', e.target.value)}
                    placeholder="e.g. Leonardo DiCaprio" 
                    required 
                  />
                </div>
              </div>

              <div className="form-group-field">
                <label>Budget</label>
                <input 
                  type="text" 
                  value={formData.budget} 
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  placeholder="₹65 Cr" 
                  required 
                />
              </div>

              <button type="submit" className="predict-submit-btn" disabled={isCalculating}>
                <FiPlay />
                <span>{isCalculating ? "Analyzing Parameters..." : "Predict Success"}</span>
              </button>
            </form>
          </div>

          {/* Results Screen */}
          <div className="movie-result-card-container">
            <div className="result-header-row">
              <span className="result-step-badge">Screen 02 // Outcome Card</span>
              <h5>Prediction Result</h5>
            </div>

            {predictedResult && (
              <div className="result-card-inner">
                <div className="result-outcome-hero">
                  <span className="outcome-label">Predicted Outcome</span>
                  <h4 className="outcome-verdict">{predictedResult.predictedOutcome}</h4>
                  <p className="outcome-summary">{predictedResult.summary}</p>
                </div>

                <div className="result-specs-grid">
                  <div className="result-spec-item">
                    <span className="r-label">Movie</span>
                    <strong className="r-val">{predictedResult.movie}</strong>
                  </div>
                  <div className="result-spec-item">
                    <span className="r-label">Genre</span>
                    <strong className="r-val">{predictedResult.genre}</strong>
                  </div>
                  <div className="result-spec-item">
                    <span className="r-label">Budget</span>
                    <strong className="r-val">{predictedResult.budget}</strong>
                  </div>
                  <div className="result-spec-item">
                    <span className="r-label">Release Year</span>
                    <strong className="r-val">{predictedResult.releaseYear}</strong>
                  </div>
                </div>

                {/* Prediction Confidence / Performance Indicators */}
                <div className="performance-indicators-box">
                  <span className="ind-header-title">Prediction Confidence &amp; Performance Indicators</span>
                  <div className="indicators-bars-list">
                    {predictedResult.indicators.map((ind, iIdx) => (
                      <div key={iIdx} className="ind-row">
                        <div className="ind-meta">
                          <span className="ind-name">{ind.metric}</span>
                          <span className="ind-score">{ind.score} ({ind.status})</span>
                        </div>
                        <div className="ind-bar-track">
                          <div 
                            className="ind-bar-fill" 
                            style={{ width: ind.score.split('/')[0] + '%' }} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 5. Section 20: Analytics Dashboard */}
      <div className="cs-section-block">
        <div className="block-title-row">
          <span className="block-index">20</span>
          <h4>Movie Analytics Dashboard</h4>
        </div>
        <p className="block-desc-text">
          Clear visual telemetry for movie trends, genre distribution, budget comparisons, and performance metrics.
        </p>

        <div className="movie-analytics-grid">
          {/* Chart Card 1: Trends */}
          <div className="analytics-card">
            <div className="ana-card-header">
              <FiTrendingUp className="ana-icon" />
              <div>
                <h6>Movie Market Trends</h6>
                <small>Demand patterns across theatrical releases</small>
              </div>
            </div>
            <div className="trend-bars-visual">
              <div className="trend-bar-col">
                <div className="t-bar-fill h-70" />
                <span>Sci-Fi</span>
              </div>
              <div className="trend-bar-col">
                <div className="t-bar-fill h-90" />
                <span>Action</span>
              </div>
              <div className="trend-bar-col">
                <div className="t-bar-fill h-55" />
                <span>Drama</span>
              </div>
              <div className="trend-bar-col">
                <div className="t-bar-fill h-45" />
                <span>Comedy</span>
              </div>
              <div className="trend-bar-col">
                <div className="t-bar-fill h-80" />
                <span>Thriller</span>
              </div>
            </div>
          </div>

          {/* Chart Card 2: Genre Distribution */}
          <div className="analytics-card">
            <div className="ana-card-header">
              <FiPieChart className="ana-icon" />
              <div>
                <h6>Genre Distribution</h6>
                <small>Release share in the analytics dataset</small>
              </div>
            </div>
            <div className="genre-dist-stripes">
              <div className="stripe-item">
                <span className="dot-g dot-purple" />
                <span className="stripe-name">Action (36%)</span>
                <div className="stripe-line w-36" />
              </div>
              <div className="stripe-item">
                <span className="dot-g dot-blue" />
                <span className="stripe-name">Drama (28%)</span>
                <div className="stripe-line w-28" />
              </div>
              <div className="stripe-item">
                <span className="dot-g dot-emerald" />
                <span className="stripe-name">Sci-Fi (18%)</span>
                <div className="stripe-line w-18" />
              </div>
              <div className="stripe-item">
                <span className="dot-g dot-yellow" />
                <span className="stripe-name">Comedy (18%)</span>
                <div className="stripe-line w-18" />
              </div>
            </div>
          </div>

          {/* Chart Card 3: Budget Comparison */}
          <div className="analytics-card full-width-card">
            <div className="ana-card-header">
              <FiBarChart2 className="ana-icon" />
              <div>
                <h6>Budget vs. Recovery Ratio Comparison</h6>
                <small>Tiered return analysis based on real historical distribution</small>
              </div>
            </div>
            <div className="budget-comparison-row">
              <div className="budget-box">
                <span className="b-tier">Low Tier (&lt; ₹20 Cr)</span>
                <span className="b-ratio">1.8x Avg Recovery</span>
                <p>High variability; dependent on viral word of mouth.</p>
              </div>
              <div className="budget-box active-tier">
                <span className="b-tier">Mid-High Tier (₹40 - 80 Cr)</span>
                <span className="b-ratio highlight-green">3.2x Avg Recovery</span>
                <p>Highest correlation with theatrical profitability and ancillary streaming sales.</p>
              </div>
              <div className="budget-box">
                <span className="b-tier">Mega Tier (&gt; ₹100 Cr)</span>
                <span className="b-ratio">2.1x Avg Recovery</span>
                <p>Heavy marketing costs require massive worldwide release footprint.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
