export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "instagram" | "twitter" | "mail";
}

export type ProjectCategory =
  | "AI"
  | "Frontend"
  | "Backend"
  | "Full Stack"
  | "Open Source"
  | "Design";

export interface Project {
  slug: string;
  title: string;
  description: string;
  role: string;
  year: string;
  category: ProjectCategory[];
  techStack: string[];
  features: string[];
  challenge: string;
  outcome: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    years?: number;
  }[];
}

export interface TimelineEntry {
  date: string;
  role: string;
  organization: string;
  description: string;
  technologies: string[];
}

export interface Statistic {
  label: string;
  value: number;
  suffix?: string;
}
