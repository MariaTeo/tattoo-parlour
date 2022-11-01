import styled from 'styled-components';
import type * as T from './text.type';

const sizeMap = {
  p: 14,
  h1: 36,
  h2: 28,
  h3: 16,
};
const sizeMapMobile = {
  p: 14,
  h1: 24,
  h2: 20,
  h3: 16,
};

const colorMap = {
  milanoRed: 'milanoRed',
  cupid: 'cupid',
  rusticRed: 'rusticRed',
  mercury: 'mercury',
  light: 'light',
  dark: 'dark',
};

export const Text = styled.h1<T.StyleText>`
  color: red;
  ${({ color = 'mercury', theme }) =>
    color ? `color: ${theme.color[color]};` : ``}
  ${({ as = 'p' }) => (as ? `font-size: ${sizeMapMobile[as] / 16}rem;` : ``)}

  @media screen and (min-width: 768px) {
    ${({ as = 'p' }) => (as ? `font-size: ${sizeMap[as] / 16}rem;` : ``)}
  }
`;
