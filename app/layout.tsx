import React from 'react';
import type { ReactNode } from 'react';
import RootStyleRegistry from './root-style';
import { Global } from '@c/atom';
import Theme from '@c/theme/theme';
import { Nav } from '@c/molecule';

interface NavMenuLinkList {
  content: string;
  path: string;
  title: string;
}

interface NavMenu {
  title?: string;
  logo?: string;
  altLogo?: string;
  navMenuLinks?: NavMenuLinkList[];
}

interface Data {
  navMenu: NavMenu;
}

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

  console.log(props, 'layout?');
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
            <>
              <Nav navMenu={navMenu} />
              {children}
            </>
          </Theme>
        </RootStyleRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
