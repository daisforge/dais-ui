import { cleanup, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  type CanvasPortalHoverDetail,
  dispatchCanvasPortalHover,
  dispatchCanvasPortalReset,
  lockPortalHover,
} from '../../../TableGlide/lib/canvas';
import type { TablePopoverState } from '../../feature-popover-table/context';
import { useHoverPopoverOpen } from '../hooks/useHoverPopoverOpen';
import { CANVAS_POPOVER_CONTENT_KIND } from '../types';
import { normalizePopoverConfig } from '../utils';

const CLOSED: TablePopoverState = {
  isOpen: false,
  position: null,
  anchorSize: null,
  contentType: null,
  behavior: null,
  sourceKey: null,
};

const nodeShow = (
  overrides: Partial<CanvasPortalHoverDetail> = {},
): CanvasPortalHoverDetail => ({
  visible: true,
  x: 100,
  y: 100,
  width: 20,
  height: 20,
  originId: 'icon',
  nodeId: 'icon',
  source: 'cell',
  priority: 1,
  popoverFromNode: { trigger: 'hover', content: 'с иконки' },
  tooltipContext: { column: { id: 'priority' }, rowInd: 2 },
  ...overrides,
});

// Те же строки между рендерами: новая ссылка значит новые данные.
const ROWS: readonly unknown[] = [];

const movePointer = (x: number, y: number) => {
  document.dispatchEvent(
    new MouseEvent('pointermove', { clientX: x, clientY: y, bubbles: true }),
  );
};

