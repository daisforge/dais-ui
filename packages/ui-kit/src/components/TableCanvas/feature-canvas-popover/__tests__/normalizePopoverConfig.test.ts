import { describe, expect, it } from 'vitest';

import { POPOVER_Z_INDEX } from '../../feature-popover-table/constants';
import { normalizePopoverConfig } from '../utils/normalizePopoverConfig';

describe('normalizePopoverConfig: дефолты поповера', () => {
  it('без tableConfig.popover берутся встроенные дефолты', () => {
    expect(normalizePopoverConfig({ content: 'x' })).toEqual({
      content: 'x',
      renderContent: undefined,
      placement: 'bottom-start',
      offset: 4,
      hasTail: false,
      flip: true,
      shift: true,
      zIndex: POPOVER_Z_INDEX,
      closeOnScroll: true,
      closeOnOutsideClick: true,
      closeOnEsc: true,
      trigger: 'click',
      mouseEnterDelay: 300,
      mouseLeaveDelay: 200,
      resizable: undefined,
      ariaLabel: undefined,
      onOpen: undefined,
      onClose: undefined,
    });
  });

  it('tableConfig.popover перекрывает встроенные дефолты', () => {
    const resolved = normalizePopoverConfig(
      { content: 'x' },
      { placement: 'right-start', hasTail: true, closeOnScroll: false },
    );
    expect(resolved.placement).toBe('right-start');
    expect(resolved.hasTail).toBe(true);
    expect(resolved.closeOnScroll).toBe(false);
    expect(resolved.offset).toBe(4);
  });

  it('конфиг элемента важнее tableConfig.popover, включая false', () => {
    const onOpen = () => {};
    const resolved = normalizePopoverConfig(
      { content: 'x', placement: 'top', hasTail: false, offset: 12, onOpen },
      { placement: 'right-start', hasTail: true, offset: 0 },
    );
    expect(resolved.placement).toBe('top');
    expect(resolved.hasTail).toBe(false);
    expect(resolved.offset).toBe(12);
    expect(resolved.onOpen).toBe(onOpen);
  });

  it('задержки наведения: элемент важнее tableConfig.popover', () => {
    const resolved = normalizePopoverConfig(
      { content: 'x', trigger: 'hover', mouseEnterDelay: 0 },
      { mouseEnterDelay: 500, mouseLeaveDelay: 50 },
    );
    expect(resolved.trigger).toBe('hover');
    expect(resolved.mouseEnterDelay).toBe(0);
    expect(resolved.mouseLeaveDelay).toBe(50);
  });

  it('renderContent передаётся как есть', () => {
    const renderContent = () => null;
    const resolved = normalizePopoverConfig({ renderContent });
    expect(resolved.renderContent).toBe(renderContent);
    expect(resolved.content).toBeUndefined();
  });
});
