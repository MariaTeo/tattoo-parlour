'use client';

import * as S from './pill.style';
import type * as T from './pill.type';
import { Text } from '@c/atom';

const Pill = ({ color, children, bgColor }: T.Pill) => {
  return (
    <S.Pill color={color} bgColor={bgColor}>
      <Text color='light' as='h1'>
        {children}
      </Text>
    </S.Pill>
  );
};

export default Pill;
