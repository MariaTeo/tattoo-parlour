'use client';

import * as S from './anchor.style';
import type * as T from './anchor.type';
import Text from '../text/text';

const Anchor = ({ children, title, href, color }: T.Anchor) => {
  return (
    <S.Anchor title={title} href={href}>
      <Text color={color}>{children}</Text>
    </S.Anchor>
  );
};

export default Anchor;
