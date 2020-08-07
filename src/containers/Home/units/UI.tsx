import styled from 'styled-components';
import React, { ReactNode } from 'react';
import { media } from '~/constants/theme';

export const SectionWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100vh;
  clip-path: inset(0%);
  & > div {
    margin: 0 auto;
    padding: 50px 10px;
    flex: 0 1 1210px;
    min-width: 0;
  }
  ${media.mobile} {
    min-height: auto;
  }
`;

export const Section = React.forwardRef<any, { children?: ReactNode; style?: object }>(({ children, ...props }, ref) => (
  <SectionWrapper ref={ref} {...props}>
    <div>{children}</div>
  </SectionWrapper>
));

export const SectionTitle = styled.h3`
  font-size: 48px;
  font-weight: bold;
  line-height: 61px;
  letter-spacing: -0.01px;
  text-align: center;
  color: #fff;

  ${media.mobile} {
    line-height: 41px;
    font-size: 32px;
  }
`;

export const SideTitle = styled.div<{ color?: string }>`
  color: ${({ color }) => color || '#fff'};
  position: fixed;
  top: 50%;
  left: 80px;
  transform: translateX(-50%) rotate(270deg);
  margin: auto;
  z-index: 1;
  ${media.mobile} {
    display: none;
  }
`;
