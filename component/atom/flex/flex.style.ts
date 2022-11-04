import styled from 'styled-components';
import type * as T from './flex.type';

const getGap = ({ gap }: T.FlexStyle) => (gap ? `gap: ${gap / 16}rem;` : '');

const getAlign = ({ align }: T.FlexStyle) =>
  align ? `align-items: ${align};` : '';

const getJustify = ({ justify }: T.FlexStyle) =>
  justify ? `justify-content: ${justify};` : '';

const getDirection = ({ vertical }: T.FlexStyle) =>
  vertical && `flex-direction: column;`;

const getWidth = ({ width }: T.FlexStyle) => (width ? `width: ${width};` : '');

const getPadding = ({ padding }: T.FlexStyle) => {
  const arr = Array.isArray(padding) ? padding : padding ? [padding] : [];
  return arr.length
    ? `padding: ${arr.map((el) => `${el / 16}rem`).join(' ')};`
    : '';
};

export const Flex = styled.div<T.FlexStyle>`
  display: flex;
  ${getGap}
  ${getPadding}
  ${getDirection}
  ${getJustify}
  ${getAlign}
  ${getWidth}

  ${({ theme, nav }) =>
    nav ? `background-color: ${theme.color.rusticRed};` : ''};
  ${({ hero }) => (hero ? ` padding: 40px;` : '')};

  @media screen and (min-width: 410px) {
    ${({ hero }) => (hero ? ` padding: 42px;` : '')};
    ${({ home }) => (home ? ` flex-direction: column;` : '')};
  }

  @media screen and (min-width: 450px) {
    ${({ hero }) => (hero ? ` padding: 55px;` : '')};
  }

  @media screen and (min-width: 480px) {
    ${({ hero }) => (hero ? ` padding: 56px;` : '')};
  }

  @media screen and (min-width: 540px) {
    ${({ hero }) => (hero ? ` padding: 62px;` : '')};
  }

  @media screen and (min-width: 610px) {
    ${({ hero }) => (hero ? ` padding: 70px;` : '')};
  }

  @media screen and (min-width: 670px) {
    ${({ hero }) => (hero ? ` padding: 70px;` : '')};
  }

  @media screen and (min-width: 730px) {
    ${({ hero }) => (hero ? ` padding: 88px;` : '')};
  }

  @media screen and (min-width: 875px) {
    ${({ hero }) => (hero ? ` padding: 105px;` : '')};
    ${({ home }) => (home ? ` flex-direction: row;` : '')};
  }

  @media screen and (min-width: 976px) {
    ${({ hero }) => (hero ? ` padding: 110px;` : '')};
  }

  @media screen and (min-width: 1010px) {
    ${({ hero }) => (hero ? ` padding: 130px;` : '')};
  }

  @media screen and (min-width: 1220px) {
    ${({ hero }) => (hero ? ` padding: 156px;` : '')};
  }

  @media screen and (min-width: 1440px) {
    ${({ hero }) => (hero ? ` padding: 200px;` : '')};
  }
`;
