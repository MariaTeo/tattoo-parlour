import type { ReactNode } from 'react';

export interface FlexStyle {
  gap?: number;
  width?: string;
  padding?: number[];
  vertical?: boolean;
  nav?: boolean;
  home?: boolean;
  hero?: boolean;
  align?: 'start' | 'end' | 'center';
  justify?: 'start' | 'end' | 'center' | 'space-between';
}

export interface Flex extends FlexStyle {
  children: ReactNode;
}
