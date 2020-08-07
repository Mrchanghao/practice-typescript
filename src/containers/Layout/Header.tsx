import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { AnchorA } from '~/components/ButtonA';
import { colors } from '~/constants/style';
import { SectionCtx } from '../Home/ScrollContext';
import { UserContext } from '../../context/user';
import { tokenManager } from '../../domain/tokenManager';
import { useIsMobile } from '~/hooks/useIsMobile';
import { sections as sectionInfoArr } from '~/containers/Home/constants';
import { SignModal } from '../User/SignModal';

// export const SectionCtx = createContext<SectionCtxValue>(
// { sections: [],
//   setSections: () => {},
//   setSingleSection: () => {} });

export default () => {
  const { userInfo, logout, signModalShown, setSignModalShown } = useContext(UserContext);
  const { sections } = useContext(SectionCtx);
  const isMobile = useIsMobile();
  const [shownMobileNotice, setShownMobileNotice] = useState(true);

  const enteredSection = sectionInfoArr[sections.findIndex(({ enter }) => enter)];
  const color = enteredSection && enteredSection.naviColor;
  const buttonBorder = enteredSection && enteredSection.buttonBorder;

  const handleClickLogout = () => {
    tokenManager.token = '';
    logout();
  };

  return isMobile ? (
    shownMobileNotice ? (
      <MobileRoot>
        <MobileMsg>
          시험 구매, 응시 및 가입은 데스크탑으로
          <br /> 접속 해 주시길 바랍니다.
        </MobileMsg>
        <MobileCloseBtn onClick={() => setShownMobileNotice(false)}>
          <img src={require('~/assets/img/close-btn.png')} alt="" />
        </MobileCloseBtn>
      </MobileRoot>
    ) : null
  ) : (
    <>
      <Root>
        <Navi color={color}>
          <NaviItem href="#product-intro">PRICING</NaviItem>
          {userInfo.email ? (
            <>
              <NaviItem onClick={handleClickLogout}>로그아웃</NaviItem>
            </>
          ) : (
            <NaviItem onClick={() => setSignModalShown(true)}>로그인</NaviItem>
          )}
        </Navi>
        {userInfo.email && (
          <StartButton bgColor={colors.blueberry} border={buttonBorder} href={process.env.EXAM_DOMAIN} target="_blank">
            시험 보러 가기
          </StartButton>
        )}
      </Root>
      <SignModal isShown={signModalShown} onClickClose={() => setSignModalShown(false)} />
    </>
  );
};

const Root = styled.div`
  position: fixed;
  top: 64px;
  right: 0;
  left: 0;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
  pointer-events: none;
`;

const MobileRoot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 13px 60px;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.31);
`;

const MobileMsg = styled.div`
  font-size: 12px;
  font-weight: bold;
  line-height: 1.67;
  letter-spacing: 0.86px;
  text-align: center;
  color: #ffffff;
`;

const MobileCloseBtn = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: 30px;
  width: 20px;
  height: 20px;
  appearance: none;
  background-color: transparent;
  border-width: 0;
  > img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 14px;
    height: 14px;
  }
`;

const Navi = styled.nav<{ color: string }>`
  display: flex;
  left: 10px;
  right: 10px;
  top: 64px;
  max-width: 1200px;
  color: ${({ color }) => color || '#fff'};
  pointer-events: auto;
`;

const NaviItem = styled.a`
  line-height: 48px;
  display: block;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 0 20px;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

const StartButton = styled(AnchorA as any)`
  margin-left: 20px;
  min-width: 196px;
  pointer-events: auto;
`;
