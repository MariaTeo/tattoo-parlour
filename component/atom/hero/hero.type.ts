export interface HomeImageList {
  title: string;
  description: string[];
}

export interface HeroBottomImageList {
  image: string;
  description: string[];
}

export interface HomeContent {
  homeHeroTitle: string;
  homeHeroSubTitle: string;
  heroImage: string;
  heroBottomImageList: HeroBottomImageList[];
  homeImageList: HomeImageList[];
}

export interface StyleHero {
  img?: string;
}

export interface Hero {
  home: HomeContent;
}
