export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools";
  proficiency: "Expert" | "Advanced" | "Intermediate";
}

export const techStack: TechItem[] = [
  // Frontend
  { name: "Angular", category: "Frontend", proficiency: "Advanced" },
  { name: "React", category: "Frontend", proficiency: "Intermediate" },
  { name: "Next.js", category: "Frontend", proficiency: "Intermediate" },
  { name: "Ionic", category: "Frontend", proficiency: "Intermediate" },
  { name: "Angular Material", category: "Frontend", proficiency: "Advanced" },
  { name: "Tailwind CSS", category: "Frontend", proficiency: "Advanced" },
  { name: "Material UI", category: "Frontend", proficiency: "Advanced" },
  { name: "PrimeNG", category: "Frontend", proficiency: "Advanced" },

  // Backend
  { name: "Python", category: "Backend", proficiency: "Advanced" },
  { name: "FastAPI", category: "Backend", proficiency: "Advanced" },
  { name: "Node.js", category: "Backend", proficiency: "Intermediate" },
  { name: "NumPy", category: "Backend", proficiency: "Intermediate" },
  { name: "Pandas", category: "Backend", proficiency: "Intermediate" },

  // Database
  { name: "PostgreSQL", category: "Database", proficiency: "Advanced" },
  { name: "MongoDB", category: "Database", proficiency: "Advanced" },

  // Tools
  { name: "Git", category: "Tools", proficiency: "Advanced" },
  { name: "Figma", category: "Tools", proficiency: "Intermediate" },
  { name: "Postman", category: "Tools", proficiency: "Advanced" },
  { name: "Power BI", category: "Tools", proficiency: "Intermediate" },
  { name: "Linux/Unix", category: "Tools", proficiency: "Intermediate" },
  { name: "VS Code", category: "Tools", proficiency: "Expert" },
];

export const categories = ["Frontend", "Backend", "Database", "Tools"] as const;