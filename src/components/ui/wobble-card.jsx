"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import styled from 'styled-components';

const WobbleSection = styled(motion.section)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  background-color: #3730a3;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
`;

const NoiseContainer = styled.div`
  position: relative;
  height: 100%;
  background-image: radial-gradient(88% 100% at top, rgba(255,255,255,0.5), rgba(255,255,255,0));
  overflow: hidden;
  
  @media (min-width: 640px) {
    margin-left: 0;
    margin-right: 0;
    border-radius: 1rem;
  }
`;

const ContentContainer = styled(motion.div)`
  height: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

const NoiseOverlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transform: scale(1.2);
  opacity: 0.1;
  mask-image: radial-gradient(#fff, transparent, 75%);
  -webkit-mask-image: radial-gradient(#fff, transparent, 75%);
  background-image: url(/noise.webp);
  background-size: 30%;
`;

export const WobbleCard = ({
  children,
  containerClassName,
  className
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };
  return (
    <WobbleSection
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
          : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
        transition: "transform 0.1s ease-out",
      }}
      className={containerClassName} // Passing containerClassName if user still wants to override/append
    >
      <NoiseContainer
        style={{
          boxShadow:
            "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
        }}>
        <ContentContainer
          style={{
            transform: isHovering
              ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
              : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
            transition: "transform 0.1s ease-out",
          }}
          className={className}>
          <Noise />
          {children}
        </ContentContainer>
      </NoiseContainer>
    </WobbleSection>
  );
};

const Noise = () => {
  return (
    <NoiseOverlay />
  );
};
