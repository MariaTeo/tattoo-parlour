'use client';

import * as S from './space.style';
import type * as T from './space.type';

const Space = ({ height }: T.Space) => {
  return <S.Space height={height} />;
};

export default Space;
