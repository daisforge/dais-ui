import React, { useCallback, useRef } from 'react';

import { TableDropdownWithCustomClickOutside } from '../../components/TableDropdown';
import { useContextMenu } from '../../contexts';
import { HEADER_CTX_MENU_OFFSET } from '../constants';
import { HiddenTriggerButton, MenuContainer } from './ContextMenu.styled';

export const ContextMenu = () => {
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

  // Стабильный ref-колбэк. Инлайн-стрелка пересоздаётся каждый рендер, и React
  // зовёт её заново (старую с null, новую с узлом) — повторный btn.click()
  // тогглит уже открытый Dropdown в закрытое (лишний ре-рендер от селектинга
  // или async-обновления items ронял меню). useCallback => клик только на маунт.
  const cbRef = useCallback((btn: HTMLButtonElement | null) => {
    btn?.click();
  }, []);

  if (!isOpen || !position) return null;

  return (
    items && (
      <MenuContainer position={position} ref={containerRef} $isOpen={isOpen}>
        <TableDropdownWithCustomClickOutside
          key={`${position.x}-${position.y}`}
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
