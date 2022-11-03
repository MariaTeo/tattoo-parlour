'use client';

import * as S from './hero-image-list.style';
import type * as T from './hero-image-list.type';

const HeroImageList = ({ imgUrl, alt, description }: T.HeroImageList) => {
  return (
    <S.HeroList
      aria-label='Just some pictures with the technique of tebori'
      imgUrl={imgUrl}
      data-content={description}
    ></S.HeroList>
  );
};

export default HeroImageList;
