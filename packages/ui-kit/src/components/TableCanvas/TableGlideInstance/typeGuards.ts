import { ObjectForExtending } from '../types/utils.type';
import type {
  ColumnGlideInstance,
  ColumnGroupGlideInstance,
  ColumnOrColumnGroupGlideInstance
} from './type';

export function isNotGroup<R extends ObjectForExtending, SR>(
  column: ColumnOrColumnGroupGlideInstance<R, SR>
): column is ColumnGlideInstance<R, SR> {
  return (column as { children: unknown }).children === undefined;
}
export function isGroupColumn<R extends ObjectForExtending, SR>(
  column: ColumnOrColumnGroupGlideInstance<R, SR>
): column is ColumnGroupGlideInstance<R, SR> {
  return !isNotGroup(column);
}
