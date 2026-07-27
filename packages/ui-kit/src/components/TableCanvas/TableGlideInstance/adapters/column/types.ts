import { ObjectForExtending } from '@ui-kit/components/TableCanvas/types';
import type { CanvasEl } from '@ui-kit/components/TableGlide';

import type {
  ColumnGlideInstance,
  HeaderCellInfoGlideInstance
} from '../../type';

/**
 * Тип для адаптированного HeaderCellInfo.
 * Преобразует Glide формат (id, title) в формат старой таблицы (key, name).
 */
export type AdaptedHeaderCellInfo<
  R extends ObjectForExtending,
  SR = unknown
> = Pick<HeaderCellInfoGlideInstance<R, SR>, 'column'>;

/**
 * Тип для пользовательской функции renderHeaderCell.
 * Принимает адаптированный формат данных (с key и name).
 */
export type UserRenderHeaderCell<R extends ObjectForExtending, SR = unknown> = (
  cellInfo: AdaptedHeaderCellInfo<R, SR>
) => CanvasEl;

/**
 * Входные параметры для адаптера renderHeaderCell
 */
export interface AdaptRenderHeaderCellInput<
  R extends ObjectForExtending,
  SR = unknown
> {
  column: ColumnGlideInstance<R, SR>;
}
