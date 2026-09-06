"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import type { Statistic } from "@/types";

/** Animates a number counting up once, the first time it scrolls into view. */
export function StatCounter({ label, value, suffix = "" }: Statistic) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.25, 1, 0.5, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <div>
      <p ref={ref} className="text-page-title font-semibold text-text-primary tabular-nums">
        {display}
        {suffix}
      </p>
      <p className="mt-1 text-caption text-text-muted">{label}</p>
    </div>
  );
}
