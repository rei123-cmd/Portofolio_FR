"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/shared/Section";
import { skillCategories } from "@/data/skills";
import { staggerContainer, fadeUp } from "@/constants/motion";

export function SkillsSection() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Capabilities"
        title="Skills &amp; technologies"
        description="Grouped by what I use them to build, not just what I know."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer(0.07)}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {skillCategories.map((group) => (
          <motion.div
            key={group.category}
            variants={fadeUp}
            whileHover={{ rotate: -0.6, y: -4 }}
            className="rounded-card border border-border bg-surface/50 p-6 transition-colors hover:border-border-hover"
          >
            <h3 className="text-small font-semibold uppercase tracking-wide text-accent-blue">
              {group.category}
            </h3>
            <ul className="mt-5 space-y-3">
              {group.skills.map((skill) => (
                <li key={skill.name} className="text-small text-text-secondary">
                  {skill.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
