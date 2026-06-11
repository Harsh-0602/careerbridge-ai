import React from "react";

interface LoadingAnimationProps {
  message?: string;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({
  message = "Foundry IQ is analyzing your profile...",
}) => {
  return (
    <section className="loading-page" aria-labelledby="loading-heading">
      <div className="loading-card" role="status" aria-live="polite" aria-busy="true">
        <div className="loading-badge">
          <span className="loading-dot" aria-hidden="true" />
          Foundry IQ Active
        </div>

        <h2 id="loading-heading">{message}</h2>
        <p className="loading-copy">
          We are matching your goals, skills, and available time to the best career paths.
        </p>

        <div className="loading-progress" aria-hidden="true">
          <div className="loading-progress-track">
            <div className="loading-progress-bar" />
          </div>
          <div className="loading-progress-glow" />
        </div>

        <p className="loading-meta">Searching the knowledge base and building your roadmap.</p>
      </div>
    </section>
  );
};

export default LoadingAnimation;
