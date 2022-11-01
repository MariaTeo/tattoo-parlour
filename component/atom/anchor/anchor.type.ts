import type { ReactNode } from 'react';

export interface Anchor {
  children: ReactNode;
  title: string;
  color?: 'mercury' | 'cupid' | 'rusticRed' | 'mercury' | 'light' | 'dark';
  href: string;
}
