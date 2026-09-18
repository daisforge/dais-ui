/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';
import { Box } from '@ui-kit/components/Box';
import { Button } from '@ui-kit/components/Button';
import {
  Canvas,
  ColumnConfig,
  ColumnOrColumnGroupConfig,
  SortColumn,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import {
  IconAddOutline,
  IconBrightness0Fill,
  IconChevronCircleDownFill,
  IconDone,
  IconPinListOutline,
  IconStar,
} from '@ui-kit/icons';
import { textInfo } from '@ui-kit/tokens';
import React, { useCallback, useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/ColumnsControl',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
};

export default meta;
const preCode = `
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`;

type Story = StoryObj;

/**
 * Названия колонок в порядке отображения. Шапка TableCanvas рисуется на канвасе,
 * поэтому берём их из скрытой accessibility-таблицы Glide (th[role=columnheader]).
 */
const getHeaderNames = (canvasElement: HTMLElement) =>
  within(canvasElement)
    .queryAllByRole('columnheader', { hidden: true })
    .map((el) => el.textContent?.trim() ?? '');

/**
 * Тест стори с динамической колонкой: до клика Developer нет, после клика по кнопке
 * колонка появляется сразу после Title (на своём месте из columnConfig, а не в конце).
 */
const playDynamicColumn: Story['play'] = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // ждём рендер таблицы
  await waitFor(
    () => expect(getHeaderNames(canvasElement)).toContain('Title'),
    {
      timeout: 5000,
    },
  );
  await expect(getHeaderNames(canvasElement)).not.toContain('Developer');

  await userEvent.click(
    canvas.getByRole('button', { name: 'Добавить колонку Developer' }),
  );

  await waitFor(
    () => {
      const names = getHeaderNames(canvasElement);
      expect(names).toContain('Developer');
      expect(names.indexOf('Developer')).toBe(names.indexOf('Title') + 1);
    },
    { timeout: 5000 },
  );
};

// Плоский набор колонок для стори индикатора скрытых столбцов.
const INDICATOR_COLS: readonly ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID', width: 140 },
  { key: 'task', name: 'Title', width: 160 },
  { key: 'priority', name: 'Priority', width: 140 },
  { key: 'issueType', name: 'Issue Type', width: 140 },
  { key: 'developer', name: 'Developer', width: 160 },
  { key: 'tr1', name: 'TR', width: 120 },
  { key: 'complete', name: '% Complete', width: 140 },
];

