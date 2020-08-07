import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { DeviceType } from '~/constants/theme';

export const useIsMobile = () => {
  const theme = useContext(ThemeContext);
  return theme.type === DeviceType.mobile;
};
