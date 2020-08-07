import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Section, SideTitle } from '../units/UI';
import { GroundUpAni } from '~/components/GroundAni';
import { AppearAni } from '~/components/AppearAni';
import { animateScroll as scroll } from 'react-scroll';
import PartnerBanner from './PartnerBanner';
import { DeviceType, media } from '~/constants/theme';
import { colors } from '~/constants/style';
import { useIsMobile } from '~/hooks/useIsMobile';
import Contact from '../units/Contact';

const MainVisual: React.FC = () => {
  const isMobile = useIsMobile();
  const [modalShown, setModalShown] = useState(false);
  const [videoCompleted, setVideoCompleted] = useState(false);
  const rootEl = useRef<HTMLDivElement>(null);
  const scrollToNextSection = () => {
    if (rootEl.current) {
      const rect = rootEl.current.getBoundingClientRect();
      scroll.scrollMore(rect.bottom, { duration: 750, smooth: 'easeInOutCubic' });
    }
  };

  const rootStyle = isMobile ? { minHeight: 'auto', height: window.innerHeight || document.documentElement.clientHeight } : undefined;
  return (
    <>
      <Root ref={rootEl} style={rootStyle}>
        <VideoContainer>
          <Video src={require('~/assets/video/main_video.mov')} autoPlay muted onEnded={() => setVideoCompleted(true)} playsInline />
        </VideoContainer>
        (
        <MainText>
          <Title>
            <GroundUpAni on={videoCompleted} as="b">
              Alps
            </GroundUpAni>
            <GroundUpAni on={videoCompleted} as="span" delay={100}>
              Test
            </GroundUpAni>
          </Title>
          <SubTitle>
            <GroundUpAni on={videoCompleted} delay={400}>
              Hiring&nbsp;
            </GroundUpAni>
            <GroundUpAni on={videoCompleted} delay={500}>
              solution&nbsp;
            </GroundUpAni>
            <GroundUpAni on={videoCompleted} delay={600}>
              for&nbsp;
            </GroundUpAni>
            <GroundUpAni on={videoCompleted} delay={700}>
              professionals&nbsp;
            </GroundUpAni>
            <GroundUpAni on={videoCompleted} delay={800}>
              on&nbsp;
            </GroundUpAni>
            <GroundUpAni on={videoCompleted} delay={900}>
              A.I.
            </GroundUpAni>
          </SubTitle>
          <AppearAni as={ViewMore} on={videoCompleted} delay={1000} onClick={scrollToNextSection}>
            더 알아보기
          </AppearAni>
          {isMobile && (
            <AppearAni as={Contract} on={videoCompleted} delay={1100} onClick={() => setModalShown(true)}>
              CONTACT
            </AppearAni>
          )}
        </MainText>
        )<SideTitle>Alps</SideTitle>
      </Root>
      <div>
        <PartnerBanner />
      </div>
      <Contact isShown={modalShown} onClickClose={() => setModalShown(false)} />
    </>
  );
};

export default MainVisual;

const Root = styled(Section)`
  background-color: #0d0d1d;
  & > div {
    padding: 100px 10px;
  }
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`;

const Video = styled.video`
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  transform: translate(-50%, -50%);
  object-fit: contain;
  max-width: none;
`;

const MainText = styled.div`
  position: relative;
  text-align: center;
  transition: opacity 300ms ease-in-out;
`;

const Title = styled.div`
  color: #fff;
  font-size: 93px;
  font-weight: bold;
  line-height: 118px;
  letter-spacing: -0.03px;
  margin-bottom: 29px;
  & > span {
    margin-left: 20px;
    color: transparent;
    text-stroke: 1px #fff;
    -webkit-text-stroke: 1px #fff;
  }
  ${media[DeviceType.mobile]} {
    line-height: 66px;
    font-size: 52px;
    letter-spacing: -0.01px;
    margin-bottom: 23px;
    & > span {
      margin-left: 4px;
    }
  }
`;

const SubTitle = styled.div`
  line-height: 48px;
  font-size: 27px;
  font-weight: bold;
  letter-spacing: -0.01px;
  text-align: center;
  color: #ffffff;
  ${media[DeviceType.mobile]} {
    font-size: 18px;
    line-height: 1.44;
    letter-spacing: 0;
  }
`;

const ViewMore = styled.button`
  min-width: 132px;
  padding: 0 15px;
  height: 48px;
  border-radius: 24px;
  border: solid 1px #ffffff;
  background-color: transparent;
  font-size: 14px;
  letter-spacing: 1px;
  text-align: center;
  color: #ffffff;
  display: block;
  margin: 52px auto 0;
  ${media[DeviceType.mobile]} {
    min-width: auto;
    max-width: 236px;
    width: 100%;
    margin-top: 34px;
  }
`;

const Contract = styled.button`
  max-width: 236px;
  display: block;
  margin: auto;
  width: 100%;
  padding: 0 15px;
  height: 48px;
  border-radius: 24px;
  border: solid 1px #ffffff;
  background-color: #ffffff;
  font-size: 14px;
  letter-spacing: 1px;
  text-align: center;
  color: ${colors.blueberry};
  margin-top: 12px;
`;
