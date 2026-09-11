"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/shared/Section";
import { timeline } from "@/data/skills";
import { fadeUp, staggerContainer } from "@/constants/motion";

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        description="Impact over responsibilities what changed because I was there."
      />

      <motion.ol
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer(0.1)}
        className="relative border-l border-border pl-8 sm:pl-10"
      >
        {timeline.map((entry) => (
          <motion.li key={`${entry.role}-${entry.organization}`} variants={fadeUp} className="relative pb-14 last:pb-0">
            <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-accent-blue bg-bg-primary sm:-left-[49px]" />

            <p className="text-caption uppercase tracking-wide text-text-muted">{entry.date}</p>
            <h3 className="mt-2 text-card-title font-semibold text-text-primary">
              {entry.role} <span className="text-text-secondary font-normal">· {entry.organization}</span>
            </h3>
            <p className="mt-3 max-w-2xl text-small text-text-secondary">{entry.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {entry.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white/[0.04] px-3 py-1 text-caption text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
