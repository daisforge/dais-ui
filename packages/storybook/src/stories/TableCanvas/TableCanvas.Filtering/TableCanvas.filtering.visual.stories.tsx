import type { Meta, StoryObj } from '@storybook/react';
import {
  expect,
  fireEvent,
  fn,
  userEvent,
  waitFor,
  within,
} from '@storybook/test';
import { Button } from '@ui-kit/components/Button';
import {
  ColumnConfig,
  TableCanvas,
  TableFilterSearch,
  TableFilterSelectAll,
} from '@ui-kit/components/TableCanvas';
import type { SIZE } from '@ui-kit/components/TableCanvas/styles';
import type { DataEditorRef } from '@ui-kit/components/TableCanvas/TableGlideInstance/type';
import { BodyXS } from '@ui-kit/components/Typography';
import React, { createRef } from 'react';

import { MenuTable } from '../visual-fixtures/MenuTable';
import {
  click,
  getGridTarget,
  gridReady,
  hover,
  settle,
} from '../visual-helpers';

export default {
  title: 'Локальные компоненты/TableCanvas/Filtering/Визуальные тесты',
  tags: ['!autodocs'],
  parameters: { screenshot: { keepState: true, capture: 'page' } },
} satisfies Meta;

// Панель чипсов меняет координаты canvas до окончания раскрытия.
async function waitForHeaderPosition(canvasElement: HTMLElement) {
  await settle();
  await Promise.allSettled(
    canvasElement
      .getAnimations({ subtree: true })
      .filter((animation) => animation instanceof CSSTransition)
      .map((animation) => animation.finished),
  );
}

function headerFilter(
  size: SIZE,
  column: 'priority' | 'status' | 'text',
): StoryObj {
  const ref = createRef<DataEditorRef>();
  const maxWidth = { small: 300, medium: 380, big: 440 }[size];
  return {
    render: () => (
      <MenuTable tableRef={ref} size={size} textFilter={column === 'text'} />
    ),
    play: async ({ canvasElement }) => {
      const page = within(canvasElement.ownerDocument.body);
      await canvasElement.ownerDocument.fonts.ready;
      await gridReady(ref);
      await waitForHeaderPosition(canvasElement);
      const target = await getGridTarget(canvasElement);
      const bounds = ref.current?.getBounds(column === 'status' ? 1 : 0, -1);
      if (!bounds) throw new Error('Границы заголовка недоступны');
      const y = bounds.y + bounds.height / 2;
      click(target, { x: bounds.x + bounds.width - 22, y });
      await waitFor(() => expect(page.getByRole('textbox')).toBeVisible());
      await waitFor(() => {
        const anchor = canvasElement
          .querySelector('[data-popover-trigger]')
          ?.getBoundingClientRect();
        const popup = page.getByRole('dialog').getBoundingClientRect();
        if (!anchor) throw new Error('Якорь фильтра недоступен');
        if (column === 'text') {
          expect(popup.width).toBe(size === 'small' ? 200 : 240);
        } else if (column === 'priority') {
          expect(popup.width).toBe(size === 'big' ? 140 : 120);
        } else {
          expect(popup.width).toBe(maxWidth);
          const label = page.getByText(/^На согласовании у ответственного/);
          const text = Array.from(label.childNodes).find(
            (node) =>
              node.nodeType === Node.TEXT_NODE && node.textContent?.trim(),
          );
          if (!text) throw new Error('Текст длинного пункта недоступен');
          const range = canvasElement.ownerDocument.createRange();
          range.selectNodeContents(text);
          expect(range.getClientRects().length).toBeGreaterThan(1);
        }
        const inputX = page.getByRole('textbox').getBoundingClientRect().left;
        const searchInset = size === 'big' ? 42 : 34;
        expect(Math.abs(inputX - popup.left - searchInset)).toBeLessThanOrEqual(
          1,
        );
        if (column !== 'text') {
          const item = page.getByText(
            column === 'status' ? 'В работе' : 'Высокий',
            { selector: 'li' },
          );
          const range = canvasElement.ownerDocument.createRange();
          const text = item.lastChild;
          if (!text || text.nodeType !== Node.TEXT_NODE) {
            throw new Error('Подпись пункта фильтра недоступна');
          }
          range.selectNodeContents(text);
          const labelX = range.getBoundingClientRect().left;
          const labelInset = { small: 32, medium: 36, big: 48 }[size];
          expect(
            Math.abs(labelX - popup.left - labelInset),
          ).toBeLessThanOrEqual(1);
          expect(getComputedStyle(item).lineHeight).toBe(
            { small: '16px', medium: '20px', big: '24px' }[size],
          );
        }
        const edge = column === 'status' ? 'right' : 'left';
        const expectedX =
          edge === 'right'
            ? Math.max(0, anchor.right - popup.width)
            : anchor.left;
        expect(Math.abs(popup.left - expectedX)).toBeLessThanOrEqual(1);
      });
      if (column === 'status') {
        const dialog = page.getByRole('dialog');
        const list = within(dialog);
        const search = list.getByRole('textbox');
        const initialX = search.getBoundingClientRect().left;
        const assertSearchPosition = () => {
          expect(dialog.getBoundingClientRect().width).toBe(maxWidth);
          expect(
            Math.abs(search.getBoundingClientRect().left - initialX),
          ).toBeLessThanOrEqual(1);
        };

        fireEvent.input(search, { target: { value: 'В работе' } });
        await waitFor(() =>
          expect(list.getAllByRole('option')).toHaveLength(1),
        );
        assertSearchPosition();

        fireEvent.input(search, { target: { value: '' } });
        await list.findByText('Выбрать всё');
        assertSearchPosition();
      }
    },
  };
}

