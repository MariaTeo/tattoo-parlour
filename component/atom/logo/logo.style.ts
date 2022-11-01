import styled from 'styled-components';
import type * as T from './logo.type';

export const Logo = styled.div<T.Logo>`
  background-image: url('/asset/image/logo.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 2rem;
  height: 2rem;
`;
