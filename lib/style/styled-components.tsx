'use client';

import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

const useStyledComponentsRegistry = () => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  const styledComponentsFlushEffect = () => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.seal();
    return <>{styles}</>;
  };

  const StyledComponentsRegistry = ({ children }: { children: ReactNode }) => (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children as ReactNode | null}
    </StyleSheetManager>
  );

  return [StyledComponentsRegistry, styledComponentsFlushEffect] as const;
};

export default useStyledComponentsRegistry;
