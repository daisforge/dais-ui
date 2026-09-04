/* eslint-disable no-continue */
import type { GridSelection } from '@glideappsfinal/glide-data-grid';
import { createDebugLogger } from '@ui-kit/shared/utils/debug';
import { useCallback, useMemo, useState } from 'react';

import {
  notifications,
  type TableNotification,
} from '../../feature-notifications';
import type { ObjectForExtending } from '../../types/utils.type';
import type {
  AllowedFillDirections,
  CellTransferConfig,
  FillHandleConfig,
  FillMeta,
  FillPatternEvent,
  RowsChangeType,
  TransferColumnConfig,
} from '../types';
import { applyValuesToRows } from '../utils/applyValuesToRows';
import { collectTextMatrix } from '../utils/collectTextMatrix';
import { isCellEditable } from '../utils/isCellEditable';
import { rangeToIndexes } from '../utils/rangeToIndexes';
import { snapDestToRowBlocks } from '../utils/snapDestToRowBlocks';

const clipboardDebug = createDebugLogger('TABLE_CANVAS_CLIPBOARD');
const PFX = '[TableCanvas/fillHandle]';

const DEFAULT_FILL_CONFIG: Required<
  Pick<
    FillHandleConfig,
    'allowedDirections' | 'readonlyBehavior' | 'allowSubRows'
  >
> = {
  allowedDirections: 'orthogonal',
  readonlyBehavior: 'skip',
  allowSubRows: true,
};

interface UseFillHandleParams<R extends ObjectForExtending> {
  editModeEnabled: boolean;
  cellTransferConfig?: CellTransferConfig;
  columns: readonly TransferColumnConfig[];
  flattenedRows: readonly R[];
  rowContextValue?: ObjectForExtending;
  headerContextValue?: ObjectForExtending;
  onRowsChange?: (
    rows: R[],
    data: {
      indexes: number[];
      column: TransferColumnConfig;
      rows?: { before: R; after: R }[];
      type: RowsChangeType;
      fillMeta?: FillMeta;
      fillResult?: string[][];
    },
  ) => void;
  onNotification?: (event: TableNotification) => void;
}

/**
 * Хук fill handle (квадратик drag-to-fill в углу выделения).
 *
 * Поверх нативного API glide-data-grid (`fillHandle`, `onFillPattern`,
 * `allowedFillDirections`). Glide рисует квадратик и preview-рамку сам,
 * этот хук только обрабатывает `onFillPattern` — применяет значения
 * source range в destination.
 *
 * Возвращает:
 * - `fillHandleProps` — набор props для DataEditor;
 * - `onSelectionChangeForFill` — трекер source-ячейки, скрывает квадратик
 *   на non-editable ячейке.
 */
