"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { revealVariants } from "@/constants/motion";
import { cn } from "@/lib/utils";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Fades + translates content into view once, the first time it enters the
 * viewport. Never replays on repeated scroll (see ANIMATION_GUIDE.md
 * "Number Animation" / general reveal philosophy).
 */
export function RevealOnScroll({ children, className, delay = 0 }: RevealOnScrollProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={revealVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
