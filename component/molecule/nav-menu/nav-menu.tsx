'use client';

import * as S from './nav-menu.style';
import type * as T from './nav-menu.type';
import { Logo, Text, Flex } from '../../atom';
import { Anchor } from '@c/atom';

const Nav = ({ navMenu, children }: T.Nav) => {
  console.log(navMenu, 'show me');
  const { logo, altLogo, title, navMenuLinks } = navMenu;
  return (
    <Flex nav justify='space-between' align='center'>
      <Flex gap={16} align='center' padding={[8]}>
        <Logo altLogo={altLogo} logo={logo} />
        <Text as='h1' color='mercury'>
          {title}
        </Text>
      </Flex>

      <Flex gap={16} padding={[8, 16]}>
        {navMenuLinks?.map(({ content, path, title }, key) => {
          return (
            <Anchor color='mercury' href={path} title={title} key={key}>
              {content}
            </Anchor>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Nav;
