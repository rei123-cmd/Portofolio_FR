"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/constants/motion";

/**
 * Brief, purposeful loading sequence: logo -> progress -> fade out into the
 * Hero underneath. Capped short so it never feels like waiting (ANIMATION_GUIDE.md
 * "Loading Sequence": 1500–2500ms).
 */
export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsDone(true);
      return;
    }

    const start = performance.now();
    const duration = 1400;
    let frame: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (elapsed < duration) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setIsDone(true), 250);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE.outExpo }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg-primary"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: EASE.outExpo }}
            className="text-page-title font-semibold text-text-primary"
          >
            FR<span className="text-accent-blue">.</span>
          </motion.p>

          <div className="mt-8 h-px w-40 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-accent-blue"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
          <p className="mt-4 text-caption tabular-nums text-text-muted">{progress}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
