/* eslint-disable no-continue */
import type { GridSelection } from '@glideappsfinal/glide-data-grid';
import { createDebugLogger } from '@ui-kit/shared/utils/debug';
import { useCallback } from 'react';

import {
  notifications,
  type TableNotification
} from '../../feature-notifications';
import type { ObjectForExtending } from '../../types';
import type {
  CellTransferConfig,
  PasteConfig,
  PasteMeta,
  RowsChangeType,
  TransferColumnConfig
} from '../types';
import { applyValuesToRows } from '../utils/applyValuesToRows';
import { collectTextMatrix } from '../utils/collectTextMatrix';
import { parseTsv } from '../utils/parseTsv';
import { resolveTransferTargets } from '../utils/resolveTransferTargets';
import {
  hasColumnsOnlySelection,
  hasRowsOnlySelection
} from '../utils/selectionTargets';

const clipboardDebug = createDebugLogger('TABLE_CANVAS_CLIPBOARD');
const PFX = '[TableCanvas/paste]';

const DEFAULT_PASTE_CONFIG: Required<PasteConfig> = {
  readonlyBehavior: 'skip',
  allowSubRows: true,
  overflowBehavior: 'truncate',
  broadcast: false,
  validation: 'type-check'
};

interface UsePasteParams<R extends ObjectForExtending> {
  editModeEnabled: boolean;
  cellTransferConfig?: CellTransferConfig;
  columns: readonly TransferColumnConfig[];
  flattenedRows: readonly R[];
  selectionRef: React.RefObject<GridSelection | null>;
  rowContextValue?: ObjectForExtending;
  headerContextValue?: ObjectForExtending;
  onRowsChange?: (
    rows: R[],
    data: {
      indexes: number[];
      column: TransferColumnConfig;
      rows?: { before: R; after: R }[];
      type: RowsChangeType;
    }
  ) => void;
  onNotification?: (event: TableNotification) => void;
}

