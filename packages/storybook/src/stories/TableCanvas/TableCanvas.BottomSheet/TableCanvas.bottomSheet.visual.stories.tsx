import type { Meta, StoryObj } from '@storybook/react';
import { expect, fireEvent, userEvent, waitFor, within } from '@storybook/test';
import type { DataEditorRef } from '@ui-kit/components/TableCanvas/TableGlideInstance/type';
import React from 'react';

import { AllFeaturesExample } from './TableCanvas.bottomSheet.example';

const clipboardTableRef = React.createRef<DataEditorRef>();

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/BottomSheet/Проверки взаимодействий',
  parameters: { layout: 'fullscreen' },
  tags: ['!autodocs'],
};
export default meta;
export const DynamicBottomSheet: StoryObj = {
  name: 'Динамические размеры, состояния и collapse',
  render: () => <AllFeaturesExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const getElement = (selector: string) => {
      const element = canvasElement.querySelector<HTMLElement>(selector);
      if (!element) throw new Error(`Missing panel element: ${selector}`);
      return element;
    };
    const root = getElement('.rdg-container-all');
    const viewport = getElement('.rdg-table-sidebar-layout-table-container');
    const sheet = getElement('.rdg-table-bottom-sheet');
    const left = getElement('[data-table-sidebar="left"]');
    await waitFor(() =>
      expect(Math.round(sheet.getBoundingClientRect().height)).toBe(32),
    );
    const initialHeight = viewport.getBoundingClientRect().height;
    await userEvent.click(canvas.getByRole('button', { name: 'Открыть лог' }));
    const intermediateHeights: number[] = [];
    await waitFor(
      () => {
        const currentHeight = sheet.getBoundingClientRect().height;
        intermediateHeights.push(currentHeight);
        expect(Math.round(root.getBoundingClientRect().height)).toBe(620);
        expect(Math.round(currentHeight)).toBe(220);
      },
      { interval: 16 },
    );
    expect(intermediateHeights.some((value) => value > 32 && value < 219)).toBe(
      true,
    );
    expect(Math.round(root.getBoundingClientRect().height)).toBe(620);
    expect(
      Math.abs(initialHeight - viewport.getBoundingClientRect().height - 188),
    ).toBeLessThanOrEqual(1);
    await userEvent.click(canvas.getByRole('button', { name: 'Ширина 360' }));
    await waitFor(() =>
      expect(Math.round(left.getBoundingClientRect().width)).toBe(404),
    );
    await userEvent.click(canvas.getByRole('button', { name: 'Большой лог' }));
    await waitFor(() =>
      expect(Math.round(viewport.getBoundingClientRect().height)).toBe(120),
    );
    expect(sheet.getBoundingClientRect().bottom).toBeLessThanOrEqual(
      root.getBoundingClientRect().bottom,
    );
    await userEvent.click(canvas.getByRole('button', { name: /^Collapse$/ }));
    await waitFor(() =>
      expect(Math.round(root.getBoundingClientRect().height)).toBe(40),
    );
    expect(root.querySelector('.rdg-table-sidebar-layout')).toHaveAttribute(
      'inert',
    );
    await userEvent.click(canvas.getByRole('button', { name: /^Collapse$/ }));
    await waitFor(() =>
      expect(Math.round(root.getBoundingClientRect().height)).toBe(620),
    );
    await userEvent.click(canvas.getByRole('button', { name: 'Закрыть лог' }));
    await userEvent.click(canvas.getByRole('button', { name: 'Ширина 25%' }));
    const workspace = getElement('.rdg-table-sidebar-layout');
    await waitFor(() =>
      expect(Math.round(left.getBoundingClientRect().width)).toBe(
        Math.round(workspace.getBoundingClientRect().width * 0.25 + 44),
      ),
    );
    await userEvent.click(canvas.getByRole('button', { name: 'Лог 35%' }));
    await waitFor(() =>
      expect(Math.round(sheet.getBoundingClientRect().height)).toBe(
        Math.round(workspace.getBoundingClientRect().height * 0.35),
      ),
    );
    await userEvent.click(canvas.getByRole('button', { name: 'Error state' }));
    await waitFor(() =>
      expect(canvas.getByText('Не удалось загрузить отчёты')).toBeVisible(),
    );
    await waitFor(() =>
      expect(Math.round(sheet.getBoundingClientRect().height)).toBe(
        Math.round(workspace.getBoundingClientRect().height * 0.35),
      ),
    );
    await userEvent.click(canvas.getByRole('button', { name: 'Error state' }));
    await userEvent.click(canvas.getByRole('button', { name: 'Empty state' }));
    await waitFor(() =>
      expect(canvas.getByText('Отчётов пока нет')).toBeVisible(),
    );
    await userEvent.click(canvas.getByRole('button', { name: 'Empty state' }));
    await userEvent.click(
      canvas.getByRole('button', { name: 'Удалить вкладку' }),
    );
    await waitFor(() =>
      expect(canvas.getByText('Книги отчётов')).toBeVisible(),
    );
    await userEvent.click(
      canvas.getByRole('button', { name: 'Открытие извне' }),
    );
    await waitFor(() =>
      expect(Math.round(left.getBoundingClientRect().width)).toBe(44),
    );
    await userEvent.click(
      canvas.getByRole('button', { name: 'Открытие извне' }),
    );
    await waitFor(() =>
      expect(Math.round(left.getBoundingClientRect().width)).toBe(
        Math.round(workspace.getBoundingClientRect().width * 0.25 + 44),
      ),
    );
  },
};

