import styled from 'styled-components';
import type * as T from './flex.type';

const getGap = ({ gap }: T.FlexStyle) => (gap ? `gap: ${gap / 16}rem;` : '');

const getAlign = ({ align }: T.FlexStyle) =>
  align ? `align-items: ${align};` : '';

const getJustify = ({ justify }: T.FlexStyle) =>
  justify ? `justify-content: ${justify};` : '';

const getDirection = ({ vertical }: T.FlexStyle) =>
  vertical && `flex-direction: column;`;

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

  ${({ theme, nav }) =>
    nav ? `background-color: ${theme.color.rusticRed};` : ''};
`;