export function usePaste<R extends ObjectForExtending>({
  editModeEnabled,
  cellTransferConfig,
  columns,
  flattenedRows,
  selectionRef,
  rowContextValue,
  headerContextValue,
  onRowsChange,
  onNotification
}: UsePasteParams<R>) {
  const handlePaste = useCallback(
    async (clipboardText?: string) => {
      // Phase 1: чтение буфера и разбор TSV
      const clipboardEnabled = cellTransferConfig?.enabled ?? editModeEnabled;
      if (!clipboardEnabled) {
        clipboardDebug(PFX, 'skip: буфер отключён');
        return;
      }
      if (!onRowsChange) {
        clipboardDebug(PFX, 'skip: нет onRowsChange');
        return;
      }

      const selection = selectionRef.current;
      const hasColumnSelection = hasColumnsOnlySelection(selection);
      const hasRowSelection = hasRowsOnlySelection(selection);
      if (!selection?.current && !hasColumnSelection && !hasRowSelection) {
        clipboardDebug(PFX, 'skip: нет выделения');
        return;
      }

      if (!selection) return;

      let text: string;
      if (clipboardText !== undefined) {
        clipboardDebug(PFX, 'fallback: текст получен из paste event', {
          length: clipboardText.length
        });
        text = clipboardText;
      } else if (navigator.clipboard?.readText) {
        clipboardDebug(PFX, 'clipboard API доступен, используем readText');
        try {
          text = await navigator.clipboard.readText();
        } catch (err) {
          clipboardDebug(PFX, 'ошибка чтения буфера', err);
          return;
        }
      } else {
        clipboardDebug(
          PFX,
          'skip: clipboard API недоступен, ожидаем paste event'
        );
        return;
      }

      if (!text) {
        clipboardDebug(PFX, 'skip: буфер пуст');
        return;
      }

      let data = parseTsv(text);
      if (data.length === 0 || !data[0] || data[0].length === 0) {
        clipboardDebug(PFX, 'skip: распарсенный TSV пуст', { text });
        return;
      }

      clipboardDebug(PFX, 'TSV распарсен', {
        rows: data.length,
        cols: data[0].length,
        data
      });

      // Phase 2: тираж(broadcast) и проверка границ
      const pasteConfig: Required<PasteConfig> = {
        ...DEFAULT_PASTE_CONFIG,
        ...cellTransferConfig?.paste
      };

      // Диапазон/таргеты вставки через единую классификацию выделения (ячейки /
      // колонки / строки). Для СМЕЖНЫХ осей colTargets/rowTargets оставляем
      // undefined — ниже работает broadcast от range.x/y; для НЕсмежных (Ctrl)
      // берём явные списки, и буфер раскладывается по выбранным колонкам/строкам
      // по порядку (k % размера буфера), промежуточные не трогаются.
      const res = resolveTransferTargets(
        selection,
        columns,
        flattenedRows.length
      );
      if (res.status === 'unsupported') {
        clipboardDebug(PFX, 'skip: перенос не поддержан', res.reason);
        onNotification?.(notifications.pasteMultiRangeScattered());
        return;
      }
      if (res.status !== 'ok') return;
      const { targets } = res;
      const { range } = targets;
      const colTargets = targets.contiguousCols
        ? undefined
        : targets.colTargets;
      const rowTargets = targets.contiguousRows
        ? undefined
        : targets.rowTargets;

      const targetStartCol = range.x;
      const targetStartRow = range.y;

      const dataHeight = data.length;
      const firstRow = data[0];
      if (!firstRow) return;
      const dataWidth = firstRow.length;

      const repeatRows =
        pasteConfig.broadcast && dataHeight === 1 && range.height > 1
          ? range.height
          : dataHeight;
      const repeatCols =
        pasteConfig.broadcast && dataWidth === 1 && range.width > 1
          ? range.width
          : dataWidth;

      // Целевые колонки: для несмежного выбора — явный список выбранных колонок;
      // иначе смежный блок от range.x. Буфер раскладывается по позиции в списке
      // (dataColIdx = colOffset % dataWidth), промежуточные колонки не трогаются.
      const effectiveColTargets =
        colTargets ??
        Array.from({ length: repeatCols }, (_, i) => targetStartCol + i);
      // Аналогично строки: несмежный выбор — явный список, иначе блок от range.y.
      const effectiveRowTargets =
        rowTargets ??
        Array.from({ length: repeatRows }, (_, i) => targetStartRow + i);

      const maxCol = Math.max(...effectiveColTargets) + 1;
      const maxRow = Math.max(...effectiveRowTargets) + 1;
      const overflowsCol = maxCol > columns.length;
      const overflowsRow = maxRow > flattenedRows.length;

      if (
        (overflowsCol || overflowsRow) &&
        pasteConfig.overflowBehavior === 'abort'
      ) {
        clipboardDebug(PFX, 'abort: данные выходят за границы таблицы', {
          overflowsCol,
          overflowsRow,
          maxCol,
          maxRow
        });
        onNotification?.(notifications.pasteOverflowAbort());
        return;
      }

      // Phase 3: onBeforePaste пользовательский перехват
      if (cellTransferConfig?.onBeforePaste) {
        const targetRange = {
          x: targetStartCol,
          y: targetStartRow,
          width: repeatCols,
          height: repeatRows
        };
        const { cells: targetCells } = collectTextMatrix(
          targetRange,
          columns,
          flattenedRows,
          { withCells: true }
        );
        const meta: PasteMeta = {
          target: { col: targetStartCol, row: targetStartRow },
          targetCells,
          selection
        };
        const result = cellTransferConfig.onBeforePaste(data, meta);
        if (result === false) {
          clipboardDebug(PFX, 'skip: onBeforePaste вернул false');
          return;
        }
        data = result;
      }

      const cellContexts = { rowContextValue, headerContextValue };

      // Phase 4-5: readonly-abort prescan + запись значений (общий core с fill).
      // paste тайлит буфер по модулю его размеров; effective*Targets уже учли
      // broadcast/несмежность.
      const {
        newRows,
        affectedIndexes,
        firstAffectedColumn,
        skippedByValidation,
        aborted
      } = applyValuesToRows({
        rows: flattenedRows,
        columns,
        rowTargets: effectiveRowTargets,
        colTargets: effectiveColTargets,
        getValue: (rowOffset, colOffset) =>
          data[rowOffset % dataHeight]?.[colOffset % dataWidth] ?? '',
        allowSubRows: pasteConfig.allowSubRows,
        readonlyBehavior: pasteConfig.readonlyBehavior,
        validation: pasteConfig.validation,
        validateContexts: cellContexts
      });

      if (aborted) {
        clipboardDebug(PFX, 'abort: readonly-ячейка в зоне вставки');
        onNotification?.(notifications.pasteReadonlyAbort());
        return;
      }

      if (skippedByValidation.length > 0) {
        clipboardDebug(PFX, 'пропущено валидацией', skippedByValidation);
        onNotification?.(
          notifications.pasteValidationSkipped(skippedByValidation.length)
        );
      }

      clipboardDebug(PFX, 'вставка завершена', {
        affectedIndexes,
        firstAffectedColumnKey: firstAffectedColumn?.key,
        skippedByValidationCount: skippedByValidation.length
      });

      if (affectedIndexes.length === 0 || !firstAffectedColumn) return;

      onRowsChange(newRows, {
        column: firstAffectedColumn,
        indexes: affectedIndexes,
        type: 'paste'
      });
    },
    [
      editModeEnabled,
      cellTransferConfig,
      columns,
      flattenedRows,
      selectionRef,
      rowContextValue,
      headerContextValue,
      onRowsChange,
      onNotification
    ]
  );

  return { handlePaste };
}