export const ColumnsControl: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          renderCell(cellInfo) {
            return (
              <Canvas.Button
                id="header-tooltip-drag"
                portalHoverEnabled
                onClick={() => {}}
              >
                123
              </Canvas.Button>
            );
          },
        },
        {
          key: 'task',
          name: 'Title',
        },
        {
          key: 'priority',
          name: 'Priority',
        },
        {
          key: 'issueType',
          name: 'Issue Type',
        },
        {
          key: 'developer',
          name: 'Developer',
        },
        {
          key: 'tr1',
          name: 'TR',
        },
        {
          key: 'complete',
          name: '% Complete',
        },
      ],
      [],
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 700 },
          columnsControl: {
            enable: true,
            hiding: true,
            disableHiding: ['id'],
            pinning: true,
            disablePinning: ['developer'],
            reorderingAside: true,
            reorderingHeader: true,
            columnsLabel: {
              task: 'Задачи',
            },
            orderDefault: ['id', 'issueType', 'task'],
            hiddenDefault: ['tr1'],
            pinnedDefault: ['complete'],
            onConfirm: ({ order, hidden, pinned }, _setters) => {
              // eslint-disable-next-line no-alert
              alert(`
                                    order: ${order.join(', ')}
                                    pinned: ${pinned.join(', ')}
                                    hidden: ${hidden.join(', ')}
                                `);
            },
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

/**
 * ### Динамическое добавление колонки
 *
 * Кнопка над таблицей добавляет колонку Developer в `columnConfig` между Title и
 * Priority, повторный клик удаляет её. Управление колонками включено
 * (`columnsControl.enable`), поэтому порядок колонок хранится внутри таблицы —
 * стори проверяет, что новая колонка встаёт на своё место в конфиге, а не в конец.
 */
export const ColumnsControlDynamicColumn: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'ColumnsControl: динамическое добавление колонки',
  play: playDynamicColumn,
  render: () => {
    const [rows] = useState(createRows);
    const [developerIsShown, setDeveloperIsShown] = useState(false);

    const filteringStateAndSetter = useState({
      id: '',
      task: '',
      priority: 'All',
      issueType: [],
      complete: '',
      date: '',
      globalFilter: '',
    });
    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);

    const themeOverride = useCallback<
      NonNullable<ColumnConfig<Row>['themeOverride']>
    >((cellInfo) => {
      if (cellInfo.hovered.rowHover) {
        return { bgCell: cellInfo.theme.bgHeader };
      }
      return {};
    }, []);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
          themeOverride,
        },
        {
          key: 'task',
          name: 'Title',
          themeOverride,
          minWidth: 200,
          width: 250,
        },
        ...(developerIsShown
          ? [
              {
                key: 'developer',
                name: 'Developer',
                themeOverride,
              } satisfies ColumnConfig<Row>,
            ]
          : []),
        {
          key: 'priority',
          name: 'Priority',
          sortingType: 'stringSort',
          themeOverride,
          filtering: {
            component: 'select',
            selectOptions: {
              type: 'constant',
              options: [
                { value: 'All', text: 'All' },
                { value: 'High', text: 'High' },
                { value: 'Critical', text: 'Critical' },
                { value: 'Medium', text: 'Medium' },
                { value: 'Low', text: 'Low' },
              ],
            },
            keyInFilterState: 'priority',
            valueInRow: (r) => r.priority,
            filter: {
              typeOfValue: 'single',
              filteringType: (fv, rv) => (fv !== 'All' ? rv === fv : true),
            },
          },
        },
        {
          key: 'issueType',
          name: 'Issue Type',
          themeOverride,
          filtering: {
            component: 'input',
            filter: 'includes',
            valueInRow: (r) => `${r.task} ${r.id}`,
            keyInFilterState: 'task',
          },
        },
        {
          key: 'complete',
          name: '% Complete',
          themeOverride,
        },
      ],
      [developerIsShown, themeOverride],
    );

    return (
      <Box $css={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Box>
          <Button
            size="s"
            view="secondary"
            onClick={() => setDeveloperIsShown((prev) => !prev)}
          >
            {developerIsShown
              ? 'Удалить колонку Developer'
              : 'Добавить колонку Developer'}
          </Button>
        </Box>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '60vh' },
            highlightActiveType: 'row',
            columnsControl: {
              enable: true,
              hiding: true,
              pinning: true,
              reorderingAside: true,
              reorderingHeader: true,
            },
            filtering: {
              state: filteringStateAndSetter,
              filtersInfo: {
                id: { label: 'id', clearedValue: '' },
                task: { label: 'task', clearedValue: '' },
                priority: { label: 'Some Label', clearedValue: 'All' },
                issueType: { label: 'issueType', clearedValue: [] },
                complete: { label: 'complete', clearedValue: '' },
                date: { label: 'Дата', clearedValue: '' },
                globalFilter: { label: 'Global filter', clearedValue: '' },
              },
            },
            sorting: {
              state: sortingStateAndSetter,
            },
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </Box>
    );
  },
};

/**
 * ### Динамическое добавление колонки (SimpleTable)
 *
 * Рендер из стори SimpleTable без изменений конфига таблицы. Кнопка над таблицей
 * добавляет колонку Developer в `columnConfig` между Title и Priority, повторный
 * клик удаляет её.
 */
