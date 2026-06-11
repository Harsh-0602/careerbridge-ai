import React, { useState } from "react";
import { UserContext } from "../data/knowledgeBase";

interface CareerFormProps {
  onSubmit: (context: UserContext) => void;
  isLoading: boolean;
}

const CareerForm: React.FC<CareerFormProps> = ({ onSubmit, isLoading }) => {
  const [form, setForm] = useState<UserContext>({
    currentSkills: "",
    careerGoal: "",
    availableHoursPerWeek: 10,
    financialConstraint: true,
    needsAccessibility: false,
    currentRole: "",
    experience: "fresher",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.careerGoal.trim()) return;
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="career-form" aria-label="Career guidance form">
      <div className="form-header">
        <div className="iq-badge">
          <span className="iq-dot"></span>
          Powered by Foundry IQ
        </div>
        <h2>Tell us about yourself</h2>
        <p>Our AI will build your personalized career roadmap</p>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="careerGoal">What career do you want? *</label>
          <input
            id="careerGoal"
            type="text"
            value={form.careerGoal}
            onChange={(e) => setForm({ ...form, careerGoal: e.target.value })}
            placeholder="e.g. web developer, data analyst, AI engineer..."
            required
            aria-required="true"
          />
        </div>

        <div className="form-group">
          <label htmlFor="currentSkills">Your current skills</label>
          <input
            id="currentSkills"
            type="text"
            value={form.currentSkills}
            onChange={(e) => setForm({ ...form, currentSkills: e.target.value })}
            placeholder="e.g. Excel, Python basics, HTML..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="currentRole">Current role / background</label>
          <input
            id="currentRole"
            type="text"
            value={form.currentRole}
            onChange={(e) => setForm({ ...form, currentRole: e.target.value })}
            placeholder="e.g. student, accountant, teacher..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="experience">Your situation</label>
          <select
            id="experience"
            value={form.experience}
            onChange={(e) => setForm({ ...form, experience: e.target.value as any })}
          >
            <option value="student">Student</option>
            <option value="fresher">Fresh Graduate</option>
            <option value="experienced">Working Professional</option>
            <option value="career-change">Career Change</option>
          </select>
        </div>

        <div className="form-group full-width">
          <label htmlFor="hours">
            Hours available per week: <strong>{form.availableHoursPerWeek} hrs</strong>
          </label>
          <input
            id="hours"
            type="range"
            min="3"
            max="40"
            value={form.availableHoursPerWeek}
            onChange={(e) => setForm({ ...form, availableHoursPerWeek: Number(e.target.value) })}
            className="range-slider"
            aria-valuenow={form.availableHoursPerWeek}
            aria-valuemin={3}
            aria-valuemax={40}
          />
          <div className="range-labels">
            <span>3 hrs (part-time)</span>
            <span>20 hrs (balanced)</span>
            <span>40 hrs (full-time)</span>
          </div>
        </div>

        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={form.financialConstraint}
              onChange={(e) => setForm({ ...form, financialConstraint: e.target.checked })}
              aria-label="Prefer free resources only"
            />
            <span className="checkbox-text">Show only free learning resources</span>
          </label>
        </div>

        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={form.needsAccessibility}
              onChange={(e) => setForm({ ...form, needsAccessibility: e.target.checked })}
              aria-label="I need accessibility-friendly tools"
            />
            <span className="checkbox-text">I need accessibility-friendly tools</span>
          </label>
        </div>
      </div>

      <button
        type="submit"
        className={`submit-btn ${isLoading ? "loading" : ""}`}
        disabled={isLoading || !form.careerGoal.trim()}
        aria-busy={isLoading}
      >
        {isLoading ? (
          <>
            <span className="spinner" aria-hidden="true"></span>
            Foundry IQ is retrieving your roadmap...
          </>
        ) : (
          <>
            <span>✨</span>
            Generate My Career Roadmap
          </>
        )}
      </button>
    </form>
  );
};

export default CareerForm;