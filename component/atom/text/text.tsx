'use client';
import React from 'react';
import type * as T from './text.type';
import * as S from './text.style';

const Text = ({ children }: T.Text) => {
  return <S.Text>{children}</S.Text>;
};

export default Text;
