import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const Skeleton = styled.div`
  display: inline-block;
  height: ${(props) => props.height || "100%"};
  width: ${(props) => props.width || "100%"};
  background: linear-gradient(
    90deg,
    rgba(190, 190, 190, 0.2) 25%,
    rgba(129, 129, 129, 0.24) 37%,
    rgba(190, 190, 190, 0.2) 63%
  );
  background-size: 400% 100%;
  animation: ${shimmer} 1.4s ease infinite;
  border-radius: ${(props) => props.borderRadius || "0.5rem"};

  .dark & {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.05) 25%,
      rgba(255, 255, 255, 0.1) 37%,
      rgba(255, 255, 255, 0.05) 63%
    );
  }
`;

export default Skeleton;