describe('useHoverPopoverOpen: открытие поповера по наведению', () => {
  let container: HTMLDivElement;
  let stateRef: { current: TablePopoverState };
  let openPopover: ReturnType<typeof vi.fn>;

  // Ref-ы стабильные, как в CanvasPopoverListener.
  const renderOpenHook = (isOpen = false, rows: readonly unknown[] = ROWS) => {
    const containerRef = { current: container };
    const configRef = { current: {} };
    return renderHook(
      (props: { isOpen: boolean; rows: readonly unknown[] }) =>
        useHoverPopoverOpen({
          containerRef,
          configRef,
          stateRef,
          isOpen: props.isOpen,
          rows: props.rows,
          openPopover,
        }),
      { initialProps: { isOpen, rows } },
    );
  };

  const show = (detail: CanvasPortalHoverDetail) =>
    dispatchCanvasPortalHover(detail, container);

  const hide = (originId: string) =>
    dispatchCanvasPortalHover(
      { visible: false, x: 0, y: 0, width: 0, height: 0, originId },
      container,
      true,
    );

  // Состояние, в которое listener переводит таблицу после openPopover.
  const openedHoverState = (sourceKey: string): TablePopoverState => ({
    ...CLOSED,
    isOpen: true,
    contentType: 'custom',
    sourceKey,
    contentData: {
      kind: CANVAS_POPOVER_CONTENT_KIND,
      overlay: {
        kind: 'popover',
        config: normalizePopoverConfig({ trigger: 'hover', content: 'открыт' }),
      },
    },
  });

  beforeEach(() => {
    vi.useFakeTimers();
    container = document.createElement('div');
    document.body.appendChild(container);
    stateRef = { current: CLOSED };
    openPopover = vi.fn();
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
    container.remove();
  });

  it('открывает через mouseEnterDelay, если курсор над якорем', () => {
    renderOpenHook();
    show(nodeShow());
    movePointer(110, 110);

    vi.advanceTimersByTime(299);
    expect(openPopover).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1);
    expect(openPopover).toHaveBeenCalledTimes(1);
    expect(openPopover.mock.calls[0]?.[2]).toBe('icon|priority|2');
  });

  it('не открывает, если курсор ушёл с якоря до конца задержки', () => {
    renderOpenHook();
    show(nodeShow());
    movePointer(110, 110);
    movePointer(400, 400);
    vi.advanceTimersByTime(300);
    expect(openPopover).not.toHaveBeenCalled();
  });

  it('не открывает, если во время задержки открыли поповер по клику', () => {
    renderOpenHook();
    show(nodeShow());
    movePointer(110, 110);
    stateRef.current = {
      ...CLOSED,
      isOpen: true,
      contentType: 'custom',
      sourceKey: 'button|action|2',
      contentData: {
        kind: CANVAS_POPOVER_CONTENT_KIND,
        overlay: {
          kind: 'popover',
          config: normalizePopoverConfig({ content: 'клик' }),
        },
      },
    };
    vi.advanceTimersByTime(300);
    expect(openPopover).not.toHaveBeenCalled();
  });

  it('не открывает поверх фильтра шапки', () => {
    renderOpenHook();
    stateRef.current = { ...CLOSED, isOpen: true, contentType: 'filter' };
    show(nodeShow());
    movePointer(110, 110);
    vi.advanceTimersByTime(300);
    expect(openPopover).not.toHaveBeenCalled();
  });

  it('открытый поповер по наведению сменяется наведением на другой элемент', () => {
    stateRef.current = openedHoverState('icon|priority|2');
    renderOpenHook(true);
    show(
      nodeShow({ tooltipContext: { column: { id: 'priority' }, rowInd: 3 } }),
    );
    movePointer(110, 110);
    vi.advanceTimersByTime(300);
    expect(openPopover).toHaveBeenCalledTimes(1);
    expect(openPopover.mock.calls[0]?.[2]).toBe('icon|priority|3');
  });

  it('скрытие того же источника отменяет ожидание', () => {
    renderOpenHook();
    show(nodeShow());
    movePointer(400, 400);
    hide('icon');
    movePointer(110, 110);
    vi.advanceTimersByTime(300);
    expect(openPopover).not.toHaveBeenCalled();
  });

  it('скрытие с тем же id ноды, пока курсор над якорем, ожидание не отменяет', () => {
    // id ноды одинаковый во всех строках: hide прошлой строки приходит позже show новой.
    renderOpenHook();
    show(nodeShow());
    movePointer(110, 110);
    hide('icon');
    vi.advanceTimersByTime(300);
    expect(openPopover).toHaveBeenCalledTimes(1);
  });

  it('прокрутка таблицы отменяет ожидание', () => {
    renderOpenHook();
    show(nodeShow());
    movePointer(110, 110);
    container.dispatchEvent(new Event('scroll'));
    vi.advanceTimersByTime(300);
    expect(openPopover).not.toHaveBeenCalled();
  });

  it('блокировка (ресайз колонки) отменяет ожидание', () => {
    renderOpenHook();
    show(nodeShow());
    movePointer(110, 110);
    const release = lockPortalHover();
    vi.advanceTimersByTime(300);
    release();
    expect(openPopover).not.toHaveBeenCalled();
  });

  it('сброс якорей своей таблицы отменяет ожидание, чужой таблицы нет', () => {
    renderOpenHook();
    show(nodeShow());
    movePointer(110, 110);
    dispatchCanvasPortalReset(document.createElement('div'));
    vi.advanceTimersByTime(300);
    expect(openPopover).toHaveBeenCalledTimes(1);

    openPopover.mockClear();
    show(
      nodeShow({ tooltipContext: { column: { id: 'priority' }, rowInd: 3 } }),
    );
    dispatchCanvasPortalReset(container);
    vi.advanceTimersByTime(300);
    expect(openPopover).not.toHaveBeenCalled();
  });

  it('не открывает, пока фокус в поле ввода своей таблицы', () => {
    const input = document.createElement('input');
    container.appendChild(input);
    input.focus();
    renderOpenHook();
    show(nodeShow());
    movePointer(110, 110);
    vi.advanceTimersByTime(300);
    expect(openPopover).not.toHaveBeenCalled();
  });

  it('не открывает, пока открыт редактор ячейки (он в портале вне таблицы)', () => {
    const overlay = document.createElement('div');
    overlay.id = 'gdg-overlay-0';
    const textarea = document.createElement('textarea');
    overlay.appendChild(textarea);
    document.body.appendChild(overlay);
    textarea.focus();
    renderOpenHook();
    show(nodeShow());
    movePointer(110, 110);
    vi.advanceTimersByTime(300);
    expect(openPopover).not.toHaveBeenCalled();
    overlay.remove();
  });

  it('поле ввода вне таблицы наведению не мешает', () => {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.focus();
    renderOpenHook();
    show(nodeShow());
    movePointer(110, 110);
    vi.advanceTimersByTime(300);
    expect(openPopover).toHaveBeenCalledTimes(1);
    input.remove();
  });

  it('дропдаун по наведению открывается так же, как поповер', () => {
    renderOpenHook();
    show(
      nodeShow({
        popoverFromNode: undefined,
        dropdownFromNode: { trigger: 'hover', items: [] },
      }),
    );
    movePointer(110, 110);
    vi.advanceTimersByTime(300);
    expect(openPopover).toHaveBeenCalledTimes(1);
    expect(openPopover.mock.calls[0]?.[1]?.kind).toBe('dropdown');
  });

  it('поповер по клику не открывается наведением', () => {
    renderOpenHook();
    show(nodeShow({ popoverFromNode: { content: 'по клику' } }));
    movePointer(110, 110);
    vi.advanceTimersByTime(300);
    expect(openPopover).not.toHaveBeenCalled();
  });

  it('после закрытия мешавшего поповера показывает поповер под курсором', () => {
    stateRef.current = { ...CLOSED, isOpen: true, contentType: 'filter' };
    const { rerender } = renderOpenHook(true);
    show(nodeShow());
    movePointer(110, 110);
    vi.advanceTimersByTime(300);
    expect(openPopover).not.toHaveBeenCalled();

    stateRef.current = CLOSED;
    rerender({ isOpen: false, rows: ROWS });
    vi.advanceTimersByTime(300);
    expect(openPopover).toHaveBeenCalledTimes(1);
    expect(openPopover.mock.calls[0]?.[2]).toBe('icon|priority|2');
  });

  it('закрытый под курсором поповер не открывается снова, пока курсор не уйдёт', () => {
    const { rerender } = renderOpenHook();
    show(nodeShow());
    movePointer(110, 110);
    vi.advanceTimersByTime(300);
    expect(openPopover).toHaveBeenCalledTimes(1);
    stateRef.current = openedHoverState('icon|priority|2');
    rerender({ isOpen: true, rows: ROWS });

    // Закрыли (Esc, кнопка в содержимом), курсор на месте.
    stateRef.current = CLOSED;
    rerender({ isOpen: false, rows: ROWS });
    show(nodeShow());
    vi.advanceTimersByTime(300);
    expect(openPopover).toHaveBeenCalledTimes(1);

    // Ушли и вернулись: открывается снова.
    movePointer(400, 400);
    hide('icon');
    movePointer(110, 110);
    show(nodeShow());
    vi.advanceTimersByTime(300);
    expect(openPopover).toHaveBeenCalledTimes(2);
  });

  it('смена строк забывает запомненное наведение', () => {
    stateRef.current = { ...CLOSED, isOpen: true, contentType: 'filter' };
    const { rerender } = renderOpenHook(true, [{ id: 1 }]);
    show(nodeShow());
    movePointer(110, 110);
    vi.advanceTimersByTime(300);

    const nextRows = [{ id: 2 }];
    rerender({ isOpen: true, rows: nextRows });
    stateRef.current = CLOSED;
    rerender({ isOpen: false, rows: nextRows });
    vi.advanceTimersByTime(300);
    expect(openPopover).not.toHaveBeenCalled();
  });
});
