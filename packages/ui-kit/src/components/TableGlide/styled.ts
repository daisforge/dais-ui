import DataEditor from '@glideappsfinal/glide-data-grid';
import styled from 'styled-components';

import { classNames } from './classNames';
import {
  EDITOR_BLOCK_BOTTOM_VAR,
  EDITOR_BLOCK_TOP_VAR,
  EDITOR_BOTTOM_LINE_VAR,
  EDITOR_TOP_LINE_VAR
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

  /* Когда таблица сама рисует рамку ячейки или блока, на время редактора рамку рисует
     редактор, а canvas её не рисует (TableGlide.tsx, drawFocusRing). Линии одной толщины
     на любом масштабе, стыков с линией canvas нет. Фон вплотную к краю, в ::before.
     ::after выходит за оверлей до краёв объединённого блока: края приходят переменными
     из обёртки, уже обрезанные по области данных. Верхняя и нижняя линии только у
     видимого края блока. При прокрутке с открытым редактором края блока
     пересчитывает обёртка, рамка едет за блоком. */
  &[data-focus-ring='true'] [id^='gdg-overlay-'].gdg-style {
    outline: none;
    background-color: transparent;
    /* Содержимое режет вложенный .gdg-clip-region, оверлею прятать нечего. */
    overflow: visible;

    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      inset: 0;
      background-color: var(--gdg-bg-cell);
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: min(0px, calc(var(${EDITOR_BLOCK_TOP_VAR}, var(--overlay-top)) - var(--overlay-top)));
      bottom: min(
        0px,
        calc(100% - (var(${EDITOR_BLOCK_BOTTOM_VAR}, var(--overlay-top)) - var(--overlay-top)))
      );
      /* Линии градиентами, а не бордером: градиент браузер сглаживает так же,
         как canvas свои линии, и на дробном масштабе рамка той же толщины, что
         остальные линии таблицы. Бордер он прижал бы к целому пикселю экрана,
         и на 150 % линия вышла бы тоньше. */
      background:
        linear-gradient(var(--gdg-accent-color), var(--gdg-accent-color)) left / 1px 100%
          no-repeat,
        linear-gradient(var(--gdg-accent-color), var(--gdg-accent-color)) right / 1px 100%
          no-repeat,
        linear-gradient(var(--gdg-accent-color), var(--gdg-accent-color)) top / 100%
          var(${EDITOR_TOP_LINE_VAR}, 1px) no-repeat,
        linear-gradient(var(--gdg-accent-color), var(--gdg-accent-color)) bottom / 100%
          var(${EDITOR_BOTTOM_LINE_VAR}, 1px) no-repeat;
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
