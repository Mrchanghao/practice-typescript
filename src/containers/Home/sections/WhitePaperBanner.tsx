import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/style';
import { AnchorA } from '../../../components/ButtonA';
import { AppearAniIncPosition } from '../../../components/AppearAni';
import { media } from '../../../constants/theme';

const WhitePaperBanner: React.FC = () => {
  return (
    <Wrapper>
      <div>
        <AppearAniIncPosition as={Title}>Alps TECH</AppearAniIncPosition>
        <AppearAniIncPosition as={Button} href={require('~/assets/doc/Alps-Coding-Assessment-Framework.pdf')} target="_blank"></AppearAniIncPosition>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: url('${require('~/assets/img/bg_technology.jpg')}');
  height: 240px;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  & div > * {vertical-align: middle;}
  ${media.mobile}{
    text-align: center;
    height: auto;
    padding: 100px 10px;
  }
`;

const Title = styled.div`
  font-size: 48px;
  font-weight: bold;
  letter-spacing: -0.01px;
  text-align: center;
  color: ${colors.black};
  display: inline-block;
  margin-right: 45px;
  ${media.mobile} {
    margin-right: 0;
    line-height: 40px;
    font-size: 32px;
    margin-bottom: 40px;
    display: block;
  }
`;

const Button = styled(AnchorA as any)`
  border-width: 0;
  ${media.mobile} {
    width: 100%;
    max-width: 236px;
  }
`;

export default WhitePaperBanner;
