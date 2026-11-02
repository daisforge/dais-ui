import type { GroupHeaderClickedEventArgs } from '@glideappsfinal/glide-data-grid';

import type { ColumnGroupConfig, ObjectForExtending } from '../types';
import type { GroupHeaderHandler } from '../types/table-config.type';

// Обработчик группы из TableConfig → обработчик glide. В event.group glide отдаёт
// ключ группы (путь колонки собран из ключей, см. useLastLvlColumnConfig), по нему
// берём группу из columnConfig.
export function adaptGroupHeaderHandler<R extends ObjectForExtending, SR>(
  handler: GroupHeaderHandler<R, SR> | undefined,
  groupsByKey: ReadonlyMap<string, ColumnGroupConfig<R, SR>>,
):
  | ((colIndex: number, event: GroupHeaderClickedEventArgs) => void)
  | undefined {
  if (!handler) return undefined;
  return (colIndex, event) => {
    const group = groupsByKey.get(event.group);
    handler(
      colIndex,
      { key: event.group, children: group?.children ?? [] },
      event,
    );
  };
}
