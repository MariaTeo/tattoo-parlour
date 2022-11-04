'use client';

import * as S from './image.style';
import type * as T from './image.type';

const Image = ({ src, width, height, alt }: T.Image) => {
  return <S.StyleImage src={src} width={width} height={height} alt={alt} />;
};

export default Image;
