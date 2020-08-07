import React, { RefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useShown } from '../hooks/useShown';

export enum Direction {
  top,
  right,
  left,
}

type AppearAniProps = {
  delay?: number;
  on?: boolean;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  innerRef?: RefObject<any>;
  direction?: Direction;
} & {
  [key: string]: any;
};

export const AppearAni: React.FC<AppearAniProps> = ({ delay, as, innerRef, on, direction, children, ...props }) => {
  const [shown, setShow] = useState(false);

  useEffect(() => {
    if (on) setShow(true);
  }, [!!on]);

  return (
    <AppearAniInner as={as || 'span'} show={shown} delay={(delay = delay || 0)} direction={direction || Direction.top} ref={innerRef} {...props}>
      {children}
    </AppearAniInner>
  );
};

export const AppearAniIncPosition: React.FC<AppearAniProps> = ({ delay, on = true, as, direction, children, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);
  const shown = useShown(ref);

  return (
    <AppearAni as={as} on={on && shown} delay={delay} direction={direction} innerRef={ref} {...props}>
      {children}
    </AppearAni>
  );
};

const AppearAniInner = styled.span<{ show: boolean; delay: number; direction: Direction }>`
  transform: ${({ show, direction }) =>
    (direction === Direction.left || direction === Direction.right ? 'translateX' : 'translateY') + '(' + (show ? '0' : `${direction === Direction.right ? '-' : ''}40`) + 'px'};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
  transition-delay: ${({ delay }) => delay}ms;
`;
