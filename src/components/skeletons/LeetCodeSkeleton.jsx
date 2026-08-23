import React from "react";
import styled from "styled-components";

const SkeletonContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function LeetCodeSkeleton() {
  return (
    <SkeletonContainer>
      <div className="animate-pulse flex flex-col items-center justify-center w-full h-full">
        <div className="h-8 bg-gray-200 rounded w-48 mb-8"></div>
        <div className="grid grid-cols-3 gap-4 w-full mb-8">
          <div className="h-24 bg-gray-200 rounded"></div>
          <div className="h-24 bg-gray-200 rounded"></div>
          <div className="h-24 bg-gray-200 rounded"></div>
        </div>
        <div className="flex w-full gap-4">
          <div className="h-48 bg-gray-200 rounded w-1/3"></div>
          <div className="h-48 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    </SkeletonContainer>
  );
}
