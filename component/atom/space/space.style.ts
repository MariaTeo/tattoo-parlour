import styled from 'styled-components';
import type * as T from './space.type';

export const Space = styled.div<T.Space>`
  ${({ height }) => (height ? `height: ${height}px;` : '')};
`;
