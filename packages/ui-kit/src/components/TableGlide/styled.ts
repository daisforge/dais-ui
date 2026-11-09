import DataEditor from '@glideappsfinal/glide-data-grid';
import styled from 'styled-components';

import { classNames } from './classNames';

export const StyledOverlayPortal = styled.div`
  [id^='gdg-overlay-'] {
    position: fixed;
    z-index: 9001;
    margin-left: calc(-1 * var(--gdg-portal-offset-x, 0px));
    margin-top: calc(-1 * var(--gdg-portal-offset-y, 0px));
  }

  /* Редактор ячейки выглядит как сама ячейка.
     Убираем скругления и тень Glide, синюю рамку рисуем внутри ячейки,
     потому что оверлей не выходит за её границы (см. EDITOR_BLOOM). */
  [id^='gdg-overlay-'].gdg-style {
    border-radius: 0;
    box-shadow: none;
    outline: 1px solid var(--gdg-accent-color);
    outline-offset: -1px;

    .gdg-clip-region {
      border-radius: 0;
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
