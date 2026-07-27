import React, { useCallback, useMemo, useRef } from 'react';

import { TableDropdownWithCustomClickOutside } from '../../components/TableDropdown';
import { useContextMenu } from '../../contexts';
import { viewportToContainerPosition } from '../../utils';
import { HEADER_CTX_MENU_OFFSET } from '../constants';
import { HiddenTriggerButton, MenuContainer } from './ContextMenu.styled';

export interface ContextMenuProps {
  /**
   * Контейнер, в который рендерится меню (тот же, что у renderInContainer).
   * Если передан — position от грида считается в viewport и переводится в координаты контейнера.
   * Так меню корректно показывается при таблице не у верхнего края (блок сверху, модалка, аккордеон).
   */
  containerEl?: HTMLElement | null;
}

export const ContextMenu = ({ containerEl }: ContextMenuProps) => {
  const {
    isOpen,
    items,
    position,
    close,
    onItemSelect,
    offset,
    open,
    ...restDropDownProps
  } = useContextMenu();

  const containerRef = useRef<HTMLDivElement | null>(null);

  const displayPosition = useMemo(() => {
    if (!position) return null;
    if (containerEl) {
      return viewportToContainerPosition(position.x, position.y, containerEl);
    }
    return position;
  }, [position, containerEl]);

  // Стабильный ref-колбэк. Инлайн-стрелка пересоздаётся каждый рендер, и React
  // зовёт её заново (старую с null, новую с узлом) — повторный btn.click()
  // тогглит уже открытый Dropdown в закрытое (лишний ре-рендер от селектинга
  // или async-обновления items ронял меню). useCallback => клик только на маунт.
  const cbRef = useCallback((btn: HTMLButtonElement | null) => {
    btn?.click();
  }, []);

  if (!isOpen || !position || !displayPosition) return null;

  return (
    items && (
      <MenuContainer
        position={displayPosition}
        ref={containerRef}
        $isOpen={isOpen}
        data-testid="table-context-menu"
      >
        <TableDropdownWithCustomClickOutside
          key={`${displayPosition.x}-${displayPosition.y}`}
          items={items}
          portal={containerRef}
          offset={offset ?? HEADER_CTX_MENU_OFFSET}
          onItemSelect={onItemSelect}
          listWidth={undefined}
          closeOnOverlayClick={false}
          isOpen={isOpen}
          onClose={close}
          {...restDropDownProps}
        >
          <HiddenTriggerButton ref={cbRef} type="button" />
        </TableDropdownWithCustomClickOutside>
      </MenuContainer>
    )
  );
};
