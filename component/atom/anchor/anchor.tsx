'use client';

import * as S from './anchor.style';
import type * as T from './anchor.type';

const Anchor = ({ children, title, href }: T.Anchor) => {
  return (
    <S.Anchor title={title} href={href}>
      {children}
    </S.Anchor>
  );
};

export default Anchor;
