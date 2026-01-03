"use client";

import React from "react";
import styled from 'styled-components';
import { motion } from 'motion/react';

const AboutWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding: 1rem;
  min-height: 100vh;
  justify-content: center;
  background-color: black;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

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

const BioText = styled.h2`
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: left;
  background-image: linear-gradient(to bottom, #d4d4d4, #ffffff);
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
`;

const ContentGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 56rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1.5fr;
    gap: 4rem;
  }
`;

const LeftColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const ImageFrame = styled(motion.div)`
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 100%;
  max-width: 300px;
  background-color: transparent;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

const ImageCaption = styled(motion.p)`
  text-align: center;
  font-family: 'Handlee', cursive;
  font-size: 1.25rem;
  color: #a3a3a3;
  transform: rotate(-2deg);
`;

const RightColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
`;

const TextParagraph = styled(motion.p)`
  font-size: 1rem;
  line-height: 1.75;
  color: #d4d4d4;
  font-family: var(--font-sans, sans-serif);
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export function AboutPage() {
  return (
    <AboutWrapper>
      <BioSection
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <BioText>who am i really?</BioText>
      </BioSection>

      <ContentGrid>
        <LeftColumn
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ImageFrame
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ProfileImage src="/media/myPic.png" alt="Me" />
          </ImageFrame>
          <ImageCaption
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            yes, that's me ;)
          </ImageCaption>
        </LeftColumn>

        <RightColumn
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <TextParagraph>
            Hi there! I'm Reetabrata Bhandari—better known as Jim Fleax! 👋 I’m passionate about exploring computer languages and crafting innovative apps and websites. My goal is to create sleek, delicious interfaces that seamlessly blend with powerful logic and robust backends, resulting in responsive apps designed to make life simpler and more enjoyable. 👨‍💻✨
          </TextParagraph>
          <TextParagraph>
            Beyond coding, I find joy in losing myself in fiction 📚️, vibing along my playlist 🎵, and watching good movies 🎬️. I thrive on learning, embracing every opportunity to dive deeper into the fascinating world of computer science. 🚀
          </TextParagraph>
          <TextParagraph>
            Here, you’ll find a showcase of the apps I’ve built along my web development journey. Got feedback or spotted a bug? Don’t hesitate to share—I’m always eager to improve and grow!
          </TextParagraph>
          <TextParagraph>
            Thanks for stopping by! ❤️
          </TextParagraph>
        </RightColumn>
      </ContentGrid>
    </AboutWrapper>
  );
}

export default AboutPage;
