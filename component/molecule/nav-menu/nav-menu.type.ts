import type { ReactNode } from 'react';

interface NavMenuLinkList {
  content: string;
  path: string;
  title: string;
}
interface NavMenu {
  title?: string;
  logo?: string;
  navMenuLinks?: NavMenuLinkList[];
}

export interface Nav {
  children?: ReactNode;
  navMenu: NavMenu;
}
