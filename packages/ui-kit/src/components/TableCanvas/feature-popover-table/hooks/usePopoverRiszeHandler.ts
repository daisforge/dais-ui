import { throttleWithLastCall } from '@ui-kit/utils/throttle';
import { useCallback, useRef } from 'react';

import { TablePopoverContextValue } from '../context';

/** .
 * Хук для обработки ресайза колонки и обновления позиции поповера.
 *
 * Использует throttleWithLastCall для оптимизации производительности:
 * - Ограничивает частоту вызовов (по умолчанию 100ms)
 * - Гарантирует выполнение последнего вызова (точная итоговая позиция)
 */
export const usePopoverResizeHandler = (
  tablePopoverValue: TablePopoverContextValue,
) => {
  // Храним текущую ширину колонки для вычисления дельты
  const currentColumnWidthRef = useRef<Map<string, number>>(new Map());

  // Throttled функция обновления позиции
  const throttledUpdatePosition = useRef(
    throttleWithLastCall((newX: number) => {
      tablePopoverValue.updatePosition({
        x: newX,
        y: tablePopoverValue.state.position?.y ?? 0,
      });
    }, 100), // 100ms throttle для плавности
  );

  /**
   * Callback для обработки ресайза колонки.
   * Вызывается из TableGlide при изменении ширины колонки.
   *
   * Примечание: функционал временно не используется, так как поповер закрывается при scroll
   */
  const handleColumnResize = useCallback(
    (columnId: string, newWidth: number) => {
      const { state } = tablePopoverValue;

      // Проверяем: открыт ли поповер и совпадает ли колонка
      if (!state.isOpen || state.columnId !== columnId || !state.position) {
        return;
      }

      // Получаем предыдущую ширину колонки из Map
      const previousWidth = currentColumnWidthRef.current.get(columnId);

      // Если это первый resize после открытия поповера - сохраняем текущую ширину
      if (previousWidth === undefined) {
        currentColumnWidthRef.current.set(columnId, newWidth);
        return;
      }

      // Вычисляем на сколько изменилась ширина колонки
      const widthDelta = newWidth - previousWidth;

      // Иконка фильтра находится справа в колонке, поэтому при растягивании
      // колонки (widthDelta > 0) поповер должен сдвинуться вправо на ту же величину
      const newX = state.position.x + widthDelta;

      // Обновляем позицию (throttled)
      throttledUpdatePosition.current(newX);

      // Обновляем текущую ширину для следующего ресайза
      currentColumnWidthRef.current.set(columnId, newWidth);
    },
    [tablePopoverValue],
  );

  /**
   * Сохраняем начальную ширину колонки при открытии поповера.
   * Вызывать при открытии поповера в onOpenFilter.
   */
  const saveInitialColumnWidth = useCallback(
    (columnId: string, initialWidth: number) => {
      currentColumnWidthRef.current.set(columnId, initialWidth);
    },
    [],
  );

  /**
   * Очищаем сохраненные ширины при закрытии поповера.
   */
  const clearColumnWidths = useCallback(() => {
    currentColumnWidthRef.current.clear();
  }, []);

  return {
    handleColumnResize,
    saveInitialColumnWidth,
    clearColumnWidths,
  };
};
