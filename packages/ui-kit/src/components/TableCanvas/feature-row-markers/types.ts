import type { ObjectForExtending } from '../types';

/** Запись в allRowsMap — метаданные строки для стабильной нумерации rowMarkers. */
export type AllRowsMapEntry<RowType> = {
  row: RowType;
  /** Стабильный порядковый индекс в полном дереве (0-based). */
  index: number;
  /** Индекс среди корневых строк (0-based). null если строка не корневая. */
  rootIndex: number | null;
  /** Порядковый номер среди siblings одного родителя (0-based). */
  siblingIndex: number;
  /** Ключ родительской строки. null для корневых. */
  parentKey: string | number | null;
};
/**
 * Внутренняя конфигурация столбца нумерации строк.
 * Совпадает с публичным `RowMarkersTableConfig` — см. его JSDoc для полного описания API.
 *
 * @see {@link RowMarkersTableConfig} — публичный тип в `table-config.type.ts`.
 */

export type RowMarkersConfig<
  RowType extends ObjectForExtending = ObjectForExtending
> = {
  /**
   * Стартовый индекс нумерации (для дефолтной логики без getRowMarker).
   * @default 1
   */
  startIndex?: number;
  /**
   * Ширина столбца с нумерацией (в px).
   * Если задан `size` — он приоритетнее.
   * @default 32
   */
  width?: number;
  /**
   * Размер столбца. Приоритетнее `width`.
   * xs = 20px, s = 32px, m = 48px.
   */
  size?: 'xs' | 's' | 'm';
  /**
   * Кастомная функция нумерации. Если не задана — root-only (корневые нумеруются, дочерние пустые).
   *
   * @param args.rowIndex — индекс в видимых строках (меняется при сворачивании)
   * @param args.flatIndex — стабильный 0-based индекс в полном дереве (НЕ меняется при сворачивании)
   * @param args.siblingIndex — порядковый номер среди siblings одного родителя (0-based)
   * @param args.parentKey — ключ родительской строки (null для корневых)
   */
  getRowMarker?: (args: {
    row: RowType;
    level: number;
    isSubRow: boolean;
    rowIndex: number;
    flatIndex: number;
    siblingIndex: number;
    parentKey: string | number | null;
    rows: readonly RowType[];
  }) => string | number;
};
