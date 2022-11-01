'use client';
import React from 'react';
import type * as T from './text.type';
import * as S from './text.style';

const Text = ({ children, as }: T.Text) => {
  return <S.Text as={as}>{children}</S.Text>;
};

export default Text;
