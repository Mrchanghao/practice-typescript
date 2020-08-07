import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface IProps {
  delay?: number;
  on?: boolean;
  as?: keyof JSX.IntrinsicElements;
}
//  다른 props 들 추가
export const GroundUpAni: React.FC<IProps> = ({ delay, as, on, children }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (on) setShow(true);
  }, [!!on]);

  return (
    <GroundUpAniWrapper>
      <GroundUpAniInner show={show} delay={delay || 0}>
        {children}
      </GroundUpAniInner>
    </GroundUpAniWrapper>
  );
};

const GroundUpAniWrapper = styled.span`
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
`;

const GroundUpAniInner = styled.span<{ show: boolean; delay: number }>`
  display: inline-block;
  transform: translateY(${({ show }) => (show ? '0' : '110')}%);
  transition: transform 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-delay: ${({ delay }) => delay}ms;
`;
