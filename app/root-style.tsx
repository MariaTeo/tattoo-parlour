'use client';

import React from 'react';
import { useStyledComponentsRegistry } from '../lib';
import { useServerInsertedHTML } from 'next/navigation';
import type { ReactNode } from 'react';

const RootStyleRegistry = ({ children }: { children: JSX.Element }) => {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] =
    useStyledComponentsRegistry();

  useServerInsertedHTML(() => {
    return <>{styledComponentsFlushEffect()}</>;
  });

  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
};

export default RootStyleRegistry;
