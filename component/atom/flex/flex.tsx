'use client';

import * as S from './flex.style';
import type * as T from './flex.type';

const Flex = ({
  children,
  vertical,
  gap,
  padding,
  nav,
  align,
  justify,
  hero,
}: T.Flex) => {
  return (
    <S.Flex
      hero={hero}
      justify={justify}
      vertical={vertical}
      nav={nav}
      align={align}
      gap={gap}
      padding={padding}
    >
      {children}
    </S.Flex>
  );
};

export default Flex;
