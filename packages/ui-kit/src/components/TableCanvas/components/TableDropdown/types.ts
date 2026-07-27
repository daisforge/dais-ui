import { DropdownProps } from '@ui-kit/components/Dropdown';
import { CSSObject } from 'styled-components';

export type TableDropdownProps = DropdownProps & { $css?: CSSObject };

/**
 * Пропсы для конфигурации дропдауна в таблице.
 * Исключены внутренние/управляемые свойства, такие как:
 * - `onItemSelect`, `items` — управляются логикой таблицы
 * - `onToggle`, `size`, `portal` — зарезервированы для внутреннего использования
 *
 * Используйте этот тип, чтобы кастомизировать внешний вид и поведение,
 * не ломая внутреннюю логику компонента.
 */
export type TableDropdownConfigProps = Omit<
  TableDropdownProps,
  'onItemSelect' | 'items' | 'onToggle' | 'size' | 'portal'
>;
