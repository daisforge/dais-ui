import DataEditor from '@glideappsfinal/glide-data-grid';
import styled from 'styled-components';

import { classNames } from './classNames';
import {
  EDITOR_BLOCK_BOTTOM_VAR,
  EDITOR_BLOCK_TOP_VAR,
  EDITOR_SCROLLED_ATTR
} from './constants';

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

  /* Когда таблица сама рисует рамку ячейки или блока, фон редактора отступает от края:
     поверх линии canvas своя линия не меняет толщину на дробном масштабе экрана.
     Боковые линии есть всегда. Верхняя и нижняя тоже, кроме объединённого блока:
     там они появляются, только когда край редактора вышел за блок или таблицу прокрутили. */
  &[data-focus-ring='true'] [id^='gdg-overlay-'].gdg-style {
    outline: none;
    background-color: transparent;

    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      inset: 1.5px;
      background-color: var(--gdg-bg-cell);
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      border-inline: 1px solid var(--gdg-accent-color);
      background:
        linear-gradient(var(--gdg-accent-color), var(--gdg-accent-color)) top / 100%
          clamp(0px, var(${EDITOR_BLOCK_TOP_VAR}, 100vh) - var(--overlay-top), 1px) no-repeat,
        linear-gradient(var(--gdg-accent-color), var(--gdg-accent-color)) bottom / 100%
          clamp(0px, 100% - (var(${EDITOR_BLOCK_BOTTOM_VAR}, 0px) - var(--overlay-top)), 1px)
          no-repeat;
      pointer-events: none;
    }

    &[${EDITOR_SCROLLED_ATTR}]::after {
      background-size: 100% 1px;
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
