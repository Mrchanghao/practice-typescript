import React from 'react';
import styled from 'styled-components';
import { Section, SectionTitle, SideTitle } from '../units/UI';
import { media } from '~/constants/theme';
import { AppearAniIncPosition } from '~/components/AppearAni';

const AboutAlps: React.FC = () => {
  return (
    <Root>
      <AppearAniIncPosition as={Title}>About Alps</AppearAniIncPosition>
      <Intro.List>
        <AppearAniIncPosition as="li">
          <Intro.Img>
            <img src={require('~/assets/img/deep_learning.png')} />
          </Intro.Img>
          <Intro.Text>
            <Intro.Title>
              Deep Learning 통한 <br />
              절차적 사고(Procedural Knowledge)습관 분석
            </Intro.Title>
            <Intro.Desc>
              우리는 SW 합격자 인당 평균 360,000건의 방대한 학습 데이터를 Deep Learning 및 Genetic Algorithm을 기반으로 분석하여 개발 습관을 모델링 하였고, 자체 러닝 센터를 통해 개발 습관과 알고리즘
              실력 향상 간의 상관관계를 검증하였다.
            </Intro.Desc>
          </Intro.Text>
        </AppearAniIncPosition>
        <AppearAniIncPosition as="li" delay={100}>
          <Intro.Img>
            <img src={require('~/assets/img/data.png')} />
          </Intro.Img>
          <Intro.Text>
            <Intro.Title>
              초단위 절차적 사고(Procedural Knowledge)습관 <br /> 데이터 수집
            </Intro.Title>
            <Intro.Desc>
              ALPS는 학습자가 문제를 푸는 동안에 학습자의 행동에 대한 메타 데이터를 초단위로 수집하여 개발 습관을 진단한다. <br />
              또한 더 정교한 진단을 위해 학습자의 풀이 결과에 따른 맞춤 문제를 제공한다. 학습자의 습관을 합격자와 비교/분석하여 현재 나의 위치를 진단한다.
            </Intro.Desc>
          </Intro.Text>
        </AppearAniIncPosition>
        <AppearAniIncPosition as="li">
          <Intro.Img>
            <img src={require('~/assets/img/report.png')} />
          </Intro.Img>
          <Intro.Text>
            <Intro.Title>
              5가지 각도의 <br /> 절차적 사고(Procedural Knowledge)습관 Report
            </Intro.Title>
            <Intro.Desc>
              ALPS는 알고리즘 개발 습관을 5가지 각도에서 (로직, 코드, 효율성, 정확성, TCP) AI엔진을 활용하여 세밀하게 분석해 학습자의 습관을 진단한다. <br />
              합격자들의 데이터와 비교 분석해 효율적인 알고리즘 학습동선을 설계한다.
            </Intro.Desc>
          </Intro.Text>
        </AppearAniIncPosition>
        <AppearAniIncPosition as="li" delay={100}>
          <Intro.Img>
            <img src={require('~/assets/img/security.png')} />
          </Intro.Img>
          <Intro.Text>
            <Intro.Title>표절 방지 프로그램</Intro.Title>
            <Intro.Desc>소스코드의 불법복제나 표절 여부를 탐지하기 위한 인공지능 표절 방지 프로그램으로 학습자의 절차적 사고(Procedural Knowledge)습관을 정밀하게 평가한다.</Intro.Desc>
          </Intro.Text>
        </AppearAniIncPosition>
      </Intro.List>
      <SideTitle>About Alps</SideTitle>
    </Root>
  );
};

export default AboutAlps;

const Root = styled(Section)`
  background-color: #333688;
  & > div {
    flex-basis: 1100px;
    ${media.mobile} {
      padding-top: 100px;
      padding-bottom: 100px;
    }
  }
`;

const Title = styled(SectionTitle as any)`
  margin-bottom: 110px;
  border: 1px solid red;
  ${media.mobile} {
    margin-bottom: 40px;
  }
`;

const Intro = {
  List: styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: -50px 0;
    ${media.mobile} {
      margin-top: -20px;
    }
    & > li {
      flex: 1 0 50%;
      display: flex;
      min-width: 0;
      padding: 50px 30px;
      box-sizing: border-box;
      ${media.mobile} {
        flex: 1 0 100%;
        padding: 20px 10px;
        flex-direction: column;
      }
    }
  `,
  Img: styled.div`
    flex: 1 0 0px;
    align-items: center;
    position: relative;
    margin-right: 20px;
    ${media.mobile} {
      margin-right: 0;
      margin-bottom: 16px;
      text-align: center;
    }
    & > img {
      position: absolute;
      width: 180px;
      max-width: 100%;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      ${media.mobile} {
        position: relative;
      }
    }
  `,
  Text: styled.div`
    flex: 1 0 0px;
    ${media.mobile} {
      text-align: center;
    }
  `,
  Title: styled.h4`
    font-size: 20px;
    font-weight: bold;
    line-height: 1.6;
    letter-spacing: -0.01px;
    color: #ffffff;
    ${media.mobile} {
      font-size: 18px;
      line-height: 1.67;
    }
  `,
  Desc: styled.p`
    font-size: 12px;
    line-height: 1.58;
    letter-spacing: 0px;
    color: #ffffff;
    margin-top: 18px;
    ${media.mobile} {
      margin-top: 20px;
      font-size: 12px;
      line-height: 1.75;
    }
  `,
};
