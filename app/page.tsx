import React from 'react';
import { Hero, ImageCard, Flex, Text, Pill, Space } from '@c/atom';

interface HomeImageList {
  title: string;
  alt: string;
  image: string;
  description: string[];
}

interface HeroBottomImageList {
  image: string;
  alt: string;
  description: string;
}

interface Home {
  homeHeroTitle: string;
  homeHeroSubTitle: string;
  heroImage: string;
  heroBottomImageList: HeroBottomImageList[];
  homeImageList: HomeImageList[];
}

interface NavMenuLinkList {
  content: string;
  path: string;
  title: string;
}
interface NavMenu {
  title?: string;
  logo?: string;
  navMenuLinks?: NavMenuLinkList[];
}
interface Data {
  altLogo?: string;
  title: string;
  logo: string;
  navMenu: NavMenu;
  home: Home;
}

const getTattooData = async () => {
  const props: Data = await (
    await fetch(
      'https://raw.githubusercontent.com/mariateo/tattoo-parlour/main/tattoo-parlour.data.json'
    )
  ).json();
  return props;
};

const Home = async () => {
  const props = await getTattooData();
  const { home } = props;
  const { homeImageList } = home;

  return (
    <>
      <Hero home={home} />

      <Flex
        gap={32}
        align='center'
        vertical
        justify='center'
        padding={[48, 32]}
      >
        {homeImageList.map(({ title, description, image, alt }, key) => {
          return (
            <Flex home width='80%' align='center' key={key} gap={32}>
              <ImageCard image={image} alt={alt} />

              <Flex align='center' gap={16} vertical>
                <Pill>{title}</Pill>
                {description.map((el, key) => {
                  return <Text key={key}>{el}</Text>;
                })}
              </Flex>
            </Flex>
          );
        })}
      </Flex>

      <Space height={200} />
    </>
  );
};

export default Home;
