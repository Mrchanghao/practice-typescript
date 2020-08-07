import styled from 'styled-components';
import React, { ReactNode, useEffect, useState } from 'react';
import { colors } from '~/constants/style';
import { media } from '~/constants/theme';

const ModalA: React.FC<{ hideModal: () => void; on: boolean; children: (hide: () => void) => ReactNode }> = ({ on, hideModal, children }) => {
  const [shown, setShown] = useState(false);
  const hide = () => {
    setTimeout(() => setShown(false), 500);
  };

  useEffect(() => {
    if (!on) hide();
    else setShown(true);
  }, [on]);

  if (!shown && !on) return null;

  return (
    <Root on={on && shown}>
      {children && children(hide)}
      <CloseButton onClick={hideModal} />
    </Root>
  );
};

export default ModalA;

const Root = styled.div<{ on: boolean }>`
  max-width: 626px;
  width: 100%;
  box-sizing: border-box;
  padding: 99px 64px 200px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  box-shadow: 16px 7px 28px 0 rgba(33, 45, 48, 0.25);
  background-image: linear-gradient(116deg, ${colors.blueberry}, #1d2048);
  transform: translateY(${({ on }) => (on ? '0' : '300')}px);
  opacity: ${({ on }) => (on ? 1 : 0)};
  transition: transform 300ms ease-in-out, opacity 300ms linear;
  position: fixed;
  bottom: 0;
  right: 80px;
  max-height: calc(100% - 60px);
  overflow: hidden;
  overflow-y: auto;
  z-index: 11;
  ${media.mobile} {
    border-radius: 0;
    right: 0;
    max-height: none;
    top: 0;
    padding: 80px 30px 50px;
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  padding: 0;
  position: absolute;
  top: 40px;
  right: 40px;
  width: 24px;
  height: 24px;
  background: url(${require('~/assets/img/closeButton.png')});
  border-width: 0;
  background-size: 100% 100%;
`;