export const SimpleTableDynamicColumn: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'SimpleTable: динамическое добавление колонки',
  play: playDynamicColumn,
  render: () => {
    const [rows] = useState(createRows);
    const [isFavorite, setIsFavorite] = useState(true);
    const [developerIsShown, setDeveloperIsShown] = useState(false);

    const filteringStateAndSetter = useState({
      id: '',
      task: '',
      priority: 'All',
      issueType: [],
      complete: '',
      date: '',
      globalFilter: '',
    });
    const themeOverride = useCallback<
      NonNullable<ColumnConfig<Row>['themeOverride']>
    >((cellInfo) => {
      if (cellInfo.hovered.rowHover) {
        return { bgCell: cellInfo.theme.bgHeader };
      }
      return {};
    }, []);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'id',
          themeOverride,
          renderHeaderCell: ({ theme }) => (
            <Canvas.Container
              direction="row"
              alignItems="center"
              gap={8}
              padding={{
                left: theme.cellHorizontalPadding,
                right: theme.cellHorizontalPadding,
              }}
            >
              <Canvas.Container position="relative">
                <Canvas.Icon icon={<IconChevronCircleDownFill />} />
                <Canvas.Icon
                  position="absolute"
                  top={-5}
                  right={-5}
                  icon={<IconBrightness0Fill color="#d70101" size="xs" />}
                />
              </Canvas.Container>
              <Canvas.Container position="relative">
                <Canvas.Icon icon={<IconAddOutline />} />
                <Canvas.Icon
                  position="absolute"
                  top={-5}
                  right={-5}
                  icon={<IconBrightness0Fill color="#d70101" size="xs" />}
                />
              </Canvas.Container>
            </Canvas.Container>
          ),
          renderCell: ({ theme }) => (
            <Canvas.Container
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              gap={8}
              padding={{
                left: theme.cellHorizontalPadding,
                right: theme.cellHorizontalPadding,
              }}
            >
              <Canvas.Container position="relative">
                <Canvas.Icon icon={<IconChevronCircleDownFill />} />
                <Canvas.Icon
                  position="absolute"
                  top={-5}
                  right={-5}
                  icon={<IconBrightness0Fill color="#d70101" size="xs" />}
                />
              </Canvas.Container>
              <Canvas.Container position="relative">
                <Canvas.Icon icon={<IconAddOutline />} />
                <Canvas.Icon
                  position="absolute"
                  top={-5}
                  right={-5}
                  icon={<IconBrightness0Fill color="#d70101" size="xs" />}
                />
              </Canvas.Container>
            </Canvas.Container>
          ),
        },
        {
          key: 'task',
          name: 'Title',
          themeOverride,
          minWidth: 200,
          width: 250,
          renderCell: ({ row, theme }) => (
            <Canvas.Container
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              gap={8}
              wrap="wrap"
              padding={{
                left: theme.cellHorizontalPadding,
                right: theme.cellHorizontalPadding,
              }}
              style={{ width: '100%' }}
            >
              <Canvas.Container direction="column" gap={2}>
                <Canvas.Text
                  font={theme.baseFontStyle}
                  color={theme.accentFg}
                  style={{ flexGrow: 1 }}
                >
                  {row.task ?? '—'}
                </Canvas.Text>
                <Canvas.Text
                  font={theme.baseFontStyle}
                  color={theme.textHeader}
                  style={{ flexGrow: 1 }}
                >
                  {row.priority ?? '—'}
                </Canvas.Text>
              </Canvas.Container>
              <Canvas.Button
                portalHoverEnabled
                variant="secondary"
                onClick={() =>
                  // eslint-disable-next-line no-console
                  console.log('Подробнее по сотруднику', row.complete)
                }
              >
                Подробнее
              </Canvas.Button>
            </Canvas.Container>
          ),
        },
        ...(developerIsShown
          ? [
              {
                key: 'developer',
                name: 'Developer',
                themeOverride,
              } satisfies ColumnConfig<Row>,
            ]
          : []),
        {
          key: 'priority',
          name: 'Priority',
          sortingType: 'stringSort',
          themeOverride,
          filtering: {
            component: 'select',
            selectOptions: {
              type: 'constant',
              options: [
                { value: 'All', text: 'All' },
                { value: 'High', text: 'High' },
                { value: 'Critical', text: 'Critical' },
                { value: 'Medium', text: 'Medium' },
                { value: 'Low', text: 'Low' },
              ],
            },

            keyInFilterState: 'priority',
            valueInRow: (r) => r.priority,
            filter: {
              typeOfValue: 'single',
              filteringType: (fv, rv) => (fv !== 'All' ? rv === fv : true),
            },
          },
        },
        {
          key: 'issueType',
          name: 'Issue Type',
          themeOverride,
          filtering: {
            component: 'input',
            filter: 'includes',

            valueInRow: (r) => `${r.task} ${r.id}`,

            keyInFilterState: 'task',
          },
        },
        {
          key: 'complete',
          name: '% Complete',
          themeOverride,
        },
      ],
      [developerIsShown, themeOverride],
    );

    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);

    return (
      <Box $css={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Box>
          <Button
            size="s"
            view="secondary"
            onClick={() => setDeveloperIsShown((prev) => !prev)}
          >
            {developerIsShown
              ? 'Удалить колонку Developer'
              : 'Добавить колонку Developer'}
          </Button>
        </Box>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '60vh' },
            rowSize: {
              default: 'big',
              showInControl: true,
            },
            highlightActiveType: 'row',

            fullScreenEnabled: true,
            controlBlock: {
              customFeatures: [
                // Обязательная кастомная фича
                {
                  value: 'favorite',
                  label: 'Удалить из избранного',
                  Icon: IconStar,
                  onClick: () => {},
                  mandatory: true,
                  details: {
                    type: 'switch',
                    label: 'В избранном',
                    checked: isFavorite,
                    onChange: (e) => setIsFavorite(e.target.checked),
                  },
                },
              ],
            },
            filtering: {
              state: filteringStateAndSetter,
              filtersInfo: {
                id: {
                  label: 'id',
                  clearedValue: '',
                },
                task: {
                  label: 'task',
                  clearedValue: '',
                },
                priority: {
                  label: 'Some Label',
                  clearedValue: 'All',
                },
                issueType: {
                  label: 'issueType',
                  clearedValue: [],
                },
                complete: {
                  label: 'complete',
                  clearedValue: '',
                },
                date: {
                  label: 'Дата',
                  clearedValue: '',
                },
                globalFilter: {
                  label: 'Global filter',
                  clearedValue: '',
                },
              },
            },
            sorting: {
              state: sortingStateAndSetter,
            },
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </Box>
    );
  },
};

