import { RefObject, useContext, useEffect } from 'react';
import { ScrollCtx, SectionCtx, getWindowScrollY } from '~/containers/Home/ScrollContext';

export const useSection = <T extends HTMLElement>(ref: RefObject<T>, index: number) => {
  const scrollManager = useContext(ScrollCtx);
  const { setSingleSection } = useContext(SectionCtx);

  const evaluationActive = () => {
    if (ref.current === null) return;
    const rect = ref.current.getBoundingClientRect();
    const windowH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const enter = rect.top <= 0 && rect.bottom > 0;
    const half = rect.top <= Math.floor(windowH / 2) && rect.bottom > Math.floor(windowH / 2);
    setSingleSection({ enter, half, index });
  };

  useEffect(() => {
    evaluationActive();
    scrollManager.addEvent(evaluationActive);
    return () => scrollManager.removeEvent(evaluationActive);
  }, []);
};
