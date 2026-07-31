/* eslint-disable no-continue */
import { getTreeIdAndLvlOfRow } from '../../feature-tree/handlers';
import type { ObjectForExtending } from '../../types';
import type {
  ReadonlyBehavior,
  Rectangle,
  TransferColumnConfig,
  ValidationMode,
} from '../types';
import { shouldSkipCell } from './shouldSkipCell';
import { normalizePasteValue, validatePasteValue } from './validatePasteValue';
import { writeCellValue } from './writeCellValue';

interface ValidateContexts {
  rowContextValue?: ObjectForExtending;
  headerContextValue?: ObjectForExtending;
}

interface ApplyValuesParams<R extends ObjectForExtending> {
  rows: readonly R[];
  columns: readonly TransferColumnConfig[];
  /** Явные индексы целевых строк (порядок = смещение в getValue). */
  rowTargets: readonly number[];
  /** Явные индексы целевых колонок (порядок = смещение в getValue). */
  colTargets: readonly number[];
  /** Значение для целевой ячейки по её СМЕЩЕНИЮ в списках таргетов. */
  getValue: (rowOffset: number, colOffset: number) => string;
  allowSubRows: boolean;
  readonlyBehavior: ReadonlyBehavior;
  validation: ValidationMode;
  validateContexts: ValidateContexts;
  /** Source-диапазон (только fill handle): ячейки внутри него пропускаются. */
  source?: Rectangle;
}

interface SkippedByValidation {
  col: number;
  row: number;
  value: string;
  columnKey: string;
}

interface ApplyValuesResult<R extends ObjectForExtending> {
  /** Новый массив строк (shallow copy с обновлёнными ячейками). */
  newRows: R[];
  /** Индексы строк, которые реально изменились (порядок записи). */
  affectedIndexes: number[];
  /** Первая записанная колонка — для `onRowsChange({ column })`. */
  firstAffectedColumn?: TransferColumnConfig;
  /** Ячейки, пропущенные type-check валидацией (для debug). */
  skippedByValidation: SkippedByValidation[];
  /** true, если `readonlyBehavior: 'abort'` встретил readonly-ячейку (запись не выполнялась). */
  aborted: boolean;
}

const EMPTY_RESULT = <R extends ObjectForExtending>(
  rows: readonly R[],
): ApplyValuesResult<R> => ({
  newRows: [...rows],
  affectedIndexes: [],
  firstAffectedColumn: undefined,
  skippedByValidation: [],
  aborted: false,
});

/**
 * Единый write-core для paste и fill handle: проверяет readonly-abort, затем
 * записывает значения в целевые ячейки (`rowTargets × colTargets`) с фильтром
 * `shouldSkipCell` и опциональной type-check валидацией.
 *
 * Чистая функция: не мутирует входные `rows`, не логирует, не дёргает
 * `onRowsChange` — это делает вызывающий хук. Разница paste/fill вынесена в
 * `getValue` (paste тайлит буфер по модулю размеров данных, fill — по модулю
 * source) и в набор таргетов.
 */
export function applyValuesToRows<R extends ObjectForExtending>({
  rows,
  columns,
  rowTargets,
  colTargets,
  getValue,
  allowSubRows,
  readonlyBehavior,
  validation,
  validateContexts,
  source,
}: ApplyValuesParams<R>): ApplyValuesResult<R> {
  // readonly-abort: первый проход без записи. Любая readonly-ячейка в зоне
  // отменяет операцию целиком (поведение Excel).
  if (readonlyBehavior === 'abort') {
    for (let rowOffset = 0; rowOffset < rowTargets.length; rowOffset += 1) {
      const rowIndex = rowTargets[rowOffset];
      if (rowIndex === undefined) continue;
      const row = rows[rowIndex];
      const { lvl } = row ? getTreeIdAndLvlOfRow(row) : { lvl: 0 };
      for (let colOffset = 0; colOffset < colTargets.length; colOffset += 1) {
        const colIndex = colTargets[colOffset];
        if (colIndex === undefined) continue;
        const column = columns[colIndex];
        const skipReason = shouldSkipCell({
          rowIndex,
          colIndex,
          row,
          column,
          lvl,
          allowSubRows,
          source,
        });
        if (skipReason === 'not-editable') {
          return { ...EMPTY_RESULT(rows), aborted: true };
        }
      }
    }
  }

  const newRows = [...rows];
  const affected = new Set<number>();
  let firstAffectedColumn: TransferColumnConfig | undefined;
  const skippedByValidation: SkippedByValidation[] = [];

  for (let rowOffset = 0; rowOffset < rowTargets.length; rowOffset += 1) {
    const rowIndex = rowTargets[rowOffset];
    if (rowIndex === undefined) continue;
    const row = newRows[rowIndex];
    if (!row) continue;
    const { lvl } = getTreeIdAndLvlOfRow(row);

    let updatedRow = row;
    let rowChanged = false;

    for (let colOffset = 0; colOffset < colTargets.length; colOffset += 1) {
      const colIndex = colTargets[colOffset];
      if (colIndex === undefined) continue;
      const column = columns[colIndex];
      const skipReason = shouldSkipCell({
        rowIndex,
        colIndex,
        row: updatedRow,
        column,
        lvl,
        allowSubRows,
        source,
      });
      if (skipReason) continue;
      if (!column) continue;

      const value = getValue(rowOffset, colOffset);

      if (validation === 'type-check') {
        if (!validatePasteValue(value, column, validateContexts)) {
          skippedByValidation.push({
            col: colIndex,
            row: rowIndex,
            value,
            columnKey: column.key,
          });
          continue;
        }
      }

      const normalizedValue = normalizePasteValue(value, column);
      updatedRow = writeCellValue(updatedRow, column, lvl, normalizedValue);
      rowChanged = true;

      if (!firstAffectedColumn) firstAffectedColumn = column;
    }

    if (rowChanged) {
      newRows[rowIndex] = updatedRow;
      affected.add(rowIndex);
    }
  }

  return {
    newRows,
    affectedIndexes: Array.from(affected),
    firstAffectedColumn,
    skippedByValidation,
    aborted: false,
  };
}
