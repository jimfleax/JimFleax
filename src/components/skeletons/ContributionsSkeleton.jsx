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
  align-items: center;
  border-radius: 2rem;
`;

export default function ContributionsSkeleton() {
  return (
    <Wrapper>
      <div style={{ width: "200px", marginBottom: "2rem" }}>
        <Skeleton height="3rem" />
      </div>
      <div style={{ width: "100%", maxWidth: "800px", height: "300px" }}>
        <Skeleton height="100%" />
      </div>
    </Wrapper>
  );
}
