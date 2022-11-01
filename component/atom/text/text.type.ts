import { ReactNode } from 'react';

export interface StyleText {
  as?: 'p' | 'h1' | 'h2' | 'h3';
}

export interface Text extends StyleText {
  children: ReactNode;
}
