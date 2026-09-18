import { FiCheck } from 'react-icons/fi';
import { SiHtml5, SiCss } from 'react-icons/si';
import { htmlCssData } from '../../data/portfolioData';
import './HtmlCssSection.css';

export default function HtmlCssSection() {
  return (
    <section id="html-css" className="html-css-section">
      <div className="section-wrapper">
        <div className="html-css-header">
          <span className="section-tag">24 // TECHNICAL AWARENESS</span>
          <h2 className="section-title">
            DESIGN + DEVELOPMENT<br />AWARENESS
          </h2>
          <p className="html-css-statement">
            "{htmlCssData.statement}"
          </p>
        </div>

        <div className="html-css-grid">
          {/* HTML Card */}
          <div className="tech-awareness-card html-card">
            <div className="tech-card-top">
              <div className="tech-icon-wrap html-wrap">
                <SiHtml5 />
              </div>
              <div>
                <span className="tech-pill-tag">Markup &amp; Semantics</span>
                <h4 className="tech-name">HTML Knowledge</h4>
              </div>
            </div>

            <p className="tech-summary">Understanding DOM hierarchy, form validation needs, and accessibility.</p>

            <ul className="tech-topics-list">
              {htmlCssData.html.map((item, idx) => (
                <li key={idx} className="tech-topic-item">
                  <FiCheck className="topic-check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CSS Card */}
          <div className="tech-awareness-card css-card">
            <div className="tech-card-top">
              <div className="tech-icon-wrap css-wrap">
                <SiCss />
              </div>
              <div>
                <span className="tech-pill-tag">Styling &amp; Layouts</span>
                <h4 className="tech-name">CSS Knowledge</h4>
              </div>
            </div>

            <p className="tech-summary">Understanding how Auto Layout in Figma translates into frontend box models.</p>

            <ul className="tech-topics-list">
              {htmlCssData.css.map((item, idx) => (
                <li key={idx} className="tech-topic-item">
                  <FiCheck className="topic-check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
