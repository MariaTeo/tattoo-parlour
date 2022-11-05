import styled from 'styled-components';
import type * as T from './hero-image-list.type';

export const HeroList = styled.div<T.HeroImageList>`
  background-image: url(${({ imgUrl }) => imgUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
  position: absolute;
  top: -50px;
  border-radius: 6px;
  border: 8px ridge ${({ theme }) => theme.color.mercury};
  padding: 0.5rem;

  &::after {
    content: attr(data-content);

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    text-shadow: ${({ theme }) => theme.textShadow};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    width: 100%;
    height: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    overflow-y: scroll;
    animation: fadeIn 6s;
  }

  @media screen and (min-width: 768px) {
    &::after {
      font-size: 16px;
    }

    width: 180px;
    height: 180px;
    top: -80px;
    padding: 1rem;
  }

  @media screen and (min-width: 1040px) {
    &::after {
      font-size: 20px;
    }

    width: 200px;
    height: 200px;
    top: -96px;
    padding: 2rem;
  }

  @media screen and (min-width: 1240px) {
    &::after {
      font-size: 20px;
    }

    width: 300px;
    height: 300px;
    top: -150px;
    padding: 2rem;
  }
`;
