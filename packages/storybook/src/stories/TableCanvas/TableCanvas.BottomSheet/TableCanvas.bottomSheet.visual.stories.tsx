import type { Meta, StoryObj } from '@storybook/react';
import { expect, fireEvent, userEvent, waitFor, within } from '@storybook/test';
import type { DataEditorRef } from '@ui-kit/components/TableCanvas/TableGlideInstance/type';
import React from 'react';

import { AutoHeightExample } from './TableCanvas.bottomSheet.auto';
import { AllFeaturesExample } from './TableCanvas.bottomSheet.example';
import {
  AutoHeightBoundsExample,
  HeightCalculationExample,
} from './TableCanvas.bottomSheet.layout-fixtures';

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

const verifyHeightAnimation = async (
  element: HTMLElement,
  minimum: number,
  maximum: number,
  options: {
    direction?: 'opening' | 'closing';
    progress?: number[];
    finish?: boolean;
    onFrame?: (progress: number) => void;
  } = {},
) => {
  let animations: Animation[] = [];
  await waitFor(
    () => {
      animations = element
        .getAnimations()
        .filter(
          (animation) =>
            (animation as CSSTransition).transitionProperty === 'height',
        );
      expect(animations.length).toBeGreaterThan(0);
    },
    { interval: 16 },
  );
  // Freeze descendants together so pagination and workspace use the same frame.
  animations = element
    .getAnimations({ subtree: true })
    .filter((animation) =>
      ['height', 'max-height', 'opacity'].includes(
        (animation as CSSTransition).transitionProperty,
      ),
    );
  animations.forEach((animation) => animation.pause());
  const heights: number[] = [];
  await (options.progress ?? [0.1, 0.5, 0.9]).reduce(
    async (previous, progress) => {
      await previous;
      animations.forEach((animation) => {
        animation.currentTime =
          Number(animation.effect?.getTiming().duration) * progress;
      });
      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => resolve());
      });
      const { height } = element.getBoundingClientRect();
      expect(height).toBeGreaterThan(minimum + 0.1);
      expect(height).toBeLessThan(maximum - 0.1);
      heights.push(height);
      options.onFrame?.(progress);
    },
    Promise.resolve(),
  );
  if (options.direction) {
    heights.slice(1).forEach((height, index) => {
      const previousHeight = heights[index];
      if (previousHeight === undefined)
        throw new Error('Missing animation frame');
      if (options.direction === 'opening') {
        expect(height).toBeGreaterThan(previousHeight);
      } else {
        expect(height).toBeLessThan(previousHeight);
      }
    });
  }
  if (options.finish !== false) {
    animations.forEach((animation) => animation.finish());
  }
};

const verifyCollapsedLayout = async (
  canvasElement: HTMLElement,
  expandedHeight: number,
  collapsedHeight: number,
  getRoot = () =>
    canvasElement.querySelector<HTMLElement>('.rdg-container-all'),
) => {
  const canvas = within(canvasElement);
  const root = getRoot();
  if (!root) throw new Error('Missing TableCanvas');
  const workspace = root.querySelector<HTMLElement>(
    '.rdg-table-sidebar-layout',
  );
  if (!workspace) throw new Error('Missing TableCanvas workspace');
  const sidebars = Array.from(
    workspace.querySelectorAll<HTMLElement>('[data-table-sidebar]'),
  );
  const backgrounds = sidebars.map(
    (sidebar) => getComputedStyle(sidebar).backgroundColor,
  );
  const pagination = root.lastElementChild as HTMLElement;
  const paginationContent = pagination.firstElementChild;
  if (!paginationContent) throw new Error('Missing pagination content');
  // The initial fallback is replaced with the observed inner border-box size.
  await waitFor(() => {
    expect(
      Math.abs(
        pagination.getBoundingClientRect().height -
          paginationContent.getBoundingClientRect().height,
      ),
    ).toBeLessThan(0.1);
    expect(
      pagination
        .getAnimations()
        .filter(
          (animation) =>
            (animation as CSSTransition).transitionProperty === 'height' &&
            animation.playState === 'running',
        ),
    ).toHaveLength(0);
  });
  const naturalPaginationHeight = pagination.getBoundingClientRect().height;
  const verifyFrame = (closing: boolean) => {
    expect(getComputedStyle(workspace).opacity).toBe('1');
    sidebars.forEach((sidebar, index) => {
      expect(getComputedStyle(sidebar).backgroundColor).toBe(
        backgrounds[index],
      );
      expect(backgrounds[index]).not.toBe('rgba(0, 0, 0, 0)');
    });
    expect(workspace.getBoundingClientRect().bottom).toBeLessThanOrEqual(
      root.getBoundingClientRect().bottom + 1,
    );
    if (closing) {
      expect(workspace).toHaveAttribute('inert');
      expect(getComputedStyle(workspace).overflowY).toBe('hidden');
      expect(getComputedStyle(root).overflowY).toBe('hidden');
    }
    const paginationHeight = pagination.getBoundingClientRect().height;
    expect(paginationHeight).toBeGreaterThan(0);
    expect(paginationHeight).toBeLessThan(naturalPaginationHeight);
    const paginationOpacity = Number(getComputedStyle(pagination).opacity);
    expect(paginationOpacity).toBeGreaterThan(0);
    expect(paginationOpacity).toBeLessThan(1);
  };
  await userEvent.click(canvas.getByRole('button', { name: /^Collapse$/ }));
  await verifyHeightAnimation(root, collapsedHeight, expandedHeight, {
    direction: 'closing',
    onFrame: () => verifyFrame(true),
  });
  await waitFor(() =>
    expect(Math.round(root.getBoundingClientRect().height)).toBe(
      collapsedHeight,
    ),
  );
  expect(root.querySelector('.rdg-table-sidebar-layout')).toHaveAttribute(
    'inert',
  );
  await waitFor(() =>
    expect(
      root.querySelector('.rdg-table-sidebar-layout')?.getBoundingClientRect()
        .height,
    ).toBe(0),
  );
  expect(getComputedStyle(workspace).opacity).toBe('1');
  sidebars.forEach((sidebar, index) => {
    expect(getComputedStyle(sidebar).backgroundColor).toBe(backgrounds[index]);
  });
  await userEvent.click(canvas.getByRole('button', { name: /^Collapse$/ }));
  await verifyHeightAnimation(root, collapsedHeight, expandedHeight, {
    direction: 'opening',
    onFrame: () => verifyFrame(false),
  });
  await waitFor(() =>
    expect(Math.round(root.getBoundingClientRect().height)).toBe(
      expandedHeight,
    ),
  );
};

