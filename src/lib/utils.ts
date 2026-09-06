import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind class names safely, resolving conflicting utility classes
 * (e.g. "px-2 px-4" -> "px-4") the way tailwind-merge intends.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
