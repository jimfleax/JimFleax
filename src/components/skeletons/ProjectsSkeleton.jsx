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
`;

const BioPlaceholder = styled.div`
    width: 100%;
    max-width: 56rem;
    margin: 0 auto 2rem auto;
`;

const Grid = styled.div`
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

const CardSkeleton = styled.div`
    aspect-ratio: 5 / 3;
    width: 100%;
    border-radius: 1.5rem;
    overflow: hidden;
`;

export default function ProjectsSkeleton() {
    return (
        <Wrapper>
            <BioPlaceholder>
                <Skeleton height="3rem" width="60%" />
            </BioPlaceholder>
            <Grid>
                {[...Array(6)].map((_, i) => (
                    <CardSkeleton key={i}>
                        <Skeleton height="100%" />
                    </CardSkeleton>
                ))}
            </Grid>
        </Wrapper>
    );
}
