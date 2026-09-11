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
              I build software by combining full-stack development with prompt engineering and AI-assisted workflows. I use AI not just to generate code, but to solve problems, explore better approaches, and turn ideas into working products faster.
            </p>
            <p>
              My approach is centered around vibe coding, where I use natural language, strong prompting, and iterative development to move from an idea to a functional product efficiently. I focus on understanding what needs to be built first, then use AI as a development partner throughout the process.
            </p>
            <p>
               I care about using AI efficiently without losing control of the code. Good prompts, clear structure, and human judgment still matter to me, because the goal is not simply to generate more code, but to build software that actually works and makes sense.
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
