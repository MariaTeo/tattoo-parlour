'use client';

import * as S from './logo.style';
import type * as T from './logo.type';

const Logo = ({ imagePath }: T.Logo) => {
  return <S.Logo imagePath={imagePath} />;
};

export default Logo;
