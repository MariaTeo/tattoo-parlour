'use client';

import React from 'react';
import type * as T from './text.type';
import * as S from './text.style';

const Text = ({ children, as = 'p', color, shadow }: T.Text) => {
  return (
    <S.Text color={color} as={as} shadow={shadow}>
      {children}
    </S.Text>
  );
};

export default Text;
