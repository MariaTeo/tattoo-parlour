'use client';

import type { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    milanoRed: '#ad0e09',
    rusticRed: '#4f0404',
    mercury: '#e6e6e6',
    light: '#fff',
    dark: '#000',
  },
};

interface ITheme {
  children?: JSX.Element;
}

const Theme = ({ children }: ITheme) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
