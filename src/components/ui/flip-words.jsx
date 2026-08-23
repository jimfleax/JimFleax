"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const FlipWords = ({ words, duration = 3000, className }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let nextText = text;
    let typingSpeed = isDeleting ? 40 : 80; // Deleting is faster than typing

    if (!isDeleting && text === currentWord) {
      // Finished typing: pause before starting to delete
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, duration);
      return () => clearTimeout(timeout);
    } else if (isDeleting && text === "") {
      // Finished deleting: pause briefly, then switch to next word
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 300);
      return () => clearTimeout(timeout);
    } else {
      // Normal typing or deleting cycle
      nextText = isDeleting 
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      const timeout = setTimeout(() => {
        setText(nextText);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [text, isDeleting, wordIndex, words, duration]);

  return (
    <div className={cn("relative inline-block text-left min-w-[200px]", className)}>
      <div className="z-10 inline-block relative text-neutral-900 dark:text-neutral-100 px-2">
        {text}
        <span className="inline-block w-[3px] h-[1.1em] bg-neutral-900 dark:bg-neutral-100 ml-1 -mb-1 animate-pulse" style={{ animationDuration: '0.8s' }}></span>
      </div>
    </div>
  );
};
console.log("FlipWords patched");
