import { cleanup, render, screen } from '@testing-library/react';
import type { DropdownProps } from '@ui-kit/components/Dropdown';
import React, { ReactNode } from 'react';
import type { CSSObject } from 'styled-components';
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  expectTypeOf,
  it,
  vi,
} from 'vitest';

import type { TableDropdownConfigProps } from '../Table/components/TableDropdown/types';
import type { DataAttributes } from '../Table/types/utils.type';
import {
  type MassActionsDropdownComponent,
  MassActionsDropdownContext,
} from './dropdownContext';
import { MassActionsButton } from './MassActionsButton';
import { MassActionsDropdown } from './MassActionsDropdown';
import type { MassActionsButtonPropsButton, MassActionsProps } from './types';

type ReceivedProps = DropdownProps & { $css?: CSSObject };

let receivedProps: ReceivedProps[] = [];

// Заменяет TableDropdown, который подставляет Table, и запоминает пропсы
const FakeTableDropdown: MassActionsDropdownComponent = (props) => {
  receivedProps.push(props);
  const { children } = props;
  return <div data-testid="table-dropdown">{children}</div>;
};

const InsideTable = ({ children }: { children: ReactNode }) => (
  <MassActionsDropdownContext.Provider value={FakeTableDropdown}>
    {children}
  </MassActionsDropdownContext.Provider>
);

const ITEMS = [{ value: 'archive', label: 'В архив' }];

beforeEach(() => {
  receivedProps = [];
});
afterEach(cleanup);

describe('MassActionsButton: дропдаун при useTableDropdown', () => {
  it('внутри таблицы рендерит дропдаун, который подставила таблица', () => {
    render(
      <InsideTable>
        <MassActionsButton
          type="button"
          text="Действия"
          showLabel
          useTableDropdown
          dropdown={{ items: ITEMS, $css: { color: 'red' } }}
        />
      </InsideTable>,
    );

    const tableDropdown = screen.getByTestId('table-dropdown');
    expect(tableDropdown.textContent).toContain('Действия');
    expect(receivedProps[0]?.items).toEqual(ITEMS);
    expect(receivedProps[0]?.$css).toEqual({ color: 'red' });
  });

  it('вне таблицы рендерит обычный Dropdown, а не падает', async () => {
    render(
      <MassActionsButton
        type="button"
        text="Действия"
        showLabel
        useTableDropdown
        dropdown={{ items: ITEMS, alwaysOpened: true }}
      />,
    );

    expect(
      await screen.findByRole('option', { name: 'В архив' }),
    ).toBeDefined();
    expect(screen.queryByTestId('table-dropdown')).toBeNull();
  });

  it('без useTableDropdown не использует дропдаун таблицы', async () => {
    render(
      <InsideTable>
        <MassActionsButton
          type="button"
          text="Действия"
          showLabel
          dropdown={{ items: ITEMS, alwaysOpened: true }}
        />
      </InsideTable>,
    );

    expect(
      await screen.findByRole('option', { name: 'В архив' }),
    ).toBeDefined();
    expect(screen.queryByTestId('table-dropdown')).toBeNull();
  });
});

describe('MassActionsDropdown: меню скрытых кнопок', () => {
  it('внутри таблицы передаёт кнопки в дропдаун таблицы без портала document', () => {
    render(
      <InsideTable>
        <MassActionsDropdown
          buttons={[{ text: 'Экспорт', onClick: vi.fn() }]}
          triggerSlot={<button type="button">Ещё</button>}
          useTableDropdown
        />
      </InsideTable>,
    );

    expect(screen.getByTestId('table-dropdown').textContent).toContain('Ещё');
    const props = receivedProps[0];
    expect(props?.items?.map((item) => item.label)).toEqual(['Экспорт']);
    // Портал задаёт сама таблица; 'document' получает только обычный Dropdown
    expect(props?.portal).toBeUndefined();
  });

  it('вне таблицы рендерит обычный Dropdown', async () => {
    render(
      <MassActionsDropdown
        buttons={[{ text: 'Экспорт', onClick: vi.fn() }]}
        triggerSlot={<button type="button">Ещё</button>}
        dropdownProps={{ alwaysOpened: true }}
        useTableDropdown
      />,
    );

    expect(
      await screen.findByRole('option', { name: 'Экспорт' }),
    ).toBeDefined();
    expect(screen.queryByTestId('table-dropdown')).toBeNull();
  });
});

describe('типы MassActions', () => {
  it('совпадают с типами Table, которые раньше импортировались оттуда', () => {
    // MassActions объявляет их у себя, чтобы не зависеть от Table. Если типы
    // разойдутся, упадёт typecheck-tests
    expectTypeOf<MassActionsProps['collapsedDropdownProps']>().toEqualTypeOf<
      TableDropdownConfigProps | undefined
    >();
    expectTypeOf<DataAttributes>().toMatchTypeOf<
      Pick<MassActionsButtonPropsButton, `data-${string}`>
    >();
  });
});
