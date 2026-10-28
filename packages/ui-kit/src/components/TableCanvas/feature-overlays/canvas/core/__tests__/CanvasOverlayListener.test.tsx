import { act, cleanup, render } from '@testing-library/react';
import React, { useRef } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import {
  CANVAS_PORTAL_PRIORITY,
  type CanvasNodePopoverConfig,
  type CanvasPortalClickDetail,
  dispatchCanvasPortalClick,
  dispatchCanvasPortalReset,
} from '../../../../../TableGlide/lib/canvas';
import {
  TablePopoverProvider,
  type TablePopoverState,
  useTablePopover,
} from '../../../context';
import { useTablePopoverState } from '../../../hooks/useTablePopoverState';
import { CanvasOverlayListener } from '../components/CanvasOverlayListener';

const rowA = { id: 'a' };
const rowB = { id: 'b' };

const clickDetail = (
  popover: CanvasNodePopoverConfig,
  rowInd = 0,
  row: unknown = rowA,
): CanvasPortalClickDetail => ({
  x: 10,
  y: 10,
  width: 20,
  height: 20,
  originId: 'button',
  nodeId: 'button',
  source: 'cell',
  priority: CANVAS_PORTAL_PRIORITY.NODE,
  popoverFromNode: popover,
  tooltipContext: { column: { id: 'action' }, rowInd, row },
});

let lastState: TablePopoverState | null = null;

const StateProbe = () => {
  lastState = useTablePopover().state;
  return null;
};

const Table = ({ rows = [rowA] }: { rows?: readonly unknown[] }) => {
  const value = useTablePopoverState();
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <TablePopoverProvider value={value}>
      <div ref={containerRef} data-testid="table">
        <CanvasOverlayListener containerRef={containerRef} rows={rows} />
        <StateProbe />
      </div>
    </TablePopoverProvider>
  );
};

/** Тот же контекст без CanvasOverlayListener: таблицу убрали со страницы. */
const TableWithoutListener = () => {
  const value = useTablePopoverState();
  return (
    <TablePopoverProvider value={value}>
      <StateProbe />
    </TablePopoverProvider>
  );
};

const click = (container: HTMLElement, detail: CanvasPortalClickDetail) =>
  act(() => {
    dispatchCanvasPortalClick(detail, container);
  });

