export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "DevOps" | "Tools";
  proficiency: "Expert" | "Advanced" | "Intermediate";
}

export const techStack: TechItem[] = [
  // Frontend
  { name: "React", category: "Frontend", proficiency: "Expert" },
  { name: "Next.js", category: "Frontend", proficiency: "Expert" },
  { name: "TypeScript", category: "Frontend", proficiency: "Expert" },
  { name: "Tailwind CSS", category: "Frontend", proficiency: "Expert" },
  { name: "Angular", category: "Frontend", proficiency: "Advanced" },
  { name: "HTML/CSS", category: "Frontend", proficiency: "Expert" },
  { name: "Vue.js", category: "Frontend", proficiency: "Intermediate" },

  // Backend
  { name: "Node.js", category: "Backend", proficiency: "Expert" },
  { name: "Python", category: "Backend", proficiency: "Advanced" },
  { name: "PostgreSQL", category: "Backend", proficiency: "Advanced" },
  { name: "Redis", category: "Backend", proficiency: "Advanced" },
  { name: "FastAPI", category: "Backend", proficiency: "Intermediate" },

  // DevOps
  { name: "Docker", category: "DevOps", proficiency: "Advanced" },
  { name: "Azure", category: "DevOps", proficiency: "Intermediate" },
  { name: "Vercel", category: "DevOps", proficiency: "Expert" },
  { name: "GitHub Actions", category: "DevOps", proficiency: "Advanced" },
  { name: "Linux", category: "DevOps", proficiency: "Advanced" },

  // Tools
  { name: "Git", category: "Tools", proficiency: "Expert" },
  { name: "Figma", category: "Tools", proficiency: "Advanced" },
  { name: "VS Code", category: "Tools", proficiency: "Expert" },
  { name: "Postman", category: "Tools", proficiency: "Advanced" },
  { name: "Notion", category: "Tools", proficiency: "Advanced" },
];

export const categories = ["Frontend", "Backend", "DevOps", "Tools"] as const;
