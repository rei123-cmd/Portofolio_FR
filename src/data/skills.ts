import type { SkillCategory, Statistic, TimelineEntry } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Three.js" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "REST API" },
      { name: "GraphQL" },
    ],
  },
  {
    category: "Artificial Intelligence",
    skills: [
      { name: "OpenAI" },
      { name: "Claude" },
      { name: "LangChain" },
      { name: "Prompt Engineering" },
      { name: "RAG" },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Vercel" },
      { name: "AWS" },
      { name: "Docker" },
      { name: "CI/CD" },
    ],
  },
];

// PLACEHOLDER — replace with real, verifiable numbers. Do not fabricate.
export const statistics: Statistic[] = [
  { label: "Projects Shipped", value: 0 },
  { label: "Years Experience", value: 0 },
  { label: "Repositories", value: 0 },
  { label: "Open Source Contributions", value: 0 },
];

// PLACEHOLDER — replace with real roles, dates, and descriptions.
export const timeline: TimelineEntry[] = [
  {
    date: "2025",
    role: "Full Stack Developer",
    organization: "Circuit Go",
    description: "Replace with impact, not a job description — what changed because you were there.",
    technologies: ["Next.js", "TypeScript"],
  },
  {
    date: "2025",
    role: "Full Stack Developer",
    organization: "Legacy Billiard",
    description: "Replace with impact, not a job description.",
    technologies: ["React", "Node.js"],
  },
];
