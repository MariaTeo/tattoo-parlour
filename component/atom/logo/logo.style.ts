import Image from 'next/image';
import styled from 'styled-components';
import type * as T from './logo.type';

export const Logo = styled(Image)<T.Logo>`
  width: 24px;
  height: 24px;

  ${({ footer }) => (footer ? 'width: 100%; height: 100%;' : '')}

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    ${({ footer }) => (footer ? 'width: 100%; height: 100%;' : '')}
  }
`;
