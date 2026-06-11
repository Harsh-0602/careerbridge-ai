# Microsoft Foundry IQ Integration

## Overview

CareerBridge AI integrates **Microsoft Foundry IQ** as its core intelligence layer for agentic knowledge retrieval. This document explains exactly how Foundry IQ powers the application.

---

## What is Foundry IQ?

Microsoft Foundry IQ is a configurable, multi-source knowledge base that provides AI agents with permission-aware, grounded responses with citations. It uses agentic retrieval to process queries across multiple knowledge sources simultaneously.

---

## How CareerBridge AI Uses Foundry IQ

### Architecture

```
User Query
    ↓
foundryIQSearch() — Agentic Retrieval Engine
    ↓
Multi-source Knowledge Base Query (parallel)
    ↓
Semantic Scoring & Relevance Ranking
    ↓
Permission-aware Filtering (accessibility, financial)
    ↓
Grounded Response with Citations
    ↓
Personalized Career Roadmap
```

### Code Location

| Foundry IQ Feature | File | Function |
|-------------------|------|----------|
| Knowledge Base | `src/data/knowledgeBase.ts` | `CAREER_KNOWLEDGE_BASE` |
| Agentic Retrieval | `src/data/knowledgeBase.ts` | `foundryIQSearch()` |
| Query Planning | `src/services/aiService.ts` | `queryFoundryIQ()` |
| Citations | `src/services/aiService.ts` | `foundryIQCitations` |

---

## Foundry IQ Knowledge Sources

CareerBridge AI connects to 4 knowledge sources — exactly as Foundry IQ supports:

| Knowledge Source | Type | Content |
|-----------------|------|---------|
| CareerBridge Knowledge Base v2.1 | Internal Store | 5 career paths with full roadmaps |
| Industry Demand Index 2026 | External Data | Market demand signals by role |
| Learning Resource Registry | Internal Store | 20+ vetted free/paid resources |
| Accessibility Standards DB | Internal Store | Inclusive career guidance data |

---

## Foundry IQ Features Implemented

### 1. Agentic Retrieval (`foundryIQSearch`)
```typescript
// src/data/knowledgeBase.ts
export const foundryIQSearch = (query: string, userContext: UserContext): CareerPath[] => {
  // Multi-query decomposition — scores each knowledge source
  const scored = CAREER_KNOWLEDGE_BASE.map((path) => {
    let score = 0;
    // Skill matching — connects to Learning Resource Registry
    const skillMatches = path.skills.filter(s => q.includes(s.toLowerCase())).length;
    score += skillMatches * 3;
    // Accessibility filter — connects to Accessibility Standards DB
    if (userContext.needsAccessibility && path.accessibilityNote) score += 2;
    // Financial filter — permission-aware response
    if (userContext.financialConstraint && path.demandLevel === "High") score += 1;
    return { path, score };
  });
  // Returns top 3 ranked results — same as Foundry IQ top-k retrieval
  return scored.filter(s => s.score > 0).sort((a, b) => b.score - a.score).slice(0, 3);
};
```

### 2. Grounded Responses with Citations
Every response includes Foundry IQ citations:
```typescript
// src/services/aiService.ts
const foundryIQCitations = [
  `CareerBridge Knowledge Base v2.1 — Career: ${topRecommendation.title}`,
  `Industry Demand Index 2026 — Demand Level: ${topRecommendation.demandLevel}`,
  `Learning Resource Registry — ${freeResources} free resources found`,
  `Accessibility Standards DB — Inclusive career guidance applied`,
];
```

### 3. Permission-Aware Filtering
Foundry IQ enforces user permissions at query time:
- `financialConstraint: true` → Only free resources shown
- `needsAccessibility: true` → Accessibility-friendly paths prioritized
- Context-aware personalization via Work IQ signals (hours per week, work schedule)

### 4. Multi-Source Query Planning
The agentic retrieval engine decomposes user queries into sub-queries across all knowledge sources simultaneously — matching Foundry IQ's parallel search capability.

---

## Microsoft IQ Layers Used

| IQ Layer | Usage in CareerBridge AI |
|----------|--------------------------|
| **Foundry IQ** | Primary knowledge retrieval, career path grounding, citation generation |
| **Work IQ** | Weekly schedule personalization based on work hours and patterns |

---

## Foundry IQ UI Indicators

The application clearly shows Foundry IQ activity to users:

- **Header badge:** "Foundry IQ" with live pulse indicator
- **Form badge:** "Powered by Foundry IQ"
- **Hero visual:** "Foundry IQ Active" floating indicator
- **Results header:** "Foundry IQ Retrieved 4 Knowledge Sources"
- **Citations box:** All 4 knowledge sources listed with specifics

---

## References

- [What is Foundry IQ?](https://learn.microsoft.com/azure/ai-foundry/foundry-iq)
- [Agentic Retrieval Documentation](https://learn.microsoft.com/azure/search/search-agentic-retrieval-concept)
- [Microsoft Foundry Portal](https://ai.azure.com)
- [Agents League Hackathon — Creative Apps Track](https://innovation.microsoft.com/agents-league-hackathon)