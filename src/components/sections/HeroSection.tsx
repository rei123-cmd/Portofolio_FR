"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { HeroBackground } from "./HeroBackground";
import { Button } from "@/components/ui/Button";
import { DURATION, EASE, STAGGER } from "@/constants/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: STAGGER.heroText, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION.sectionReveal, ease: EASE.outExpo },
  },
};

export function HeroSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      <HeroBackground />

      <motion.div
        className="container-content relative"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={item}
          className="mb-6 text-caption font-medium uppercase tracking-[0.2em] text-accent-blue"
        >
          Available for select projects
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-4xl text-hero font-semibold text-balance text-text-primary"
        >
          {/* PLACEHOLDER — replace with the person's real name */}
          Filbert Rei
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 max-w-2xl text-page-title font-medium text-text-secondary text-balance"
        >
          AI Prompt Engineer. Full Stack Developer. Creative Technologist.
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-body text-text-secondary"
        >
          I build AI-powered applications and interactive interfaces that combine thoughtful
          design with scalable engineering.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="#work" size="lg">
            View Portfolio
          </Button>
          <Button href="#contact" variant="secondary" size="lg">
            Contact Me
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: DURATION.sectionReveal }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-caption text-text-muted sm:flex"
        aria-label="Scroll to work section"
      >
        <span>Scroll</span>
        <motion.span
          animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: EASE.inOutCubic }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
