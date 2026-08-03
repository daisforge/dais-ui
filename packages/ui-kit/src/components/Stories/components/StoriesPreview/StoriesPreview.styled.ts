import { textAccent } from '@ui-kit/tokens/color';
import { shadowDownSoftL } from '@ui-kit/tokens/shadow';
import styled, { css } from 'styled-components';

import {
  STORIES_PREVIEW_FALLBACK_BG,
  STORIES_RING_GRADIENT,
  STORIES_SIZES,
} from '../../Stories.constants';
import { StoriesShape } from '../../Stories.types';

const C = {
  ring: () => STORIES_RING_GRADIENT,
  fallback: () => STORIES_PREVIEW_FALLBACK_BG,
  boxShadow: () => shadowDownSoftL,
};

const radiusFor = (shape: StoriesShape, level: 'outer' | 'body'): string => {
  if (shape === 'circle') return '50%';
  const map = {
    outer: STORIES_SIZES.rectRadiusOuter,
    body: STORIES_SIZES.rectRadiusBody,
  };
  return `${map[level]}px`;
};

export const StyledPreview = styled.div<{ $width: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ $width }) => $width}px;
`;

export const StyledTrigger = styled.button<{
  $width: number;
  $height: number;
  $shape: StoriesShape;
}>`
  position: relative;
  display: block;
  box-sizing: border-box;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  border-radius: ${({ $shape }) => radiusFor($shape, 'outer')};
  outline: none;

  &:focus-visible {
    outline: 2px solid ${textAccent};
    outline-offset: 2px;
  }
`;

/**
 * Градиентное кольцо. Через mask градиент виден ТОЛЬКО в толщине кольца (padding),
 * центр прозрачный — поэтому между кольцом и телом просвечивает фон страницы.
 */
export const StyledRing = styled.div<{ $shape: StoriesShape }>`
  position: absolute;
  inset: 0;
  box-sizing: border-box;
  padding: ${STORIES_SIZES.ring}px;
  background: ${C.ring};
  border-radius: ${({ $shape }) => radiusFor($shape, 'outer')};
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
`;

/**
 * Тело триггера (превью-картинка / заглушка). Отдельный слой поверх кольца:
 * при `viewed` занимает весь триггер, иначе отступает на 2px кольца + 2px зазора.
 */
export const StyledBody = styled.div<{
  $shape: StoriesShape;
  $viewed: boolean;
  $image?: string;
}>`
  position: absolute;
  inset: ${({ $viewed }) => ($viewed ? 0 : STORIES_SIZES.ring * 2)}px;
  box-sizing: border-box;
  box-shadow: ${C.boxShadow};
  background-color: ${C.fallback};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  ${({ $image }) =>
    $image &&
    css`
      background-image: url(${$image});
    `}
  border-radius: ${({ $shape, $viewed }) =>
    radiusFor($shape, $viewed ? 'outer' : 'body')};
`;

export const StyledTitle = styled.div<{ $align: string }>`
  margin-top: ${STORIES_SIZES.titleGap}px;
  width: 100%;
  text-align: ${({ $align }) => $align};

  /* Текстовый блок на всю ширину — иначе text-align (влево/вправо) не имеет пространства. */
  & > * {
    width: 100%;
  }
`;
