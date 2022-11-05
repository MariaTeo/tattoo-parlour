'use client';

import { Flex, Text, Anchor, Logo } from '@c/atom';
import * as S from './footer.style';

const Footer = () => {
  return (
    <S.Footer>
      <Flex justify='space-between' align='center' gap={16} padding={[0, 32]}>
        <Flex vertical>
          <Anchor
            shadow
            color='rusticRed'
            link
            title='Go to about us page and find out more'
            href='/'
          >
            About Us
          </Anchor>
          <Anchor
            shadow
            color='rusticRed'
            link
            title='Go to about us page and find out more'
            href='/'
          >
            Frequent questions
          </Anchor>
          <Anchor
            shadow
            color='rusticRed'
            link
            title='Go to about us page and find out more'
            href='/'
          >
            Book a session
          </Anchor>
        </Flex>

        <Flex vertical gap={8}>
          <Text shadow as='h3'>
            Contact us:
          </Text>
          <Text shadow>Email: maria@wowdop.com</Text>
          <Text shadow>Phone number: 077********</Text>
          <Text shadow>&copy; Maria</Text>
        </Flex>
        <Logo footer />
      </Flex>
    </S.Footer>
  );
};

export default Footer;
