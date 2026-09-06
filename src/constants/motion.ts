/**
 * Centralized motion tokens, derived from ANIMATION_GUIDE.md.
 * Every animated component should pull timing/easing from here rather than
 * hardcoding values, so motion stays consistent across the project.
 */

export const EASE = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  inOutCubic: [0.65, 0, 0.35, 1] as const,
  outQuart: [0.25, 1, 0.5, 1] as const,
};

export const DURATION = {
  microInteraction: 0.15,
  hover: 0.2,
  button: 0.2,
  card: 0.26,
  dialog: 0.38,
  sectionReveal: 0.7,
  heroIntro: 1.5,
  pageTransition: 0.7,
};

export const STAGGER = {
  cards: 0.055,
  list: 0.045,
  heroText: 0.12,
  largeSections: 0.1,
};

/** Standard "enter on scroll" variant: opacity -> position -> (optional) scale. */
export const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.sectionReveal, ease: EASE.outExpo },
  },
};

export const staggerContainer = (stagger: number = STAGGER.cards, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.card, ease: EASE.outQuart },
  },
};