const verifyCollapsedLayout = async (
  canvasElement: HTMLElement,
  expandedHeight: number,
  collapsedHeight: number,
) => {
  const canvas = within(canvasElement);
  const root = canvasElement.querySelector<HTMLElement>('.rdg-container-all');
  if (!root) throw new Error('Missing TableCanvas');
  await userEvent.click(canvas.getByRole('button', { name: /^Collapse$/ }));
  await waitFor(() =>
    expect(Math.round(root.getBoundingClientRect().height)).toBe(
      collapsedHeight,
    ),
  );
  expect(root.querySelector('.rdg-table-sidebar-layout')).toHaveAttribute(
    'inert',
  );
  await userEvent.click(canvas.getByRole('button', { name: /^Collapse$/ }));
  await waitFor(() =>
    expect(Math.round(root.getBoundingClientRect().height)).toBe(
      expandedHeight,
    ),
  );
};

export const CollapseAbove: StoryObj = {
  name: 'Collapse сверху',
  render: () => <AllFeaturesExample placement="above" />,
  play: async ({ canvasElement }) =>
    verifyCollapsedLayout(canvasElement, 620, 80),
};
export const CompactControlBlock: StoryObj = {
  name: 'Компактный control block без компрессии',
  render: () => <AllFeaturesExample controlBlockSize="xs" adaptive={false} />,
  play: async ({ canvasElement }) =>
    verifyCollapsedLayout(canvasElement, 620, 32),
};
export const InitiallyCollapsed: StoryObj = {
  name: 'Начальное свёрнутое состояние',
  render: () => <AllFeaturesExample initialCollapsed />,
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector<HTMLElement>('.rdg-container-all');
    if (!root) throw new Error('Missing TableCanvas');
    await waitFor(() =>
      expect(Math.round(root.getBoundingClientRect().height)).toBe(40),
    );
    expect(root.querySelector('.rdg-table-sidebar-layout')).toHaveAttribute(
      'inert',
    );
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /^Collapse$/ }));
    await waitFor(() =>
      expect(Math.round(root.getBoundingClientRect().height)).toBe(620),
    );
    expect(root.querySelector('.rdg-table-sidebar-layout')).not.toHaveAttribute(
      'inert',
    );
    await userEvent.click(canvas.getByRole('button', { name: /^Collapse$/ }));
    await waitFor(() =>
      expect(Math.round(root.getBoundingClientRect().height)).toBe(40),
    );
  },
};

