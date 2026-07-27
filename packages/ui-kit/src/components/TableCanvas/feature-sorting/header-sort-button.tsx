import { IconArrowDown, IconArrowUp, IconSwapVert } from '@ui-kit/icons';
import React from 'react';

import { HEADER_TOOLTIP_SORTING_ID } from '../feature-tooltip/constants';
import { Canvas, CanvasEl } from '../TableGlideInstance';
import { SortColumn } from './types';

type HeaderSortButtonProps = {
  columnKey: string;
  columnSorted: SortColumn | undefined;
  setSortState: React.Dispatch<React.SetStateAction<readonly SortColumn[]>>;
  /**
   * Акцентный цвет активной сортировки. Берём из темы canvas (theme.accentColor),
   * а не из токена: canvas не резолвит CSS-переменные.
   */
  accentColor: string;
};

/**
 * Render-функция для кнопки сортировки в canvas.
 *
 * ВАЖНО: Это не React компонент, а функция возвращающая Canvas.* элементы.
 * Нужно потому что buildNode в TableGlide не разворачивает обычные React компоненты.
 */
export const renderHeaderSortButton = ({
  columnKey,
  columnSorted,
  setSortState,
  accentColor
}: HeaderSortButtonProps): CanvasEl => {
  // По просьбе дизайна стрелка «наоборот»: ASC — вверх, DESC — вниз.
  const SortIcon =
    (columnSorted?.direction === 'ASC' && IconArrowUp) ||
    (columnSorted?.direction === 'DESC' && IconArrowDown) ||
    IconSwapVert;

  const isSortActive = !!columnSorted?.direction;

  /**
   * Обработчик клика - циклическое переключение сортировки:
   * undefined -> ASC -> DESC -> undefined
   */
  const handleClick = () => {
    const nextDirection =
      (columnSorted?.direction === undefined && 'ASC') ||
      (columnSorted?.direction === 'ASC' && 'DESC') ||
      undefined;

    setSortState?.(
      nextDirection
        ? [
            {
              columnKey,
              direction: nextDirection
            }
          ]
        : []
    );
  };

  return (
    // interaction: клик по этой кнопке НЕ должен выделять столбец в шапке
    // (getInteractionAtPoint в onHeaderClicked видит ноду и пропускает column-select).
    <Canvas.Container interaction={{ selection: 'keep', cellClick: 'stop' }}>
      <Canvas.EmbedIconButton
        buttonSize="xs" // FIXME: в дизайн макетах написано s, но если подставить s - будет много
        view="secondary"
        onClick={handleClick}
        icon={<SortIcon size="xs" />}
        // view secondary сам красит иконку; для активной перебиваем на акцент.
        iconColor={isSortActive ? accentColor : undefined}
        id={HEADER_TOOLTIP_SORTING_ID}
        portalHoverEnabled
      />
    </Canvas.Container>
  );
};
