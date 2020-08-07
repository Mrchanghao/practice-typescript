import React, { useRef } from 'react';
import { SectionProps } from '../types';
import { useSection } from '../../../hooks/useSection';

const SectionRoot: React.FC<SectionProps> = ({ index, children }) => {
  const rootEl = useRef<HTMLDivElement>(null);
  useSection<HTMLDivElement>(rootEl, index);

  return <div ref={rootEl}>{children}</div>;
};

export default SectionRoot;
