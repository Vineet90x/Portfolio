export interface Experience {
  company: string;
  role: string;
  dates: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    company: "Go Digital Technology",
    role: "Associate Engineer",
    dates: "Feb 2025 — Present",
    achievements: [
      "Architected a secure authorization system using FastAPI and SuperTokens, implementing RBAC and plan-based page access controls restricting feature visibility dynamically based on subscription tier",
      "Built and shipped 10+ responsive UI features and data visualization modules for a stock market platform using Angular, Tailwind CSS, PrimeNG, and Angular Material",
      "Integrated Dhan API login and payment gateway flows, enabling seamless third-party authentication and transaction processing",
      "Engineered optimized SQL views and stored procedures to improve backend data retrieval efficiency for financial data modules",
      "Designed and executed comprehensive QA test plans covering authorization workflows, edge cases, and security scenarios ensuring system stability pre-launch",
    ],
  },
  {
    company: "Go Digital Technology",
    role: "Full Stack Developer Intern",
    dates: "Dec 2024 — Feb 2025",
    achievements: [
      "Developed full-stack web applications using Spring Boot, Angular, .NET Web API, SQL, and JavaScript in an Agile/Scrum environment",
      "Designed and optimized RESTful API architectures and relational database schemas, improving scalability and query performance across multiple modules",
      "Built cross-platform mobile applications using Vue.js and Ionic, extending product reach to mobile users",
      "Collaborated on debugging, QA testing, and feature enhancements, contributing to measurable reduction in post-deployment defects",
    ],
  },
  {
    company: "Freelance",
    role: "UI/UX Designer & Frontend Developer",
    dates: "Jul 2024 — Nov 2024",
    achievements: [
      "Designed a cross-platform mobile app UI/UX in Figma for a paying client, translating requirements into polished, user-centric interfaces",
      "Developed and customized responsive WordPress websites with theme and plugin modifications to improve performance and UX",
      "Built projects independently using React, Next.js, Tailwind CSS, and Django, broadening capability across modern frontend and backend ecosystems",
    ],
  },
  {
    company: "On My Own Technology",
    role: "Robotics Associate & Technical Trainer",
    dates: "Jul 2023 — Jul 2024",
    achievements: [
      "Engineered responsive UIs using HTML, CSS, JavaScript, Material UI, and Tailwind CSS across 5+ internal projects",
      "Processed and analyzed image datasets using Python (OpenCV, NumPy, Pandas), generating visualizations with Matplotlib to support data-driven decisions",
      "Architected and deployed full-stack web applications using the MERN stack, delivering scalable RESTful APIs across multiple projects",
      "Delivered a structured technical curriculum covering Python, OpenCV, TensorFlow, and OOP to 20+ students over 12 months through hands-on project mentorship",
    ],
  },



];