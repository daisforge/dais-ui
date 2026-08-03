import { IconSettingsFilter } from '@ui-kit/icons';
import { textSecondary } from '@ui-kit/tokens';
import React from 'react';

import { HeaderContextValueTypeInstance } from '../../contexts';
import { HEADER_TOOLTIP_FILTER_ID } from '../../feature-tooltip/constants';
import {
  Canvas,
  CanvasEl,
  CanvasEmbedIconButtonProps,
} from '../../TableGlideInstance';
import { ColumnConfig, ObjectForExtending } from '../../types';

/**
 * Проверяет, активен ли фильтр для колонки.
 * Сравнивает текущее значение фильтра с "очищенным" значением.
 */
export const checkIsFilterActive = <
  FilterStateType extends ObjectForExtending,
  R extends ObjectForExtending,
  SR,
>(
  columnConfig: ColumnConfig<R, SR>,
  filters: HeaderContextValueTypeInstance<FilterStateType>['filters'],
  clearedFiltersValue: HeaderContextValueTypeInstance<FilterStateType>['clearedFiltersValue'],
): boolean => {
  const keyInFiltersState = columnConfig.filtering?.keyInFilterState;

  if (!keyInFiltersState) {
    return false;
  }

  const currentV = filters?.[keyInFiltersState];
  const clearedV = clearedFiltersValue?.[keyInFiltersState];

  if (columnConfig.filtering?.component === 'custom') {
    const customFiltering = columnConfig.filtering;

    if (customFiltering.compareWithClearedValue) {
      return !customFiltering.compareWithClearedValue(clearedV, currentV);
    }
    return JSON.stringify(currentV) !== JSON.stringify(clearedV);
  }

  const columnFilter =
    columnConfig.filtering?.component === 'input' ||
    columnConfig.filtering?.component === 'select'
      ? columnConfig.filtering.filter
      : undefined;

  const isMultipleFilter =
    typeof columnFilter === 'object' && columnFilter.typeOfValue === 'multiple';

  if (isMultipleFilter) {
    if (!Array.isArray(clearedV)) {
      return true;
    }
    return !(
      currentV.length === clearedV.length &&
      currentV.sort().join() === clearedV.sort().join()
    );
  }

  return currentV !== clearedV;
};

/**
 * Render-функция для кнопки фильтрации в canvas.
 *
 * ВАЖНО: Это не React компонент, а функция возвращающая Canvas.* элементы.
 * Нужно потому что buildNode в TableGlide не разворачивает обычные React компоненты.
 *
 * @param isFilterActive - активен ли фильтр (красная точка)
 * @param onClick - обработчик клика
 */
export const renderHeaderFilterButton = ({
  isFilterActive,
  onClick,
}: {
  isFilterActive: boolean;
  onClick: NonNullable<CanvasEmbedIconButtonProps['onClick']>;
}): CanvasEl => (
  // interaction: клик по этой кнопке НЕ должен выделять столбец в шапке
  // (getInteractionAtPoint в onHeaderClicked видит ноду и пропускает column-select).
  <Canvas.Container interaction={{ selection: 'keep', cellClick: 'stop' }}>
    <Canvas.EmbedIconButton
      buttonSize="xs" // FIXME: в дизайн макетах написано s, но если подставить s - будет много
      view={isFilterActive ? 'accent' : 'secondary'}
      onClick={onClick}
      icon={<IconSettingsFilter size="xs" color={textSecondary} />}
      id={HEADER_TOOLTIP_FILTER_ID}
      portalHoverEnabled
    />
  </Canvas.Container>
);