export const DataModesAndStates: StoryObj = {
  name: 'Структуры, локальная подгрузка и состояния layout',
  render: () => <AllFeaturesExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const example = canvas.getByTestId('bottom-sheet-all-features');
    const structure = canvas.getByRole('combobox', {
      name: 'Структура данных',
    });
    const dataMode = canvas.getByRole('combobox', { name: 'Получение данных' });
    const status = canvas.getByRole('combobox', { name: 'Состояние таблицы' });
    const expectRows = async (count: number) =>
      waitFor(() =>
        expect(example).toHaveAttribute('data-visible-rows', String(count)),
      );

    await expectRows(20);
    await userEvent.selectOptions(dataMode, 'all');
    await expectRows(100);
    await ['group-tree', 'group-merged'].reduce(async (previous, mode) => {
      await previous;
      await userEvent.selectOptions(structure, mode);
      await expectRows(100);
      expect(dataMode).toBeDisabled();
      expect(example).toHaveAttribute('data-data-mode', 'all');
    }, Promise.resolve());
    await userEvent.selectOptions(structure, 'subrows-tree');
    expect(dataMode).toBeEnabled();
    await userEvent.selectOptions(dataMode, 'pagination');
    await expectRows(20);
    await userEvent.selectOptions(structure, 'subrows-merged');
    await expectRows(20);
    await userEvent.selectOptions(structure, 'flat');
    await userEvent.selectOptions(dataMode, 'infinity');
    await expectRows(20);
    const loadMore = canvas.getByRole('button', {
      name: 'Загрузить ещё 20 строк',
    });
    await [40, 60, 80, 100].reduce(async (previous, count) => {
      await previous;
      await userEvent.click(loadMore);
      await expectRows(count);
    }, Promise.resolve());
    await waitFor(() => expect(loadMore).toBeDisabled());

    await userEvent.selectOptions(status, 'skeleton');
    await waitFor(() =>
      expect(
        canvasElement.querySelector('.rdg-table-bottom-sheet'),
      ).toBeInTheDocument(),
    );
    await userEvent.selectOptions(status, 'overlay');
    await waitFor(() =>
      expect(
        canvasElement.querySelector('.rdg-table-sidebar-layout'),
      ).not.toBeInTheDocument(),
    );
    await waitFor(() =>
      expect(canvas.getByText('Загрузка отчётов')).toBeVisible(),
    );
    await userEvent.selectOptions(status, 'normal');
    await waitFor(() =>
      expect(
        canvasElement.querySelector('.rdg-table-bottom-sheet'),
      ).toBeInTheDocument(),
    );
    await userEvent.selectOptions(dataMode, 'pagination');
    await expectRows(20);
  },
};

