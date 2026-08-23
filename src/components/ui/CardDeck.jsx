"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "motion/react";

const DeckWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  padding-top: 4rem;

  @media (max-width: 767px) {
    width: 85%;
    margin-inline: auto;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    padding-top: 0;
  }
`;

const DeckContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  aspect-ratio: 5 / 3;
  cursor: pointer;
  z-index: 1;

  &:hover {
    z-index: 10;
  }
`;

const DeckCard = styled(motion.div)`
  width: 100%;
  aspect-ratio: 5 / 3;
  border-radius: 1.5rem;
  padding: 1rem 0.3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  background-color: white;
  transition: box-shadow 0.3s ease;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: center bottom;
  border: 1px solid rgba(0,0,0,0.1);
`;

export function CardDeck({
  items,
  renderExpandedItem,
  renderStackedItem,
  getItemKey,
  getItemLayoutId,
  idPrefix,
  maxDisplay = 3,
  yOffsetStep = -32,
  scaleStep = 0.05,
  wrapperVariants,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDeck = () => setIsExpanded((prev) => !prev);

  if (isExpanded) {
    return (
      <>
        {items.map((item, index) => (
          <React.Fragment key={getItemKey ? getItemKey(item) : index}>
            {renderExpandedItem(item, index, toggleDeck)}
          </React.Fragment>
        ))}
      </>
    );
  }

  return (
    <DeckWrapper layout variants={wrapperVariants}>
      <DeckContainer
        onClick={toggleDeck}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        layoutId={`${idPrefix}-container`}
      >
        {items
          .slice(0, maxDisplay)
          .reverse()
          .map((item, index, array) => {
            const originalIndex = array.length - 1 - index;
            const yOffset = originalIndex * yOffsetStep;
            const scale = 1 - originalIndex * scaleStep;
            const zIndex = maxDisplay - originalIndex;
            const itemKey = getItemKey ? getItemKey(item) : originalIndex;
            const layoutId = getItemLayoutId ? getItemLayoutId(item) : `${idPrefix}-item-${itemKey}`;

            return (
              <DeckCard
                key={itemKey}
                style={{
                  zIndex: zIndex,
                  y: yOffset,
                  scale: scale,
                }}
                layoutId={layoutId}
              >
                {renderStackedItem(item, originalIndex, items.length)}
              </DeckCard>
            );
          })}
      </DeckContainer>
    </DeckWrapper>
  );
}

export default CardDeck;
