import type { NavItem, SocialLink } from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// PLACEHOLDER — replace with real profile URLs.
export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/rei123-cmd", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/FilbertRei", icon: "linkedin" },
  { label: "Twitter", href: "https://twitter.com/yourusername", icon: "twitter" },
  { label: "Email", href: "mailto:hello@example.com", icon: "mail" },
];
