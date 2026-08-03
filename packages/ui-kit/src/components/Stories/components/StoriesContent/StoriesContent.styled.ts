import { surfaceSolidCard } from '@ui-kit/tokens/color';
import styled from 'styled-components';

import { STORIES_SIZES } from '../../Stories.constants';
import { StoriesObjectFit } from '../../Stories.types';

export const StyledContent = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${surfaceSolidCard};
`;

export const StyledImage = styled.img<{
  $objectFit: StoriesObjectFit;
  $loaded: boolean;
}>`
  width: 100%;
  height: 100%;
  object-fit: ${({ $objectFit }) => $objectFit};
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 0.2s ease;
  user-select: none;
`;

export const StyledSpinner = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/** Слот error-state: те же отступы 28px, что и у интерактива баннера. */
export const StyledErrorSlot = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${STORIES_SIZES.bannerPadding}px;
`;
