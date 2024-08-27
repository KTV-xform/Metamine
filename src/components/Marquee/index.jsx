import { keyframes } from "@emotion/react";
import React from "react";
import { css, styled } from "twin.macro";

const itemScrollToRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const itemScrollToLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const itemScrollToRightMd = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const itemScrollToLeftMd = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const MarqueeContainer = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  user-select: none;
`;

const ItemMarqueeContent = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;

  ${({ scrollToLeft }) => css`
    animation: ${scrollToLeft ? itemScrollToLeft : itemScrollToRight} 10s linear
      infinite;
  `};

  @media (min-width: 768px) {
    ${({ scrollToLeft }) => css`
      animation: ${scrollToLeft ? itemScrollToLeftMd : itemScrollToRightMd} 10s
        linear infinite;
    `};
  }
`;

const Marquee = ({ renderItem, data, scrollToLeft = false, ...rest }) => {
  return (
    <MarqueeContainer className="relative" {...rest}>
      <ItemMarqueeContent scrollToLeft={scrollToLeft}>
        {data.map(renderItem)}
      </ItemMarqueeContent>
      <ItemMarqueeContent scrollToLeft={scrollToLeft}>
        {data.map(renderItem)}
      </ItemMarqueeContent>
      <ItemMarqueeContent>{data.map(renderItem)}</ItemMarqueeContent>
    </MarqueeContainer>
  );
};

export default Marquee;
