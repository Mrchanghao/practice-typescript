import React, { useState } from 'react';
import styled from 'styled-components';
import { ButtonA } from '~/components/ButtonA';
import { media } from '~/constants/theme';
import ModalA from '~/components/ModalA';

interface IProps {
  isShown: boolean;
  onClickClose: () => void;
}

const SignModal: React.FC<IProps> = ({ isShown, onClickClose }) => {
  const [viewIndex, setViewIndex] = useState(0);

  return (
    <ModalA on={isShown} hideModal={onClickClose}>
      {(hideModal) => (
        <>
          <TitleGroup>
            <Title on={viewIndex === 0} onClick={() => setViewIndex(0)}>
              Login
            </Title>
            <Title on={viewIndex === 1} onClick={() => setViewIndex(1)}>
              Sign up
            </Title>
          </TitleGroup>
        </>
      )}
    </ModalA>
  );
};

const TitleGroup = styled.div`
  display: flex;
  margin: 0 -20px;
`;

const Title = styled.h3<{ on: boolean }>`
  line-height: 61px;
  font-size: 48px;
  font-weight: bold;
  letter-spacing: -0.01px;
  color: #ffffff;
  margin: 0 20px 53px;
  opacity: ${({ on }) => (on ? 1 : 0.2)};
  transition: opacity 200ms linear;
  ${media.mobile} {
    line-height: 41px;
    font-size: 32px;
    text-align: center;
    margin-bottom: 32px;
  }
`;

export default SignModal;