export const FilterSmall = headerFilter('small', 'priority');
export const FilterMedium = headerFilter('medium', 'priority');
export const FilterBig = headerFilter('big', 'priority');
export const LastFilterSmall = headerFilter('small', 'status');
export const LastFilterMedium = headerFilter('medium', 'status');
export const LastFilterBig = headerFilter('big', 'status');
export const TextFilter = headerFilter('medium', 'text');

const options = Array.from({ length: 32 }, (_, i) => ({
  text: `Вариант ${i + 1}`,
  value: String(i + 1),
}));

function FilterExample({
  tableRef,
  filtering,
  onChange,
}: {
  tableRef: React.RefObject<DataEditorRef>;
  filtering: Extract<
    NonNullable<ColumnConfig<{ status: string }>['filtering']>,
    { component: 'select' }
  >;
  onChange: (value: { status?: string | string[] }) => void;
}) {
  const [filters, setFilters] = React.useState<{ status?: string | string[] }>(
    {},
  );
  return (
    <TableCanvas
      refTable={tableRef}
      rows={options.map((option) => ({ status: option.text }))}
      columnConfig={[{ key: 'status', name: 'Статус', width: 280, filtering }]}
      tableConfig={{
        containerStyle: { height: 560, maxWidth: 600 },
        filtering: {
          manualFiltering: true,
          state: [
            filters,
            (update) => {
              const next =
                typeof update === 'function' ? update(filters) : update;
              onChange(next);
              setFilters(next);
            },
          ],
          filtersInfo: {
            status: {
              label: 'Статус',
              clearedValue:
                filtering.filter.typeOfValue === 'multiple' ? [] : '',
            },
          },
        },
      }}
    />
  );
}

function slotExample(
  filtering: Partial<React.ComponentProps<typeof FilterExample>['filtering']>,
  check: (
    dialog: HTMLElement,
    onChange: ReturnType<typeof fn>,
  ) => Promise<void>,
): StoryObj {
  const ref = createRef<DataEditorRef>();
  const onChange = fn();
  return {
    render: () => (
      <FilterExample
        tableRef={ref}
        onChange={onChange}
        filtering={{
          component: 'select',
          keyInFilterState: 'status',
          listControls: 'slots',
          filter: { typeOfValue: 'multiple' },
          selectOptions: { type: 'constant', options },
          ...filtering,
        }}
      />
    ),
    play: async ({ canvasElement }) => {
      onChange.mockClear();
      await gridReady(ref);
      await waitForHeaderPosition(canvasElement);
      const open = async () => {
        const bounds = ref.current?.getBounds(0, -1);
        if (!bounds) throw new Error('Границы заголовка недоступны');
        const target = await getGridTarget(canvasElement);
        const point = {
          x: bounds.x + bounds.width - 22,
          y: bounds.y + bounds.height / 2,
        };
        hover(target, point);
        await settle();
        click(target, point);
        hover(target, { x: bounds.x + 12, y: bounds.y + bounds.height + 12 });
      };
      await open();
      const dialog = await within(canvasElement.ownerDocument.body).findByRole(
        'dialog',
      );
      await check(dialog, onChange);
      if (!dialog.isConnected) {
        await waitForHeaderPosition(canvasElement);
        await open();
        await within(canvasElement.ownerDocument.body).findByRole('dialog');
      }
    },
  };
}

export const MissingMultipleValue = slotExample(
  {},
  async (dialog, onChange) => {
    const list = within(dialog);
    await list.findByText('Вариант 1');
    expect(list.queryByRole('textbox')).toBeNull();
    expect(list.queryByText('Выбрать всё')).toBeNull();
    expect(onChange).not.toHaveBeenCalled();
    list
      .getAllByRole('checkbox')
      .forEach((checkbox) => expect(checkbox).not.toBeChecked());
    await userEvent.click(list.getByText('Вариант 1'));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith({ status: ['1'] });
  },
);

export const SingleWithoutSlots = slotExample(
  { filter: { typeOfValue: 'single' } },
  async (dialog, onChange) => {
    const list = within(dialog);
    expect(list.queryByRole('textbox')).toBeNull();
    expect(list.queryByText('Выбрать всё')).toBeNull();
    await userEvent.click(list.getByText('Вариант 2'));
    expect(onChange).toHaveBeenCalledWith({ status: '2' });
  },
);

