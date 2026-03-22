export interface Project {
  name: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    name: "ShipFast Clone",
    description:
      "Full-stack SaaS boilerplate with auth, payments, and email — ship in days, not weeks.",
    tech: ["Next.js", "Stripe", "Supabase", "Tailwind"],
    liveUrl: "https://shipfast.example.com",
    githubUrl: "https://github.com/example/shipfast-clone",
    gradient: "from-[#00ff87] to-[#60efff]",
  },
  {
    name: "AI Invoice Generator",
    description:
      "Upload a contract PDF — get a formatted invoice in seconds using GPT-4 extraction.",
    tech: ["Python", "FastAPI", "OpenAI", "React"],
    liveUrl: "https://invoicegen.example.com",
    githubUrl: "https://github.com/example/ai-invoice",
    gradient: "from-[#ff4d00] to-[#ff9a00]",
  },
  {
    name: "Auth Dashboard",
    description:
      "Role-based admin panel with OAuth, 2FA, session management, and audit logs.",
    tech: ["Next.js", "NextAuth", "Prisma", "PostgreSQL"],
    liveUrl: "https://authdash.example.com",
    githubUrl: "https://github.com/example/auth-dashboard",
    gradient: "from-[#7c3aed] to-[#a78bfa]",
  },
  {
    name: "DevMetrics",
    description:
      "Real-time developer productivity tracker with GitHub integration and burndown charts.",
    tech: ["TypeScript", "D3.js", "Node.js", "Redis"],
    liveUrl: "https://devmetrics.example.com",
    githubUrl: "https://github.com/example/devmetrics",
    gradient: "from-[#00ff87] to-[#00b85c]",
  },
  {
    name: "CloudSync",
    description:
      "Multi-cloud file sync engine with conflict resolution and end-to-end encryption.",
    tech: ["Go", "AWS S3", "Docker", "gRPC"],
    liveUrl: "https://cloudsync.example.com",
    githubUrl: "https://github.com/example/cloudsync",
    gradient: "from-[#3b82f6] to-[#06b6d4]",
  },
  {
    name: "CodeReview Bot",
    description:
      "AI-powered PR reviewer that catches bugs, suggests refactors, and enforces style guides.",
    tech: ["Python", "GitHub API", "LangChain", "Docker"],
    liveUrl: "https://crbot.example.com",
    githubUrl: "https://github.com/example/codereview-bot",
    gradient: "from-[#f43f5e] to-[#fb7185]",
  },
];
