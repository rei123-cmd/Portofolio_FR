"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient hero backdrop: soft gradient wash, faint grid, and a cursor-reactive
 * radial spotlight. Kept to transform/opacity-safe CSS custom properties so it
 * stays GPU-cheap — see PERFORMANCE.md "Animate only transform, opacity".
 *
 * This intentionally does not use Three.js. It's the fast, dependency-free
 * version of the ambient background; the full interactive 3D scene described
 * in THREEJS_GUIDE.md is the natural next layer to add on top of this.
 */
export function HeroBackground() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) return;

    let frame: number;
    const handleMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        spotlightRef.current?.style.setProperty("--x", `${e.clientX}px`);
        spotlightRef.current?.style.setProperty("--y", `${e.clientY}px`);
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Base ambient gradient wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% -10%, rgba(79,124,255,0.16) 0%, transparent 55%), radial-gradient(80% 60% at 85% 20%, rgba(123,97,255,0.12) 0%, transparent 60%)",
        }}
      />

      {/* Faint structural grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(80% 60% at 50% 30%, black 0%, transparent 75%)",
        }}
      />

      {/* Cursor-reactive spotlight (desktop only, disabled under reduced motion) */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 hidden md:block motion-reduce:hidden"
        style={
          {
            "--x": "50%",
            "--y": "30%",
            background:
              "radial-gradient(480px circle at var(--x) var(--y), rgba(0,212,255,0.06), transparent 70%)",
          } as React.CSSProperties
        }
      />

      {/* Soft vignette to keep foreground text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary" />
    </div>
  );
}
