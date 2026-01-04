"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "motion/react"; // Updated import to match user's usage
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TiArrowRightThick } from "react-icons/ti";

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 80rem;
  margin: 2rem auto;
  width: 95%;
  padding: 1rem;
  min-height: calc(100vh - 4rem);
  box-shadow: ${(props) =>
    props.$showSkills
      ? "0 0 40px rgba(59, 130, 246, 0.6)"
      : "0 0 40px rgba(249, 115, 22, 0.6)"};
  transition: box-shadow 1.5s ease-in-out;
  border-radius: 2rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const BackgroundLayer = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 0;
  background: ${(props) => props.$bg};
`;

const ContentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 56rem;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  z-index: 10;
`;

const TitleText = styled.div`
  color: rgba(255, 255, 255, 0.78);
  font-family: var(--font-sans, sans-serif);
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.2;
  padding: 1rem;

  @media (min-width: 768px) {
    font-size: 4rem;
    padding: 1rem 2rem;
  }
`;

const ActionButton = styled(motion.button)`
  background: white;
  color: #f97316;
  border: none;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-left: 2rem;
  margin-top: 1rem;

  &:hover {
    transform: scale(1.1);
  }

  /* When showing skills (blue theme), change text color */
  ${(props) =>
    props.$active &&
    `
    color: #3b82f6;
  `}
`;

const SkillsList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  font-family: var(--font-sans, sans-serif);
`;

const ProgressBarBackground = styled.div`
  width: 100%;
  height: 0.75rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  overflow: hidden;
`;

const ProgressBarFill = styled(motion.div)`
  height: 100%;
  background: white; // White fill for nice contrast against blue
  border-radius: 1rem;
`;

const LearningBoast = styled(TextGenerateEffect)`
  color: #ffffffdf;
  font-size: 1.2rem;
  text-align: center;
  font-family: "Handlee";
`;

export function SkillsPage() {
  const [showSkills, setShowSkills] = useState(false);

  const skills = [
    { name: "React.js", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js / Express", level: 80 },
    { name: "MongoDB", level: 80 },
    { name: "Python", level: 70 },
    { name: "C Programming", level: 60 },
    { name: "Blockchain", level: 40 },
  ];

  return (
    <SkillsWrapper $showSkills={showSkills}>
      <BackgroundLayer
        $bg="linear-gradient(135deg, #f97316, #ef4444)"
        animate={{ opacity: showSkills ? 0 : 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <BackgroundLayer
        $bg="linear-gradient(135deg, #3b82f6, #06b6d4)"
        animate={{ opacity: showSkills ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <ContentContainer>
        <AnimatePresence mode="wait">
          {!showSkills ? (
            <motion.div
              key="title"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <TitleText>
                <TextGenerateEffect words="do you want to know what i can do?" />
              </TitleText>
              <ActionButton
                onClick={() => setShowSkills(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <TiArrowRightThick />
              </ActionButton>
            </motion.div>
          ) : (
            <>
              <SkillsList
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1rem",
                    color: "white",
                  }}
                >
                  <h3 style={{ fontSize: "2rem", fontWeight: "bold" }}>
                    My Skills
                  </h3>
                  <ActionButton
                    $active={true}
                    onClick={() => setShowSkills(false)}
                    style={{
                      margin: 0,
                      width: "3rem",
                      height: "3rem",
                      fontSize: "1.5rem",
                      transform: "rotate(180deg)",
                    }}
                  >
                    <TiArrowRightThick />
                  </ActionButton>
                </div>

                {skills.map((skill, idx) => (
                  <SkillItem key={idx}>
                    <SkillHeader>
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </SkillHeader>
                    <ProgressBarBackground>
                      <ProgressBarFill
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: 0.5 + idx * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </ProgressBarBackground>
                  </SkillItem>
                ))}
              </SkillsList>
              <LearningBoast words="i'm always learning something or the other, so you will see these changing" />
            </>
          )}
        </AnimatePresence>
      </ContentContainer>
    </SkillsWrapper>
  );
}

export default SkillsPage;
