import React from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import { AuroraBackground } from "@/components/ui/aurora-background";

import { Suspense } from "react";
import HeroPage from "./HeroPage";
import FooterPage from "./FooterPage";

const Projects = React.lazy(() => import("./Projects"));
const AboutPage = React.lazy(() => import("./AboutPage"));
const SkillsPage = React.lazy(() => import("./SkillsPage"));
const Certifications = React.lazy(() => import("./Certifications"));
const SpotifySection = React.lazy(() => import("./SpotifySection"));
const ContributionsPage = React.lazy(() => import("./ContributionsPage"));
const ContactPage = React.lazy(() => import("./ContactPage"));

import ProjectsSkeleton from "./skeletons/ProjectsSkeleton";
import AboutSkeleton from "./skeletons/AboutSkeleton";
import SkillsSkeleton from "./skeletons/SkillsSkeleton";
import CertificationsSkeleton from "./skeletons/CertificationsSkeleton";
import ContributionsSkeleton from "./skeletons/ContributionsSkeleton";
import SpotifySkeleton from "./skeletons/SpotifySkeleton";
import ContactSkeleton from "./skeletons/ContactSkeleton";
import { useEffect } from "react";

const StyledAuroraBackground = styled(AuroraBackground)`
  min-height: 100vh;
  height: auto;
`;

const ContentWrapper = styled(motion.div)`
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

function MainPage() {
  // Nevermind this piece of code
  useEffect(
    () =>
      console.log(
        `Hi there! Are you looking for a fellow developer to make something exciting together?\nPerhaps, we can colab to build something cool!\n\nYou can contact me from the Contact page in my portfolio website.\n\nThanks for checking out my portfolio!`,
      ),
    [],
  );
  return (
    <StyledAuroraBackground>
      <ContentWrapper
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <SnapSection>
          <HeroPage />
        </SnapSection>

        <SnapSection>
          <Suspense fallback={<AboutSkeleton />}>
            <AboutPage />
          </Suspense>
        </SnapSection>

        <SnapSection>
          <Suspense fallback={<SpotifySkeleton />}>
            <SpotifySection />
          </Suspense>
        </SnapSection>

        <SnapSection>
          <Suspense fallback={<ProjectsSkeleton />}>
            <Projects />
          </Suspense>
        </SnapSection>

        <DesktopOnlySnapSection>
          <Suspense fallback={<ContributionsSkeleton />}>
            <ContributionsPage />
          </Suspense>
        </DesktopOnlySnapSection>

        <SnapSection>
          <Suspense fallback={<SkillsSkeleton />}>
            <SkillsPage />
          </Suspense>
        </SnapSection>

        <SnapSection>
          <Suspense fallback={<CertificationsSkeleton />}>
            <Certifications />
          </Suspense>
        </SnapSection>

        <SnapSection>
          <Suspense fallback={<ContactSkeleton />}>
            <ContactPage />
          </Suspense>
        </SnapSection>

        <SnapSection>
          <FooterPage />
        </SnapSection>
      </ContentWrapper>
    </StyledAuroraBackground>
  );
}

export default MainPage;
