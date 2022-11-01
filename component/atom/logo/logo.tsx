'use client';

import * as S from './logo.style';
import type * as T from './logo.type';

const Logo = ({ imagePath, altLogo }: T.Logo) => {
  return <S.Logo aria-label={altLogo} imagePath={imagePath} />;
};

export default Logo;
