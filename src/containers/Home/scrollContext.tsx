import React, { useState, useEffect, useMemo, Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';
import { sections } from './constants';
import { sections as sectionInfoArr } from '~/containers/Home/constants';
// import { sections sections as sectionInfoArr}

interface SectionPosition {
  half: boolean;
  enter: boolean;
}

interface SectionCtxValue {
  sections: SectionPosition[];
  // dispatch
  setSections: Dispatch<SetStateAction<SectionPosition[]>>;
  setSingleSection: (options: SectionPosition & { index: number }) => void;
}

export const getWindowScrollY = () => {
  const doc = document.documentElement;
  return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
};

const scrollManager = {
  events: [] as Function[],
  addEvent(fn: Function) {
    scrollManager.events.push(fn);
    return () => scrollManager.removeEvent(fn);
  },
  removeEvent(fn: Function) {
    scrollManager.events.splice(
      scrollManager.events.findIndex(() => fn),
      1
    );
  },
  notify() {
    scrollManager.events.forEach((fn) => fn(getWindowScrollY()));
  },
};

export const ScrollCtx = createContext(scrollManager);
export const SectionCtx = createContext<SectionCtxValue>({ sections: [], setSections: () => {}, setSingleSection: () => {} });

export const ScrollProvider: React.FC = ({ children }) => {
  const [sections, setSections] = useState(sectionInfoArr.map(() => ({ half: false, enter: false })));
  const setSingleSection = ({ index, half, enter }: SectionPosition & { index: number }) => {
    setSections((prevSections) => {
      if (prevSections[index].half === half && prevSections[index].enter === enter) {
        return prevSections;
      }
      return prevSections.map((flag, i) => (i === index ? { half, enter } : flag));
    });
  };
  const sectionMemo = useMemo(() => ({ sections, setSections, setSingleSection }), sections);

  useEffect(() => {
    window.addEventListener('scroll', scrollManager.notify);
    return () => window.removeEventListener('scroll', scrollManager.notify);
  }, []);

  return (
    <SectionCtx.Provider value={sectionMemo}>
      <ScrollCtx.Provider value={scrollManager}>{children}</ScrollCtx.Provider>
    </SectionCtx.Provider>
  );
};
