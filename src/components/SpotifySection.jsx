import React from "react";
import styled from "styled-components";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { motion } from "motion/react";

const SectionWrapper = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
`;
const Flex = styled(motion.div)`
  display: flex;
  place-items: center;
  background: #ffffff6a;
  border-radius: 10px;
  padding: 20px;
  box-shadow:
    rgba(166, 166, 166, 0.01) 0px 520px 146px 0px,
    rgba(196, 196, 196, 0.04) 0px 333px 133px 0px,
    rgba(172, 172, 172, 0.26) 0px 83px 83px 0px,
    rgba(161, 161, 161, 0.29) 0px 21px 46px 0px;
  transition: all 0.2s ease-in-out;
  flex-direction: column;
  gap: 1rem;
  text-align: center;

  @media (min-width: 640px) {
    flex-direction: row;
    gap: 0;
    text-align: left;
  }
`;

const DitherContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
`;

const TextContainer = styled(TextGenerateEffect)`
  color: #000000d4;
  font-family: "Handlee";
  font-weight: 900;
  font-size: 1.5rem;
  margin-left: 0;
  width: 100%;

  @media (min-width: 640px) {
    margin-left: 40px;
    width: 200px;
  }
`;
export function SpotifySection() {
  return (
    <SectionWrapper
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Flex
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <DitherContainer>
          <img
            className="h-64 w-64 sm:h-72 sm:w-92 object-cover"
            src="/media/ditherpic.jpg"
          />
        </DitherContainer>
        <TextContainer words="lemme know what you think about my music taste :)" />
      </Flex>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/37i9dQZEVXd3AvPHaRM4CT?utm_source=generator&theme=0"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Playlist"
        ></iframe>
      </motion.div>
    </SectionWrapper>
  );
}

export default SpotifySection;
