"use client";

import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { motion, AnimatePresence } from "motion/react";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { FaHeart } from "react-icons/fa";
import { cn } from "@/lib/utils";

const PageWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const BackgroundTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  pointer-events: none;
  pointer-events: auto;
`;

const FooterContainer = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-sans, sans-serif);
  color: #6b7280;
  font-size: 0.875rem;
  cursor: pointer;
  user-select: none;

  .dark & {
    color: #9ca3af;
  }
`;

const HeartIcon = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ef4444;
`;

const FloatingHeart = styled(motion.div)`
  position: absolute;
  color: #ef4444;
  pointer-events: none;
`;

const EffectContainer = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 640px) {
    height: 16rem;
  }

  @media (min-width: 1024px) {
    height: 20rem;
  }
`;

export function FooterPage() {
  const [hearts, setHearts] = useState([]);

  const handleFooterClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top;

    const newHearts = Array.from({ length: 10 }).map((_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() - 0.5) * 50,
      y: y,
    }));

    setHearts((prev) => [...prev, ...newHearts]);

    setTimeout(() => {
      setHearts((prev) =>
        prev.filter((h) => !newHearts.find((nh) => nh.id === h.id)),
      );
    }, 2000);
  };

  return (
    <PageWrapper className="dark:bg-black bg-transparent">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            "[mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]",
          )}
        />
      </div>
      <BackgroundTextContainer>
        <EffectContainer>
          <TextHoverEffect text="JIM FLEAX" />
        </EffectContainer>
      </BackgroundTextContainer>

      <FooterContainer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1, letterSpacing: "1px", color: "#374151" }}
        onClick={handleFooterClick}
        style={{
          flexWrap: "wrap",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <span>Made with</span>
        <HeartIcon
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            filter: "drop-shadow(0 0 8px rgba(239, 68, 68, 0.5))",
            scale: 1.3,
          }}
        >
          <FaHeart />
        </HeartIcon>
        <span>by Reetabrata</span>
      </FooterContainer>

      <AnimatePresence>
        {hearts.map((heart) => (
          <FloatingHeart
            key={heart.id}
            initial={{ opacity: 1, x: 0, y: 0, scale: 0.5 }}
            style={{
              left: `calc(50% + ${(Math.random() - 0.5) * 100}px)`,
              bottom: "3rem",
            }}
            animate={{
              y: -200 - Math.random() * 100,
              x: (Math.random() - 0.5) * 100,
              opacity: 0,
              scale: Math.random() * 0.5 + 0.8,
            }}
            transition={{ duration: 1.5 + Math.random(), ease: "easeOut" }}
          >
            <FaHeart />
          </FloatingHeart>
        ))}
      </AnimatePresence>
    </PageWrapper>
  );
}

export default FooterPage;
