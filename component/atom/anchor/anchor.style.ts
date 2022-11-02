import styled from 'styled-components';
import type * as T from './anchor.type';

const getDisplayAndAlign = ({ link }: T.StyleAnchor) =>
  !link && 'display: flex; align-items: center;';

export const Anchor = styled.a<T.StyleAnchor>`
  text-decoration: none;
  ${getDisplayAndAlign}
`;
