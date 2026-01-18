"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import { FaInstagram, FaMedium, FaReddit, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BackgroundBeams } from "./ui/background-beams";
import { LinkPreview } from "./ui/link-preview";

const ContactWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background-color: transparent;
  position: relative;
  overflow: hidden;
`;

const ContentContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 2rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 40rem;
  position: relative;
  z-index: 10;

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

const Title = styled(motion.h2)`
  font-family: "Garamond", serif;
  font-size: 2rem;
  font-weight: 800;
  color: #333;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, #f97316, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  .dark & {
    background: linear-gradient(to right, #f97316, #ec4899);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
`;

const Address = styled(motion.p)`
  font-size: 1.25rem;
  color: #4b5563;
  font-family: var(--font-sans, sans-serif);

  .dark & {
    color: #d1d5db;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SocialIcon = styled(motion.span)`
  color: #4b5563;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: #f97316;
  }

  .dark & {
    color: #d1d5db;
    &:hover {
      color: #f97316;
    }
  }
`;

const MailButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #f97316, #ef4444);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 1.125rem;
  text-decoration: none;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function ContactPage() {
  return (
    <ContactWrapper
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <BackgroundBeams />
      <ContentContainer
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Title variants={itemVariants}>Get In Touch</Title>
        <Address variants={itemVariants}>
          Birbhum, Bengal, India - 731101
        </Address>

        <SocialLinks variants={itemVariants}>
          <LinkPreview url="https://instagram.com/jimfleax">
            <SocialIcon
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              href="https://instagram.com/jimfleax"
              target="_blank"
              rel="noopener noreferrer"
              as={motion.a}
            >
              <FaInstagram />
            </SocialIcon>
          </LinkPreview>
          <LinkPreview url="https://medium.com/@jimfleax">
            <SocialIcon
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
              href="https://medium.com/@jimfleax"
              target="_blank"
              rel="noopener noreferrer"
              as={motion.a}
            >
              <FaMedium />
            </SocialIcon>
          </LinkPreview>
          <LinkPreview url="https://reddit.com/u/jimfleax">
            <SocialIcon
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              href="https://reddit.com/u/jimfleax"
              target="_blank"
              rel="noopener noreferrer"
              as={motion.a}
            >
              <FaReddit />
            </SocialIcon>
          </LinkPreview>
          <LinkPreview url="https://github.com/jimfleax">
            <SocialIcon
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/jimfleax"
              target="_blank"
              rel="noopener noreferrer"
              as={motion.a}
            >
              <FaGithub />
            </SocialIcon>
          </LinkPreview>
          <LinkPreview url="https://linkedin.com/in/jimfleax">
            <SocialIcon
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/jimfleax"
              target="_blank"
              rel="noopener noreferrer"
              as={motion.a}
            >
              <FaLinkedin />
            </SocialIcon>
          </LinkPreview>
        </SocialLinks>

        <MailButton
          href="mailto:reetabrata.bhandari@gmail.com?subject=Hello%20Reetabrata&body=Hi%20Reetabrata,%20"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MdEmail size={20} />
          Mail Me
        </MailButton>
      </ContentContainer>
    </ContactWrapper>
  );
}

export default ContactPage;
