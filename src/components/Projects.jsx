"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import { LinkPreview } from "./ui/link-preview";
import { MdConstruction } from "react-icons/md";

const ProjectsWrapper = styled(motion.div)`
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

const BioText = styled.p`
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

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.5rem;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const ProjectCard = styled(motion.div)`
  width: 100%;
  aspect-ratio: 5 / 3;
  border-radius: 1.5rem;
  padding: 1rem 0.3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  background-image: ${(props) => props.$gradient};
  cursor: pointer;
`;

const IconContainer = styled.div`
  flex-grow: 1;
  background-color: #ffffffde;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
`;

const ProjectIcon = styled.img`
  width: 50%;
  height: 50%;
  object-fit: contain;
  aspect-ratio: 1/1;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.025em;
`;

const ProjectUrl = styled.span`
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  font-size: 0.75rem;
  opacity: 0.75;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  > svg {
    color: #ffffffb8;
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
};

export function Projects() {
  const projects = [
    {
      title: "CosmicMath",
      url: "cosmicmath.vercel.app",
      icon: "/media/cosmicmath.png",
      gradient: "linear-gradient(to bottom right, #8b5cf6, #a855f7)",
    },
    {
      title: "Flashers",
      url: "flashers.vercel.app",
      icon: "/media/flashers.png",
      gradient: "linear-gradient(to bottom right, #3b82f6, #06b6d4)",
    },
    {
      title: "Reflect",
      url: "reflecting.vercel.app",
      icon: "/media/reflect.png",
      gradient: "linear-gradient(to bottom right, #10b981, #14b8a6)",
    },
    {
      title: "Poetica",
      url: "poeticaa.vercel.app",
      icon: "/media/poetica.png",
      gradient: "linear-gradient(to bottom right, #f43f5e, #ec4899)",
    },
    {
      title: "MetaSkills",
      url: "metaskills.site",
      icon: "/media/metaskills.png",
      gradient: "linear-gradient(to bottom right, #f59e0b, #f97316)",
      in_progress: true,
    },
  ];

  return (
    <ProjectsWrapper
      initial={{ opacity: 0, y: 50 }}
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
        <BioText>okay but what did i make?</BioText>
      </BioSection>
      <ProjectsGrid
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project, idx) => (
          <LinkPreview url={`https://${project.url}`}>
            <ProjectCard
              key={idx}
              $gradient={project.gradient}
              variants={item}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <IconContainer>
                <ProjectIcon
                  src={project.icon}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                />
              </IconContainer>
              <CardFooter>
                <LeftSection>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  {(project.in_progress) ? <MdConstruction />:null}
                </LeftSection>
                <ProjectUrl>{project.url}</ProjectUrl>
              </CardFooter>
            </ProjectCard>
          </LinkPreview>
        ))}
      </ProjectsGrid>
    </ProjectsWrapper>
  );
}

export default Projects;
