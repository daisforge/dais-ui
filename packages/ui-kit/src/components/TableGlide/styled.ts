import DataEditor from '@glideappsfinal/glide-data-grid';
import styled from 'styled-components';

import { classNames } from './classNames';
import { EDITOR_BLOCK_BOTTOM_VAR, EDITOR_BLOCK_TOP_VAR } from './constants';

export const StyledOverlayPortal = styled.div`
  [id^='gdg-overlay-'] {
    position: fixed;
    z-index: 9001;
    margin-left: calc(-1 * var(--gdg-portal-offset-x, 0px));
    margin-top: calc(-1 * var(--gdg-portal-offset-y, 0px));
  }

  /* Редактор ячейки выглядит как сама ячейка.
     Убираем скругления и тень Glide, синюю рамку рисуем внутри ячейки,
     потому что оверлей не выходит за её границы (см. EDITOR_BLOOM).
     Рамка охватывает весь блок и редактор, а оверлей обрезает её по себе. Внутри
     блока у редактора нет своих линий сверху и снизу, контур остаётся один. Если
     редактор вырос за блок, низ рамки идёт по его низу. У обычной ячейки блок
     совпадает с редактором. */
  [id^='gdg-overlay-'].gdg-style {
    border-radius: 0;
    box-shadow: none;

    .gdg-clip-region {
      border-radius: 0;
    }

    &::after {
      --editor-contour-top: calc(
        var(${EDITOR_BLOCK_TOP_VAR}, var(--overlay-top)) - var(--overlay-top)
      );
      content: '';
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: var(--editor-contour-top);
      height: calc(
        max(100%, var(${EDITOR_BLOCK_BOTTOM_VAR}, 0px) - var(--overlay-top)) -
          var(--editor-contour-top)
      );
      box-sizing: border-box;
      border: 1px solid var(--gdg-accent-color);
      pointer-events: none;
    }
  }
`;

export const StyledGlideDataEditor = styled(DataEditor)<{}>`
  /* &:not(.${classNames.glideScroller}) {
    border: 1px solid ${'red'};
  } */
` as typeof DataEditor;
/* .${classNames.glideScroller} {
    ${scrollbarStyles}
  } */