/**
 * ### Доп. пункты меню закрепления (pinningMenu)
 *
 * Та же таблица, что и выше, но продукт (напр. команда APE) расширяет меню
 * закрепления своими пунктами через `controlBlock.pinningMenu.items`: порядок
 * задаётся `order`, разделитель — `dividerAfter`, состояние/иконку контролирует
 * продукт. «Закрепить шапку» реально переключает залипание шапки через
 * `tableConfig.unstickyHeader` (по умолчанию закреплена — галочка есть; клик
 * откепляет, и при скролле шапка уезжает вверх). «Закрепить строки» — демо-пункт
 * без реального эффекта (иконка синеет по стейту), показывает, что пункт можно
 * добавить.
 */
export const ColumnsControlPinningMenu: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'ColumnsControl: доп. пункты меню закрепления',
  render: () => {
    const [rows] = useState(createRows);
    // Шапка по умолчанию закреплена (unstickyHeader=false) → галочка есть.
    const [isHeaderPinned, setIsHeaderPinned] = useState(true);
    const [isRowsPinned, setIsRowsPinned] = useState(false);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        { key: 'id', name: 'ID' },
        { key: 'task', name: 'Title' },
        { key: 'priority', name: 'Priority' },
        { key: 'issueType', name: 'Issue Type' },
        { key: 'developer', name: 'Developer' },
        { key: 'complete', name: '% Complete' },
      ],
      [],
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 700 },
          // Реальное залипание шапки — «Закрепить шапку» переключает его.
          unstickyHeader: !isHeaderPinned,
          // Клик «Закрепить столбцы» без выделения → событие pin/no-selection.
          notifications: {
            onNotification: (e) => {
              // eslint-disable-next-line no-alert
              alert(e.message);
            },
          },
          columnsControl: {
            enable: true,
            pinning: true,
            disablePinning: ['developer'],
            pinnedDefault: ['complete'],
          },
          controlBlock: {
            pinningMenu: {
              // Мёржатся с нативными (Открепить всё order=100, Закрепить
              // столбцы order=200). Итог: … → Закрепить строки → divider →
              // Закрепить шапку.
              items: [
                {
                  value: 'pin-rows',
                  label: 'Закрепить строки',
                  order: 300,
                  dividerAfter: true,
                  icon: (ctx) => (
                    <IconPinListOutline
                      size={ctx.rowSize === 'small' ? 'xs' : 's'}
                      color={isRowsPinned ? textInfo : 'inherit'}
                    />
                  ),
                  onClick: () => setIsRowsPinned((prev) => !prev),
                },
                {
                  value: 'pin-header',
                  label: 'Закрепить шапку',
                  order: 400,
                  icon: (ctx) => (
                    <Box
                      $css={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        visibility: isHeaderPinned ? 'visible' : 'hidden',
                      }}
                    >
                      <IconDone
                        size={ctx.rowSize === 'small' ? 'xs' : 's'}
                        color={textInfo}
                      />
                    </Box>
                  ),
                  onClick: () => setIsHeaderPinned((prev) => !prev),
                },
              ],
            },
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

