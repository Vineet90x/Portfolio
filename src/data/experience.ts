export interface Experience {
  company: string;
  role: string;
  dates: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    company: "TechCorp Inc.",
    role: "Senior Full-Stack Developer",
    dates: "Jan 2024 — Present",
    achievements: [
      "Led migration of monolithic app to microservices, reducing deploy times by 80%",
      "Built real-time analytics dashboard serving 50K+ daily active users",
      "Mentored 4 junior developers and established code review standards",
    ],
  },
  {
    company: "StartupXYZ",
    role: "Full-Stack Developer",
    dates: "Jun 2022 — Dec 2023",
    achievements: [
      "Shipped 3 production apps from zero to launch in under 6 months each",
      "Designed and implemented RESTful APIs handling 10K+ requests/minute",
      "Reduced page load times by 60% through code splitting and lazy loading",
    ],
  },
  {
    company: "Freelance",
    role: "Web Developer & Consultant",
    dates: "Mar 2021 — May 2022",
    achievements: [
      "Delivered 12+ client projects across e-commerce, SaaS, and portfolio sites",
      "Built custom CMS solutions using Next.js and headless WordPress",
      "Maintained 100% on-time delivery rate with 5-star client satisfaction",
    ],
  },
];
