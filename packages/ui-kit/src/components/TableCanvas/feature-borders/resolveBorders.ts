import type { AppearanceVariant } from '../TableGlideInstance/type';
import type { BordersConfig } from '../types/table-config.type';
import type { ObjectForExtending } from '../types/utils.type';

/**
 * Итоговая настройка линий сетки с учётом внешнего вида таблицы.
 *
 * В «чистом» виде (appearance.variant = 'clean') линии сетки выключены: общие
 * настройки vertical и horizontal становятся false. Явно заданные потребителем
 * true сильнее, а undefined (например, из условного конфига) считается
 * «не задано» и линии не возвращает. Точечные колбэки (getVerticalBorder и
 * другие) передаются как есть. В обычном виде конфиг отдаётся без изменений,
 * той же ссылкой.
 */
export const resolveBorders = <RowType extends ObjectForExtending>(
  variant: AppearanceVariant,
  borders: BordersConfig<RowType> | undefined,
): BordersConfig<RowType> | undefined => {
  if (variant !== 'clean') {
    return borders;
  }
  return {
    ...borders,
    vertical: borders?.vertical ?? false,
    horizontal: borders?.horizontal ?? false,
  };
};
