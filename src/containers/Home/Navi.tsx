import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { SectionCtx } from '~/containers/Home/ScrollContext';
import { sections as sectionInfoArr } from '~/containers/Home/constants';
import { DeviceType } from '~/constants/theme';
import { ButtonA } from '../../components/ButtonA';
// import { sections } from './constants';

export default () => {
  const theme = useContext(ThemeContext);
  const { sections } = useContext(SectionCtx);

  const activatedSection = sectionInfoArr[sections.findIndex(({ half }) => half)];
  const bgColor = activatedSection && activatedSection.naviColor;

  if (theme.type === DeviceType.mobile) return null;

  return (
    <>
      <NaviWrapper>
        {sections.map((v, i) => (
          <Dot on={v.half} key={i} bgColor={bgColor} />
        ))}
      </NaviWrapper>
    </>
  );
};

const NaviWrapper = styled.div`
  position: fixed;
  right: 80px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
`;
const Dot = styled.button<{ on?: boolean; bgColor: string }>`
  display: block;
  width: 8px;
  height: 8px;
  background-color: ${({ bgColor }) => bgColor || '#fff'};
  opacity: ${({ on }) => (on ? 1 : 0.2)};
  border-radius: 4px;
  padding: 0;
  border-width: 0;
  margin: 6px 0;
  transition: opacity 250ms linear, background-color 250ms linear;
`;

/*
  const Heading = styled(({ active, ...rest }) => <Title {...rest} />)<{
  active: boolean;
}>`
  color: ${props => (props.active ? 'red' : 'blue')};
`;
*/
const ContactButton = styled(({ buttonBorder, ...rest }) => <ButtonA {...rest} />)<{ buttonBorder?: boolean }>`
  min-width: 196px;
  top: 64px;
  right: 82px;
  position: fixed;
  border-color: ${({ buttonBorder }) => (buttonBorder ? '#fff' : 'transparent')};
  transition: border-color 200ms linear;
`;

// const ContactButton = styled(ButtonA)<{ buttonBorder?: boolean }>`
//   min-width: 196px;
//   top: 64px;
//   right: 82px;
//   position: fixed;
//   border-color: ${({ buttonBorder }) => (buttonBorder ? '#fff' : 'transparent')};
//   transition: border-color 200ms linear;
// `;
