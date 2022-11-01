'use client';

import * as S from './logo.style';
import type * as T from './logo.type';

const Logo = ({ imagePath, altLogo }: T.Logo) => {
  return <S.Logo alt={altLogo} src={imagePath} />;
};

export default Logo;
