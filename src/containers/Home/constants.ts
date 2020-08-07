import AboutAlps from './sections/AboutAlps';
import MainVisual from './sections/MainVisual';
import WhyAlps from './sections/WhyAlps';

export const userTokenKey = 'alpsHomeToken';
export const MerchantKey = process.env.STORE_KEY!;

const naviColor = '#fff';

export const sections = [
  { Component: MainVisual, naviColor, buttonBorder: false },
  { Component: WhyAlps, naviColor, buttonBorder: false },
  { Component: AboutAlps, naviColor, buttonBorder: true },
];
