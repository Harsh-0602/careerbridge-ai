// CareerBridge AI - Foundry IQ Knowledge Base
// Simulates Microsoft Foundry IQ agentic knowledge retrieval
// All data is synthetic and for demonstration purposes only

export interface CareerPath {
  id: string;
  title: string;
  description: string;
  skills: string[];
  roadmap: RoadmapStep[];
  resources: Resource[];
  avgSalary: string;
  demandLevel: "High" | "Medium" | "Growing";
  timeToReady: string;
  accessibilityNote: string;
}

export interface RoadmapStep {
  phase: number;
  title: string;
  duration: string;
  skills: string[];
  milestone: string;
  freeResources: string[];
}

export interface Resource {
  title: string;
  url: string;
  type: "Course" | "Documentation" | "Video" | "Practice";
  isFree: boolean;
  provider: string;
  accessibilityFriendly: boolean;
}

// Foundry IQ Knowledge Base - Career Paths
export const CAREER_KNOWLEDGE_BASE: CareerPath[] = [
  {
    id: "web-dev",
    title: "Web Developer",
    description: "Build websites and web applications used by millions",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    avgSalary: "₹4–12 LPA",
    demandLevel: "High",
    timeToReady: "6–9 months",
    accessibilityNote: "Fully remote-friendly, screen-reader compatible tools available",
    roadmap: [
      {
        phase: 1,
        title: "Foundations",
        duration: "2 months",
        skills: ["HTML5", "CSS3", "Basic JavaScript"],
        milestone: "Build your first static website",
        freeResources: ["freeCodeCamp.org", "MDN Web Docs", "The Odin Project"],
      },
      {
        phase: 2,
        title: "Interactive Web",
        duration: "2 months",
        skills: ["JavaScript ES6+", "DOM Manipulation", "APIs", "Git"],
        milestone: "Build a weather app using public API",
        freeResources: ["javascript.info", "GitHub Learning Lab", "Khan Academy"],
      },
      {
        phase: 3,
        title: "Modern Frameworks",
        duration: "3 months",
        skills: ["React", "TypeScript", "npm", "REST APIs"],
        milestone: "Build a full React application",
        freeResources: ["React official docs", "Scrimba React course", "YouTube - Traversy Media"],
      },
      {
        phase: 4,
        title: "Job Ready",
        duration: "2 months",
        skills: ["Portfolio", "LinkedIn", "Interview Prep", "GitHub"],
        milestone: "Land your first job or freelance client",
        freeResources: ["Leetcode", "HackerRank", "LinkedIn Learning free trial"],
      },
    ],
    resources: [
      { title: "freeCodeCamp Web Development", url: "https://freecodecamp.org", type: "Course", isFree: true, provider: "freeCodeCamp", accessibilityFriendly: true },
      { title: "The Odin Project", url: "https://theodinproject.com", type: "Course", isFree: true, provider: "Odin Project", accessibilityFriendly: true },
      { title: "MDN Web Docs", url: "https://developer.mozilla.org", type: "Documentation", isFree: true, provider: "Mozilla", accessibilityFriendly: true },
      { title: "React Official Tutorial", url: "https://react.dev/learn", type: "Documentation", isFree: true, provider: "Meta", accessibilityFriendly: true },
    ],
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    description: "Turn raw data into business insights using analytics tools",
    skills: ["Excel", "SQL", "Python", "Power BI", "Statistics"],
    avgSalary: "₹4–14 LPA",
    demandLevel: "High",
    timeToReady: "6–8 months",
    accessibilityNote: "Many tools support keyboard navigation and high contrast modes",
    roadmap: [
      {
        phase: 1,
        title: "Data Basics",
        duration: "1.5 months",
        skills: ["Excel Advanced", "Google Sheets", "Basic Statistics"],
        milestone: "Analyze a real dataset in Excel",
        freeResources: ["Excel Easy", "Khan Academy Statistics", "Google Sheets tutorials"],
      },
      {
        phase: 2,
        title: "SQL & Databases",
        duration: "2 months",
        skills: ["SQL", "MySQL", "Data Querying", "Joins"],
        milestone: "Query a real database and extract insights",
        freeResources: ["SQLZoo", "W3Schools SQL", "Mode SQL Tutorial"],
      },
      {
        phase: 3,
        title: "Python for Data",
        duration: "2.5 months",
        skills: ["Python", "Pandas", "Matplotlib", "NumPy"],
        milestone: "Complete end-to-end data analysis project",
        freeResources: ["Kaggle Python course", "Google Colab", "Real Python"],
      },
      {
        phase: 4,
        title: "Visualization & BI",
        duration: "2 months",
        skills: ["Power BI", "Tableau Public", "Dashboards", "Storytelling"],
        milestone: "Create a professional dashboard portfolio",
        freeResources: ["Microsoft Power BI learning", "Tableau Public", "DataCamp free tier"],
      },
    ],
    resources: [
      { title: "Kaggle Learn", url: "https://kaggle.com/learn", type: "Course", isFree: true, provider: "Kaggle", accessibilityFriendly: true },
      { title: "Google Data Analytics Certificate", url: "https://grow.google/certificates/data-analytics", type: "Course", isFree: false, provider: "Google", accessibilityFriendly: true },
      { title: "Microsoft Power BI Learning", url: "https://learn.microsoft.com/power-bi", type: "Documentation", isFree: true, provider: "Microsoft", accessibilityFriendly: true },
      { title: "SQLZoo", url: "https://sqlzoo.net", type: "Practice", isFree: true, provider: "SQLZoo", accessibilityFriendly: false },
    ],
  },
  {
    id: "ai-ml",
    title: "AI / ML Engineer",
    description: "Build intelligent systems and machine learning models",
    skills: ["Python", "Machine Learning", "TensorFlow", "Statistics", "Deep Learning"],
    avgSalary: "₹8–25 LPA",
    demandLevel: "Growing",
    timeToReady: "10–14 months",
    accessibilityNote: "Python development works with most accessibility tools",
    roadmap: [
      {
        phase: 1,
        title: "Python & Math",
        duration: "2 months",
        skills: ["Python", "Linear Algebra", "Statistics", "Calculus basics"],
        milestone: "Solve 30 Python problems on HackerRank",
        freeResources: ["Python.org tutorial", "Khan Academy Math", "3Blue1Brown YouTube"],
      },
      {
        phase: 2,
        title: "ML Fundamentals",
        duration: "3 months",
        skills: ["Scikit-learn", "Pandas", "Data Preprocessing", "Model Evaluation"],
        milestone: "Build and deploy a classification model",
        freeResources: ["Kaggle ML course", "fast.ai", "Google ML Crash Course"],
      },
      {
        phase: 3,
        title: "Deep Learning",
        duration: "3 months",
        skills: ["TensorFlow", "PyTorch", "Neural Networks", "CNNs", "NLP basics"],
        milestone: "Build an image classifier or text analyzer",
        freeResources: ["fast.ai deep learning", "TensorFlow tutorials", "Hugging Face course"],
      },
      {
        phase: 4,
        title: "Specialization",
        duration: "3 months",
        skills: ["LLMs", "Azure AI", "MLOps", "Model Deployment"],
        milestone: "Deploy a real AI application",
        freeResources: ["Azure AI free tier", "Hugging Face Spaces", "GitHub Actions"],
      },
    ],
    resources: [
      { title: "fast.ai Practical Deep Learning", url: "https://fast.ai", type: "Course", isFree: true, provider: "fast.ai", accessibilityFriendly: true },
      { title: "Google ML Crash Course", url: "https://developers.google.com/machine-learning/crash-course", type: "Course", isFree: true, provider: "Google", accessibilityFriendly: true },
      { title: "Hugging Face NLP Course", url: "https://huggingface.co/learn/nlp-course", type: "Course", isFree: true, provider: "Hugging Face", accessibilityFriendly: true },
      { title: "Kaggle Competitions", url: "https://kaggle.com/competitions", type: "Practice", isFree: true, provider: "Kaggle", accessibilityFriendly: false },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud / DevOps Engineer",
    description: "Manage infrastructure, automate deployments, and scale systems",
    skills: ["Linux", "Azure/AWS", "Docker", "Kubernetes", "CI/CD"],
    avgSalary: "₹6–20 LPA",
    demandLevel: "High",
    timeToReady: "8–12 months",
    accessibilityNote: "CLI-based work is screen-reader friendly",
    roadmap: [
      {
        phase: 1,
        title: "Linux & Networking",
        duration: "2 months",
        skills: ["Linux CLI", "Bash scripting", "Networking basics", "SSH"],
        milestone: "Set up and manage a Linux server",
        freeResources: ["Linux Journey", "OverTheWire Bandit", "NetworkChuck YouTube"],
      },
      {
        phase: 2,
        title: "Cloud Basics",
        duration: "2 months",
        skills: ["Azure/AWS Free Tier", "Virtual Machines", "Storage", "IAM"],
        milestone: "Deploy an app on cloud",
        freeResources: ["Azure free account", "AWS Free Tier", "Microsoft Learn"],
      },
      {
        phase: 3,
        title: "Containers & Automation",
        duration: "3 months",
        skills: ["Docker", "Kubernetes basics", "CI/CD", "GitHub Actions"],
        milestone: "Containerize and auto-deploy an application",
        freeResources: ["Docker official docs", "Play with Docker", "KodeKloud free labs"],
      },
      {
        phase: 4,
        title: "Certifications",
        duration: "3 months",
        skills: ["AZ-900", "AZ-104", "Terraform", "Monitoring"],
        milestone: "Earn Azure Fundamentals certification",
        freeResources: ["Microsoft Learn AZ-900", "A Cloud Guru free tier", "ExamTopics"],
      },
    ],
    resources: [
      { title: "Microsoft Learn Azure", url: "https://learn.microsoft.com/azure", type: "Documentation", isFree: true, provider: "Microsoft", accessibilityFriendly: true },
      { title: "Docker Getting Started", url: "https://docs.docker.com/get-started", type: "Documentation", isFree: true, provider: "Docker", accessibilityFriendly: true },
      { title: "KodeKloud", url: "https://kodekloud.com", type: "Course", isFree: false, provider: "KodeKloud", accessibilityFriendly: true },
      { title: "Linux Journey", url: "https://linuxjourney.com", type: "Course", isFree: true, provider: "Linux Journey", accessibilityFriendly: false },
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Analyst",
    description: "Protect systems and data from digital threats and attacks",
    skills: ["Networking", "Linux", "Ethical Hacking", "SIEM", "Compliance"],
    avgSalary: "₹5–18 LPA",
    demandLevel: "Growing",
    timeToReady: "8–12 months",
    accessibilityNote: "Many remote SOC roles available, flexible work arrangements",
    roadmap: [
      {
        phase: 1,
        title: "Foundations",
        duration: "2 months",
        skills: ["Networking", "Linux", "Windows Security", "Protocols"],
        milestone: "Pass CompTIA Network+ practice exam",
        freeResources: ["Professor Messer", "TryHackMe free rooms", "Cybrary free courses"],
      },
      {
        phase: 2,
        title: "Security Concepts",
        duration: "2 months",
        skills: ["Threats & Vulnerabilities", "Cryptography", "IAM", "Firewalls"],
        milestone: "Complete TryHackMe Pre-Security path",
        freeResources: ["TryHackMe", "OWASP resources", "SANS Cyber Aces"],
      },
      {
        phase: 3,
        title: "Practical Skills",
        duration: "4 months",
        skills: ["Penetration Testing", "SIEM", "Incident Response", "Kali Linux"],
        milestone: "Complete Capture The Flag (CTF) challenges",
        freeResources: ["HackTheBox free tier", "TryHackMe", "VulnHub"],
      },
      {
        phase: 4,
        title: "Certifications",
        duration: "2 months",
        skills: ["CompTIA Security+", "CEH basics", "SOC operations"],
        milestone: "Earn CompTIA Security+ certification",
        freeResources: ["Professor Messer Security+", "Reddit r/CompTIA", "ExamCompass"],
      },
    ],
    resources: [
      { title: "TryHackMe", url: "https://tryhackme.com", type: "Practice", isFree: true, provider: "TryHackMe", accessibilityFriendly: false },
      { title: "Professor Messer CompTIA", url: "https://professormesser.com", type: "Video", isFree: true, provider: "Professor Messer", accessibilityFriendly: true },
      { title: "OWASP Top 10", url: "https://owasp.org/top10", type: "Documentation", isFree: true, provider: "OWASP", accessibilityFriendly: true },
      { title: "Cybrary", url: "https://cybrary.it", type: "Course", isFree: true, provider: "Cybrary", accessibilityFriendly: true },
    ],
  },
];

// Foundry IQ Agentic Retrieval Simulation
export const foundryIQSearch = (query: string, userContext: UserContext): CareerPath[] => {
  const q = query.toLowerCase();
  
  // Agentic retrieval: score each career path based on relevance
  const scored = CAREER_KNOWLEDGE_BASE.map((path) => {
    let score = 0;
    
    // Match by skills mentioned
    const skillMatches = path.skills.filter(s => q.includes(s.toLowerCase())).length;
    score += skillMatches * 3;
    
    // Match by career title
    if (q.includes(path.title.toLowerCase()) || path.id.split("-").some(w => q.includes(w))) score += 5;
    
    // Match by keywords
    if (q.includes("web") && path.id === "web-dev") score += 4;
    if ((q.includes("data") || q.includes("analytics")) && path.id === "data-analyst") score += 4;
    if ((q.includes("ai") || q.includes("machine learning") || q.includes("ml")) && path.id === "ai-ml") score += 4;
    if ((q.includes("cloud") || q.includes("devops")) && path.id === "cloud-devops") score += 4;
    if ((q.includes("security") || q.includes("cyber") || q.includes("hacking")) && path.id === "cybersecurity") score += 4;
    
    // Boost for accessibility if user mentioned disability
    if (userContext.needsAccessibility && path.accessibilityNote) score += 2;
    
    // Boost for salary if user mentioned financial concern
    if (userContext.financialConstraint && path.demandLevel === "High") score += 1;
    
    return { path, score };
  });
  
  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(s => s.path)
    .slice(0, 3);
};

export interface UserContext {
  currentSkills: string;
  careerGoal: string;
  availableHoursPerWeek: number;
  financialConstraint: boolean;
  needsAccessibility: boolean;
  currentRole: string;
  experience: "student" | "fresher" | "experienced" | "career-change";
}