export const HeightCalculations: StoryObj = {
  name: 'Численные размеры контейнера, canvas и панелей',
  parameters: { screenshot: { skip: true } },
  render: () => <HeightCalculationExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const get = (selector: string) => {
      const element = canvasElement.querySelector<HTMLElement>(selector);
      if (!element) throw new Error(`Missing ${selector}`);
      return element;
    };
    const root = get('.rdg-container-all');
    const workspace = get('.rdg-table-sidebar-layout');
    const sheet = get('.rdg-table-bottom-sheet');
    const grid = get('.rdg-table-sidebar-layout-table-container');
    const verify = async (
      outer: number,
      area: number,
      panel: number,
      content: number,
    ) =>
      waitFor(() => {
        expect(Math.round(root.getBoundingClientRect().height)).toBe(outer);
        expect(Math.round(workspace.getBoundingClientRect().height)).toBe(area);
        expect(Math.round(sheet.getBoundingClientRect().height)).toBe(panel);
        expect(Math.round(grid.getBoundingClientRect().height)).toBe(content);
      });
    const click = async (name: string) =>
      userEvent.click(
        canvas.getByRole('button', { name: new RegExp(`^${name}$`) }),
      );
    await verify(620, 524, 32, 492);
    await click('Панель 220');
    await verify(620, 524, 220, 304);
    await click('Панель 50%');
    await verify(620, 524, 262, 262);
    await click('Панель 2000');
    await verify(620, 524, 404, 120);
    await click('Панель 220');
    await click('maxHeight 500');
    await verify(500, 404, 220, 184);
    await click('80% таблицы');
    await verify(800, 704, 220, 484);
    await click('calc таблицы');
    await verify(900, 804, 220, 584);
    await click('Только maxHeight 80%');
    await verify(350, 254, 134, 120);
    await click('Родитель 300');
    await verify(240, 144, 24, 120);
    await click('Родитель 1000');
    await verify(350, 254, 134, 120);
    await click('620px');
    await click('Пагинация');
    await verify(620, 580, 220, 360);
  },
};

