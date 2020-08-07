import styled from 'styled-components';
import { colors } from '~/constants/style';

export const ButtonA = styled.button<{ bgColor?: string; color?: string; border?: boolean }>`
  height: 48px;
  border-radius: 24px;
  border: solid ${({ border }) => (border ? '1' : '0')}px #f3f3f3;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding: 0 10px;
  min-width: 165px;
  background-color: ${({ bgColor }) => bgColor || colors.azure};
  color: ${({ color }) => color || '#fff'};
`;

export const AnchorA = styled.a<{ border?: boolean; bgColor?: string; color?: string }>`
  display: inline-block;
  height: 48px;
  line-height: 48px;
  border-radius: 24px;
  border: solid ${({ border }) => (border ? '1' : '0')}px #f3f3f3;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding: 0 10px;
  box-sizing: border-box;
  min-width: 165px;
  text-decoration: none;
  background-color: ${({ bgColor }) => bgColor || colors.azure};
  color: ${({ color }) => color || '#fff'};
`;
