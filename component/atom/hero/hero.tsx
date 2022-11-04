'use client';

import * as S from './hero.style';
import type * as T from './hero.type';
import { Flex, Text, HeroImageList } from '@c/atom';

const Hero = ({ home }: T.Hero) => {
  console.log(home, '@@');
  const { homeHeroTitle, homeHeroSubTitle, heroImage, heroBottomImageList } =
    home;
  console.log(heroImage, 'HERO');
  return (
    <>
      <S.Hero img={heroImage}>
        <Flex vertical gap={8}>
          <Text as='h1' shadow>
            {homeHeroTitle}
          </Text>
          <Text shadow>{homeHeroSubTitle}</Text>
        </Flex>
      </S.Hero>
      <S.FooterHero>
        {heroBottomImageList.map(({ image, description, alt }, key) => {
          return (
            <Flex hero key={key}>
              <HeroImageList
                imgUrl={image}
                alt={alt}
                description={description}
              />
            </Flex>
          );
        })}
      </S.FooterHero>
    </>
  );
};

export default Hero;
