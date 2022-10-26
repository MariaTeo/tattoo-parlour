import React from 'react';

interface HomeImageList {
  title: string;
  description: string[];
}

interface HeroBottomImageList {
  image: string;
  description: string[];
}

interface NavMenu {
  content: string;
  path: string;
  title: string;
}

interface Home {
  homeHeroTitle: string;
  homeHeroSubTitle: string;
  heroImage: string;
  heroBottomImageList: HeroBottomImageList[];
  homeImageList: HomeImageList[];
}

interface Data {
  title: string;
  logo: string;
  navMenu: NavMenu[];
  home: Home;
}

const getTattooData = async () => {
  const props: Data = await (
    await fetch(
      'https://raw.githubusercontent.com/mariateo/tattoo-parlour/main/tattoo-parlour.data.json'
    )
  ).json();
  return { props };
};

const Home = async () => {
  const data = await getTattooData();
  const { home } = data.props;

  return (
    <div>
      <h1>Welcome to news Next js v13</h1>
      {home.homeImageList.map(({ title, description }) => {
        return (
          <div>
            <h2>{title}</h2>
            {description.map((el) => {
              return <div>{el}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
