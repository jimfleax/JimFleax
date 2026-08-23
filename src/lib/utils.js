/**
 * @file utils.js
 * @description Utility functions for styling and class name merging across the application.
 * @architecture Bridges clsx and tailwind-merge to provide clean conditional Tailwind CSS class composition.
 */

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * @desc    Combines and merges multiple class names, resolving Tailwind CSS class conflicts.
 * @param   {...*} inputs - List of class names, conditionals, or class objects to merge.
 * @returns {string} Merged class name string with conflicting Tailwind classes resolved.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
