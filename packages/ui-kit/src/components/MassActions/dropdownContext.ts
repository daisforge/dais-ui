import type { DropdownProps } from '@ui-kit/components/Dropdown';
import { ComponentType, createContext, useContext } from 'react';
import type { CSSObject } from 'styled-components';

/**
 * Дропдаун, который MassActions рендерит при `useTableDropdown`. Внутренний
 * механизм, наружу не экспортируется.
 *
 * Его подставляет Table (свой TableDropdown с порталом и размерами таблицы).
 * Импорт TableDropdown отсюда загружал бы standalone MassActions весь чанк
 * Table вместе с CSS react-data-grid и давал циклические чанки
 * Table ↔ MassActions. Без провайдера MassActions рендерит обычный Dropdown.
 */
export type MassActionsDropdownComponent = ComponentType<
  DropdownProps & { $css?: CSSObject }
>;

export const MassActionsDropdownContext =
  createContext<MassActionsDropdownComponent | null>(null);

export const useMassActionsDropdown = () =>
  useContext(MassActionsDropdownContext);
