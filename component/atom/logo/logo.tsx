'use client';

import { Anchor } from '../anchor';
import * as S from './logo.style';
import type * as T from './logo.type';

const Logo = ({ altLogo, logo, footer }: T.Logo) => {
  return (
    <Anchor title='Go to the home page' href='/'>
      <S.Logo
        alt={altLogo || 'The logo of the page'}
        src='/asset/image/logo.png'
        width={footer ? '100' : '24'}
        footer={footer}
        height={footer ? '100' : '24'}
      />
    </Anchor>
  );
};

export default Logo;
