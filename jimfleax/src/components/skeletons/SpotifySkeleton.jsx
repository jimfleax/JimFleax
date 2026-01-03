import React from "react";
import styled from "styled-components";
import Skeleton from "../ui/skeleton";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
`;

const Flex = styled.div`
  display: flex;
  place-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  gap: 20px;
`;

export function SpotifySkeleton() {
    return (
        <Wrapper>
            <Flex>
                <div style={{ borderRadius: '10px', overflow: 'hidden', height: '18rem', width: '18rem' }}>
                    <Skeleton height="100%" />
                </div>
                <div style={{ width: '200px' }}>
                    <Skeleton height="2rem" />
                </div>
            </Flex>
            <div style={{ width: '100%', maxWidth: '400px', height: '400px', borderRadius: '12px', overflow: 'hidden' }}>
                <Skeleton height="100%" />
            </div>
        </Wrapper>
    );
}
