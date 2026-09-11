import type { Project } from "@/types";

/**
 * PLACEHOLDER CONTENT.
 * Per CONTENT.docx: projects are the most important content on this site,
 * and per AI_RULES.md nothing here should be presented as real. Replace
 * every field below with details from your actual projects before shipping —
 * title, description, tech stack, challenges, and outcome should all reflect
 * real decisions you made, not generic placeholders.
 */
export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Hunger-Switch",
    description:
      "A dedicated food-rescue platform designed to minimize surplus food waste while directly supporting those in need, creating a sustainable and meaningful social impact.",
    role: "Full Stack Developer",
    year: "2025",
    category: ["Full Stack"],
    techStack: ["Laravel", "PHP", "MySQL", "OpenAI"],
    features: ["Authentication", "Dashboard", "Donation", "Analytics"],
    challenge:
      "I had to organize a complex system with food donations, monetary donations, agents, partners, and food distribution data. I separated the customer and admin interfaces and structured the dashboard so users could complete donations easily while admins could manage the operational data efficiently",
    outcome: "The donation process became easier to use, while admins could manage agents, partners, donations, and food distribution from a centralized dashboard.",
    liveUrl: "https://hungerswitch-app.vercel.app/",
    repoUrl: "#",
    featured: true,
  },
  {
    slug: "project-two",
    title: "Legacy Billiard",
    description:
      "A vibrant and fun place to play billiard, offering great facilities, an exciting atmosphere, and the ultimate hangout spot for friends.",
    role: "Frontend Engineer",
    year: "2025",
    category: ["Frontend", "Full Stack"],
    techStack: ["PHP", "Laravel", "JS"],
    features: ["Responsive Design", "Payment Gateway", "Customer Management"],
    challenge: "The main constraint was handling different levels of information across the customer and admin interfaces. The customer side needed a simple booking flow, while the admin side had to display tables, tournaments, customer records, and revenue data. I solved this with responsive layouts, structured dashboard sections, and reusable UI components to keep the interface usable at different screen sizes.",
    outcome: "created a centralized billiard management platform where customers can book tables and join tournaments, while admins can manage operations and monitor revenue from one dashboard.",
    liveUrl: "https://legacy-billiard.vercel.app/",
    repoUrl: "#",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
