"use client";

import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { navItems, socialLinks } from "@/data/navigation";
import { motion } from "framer-motion";
import { DURATION, EASE } from "@/constants/motion";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
  instagram: Github, // swapped out if Instagram link is used — replace icon if needed
};

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-content flex flex-col gap-10 py-16 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a href="#home" className="text-card-title font-semibold text-text-primary">
            FR<span className="text-accent-blue">.</span>
          </a>
          <p className="mt-3 max-w-xs text-caption text-text-muted">
            Building AI-powered applications and interactive experiences at the intersection of
            engineering and design.
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-small text-text-secondary transition-colors hover:text-text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-border-hover hover:text-text-primary"
              >
                <Icon size={17} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-content flex flex-col items-center justify-between gap-4 py-6 text-caption text-text-muted sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Filbert Rei. All rights reserved.</p>
          <motion.a
            href="#home"
            whileHover={{ y: -2 }}
            transition={{ duration: DURATION.hover, ease: EASE.outQuart }}
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary"
          >
            Back to top <ArrowUp size={14} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
