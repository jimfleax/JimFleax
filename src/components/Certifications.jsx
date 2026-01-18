"use client";

import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "motion/react";
import { LinkPreview } from "./ui/link-preview";

const Wrapper = styled(motion.div)`
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
  background-color: transparent;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const HeaderSection = styled(motion.div)`
  width: 100%;
  text-align: left;
  max-width: 56rem;
  margin-inline: auto;
`;

const HeaderText = styled.h2`
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: left;
  background-image: linear-gradient(to bottom, #171717, #404040);
  font-family: "Garamond", serif;
  font-size: 1.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  position: relative;
  z-index: 20;
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.625;

  @media (min-width: 768px) {
    font-size: 1.6rem;
    padding-top: 2rem;
    padding-bottom: 1rem;
  }

  .dark & {
    background-image: linear-gradient(to bottom, #525252, #ffffff);
  }
`;

const CertificationsGrid = styled(motion.div)`
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

const CardBase = styled(motion.div)`
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
  background-color: white;
  transition: box-shadow 0.3s ease;
`;

const CertificationCard = styled(CardBase)`
  cursor: pointer;
  
  @media (max-width: 767px) {
    width: 85%;
    margin-inline: auto;
  }

  &:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
`;

const DeckWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  padding-top: 4rem;

  @media (max-width: 767px) {
    width: 85%;
    margin-inline: auto;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    padding-top: 0;
  }
`;

const DeckContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  aspect-ratio: 5 / 3;
  cursor: pointer;
  z-index: 1;

  &:hover {
    z-index: 10;
  }
`;



const DeckCard = styled(CardBase)`
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: center bottom;
  border: 1px solid rgba(0,0,0,0.1);
`;

const ImageContainer = styled.div`
  flex-grow: 1;
  background-color: #f3f4f6;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  overflow: hidden;
  position: relative;

  @media (max-width: 767px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.25rem;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${CertificationCard}:hover & {
    transform: scale(1.05);
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #1f2937;
  padding-left: 1rem;
  padding-right: 1rem;
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

const CertTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;

  @media (max-width: 767px) {
    font-size: 0.9rem;
  }
`;

const IssuerText = styled.span`
  font-size: 0.75rem;
  opacity: 0.75;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  color: inherit;
  white-space: nowrap;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  @media (max-width: 767px) {
    font-size: 0.65rem;
  }
`;

const CountBadge = styled.span`
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  font-weight: 600;
`;


const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0 1rem 1rem 1rem;

  @media (max-width: 767px) {
    padding: 0 0.5rem 0.5rem 0.5rem;
  }
`;

const Tag = styled.span`
  font-size: 0.65rem;
  font-weight: 600;
  color: #4b5563;
  background-color: #f3f4f6;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    "Noto Sans",
    sans-serif;
  letter-spacing: 0.025em;
  border: 1px solid #e5e7eb;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
    },
  },
};

const SingleCertCard = ({ cert, onClick, variants }) => (
  <LinkPreview url={cert.url}>
    <CertificationCard
      variants={variants}
      layout
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95 }}
      href={cert.url}
      target="_blank"
      rel="noopener noreferrer"
      as={motion.a}
    >
      <ImageContainer>
        <ProjectImage src={cert.img} alt={cert.title} loading="lazy" />
      </ImageContainer>
      <CardFooter>
        <CertTitle title={cert.title}>{cert.title}</CertTitle>
        <IssuerText>{cert.issuer}</IssuerText>
      </CardFooter>
      {cert.tags && (
        <TagsContainer>
          {cert.tags.map((tag, idx) => (
            <Tag key={idx}>{tag}</Tag>
          ))}
        </TagsContainer>
      )}
    </CertificationCard>
  </LinkPreview>
);

