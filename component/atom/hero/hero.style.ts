import styled from 'styled-components';
import type * as T from './hero.type';

export const Hero = styled.div<T.StyleHero>`
  background-image: url(${({ img }) => img});
`;
