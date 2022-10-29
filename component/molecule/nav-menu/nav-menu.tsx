'use client';

import * as S from './nav-menu.style';
import type * as T from './nav-menu.type';
import { Logo, Text, Flex } from '../../atom';
import { Anchor } from '@c/atom';

const Nav = ({ navMenu, children }: T.Nav) => {
  console.log(navMenu, 'show me');
  const { logo, title, navMenuLinks } = navMenu;
  return (
    <Flex nav justify='space-between' align='center'>
      <Flex gap={16} align='center' padding={[8]}>
        <Logo imagePath={logo} />
        <Text>{title}</Text>
      </Flex>

      <Flex gap={16} padding={[8]}>
        {navMenuLinks?.map(({ content, path, title }, key) => {
          return (
            <Anchor href={path} title={title} key={key}>
              {content}
            </Anchor>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Nav;
