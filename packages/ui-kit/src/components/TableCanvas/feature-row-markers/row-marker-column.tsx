import { SIZE } from '@ui-kit/components/TableCanvas';
import React from 'react';

import { getTreeIdAndLvlOfRow } from '../feature-tree/handlers';
import { Canvas, type CellInfoGlideInstance } from '../TableGlideInstance';
import type { ColumnConfigInternal } from '../types/column-config-internal.type';
import type { ObjectForExtending } from '../types/utils.type';
import { ROW_MARKER_COLUMN_KEY } from './constants';
import type { AllRowsMapEntry } from './types';
import { buildSiblingPath, getDefaultMarker } from './utils';

/** Маппинг size → width (px). */
const SIZE_TO_WIDTH: Record<string, number> = {
  xs: 20,
  s: 32,
  m: 48
};

/** Маппинг глобального rowSize таблицы → width (px) для столбца нумерации. */
const ROW_SIZE_TO_WIDTH: Record<SIZE, number> = {
  small: 20,
  medium: 32,
  big: 48
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
  /** Текущий глобальный размер строк таблицы. Фоллбэк для ширины, если не задан size/width. */
  rowSize?: SIZE;
  /**
   * Кастомная функция нумерации. Если не задана — root-only (корневые нумеруются, дочерние пустые).
   * @see {@link RowMarkersTableConfig} — полное описание аргументов и примеры.
   */
  getRowMarker?: (args: {
    row: RowType;
    level: number;
    isSubRow: boolean;
    rowIndex: number;
    flatIndex: number;
    siblingIndex: number;
    siblingPath: number[];
    parentKey: string | number | null;
    rows: readonly RowType[];
  }) => string | number;
};

/**
 * Фабрика сервисной колонки нумерации строк.
 * Паттерн аналогичен CheckboxColumn: frozen, вставляется первой, исключена из reorder/pin/hide/sort/grouping.
 *
 * Использует ref для обхода циклической зависимости хуков
 * (useColumns вызывается ДО useFlattenedRows):
 * - rowsRef — видимые строки
 * - allRowsMapRef — Map ВСЕХ строк (включая скрытые), для стабильной нумерации
 */
export const createRowMarkerColumn = <RowType extends ObjectForExtending>(
  config: RowMarkersConfig<RowType> & {
    /** Ref на массив flattened rows (только видимые). */
    rowsRef: React.MutableRefObject<readonly RowType[]>;
    /**
     * Ref на Map всех строк (включая скрытые/свёрнутые).
     * Ключ = rowKey, значение = AllRowsMapEntry.
     * Может быть null, если subRows не используется.
     */
    allRowsMapRef: React.MutableRefObject<Map<
      string | number,
      AllRowsMapEntry<RowType>
    > | null>;
    /** Функция получения ключа строки (из tableConfig.subRows.rowKeyGetter). */
    rowKeyGetter?: (row: RowType) => string | number;
  }
): ColumnConfigInternal<ObjectForExtending, unknown> => {
  const {
    startIndex = 1,
    rowsRef,
    allRowsMapRef,
    rowKeyGetter,
    getRowMarker,
    rowSize
  } = config;

  // Приоритет ширины: size → width → rowSize → 28px (дефолт)
  const resolvedWidth =
    SIZE_TO_WIDTH[config.size ?? ''] ??
    config.width ??
    (rowSize ? ROW_SIZE_TO_WIDTH[rowSize] : undefined) ??
    32;

  const renderCell = (props: CellInfoGlideInstance<ObjectForExtending>) => {
    const { row, rowInd, theme } = props;
    const rows = rowsRef.current;
    const allRowsMap = allRowsMapRef.current;

    // Находим запись в allRowsMap для текущей строки
    const rowKey = rowKeyGetter?.(row as RowType);
    const entry =
      rowKey != null && allRowsMap ? allRowsMap.get(rowKey) : undefined;

    // flatIndex — стабильный 0-based индекс в полном дереве
    const flatIndex = entry?.index ?? rowInd;

    const { lvl } = getTreeIdAndLvlOfRow(row as RowType);

    const siblingPath =
      entry && allRowsMap
        ? buildSiblingPath(entry, allRowsMap)
        : [entry?.siblingIndex ?? 0];

    const marker = getRowMarker
      ? getRowMarker({
          row: row as RowType,
          level: lvl,
          isSubRow: lvl > 0,
          rowIndex: rowInd,
          flatIndex,
          siblingIndex: entry?.siblingIndex ?? 0,
          siblingPath,
          parentKey: entry?.parentKey ?? null,
          rows
        })
      : getDefaultMarker(lvl, rowInd, entry, startIndex);

    return (
      <Canvas.Container
        justifyContent="center"
        alignItems="center"
        style={{ width: '100%' }}
      >
        <Canvas.Text
          font={theme.baseFontStyle}
          color={theme.tokens.textSecondary}
        >
          {String(marker)}
        </Canvas.Text>
      </Canvas.Container>
    );
  };

  return {
    key: ROW_MARKER_COLUMN_KEY,
    name: '',
    isServiceColumn: true,
    width: resolvedWidth,
    minWidth: resolvedWidth,
    frozen: true,
    renderCell
  };
};