export const ColumnsControlWithServiceColumnsForTest: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
        },
        {
          key: 'task',
          name: 'Title',
        },
        {
          key: 'priority',
          name: 'Priority',
        },
        {
          key: 'issueType',
          name: 'Issue Type',
        },
        {
          key: 'developer',
          name: 'Developer',
        },
        {
          key: 'tr1',
          name: 'TR',
        },
        {
          key: 'complete',
          name: '% Complete',
        },
      ],
      [],
    );

    const selectingRowStateAndSetter = useState(
      (): ReadonlySet<string | number> => new Set(),
    );

    return (
      <TableCanvas
        tableConfig={{
          selecting: {
            rowCheckboxDisabled: (row) => row.id === 2,
            rowShowCheckbox: (row) => row.id !== 3,
            state: selectingRowStateAndSetter,
            rowKeyGetter: (r) => r.id + r.issueType,
            showDefault: false,
          },
          containerStyle: { height: 700 },
          columnsControl: {
            enable: true,
            hiding: true,
            disableHiding: ['id'],
            pinning: true,
            disablePinning: ['developer'],
            reorderingAside: true,
            reorderingHeader: true,
            columnsLabel: {
              task: 'Задачи',
            },
            orderDefault: ['id', 'issueType', 'task'],
            hiddenDefault: ['tr1'],
            pinnedDefault: ['complete'],
            onConfirm: ({ order, hidden, pinned }, _setters) => {
              // eslint-disable-next-line no-alert
              alert(`
                                    order: ${order.join(', ')}
                                    pinned: ${pinned.join(', ')}
                                    hidden: ${hidden.join(', ')}
                                `);
            },
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

/**
 * Индикатор скрытых столбцов: скрытые через настройку столбцов колонки подсвечиваются
 * в шапке синей полосатой линией на границе. Наведите курсор на линию, появится тултип;
 * двойной клик раскрывает весь скрытый промежуток. Ресайз соседней колонки за эту же
 * границу продолжает работать.
 *
 * Здесь скрыты Priority (одна колонка) и Developer + TR (две подряд, линия одна на
 * весь промежуток).
 */
export const HiddenColumnsIndicator: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  name: 'ColumnsControl: индикатор скрытых столбцов',
  render: () => {
    const [rows] = useState(createRows);

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 420 },
          rowMarkers: { startIndex: 1 },
          columnsControl: {
            enable: true,
            hiding: true,
            hiddenDefault: ['priority', 'developer', 'tr1'],
          },
        }}
        columnConfig={INDICATOR_COLS}
        rows={rows}
      />
    );
  },
};

