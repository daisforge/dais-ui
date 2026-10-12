import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';
import { Button } from '@ui-kit/components/Button';
import { TableCanvas, useSidebar } from '@ui-kit/components/TableCanvas';
import { BodyS } from '@ui-kit/components/Typography';
import { IconDocumentOutline } from '@ui-kit/icons';
import React, { useState } from 'react';

import {
  LeftSidebarExample,
  RightSidebarExample,
} from './Table.sidebar.examples';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/Sidebar/Проверки взаимодействий',
  parameters: { layout: 'fullscreen' },
  tags: ['!autodocs'],
};
export default meta;

const verifyWidthByTab = async (
  canvasElement: HTMLElement,
  side: 'left' | 'right',
  reportsWidth: number,
) => {
  const canvas = within(canvasElement);
  const sidebar = canvasElement.querySelector<HTMLElement>(
    `[data-table-sidebar="${side}"]`,
  );
  const workspace = canvasElement.querySelector<HTMLElement>(
    '.rdg-table-sidebar-layout',
  );
  if (!sidebar || !workspace) throw new Error('Missing sidebar layout');
  await waitFor(() =>
    expect(Math.round(sidebar.getBoundingClientRect().width)).toBe(
      reportsWidth + 44,
    ),
  );
  await userEvent.click(canvas.getByLabelText('Книги'));
  await waitFor(() =>
    expect(Math.round(sidebar.getBoundingClientRect().width)).toBe(
      Math.round(workspace.getBoundingClientRect().width * 0.35 + 44),
    ),
  );
  await waitFor(() => expect(canvas.getByText('Книги отчётов')).toBeVisible());
  await userEvent.click(canvas.getByLabelText('Книги'));
  await waitFor(() =>
    expect(Math.round(sidebar.getBoundingClientRect().width)).toBe(44),
  );
  await userEvent.click(canvas.getByLabelText('Книги'));
  await waitFor(() =>
    expect(Math.round(sidebar.getBoundingClientRect().width)).toBe(
      Math.round(workspace.getBoundingClientRect().width * 0.35 + 44),
    ),
  );
  await userEvent.click(canvas.getByLabelText('Отчёты'));
  await waitFor(() =>
    expect(Math.round(sidebar.getBoundingClientRect().width)).toBe(
      reportsWidth + 44,
    ),
  );
};

export const LeftWidthByTab: StoryObj = {
  name: 'Левая панель: ширина по ID вкладки',
  render: () => <LeftSidebarExample />,
  play: async ({ canvasElement }) =>
    verifyWidthByTab(canvasElement, 'left', 300),
};
export const RightWidthByTab: StoryObj = {
  name: 'Правая панель: ширина по ID вкладки',
  render: () => <RightSidebarExample />,
  play: async ({ canvasElement }) =>
    verifyWidthByTab(canvasElement, 'right', 400),
};

function LegacyWidthControls() {
  const { width, setWidth } = useSidebar();
  return (
    <div style={{ padding: 16 }}>
      <BodyS>Ширина useSidebar: {width}</BodyS>
      <Button size="xs" view="secondary" onClick={() => setWidth(360)}>
        Внутренняя ширина 360
      </Button>
      <Button size="xs" view="secondary" onClick={() => setWidth(500)}>
        Внутренняя ширина 500
      </Button>
    </div>
  );
}

function LegacyWidthExample() {
  const [configWidth, setConfigWidth] = useState(false);
  return (
    <div style={{ padding: 16 }}>
      <Button
        size="xs"
        view="secondary"
        onClick={() => setConfigWidth((value) => !value)}
      >
        Ширина из конфига
      </Button>
      <TableCanvas
        rows={[{ id: 1, report: 'Финансовый отчёт' }]}
        columnConfig={[
          { key: 'id', name: 'ID', width: 100 },
          { key: 'report', name: 'Отчёт', width: 360 },
        ]}
        tableConfig={{
          containerStyle: { height: 480 },
          sidebarConfig: {
            width: configWidth ? '35%' : undefined,
            defaultOpen: true,
            defaultActiveTabId: 'reports',
            defaultTabs: [
              { id: 'tableSettings', showInSidebar: false },
              { id: 'columns', showInSidebar: false },
              { id: 'filtering', showInSidebar: false },
            ],
            customTabs: [
              {
                id: 'reports',
                label: 'Отчёты',
                icon: <IconDocumentOutline size="s" />,
                content: <LegacyWidthControls />,
              },
            ],
          },
        }}
      />
    </div>
  );
}

export const LegacyWidth: StoryObj = {
  name: 'Совместимость числового useSidebar и приоритет конфига',
  render: () => <LegacyWidthExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const sidebar = canvasElement.querySelector<HTMLElement>(
      '[data-table-sidebar="right"]',
    );
    const workspace = canvasElement.querySelector<HTMLElement>(
      '.rdg-table-sidebar-layout',
    );
    if (!sidebar || !workspace) throw new Error('Missing sidebar layout');
    await waitFor(() =>
      expect(Math.round(sidebar.getBoundingClientRect().width)).toBe(444),
    );
    // Ширина готова до завершения появления контента; ждём обе части анимации.
    await waitFor(() =>
      expect(canvas.getByText('Ширина useSidebar: 400')).toBeVisible(),
    );
    await userEvent.click(
      canvas.getByRole('button', { name: 'Внутренняя ширина 360' }),
    );
    await waitFor(() =>
      expect(Math.round(sidebar.getBoundingClientRect().width)).toBe(404),
    );
    await userEvent.click(
      canvas.getByRole('button', { name: 'Ширина из конфига' }),
    );
    await waitFor(() =>
      expect(Math.round(sidebar.getBoundingClientRect().width)).toBe(
        Math.round(workspace.getBoundingClientRect().width * 0.35 + 44),
      ),
    );
    await userEvent.click(
      canvas.getByRole('button', { name: 'Внутренняя ширина 500' }),
    );
    await waitFor(() =>
      expect(canvas.getByText('Ширина useSidebar: 500')).toBeVisible(),
    );
    expect(Math.round(sidebar.getBoundingClientRect().width)).toBe(
      Math.round(workspace.getBoundingClientRect().width * 0.35 + 44),
    );
    await userEvent.click(
      canvas.getByRole('button', { name: 'Ширина из конфига' }),
    );
    await waitFor(() =>
      expect(Math.round(sidebar.getBoundingClientRect().width)).toBe(544),
    );
  },
};
