import React, { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import CareerForm from "./components/CareerForm";
import LoadingAnimation from "./components/LoadingAnimation";
import RoadmapView from "./components/RoadmapView";
import { queryFoundryIQ, AIResponse } from "./services/aiService";
import { UserContext } from "./data/knowledgeBase";

type AppState = "hero" | "form" | "loading" | "results" | "error";

function App() {
  const [state, setState] = useState<AppState>("hero");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<AIResponse | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleFormSubmit = async (context: UserContext) => {
    setIsLoading(true);
    setState("loading");
    setErrorMsg("");
    try {
      const result = await queryFoundryIQ(context);
      setResponse(result);
      setState("results");
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
      setState("error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResponse(null);
    setErrorMsg("");
    setState("form");
  };

  return (
    <div className="app" role="application" aria-label="CareerBridge AI Application">
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Header */}
      <header className="app-header" role="banner">
        <div className="header-inner">
          <div className="logo" aria-label="CareerBridge AI home">
            <span className="logo-icon" aria-hidden="true">🌉</span>
            <div>
              <span className="logo-name">CareerBridge</span>
              <span className="logo-tag">AI</span>
            </div>
          </div>
          <nav className="header-nav" aria-label="Main navigation">
            <span className="nav-iq">
              <span className="nav-dot" aria-hidden="true"></span>
              Foundry IQ
            </span>
            <span className="nav-a11y" aria-label="Accessibility friendly">♿ Accessible</span>
            <span className="nav-free">🆓 Free</span>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="app-main">
        {state === "hero" && (
          <Hero onGetStarted={() => setState("form")} />
        )}

        {state === "form" && (
          <div className="form-page">
            <CareerForm onSubmit={handleFormSubmit} isLoading={isLoading} />
          </div>
        )}

        {state === "loading" && (
          <LoadingAnimation />
        )}

        {state === "results" && response && (
          <RoadmapView response={response} onReset={handleReset} />
        )}

        {state === "error" && (
          <div className="error-page" role="alert" aria-live="assertive">
            <div className="error-card">
              <span className="error-icon" aria-hidden="true">⚠️</span>
              <h2>Oops! Foundry IQ couldn't find a match</h2>
              <p>{errorMsg}</p>
              <p className="error-hint">
                Try searching for: <strong>web developer</strong>, <strong>data analyst</strong>,{" "}
                <strong>AI engineer</strong>, <strong>cloud engineer</strong>, or{" "}
                <strong>cybersecurity</strong>
              </p>
              <button className="reset-btn" onClick={() => setState("form")}>
                ← Try Again
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="app-footer" role="contentinfo">
        <div className="footer-inner">
          <p>
            🌉 <strong>CareerBridge AI</strong> — Built for the{" "}
            <a
              href="https://innovation.microsoft.com/agents-league-hackathon"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Agents League Hackathon 2026
            </a>
          </p>
          <p className="footer-tech">
            Built with GitHub Copilot · Powered by Microsoft Foundry IQ · Creative Apps Track
          </p>
          <p className="footer-mission">
            ♿ Committed to inclusive career guidance for everyone
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;