export function Certifications() {
  const [expandedIssuers, setExpandedIssuers] = useState(new Set());

  const certifications = [
    {
      title: "Legacy JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      img: "/media/certifications/freecodecamp_javascript_algorithms.png",
      url: "https://freecodecamp.org/certification/jimfleax/javascript-algorithms-and-data-structures",
      tags: ["JavaScript", "Algorithms", "Data Structures"],
    },
    {
      title: "JavaScript (Basic)",
      issuer: "HackerRank",
      img: "/media/certifications/hackerrank_javascript_basic.png",
      url: "https://www.hackerrank.com/certificates/f1bb8d29b7f1",
      tags: ["JavaScript"],
    },
    {
      title: "JavaScript (Intermediate)",
      issuer: "HackerRank",
      img: "/media/certifications/hackerrank_javascript_intermediate.png",
      url: "https://www.hackerrank.com/certificates/ce446e1ccfee",
      tags: ["JavaScript"],
    },
    {
      title: "Node (Basic)",
      issuer: "HackerRank",
      img: "/media/certifications/hackerrank_node_basic.png",
      url: "https://www.hackerrank.com/certificates/8b07abef6c30",
      tags: ["Node.js"],
    },
    {
      title: "React (Basic)",
      issuer: "HackerRank",
      img: "/media/certifications/hackerrank_react_basic.png",
      url: "https://www.hackerrank.com/certificates/b777c27b4543",
      tags: ["React"],
    },
    {
      title: "Frontend Developer (React)",
      issuer: "HackerRank",
      img: "/media/certifications/hackerrank_frontend_developer_react.png",
      url: "https://www.hackerrank.com/certificates/8f54dc2837ac",
      tags: ["React", "Frontend"],
    },
    {
      title: "Python (Basic)",
      issuer: "HackerRank",
      img: "/media/certifications/hackerrank_python_basic.png",
      url: "https://www.hackerrank.com/certificates/fb15b4149c11",
      tags: ["Python"],
    },
    {
      title: "Learn Node.js Course",
      issuer: "Codecademy",
      img: "/media/certifications/codecademy_nodejs.png",
      url: "https://www.codecademy.com/profiles/jimfleax/certificates/240305d50b925c17868f1ac7a21a3261",
      tags: ["Node.js", "Backend", "JavaScript"],
    },
    {
      title: "Learn Python 3 Course",
      issuer: "Codecademy",
      img: "/media/certifications/codecademy_python.png",
      url: "https://www.codecademy.com/profiles/jimfleax/certificates/6c152bd262967f8c941c9707ed636bda",
      tags: ["Python"],
    },
    {
      title: "Blockchain Basics",
      issuer: "LinkedIn Learning",
      img: "/media/certifications/linkedin_blockchain_basics.png",
      url: "https://www.linkedin.com/learning/certificates/30b76a4d919d6ed957b76a6aae3cc11daf60c5cc7c551f16800ee49b64f6c550?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BT4nMNuJKRgeU8FumLdHGEg%3D%3D",
      tags: ["Blockchain"],
    },
    {
      title: "Learn the Basics of Blockchain with Python Course",
      issuer: "Codecademy",
      img: "/media/certifications/codecademy_blockchain_python.png",
      url: "https://www.codecademy.com/profiles/jimfleax/certificates/f21a464d190cb43e78b83ca8d1f0c6b0",
      tags: ["Blockchain", "Python", "Cryptography"],
    },
    {
      title: "Sololearn certified Javascript Intermediate",
      issuer: "SoloLearn",
      img: "/media/certifications/sololearn_javascript_intermediate.jpeg",
      url: "https://www.sololearn.com/certificates/CC-ESKIEUQM",
      tags: ["JavaScript", "ES6"],
    },
  ];

  const groupedCerts = useMemo(() => {
    return certifications.reduce((acc, cert) => {
      if (!acc[cert.issuer]) {
        acc[cert.issuer] = [];
      }
      acc[cert.issuer].push(cert);
      return acc;
    }, {});
  }, []);

  const toggleIssuer = (issuer) => {
    setExpandedIssuers((prev) => {
      const next = new Set(prev);
      if (next.has(issuer)) {
        next.delete(issuer);
      } else {
        next.add(issuer);
      }
      return next;
    });
  };

  const displayList = useMemo(() => {
    const list = [];
    Object.entries(groupedCerts).forEach(([issuer, certs]) => {
      if (certs.length === 1 || expandedIssuers.has(issuer)) {
        certs.forEach((cert) => list.push({ type: "single", data: cert }));
      } else {
        list.push({ type: "deck", issuer, certs });
      }
    });
    return list;
  }, [groupedCerts, expandedIssuers]);

  return (
    <Wrapper
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <HeaderSection
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <HeaderText>
          here are some certifications I have been awarded
        </HeaderText>
      </HeaderSection>
      <AnimatePresence>
        <CertificationsGrid
          layout
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {displayList.map((item, i) =>
            item.type === "single" ? (
              <SingleCertCard
                key={item.data.title}
                cert={item.data}
                variants={item}
              />
            ) : (
              <DeckWrapper
                key={item.issuer}
                layout
                variants={item}
              >
                <DeckContainer
                  onClick={() => toggleIssuer(item.issuer)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  layoutId={`deck-container-${item.issuer}`}
                >
                  {item.certs.slice(0, 3).reverse().map((cert, index, array) => {
                    const originalIndex = array.length - 1 - index;
                    const yOffset = originalIndex * -32;
                    const scale = 1 - originalIndex * 0.05;
                    const zIndex = 3 - originalIndex;

                    return (
                      <DeckCard
                        key={cert.title}
                        style={{
                          zIndex: zIndex,
                          y: yOffset,
                          scale: scale,
                        }}
                        layoutId={`deck-${item.issuer}-${cert.title}`}
                      >
                        <ImageContainer>
                          <ProjectImage src={cert.img} alt={cert.title} />
                        </ImageContainer>
                        <CardFooter>
                          {originalIndex === 0 ? (
                            <CertTitle style={{ textAlign: "center", width: "100%" }}>
                              {item.issuer} Certifications{" "}
                              <CountBadge style={{ verticalAlign: "middle", marginLeft: "0.5rem" }}>
                                {item.certs.length}
                              </CountBadge>
                            </CertTitle>
                          ) : (
                            <>
                              <CertTitle title={cert.title}>{cert.title}</CertTitle>
                              <IssuerText>{cert.issuer}</IssuerText>
                            </>
                          )}
                        </CardFooter>
                      </DeckCard>
                    )
                  })}
                </DeckContainer>
              </DeckWrapper>
            )
          )}
        </CertificationsGrid>
      </AnimatePresence>
    </Wrapper>
  );
}

export default Certifications;
