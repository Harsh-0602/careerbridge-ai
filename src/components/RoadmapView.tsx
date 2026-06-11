import React, { useState } from "react";
import { AIResponse } from "../services/aiService";
import { CareerPath } from "../data/knowledgeBase";

interface RoadmapViewProps {
  response: AIResponse;
  onReset: () => void;
}

const RoadmapView: React.FC<RoadmapViewProps> = ({ response, onReset }) => {
  const [activeTab, setActiveTab] = useState<"roadmap" | "schedule" | "resources">("roadmap");
  const [selectedPath, setSelectedPath] = useState<CareerPath>(response.topRecommendation);

  return (
    <div className="roadmap-container" role="main" aria-label="Career roadmap results">
      {/* Header */}
      <div className="results-header">
        <div className="iq-badge">
          <span className="iq-dot"></span>
          Foundry IQ Retrieved {response.foundryIQCitations.length} Knowledge Sources
        </div>
        <h2>Your Personalized Career Roadmap</h2>
        <p className="personalized-msg">{response.personalizedMessage}</p>
      </div>

      {/* Career Path Selector */}
      {response.careerPaths.length > 1 && (
        <div className="path-selector" role="tablist" aria-label="Career path options">
          <p className="selector-label">Foundry IQ also found these matching paths:</p>
          <div className="path-tabs">
            {response.careerPaths.map((path, i) => (
              <button
                key={path.id}
                role="tab"
                aria-selected={selectedPath.id === path.id}
                className={`path-tab ${selectedPath.id === path.id ? "active" : ""}`}
                onClick={() => setSelectedPath(path)}
              >
                {i === 0 && <span className="best-match">Best Match</span>}
                <span className="path-name">{path.title}</span>
                <span className={`demand-badge ${path.demandLevel.toLowerCase()}`}>
                  {path.demandLevel} Demand
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Stats Row */}
      <div className="stats-row" aria-label="Career statistics">
        <div className="stat-card">
          <span className="stat-icon" aria-hidden="true">💰</span>
          <div>
            <p className="stat-label">Avg Salary (India)</p>
            <p className="stat-value">{selectedPath.avgSalary}</p>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon" aria-hidden="true">📅</span>
          <div>
            <p className="stat-label">Time to Job-Ready</p>
            <p className="stat-value">{selectedPath.timeToReady}</p>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon" aria-hidden="true">📈</span>
          <div>
            <p className="stat-label">Market Demand</p>
            <p className="stat-value">{selectedPath.demandLevel}</p>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon" aria-hidden="true">♿</span>
          <div>
            <p className="stat-label">Accessibility</p>
            <p className="stat-value">Supported</p>
          </div>
        </div>
      </div>

      {/* Accessibility Note */}
      <div className="accessibility-note" role="note">
        <span aria-hidden="true">♿</span>
        <p>{selectedPath.accessibilityNote}</p>
      </div>

      {/* Tab Navigation */}
      <div className="tab-nav" role="tablist">
        {(["roadmap", "schedule", "resources"] as const).map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "roadmap" && "📍 Learning Roadmap"}
            {tab === "schedule" && "🗓️ Weekly Schedule"}
            {tab === "resources" && "📚 Resources"}
          </button>
        ))}
      </div>

      {/* Roadmap Tab */}
      {activeTab === "roadmap" && (
        <div className="roadmap-phases" role="tabpanel" aria-label="Learning roadmap">
          {selectedPath.roadmap.map((step, index) => (
            <div key={step.phase} className="phase-card">
              <div className="phase-number" aria-label={`Phase ${step.phase}`}>
                {step.phase}
              </div>
              <div className="phase-content">
                <div className="phase-header">
                  <h3>{step.title}</h3>
                  <span className="phase-duration">⏱ {step.duration}</span>
                </div>
                <div className="phase-skills">
                  {step.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
                <div className="phase-milestone">
                  <span aria-hidden="true">🎯</span>
                  <strong>Milestone:</strong> {step.milestone}
                </div>
                <div className="phase-resources">
                  <span aria-hidden="true">🆓</span>
                  <strong>Free Resources:</strong> {step.freeResources.join(", ")}
                </div>
              </div>
              {index < selectedPath.roadmap.length - 1 && (
                <div className="phase-connector" aria-hidden="true">↓</div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Schedule Tab */}
      {activeTab === "schedule" && (
        <div className="schedule-view" role="tabpanel" aria-label="Weekly schedule">
          <div className="schedule-header">
            <h3>Your {response.weeklyPlan.hoursPerWeek}-Hour Weekly Plan</h3>
            <p>Estimated completion: <strong>{response.weeklyPlan.totalMonths} months</strong></p>
          </div>
          <div className="schedule-grid">
            {response.weeklyPlan.dailySchedule.map((day) => (
              <div key={day.day} className="day-card">
                <div className="day-name">{day.day}</div>
                <div className="day-activity">{day.activity}</div>
                <div className="day-duration">⏱ {day.duration}</div>
                <div className="day-resource">📖 {day.resource}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Resources Tab */}
      {activeTab === "resources" && (
        <div className="resources-view" role="tabpanel" aria-label="Learning resources">
          {selectedPath.resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-card"
              aria-label={`${resource.title} - ${resource.isFree ? "Free" : "Paid"} - ${resource.type}`}
            >
              <div className="resource-top">
                <span className="resource-type">{resource.type}</span>
                <span className={`resource-cost ${resource.isFree ? "free" : "paid"}`}>
                  {resource.isFree ? "🆓 Free" : "💳 Paid"}
                </span>
                {resource.accessibilityFriendly && (
                  <span className="resource-a11y" aria-label="Accessibility friendly">♿</span>
                )}
              </div>
              <h4>{resource.title}</h4>
              <p className="resource-provider">by {resource.provider}</p>
              <span className="resource-link">Visit →</span>
            </a>
          ))}
        </div>
      )}

      {/* Foundry IQ Citations */}
      <div className="citations-box" aria-label="Knowledge sources used">
        <h4>📎 Foundry IQ Knowledge Sources</h4>
        <ul>
          {response.foundryIQCitations.map((citation, i) => (
            <li key={i}>{citation}</li>
          ))}
        </ul>
      </div>

      {/* Reset Button */}
      <button className="reset-btn" onClick={onReset} aria-label="Start over with a new career search">
        ← Search Another Career Path
      </button>
    </div>
  );
};

export default RoadmapView;