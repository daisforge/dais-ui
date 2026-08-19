/* eslint-disable @typescript-eslint/ban-types */
import { ColumnGlideInstance } from '../TableGlideInstance/type';
import { ObjectForExtending } from './utils.type';

export type DefaultOmittedKeys = Extract<
  keyof ColumnGlideInstance<ObjectForExtending, unknown, ObjectForExtending>,
  | 'editable'
  | 'frozen'
  | 'isServiceColumn'
  | 'isErrorCell'
  | 'renderEditCell'
  | 'renderCellPreview'
  | 'renderCell'
  | 'columnThemeOverride'
  // Объединение ячеек тела задаётся только через tableConfig.spanCells
  // (spanBy / spans). Колоночные colSpan/rowSpan убраны из внешнего API:
  // они позиционные и небезопасны при реордере. Внутри (ColumnConfigInternal)
  // остаются как труба, в которую spanBy/spans синтезируют объединения.
  | 'colSpan'
  | 'rowSpan'
>;

export type ColumnDefaultOmitted<
  Row extends ObjectForExtending,
  SummRow = unknown,
  CustomCtxs extends ObjectForExtending = {},
> = Omit<ColumnGlideInstance<Row, SummRow, CustomCtxs>, DefaultOmittedKeys>;