export function useFillHandle<R extends ObjectForExtending>({
  editModeEnabled,
  cellTransferConfig,
  columns,
  flattenedRows,
  rowContextValue,
  headerContextValue,
  onRowsChange,
  onNotification,
}: UseFillHandleParams<R>) {
  const [sourceCellEditable, setSourceCellEditable] = useState(true);

  const onSelectionChangeForFill = useCallback(
    (selection: GridSelection) => {
      const { current } = selection;
      if (!current) {
        setSourceCellEditable(false);
        return;
      }
      const [colIdx, rowIdx] = current.cell;
      const column = columns[colIdx];
      const row = flattenedRows[rowIdx];
      if (!column || !row || column.isServiceColumn) {
        setSourceCellEditable(false);
        return;
      }
      setSourceCellEditable(isCellEditable(column, row));
    },
    [columns, flattenedRows],
  );

  const { enabled, fillHandleStyle, resolvedConfig } = useMemo(() => {
    const raw = cellTransferConfig?.fillHandle;
    const clipboardEnabled = cellTransferConfig?.enabled ?? editModeEnabled;

    if (!clipboardEnabled || raw === false) {
      return {
        enabled: false,
        fillHandleStyle: false as
          | boolean
          | Pick<FillHandleConfig, 'shape' | 'size' | 'outline'>,
        resolvedConfig: DEFAULT_FILL_CONFIG,
      };
    }

    if (raw === undefined || raw === true) {
      return {
        enabled: true,
        fillHandleStyle: true as
          | boolean
          | Pick<FillHandleConfig, 'shape' | 'size' | 'outline'>,
        resolvedConfig: DEFAULT_FILL_CONFIG,
      };
    }

    if (raw.enabled === false) {
      return {
        enabled: false,
        fillHandleStyle: false as
          | boolean
          | Pick<FillHandleConfig, 'shape' | 'size' | 'outline'>,
        resolvedConfig: DEFAULT_FILL_CONFIG,
      };
    }

    const style: Pick<FillHandleConfig, 'shape' | 'size' | 'outline'> = {};
    if (raw.shape !== undefined) style.shape = raw.shape;
    if (raw.size !== undefined) style.size = raw.size;
    if (raw.outline !== undefined) style.outline = raw.outline;
    const hasStyle = Object.keys(style).length > 0;

    return {
      enabled: true,
      fillHandleStyle: (hasStyle ? style : true) as
        | boolean
        | Pick<FillHandleConfig, 'shape' | 'size' | 'outline'>,
      resolvedConfig: {
        allowedDirections:
          raw.allowedDirections ?? DEFAULT_FILL_CONFIG.allowedDirections,
        readonlyBehavior:
          raw.readonlyBehavior ?? DEFAULT_FILL_CONFIG.readonlyBehavior,
        allowSubRows: raw.allowSubRows ?? DEFAULT_FILL_CONFIG.allowSubRows,
      },
    };
  }, [cellTransferConfig, editModeEnabled]);

  const handleFillPattern = useCallback(
    (event: FillPatternEvent) => {
      // Всегда preventDefault, иначе glide применит fill через onCellsEdited
      // и перезапишет наши данные canvas-cell объектами.
      event.preventDefault();

      if (!enabled || !onRowsChange) return;

      const source = event.patternSource;
      const rawDest = event.fillDestination;
      // Растягиваем область до целых блоков: залить пол-блока нельзя.
      const dest = snapDestToRowBlocks(rawDest, columns, flattenedRows);

      clipboardDebug(PFX, 'обработка fill-паттерна', { source, rawDest, dest });

      const onBeforeFill = cellTransferConfig?.onBeforeFill;

      const { grid: sourceValues, cells: sourceCells } = collectTextMatrix(
        source,
        columns,
        flattenedRows,
        // Если source задел блок, тянем значение origin, а не покрытых ячеек.
        { withCells: true, resolveOrigin: true },
      );

      if (sourceValues.length === 0 || sourceValues[0]?.length === 0) {
        clipboardDebug(PFX, 'пустые исходные значения');
        return;
      }

      const { cells: targetCells } = collectTextMatrix(
        dest,
        columns,
        flattenedRows,
        { withCells: true },
      );

      const fillMeta: FillMeta = {
        sourceRange: source,
        destinationRange: dest,
        sourceCells,
        targetCells,
      };

      let fillValues = sourceValues;
      let fillResult: string[][] | undefined;

      if (onBeforeFill) {
        const result = onBeforeFill(fillValues, fillMeta);

        if (result === false) {
          clipboardDebug(PFX, 'отменено через onBeforeFill');
          return;
        }

        fillValues = result;
        fillResult = result;
      }

      const sourceHeight = fillValues.length;
      const sourceWidth = fillValues[0]?.length ?? 0;

      clipboardDebug(PFX, 'исходные значения', fillValues);

      const cellContexts = { rowContextValue, headerContextValue };

      const {
        newRows,
        affectedIndexes,
        firstAffectedColumn,
        skippedByValidation,
        aborted,
      } = applyValuesToRows({
        rows: flattenedRows,
        columns,
        rowTargets: rangeToIndexes(dest.y, dest.height),
        colTargets: rangeToIndexes(dest.x, dest.width),
        getValue: (rowOffset, colOffset) => {
          // Тайлим source по модулю — повторяем паттерн если destination больше.
          const offsetY = dest.y + rowOffset - source.y;
          const offsetX = dest.x + colOffset - source.x;
          const srcY = ((offsetY % sourceHeight) + sourceHeight) % sourceHeight;
          const srcX = ((offsetX % sourceWidth) + sourceWidth) % sourceWidth;
          return fillValues[srcY]?.[srcX] ?? '';
        },
        allowSubRows: resolvedConfig.allowSubRows,
        readonlyBehavior: resolvedConfig.readonlyBehavior,
        // Fill всегда валидирует значения по типу колонки.
        validation: 'type-check',
        validateContexts: cellContexts,
        source,
        // Объединение: заливка в блок пишет весь блок (нормализация к origin).
        resolveBlocks: true,
      });

      if (aborted) {
        clipboardDebug(PFX, 'abort: readonly-ячейка в destination');
        onNotification?.(notifications.fillReadonlyAbort());
        return;
      }

      if (skippedByValidation.length > 0) {
        clipboardDebug(PFX, 'пропущено валидацией', skippedByValidation);
        onNotification?.(
          notifications.fillValidationSkipped(skippedByValidation.length),
        );
      }

      clipboardDebug(PFX, 'заполнение завершено', {
        affectedIndexes,
        firstAffectedColumnKey: firstAffectedColumn?.key,
      });

      if (affectedIndexes.length === 0 || !firstAffectedColumn) return;

      onRowsChange(newRows, {
        column: firstAffectedColumn,
        indexes: affectedIndexes,
        type: 'fill',
        fillMeta,
        fillResult,
      });
    },
    [
      enabled,
      onRowsChange,
      columns,
      flattenedRows,
      resolvedConfig,
      rowContextValue,
      headerContextValue,
      cellTransferConfig,
      onNotification,
    ],
  );

  const fillHandleProps = useMemo(() => {
    if (!enabled) return undefined;

    // Прячем квадратик если source-ячейка non-editable — чтобы юзер не думал
    // что оттуда можно тянуть.
    const effectiveFillHandle = sourceCellEditable ? fillHandleStyle : false;

    return {
      fillHandle: effectiveFillHandle,
      allowedFillDirections:
        resolvedConfig.allowedDirections as AllowedFillDirections,
      onFillPattern: handleFillPattern,
    };
  }, [
    enabled,
    fillHandleStyle,
    resolvedConfig,
    handleFillPattern,
    sourceCellEditable,
  ]);

  return { fillHandleProps, onSelectionChangeForFill };
}
