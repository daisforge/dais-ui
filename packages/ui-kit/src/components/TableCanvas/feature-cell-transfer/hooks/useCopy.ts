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
  CopyMeta,
  TransferColumnConfig
} from '../types';
import { collectMatrixFromTargets } from '../utils/collectMatrixFromTargets';
import { resolveTransferTargets } from '../utils/resolveTransferTargets';

const clipboardDebug = createDebugLogger('TABLE_CANVAS_CLIPBOARD');
const PFX = '[TableCanvas/copy]';

interface UseCopyParams<R extends ObjectForExtending> {
  cellTransferConfig?: CellTransferConfig;
  columns: readonly TransferColumnConfig[];
  flattenedRows: readonly R[];
  selectionRef: React.RefObject<GridSelection | null>;
  onNotification?: (event: TableNotification) => void;
}

/**
 * Хук копирования выделенных ячеек в clipboard в формате TSV.
 *
 * Copy работает всегда, независимо от `editModeEnabled`. Отключить можно
 * только явно через `cellTransferConfig.enabled = false`.
 */
export function useCopy<R extends ObjectForExtending>({
  cellTransferConfig,
  columns,
  flattenedRows,
  selectionRef,
  onNotification
}: UseCopyParams<R>) {
  const handleCopy = useCallback(() => {
    if (cellTransferConfig?.enabled === false) {
      clipboardDebug(PFX, 'skip: буфер явно отключён');
      return;
    }

    // Общий писатель: матрица текстов -> TSV -> clipboard.
    const writeGrid = (grid: string[][]) => {
      if (grid.length === 0) {
        clipboardDebug(PFX, 'skip: пустая матрица');
        return;
      }
      const tsv = grid.map((row) => row.join('\t')).join('\n');
      clipboardDebug(PFX, 'записываем в буфер', { rows: grid.length, tsv });

      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(tsv).catch((err) => {
          clipboardDebug(PFX, 'ошибка записи в буфер', err);
        });
      } else {
        try {
          const textarea = document.createElement('textarea');
          textarea.value = tsv;
          textarea.style.position = 'fixed';
          textarea.style.left = '-9999px';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        } catch (err) {
          clipboardDebug(PFX, 'fallback: ошибка записи в буфер', err);
        }
      }
    };

    const selection = selectionRef.current;

    // Классификация выделения (ячейки / колонки / строки) → нормализованные
    // таргеты. Матрица собирается по rowTargets × colTargets для любой оси.
    const res = resolveTransferTargets(
      selection,
      columns,
      flattenedRows.length
    );
    if (res.status === 'unsupported') {
      clipboardDebug(PFX, 'skip: перенос не поддержан', res.reason);
      onNotification?.(notifications.copyMultiRangeScattered());
      return;
    }
    if (res.status !== 'ok') {
      clipboardDebug(PFX, 'skip: нет выделения');
      return;
    }
    const { targets } = res;

    // onBeforeCopy и cells-мета — только для выбора ЯЧЕЕК (current.range); для
    // колонок/строк копируем как есть.
    const withCells =
      targets.kind === 'cells' && !!cellTransferConfig?.onBeforeCopy;
    const { grid, cells } = collectMatrixFromTargets(
      targets.rowTargets,
      targets.colTargets,
      columns,
      flattenedRows,
      { withCells }
    );

    if (grid.length === 0) {
      clipboardDebug(PFX, 'skip: пустая матрица');
      return;
    }

    let finalData: string[][] | false = grid;
    if (targets.kind === 'cells' && cellTransferConfig?.onBeforeCopy) {
      const meta: CopyMeta = { range: targets.range, cells };
      finalData = cellTransferConfig.onBeforeCopy(grid, meta);
    }

    if (finalData === false) {
      clipboardDebug(PFX, 'skip: onBeforeCopy вернул false');
      return;
    }

    writeGrid(finalData);
  }, [
    cellTransferConfig,
    columns,
    flattenedRows,
    selectionRef,
    onNotification
  ]);

  return { handleCopy };
}
