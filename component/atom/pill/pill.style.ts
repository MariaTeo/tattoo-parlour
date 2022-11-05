import styled from 'styled-components';
import type * as T from './pill.type';

export const Pill = styled.div<T.StylePill>`
  ${({ color = 'mercury', theme }) =>
    color ? `color: ${theme.color[color]};` : ''}
  ${({ bgColor = 'milanoRed', theme }) =>
    bgColor ? `background-color: ${theme.color[bgColor]};` : ''}
  padding: 0.2rem 0.8rem;
  border-radius: 8px;
  display: inline-block;
  border: 2px solid ${({ theme }) => theme.color.cupid};
`;
