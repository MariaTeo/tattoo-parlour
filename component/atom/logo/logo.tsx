'use client';

import * as S from './logo.style';
import type * as T from './logo.type';

const Logo = ({ altLogo, logo }: T.Logo) => {
  return <S.Logo alt={altLogo} src='/asset/image/logo.png' />;
};

export default Logo;
