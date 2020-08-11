import AboutAlps from './sections/AboutAlps';
import MainVisual from './sections/MainVisual';
import WhyAlps from './sections/WhyAlps';
import HowAlpsWorks from './sections/HowAlpsWorks';
import { colors } from '../../constants/style';

export const userTokenKey = 'alpsHomeToken';
export const MerchantKey = process.env.STORE_KEY!;

const naviColor = '#fff';

export const sections = [
  { Component: MainVisual, naviColor: '#fff', buttonBorder: false },
  { Component: WhyAlps, naviColor: '#fff', buttonBorder: false },
  { Component: AboutAlps, naviColor: '#fff', buttonBorder: true },
  { Component: HowAlpsWorks, naviColor: colors.blueberry, buttonBorder: false },
  // { Component: Example, naviColor: '#fff', buttonBorder: false },
  // { Component: OurTeam, naviColor: '#fff', buttonBorder: false },
  // { Component: Alliance, naviColor: colors.blueberry, buttonBorder: false },
];
