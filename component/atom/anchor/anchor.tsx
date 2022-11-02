'use client';

import * as S from './anchor.style';
import type * as T from './anchor.type';
import Text from '../text/text';

const Anchor = ({ children, title, href, color, link }: T.Anchor) => {
  return (
    <S.Anchor title={title} href={href} link={link}>
      {link && <Text color={color}>{children}</Text>}
      {!link && children}
    </S.Anchor>
  );
};

export default Anchor;
