import React from "react";
import styled from "styled-components";
import Skeleton from "../ui/skeleton";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  max-width: 80rem;
  margin: 1rem auto;
  padding: 2rem;
`;

export default function CertificationsSkeleton() {
  return (
    <Wrapper>
      <Skeleton height="4rem" width="50%" style={{ marginBottom: "2rem" }} />
      <Skeleton height="20rem" width="100%" />
    </Wrapper>
  );
}
