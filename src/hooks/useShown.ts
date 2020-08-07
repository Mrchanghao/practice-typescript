import { RefObject, useContext, useEffect, useState } from 'react';
import { ScrollCtx } from '~/containers/Home/ScrollContext';

export const useShown = <T extends HTMLElement>(ref: RefObject<T>): boolean => {
  const scrollManager = useContext(ScrollCtx);

  const [shown, setShown] = useState(false);

  const evalutationActive = () => {
    if (ref.current === null) return;
    // 돔 요소에 들어 있는 각종 좌표에서 객체 구하기
    const rect = ref.current.getBoundingClientRect();
    // 높이 구함
    const windowH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    if (rect.top >= 0 && rect.bottom <= windowH) setShown(true);
  };

  useEffect(() => {
    evalutationActive();
    scrollManager.addEvent(evalutationActive);
    return () => scrollManager.removeEvent(evalutationActive);
  }, []);

  return shown;
};
