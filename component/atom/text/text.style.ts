import styled from 'styled-components';
import type * as T from './text.type';

const sizeMap = {
  p: 14,
  h1: 36,
  h2: 28,
  h3: 16,
};
const sizeMapMobile = {
  p: 12,
  h1: 20,
  h2: 18,
  h3: 16,
};

export const Text = styled.h1<T.StyleText>`
  color: red;
  ${({ color = 'dark', theme }) =>
    color ? `color: ${theme.color[color]};` : ``}
  ${({ as = 'p' }) => (as ? `font-size: ${sizeMapMobile[as] / 16}rem;` : ``)}

  @media screen and (min-width: 768px) {
    ${({ as = 'p' }) => (as ? `font-size: ${sizeMap[as] / 16}rem;` : ``)}
  }
`;
