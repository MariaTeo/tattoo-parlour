'use client';

import * as S from './logo.style';
import type * as T from './logo.type';

const Logo = ({ altLogo, logo }: T.Logo) => {
  return <S.Logo aria-label={altLogo} logo={logo} />;
};

export default Logo;
