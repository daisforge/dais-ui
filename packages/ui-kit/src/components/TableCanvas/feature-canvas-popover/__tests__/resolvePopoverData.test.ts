import { describe, expect, it } from 'vitest';

import { resolveCanvasOverlay } from '../utils/resolvePopoverData';

describe('resolveCanvasOverlay: что открыть по событию canvas-якоря', () => {
  it('проп popover на ноде даёт поповер с дефолтами из tableConfig.popover', () => {
    const overlay = resolveCanvasOverlay(
      { popoverFromNode: { content: 'x' } },
      { popover: { placement: 'right', hasTail: true } },
    );
    expect(overlay?.kind).toBe('popover');
    expect(overlay?.config).toMatchObject({
      content: 'x',
      placement: 'right',
      hasTail: true,
      trigger: 'click',
    });
  });

  it('проп dropdown на ноде даёт дропдаун с дефолтами из tableConfig.dropdown', () => {
    const items = [{ value: 1, label: 'Открыть' }];
    const overlay = resolveCanvasOverlay(
      { dropdownFromNode: { items, trigger: 'hover' } },
      { dropdown: { listWidth: 240, closeOnSelect: false } },
    );
    expect(overlay?.kind).toBe('dropdown');
    expect(overlay?.config).toMatchObject({
      items,
      trigger: 'hover',
      listWidth: 240,
      closeOnSelect: false,
      placement: 'bottom',
    });
  });

  it('если на ноде и popover, и dropdown, открывается поповер', () => {
    const overlay = resolveCanvasOverlay({
      popoverFromNode: { content: 'x' },
      dropdownFromNode: { items: [] },
    });
    expect(overlay?.kind).toBe('popover');
  });

  it('событие без конфига ничего не открывает', () => {
    expect(
      resolveCanvasOverlay({
        popoverFromNode: undefined,
        dropdownFromNode: undefined,
      }),
    ).toBeNull();
  });
});
