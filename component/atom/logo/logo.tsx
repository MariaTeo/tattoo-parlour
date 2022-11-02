'use client';

import Image from 'next/image';
import { Anchor } from '../anchor';
import * as S from './logo.style';
import type * as T from './logo.type';

const Logo = ({ altLogo, logo }: T.Logo) => {
  return (
    <Anchor title='Go to the home page' href='/'>
      <Image
        alt={altLogo || 'The logo of the page'}
        src='/asset/image/logo.png'
        width='24'
        height='24'
      />
    </Anchor>
  );
};

export default Logo;
