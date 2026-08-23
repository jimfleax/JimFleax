"use client";

import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "motion/react";
import { LinkPreview } from "./ui/link-preview";
import { certifications } from "../data/certifications";
import { PageSection } from "./ui/PageSection";



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
    <PageSection title="here are some certifications I have been awarded">
      
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
    </PageSection>
  );
}

export default Certifications;
