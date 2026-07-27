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
>;

export type ColumnDefaultOmitted<
  Row extends ObjectForExtending,
  SummRow = unknown,
  CustomCtxs extends ObjectForExtending = {}
> = Omit<ColumnGlideInstance<Row, SummRow, CustomCtxs>, DefaultOmittedKeys>;
