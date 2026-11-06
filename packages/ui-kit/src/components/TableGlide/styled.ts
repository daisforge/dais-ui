import DataEditor from '@glideappsfinal/glide-data-grid';
import styled from 'styled-components';

import { classNames } from './classNames';
import { EDITOR_BLOCK_BOTTOM_VAR } from './constants';

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

  /* Когда таблица сама рисует рамку ячейки или блока, редактор её не перекрывает:
     фон отступает от края, и контур везде одной толщины. На дробном масштабе экрана
     линии canvas и браузера выглядят по-разному, а линия canvas шире пикселя, поэтому
     отступ полторы линии, а своя линия у редактора только ниже блока, куда он вырос. */
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
      left: 0;
      right: 0;
      bottom: 0;
      top: calc(var(${EDITOR_BLOCK_BOTTOM_VAR}, 100%) - var(--overlay-top));
      border: 1px solid var(--gdg-accent-color);
      border-top: none;
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
