import styled, { ThemeContext } from 'styled-components';
import React, { useContext } from 'react';
import { colors } from '~/constants/style';
import { Parallax } from 'react-scroll-parallax';
import { DeviceType, media } from '~/constants/theme';

const PartnerBanner: React.FC = () => {
  const theme = useContext(ThemeContext);
  const isMobile = theme.type === DeviceType.mobile;
  return (
    <Wrapper>
      <Parallax className="box i1" y={[-25, 25]} disabled={isMobile}>
        <BoxTitleImg src={require('~/assets/img/partner_donga.png')} />
        <BoxDate>
          <span>2019.10.16</span>
        </BoxDate>
        <BoxDescription>
          4차 산업혁명이 경영계의 핵심 화두로 등장하면서 빅데이터, 인공지능(AI), 사물인터넷(IoT) 등에 대한 관심은 그 어느 때보다 커진 상태다. 각종 데이터를 수집하고, 이를 AI로 분석해 기존 사업 영역에
          접목하는 사례도 많아졌다. 기술 접목과 관련한 프로젝트의 성패를 가르는 것은 내부 인력의 기술에 대한 이해도와 역량이다...
          <br />
          <ViewMore href="https://n.news.naver.com/article/020/0003247337?sid=101" target="_blank">
            더보기
          </ViewMore>
        </BoxDescription>
      </Parallax>
      <Parallax className="box i2" y={[25, -25]} disabled={isMobile}>
        <BoxTitleImg src={require('~/assets/img/partner_ms.png')} />
        <BoxDate>
          <span>2019.09.27</span>
        </BoxDate>
        <BoxDescription>
          알고리즘랩스는 Microsoft Authorized Education Partner로 참여하여 창의적인 ICT솔루션을 통해 학생과 교사들의 잠재력을 100% 성장시키는데 협력하고 있습니다. 파트너십을 획득함으로써 고객에게
          훌륭한 서비스를 제공하는 데 필요한 지식과 전문성을 갖추었으며 경쟁에 앞서 나가고 있습니다…
          <br />
          <ViewMore href="https://drive.google.com/file/d/1qtQNUdppK8b5co4cPsadL0etsGgkMKl8/view?usp=sharing" target="_blank">
            인증서 확인하기
          </ViewMore>
        </BoxDescription>
      </Parallax>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
  height: 540px;
  background-size: cover;
  display: flex;
  justify-content: center;
  overflow: hidden;
  & .box {
    justify-content: center;
    display: flex;
    flex: 0 1 486px;
    min-width: 0;
    & > div {
      flex: 1;
      border-radius: 6px;
      margin: 0 10px;
      box-shadow: 10px 10px 30px 0 rgba(51, 54, 136, 0.21);
      border: solid 1px #ffffff;
      padding: 42px 58px 59px;
      background-color: #ffffff;
      display: flex;
      min-width: 0;
      box-sizing: border-box;
      flex-direction: column;
      align-items: center;
    }
    &.i1 > div {
      align-self: flex-start;
      border-left: 6px solid ${colors.blueberry};
    }
    &.i2 > div {
      align-self: flex-end;
      border-left: 6px solid #00acff;
    }
  }
  ${media.mobile} {
    flex-direction: column;
    height: auto;
    & .box {
      flex: 1 1 0px;
      margin-top: 15px;
      margin-bottom: 15px;
      & > div {
        padding: 30px;
        margin: 0 20px;
      }
    }
  }
`;

const BoxTitleImg = styled.img`
  height: 53px;
  margin-bottom: 32px;
  ${media.mobile} {
    height: 34px;
  }
`;

const BoxDate = styled.div`
  line-height: 26px;
  font-size: 14px;
  font-weight: 500;
  font-style: italic;
  text-align: center;
  color: ${colors.brownGrey};
  position: relative;
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
  width: 80%;
  box-sizing: border-box;
  & span {
    position: relative;
    z-index: 1;
    flex: 0 1 auto;
    background-color: #fff;
    padding: 0 24px;
  }
  &:before {
    position: absolute;
    height: 1px;
    background-color: #c5c5c5;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const BoxDescription = styled.p`
  font-size: 14px;
  line-height: 1.71;
  text-align: center;
  color: ${colors.black};
  align-self: stretch;
`;

const ViewMore = styled.a`
  line-height: 26px;
  text-decoration: underline;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: ${colors.brownGrey};
  margin-top: 18px;
  min-width: 90px;
  display: inline-block;
`;

export default PartnerBanner;
