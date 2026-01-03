import React from "react";
import styled from 'styled-components';
import { motion } from "motion/react";
import { AuroraBackground } from "@/components/ui/aurora-background";

// Static imports for smoother experience
import HeroPage from "./HeroPage";
import Projects from "./Projects";
import AboutPage from "./AboutPage";
import SkillsPage from "./SkillsPage";
import SpotifySection from "./SpotifySection";
import ContactPage from "./ContactPage";


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
                    <Projects />
                </SnapSection>

                <SnapSection>
                    <AboutPage />
                </SnapSection>

                <SnapSection>
                    <SpotifySection />
                </SnapSection>

                <SnapSection>
                    <SkillsPage />
                </SnapSection>

                <SnapSection>
                    <ContactPage />
                </SnapSection>

            </ContentWrapper>
        </StyledAuroraBackground>
    )
}

export default MainPage;