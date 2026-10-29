import { Dropdown, type DropdownItemOption } from '@ui-kit/components/Dropdown';
import type { RefObject, SyntheticEvent } from 'react';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { useHeaderContext } from '../../contexts';
import { HOVER_ANCHOR_GAP } from '../../feature-canvas-popover/constants';
import { useEscapeClose } from '../../feature-canvas-popover/hooks/useEscapeClose';
import { useHoverLeaveClose } from '../../feature-canvas-popover/hooks/useHoverLeaveClose';
import type { TablePopoverRenderParams } from '../../feature-popover-table/context';
import { LIST_WIDTH, SIZES } from '../../styles/styles.constants';
import type { CanvasDropdownApi } from '../../TableGlideInstance';
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

/**
 * Позиционированная обёртка списка внутри портала атомарки. Сам узел портала
 * (`data-floating-ui-portal`, ставит floating-ui) размера не имеет: список в
 * нём абсолютный. Если атрибут сменится, зона удержания курсора по наведению
 * сузится до якоря, и дропдаун по hover будет закрываться над списком.
 */
const FLOATING_LIST_SELECTOR = '[data-floating-ui-portal] > *';

const isEscapeEvent = (event?: SyntheticEvent | Event) =>
  !!event && (event as { key?: unknown }).key === 'Escape';

export interface CanvasDropdownProps {
  config: ResolvedCanvasDropdownConfig;
  close: TablePopoverRenderParams['close'];
  /** Контейнер таблицы: Esc закрывает дропдаун, только если пришёл из неё. */
  tableContainer?: HTMLElement | null;
}

/**
 * Переходник между конфигом canvas-дропдауна и атомарным компонентом.
 * Единственное место, где таблица знает, что под капотом Dropdown из
 * дизайн-системы: при замене компонента меняется только этот файл.
 *
 * Дропдаун управляемый: открыт, пока он есть в TablePopoverState, поэтому
 * атомарке передаётся `alwaysOpened`, а закрытие делаем сами:
 * - клик мимо списка — pointerdown в capture-фазе (Glide отменяет pointerdown
 *   на canvas, и штатный mousedown-слушатель атомарки до него не доходит);
 *   закрытие помечается как outsidePress, чтобы повторный клик по тому же
 *   якорю работал как toggle;
 * - выбор пункта с `closeOnSelect`, Esc и Tab внутри списка — атомарка зовёт
 *   onToggle(false);
 * - Esc из таблицы — useEscapeClose;
 * - уход курсора при `trigger: 'hover'` — useHoverLeaveClose.
 *
 * Список рисуется в портал внутри якоря: так клик по пункту для таблицы
 * остаётся кликом внутри своего контейнера. Атомарка читает элемент портала
 * при первом рендере, поэтому сам Dropdown монтируется, когда портал уже в DOM.
 */
export const CanvasDropdown = ({
  config,
  close,
  tableContainer,
}: CanvasDropdownProps) => {
  const isHover = config.trigger === 'hover';
  // Зона удержания курсора считается по обёртке: она есть с первого рендера
  // и размером с якорь, а сам Dropdown монтируется на рендер позже.
  const anchorRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement | null>(null);
  const [portalReady, setPortalReady] = useState(false);
  const setPortal = useCallback((element: HTMLDivElement | null) => {
    portalRef.current = element;
    setPortalReady(!!element);
  }, []);
  // Список внутри портала позиционирован абсолютно и размера порталу не даёт,
  // поэтому зона удержания курсора считается по самому списку.
  const listRef = useMemo<RefObject<HTMLElement | null>>(
    () => ({
      get current() {
        const list = portalRef.current?.querySelector(FLOATING_LIST_SELECTOR);
        return list instanceof HTMLElement ? list : null;
      },
    }),
    [],
  );
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
    popoverRef: portalRef,
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
    (opened: boolean, event?: SyntheticEvent | Event) => {
      if (opened) return;
      if (isEscapeEvent(event) && !config.closeOnEsc) return;
      close();
    },
    [close, config.closeOnEsc],
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
