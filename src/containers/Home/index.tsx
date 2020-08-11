import React, { useLayoutEffect } from 'react';
import Navi from './Navi';
import { useController } from 'react-scroll-parallax';
import { ScrollProvider } from './scrollContext';
import Header from '../Layout/Header';
import SectionRoot from './units/SectionRoot';
import { sections } from '~/containers/Home/constants';
import { ThemeProvider } from 'styled-components';
import { themes } from '../../constants/theme';
import Footer from '../Layout/Footer';
import Product from './sections/Product';

export default React.memo(() => {
  const { parallaxController } = useController();
  useLayoutEffect(() => {
    const handler = () => parallaxController.update();
    window.addEventListener('load', handler);

    return () => window.removeEventListener('load', handler);
  }, [parallaxController]);

  return (
    <ScrollProvider>
      <Header />

      {sections.map(({ Component }, i) => (
        <SectionRoot index={i} key={i}>
          <Component />
        </SectionRoot>
      ))}
      <Product />
      <Footer />
      <Navi />
    </ScrollProvider>
  );
});
