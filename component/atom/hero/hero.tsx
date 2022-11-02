'use client';

import * as S from './hero.style';
import type * as T from './hero.type';

const Hero = ({ home }: T.Hero) => {
  console.log(home, '@@');
  const { homeHeroTitle, homeHeroSubTitle, heroImage, heroBottomImageList } =
    home;
  console.log(heroImage, 'HERO');
  return (
    <S.Hero img={heroImage}>
      <h1>hero</h1>
      <p>hey</p>
    </S.Hero>
  );
};

export default Hero;
