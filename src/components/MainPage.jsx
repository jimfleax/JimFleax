import React from "react";
import styled from 'styled-components';
import { motion } from "motion/react";
import { AuroraBackground } from "@/components/ui/aurora-background";

import { Suspense } from "react";
import HeroPage from "./HeroPage";

const Projects = React.lazy(() => import("./Projects"));
const AboutPage = React.lazy(() => import("./AboutPage"));
const SkillsPage = React.lazy(() => import("./SkillsPage"));
const Certifications = React.lazy(() => import("./Certifications"));
const SpotifySection = React.lazy(() => import("./SpotifySection"));
const ContactPage = React.lazy(() => import("./ContactPage"));

import ProjectsSkeleton from "./skeletons/ProjectsSkeleton";
import AboutSkeleton from "./skeletons/AboutSkeleton";
import SkillsSkeleton from "./skeletons/SkillsSkeleton";
import CertificationsSkeleton from "./skeletons/CertificationsSkeleton";
import SpotifySkeleton from "./skeletons/SpotifySkeleton";
import ContactSkeleton from "./skeletons/ContactSkeleton";


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

function MainPage() {
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
                    <Suspense fallback={<ProjectsSkeleton />}>
                        <Projects />
                    </Suspense>
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

            </ContentWrapper>
        </StyledAuroraBackground>
    )
}

export default MainPage;