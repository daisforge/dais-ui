import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import type { PropsWithChildren } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  SidebarContentLayout,
  TableSidebar,
  tableSidebarClassNames as legacyClassNames,
} from '../../feature-right-sidebar';
import { tableSidebarClassNames } from '../ui/TableSidebar.classnames';

const sidebar = vi.hoisted(() => ({
  isOpen: true,
  width: 400,
  toggle: vi.fn(),
  setWidth: vi.fn(),
}));

vi.mock('../../contexts', () => ({ useSidebar: () => sidebar }));
vi.mock('../../components/TableTooltip', () => ({
  TableTooltip: ({ children }: PropsWithChildren) => children,
}));

const originalScrollTo = Object.getOwnPropertyDescriptor(
  HTMLElement.prototype,
  'scrollTo',
);

describe('published right sidebar barrel compatibility', () => {
  beforeEach(() => {
    sidebar.toggle.mockClear();
    // jsdom не реализует прокрутку DOM, которую вызывают готовые Tabs.
    Object.defineProperty(HTMLElement.prototype, 'scrollTo', {
      configurable: true,
      value: vi.fn(),
    });
  });
  afterEach(() => {
    cleanup();
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

  it('accepts old TableSidebar props and routes both close controls to the right context', () => {
    const onActiveTabChange = vi.fn();
    const tab = {
      id: 'reports',
      label: 'Reports',
      icon: <span>R</span>,
      content: <span>Legacy custom content</span>,
    };
    const { container } = render(
      <TableSidebar
        activeTabId="reports"
        sidebarTabs={[tab]}
        onActiveTabChange={onActiveTabChange}
      />,
    );

    expect(
      container.querySelector('[data-table-sidebar="right"]'),
    ).not.toBeNull();
    expect(screen.getByText('Legacy custom content')).toBeTruthy();
    expect(legacyClassNames).toBe(tableSidebarClassNames);
    expect(
      container.querySelector(`.${legacyClassNames.tableSidebarContent}`),
    ).not.toBeNull();

    fireEvent.click(screen.getByLabelText('Reports'));
    expect(onActiveTabChange).toHaveBeenLastCalledWith('reports', tab);
    expect(sidebar.toggle).toHaveBeenCalledOnce();
    fireEvent.click(screen.getByTitle('Закрыть'));
    expect(sidebar.toggle).toHaveBeenCalledTimes(2);
  });

  it('accepts old SidebarContentLayout props without onClose and uses the right context', () => {
    render(
      <SidebarContentLayout title="Legacy title">
        Legacy layout content
      </SidebarContentLayout>,
    );

    expect(screen.getByText('Legacy title')).toBeTruthy();
    expect(screen.getByText('Legacy layout content')).toBeTruthy();
    fireEvent.click(screen.getByTitle('Закрыть'));
    expect(sidebar.toggle).toHaveBeenCalledOnce();
  });
});
