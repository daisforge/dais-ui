/* eslint-disable react-hooks/rules-of-hooks */
/**
 * Визуальные (скриншотные) тесты дропдауна на canvas.
 * Каждая стори доводит таблицу до одного состояния (список открыт) — один
 * скриншот. `play` кликает или наводит курсор по координатам canvas, поэтому
 * ширины колонок заданы явно. `screenshot.keepState` не сбрасывает мышь перед
 * снимком. Эталонные PNG генерит test-runner (`-u`).
 */
import type { Meta, StoryObj } from '@storybook/react';
import { fireEvent, waitFor } from '@storybook/test';
import {
  Canvas,
  ColumnConfig,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import { IconDotsVerticalCenteredOutline } from '@ui-kit/icons';
import React, { useMemo } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/Dropdown/Визуальные тесты',
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj;

const screenshot = { parameters: { screenshot: { keepState: true } } };

/** Высоты по умолчанию: шапка и строка таблицы (px). */
const HEADER_HEIGHT = 34;
const ROW_HEIGHT = 48;

type DemoRow = { id: number; task: string; priority: string };

const rows: DemoRow[] = [
  { id: 1, task: 'Отчёт', priority: 'Высокий' },
  { id: 2, task: 'Сверка', priority: 'Средний' },
  { id: 3, task: 'Бюджет', priority: 'Низкий' },
  { id: 4, task: 'Найм', priority: 'Высокий' },
  { id: 5, task: 'Отпуск', priority: 'Средний' },
];

const ITEMS = [
  { value: 'open', label: 'Открыть' },
  { value: 'copy', label: 'Копировать ссылку' },
  { value: 'delete', label: 'Удалить' },
];

const rowCenter = (rowInd: number, headerRows = 1) =>
  HEADER_HEIGHT * headerRows + rowInd * ROW_HEIGHT + ROW_HEIGHT / 2;

const getScroller = (canvasElement: HTMLElement) =>
  waitFor(() => {
    const el = canvasElement.querySelector('.dvn-scroller');
    if (!(el instanceof HTMLElement)) throw new Error('Grid is not rendered');
    return el;
  });

const pointIn = (el: HTMLElement, x: number, y: number) => {
  const rect = el.getBoundingClientRect();
  return { clientX: rect.left + x, clientY: rect.top + y };
};

const wait = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const clickAt = async (canvasElement: HTMLElement, x: number, y: number) => {
  const target = await getScroller(canvasElement);
  await wait(300);
  const point = pointIn(target, x, y);
  const mouse = { ...point, button: 0, pointerType: 'mouse' };
  fireEvent.pointerMove(target, mouse);
  fireEvent.pointerDown(target, { ...mouse, buttons: 1 });
  fireEvent.mouseDown(target, { ...point, button: 0, buttons: 1 });
  fireEvent.pointerUp(target, { ...mouse, buttons: 0 });
  fireEvent.mouseUp(target, { ...point, button: 0 });
  fireEvent.click(target, { ...point, button: 0 });
};

const hoverAt = async (canvasElement: HTMLElement, x: number, y: number) => {
  const target = await getScroller(canvasElement);
  await wait(300);
  const point = pointIn(target, x, y);
  fireEvent.pointerMove(target, { ...point, pointerType: 'mouse' });
  fireEvent.mouseMove(target, point);
};

const waitForText = (canvasElement: HTMLElement, text: string) =>
  waitFor(
    () => {
      if (!canvasElement.ownerDocument.body.textContent?.includes(text)) {
        throw new Error(`Dropdown "${text}" is not open`);
      }
    },
    { timeout: 3000 },
  );

function ExampleClick() {
  const columnConfig = useMemo<readonly ColumnConfig<DemoRow>[]>(
    () => [
      { key: 'id', name: 'ID', width: 60 },
      { key: 'task', name: 'Задача', width: 160 },
      {
        key: 'action',
        name: 'Действие',
        width: 160,
        renderCell: () => (
          <Canvas.Container direction="row" alignItems="center" padding={8}>
            <Canvas.Button view="secondary" dropdown={{ items: ITEMS }}>
              Действия
            </Canvas.Button>
          </Canvas.Container>
        ),
      },
    ],
    [],
  );
  return (
    <TableCanvas
      tableConfig={{ containerStyle: { height: 320 } }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
}

function ExampleHoverIconButton() {
  const columnConfig = useMemo<readonly ColumnConfig<DemoRow>[]>(
    () => [
      { key: 'id', name: 'ID', width: 60 },
      { key: 'task', name: 'Задача', width: 160 },
      {
        key: 'menu',
        name: 'Меню',
        width: 80,
        renderCell: () => (
          <Canvas.Container direction="row" alignItems="center" padding={8}>
            <Canvas.IconButton
              icon={<IconDotsVerticalCenteredOutline />}
              dropdown={{
                trigger: 'hover',
                placement: 'right',
                variant: 'tight',
                items: ITEMS,
              }}
            />
          </Canvas.Container>
        ),
      },
    ],
    [],
  );
  return (
    <TableCanvas
      tableConfig={{ containerStyle: { height: 320 } }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
}

function ExampleLoading() {
  const columnConfig = useMemo<readonly ColumnConfig<DemoRow>[]>(
    () => [
      { key: 'id', name: 'ID', width: 60 },
      { key: 'task', name: 'Задача', width: 160 },
      {
        key: 'action',
        name: 'Действие',
        width: 160,
        renderCell: () => (
          <Canvas.Container direction="row" alignItems="center" padding={8}>
            <Canvas.Button
              view="secondary"
              dropdown={{
                // Промис не разрешается: на снимке состояние загрузки.
                getItems: () => new Promise(() => {}),
              }}
            >
              Действия
            </Canvas.Button>
          </Canvas.Container>
        ),
      },
    ],
    [],
  );
  return (
    <TableCanvas
      tableConfig={{ containerStyle: { height: 320 } }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
}

export const ClickDropdown: Story = {
  name: 'Дропдаун по клику на кнопке',
  ...screenshot,
  render: () => <ExampleClick />,
  play: async ({ canvasElement }) => {
    await clickAt(canvasElement, 60 + 160 + 40, rowCenter(1));
    await waitForText(canvasElement, 'Копировать ссылку');
  },
};

export const HoverIconButtonDropdown: Story = {
  name: 'Дропдаун по наведению на кнопку-иконку',
  ...screenshot,
  render: () => <ExampleHoverIconButton />,
  play: async ({ canvasElement }) => {
    await hoverAt(canvasElement, 60 + 160 + 24, rowCenter(1));
    await waitForText(canvasElement, 'Копировать ссылку');
  },
};

export const LoadingDropdown: Story = {
  name: 'Дропдаун в состоянии загрузки пунктов',
  ...screenshot,
  render: () => <ExampleLoading />,
  play: async ({ canvasElement }) => {
    await clickAt(canvasElement, 60 + 160 + 40, rowCenter(1));
    await waitForText(canvasElement, 'Загрузка...');
  },
};
