import styled from 'styled-components';
import type * as T from './image-card.type';

export const StyleImage = styled.div<T.StyledImage>`
  background-image: url(${({ image }) => image});
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 200px;
  height: 200px;
  padding: 20%;
  border-radius: 8px;
  border: 6px ridge ${({ theme }) => theme.color.mercury};
  box-shadow: 0 0 90px #ccc;

  @media screen and (max-width: 500px) {
    padding: 50%;
  }
`;
