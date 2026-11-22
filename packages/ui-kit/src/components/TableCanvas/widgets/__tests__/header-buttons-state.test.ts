import { describe, expect, it } from 'vitest';

import { getHeaderButtonsBlockWidth } from '../../utils/calculateMinColumnWidth';
import { getHeaderButtonsState } from '../header-buttons-state';

const bothAvailable = {
  filterAvailable: true,
  sortAvailable: true,
  filterActive: false,
  sortActive: false,
};

describe('getHeaderButtonsState', () => {
  it('без наведения и активных состояний кнопок нет', () => {
    const state = getHeaderButtonsState({ ...bothAvailable, hoverAmount: 0 });

    expect(state.showFilterButton).toBe(false);
    expect(state.showSortButton).toBe(false);
    expect(state.blockWidth).toBe(0);
  });

  it('при полном наведении показаны обе кнопки без анимации', () => {
    const state = getHeaderButtonsState({ ...bothAvailable, hoverAmount: 1 });

    expect(state.showFilterButton).toBe(true);
    expect(state.showSortButton).toBe(true);
    expect(state.isSliding).toBe(false);
    expect(state.visibleWidth).toBe(state.blockWidth);
  });

  it('в середине наведения блок выезжает на долю своей ширины', () => {
    const state = getHeaderButtonsState({
      ...bothAvailable,
      hoverAmount: 0.5,
    });

    expect(state.isSliding).toBe(true);
    expect(state.blockWidth).toBe(getHeaderButtonsBlockWidth(2));
    expect(state.visibleWidth).toBe(state.blockWidth / 2);
  });

  it('без наведения остаётся только активная сортировка', () => {
    const state = getHeaderButtonsState({
      ...bothAvailable,
      sortActive: true,
      hoverAmount: 0,
    });

    expect(state.showFilterButton).toBe(false);
    expect(state.showSortButton).toBe(true);
    expect(state.isSliding).toBe(false);
    expect(state.blockWidth).toBe(getHeaderButtonsBlockWidth(1));
  });

  it('при активной кнопке наведение добавляет вторую без анимации', () => {
    const state = getHeaderButtonsState({
      ...bothAvailable,
      filterActive: true,
      hoverAmount: 0.3,
    });

    expect(state.showFilterButton).toBe(true);
    expect(state.showSortButton).toBe(true);
    expect(state.isSliding).toBe(false);
  });

  it('недоступная кнопка не показывается даже при наведении', () => {
    const state = getHeaderButtonsState({
      ...bothAvailable,
      filterAvailable: false,
      hoverAmount: 1,
    });

    expect(state.showFilterButton).toBe(false);
    expect(state.showSortButton).toBe(true);
    expect(state.blockWidth).toBe(getHeaderButtonsBlockWidth(1));
  });
});
