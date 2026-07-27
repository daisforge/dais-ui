import type { Ref } from 'react';

import type { DataEditorRef } from '../TableGlideInstance/type';
import type { ColumnConfig } from './column-config.type';
import type { TableConfig } from './table-config.type';
import type { ObjectForExtending, Prettify } from './utils.type';

export type TableProps<
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  HeaderContextValueType extends ObjectForExtending,
  RowContextValueType extends ObjectForExtending,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown
> = {
  /**
   * columnConfig - Конфигурация колонок.
   *
   * (рекомендуется минимальное количество зависимостей для данной сущности - в идеале, чтобы не пересоздавался)
   */
  columnConfig: readonly ColumnConfig<RowType, SummaryRowType>[];
  /**
   * rows - данные для таблицы. ```RowType extends Record<string | number, any>```
   */
  rows: RowType[];
  /**
   * topSummaryRows - данные для итоговой строки в верхней части таблицы. ```SummaryRowType[]```
   * topSummaryRows?: SummaryRowType[];
   */
  /**
   * bottomSummaryRows - данные для итоговой строки в нижней части таблицы. ```SummaryRowType[]```
   */
  bottomSummaryRows?: SummaryRowType[];
  /**
   * tableConfig - Конфигурация фичей таблицы (их активация и отключение)
   */
  tableConfig?: Prettify<
    TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>
  >;
  /**
   * headerContextValue:  любые стейты, которые нужны в headerCell - кладем в headerContextValue. И получаем доступ с помощью cellInfo.ctxs из args.
   */
  headerContextValue?: HeaderContextValueType;
  /**
   * rowContextValue:  любые стейты, которые нужны в cell - кладем в rowContextValue.  И получаем доступ с помощью cellInfo.ctxs из args.
   */
  rowContextValue?: RowContextValueType;
  refTable?: Ref<DataEditorRef>;
  refTableContainer?: React.Ref<HTMLDivElement>;
};
