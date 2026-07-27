import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState
} from 'react';

import { TABLE_BUBBLES } from '../constants';
import { ObjectForExtending } from '../types';
import { ColumnConfigInternal } from '../types/column-config-internal.type';

/**
 * при изменении количества колонок таблица автоматически не пересчитывает ширину колонок. Автоматическое пересчитываение происходит только при измении ширины таблицы
 * */
export const useRecalculateColumnsWidth = <
  RowType extends ObjectForExtending,
  SummaryRowType
>(
  reorderedColumns: readonly ColumnConfigInternal<RowType, SummaryRowType>[],
  refTableContainer?: React.RefObject<HTMLElement>
) => {
  const [widthOfTable, setWidthOfTable] = useState<string | null>(null);
  // reorderedColumnsKeys - для отслеживания изменения порядка и количества колонок
  const reorderedColumnsKeys = useMemo(
    () => reorderedColumns.map((c) => c.key).join(','),
    [reorderedColumns]
  );

  const recalculate = useCallback(() => {
    setWidthOfTable(`calc(100% - 0.005px)`);
    const timer = setTimeout(() => setWidthOfTable(null), 50);
    return () => clearTimeout(timer);
  }, []);

  // Автоматическая рекалькуляция при изменении колонок
  useLayoutEffect(() => {
    recalculate();
  }, [reorderedColumnsKeys, recalculate]);

  // Подписка на кастомные события
  useEffect(() => {
    if (!refTableContainer?.current) return undefined; // Явный return undefined (esLint)

    const tableElement = refTableContainer.current;
    const eventName = TABLE_BUBBLES.recalculateWidth;

    tableElement.addEventListener(eventName, recalculate);

    return () => {
      tableElement.removeEventListener(eventName, recalculate);
    };
  }, [refTableContainer, recalculate]);

  return { widthOfTable };
};