describe('CanvasOverlayListener: открытие по клику и жизненный цикл', () => {
  afterEach(() => {
    cleanup();
    lastState = null;
  });

  it('клик открывает поповер, onOpen вызывается один раз', () => {
    const onOpen = vi.fn();
    const { getByTestId } = render(<Table />);
    click(getByTestId('table'), clickDetail({ content: 'x', onOpen }));
    expect(lastState?.isOpen).toBe(true);
    expect(lastState?.sourceKey).toBe('button|action|0');
    expect(onOpen).toHaveBeenCalledTimes(1);
  });

  it('повторный клик по тому же источнику закрывает (closeOnOutsideClick: false)', () => {
    const onOpen = vi.fn();
    const onClose = vi.fn();
    const config = {
      content: 'x',
      closeOnOutsideClick: false,
      onOpen,
      onClose,
    };
    const { getByTestId } = render(<Table />);
    click(getByTestId('table'), clickDetail(config));
    click(getByTestId('table'), clickDetail(config));
    expect(lastState?.isOpen).toBe(false);
    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('та же кнопка в другой строке переключает поповер, а не закрывает', () => {
    const { getByTestId } = render(<Table rows={[rowA, rowB]} />);
    click(getByTestId('table'), clickDetail({ content: 'x' }, 0, rowA));
    click(getByTestId('table'), clickDetail({ content: 'x' }, 1, rowB));
    expect(lastState?.isOpen).toBe(true);
    expect(lastState?.sourceKey).toBe('button|action|1');
  });

  it('поповер по наведению по клику не открывается', () => {
    const { getByTestId } = render(<Table />);
    click(
      getByTestId('table'),
      clickDetail({ content: 'x', trigger: 'hover' }),
    );
    expect(lastState?.isOpen).toBe(false);
  });

  it('на месте строки под якорем другая строка: поповер закрывается', () => {
    const onClose = vi.fn();
    const { getByTestId, rerender } = render(<Table rows={[rowA]} />);
    click(getByTestId('table'), clickDetail({ content: 'x', onClose }));
    rerender(<Table rows={[rowA]} />);
    expect(lastState?.isOpen).toBe(true);
    rerender(<Table rows={[rowB]} />);
    expect(lastState?.isOpen).toBe(false);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('клик по ноде с dropdown открывает дропдаун', () => {
    const onOpen = vi.fn();
    const { getByTestId } = render(<Table />);
    click(getByTestId('table'), {
      ...clickDetail({ content: 'x' }),
      popoverFromNode: undefined,
      dropdownFromNode: { items: [{ value: 1, label: 'Открыть' }], onOpen },
    });
    expect(lastState?.isOpen).toBe(true);
    expect(lastState?.sourceKey).toBe('button|action|0');
    expect(
      (lastState?.contentData as { overlay?: { kind?: string } })?.overlay
        ?.kind,
    ).toBe('dropdown');
    expect(onOpen).toHaveBeenCalledTimes(1);
  });

  it('размонтирование листенера вызывает onClose', () => {
    const onClose = vi.fn();
    const { getByTestId, rerender } = render(<Table />);
    click(getByTestId('table'), clickDetail({ content: 'x', onClose }));
    rerender(<TableWithoutListener />);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

/** Таблица со своим контекстом, состояние которой пишется в `states[name]`. */
const NamedTable = ({
  name,
  states,
}: {
  name: string;
  states: Record<string, TablePopoverState>;
}) => {
  const value = useTablePopoverState();
  const containerRef = useRef<HTMLDivElement>(null);
  states[name] = value.state;
  return (
    <TablePopoverProvider value={value}>
      <div ref={containerRef} data-testid={name}>
        <CanvasOverlayListener containerRef={containerRef} rows={[rowA]} />
      </div>
    </TablePopoverProvider>
  );
};

describe('CanvasOverlayListener: две таблицы на странице', () => {
  afterEach(() => {
    cleanup();
  });

  const renderTwoTables = () => {
    const states: Record<string, TablePopoverState> = {};
    const view = render(
      <>
        <NamedTable name="first" states={states} />
        <NamedTable name="second" states={states} />
      </>,
    );
    return { states, ...view };
  };

  it('клик по элементу в одной таблице открывает Popover только в ней', () => {
    const onOpen = vi.fn();
    const { states, getByTestId } = renderTwoTables();
    click(getByTestId('first'), clickDetail({ content: 'x', onOpen }));
    expect(states['first']?.isOpen).toBe(true);
    expect(states['second']?.isOpen).toBe(false);
    expect(onOpen).toHaveBeenCalledTimes(1);
  });

  it('клик по элементу с dropdown во второй таблице открывает Dropdown только в ней', () => {
    const { states, getByTestId } = renderTwoTables();
    click(getByTestId('second'), {
      ...clickDetail({ content: 'x' }),
      popoverFromNode: undefined,
      dropdownFromNode: { items: [{ value: 1, label: 'Открыть' }] },
    });
    expect(states['first']?.isOpen).toBe(false);
    expect(states['second']?.isOpen).toBe(true);
  });

  it('сброс в другой таблице не закрывает открытый Popover', () => {
    const { states, getByTestId } = renderTwoTables();
    click(getByTestId('first'), clickDetail({ content: 'x' }));
    act(() => {
      dispatchCanvasPortalReset(getByTestId('second'));
    });
    expect(states['first']?.isOpen).toBe(true);
    act(() => {
      dispatchCanvasPortalReset(getByTestId('first'));
    });
    expect(states['first']?.isOpen).toBe(false);
  });
});
