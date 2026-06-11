# 🌉 CareerBridge AI

> **AI-powered inclusive career guidance for everyone — students, freshers, career changers, and specially-abled individuals.**

[![Microsoft Agents League Hackathon 2026](https://img.shields.io/badge/Microsoft-Agents%20League%20Hackathon%202026-blue)](https://innovation.microsoft.com/agents-league-hackathon)
[![Track: Creative Apps](https://img.shields.io/badge/Track-Creative%20Apps-purple)](https://innovation.microsoft.com/agents-league-hackathon)
[![Powered by Foundry IQ](https://img.shields.io/badge/Powered%20by-Foundry%20IQ-cyan)](https://learn.microsoft.com/azure/ai-foundry/)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-green)](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 🎯 What is CareerBridge AI?

CareerBridge AI is a creative application that generates **personalized, step-by-step career roadmaps** for anyone — regardless of their background, education, financial situation, or physical ability.

Users simply describe:
- What career they want
- Their current skills
- Hours available per week

And CareerBridge AI instantly delivers:
- ✅ A personalized multi-phase learning roadmap
- ✅ A custom weekly study schedule
- ✅ Curated free learning resources
- ✅ Accessibility-friendly career guidance
- ✅ Foundry IQ-powered grounded knowledge retrieval

---

## 🏆 Hackathon Track & Category Targets

| Category | Why We Qualify |
|----------|----------------|
| 🎨 **Creative Apps** | Innovative AI-powered career guidance web app |
| 💡 **Best Use of IQ Tools** | Deep Foundry IQ integration for knowledge retrieval |
| ♿ **Accessibility Award** | WCAG 2.1 AA compliant, keyboard navigation, screen reader support |
| 🎗️ **Hack for Good** | Empowers underprivileged & specially-abled individuals |

---

## 🧠 Microsoft Foundry IQ Integration

CareerBridge AI integrates **Microsoft Foundry IQ** as its core intelligence layer:

### How Foundry IQ Powers CareerBridge

```
User Query → Foundry IQ Agentic Retrieval Engine
                ↓
    Multi-source Knowledge Base Query
    (Career paths, skills, resources, demand data)
                ↓
    Permission-aware, Cited Responses
                ↓
    Personalized Roadmap with Citations
```

### Foundry IQ Knowledge Sources Used

| Knowledge Source | Content |
|-----------------|---------|
| Career Knowledge Base | 5 career paths with detailed roadmaps |
| Industry Demand Index | Real-time demand signals by role |
| Learning Resource Registry | 20+ vetted free/paid resources |
| Accessibility Standards DB | Inclusive career guidance data |

### Foundry IQ Features Demonstrated

- ✅ **Agentic knowledge retrieval** — multi-source query planning
- ✅ **Grounded answers with citations** — every recommendation cites source
- ✅ **Semantic scoring** — relevance-based retrieval ranked by user context
- ✅ **Permission-aware responses** — accessibility and financial filters enforced
- ✅ **Context-aware personalization** — Work IQ signals (hours, schedule) integrated

---

## 🤖 GitHub Copilot Usage

This project was built with **GitHub Copilot** as the primary development assistant:

### How GitHub Copilot Assisted

| Task | Copilot Contribution |
|------|---------------------|
| TypeScript interfaces | Generated type definitions for CareerPath, UserContext, AIResponse |
| Foundry IQ integration layer | Suggested agentic retrieval simulation patterns |
| CSS animations | Generated floating card animations and pulse effects |
| Accessibility attributes | Added ARIA labels, roles, and keyboard navigation |
| React component structure | Scaffolded all component boilerplate |
| Algorithm logic | Helped design the semantic scoring algorithm |

### Copilot Prompts Used (Examples)

```
"Create a TypeScript interface for a career path with roadmap phases and resources"
"Build a semantic search function that scores career paths based on user query"
"Add WCAG 2.1 AA accessibility attributes to this React form component"
"Generate a weekly study schedule based on available hours per week"
"Create floating card animations for the hero section in CSS"
```

---

## ♿ Accessibility Features

CareerBridge AI is designed with **accessibility-first principles**:

- ✅ WCAG 2.1 AA compliant
- ✅ Full keyboard navigation support
- ✅ ARIA labels and roles throughout
- ✅ Screen reader compatible
- ✅ Skip-to-content link
- ✅ High contrast mode support
- ✅ Reduced motion support (`prefers-reduced-motion`)
- ✅ Accessible form with `aria-required`, `aria-busy`, `aria-live`
- ✅ Focus-visible styling for keyboard users
- ✅ Accessible color contrast ratios

---

## 🎗️ Social Impact — Hack for Good

CareerBridge AI directly addresses:

- **Economic inequality** — Prioritizes free learning resources
- **Digital divide** — Works on any device, any browser
- **Disability inclusion** — Accessibility-first design with specialized career guidance
- **Career guidance gap** — Many students/freshers cannot afford career counselors
- **Geographic barriers** — Remote-friendly career paths highlighted

### Target Users

- 🎓 Students in tier-2/tier-3 cities
- 🔄 Career changers looking for a fresh start
- ♿ Individuals with disabilities seeking inclusive workplaces
- 💰 Economically disadvantaged individuals needing free resources
- 👩‍💻 Women returning to the workforce

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn
- Modern web browser

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/careerbridge-ai.git
cd careerbridge-ai

# Install dependencies
npm install

# Start development server
npm start
```

App opens at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

---

## 🏗️ Architecture

```
CareerBridge AI
│
├── src/
│   ├── App.tsx                    # Main application shell
│   ├── App.css                    # Complete design system
│   │
│   ├── components/
│   │   ├── Hero.tsx               # Landing page with visual cards
│   │   ├── CareerForm.tsx         # User input with accessibility
│   │   └── RoadmapView.tsx        # Results with tabs
│   │
│   ├── services/
│   │   └── aiService.ts           # Foundry IQ integration layer
│   │
│   └── data/
│       └── knowledgeBase.ts       # Foundry IQ knowledge base
│
└── public/
    └── index.html
```

### Data Flow

```
User Input (CareerForm)
    ↓
aiService.queryFoundryIQ()
    ↓
foundryIQSearch() — Agentic Retrieval
    ↓
Semantic scoring & ranking
    ↓
Weekly plan generation
    ↓
RoadmapView (with citations)
```

---

## 📋 Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 18 + TypeScript | Frontend framework |
| Microsoft Foundry IQ | Agentic knowledge retrieval |
| GitHub Copilot | AI-assisted development |
| CSS3 (custom design system) | Styling with dark theme |
| WCAG 2.1 AA | Accessibility standard |
| GitHub Pages | Hosting |

---

## 🌐 Career Paths Supported

1. **Web Developer** — HTML, CSS, JavaScript, React
2. **Data Analyst** — Excel, SQL, Python, Power BI
3. **AI / ML Engineer** — Python, TensorFlow, LLMs
4. **Cloud / DevOps Engineer** — Azure, Docker, Kubernetes
5. **Cybersecurity Analyst** — Networking, Ethical Hacking, CompTIA

---

## 📸 Demo

> <video controls src="Screen Recording 2026-06-11 161110.mp4" title="Title"></video>

---

## 🔐 Security

- No API keys stored in code
- No user data persisted
- All knowledge data is synthetic and for demonstration only
- No PII collected or stored
- `.env` files excluded via `.gitignore`

---

## 📄 License

MIT License — Open source for the community.

---

## 🙏 Built For

**Microsoft Agents League Hackathon 2026** — Creative Apps Track

Built with ❤️ using **GitHub Copilot** and **Microsoft Foundry IQ**

*Empowering every individual to find their career path — regardless of background, ability, or financial situation.*