'use client';

import React from 'react';
import type { ReactNode } from 'react';
import RootStyleRegistry from './root-style';

const RootLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <html>
      <head>
        <title>Welcome to Tattoo Parlour</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
        <meta
          name='description'
          content='Find out more about tebari technique and japanese tattoo styles'
        />
      </head>
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
