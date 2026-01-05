"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import GithubContributionGraph from "./ui/GithubContributionGraph";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const PageWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 80rem;
  margin: 2rem auto;
  width: 95%;
  padding: 1rem;
  min-height: calc(100vh - 4rem);
  justify-content: center;
  border-radius: 2rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const BioSection = styled(motion.div)`
  width: 100%;
  text-align: left;
  max-width: 56rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Title = styled(motion.h2)`
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: left;
  background-image: linear-gradient(to bottom, #171717, #404040);
  font-family: var(--font-sans, sans-serif);
  font-size: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  position: relative;
  z-index: 20;
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.625;

  @media (min-width: 768px) {
    font-size: 2.25rem;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  .dark & {
    background-image: linear-gradient(to bottom, #525252, #ffffff);
  }
`;

const StyledGithubContributionGraph = styled.div`
  justify-self: center;
  align-self: center;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 1rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05),
    0 0 20px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  width: fit-content;
  max-width: 100%;
  overflow-x: auto;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

function ContributionsPage() {
  return (
    <PageWrapper
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <BioSection
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Title>here's how i spent my year on github</Title>
      </BioSection>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <CardContainer containerClassName="py-10 md:py-20">
          <CardBody className="w-full h-fit">
            <CardItem>
              <StyledGithubContributionGraph>
                <GithubContributionGraph />
              </StyledGithubContributionGraph>
            </CardItem>
          </CardBody>
        </CardContainer>
      </motion.div>
    </PageWrapper>
  );
}

export default ContributionsPage;
