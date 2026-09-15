import { SetStateAction, useCallback, useMemo, useRef } from 'react';

import { frozenFirst } from './columnsRenderOrder';
import { computeGroupDepth, getMaxGroupLevels } from './groupDepth';
import { computeHiddenBoundaries } from './hiddenBoundaries';
import type { HiddenColumnsIndicatorExpandInfo } from './types';

/**
 * Индикатор скрытых столбцов: готовит колбэки для форка glide. Границы считаются
 * по общему стейту hiddenCols в порядке отрисовки, поэтому индикатор одинаково
 * реагирует на скрытие через сайдбар, контекстное меню продукта или программное
 * изменение стейта и корректно ведёт себя при закреплении и перестановке колонок.
 */
export const useHiddenColumnsIndicator = ({
  enabled,
  fullColumnsOrder,
  hiddenCols,
  pinnedCols,
  setHiddenCols,
  renderColKeys,
  groupPathByKey,
  onExpand,
}: {
  enabled: boolean;
  /** Полный порядок ключей, включая скрытые (скрытый столбец сохраняет своё место). */
  fullColumnsOrder: string[];
  hiddenCols: string[];
  /** Ключи закреплённых столбцов (в т. ч. скрытых), нужны, чтобы знать frozen-зону. */
  pinnedCols: string[];
  setHiddenCols: (value: SetStateAction<string[]>) => void;
  /** Готовый видимый порядок колонок грида (frozen-first) из useColumns. */
  renderColKeys: readonly string[];
  /** Ключ листа -> путь групп над ним. Для высоты полосы в сгруппированной шапке. */
  groupPathByKey: ReadonlyMap<string, string[]>;
  /** Внешнее уведомление о раскрытии промежутка по двойному клику. */
  onExpand?: (info: HiddenColumnsIndicatorExpandInfo) => void;
}) => {
  const boundaries = useMemo(() => {
    if (!enabled || hiddenCols.length === 0) return undefined;

    const visibleSet = new Set(renderColKeys);
    const hiddenSet = new Set(hiddenCols);
    const frozenSet = new Set(pinnedCols);

    // Полный порядок отрисовки (видимые и скрытые вместе) по тому же правилу
    // frozen-first, что и видимый порядок в useColumns. Фантомные ключи (нет ни в
    // гриде, ни в скрытых, например отфильтрованные не через hiddenCols) отбрасываем,
    // чтобы они не считались отдельной видимой колонкой и не рвали промежуток.
    const fullRenderOrder = frozenFirst(
      fullColumnsOrder.filter(
        (key) => visibleSet.has(key) || hiddenSet.has(key),
      ),
      (key) => frozenSet.has(key),
    );

    const rawBoundaries = computeHiddenBoundaries({
      fullRenderOrder,
      hiddenCols,
    });

    // Для каждой границы считаем высоту полосы (groupDepth) по модели «минимум из
    // хотелки скрытых и разрешения соседей». Граница col — щель слева от видимой
    // колонки col, соседи это renderColKeys[col-1] и renderColKeys[col].
    const levels = getMaxGroupLevels(groupPathByKey);
    const result = new Map<number, { keys: string[]; groupDepth: number }>();
    rawBoundaries.forEach((keys, col) => {
      result.set(col, {
        keys,
        groupDepth: computeGroupDepth({
          hiddenKeys: keys,
          leftKey: col > 0 ? renderColKeys[col - 1] : undefined,
          rightKey: col < renderColKeys.length ? renderColKeys[col] : undefined,
          groupPathByKey,
          levels,
        }),
      });
    });
    return result;
  }, [
    enabled,
    fullColumnsOrder,
    hiddenCols,
    pinnedCols,
    renderColKeys,
    groupPathByKey,
  ]);

  const boundariesRef = useRef(boundaries);
  boundariesRef.current = boundaries;
  const renderColKeysRef = useRef(renderColKeys);
  renderColKeysRef.current = renderColKeys;
  const onExpandRef = useRef(onExpand);
  onExpandRef.current = onExpand;

  const hiddenColumnsIndicator = useMemo(() => {
    if (!boundaries || boundaries.size === 0) return undefined;
    return (col: number) => {
      const entry = boundaries.get(col);
      if (!entry) return 0;
      return { count: entry.keys.length, groupDepth: entry.groupDepth };
    };
  }, [boundaries]);

  // Двойной клик по индикатору раскрывает весь промежуток скрытых столбцов и
  // уведомляет потребителя о том, что именно раскрылось.
  const onHiddenColumnsIndicatorClicked = useCallback(
    (col: number) => {
      const keys = boundariesRef.current?.get(col)?.keys;
      if (!keys || keys.length === 0) return;

      const cols = renderColKeysRef.current;
      // Граница col это щель слева от видимой колонки col. Левый сосед col-1,
      // правый сосед col; на краях таблицы соответствующего соседа нет.
      onExpandRef.current?.({
        keys: [...keys],
        leftKey: col > 0 ? cols[col - 1] : undefined,
        rightKey: col < cols.length ? cols[col] : undefined,
      });

      const gap = new Set(keys);
      setHiddenCols((prev) => prev.filter((k) => !gap.has(k)));
    },
    [setHiddenCols],
  );

  return { hiddenColumnsIndicator, onHiddenColumnsIndicatorClicked };
};
