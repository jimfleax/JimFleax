import styled from 'styled-components';
import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWords } from './ui/flip-words';
import { TextGenerateEffect } from './ui/text-generate-effect';

const StyledBackgroundLines = styled(BackgroundLines)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: transparent;
  height: 100vh;
  
  .dark & {
    background-color: transparent;
  }
`;

const HeroTitle = styled.h2`
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
  background-image: linear-gradient(to bottom, #171717, #404040);
  font-family: var(--font-sans, sans-serif);
  font-size: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  position: relative;
  z-index: 20;
  font-weight: 700;
  letter-spacing: -0.025em;
  
  @media (min-width: 768px) {
    font-size: 2.25rem;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 4.5rem;
  }

  .dark & {
    background-image: linear-gradient(to bottom, #525252, #ffffff);
  }
`;

const HeroDescription = styled.p`
  max-width: 36rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.875rem;
  text-align: center;
  color: #404040;
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }

  .dark & {
    color: #a3a3a3;
  }
`;

const StyledFlipWords = styled(FlipWords)`
  font-size: 2rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;


function HeroPage() {
  return (
    <StyledBackgroundLines>
      <HeroTitle>
        Reetabrata Bhandari, <br /> <StyledFlipWords duration={500} words={["Web Developer", "Python Programmer", "AI/ML Enthusiast", "Learner"]} />
      </HeroTitle>
      <br />
      <HeroDescription>
        <TextGenerateEffect words="Hello! I am a self-taught software developer with a passion for creating innovative and user-friendly applications." />
      </HeroDescription>
    </StyledBackgroundLines>
  )
}

export default HeroPage
