"use client";
import React, { useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export const TextHoverEffect = ({ text }) => {
  const svgRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Use MotionValues to track cursor position without re-renders
  const maskX = useMotionValue(50);
  const maskY = useMotionValue(50);

  // Use Spring to create a smooth follow effect, replicating the original transition
  const springConfig = { stiffness: 200, damping: 30, mass: 0.8 };
  const maskXSpring = useSpring(maskX, springConfig);
  const maskYSpring = useSpring(maskY, springConfig);

  // Transform to percentage strings for the SVG gradient
  const cx = useTransform(maskXSpring, (v) => `${v}%`);
  const cy = useTransform(maskYSpring, (v) => `${v}%`);

  const handleMouseMove = (e) => {
    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
      const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
      maskX.set(xPercent);
      maskY.set(yPercent);
    }
  };

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="select-none"
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {/* Always render stops to avoid layout thrashing on hover */}
          <stop offset="0%" stopColor="#eab308" />
          <stop offset="25%" stopColor="#ef4444" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="75%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          cx={cx}
          cy={cy}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.5"
        className="fill-transparent stroke-neutral-300 font-[helvetica] text-4xl md:text-5xl lg:text-7xl font-bold dark:stroke-neutral-800"
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.5"
        className="fill-transparent stroke-neutral-200 font-[helvetica] text-4xl md:text-5xl lg:text-7xl font-bold dark:stroke-neutral-900"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.5"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] text-4xl md:text-5xl lg:text-7xl font-bold"
      >
        {text}
      </text>
    </svg>
  );
};
