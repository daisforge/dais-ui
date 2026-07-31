import { EmbedIconButton } from '@ui-kit/components/EmbedIconButton';
import { ComponentProps, ReactNode } from 'react';

import { DataAttributes } from '../../types/utils.type';
import {
  TableDropdownConfigProps,
  TableDropdownProps,
} from '../TableDropdown/types';

export type SplitIconButtonProps = {
  /** Иконка основной (левой) кнопки-действия */
  icon: ReactNode;
  /** Клик по основной кнопке-иконке */
  onIconClick?: () => void;
  /** Tooltip на левой кнопке-иконке (если задан — оборачиваем в TableTooltip). */
  iconTooltip?: ReactNode;
  /**
   * Полная замена иконки шеврона своим узлом. Обычно не нужна — шеврон наш
   * (IconChevronDown), а размер задаётся через chevronSize. Если задан, имеет
   * приоритет над chevronSize.
   */
  chevronIcon?: ReactNode;
  /** Размер нашей иконки-шеврона. Игнорируется, если задан chevronIcon. */
  chevronSize?: 'xs' | 's' | 'm';
  /** Размер обеих кнопок (EmbedIconButton) */
  size?: ComponentProps<typeof EmbedIconButton>['size'];
  /**
   * Пункты дропдауна. Если заданы — кнопка-шеврон открывает TableDropdown.
   * Если не заданы — шеврон работает как обычная кнопка (onChevronClick).
   */
  items?: TableDropdownProps['items'];
  /** Выбор пункта дропдауна */
  onItemSelect?: TableDropdownProps['onItemSelect'];
  /** Клик по шеврону в режиме без дропдауна (items не заданы) */
  onChevronClick?: () => void;
  /** Колбэк открытия/закрытия дропдауна */
  onToggle?: (isOpen: boolean) => void;
  /** Доп. конфиг TableDropdown (placement, listWidth и т.п.) */
  dropdownProps?: TableDropdownConfigProps;
  /** data-атрибуты на контейнер */
  domMetadata?: DataAttributes;
  /** data-атрибуты на основную кнопку */
  iconDomMetadata?: DataAttributes;
  /** data-атрибуты на кнопку-шеврон */
  chevronDomMetadata?: DataAttributes;
};
