import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import type { PropsWithChildren } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import type { SidebarTab } from '../../widgets/control-block/types';
import { TableSidebar } from '../ui/TableSidebar';

vi.mock('../../components/TableTooltip', () => ({
  TableTooltip: ({ children }: PropsWithChildren) => children,
}));

const tabs: SidebarTab[] = [
  {
    id: 'reports',
    label: 'Reports',
    icon: <span>R</span>,
    content: <input aria-label="Report content" defaultValue="Reports" />,
    title: 'Report title',
    titleRightSlot: <span>Report slot</span>,
  },
  {
    id: 'books',
    label: 'Books',
    icon: <span>B</span>,
    content: <button type="button">Books content</button>,
  },
];

const originalScrollTo = Object.getOwnPropertyDescriptor(
  HTMLElement.prototype,
  'scrollTo',
);

describe.each(['left', 'right'] as const)('%s sidebar shared shell', (side) => {
  beforeEach(() => {
    vi.useFakeTimers();
    // jsdom не реализует прокрутку DOM, которую вызывают готовые Tabs.
    Object.defineProperty(HTMLElement.prototype, 'scrollTo', {
      configurable: true,
      value: vi.fn(),
    });
  });
  afterEach(() => {
    cleanup();
    vi.clearAllTimers();
    vi.useRealTimers();
    if (originalScrollTo) {
      Object.defineProperty(
        HTMLElement.prototype,
        'scrollTo',
        originalScrollTo,
      );
    } else {
      Reflect.deleteProperty(HTMLElement.prototype, 'scrollTo');
    }
  });

  it('renders custom content and closes the given panel without sidebar providers', () => {
    const toggle = vi.fn();
    const onActiveTabChange = vi.fn();
    const { container } = render(
      <TableSidebar
        side={side}
        sidebarState={{ isOpen: true, width: 350, toggle }}
        activeTabId={null}
        sidebarTabs={tabs}
        onActiveTabChange={onActiveTabChange}
      />,
    );

    expect(
      container.querySelector(`[data-table-sidebar="${side}"]`),
    ).not.toBeNull();
    expect(screen.getByText('Report title')).toBeTruthy();
    expect(screen.getByText('Report slot')).toBeTruthy();
    expect(screen.getByLabelText('Report content')).toBeTruthy();
    fireEvent.click(screen.getByLabelText('Books'));
    expect(screen.queryByLabelText('Report content')).toBeNull();
    expect(screen.getByText('Books content')).toBeTruthy();
    expect(onActiveTabChange).toHaveBeenLastCalledWith('books', tabs[1]);
    expect(toggle).not.toHaveBeenCalled();
    fireEvent.click(screen.getByTitle('Закрыть'));
    expect(toggle).toHaveBeenCalledOnce();
  });

  it('keeps the same content node inert until the closing animation finishes', () => {
    const toggle = vi.fn();
    const props = {
      side,
      activeTabId: null,
      sidebarTabs: tabs,
    };
    const { rerender } = render(
      <TableSidebar
        {...props}
        sidebarState={{ isOpen: true, width: '35%', toggle }}
      />,
    );
    const content = screen.getByLabelText('Report content');

    rerender(
      <TableSidebar
        {...props}
        sidebarState={{ isOpen: false, width: '35%', toggle }}
      />,
    );
    expect(screen.getByLabelText('Report content')).toBe(content);
    expect(content.closest('[aria-hidden="true"][inert]')).not.toBeNull();
    act(() => vi.advanceTimersByTime(300));
    expect(screen.getByLabelText('Report content')).toBe(content);
    act(() => vi.advanceTimersByTime(200));
    expect(screen.queryByLabelText('Report content')).toBeNull();
  });
});
