"use client";

/**
 * @file Projects.jsx
 * @description Displays the portfolio projects in a grid or list.
 * @architecture Maps over project data and utilizes UI components to display project cards.
 */

import React from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import { LinkPreview } from "./ui/link-preview";
import { MdConstruction } from "react-icons/md";
import { projects } from "../data/projects";
import { PageSection } from "./ui/PageSection";



const ProjectsGrid = styled.div`
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

const ProjectCard = styled.div`
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

/**
 * @desc    Renders the projects showcase section.
 * @returns {JSX.Element} The rendered component.
 */
function Projects() {


  return (
    <PageSection title="okay but what did i make?">
      
      <ProjectsGrid as={motion.div}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project, idx) => (
          <LinkPreview key={idx} url={`https://${project.url}`}>
            <ProjectCard
              $gradient={project.gradient}
              variants={item}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              href={`https://${project.url}`}
              target="_blank"
              rel="noopener noreferrer"
              as={motion.a}
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
                  {(project.in_progress) ? <MdConstruction /> : null}
                </LeftSection>
                <ProjectUrl>{project.url}</ProjectUrl>
              </CardFooter>
            </ProjectCard>
          </LinkPreview>
        ))}
      </ProjectsGrid>
    </PageSection>
  );
}

export default Projects;
