import React from "react";
import styled from "styled-components";
import Skeleton from "../ui/skeleton";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: 2rem;
`;

const Card = styled.div`
    background: rgba(255, 255, 255, 0.05);
    border-radius: 2rem;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
    max-width: 40rem;
`;

const SocialRow = styled.div`
    display: flex;
    gap: 1.5rem;
    width: 100%;
    justify-content: center;
`;

export default function ContactSkeleton() {
    return (
        <Wrapper>
            <Card>
                <Skeleton height="3.5rem" width="60%" />
                <Skeleton height="1.5rem" width="80%" />
                <SocialRow>
                    <Skeleton height="3rem" width="3rem" borderRadius="50%" />
                    <Skeleton height="3rem" width="3rem" borderRadius="50%" />
                    <Skeleton height="3rem" width="3rem" borderRadius="50%" />
                    <Skeleton height="3rem" width="3rem" borderRadius="50%" />
                </SocialRow>
                <Skeleton height="3.5rem" width="40%" borderRadius="2rem" />
            </Card>
        </Wrapper>
    );
}
