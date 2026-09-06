"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/shared/Section";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { StatCounter } from "@/components/ui/StatCounter";
import { statistics } from "@/data/skills";
import { staggerContainer, fadeUp } from "@/constants/motion";

export function AboutSection() {
  return (
    <Section id="about" className="bg-bg-secondary/40">
      <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="About"
            title="How I think about building software"
            className="mb-8"
          />
          <div className="space-y-5 text-body text-text-secondary">
            {/* PLACEHOLDER — replace with a real first-person introduction,
                following CONTENT.docx: focus on mindset, not biography. */}
            <p>
              I specialize in building AI-powered products and interactive interfaces, working
              across the full stack from data and infrastructure to the pixels people actually
              touch.
            </p>
            <p>
              Currently I&apos;m focused on combining large language models with thoughtful
              product design — the kind of work where a good architecture decision matters as
              much as a good animation curve.
            </p>
            <p>
              I care about code that a future engineer can understand in two years, and interfaces
              that feel effortless the first time someone uses them.
            </p>
          </div>
        </RevealOnScroll>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-2 gap-8 self-start rounded-card border border-border bg-surface/50 p-8 sm:p-10"
        >
          {statistics.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <StatCounter {...stat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
