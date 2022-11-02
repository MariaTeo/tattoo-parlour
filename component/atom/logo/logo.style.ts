import styled from 'styled-components';
import type * as T from './logo.type';

export const Logo = styled.div<T.Logo>`
  background-image: url('/asset/image/logo.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
