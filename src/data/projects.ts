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
      "Platform penyelamat surplus makanan untuk mengurangi limbah sekaligus membantu sesama yang membutuhkan, menciptakan dampak sosial nyata dengan mudah dan cepat.",
    role: "Full Stack Developer",
    year: "2025",
    category: ["Full Stack", "AI"],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI"],
    features: ["Authentication", "Dashboard", "AI Chat", "Analytics"],
    challenge:
      "Describe a real engineering decision you made here — e.g. how you handled streaming responses or state consistency.",
    outcome: "Replace with a measurable result, e.g. reduced load time by 40%.",
    liveUrl: "https://hungerswitch-app.vercel.app/",
    repoUrl: "#",
    featured: true,
  },
  {
    slug: "project-two",
    title: "Project Two",
    description:
      "Tempat seru untuk bermain biliar dengan suasana menyenangkan, fasilitas lengkap, dan tempat nongkrong asik bersama teman.",
    role: "Frontend Engineer",
    year: "2025",
    category: ["Frontend", "Design"],
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    features: ["Responsive Design", "Interactive UI", "Micro-interactions"],
    challenge: "Describe a real constraint you solved — performance, accessibility, or layout.",
    outcome: "Replace with a measurable result, e.g. improved Lighthouse score to 98.",
    liveUrl: "https://legacy-billiard.vercel.app/",
    repoUrl: "#",
    featured: true,
  },
  {
    slug: "project-three",
    title: "Circuit Go",
    description:
      "Platform pembelajaran teknologi digital yang menyediakan kursus interaktif dan mentorship untuk pemula.",
    role: "AI Engineer",
    year: "2025",
    category: ["AI", "Backend"],
    techStack: ["Python", "LangChain", "Vector Database"],
    features: ["RAG Pipeline", "Prompt Engineering", "LLM Evaluation"],
    challenge: "Describe how you approached retrieval quality or evaluation here.",
    outcome: "Replace with a measurable result.",
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
