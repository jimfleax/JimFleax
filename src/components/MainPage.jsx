/**
 * @file MainPage.jsx
 * @description Main orchestrator component for the portfolio application.
 * @architecture Assembles various section components (Hero, About, Projects, etc.) into a cohesive single-page layout.
 */

import React, { useEffect, Suspense, useMemo } from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import { AuroraBackground } from "@/components/ui/aurora-background";

import HeroPage from "./HeroPage";
import FooterPage from "./FooterPage";
import Projects from "./Projects";
import AboutPage from "./AboutPage";
import SkillsPage from "./SkillsPage";
import ContributionsPage from "./ContributionsPage";
import ContactPage from "./ContactPage";

import Certifications from "./Certifications";
import SpotifySection from "./SpotifySection";
import LeetCodeSection from "./LeetCodeSection";

const StyledAuroraBackground = styled(AuroraBackground)`
  min-height: 100vh;
  height: auto;
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SnapSection = styled.section`
  scroll-snap-align: start;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const DesktopOnlySnapSection = styled(SnapSection)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

/**
 * @desc    Renders the main assembled page for the portfolio.
 * @returns {JSX.Element} The rendered component.
 */
function MainPage() {
  // Nevermind this piece of code
  useEffect(
    () =>
      console.log(
        `Hi there! Are you looking for a fellow developer to make something exciting together?\nPerhaps, we can colab to build something cool!\n\nYou can contact me from the Contact page in my portfolio website.\n\nThanks for checking out my portfolio!`,
      ),
    [],
  );
  const motionInitial = useMemo(() => ({ opacity: 0.0, y: 40 }), []);
  const motionWhileInView = useMemo(() => ({ opacity: 1, y: 0 }), []);
  const motionTransition = useMemo(() => ({
    delay: 0.3,
    duration: 0.8,
    ease: "easeInOut",
  }), []);

  return (
    <StyledAuroraBackground>
      <ContentWrapper as={motion.div}
        initial={motionInitial}
        whileInView={motionWhileInView}
        transition={motionTransition}
      >
        <SnapSection>
          <HeroPage />
        </SnapSection>

        <SnapSection>
          <AboutPage />
        </SnapSection>

        <SnapSection>
          
            <SpotifySection />
          
        </SnapSection>

        <SnapSection>
          <Projects />
        </SnapSection>

        <DesktopOnlySnapSection>
          
            <LeetCodeSection />
          
        </DesktopOnlySnapSection>

        <DesktopOnlySnapSection>
          <ContributionsPage />
        </DesktopOnlySnapSection>

        <SnapSection>
          <SkillsPage />
        </SnapSection>

        <SnapSection>
          
            <Certifications />
          
        </SnapSection>

        <SnapSection>
          <ContactPage />
        </SnapSection>

        <SnapSection>
          <FooterPage />
        </SnapSection>
      </ContentWrapper>
    </StyledAuroraBackground>
  );
}

export default MainPage;
