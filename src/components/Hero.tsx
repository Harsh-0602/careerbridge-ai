import React from "react";

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" aria-hidden="true"></span>
          Microsoft Foundry IQ Powered
        </div>

        <h1 id="hero-heading" className="hero-title">
          Your Career,
          <span className="hero-highlight"> Guided by AI</span>
        </h1>

        <p className="hero-subtitle">
          CareerBridge AI builds personalized, step-by-step career roadmaps for everyone —
          students, freshers, career changers, and specially-abled individuals.
          <strong> Completely free. No experience required.</strong>
        </p>

        <div className="hero-features" aria-label="Key features">
          <div className="feature-item">
            <span aria-hidden="true">🎯</span>
            <span>Personalized roadmap</span>
          </div>
          <div className="feature-item">
            <span aria-hidden="true">🆓</span>
            <span>Free resources only</span>
          </div>
          <div className="feature-item">
            <span aria-hidden="true">♿</span>
            <span>Accessibility first</span>
          </div>
          <div className="feature-item">
            <span aria-hidden="true">📅</span>
            <span>Weekly schedule</span>
          </div>
        </div>

        <button
          className="hero-cta"
          onClick={onGetStarted}
          aria-label="Get started with career guidance"
        >
          Get Your Free Roadmap →
        </button>

        <p className="hero-note">
          ♿ Designed for everyone — including individuals with disabilities
        </p>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="visual-card card-1">
          <span>🌐</span>
          <p>Web Developer</p>
          <small>High Demand · ₹4–12 LPA</small>
        </div>
        <div className="visual-card card-2">
          <span>📊</span>
          <p>Data Analyst</p>
          <small>High Demand · ₹4–14 LPA</small>
        </div>
        <div className="visual-card card-3">
          <span>🤖</span>
          <p>AI Engineer</p>
          <small>Growing · ₹8–25 LPA</small>
        </div>
        <div className="visual-card card-4">
          <span>☁️</span>
          <p>Cloud Engineer</p>
          <small>High Demand · ₹6–20 LPA</small>
        </div>
        <div className="visual-card card-5">
          <span>🔐</span>
          <p>Cybersecurity</p>
          <small>Growing · ₹5–18 LPA</small>
        </div>
        <div className="iq-indicator">
          <span className="pulse-dot"></span>
          Foundry IQ Active
        </div>
      </div>
    </section>
  );
};

export default Hero;