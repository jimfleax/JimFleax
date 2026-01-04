import React from "react";
import styled from "styled-components";
import Skeleton from "../ui/skeleton";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  max-width: 80rem;
  margin: 1rem auto;
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default function SkillsSkeleton() {
  return (
    <Wrapper>
      <div
        style={{
          maxWidth: "56rem",
          margin: "0 auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Skeleton height="4rem" width="70%" />
        <div
          style={{
            height: "4rem",
            width: "4rem",
            borderRadius: "50%",
            overflow: "hidden",
            marginLeft: "2rem",
          }}
        >
          <Skeleton height="100%" />
        </div>
      </div>
    </Wrapper>
  );
}
