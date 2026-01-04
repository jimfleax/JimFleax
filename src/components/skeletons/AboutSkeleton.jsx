import React from "react";
import styled from "styled-components";
import Skeleton from "../ui/skeleton";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 80rem;
  margin: 0 auto;
  width: 100%;
  padding: 2rem;
  min-height: 100vh;
  justify-content: center;
  border-radius: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1.5fr;
    gap: 4rem;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
`;

export default function AboutSkeleton() {
  return (
    <Wrapper>
      <div
        style={{ maxWidth: "56rem", margin: "0 auto 2rem auto", width: "100%" }}
      >
        <Skeleton height="3rem" width="40%" />
      </div>
      <ContentGrid>
        <LeftColumn>
          <div
            style={{
              width: "100%",
              maxWidth: "300px",
              aspectRatio: "1/1",
              borderRadius: "1.5rem",
              overflow: "hidden",
            }}
          >
            <Skeleton height="100%" />
          </div>
          <Skeleton height="1.5rem" width="50%" />
        </LeftColumn>
        <RightColumn>
          <Skeleton height="1.2rem" width="100%" />
          <Skeleton height="1.2rem" width="95%" />
          <Skeleton height="1.2rem" width="90%" />
          <div style={{ height: "1rem" }} />
          <Skeleton height="1.2rem" width="100%" />
          <Skeleton height="1.2rem" width="85%" />
        </RightColumn>
      </ContentGrid>
    </Wrapper>
  );
}
