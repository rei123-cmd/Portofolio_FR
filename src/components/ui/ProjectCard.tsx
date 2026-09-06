"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/types";
import { fadeUp, DURATION, EASE } from "@/constants/motion";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: DURATION.card, ease: EASE.outQuart }}
      className="group relative flex flex-col overflow-hidden rounded-card border border-border bg-surface/60 p-6 transition-colors hover:border-border-hover sm:p-8"
    >
      {/* Border glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-card opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(600px_circle_at_var(--mx,50%)_var(--my,0%),rgba(79,124,255,0.08),transparent_60%)]" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {project.category.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-border px-3 py-1 text-caption text-text-secondary"
            >
              {cat}
            </span>
          ))}
        </div>
        <span className="shrink-0 text-caption text-text-muted">{project.year}</span>
      </div>

      <h3 className="relative mt-6 text-card-title font-semibold text-text-primary">
        {project.title}
      </h3>
      <p className="relative mt-3 text-small text-text-secondary">{project.description}</p>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {project.techStack.slice(0, 6).map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-white/[0.04] px-3 py-1 text-caption text-text-secondary"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="relative mt-8 flex items-center gap-5 border-t border-border pt-5">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            className="flex items-center gap-1.5 text-small font-medium text-text-primary transition-colors hover:text-accent-blue"
          >
            View {project.title} live demo
            <ArrowUpRight size={15} />
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            aria-label={`View ${project.title} repository on GitHub`}
            className="flex items-center gap-1.5 text-small text-text-secondary transition-colors hover:text-text-primary"
          >
            <Github size={15} />
          </a>
        )}
      </div>
    </motion.article>
  );
}
