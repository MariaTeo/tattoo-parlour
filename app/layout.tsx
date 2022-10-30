import React, { Fragment } from 'react';
import type { ReactNode } from 'react';
import RootStyleRegistry from './root-style';
import { Global } from '@c/atom';
import Theme from '@c/theme/theme';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
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
            <>{children}</>
          </Theme>
        </RootStyleRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