/**
 * Индикатор по бокам таблицы: скрыты первый (ID) и последний (% Complete) столбцы,
 * линия прижимается к левому и правому краю. Title закреплён и уезжает в начало
 * вместе со своей границей.
 */
export const HiddenColumnsIndicatorEdges: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  name: 'ColumnsControl: индикатор скрытых столбцов по бокам',
  render: () => {
    const [rows] = useState(createRows);

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 420 },
          rowMarkers: { startIndex: 1 },
          columnsControl: {
            enable: true,
            hiding: true,
            pinning: true,
            pinnedDefault: ['task'],
            hiddenDefault: ['id', 'complete'],
          },
        }}
        columnConfig={INDICATOR_COLS}
        rows={rows}
      />
    );
  },
};

/**
 * Индикатор выключен: hiddenColumnsIndicator: false, столбцы скрываются как раньше,
 * без подсветки границ.
 */
export const HiddenColumnsIndicatorDisabled: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  name: 'ColumnsControl: индикатор скрытых столбцов выключен',
  render: () => {
    const [rows] = useState(createRows);

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 420 },
          rowMarkers: { startIndex: 1 },
          columnsControl: {
            enable: true,
            hiding: true,
            hiddenColumnsIndicator: false,
            hiddenDefault: ['priority'],
          },
        }}
        columnConfig={INDICATOR_COLS}
        rows={rows}
      />
    );
  },
};

/**
 * Индикатор в сгруппированной шапке. Полоса живёт только в обычном (листовом) ряду
 * и не залезает на ячейки групп. Скрыты Факт (внутри группы «Показатели») и Инд
 * (внутри группы «Оценка»).
 */
export const HiddenColumnsIndicatorGrouped: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  name: 'ColumnsControl: индикатор скрытых столбцов в группе',
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig: ColumnOrColumnGroupConfig<Row>[] = [
      { key: 'id', name: 'ID', width: 120 },
      {
        key: 'metrics',
        name: 'Показатели',
        children: [
          { key: 'task', name: 'План', width: 130 },
          { key: 'priority', name: 'Факт', width: 130 },
          { key: 'issueType', name: 'Прогноз', width: 130 },
        ],
      },
      {
        key: 'grade',
        name: 'Оценка',
        children: [
          { key: 'developer', name: 'Инд', width: 130 },
          { key: 'complete', name: 'Итог', width: 130 },
        ],
      },
    ];

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 420 },
          rowMarkers: { startIndex: 1 },
          columnsControl: {
            enable: true,
            hiding: true,
            hiddenDefault: ['priority', 'developer'],
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

/**
 * Индикатор в скваш-колонках (высокая слитая шапка). Глубокая группа делает шапку
 * высокой, мелкая группа схлопывается в высокую ячейку. Подряд скрыты лист подгруппы
 * (B1) и большая колонка (Ср): в промежутке есть большая колонка, поэтому полоса одна
 * на весь промежуток и на всю высоту, тултип сверху, двойной клик раскрывает обе.
 */
export const HiddenColumnsIndicatorSquashed: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  name: 'ColumnsControl: индикатор скрытых столбцов в скваш-колонках',
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig: ColumnOrColumnGroupConfig<Row>[] = [
      { key: 'id', name: 'ID', width: 100 },
      {
        key: 'deep',
        name: 'Глубокая',
        children: [
          {
            key: 'sub',
            name: 'Подгруппа',
            children: [
              { key: 'task', name: 'A', width: 110 },
              { key: 'priority', name: 'B', width: 110 },
              { key: 'issueType', name: 'B1', width: 110 },
            ],
          },
        ],
      },
      { key: 'developer', name: 'Ср', width: 130 },
      {
        key: 'shallow',
        name: 'Мелкая',
        children: [{ key: 'complete', name: 'C', width: 160 }],
      },
    ];

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 420 },
          rowMarkers: { startIndex: 1 },
          columnsGrouping: { squashEmptyCells: true },
          columnsControl: {
            enable: true,
            hiding: true,
            hiddenDefault: ['issueType', 'developer'],
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};
