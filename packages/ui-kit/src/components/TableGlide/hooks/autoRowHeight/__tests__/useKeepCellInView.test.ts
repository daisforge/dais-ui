import type { DataEditorRef } from '@glideappsfinal/glide-data-grid';
import { renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { KEEP_CELL_IN_VIEW_MS, useKeepCellInView } from '../useKeepCellInView';

type Props = {
  enabled: boolean;
  cell: readonly [number, number] | undefined;
  rowHeights: unknown;
};

const setup = (initial: Partial<Props> = {}) => {
  const scrollTo = vi.fn();
  const dataEditorRef = { current: { scrollTo } as unknown as DataEditorRef };
  const hook = renderHook(
    (props: Props) => useKeepCellInView({ ...props, dataEditorRef }),
    {
      initialProps: {
        enabled: true,
        cell: undefined,
        rowHeights: 0,
        ...initial,
      },
    },
  );
  return { scrollTo, hook };
};

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

describe('useKeepCellInView', () => {
  it('после коммита высот докручивает к ячейке, выбранной перед этим', () => {
    const { scrollTo, hook } = setup();

    hook.rerender({ enabled: true, cell: [3, 319], rowHeights: 0 });
    hook.rerender({ enabled: true, cell: [3, 319], rowHeights: 1 });

    expect(scrollTo).toHaveBeenCalledWith(3, 319);
  });

  it('без смены ячейки коммит высот ничего не прокручивает', () => {
    const { scrollTo, hook } = setup();

    hook.rerender({ enabled: true, cell: undefined, rowHeights: 1 });

    expect(scrollTo).not.toHaveBeenCalled();
  });

  it.each(['wheel', 'touchstart', 'pointerdown'])(
    'после %s пользователь управляет прокруткой сам — к ячейке не возвращает',
    (type) => {
      const { scrollTo, hook } = setup();
      hook.rerender({ enabled: true, cell: [3, 319], rowHeights: 0 });

      window.dispatchEvent(new Event(type));
      hook.rerender({ enabled: true, cell: [3, 319], rowHeights: 1 });

      expect(scrollTo).not.toHaveBeenCalled();
    },
  );

  it('цель живёт ограниченное время', () => {
    const { scrollTo, hook } = setup();
    hook.rerender({ enabled: true, cell: [3, 319], rowHeights: 0 });

    vi.advanceTimersByTime(KEEP_CELL_IN_VIEW_MS + 1);
    hook.rerender({ enabled: true, cell: [3, 319], rowHeights: 1 });

    expect(scrollTo).not.toHaveBeenCalled();
  });

  it('новая ячейка становится новой целью', () => {
    const { scrollTo, hook } = setup();
    hook.rerender({ enabled: true, cell: [3, 100], rowHeights: 0 });
    hook.rerender({ enabled: true, cell: [3, 319], rowHeights: 0 });

    hook.rerender({ enabled: true, cell: [3, 319], rowHeights: 1 });

    expect(scrollTo).toHaveBeenLastCalledWith(3, 319);
  });

  it('выключен (высота строк не по содержимому) — не прокручивает', () => {
    const { scrollTo, hook } = setup({ enabled: false });

    hook.rerender({ enabled: false, cell: [3, 319], rowHeights: 0 });
    hook.rerender({ enabled: false, cell: [3, 319], rowHeights: 1 });

    expect(scrollTo).not.toHaveBeenCalled();
  });
});