export const BothSidebarsAndFullscreen: StoryObj = {
  name: 'Обе панели, fullscreen и изменение контейнера',
  render: () => <AllFeaturesExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const getRoot = () => {
      const element =
        canvasElement.ownerDocument.querySelector<HTMLElement>(
          '.rdg-container-all',
        );
      if (!element) throw new Error('Missing TableCanvas');
      return element;
    };
    const right = canvasElement.querySelector<HTMLElement>(
      '[data-table-sidebar="right"]',
    );
    if (!right) throw new Error('Missing TableCanvas layout');
    await userEvent.click(
      canvas.getByRole('button', { name: 'Правая панель' }),
    );
    await waitFor(() =>
      expect(Math.round(right.getBoundingClientRect().width)).toBe(444),
    );
    await userEvent.click(canvas.getByRole('button', { name: 'Открыть лог' }));
    await userEvent.click(canvas.getByTestId('bottom-sheet-fullscreen'));
    await waitFor(() => {
      expect(Math.round(getRoot().getBoundingClientRect().height)).toBe(
        window.innerHeight - 32,
      );
      expect(Math.round(getRoot().getBoundingClientRect().width)).toBe(
        window.innerWidth - 32,
      );
    });
    await userEvent.click(
      within(canvasElement.ownerDocument.body).getByTestId(
        'bottom-sheet-fullscreen',
      ),
    );
    await waitFor(() =>
      expect(Math.round(getRoot().getBoundingClientRect().height)).toBe(620),
    );
    await userEvent.click(
      canvas.getByRole('button', { name: 'Высота контейнера' }),
    );
    await waitFor(() =>
      expect(Math.round(getRoot().getBoundingClientRect().height)).toBe(350),
    );
    await userEvent.click(
      canvas.getByRole('button', { name: 'Ширина контейнера' }),
    );
    await userEvent.click(canvas.getByRole('button', { name: 'Нижний слот' }));
    await waitFor(() =>
      expect(
        canvasElement.querySelector('.rdg-table-bottom-sheet'),
      ).not.toBeInTheDocument(),
    );
    await userEvent.click(canvas.getByRole('button', { name: 'Нижний слот' }));
    await waitFor(() =>
      expect(
        canvasElement.querySelector('.rdg-table-bottom-sheet'),
      ).toBeInTheDocument(),
    );
    await userEvent.click(
      canvas.getByRole('button', { name: 'Высота контейнера' }),
    );
    await userEvent.click(
      canvas.getByRole('button', { name: 'Ширина контейнера' }),
    );
  },
};

export const ClipboardBetweenPages: StoryObj = {
  name: 'Копирование и вставка между страницами',
  render: () => <AllFeaturesExample refTable={clipboardTableRef} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const getGrid = () => canvas.getByTestId('data-grid-canvas');
    await waitFor(() => expect(getGrid()).toBeInTheDocument());
    const selectRange = async () => {
      await waitFor(() => {
        const bounds = clipboardTableRef.current?.getBounds(3, 0);
        expect(bounds && Number.isFinite(bounds.x)).toBe(true);
      });
      const clickCell = (column: number, row: number, shiftKey = false) => {
        const bounds = clipboardTableRef.current?.getBounds(column, row);
        if (!bounds) throw new Error('Missing cell bounds');
        const point = {
          clientX: bounds.x + bounds.width / 2,
          clientY: bounds.y + bounds.height / 2,
          pointerType: 'mouse',
          shiftKey,
        };
        fireEvent.pointerDown(getGrid(), { ...point, button: 0, buttons: 1 });
        fireEvent.pointerUp(getGrid(), { ...point, button: 0, buttons: 0 });
      };
      // Two service columns precede ID; select Task and Priority of two rows.
      clickCell(3, 0);
      await new Promise<void>((resolve) => {
        window.setTimeout(resolve, 120);
      });
      clickCell(4, 1, true);
      await waitFor(() =>
        expect(
          canvas.getAllByText('Выделение ячеек: 2 × 2').length,
        ).toBeGreaterThan(0),
      );
    };
    const press = (key: 'c' | 'v') => {
      fireEvent.keyDown(getGrid(), {
        key,
        code: key === 'c' ? 'KeyC' : 'KeyV',
        ctrlKey: true,
      });
      fireEvent.keyUp(getGrid(), {
        key,
        code: key === 'c' ? 'KeyC' : 'KeyV',
        ctrlKey: true,
      });
    };
    await userEvent.click(
      canvas.getByRole('button', { name: /^Редактировать$/ }),
    );
    await selectRange();
    press('c');
    await waitFor(async () =>
      expect(await navigator.clipboard.readText()).toContain('Задача 1:'),
    );
    const source = await navigator.clipboard.readText();
    await userEvent.click(canvas.getByRole('button', { name: /^2$/ }));
    await selectRange();
    press('v');
    await waitFor(() =>
      expect(canvas.getByText(/paste: изменено строк 2/)).toBeInTheDocument(),
    );
    press('c');
    await waitFor(async () =>
      expect(await navigator.clipboard.readText()).toBe(source),
    );
    await userEvent.click(canvas.getByRole('button', { name: 'Открыть лог' }));
  },
};
