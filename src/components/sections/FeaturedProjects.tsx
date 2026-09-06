"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/shared/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/Button";
import { featuredProjects } from "@/data/projects";
import { staggerContainer } from "@/constants/motion";

export function FeaturedProjects() {
  return (
    <Section id="work">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured projects"
          description="A handful of projects that best represent how I approach problems — from concept through to shipped product."
          className="mb-0"
        />
        <Button href="#" variant="text" size="md">
          View all projects
        </Button>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer()}
        className="mt-14 grid gap-6 md:grid-cols-2"
      >
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </motion.div>
    </Section>
  );
}
