'use client';

import { ThemeProvider } from 'styled-components';

const theme = {
  textShadow:
    '-1px -1px 0 #e6e6e6, 1px -1px 0 #e6e6e6, -1px 1px 0 #e6e6e6, 1px 1px 0 #e6e6e6,  -1.5px 0 0 #e6e6e6, 1.5px 0 0 #e6e6e6, 0 -1.5px 0 #e6e6e6, 0 1.5px 0 #e6e6e6',
  color: {
    milanoRed: '#ad0e09',
    cupid: '#facac8',
    rusticRed: '#4f0404',
    mercury: '#e6e6e6',
    light: '#fff',
    dark: '#000',
    bgColor: '#e6d4d3',
  },
};

interface ITheme {
  children: JSX.Element;
}

const Theme = ({ children }: ITheme) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
