'use client';

import React from 'react';
import type * as T from './text.type';
import * as S from './text.style';

const Text = ({ children, as = 'p', color = 'dark' }: T.Text) => {
  return (
    <S.Text color={color} as={as}>
      {children}
    </S.Text>
  );
};

export default Text;
