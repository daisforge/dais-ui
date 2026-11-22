import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest';

import { FiltersActionsFiltersButtonWithPopover } from '../FiltersButtonWithPopover';
import { FILTERS_POPOVER_SIZE } from '../FiltersButtonWithPopover.constants';
import { getFiltersPopoverResizable } from '../FiltersButtonWithPopover.utils';

// Popover из Plasma читает matchMedia, которого нет в jsdom.
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

afterEach(() => cleanup());

const setInnerHeight = (height: number) => {
  Object.defineProperty(window, 'innerHeight', {
    configurable: true,
    value: height,
  });
};

describe('getFiltersPopoverResizable', () => {
  it('false выключает ресайз', () => {
    expect(getFiltersPopoverResizable(false)).toBe(false);
  });

  it('без пропа и с true даёт размеры по умолчанию', () => {
    [undefined, true].forEach((value) => {
      expect(getFiltersPopoverResizable(value)).toMatchObject({
        minWidth: FILTERS_POPOVER_SIZE.minWidth,
        maxWidth: FILTERS_POPOVER_SIZE.maxWidth,
        minHeight: FILTERS_POPOVER_SIZE.minHeight,
        defaultSize: {
          width: FILTERS_POPOVER_SIZE.defaultWidth,
          height: FILTERS_POPOVER_SIZE.defaultHeight,
        },
      });
    });
  });

  it('свой maxWidth больше 700 сохраняется, остальное берётся по умолчанию', () => {
    expect(getFiltersPopoverResizable({ maxWidth: 1000 })).toMatchObject({
      maxWidth: 1000,
      minWidth: FILTERS_POPOVER_SIZE.minWidth,
    });
  });

  it('maxHeight считается от текущей высоты окна, а не от высоты при загрузке', () => {
    setInnerHeight(1000);
    expect(getFiltersPopoverResizable(true)).toMatchObject({ maxHeight: 800 });

    setInnerHeight(500);
    expect(getFiltersPopoverResizable(true)).toMatchObject({ maxHeight: 400 });
  });
});

describe('FiltersActionsFiltersButtonWithPopover: границы карточки', () => {
  const renderOpened = (
    popoverProps: React.ComponentProps<
      typeof FiltersActionsFiltersButtonWithPopover
    >['popoverProps'],
  ) =>
    render(
      <FiltersActionsFiltersButtonWithPopover
        title="Фильтры"
        content={<div>контент</div>}
        state={[true, () => {}]}
        popoverProps={{ ...popoverProps, usePortal: false, animated: false }}
      />,
    );

  // Заголовок → блок текста → верх шапки → шапка → карточка.
  const getCard = () =>
    screen.getByText('Фильтры').parentElement?.parentElement?.parentElement
      ?.parentElement as HTMLElement;

  it('с ресайзом у карточки нет своих min/max размеров', () => {
    renderOpened({ resizable: { maxWidth: 1000 } });

    const style = getComputedStyle(getCard());
    expect(style.maxWidth).not.toBe(`${FILTERS_POPOVER_SIZE.maxWidth}px`);
    expect(style.minWidth).not.toBe(`${FILTERS_POPOVER_SIZE.minWidth}px`);
  });

  it('без ресайза карточку ограничивает CSS', () => {
    renderOpened({ resizable: false });

    const style = getComputedStyle(getCard());
    expect(style.maxWidth).toBe(`${FILTERS_POPOVER_SIZE.maxWidth}px`);
    expect(style.minWidth).toBe(`${FILTERS_POPOVER_SIZE.minWidth}px`);
  });
});