export const AutoHeightContent: StoryObj = {
  name: 'Автоматическая высота и прокрутка содержимого',
  parameters: { screenshot: { skip: true } },
  render: () => <AutoHeightExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const sheet = canvasElement.querySelector<HTMLElement>(
      '.rdg-table-bottom-sheet',
    );
    const workspace = canvasElement.querySelector<HTMLElement>(
      '.rdg-table-sidebar-layout',
    );
    const grid = canvasElement.querySelector<HTMLElement>(
      '.rdg-table-sidebar-layout-table-container',
    );
    if (!sheet || !workspace || !grid) throw new Error('Missing auto layout');
    expect(CSS.supports('height', 'calc-size(auto, size)')).toBe(true);
    const body = canvas.getByTestId('bottom-sheet-auto-content');
    const contentContainer = body.parentElement;
    const firstMessage = canvas.getAllByTestId('bottom-sheet-auto-message')[0];
    if (!firstMessage || !contentContainer) {
      throw new Error('Missing mounted auto content');
    }
    const messageHeight = firstMessage.getBoundingClientRect().height;
    const click = async (name: string) =>
      userEvent.click(
        canvas.getByRole('button', { name: new RegExp(`^${name}$`) }),
      );
    const verifyHeight = async (height: number) =>
      waitFor(() =>
        expect(Math.round(sheet.getBoundingClientRect().height)).toBe(
          Math.round(height),
        ),
      );
    const verifyMountedBody = (expanded: boolean) => {
      expect(canvas.getByTestId('bottom-sheet-auto-content')).toBe(body);
      expect(canvas.getAllByTestId('bottom-sheet-auto-message')[0]).toBe(
        firstMessage,
      );
      expect(body).toHaveAttribute('aria-hidden', String(!expanded));
      if (expanded) expect(body).not.toHaveAttribute('inert');
      else expect(body).toHaveAttribute('inert');
    };
    const intrinsicHeight = () => {
      const style = getComputedStyle(sheet);
      return (
        contentContainer.getBoundingClientRect().height +
        Number.parseFloat(style.borderTopWidth) +
        Number.parseFloat(style.borderBottomWidth)
      );
    };
    const open = async (height: number) => {
      await click('Открыть авто-панель');
      await verifyHeightAnimation(sheet, 32, height, {
        direction: 'opening',
        onFrame: () => verifyMountedBody(true),
      });
      await verifyHeight(height);
      verifyMountedBody(true);
    };
    const close = async (height: number) => {
      await click('Закрыть авто-панель');
      await verifyHeightAnimation(sheet, 32, height, {
        direction: 'closing',
        onFrame: () => verifyMountedBody(false),
      });
      await verifyHeight(32);
      verifyMountedBody(false);
    };
    await verifyHeight(32);
    verifyMountedBody(false);
    const initialHeight = intrinsicHeight();
    expect(initialHeight).toBeGreaterThan(32);
    expect(initialHeight).toBeLessThan(240);
    await open(initialHeight);
    await click('Добавить сообщение');
    await verifyHeight(initialHeight + messageHeight);
    expect(
      sheet
        .getAnimations()
        .filter(
          (animation) =>
            (animation as CSSTransition).transitionProperty === 'height',
        ),
    ).toHaveLength(0);
    await click('Удалить сообщение');
    await verifyHeight(initialHeight);
    verifyMountedBody(true);
    await close(initialHeight);
    await click('Длинный журнал');
    await open(240);
    expect(sheet.scrollHeight).toBeGreaterThan(sheet.clientHeight);
    sheet.scrollTop = 50;
    expect(sheet.scrollTop).toBeGreaterThan(0);
    sheet.scrollTop = 0;
    await close(240);
    await click('Максимум 160px');
    await open(160);
    await close(160);
    await click('Максимум 40%');
    const percentageHeight = workspace.getBoundingClientRect().height * 0.4;
    await open(percentageHeight);
    await close(percentageHeight);
    await click('Без maxHeight');
    const availableHeight = workspace.getBoundingClientRect().height - 120;
    await open(availableHeight);
    expect(Math.round(grid.getBoundingClientRect().height)).toBe(120);
    await close(availableHeight);
    await click('Короткий журнал');
    const shortHeight = intrinsicHeight();
    await click('Открыть авто-панель');
    await verifyHeightAnimation(sheet, 32, shortHeight, {
      progress: [0.35],
      finish: false,
      onFrame: () => verifyMountedBody(true),
    });
    const reversedHeight = sheet.getBoundingClientRect().height;
    await click('Закрыть авто-панель');
    await verifyHeightAnimation(sheet, 32, reversedHeight, {
      direction: 'closing',
      onFrame: () => verifyMountedBody(false),
    });
    await verifyHeight(32);
    await open(shortHeight);
    await close(shortHeight);
  },
};