export const OnlySearch = slotExample(
  { beforeList: TableFilterSearch },
  async (dialog) => {
    const list = within(dialog);
    const input = list.getByRole('textbox');
    await waitFor(() => expect(input).toHaveFocus());
    expect(list.queryByText('Выбрать всё')).toBeNull();
    await userEvent.type(input, '31');
    expect(list.getAllByRole('option')).toHaveLength(1);
    await userEvent.type(input, 'х');
    expect(list.getByText('Ничего не найдено')).toBeVisible();
    await userEvent.clear(input);
    expect(list.getAllByRole('option')).toHaveLength(options.length);
  },
);

export const OnlySelectAll = slotExample(
  { beforeList: TableFilterSelectAll },
  async (dialog, onChange) => {
    const list = within(dialog);
    expect(list.queryByRole('textbox')).toBeNull();
    const checkbox = list.getByRole('checkbox', { name: 'Выбрать всё' });
    expect(checkbox).not.toBeChecked();
    expect(checkbox).not.toBePartiallyChecked();
    await userEvent.click(list.getByText('Выбрать всё'));
    expect(checkbox).toBeChecked();
    expect(onChange).toHaveBeenLastCalledWith({
      status: options.map((o) => o.value),
    });
    await userEvent.click(list.getByText('Выбрать всё'));
    expect(checkbox).not.toBeChecked();
    expect(checkbox).not.toBePartiallyChecked();
    expect(onChange).toHaveBeenLastCalledWith({ status: [] });
    await userEvent.click(list.getByText('Вариант 1'));
    expect(checkbox).toBePartiallyChecked();
  },
);

export const EmptyOptions = slotExample(
  {
    beforeList: TableFilterSelectAll,
    selectOptions: { type: 'constant', options: [] },
  },
  async (dialog, onChange) => {
    const list = within(dialog);
    expect(list.getByText('Ничего не найдено')).toBeVisible();
    expect(list.queryByRole('checkbox')).toBeNull();
    expect(onChange).not.toHaveBeenCalled();
  },
);

const footer: React.ComponentProps<
  typeof FilterExample
>['filtering']['afterList'] = ({ setPopoverIsOpen }) => (
  <Button
    size="xs"
    text="Готово"
    stretch
    onClick={() => setPopoverIsOpen(false)}
  />
);

export const OnlyAfterList = slotExample(
  { afterList: footer },
  async (dialog) => {
    const list = within(dialog);
    expect(list.queryByRole('textbox')).toBeNull();
    expect(list.queryByText('Выбрать всё')).toBeNull();
    await userEvent.click(list.getByRole('button', { name: 'Готово' }));
    await waitFor(() => expect(dialog).not.toBeInTheDocument());
  },
);

function scrollableFilter(listMaxHeight?: string) {
  return slotExample(
    {
      beforeList: () => (
        <>
          <TableFilterSearch />
          <BodyXS style={{ padding: '8px 12px 0' }}>Доступные значения</BodyXS>
          <TableFilterSelectAll />
        </>
      ),
      afterList: footer,
      listMaxHeight,
    },
    async (dialog, onChange) => {
      const menu = within(dialog);
      const list = menu.getByRole('listbox');
      expect(getComputedStyle(list).maxHeight).toBe(listMaxHeight ?? '360px');
      const search = menu.getByRole('textbox');
      const custom = menu.getByText('Доступные значения');
      const toggle = menu.getByText('Выбрать всё');
      const done = menu.getByRole('button', { name: 'Готово' });
      expect(search.getBoundingClientRect().bottom).toBeLessThanOrEqual(
        custom.getBoundingClientRect().top + 1,
      );
      expect(custom.getBoundingClientRect().bottom).toBeLessThanOrEqual(
        toggle.getBoundingClientRect().top + 1,
      );
      const searchY = search.getBoundingClientRect().top;
      const footerY = done.getBoundingClientRect().top;
      list.scrollTop = list.scrollHeight;
      expect(list.scrollTop).toBeGreaterThan(0);
      expect(
        menu.getByText('Вариант 32').getBoundingClientRect().bottom,
      ).toBeLessThanOrEqual(list.getBoundingClientRect().bottom + 1);
      expect(search.getBoundingClientRect().top).toBe(searchY);
      expect(done.getBoundingClientRect().top).toBe(footerY);
      await userEvent.click(menu.getByText('Вариант 32'));
      await userEvent.type(search, 'Вариант 3');
      expect(menu.getAllByRole('option')).toHaveLength(4);
      await userEvent.click(toggle);
      expect(onChange).toHaveBeenLastCalledWith({
        status: options.map((o) => o.value),
      });
      await userEvent.type(search, '32');
      expect(menu.queryByText('Выбрать всё')).toBeNull();
      await userEvent.clear(search);
      await userEvent.click(done);
      await waitFor(() => expect(dialog).not.toBeInTheDocument());
    },
  );
}

export const ScrollWithSlots = scrollableFilter();
export const ScrollWithMaxHeight = scrollableFilter('128px');
