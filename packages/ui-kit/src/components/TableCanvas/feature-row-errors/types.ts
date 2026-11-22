import type { CanvasNodeTooltipConfig } from '@ui-kit/components/TableGlide';

import type { ObjectForExtending } from '../types/utils.type';

/** Данные для тултипа индикатора ошибок строки. */
export type RowErrorsInfo<RowType extends ObjectForExtending> = {
  /** Строка без служебных ключей таблицы. */
  row: RowType;
  /** Уровень вложенности строки (0 для корневых). */
  treeLevel: number;
  /** Сколько ячеек строки с ошибкой (по всем колонкам, не только видимым). */
  errorCellsCount: number;
  /** Ключи колонок с ошибкой в порядке колонок таблицы. */
  errorColumnKeys: readonly string[];
  /** Строка целиком помечена ошибкой (`isErrorRow`). */
  isErrorRow: boolean;
};

/**
 * Ошибки на уровне строки в режиме редактирования.
 *
 * Активируется через `tableConfig.editing.rowErrors`: `true` для столбца с
 * настройками по умолчанию или объект с настройками. Добавляет служебный
 * столбец с индикатором (красный треугольник) справа от нумерации и чекбоксов:
 * он показывается у строк, где есть хотя бы одна ячейка с ошибкой
 * (`editingCell.error.value`) или вся строка помечена ошибкой (`isErrorRow`).
 * Столбец не меняет ширину, не выделяется, не переставляется и не скрывается
 * через управление столбцами.
 *
 * @example
 * tableConfig={{
 *   editing: {
 *     rowKeyGetter: (r) => r.id,
 *     onRowsChange: setRows,
 *     // или просто rowErrors: true
 *     rowErrors: {
 *       isErrorRow: (row) => row.status === 'rejected',
 *       tooltip: ({ isErrorRow, errorCellsCount }) =>
 *         isErrorRow ? 'Строка отклонена' : `Ошибок в строке: ${errorCellsCount}`,
 *     },
 *   },
 * }}
 */
export type RowErrorsConfig<RowType extends ObjectForExtending> = {
  /**
   * Показывать столбец-индикатор. При `false` остаются только рамки ошибок,
   * столбец не занимает место.
   * @default true
   */
  indicatorColumn?: boolean;
  /**
   * Ошибка всей строки: вместо поячеечных рамок одна красная рамка по всей
   * ширине данных (как у строки, выделенной по нумерации, но без заливки).
   * Строки, для которых вернулось `false`, подсвечиваются поячеечно.
   */
  isErrorRow?: (row: RowType, treeLevel: number) => boolean;
  /**
   * Тултип при наведении на иконку индикатора. Вернуть `null`, чтобы тултипа
   * не было. По умолчанию: «Ошибок в строке: N» для поячеечных ошибок и без
   * тултипа для ошибки всей строки. Размещение по умолчанию `top-start`
   * (над иконкой, вправо от неё), его можно переопределить через `placement`.
   */
  tooltip?: (info: RowErrorsInfo<RowType>) => CanvasNodeTooltipConfig | null;
};

/** Значение `tableConfig.editing.rowErrors`: `true` или объект с настройками. */
export type RowErrorsOption<RowType extends ObjectForExtending> =
  | boolean
  | RowErrorsConfig<RowType>;

/** Приводит `rowErrors` к объекту; `undefined`, если ошибки строк не включены. */
export const normalizeRowErrorsConfig = <RowType extends ObjectForExtending>(
  option: RowErrorsOption<RowType> | undefined,
): RowErrorsConfig<RowType> | undefined => {
  if (!option) return undefined;
  return option === true ? {} : option;
};
