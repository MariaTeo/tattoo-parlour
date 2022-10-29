import { Anchor } from '@c/atom';
import { Nav } from '@c/molecule';
import React from 'react';
import { Text } from '../component';

interface HomeImageList {
  title: string;
  description: string[];
}

interface HeroBottomImageList {
  image: string;
  description: string[];
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
  const { home, title, logo, navMenu } = props;

  return (
    <div>
      <Nav navMenu={navMenu} />

      {home.homeImageList.map(({ title, description }) => {
        return (
          <div key={title}>
            <Text>{title}</Text>
            {description.map((el, k) => {
              return <div key={k}>{el}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
