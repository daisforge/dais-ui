import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import type { Pagination } from '@ui-kit/components/Pagination';
import type { ComponentProps } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TablePagination } from '../../feature-pagination/TablePagination';

type PaginationMockProps = Pick<
  ComponentProps<typeof Pagination>,
  'className' | 'slots' | 'hasQuickJump'
>;

const observer = vi.hoisted(() => ({
  callback: null as ResizeObserverCallback | null,
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.mock('../../contexts', () => ({
  useRefTableContext: () => ({ current: null }),
}));
vi.mock('@ui-kit/utils', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@ui-kit/utils')>()),
  createSafeResizeObserver: (callback: ResizeObserverCallback) => {
    observer.callback = callback;
    return observer;
  },
}));
vi.mock('@ui-kit/components/Pagination', async () => {
  const { useState } = await import('react');
  const PaginationMock = ({
    className,
    slots,
    hasQuickJump,
  }: PaginationMockProps) => {
    const [draft, setDraft] = useState('initial draft');
    return (
      <div
        className={className}
        data-testid="pagination-controls"
        data-slots={slots}
        data-quick-jump={hasQuickJump}
      >
        <input
          aria-label="Pagination draft"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
        />
      </div>
    );
  };
  return { Pagination: PaginationMock };
});

const emitResize = (target: Element, height: number, width = 1000) => {
  const entry: ResizeObserverEntry = {
    target,
    contentRect: {
      x: 0,
      y: 0,
      width,
      height,
      top: 0,
      right: width,
      bottom: height,
      left: 0,
      toJSON: () => ({}),
    },
    borderBoxSize: [],
    contentBoxSize: [],
    devicePixelContentBoxSize: [],
  };
  act(() => observer.callback?.([entry], observer));
};

describe('pagination collapse without remounting', () => {
  beforeEach(() => {
    observer.callback = null;
    observer.observe.mockClear();
    observer.disconnect.mockClear();
  });
  afterEach(() => cleanup());

  it('preserves natural height, DOM and draft state while hiding the existing root', () => {
    const setPaginationHeight = vi.fn();
    const props = {
      value: 1,
      count: 100,
      perPage: 10,
      responsiveSlots: true,
      setPaginationHeight,
    };
    const { container, rerender } = render(<TablePagination {...props} />);
    const root = container.firstElementChild as HTMLDivElement;
    const controls = screen.getByTestId('pagination-controls');
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(observer.observe).toHaveBeenCalledWith(root);
    expect(controls.parentElement?.parentElement).toBe(root);
    expect(root.hasAttribute('inert')).toBe(false);

    emitResize(root, 56);
    expect(setPaginationHeight.mock.calls).toEqual([[56]]);
    fireEvent.change(input, { target: { value: 'unsent page draft' } });
    const slotsBeforeCollapse = controls.getAttribute('data-slots');
    expect(slotsBeforeCollapse).not.toBeNull();

    rerender(<TablePagination {...props} isCollapsed />);
    expect(container.firstElementChild).toBe(root);
    expect(screen.getByTestId('pagination-controls')).toBe(controls);
    expect(screen.getByLabelText('Pagination draft')).toBe(input);
    expect(input.value).toBe('unsent page draft');
    expect(input.closest('[aria-hidden="true"][inert]')).toBe(root);
    expect(screen.queryByRole('textbox')).toBeNull();
    expect(root.style.maxHeight).toBe('0');
    expect(root.style.display).not.toBe('none');

    emitResize(root, 0);
    expect(setPaginationHeight.mock.calls).toEqual([[56]]);
    expect(controls.getAttribute('data-slots')).toBe(slotsBeforeCollapse);
    rerender(<TablePagination {...props} isCollapsed={false} />);
    expect(screen.getByRole('textbox')).toBe(input);
    expect(input.value).toBe('unsent page draft');
    expect(root.hasAttribute('inert')).toBe(false);
    expect(root.getAttribute('aria-hidden')).toBe('false');
    expect(root.style.maxHeight).toBe('');
    expect(observer.observe).toHaveBeenCalledOnce();

    emitResize(root, 64);
    expect(setPaginationHeight.mock.calls).toEqual([[56], [64]]);
  });

  it('keeps the initial height fallback when mounted collapsed and measures on expansion', () => {
    const setPaginationHeight = vi.fn();
    const { container, rerender, unmount } = render(
      <TablePagination setPaginationHeight={setPaginationHeight} isCollapsed />,
    );
    const root = container.firstElementChild as HTMLDivElement;
    emitResize(root, 0);
    expect(setPaginationHeight).not.toHaveBeenCalled();

    rerender(<TablePagination setPaginationHeight={setPaginationHeight} />);
    emitResize(root, 56);
    expect(setPaginationHeight).toHaveBeenLastCalledWith(56);
    expect(screen.getByRole('textbox')).toBeTruthy();
    unmount();
    expect(observer.disconnect).toHaveBeenCalledOnce();
  });
});
