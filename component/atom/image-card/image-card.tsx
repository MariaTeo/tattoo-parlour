'use client';

import * as S from './image-card.style';
import type * as T from './image-card.type';

const ImageCard = ({ alt, image }: T.ImageCard) => {
  return <S.StyleImage aria-label={alt} image={image} />;
};

export default ImageCard;
