"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import GithubContributionGraph from "./ui/GithubContributionGraph";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { PageSection } from "./ui/PageSection";



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
    <PageSection title="here's how i spent my year on github">
      

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
    </PageSection>
  );
}

export default ContributionsPage;
