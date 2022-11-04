import styled from 'styled-components';
import type * as T from './hero.type';

export const Hero = styled.div<T.StyleHero>`
  background-image: url('/asset/hero.png');
  background-position: center;
  background-size: cover;
  padding: 20%;
`;

export const FooterHero = styled.div<T.StyleHero>`
  position: relative;
  background-color: ${({ theme }) => theme.color.dark};
  height: 5rem;
  display: flex;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    height: 8.5rem;
  }

  @media screen and (min-width: 1040px) {
    height: 12rem;
  }
`;