export const AutoHeightBounds: StoryObj = {
  name: 'Численные пределы автоматической высоты',
  parameters: { screenshot: { skip: true } },
  render: () => <AutoHeightBoundsExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const sheet = canvasElement.querySelector<HTMLElement>(
      '.rdg-table-bottom-sheet',
    );
    const grid = canvasElement.querySelector<HTMLElement>(
      '.rdg-table-sidebar-layout-table-container',
    );
    if (!sheet || !grid) throw new Error('Missing bounds layout');
    const click = async (name: string) =>
      userEvent.click(
        canvas.getByRole('button', { name: new RegExp(`^${name}$`) }),
      );
    const verify = async (panel: number, content: number) =>
      waitFor(() => {
        expect(Math.round(sheet.getBoundingClientRect().height)).toBe(panel);
        expect(Math.round(grid.getBoundingClientRect().height)).toBe(content);
      });
    await verify(84, 316);
    await click('Контент 163');
    await verify(164, 236);
    await click('Контент 83');
    await verify(84, 316);
    await click('Минимум 300');
    await verify(200, 200);
    await click('Фиксированная 50');
    await verify(200, 200);
    await click('Минимум 32');
    await verify(50, 350);
    await click('Максимум 10000');
    await click('Контент 1000');
    // Fixed height remains 50 regardless of content size.
    await verify(50, 350);
    await click('Автоматическая');
    await verify(280, 120);
    await click('Максимум 50%');
    await verify(200, 200);
    await click('Область 300');
    await verify(150, 150);
    await click('Контент 100%');
    const samples: number[] = [];
    await new Promise<void>((resolve) => {
      const sample = () => {
        samples.push(sheet.getBoundingClientRect().height);
        if (samples.length < 3) requestAnimationFrame(sample);
        else resolve();
      };
      requestAnimationFrame(sample);
    });
    expect(
      samples.every(
        (height) => Number.isFinite(height) && height >= 32 && height <= 150,
      ),
    ).toBe(true);
    expect(Math.max(...samples) - Math.min(...samples)).toBeLessThan(1);
  },
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
    const sheet = canvasElement.querySelector<HTMLElement>(
      '.rdg-table-bottom-sheet',
    );
    if (!right || !sheet) throw new Error('Missing TableCanvas layout');
    await userEvent.click(
      canvas.getByRole('button', { name: 'Правая панель' }),
    );
    await waitFor(() =>
      expect(Math.round(right.getBoundingClientRect().width)).toBe(444),
    );
    await userEvent.click(canvas.getByRole('button', { name: 'Открыть лог' }));
    await waitFor(() =>
      expect(Math.round(sheet.getBoundingClientRect().height)).toBe(220),
    );
    await verifyCollapsedLayout(canvasElement, 620, 40);
    await userEvent.click(canvas.getByTestId('bottom-sheet-fullscreen'));
    await waitFor(() => {
      expect(Math.round(getRoot().getBoundingClientRect().height)).toBe(
        window.innerHeight - 32,
      );
      expect(Math.round(getRoot().getBoundingClientRect().width)).toBe(
        window.innerWidth - 32,
      );
    });
    await verifyCollapsedLayout(
      canvasElement,
      window.innerHeight - 32,
      56,
      getRoot,
    );
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

export const MassActionsBothSidebars: StoryObj = {
  name: 'Массовые действия при закрытии обеих панелей',
  parameters: { screenshot: { skip: true } },
  render: () => <AllFeaturesExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const grid = canvasElement.querySelector<HTMLElement>(
      '.rdg-table-sidebar-layout-table-container',
    );
    const left = canvasElement.querySelector<HTMLElement>(
      '[data-table-sidebar="left"]',
    );
    const right = canvasElement.querySelector<HTMLElement>(
      '[data-table-sidebar="right"]',
    );
    if (!grid || !left || !right) throw new Error('Missing sidebar layout');
    // Identify the actual panel by its layout, excluding offscreen measurements.
    const getMassActions = () => {
      const panel = Array.from(grid.querySelectorAll<HTMLElement>('div')).find(
        (element) => {
          const style = getComputedStyle(element);
          return (
            style.position === 'absolute' &&
            style.bottom === '24px' &&
            element.textContent?.includes('Обработать')
          );
        },
      );
      if (!panel) throw new Error('Missing MassActions');
      return panel;
    };
    await waitFor(() => {
      const panel = getMassActions();
      expect(getComputedStyle(panel).maxWidth).toBe('200px');
    });
    const initialPanel = getMassActions();
    expect(initialPanel.parentElement).toBe(grid);
    const verify = async (maximum: number) => {
      await waitFor(() => {
        expect(getMassActions()).toBe(initialPanel);
        expect(getComputedStyle(initialPanel).maxWidth).toBe(`${maximum}px`);
      });
      expect(initialPanel.getBoundingClientRect().bottom).toBeLessThanOrEqual(
        grid.getBoundingClientRect().bottom,
      );
    };
    await userEvent.click(
      canvas.getByRole('button', { name: 'Правая панель' }),
    );
    await waitFor(() =>
      expect(Math.round(right.getBoundingClientRect().width)).toBe(444),
    );
    await verify(200);
    await userEvent.click(
      canvas.getByRole('button', { name: 'Открытие извне' }),
    );
    await waitFor(() =>
      expect(Math.round(left.getBoundingClientRect().width)).toBe(44),
    );
    await verify(200);
    await userEvent.click(
      canvas.getByRole('button', { name: 'Правая панель' }),
    );
    await waitFor(() =>
      expect(Math.round(right.getBoundingClientRect().width)).toBe(44),
    );
    await verify(2000);
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
