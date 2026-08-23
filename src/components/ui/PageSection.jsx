"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "motion/react";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 80rem;
  margin: 2rem auto;
  width: 95%;
  padding: 1rem;
  min-height: calc(100vh - 4rem);
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const BioSection = styled.div`
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

const Title = styled.h2`
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: left;
  background-image: linear-gradient(to bottom, #171717, #404040);
  font-family: "Garamond", serif;
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

export function PageSection({ title, children, className }) {
  return (
    <Wrapper
      as={motion.section}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {title && (
        <BioSection
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Title>{title}</Title>
        </BioSection>
      )}
      {children}
    </Wrapper>
  );
}
