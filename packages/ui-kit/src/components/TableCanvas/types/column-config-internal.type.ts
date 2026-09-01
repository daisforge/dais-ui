import { CellInfo, SpanCellAlign } from '../../TableGlide';
import { ColumnGlideInstance } from '../TableGlideInstance/type';
import { ColumnConfig } from './column-config.type';
import { DefaultOmittedKeys } from './glide-type';
import { ObjectForExtending } from './utils.type';
/**
 * Основной конфиг из column-config.type + то, что удалено в ColumnConfig, но есть в ColumnGlideLast
 */
export type ColumnConfigInternal<
  R extends ObjectForExtending,
  SR = unknown,
> = ColumnConfig<R, SR> &
  Pick<ColumnGlideInstance<R, SR>, DefaultOmittedKeys> & {
    // Внутреннее: выравнивание слитой ячейки. Уходит в форк как spanAlign.
    spanAlign?:
      | SpanCellAlign
      | ((cellInfo: CellInfo<R, SR>) => SpanCellAlign | undefined);
  };
