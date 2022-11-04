import { ReactNode } from 'react';

export interface StylePill {
  bgColor?: 'milanoRed' | 'mercury';
  color?: 'dark' | 'mercury';
}

export interface Pill extends StylePill {
  children: ReactNode;
}
