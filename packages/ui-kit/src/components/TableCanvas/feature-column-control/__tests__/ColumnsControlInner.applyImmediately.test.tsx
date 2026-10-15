import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { ColumnsControlInner } from '../ColumnsControlInner';
import type { ColumnsControlConfig } from '../types';

afterEach(() => cleanup());

const COLUMNS = [
  { key: 'a', name: 'Колонка A' },
  { key: 'b', name: 'Колонка B' },
  { key: 'c', name: 'Колонка C' },
];

const renderControl = (config: Partial<ColumnsControlConfig>) => {
  const props = {
    opened: true,
    onClose: vi.fn(),
    columnsOrder: ['a', 'b', 'c'],
    getDefaultColumnsOrder: () => ['a', 'b', 'c'],
    setColumnsOrder: vi.fn(),
    pinnedCols: [] as string[],
    setPinnedCols: vi.fn(),
    hiddenCols: [] as string[],
    setHiddenCols: vi.fn(),
    columnConfig: COLUMNS,
    columnsControlConfig: {
      enable: true,
      hiding: true,
      onConfirm: vi.fn(),
      ...config,
    } as ColumnsControlConfig,
    colsWithKeyTextMap: new Map(),
    keyText: undefined,
    tableConfigKeyTextBoolean: false,
  };
  render(
    <ColumnsControlInner
      {...(props as unknown as React.ComponentProps<
        typeof ColumnsControlInner
      >)}
    />,
  );
  return props;
};

/** Свитч скрытия колонки: обёртка с title «Скрыть», внутри input. */
const hideSwitch = (index: number) => {
  const input = screen.getAllByTitle('Скрыть')[index].querySelector('input');
  if (!input) throw new Error('свитч скрытия не найден');
  return input;
};

describe('ColumnsControlInner: applyImmediately', () => {
  it('по умолчанию есть кнопки, а скрытие ждёт «Применить»', () => {
    const props = renderControl({});
    expect(screen.getByRole('button', { name: 'Применить' })).toBeTruthy();

    fireEvent.click(hideSwitch(1));
    expect(props.setHiddenCols).not.toHaveBeenCalled();
    expect(props.columnsControlConfig.onConfirm).not.toHaveBeenCalled();

    fireEvent.click(screen.getByRole('button', { name: 'Применить' }));
    expect(props.setHiddenCols).toHaveBeenCalledWith(['b']);
    expect(props.columnsControlConfig.onConfirm).toHaveBeenCalledWith(
      expect.objectContaining({ hidden: ['b'], changed: { hidden: 'hidden' } }),
      expect.anything(),
    );
  });

  it('applyImmediately: кнопок нет, скрытие сразу уходит в таблицу и onConfirm', () => {
    const props = renderControl({ applyImmediately: true });
    expect(screen.queryByRole('button', { name: 'Применить' })).toBeNull();
    expect(screen.queryByRole('button', { name: 'Отменить' })).toBeNull();

    fireEvent.click(hideSwitch(1));
    expect(props.setHiddenCols).toHaveBeenCalledWith(['b']);
    expect(props.columnsControlConfig.onConfirm).toHaveBeenCalledTimes(1);
    expect(props.columnsControlConfig.onConfirm).toHaveBeenCalledWith(
      {
        order: ['a', 'b', 'c'],
        pinned: [],
        hidden: ['b'],
        changed: { hidden: 'hidden' },
      },
      expect.objectContaining({ setHiddenCols: props.setHiddenCols }),
    );
    expect(props.onClose).not.toHaveBeenCalled();
  });
});
