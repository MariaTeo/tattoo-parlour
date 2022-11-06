import React from 'react';
import type { ReactNode } from 'react';
import RootStyleRegistry from './root-style';
import { Global } from '@c/atom';
import Theme from '@c/theme/theme';
import { Nav, Footer } from '@c/molecule';
import * as S from '@c/atom/layout/layout.style';

const getData = async () => {
  const props = await (
    await fetch(
      'https://raw.githubusercontent.com/mariateo/tattoo-parlour/main/tattoo-parlour.data.json'
    )
  ).json();

  return props;
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const props = await getData();
  const { navMenu } = props;

  return (
    <html lang='en'>
      <head>
        <title>Welcome to Tattoo Parlour</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Find out more about tebari technique and japanese tattoo styles'
        />
      </head>
      <body>
        <Global font='Oswald' />
        <RootStyleRegistry>
          <Theme>
            <S.Layout>
              <Nav navMenu={navMenu} />
              {children}
              <Footer />
            </S.Layout>
          </Theme>
        </RootStyleRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
