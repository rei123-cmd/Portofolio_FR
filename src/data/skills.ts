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
      { name: "Gemini" },
      { name: "Prompt Engineering" },
      { name: "Kimi" },
      { name: "" }
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Vercel" },
      { name: "MySQL" },
      { name: "Docker" },
      { name: "Supabase" },
    ],
  },
];

// PLACEHOLDER — replace with real, verifiable numbers. Do not fabricate.
export const statistics: Statistic[] = [
  { label: "Projects Shipped", value: 5 },
  { label: "Years Experience", value: 3 },
  { label: "Repositories", value: 3 },
  { label: "Open Source Contributions", value: 0 },
];

// PLACEHOLDER — replace with real roles, dates, and descriptions.
export const timeline: TimelineEntry[] = [
  {
    date: "2025",
    role: "Full Stack Developer",
    organization: "Hunger-Switch",
    description: "simplified food and monetary donations while giving admins a centralized system to manage agents, partners, donated food, and distribution.",
    technologies: ["Laravel", "JS"],
  },
  {
    date: "2025",
    role: "Full Stack Developer",
    organization: "Legacy Billiard",
    description: "streamlined billiard table booking and tournament management by bringing customer and admin operations into one centralized platform.",
    technologies: [ "Laravel", "PHP", "MySQL"],
  },
];
