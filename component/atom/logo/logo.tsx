'use client';

import { Anchor } from '../anchor';
import * as S from './logo.style';
import type * as T from './logo.type';

const Logo = ({ altLogo, logo }: T.Logo) => {
  return (
    <Anchor title='Go to the home page' href='/'>
      <S.Logo aria-label={altLogo} logo={logo} />
    </Anchor>
  );
};

export default Logo;
