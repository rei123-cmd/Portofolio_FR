"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { DURATION, EASE } from "@/constants/motion";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "text";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Renders the button as an anchor (e.g. for in-page nav links). */
  href?: string;
  target?: string;
  rel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-blue text-white shadow-glow hover:bg-accent-blue/90 focus-visible:outline-white",
  secondary:
    "bg-transparent text-text-primary border border-border hover:border-border-hover hover:bg-white/[0.03]",
  outline:
    "bg-transparent text-text-primary border border-border-hover hover:bg-white/[0.04]",
  ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/[0.04]",
  text: "bg-transparent text-text-secondary hover:text-text-primary underline-offset-4 hover:underline px-0",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-caption",
  md: "h-11 px-6 text-small",
  lg: "h-14 px-8 text-body",
};

/**
 * Buttons should feel physical: 2-4px lift + shadow on hover, 98% scale on
 * press, smooth release. See ANIMATION_GUIDE.md "Button Motion".
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, href, target, rel, ...props }, ref) => {
    const sharedClassName = cn(
      "inline-flex items-center justify-center gap-2 rounded-button font-medium",
      "transition-colors focus-visible:outline-2 focus-visible:outline-accent-blue",
      "disabled:opacity-40 disabled:pointer-events-none",
      variantStyles[variant],
      sizeStyles[size],
      className
    );
    const sharedMotionProps = {
      whileHover: { y: -3 },
      whileTap: { scale: 0.98 },
      transition: { duration: DURATION.button, ease: EASE.outQuart },
    };

    if (href) {
      return (
        <motion.a
          href={href}
          target={target}
          rel={rel}
          className={sharedClassName}
          {...sharedMotionProps}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button ref={ref} className={sharedClassName} {...sharedMotionProps} {...props}>
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
