import React, { useState, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

require('./assets/css/fonts.css');
import './assets/css/global.css';
import './assets/css/slick.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider } from 'styled-components';
import { DeviceType, themes } from './constants/theme';
import { UserProvider } from './context/user';
import Home from './containers/Home';

const getWindowWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

const App: React.FC = () => {
  const [deviceType, setDeviceType] = useState(DeviceType.pc);
  const [windowW, setWidnowW] = useState(getWindowWidth());

  const setWindowByResize = () => {
    setWidnowW(getWindowWidth());
  };

  const w = windowW;

  if (w >= 768 && deviceType !== DeviceType.pc) setDeviceType(DeviceType.pc);
  else if (w < 768 && deviceType !== DeviceType.mobile) setDeviceType(DeviceType.mobile);

  useLayoutEffect(() => {
    window.addEventListener('resize', setWindowByResize);

    return window.removeEventListener('resize', setWindowByResize);
  }, []);
  console.log(themes);
  return (
    <ThemeProvider theme={themes[deviceType]}>
      <ParallaxProvider>
        <UserProvider>
          <Home />
        </UserProvider>
      </ParallaxProvider>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
