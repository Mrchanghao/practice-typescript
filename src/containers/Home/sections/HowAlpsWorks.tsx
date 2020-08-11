import React, { useState } from 'react';
import styled from 'styled-components';
import { Section, SideTitle } from '../units/UI';
import WhitePaperBanner from './WhitePaperBanner';
import { colors } from '../../../constants/style';
import { AppearAniIncPosition, Direction } from '../../../components/AppearAni';
import { media } from '../../../constants/theme';
import AlpsEmements from '~/components/AlpsElements';

enum Tab {
  Tab1,
  Tab2,
}

const alpsElements = [
  {
    title: 'Accuracy',
    subtitle: '정확도',
    description: '한 번에 100점 받는 습관',
  },
  {
    title: 'TCP',
    subtitle: '코드 품질 테스트',
    description: '테스트케이스를 많이 만들어서 테스트 해보는 습관',
  },
  {
    title: 'Efficiency',
    subtitle: '효율성',
    description: '알고리즘 설계 및 구현시 효율적으로 시간을 사용하는 습관',
  },
  {
    title: 'Logic',
    subtitle: '코드 길이',
    description: '중복되는 로직을 줄이고, 모듈화하여 코드를 짜는 습관',
  },
  {
    title: 'Code',
    subtitle: '코드의 변화량',
    description: '주어진 시간을 코드 설계에 많이 사용하고 typing 시간을 줄이는 습관',
  },
];

const HowAlpsWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState(Tab.Tab1);
  const [activeElementIdx, setActiveElementIdx] = useState(0);
  const handleSelectionElement = (index: number) => setActiveElementIdx(index);

  return (
    <>
      <WhitePaperBanner />
      <Root>
        <AppearAniIncPosition as={Header}>
          <H3 active={activeTab === Tab.Tab1} onClick={() => setActiveTab(Tab.Tab1)}>
            Alps Algorithm.
          </H3>
          <H3 active={activeTab === Tab.Tab2} onClick={() => setActiveTab(Tab.Tab2)}>
            Alps Elements.
          </H3>
        </AppearAniIncPosition>
        {activeTab === Tab.Tab1 && <AppearAniIncPosition as={Img} src={require('~/assets/img/howworks/algorithm.png')} />}
        {activeTab === Tab.Tab2 && (
          <ElementsWrapper>
            <ElementsChart>
              <AlpsEmements selectedIndex={activeElementIdx} onSelectElement={handleSelectionElement} />
            </ElementsChart>
            <ElementsTextArea>
              {alpsElements.map((element, i) => (
                <AppearAniIncPosition as={ElementsTextList} direction={Direction.left} delay={i * 180} key={i}>
                  <ElementTitleArea>
                    <ElementTitle>{element.title}</ElementTitle>
                    <ElementSubtitle>{element.subtitle}</ElementSubtitle>
                  </ElementTitleArea>
                  <ElementDesc>{element.description}</ElementDesc>
                </AppearAniIncPosition>
              ))}
            </ElementsTextArea>
          </ElementsWrapper>
        )}
        <SideTitle color={colors.blueberry}>How Alps Works</SideTitle>
      </Root>
    </>
  );
};

export default HowAlpsWorks;

const Root = styled(Section)`
  background-color: #f3f3f3;
  align-items: flex-start;
  overflow: hidden;
  & > div {
    padding-top: 100px;
    ${media.mobile} {
      padding-bottom: 100px;
    }
  }
`;
const H3 = styled.h3<{ active: boolean }>`
  font-size: 27px;
  font-weight: bold;
  line-height: 48px;
  letter-spacing: -0.01px;
  color: ${colors.black};
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

const Header = styled.hgroup`
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

const Img = styled.img`
  display: block;
  margin: auto;
  width: 100%;
  max-width: 1000px;
  /* height: 600px; */
`;

const ElementsWrapper = styled.div`
  display: flex;
  align-items: center;
  ${media.mobile} {
    flex-direction: column;
    align-items: stretch;
  }
`;

const ElementsChart = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-right: 34px;
  ${media.mobile} {
    margin-right: 0;
    margin-bottom: 50px;
  }
`;
const ElementsImg = styled.img`
  width: 100%;
  display: block;
  ${media.mobile} {
    max-width: 340px;
  }
`;

const ElementsTextArea = styled.div`
  flex: 1;
  ${media.mobile} {
    display: flex;
    overflow-x: auto;
  }
`;

const ElementsTextList = styled.div<{ active: boolean }>`
  flex: 1;
  display: flex;
  padding: 33px 0;
  color: ${({ active }) => (active ? colors.azure : colors.blueberry)};
  & + div {
    border-top: 1px solid #c5c5c5;
  }
  ${media.mobile} {
    flex-direction: column;
    padding: 7px 20px;
    flex: 1 0 100px;
    & + div {
      border-top-width: 0;
      border-left: 1px solid #c5c5c5;
    }
  }
`;

const ElementTitleArea = styled.div`
  flex: 0 0 40%;
  min-width: 0;
  font-size: 28px;
  line-height: 37px;
  font-weight: bold;
  letter-spacing: -0.09px;
  ${media.mobile} {
    flex: 0 1 auto;
  }
`;

const ElementTitle = styled.div`
  font-size: 28px;
  line-height: 37px;
  font-weight: bold;
  letter-spacing: -0.09px;
  ${media.mobile} {
    line-height: 29px;
    font-size: 24px;
    letter-spacing: -0.08px;
  }
`;

const ElementSubtitle = styled.div`
  line-height: 25px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.47px;
  white-space: nowrap;
  ${media.mobile} {
    font-size: 16px;
    line-height: 1.88;
  }
`;

const ElementDesc = styled.div`
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.63;
  ${media.mobile} {
    font-size: 12px;
    line-height: 1.75;
  }
`;
