import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Section, SectionTitle, SideTitle } from '../units/UI';
import { AppearAni, AppearAniIncPosition, Direction } from '~/components/AppearAni';
import { useShown } from '~/hooks/useShown';
import { media } from '~/constants/theme';
// import Header from '~/containers/Layout/Header';

enum Tabs {
  Tab1,
  Tab2,
}

const WhyAlps: React.FC = () => {
  const [activeTab, setActiveTab] = useState(Tabs.Tab1);

  const contentOneEl = useRef<HTMLDivElement>(null);
  const contentTwoEl = useRef<HTMLDivElement>(null);

  const contentOneShown = useShown(contentOneEl);
  // 원철님 코드
  const contentTwoShown = useShown(contentOneEl);
  // 내코드
  // const contentTwoShown = useShown(contentTwoEl); --> div 돔에 접근이 안 되는 듯? 보이지 않음

  return (
    <Root>
      <AppearAniIncPosition on as={Header}>
        <H3 active={activeTab === Tabs.Tab1} onClick={() => setActiveTab(Tabs.Tab1)}>
          Why Alps?
        </H3>
        <H3 active={activeTab === Tabs.Tab2} onClick={() => setActiveTab(Tabs.Tab2)}>
          인지 아키텍쳐란?
        </H3>
      </AppearAniIncPosition>
      {activeTab === Tabs.Tab1 && (
        <div ref={contentOneEl}>
          <AppearAni as={Description} direction={Direction.left} on={contentOneShown}>
            최근 많은 기업들은 개발 직군을 채용할때 알고리즘 테스트를 봅니다. 그 이유는 실무에서 자기 역할을 잘 해낼 수 있는 사람을 찾기 위함입니다. <br /> 그리고 알고리즘은 크게 2가지 관점에서 이를
            책정할 수 있습니다.
          </AppearAni>
          <Box.List>
            <AppearAni as="li" direction={Direction.left} on={contentOneShown} delay={100}>
              <Box.Title>1. 실무에 필요한 배경 지식 (알고리즘, 자료구조)</Box.Title>
              <Box.Desc>배열, 링크드 리스트, 해시맵, 트리, 힙, 퀵정렬, 그래프 알고리즘, 이진검색, 시간복잡도, 공간복잡도 ...</Box.Desc>
            </AppearAni>
            <AppearAni as="li" on={contentOneShown} direction={Direction.left} delay={200}>
              <Box.Title>2. 문제 해결 능력</Box.Title>
              <Box.Desc>선언적 지식을 바탕으로, 실무에서 일어날 수 있는 여러 문제들을 해결할 수 있는 능력</Box.Desc>
            </AppearAni>
          </Box.List>
          <AppearAni as={Description} on={contentOneShown} direction={Direction.left} delay={300}>
            많은 기업들이 알고리즘 시험 점수 위주로 지원자의 실력을 평가하고 있지만, 사실 알고리즘은 "문제를 해결하는 과정"을 평가하는 것이 보다 중요합니다.
            <br />
            ALPS는 평가를 함에 있어서 학습자의 습관에 초점을 맞춥니다.
            <br />
            초단위로 수집한 학습자의 데이터를 바탕으로 Deep Learing을 통해 절차적 사고(Procedural Knowledge)을 분석합니다. 이를 기반으로한 다양한 각도의 절차적 사고(Procedural Knowledge)습관 Report를
            제공합니다.
          </AppearAni>
        </div>
      )}
      {activeTab === Tabs.Tab2 && (
        <div ref={contentTwoEl}>
          <AppearAni as={Description} on={contentTwoShown}>
            인지 아키텍처(cognitive architecture)는 인간의 정신 구조에 관한 이론과 인공지능(AI)과 컴퓨터 인지과학 분야에서 사용되는 이론의 연산적 인스턴스화를 모두 일컫는다.
            <br />
            ACT-R (" Adaptive Control of Thought—Rational " )는 인간의 기본적이고 더 줄일수 없는 인지적, 지각적 작동을 정의하는 것을 목표로 한다. ACT-R의 가장 중요한 가정은 인간의 지식은 더 줄일 수
            없는 두 가지 표현, 즉 선언적 표현과 절차적 표현으로 나눌 수 있다는 것이다.
          </AppearAni>
          <AppearAni as={ArchitectureImage} on={contentTwoShown} delay={150} src={require('~/assets/img/cognitive_architecture.png')} />
          <AppearAni as={Description} on={contentTwoShown} delay={300}>
            알고리즘 문제를 해결하는데에 있어서 자료구조 등의 선언적 지식을 습득하는것 뿐만 아니라, "어떻게 개발 습관을 형성 하는지"도 매우 중요하다.
          </AppearAni>
        </div>
      )}
      <SideTitle>Why Cognitive architecture?</SideTitle>
    </Root>
  );
};

const Root = styled(Section)`
  background-color: #0d0d1d;
  align-items: flex-start;
  overflow: hidden;
  & > div {
    max-width: 1000px;
    padding-top: 100px;
    ${media.mobile} {
      padding-bottom: 100px;
    }
  }
`;

export default WhyAlps;

const H3 = styled.h3<{ active: boolean }>`
  font-size: 27px;
  font-weight: bold;
  line-height: 48px;
  letter-spacing: -0.01px;
  color: #fff;
  position: relative;
  cursor: pointer;
  ${media.mobile} {
    line-height: 29px;
    font-size: 18px;
    letter-spacing: 0px;
  }
  ${({ active }) =>
    active
      ? `
      color: #0199fe;
      &:after{
        content:'';
        position: absolute;
        bottom: -12px;
        left:0;
        right:0;
        border-bottom: solid 2px #0199fe;
        ${media.mobile} {
          bottom: -5px;
        }
      }
    `
      : ''}
`;

const Header = styled.div`
  margin: 0 0 67px -48px;
  display: flex;
  ${H3} {
    flex: 0 1 auto;
    margin-left: 48px;
  }
  ${media.mobile} {
    margin: 0 0 39px -20px;
    ${H3} {
      margin-left: 20px;
    }
  }
`;

const Description = styled.div`
  font-size: 18px;
  font-weight: normal;
  line-height: 1.89;
  color: #ffffff;
  ${media.mobile} {
    font-size: 12px;
    line-height: 1.75;
  }
`;
const Box = {
  List: styled.ul`
    display: flex;
    margin: 50px -10px;
    & > li {
      flex: 1 0 0px;
      margin: 0 10px;
      padding: 22px 30px;
      border-radius: 6px;
      border: solid 1px #ffffff;
    }
    ${media.mobile} {
      margin: 30px -10px;
      overflow-x: auto;
      & > li {
        flex: 1 0 300px;
      }
    }
  `,
  Title: styled.h4`
    font-size: 18px;
    font-weight: bold;
    line-height: 33px;
    letter-spacing: 0px;
    color: #ffffff;
    margin-bottom: 9px;
  `,
  Desc: styled.div`
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.71;
  `,
};

const ArchitectureImage = styled.img`
  display: block;
  max-width: 100%;
  margin: 50px 0 42px;
  ${media.mobile} {
    margin: 38px 0;
  }
`;
