import type { ReactNode } from 'react';

export interface StyleAnchor {
  link?: boolean;
}

export interface Anchor extends StyleAnchor {
  children?: ReactNode;
  title: string;
  href: string;
  shadow?: boolean;
  color?: 'mercury' | 'cupid' | 'rusticRed' | 'mercury' | 'light' | 'dark';
}
