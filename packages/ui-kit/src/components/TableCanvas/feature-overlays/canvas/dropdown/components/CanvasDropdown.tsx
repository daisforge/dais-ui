import { Dropdown, type DropdownItemOption } from '@ui-kit/components/Dropdown';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { useHeaderContext } from '../../../../contexts';
import { LIST_WIDTH, SIZES } from '../../../../styles/styles.constants';
import type { CanvasDropdownApi } from '../../../../TableGlideInstance';
import type { TablePopoverRenderParams } from '../../../context';
import { HOVER_ANCHOR_GAP } from '../../core/constants';
import {
  isEscapeInProgress,
  useEscapeClose,
} from '../../core/hooks/useEscapeClose';
import { useHoverLeaveClose } from '../../core/hooks/useHoverLeaveClose';
import { DROPDOWN_ERROR_ITEM_VALUE } from '../constants';
import { useDropdownItems } from '../hooks/useDropdownItems';
import type { ResolvedCanvasDropdownConfig } from '../types';
import { DropdownAnchor, DropdownPortal, DropdownRoot } from './styled';

/** Пункт вместо списка, если пункты не загрузились и своего renderError нет. */
const ERROR_ITEMS: DropdownItemOption[] = [
  {
    value: DROPDOWN_ERROR_ITEM_VALUE,
    label: 'Не удалось загрузить',
    disabled: true,
  },
];

export interface CanvasDropdownProps {
  config: ResolvedCanvasDropdownConfig;
  close: TablePopoverRenderParams['close'];
  /** Контейнер таблицы: Esc закрывает дропдаун, только если пришёл из неё. */
  tableContainer?: HTMLElement | null;
}

/**
 * Связывает конфиг Dropdown на canvas-элементе с Dropdown из дизайн-системы.
 * Список всегда открыт (`alwaysOpened`), закрываем его сами: по клику мимо
 * (glide гасит pointerdown на canvas, поэтому ловим его раньше), по Esc и по
 * уходу курсора. Список рисуется в портал внутри якоря, чтобы клик по пункту
 * оставался кликом внутри таблицы.
 */
export const CanvasDropdown = ({
  config,
  close,
  tableContainer,
}: CanvasDropdownProps) => {
  const isHover = config.trigger === 'hover';
  // Обёртка размером с якорь есть с первого рендера, а Dropdown появляется позже.
  const anchorRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement | null>(null);
  const [portalReady, setPortalReady] = useState(false);
  const setPortal = useCallback((element: HTMLDivElement | null) => {
    portalRef.current = element;
    setPortalReady(!!element);
  }, []);
  // Ref Dropdown указывает на сам список. Портал размера не имеет, поэтому
  // зону, где курсор держит список открытым, считаем по списку. В типах
  // атомарного Dropdown ref описан как кнопка, нам нужен только HTMLElement.
  const listRef = useRef<HTMLButtonElement>(null);
  const { rowSize } = useHeaderContext();

  const { status, items, error, retry } = useDropdownItems(config);

  const api = useMemo<CanvasDropdownApi>(
    () => ({ close: () => close() }),
    [close],
  );

  useEscapeClose({
    enabled: config.closeOnEsc,
    onClose: close,
    tableContainer,
    // Esc внутри списка. Портал не годится: он лежит в таблице, и поиск окна
    // вверх от него нашёл бы модальное окно вокруг таблицы.
    getOverlayElement: () => listRef.current,
  });

  useEffect(() => {
    if (isHover || !config.closeOnOutsideClick) return undefined;
    const handlePointerDown = (event: PointerEvent) => {
      const portal = portalRef.current;
      if (event.target instanceof Node && portal?.contains(event.target)) {
        return;
      }
      close({ outsidePress: true });
    };
    document.addEventListener('pointerdown', handlePointerDown, true);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown, true);
    };
  }, [isHover, config.closeOnOutsideClick, close]);

  useHoverLeaveClose({
    enabled: isHover,
    anchorRef,
    popoverRef: listRef,
    expand: HOVER_ANCHOR_GAP,
    delay: config.mouseLeaveDelay,
    onLeave: close,
  });

  const handleToggle = useCallback(
    (opened: boolean) => {
      // Esc решает useEscapeClose, как у Popover.
      if (opened || isEscapeInProgress()) return;
      close();
    },
    [close],
  );

  const handleItemSelect = useCallback(
    (item: DropdownItemOption) => {
      config.onItemSelect?.(item, api);
    },
    [config, api],
  );

  const shownItems = useMemo(() => {
    if (status === 'loading') return config.loadingItems;
    if (status === 'error') return config.renderError ? [] : ERROR_ITEMS;
    return items;
  }, [status, items, config.loadingItems, config.renderError]);

  const beforeList =
    status === 'error' && config.renderError ? (
      <>
        {config.renderError({ error, retry, close: api.close })}
        {config.beforeList}
      </>
    ) : (
      config.beforeList
    );

  return (
    <DropdownRoot ref={anchorRef}>
      <DropdownPortal ref={setPortal} />
      {portalReady && (
        <Dropdown
          ref={listRef}
          alwaysOpened
          items={shownItems}
          portal={portalRef}
          placement={config.placement}
          offset={config.offset}
          listWidth={config.listWidth ?? LIST_WIDTH[rowSize]}
          listMaxHeight={config.listMaxHeight}
          size={config.size ?? SIZES[rowSize].input}
          variant={config.variant}
          zIndex={config.zIndex}
          closeOnSelect={config.closeOnSelect}
          closeOnOverlayClick={false}
          renderItem={config.renderItem}
          beforeList={beforeList}
          afterList={config.afterList}
          onToggle={handleToggle}
          onItemSelect={handleItemSelect}
          aria-label={config.ariaLabel}
        >
          <DropdownAnchor aria-hidden="true" />
        </Dropdown>
      )}
    </DropdownRoot>
  );
};
