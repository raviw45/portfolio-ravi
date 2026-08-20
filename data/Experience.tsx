export type ExperienceEntry = {
  initials: string;
  title: string;
  company: string;
  dateRange: string;
  location: string;
  summary: string;
  metrics: { value: string; label: string }[];
  points: string[];
  tags: string[];
};

export const experience: ExperienceEntry[] = [
  {
    initials: "TG",
    title: "Software Engineer",
    company: "Traveazy Group",
    dateRange: "Feb 2026 — Present",
    location: "Pune, India · Current",
    summary:
      "Building an AI-powered, multi-tenant travel SaaS platform end to end — product front-end, onboarding, and the agentic automation behind it.",
    metrics: [
      { value: "+30%", label: "Engagement" },
      { value: "−50%", label: "Manual work" },
      { value: "−35%", label: "Duplication" },
      { value: "30–40%", label: "Faster delivery" },
    ],
    points: [
      "Shipped production AI-powered SaaS features in Next.js, React, Tailwind and shadcn/ui.",
      "Consolidated registration, authentication and account setup into one guided Clerk flow, replacing multi-step manual onboarding.",
      "Built Agentic AI workflows and RAG pipelines on OpenAI models, integrated through Cursor AI and MCP servers.",
      "Structured delivery around a two-model Claude workflow — Opus for architecture, Sonnet for implementation.",
      "Architected TurboRepo monorepos with shared UI packages, plus AWS Lambda pipelines for automated PDF extraction.",
    ],
    tags: ["Next.js", "TypeScript", "LangChain / RAG", "MCP", "TurboRepo", "Clerk", "AWS Lambda"],
  },
  {
    initials: "VI",
    title: "Software Engineer",
    company: "Vionsys IT Solutions India Pvt. Ltd.",
    dateRange: "Feb 2024 — Jan 2026",
    location: "Pune, India · 2 years",
    summary:
      "Delivered client platforms across three domains — CRM, education and construction — from first component to production deployment.",
    metrics: [
      { value: "3", label: "Platform types" },
      { value: "10–20%", label: "Faster loads" },
      { value: "−45%", label: "Release time" },
      { value: "1", label: "Team of the Quarter" },
    ],
    points: [
      "Built high-performance React and Next.js interfaces with Tailwind and shadcn/ui for client-facing applications.",
      "Integrated 10–20 REST endpoints across Node.js, MongoDB, PostgreSQL and Prisma services with backend teams.",
      "Configured GitHub Actions CI/CD, containerised with Docker and supported production deploys on AWS.",
      "Followed security best practice — XSS/CSRF hardening, JWT auth and role-based access control.",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Prisma", "Docker", "GitHub Actions", "AWS"],
  },
];
