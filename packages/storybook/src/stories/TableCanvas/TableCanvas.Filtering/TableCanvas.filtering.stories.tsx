/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import {
  createSeededRandom,
  FIXED_DATE_TIMESTAMP,
} from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@ui-kit/components/Box';
import { Button } from '@ui-kit/components/Button';
import { Calendar } from '@ui-kit/components/Calendar';
import { Combobox, ComboboxItemOption } from '@ui-kit/components/Combobox';
import { Divider } from '@ui-kit/components/Divider';
import {
  ColumnConfig,
  TableCanvas,
  TableFilterSelect,
  TableFilterSelectListItem,
} from '@ui-kit/components/TableCanvas';
import { IconStar } from '@ui-kit/icons';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/Filtering',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
};

export default meta;
const preCode = `
import React, { useMemo, useState } from 'react';
import {
  Box,
  Button,
  Calendar,
  Combobox,
  ComboboxItemOption,
  Divider,
} from '@daisforge/ui';
import { IconStar } from '@daisforge/ui/icons';
import {
  ColumnConfig,
  TableCanvas,
  TableFilterSelect,
  TableFilterSelectListItem,
} from '@daisforge/ui/components/TableCanvas';

import { createRows, type Row } from './data/tableData';

`;

export const FilteringTable: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Filtering Table',
  render: () => {
    const [isFavorite, setIsFavorite] = useState(true);
    const [rows] = useState(() => {
      const seededRandom = createSeededRandom(42);
      return createRows().map((el) => ({
        ...el,
        id: Math.floor(seededRandom() * 1000),
        date: (() => {
          const date = new Date(
            FIXED_DATE_TIMESTAMP +
              (Math.floor(seededRandom() * 61) - 30) * 86400000,
          );
          return `${String(date.getDate()).padStart(2, '0')}.${String(
            date.getMonth() + 1,
          ).padStart(2, '0')}.${date.getFullYear()}`;
        })(),
      }));
    });

    const filteringStateAndSetter = useState({
      id: '',
      task: '',
      priority: 'All',
      issueType: [],
      issueTypeCustom: [] as string[],
      complete: '',
      globalFilter: '',
      date: undefined as string | undefined,
    });

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'id',
        },
        {
          key: 'task',
          name: 'Title',
        },
        {
          key: 'date',
          name: 'Date',
          filtering: {
            component: 'custom',
            customRender: (props) => {
              const {
                headerContextState: { filters, setFilters },
              } = props;
              return (
                <Calendar
                  value={filters?.['date']}
                  onChangeValue={(v) => {
                    if (setFilters)
                      setFilters((prev) => ({
                        ...prev,
                        date: v,
                      }));
                  }}
                />
              );
            },
            filter: (filterValue, rowValue) =>
              filterValue ? rowValue === filterValue : true,
            valueInRow: (r) => (r as Row & { date: string })?.date,
            compareWithClearedValue: (clearedValue, currV) =>
              clearedValue === currV,
            keyInFilterState: 'date',
          },
        },

        {
          key: 'priority',
          name: 'Priority',
          filtering: {
            component: 'select',
            selectOptions: {
              type: 'constant',
              options: [
                {
                  value: 'All',
                  text: 'Все инциденты и запросы на доработку без ограничения по срочности',
                },
                {
                  value: 'High',
                  text: 'Высокий приоритет критически важного инцидента',
                },
                {
                  value: 'Critical',
                  text: 'Критическая ошибка блокирующая работу сервиса',
                },
                {
                  value: 'Medium',
                  text: 'Средний приоритет плановой доработки функциональности',
                },
                {
                  value: 'Low',
                  text: 'Низкий приоритет косметического усовершенствования интерфейса',
                },
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
          filtering: {
            beforeList(props) {
              return (
                <TableFilterSelectListItem
                  $size={props.headerContextState.rowSize}
                >
                  Произвольный вспомогательный элемент заголовка списка с
                  подсказкой сверху списка
                </TableFilterSelectListItem>
              );
            },
            afterList(props) {
              return (
                <TableFilterSelectListItem
                  $size={props.headerContextState.rowSize}
                >
                  Произвольный вспомогательный элемент заголовка списка с
                  подсказкой внизу списка
                </TableFilterSelectListItem>
              );
            },
            component: 'select',
            selectOptions: {
              type: 'stateInHeaderContext',
              optionsKeyInHeaderContext: 'issueTypeOptions',
            },
            keyInFilterState: 'issueType',
            valueInRow: (r) => r.issueType,
            filter: {
              typeOfValue: 'multiple',
              filteringType: (fv, rv) =>
                !fv.length || fv.some((fvCurr) => fvCurr === rv),
            },
          },
        },
        {
          key: 'issueTypeCustom',
          name: 'Issue Type (custom render)       ',
          renderCell({ row }) {
            return row.issueType;
          },
          filtering: {
            component: 'custom',
            customRender: (props) => {
              const {
                headerContextState: { filters, setFilters, rowSize },
                setPopoverIsOpen,
              } = props;
              // Опции для выпадашки берутся из headerContextValue (см. headerContextValue ниже)
              const headerContextState = props.headerContextState as Record<
                string,
                unknown
              >;
              const issueTypeOptions = (headerContextState.issueTypeOptions ??
                []) as { text: string; value: string }[];

              // Локальный черновик выбранных значений: меняется при кликах по айтемам,
              // а в реальный стейт фильтров попадает по кнопке «Применить» (afterList).
              const [draftValue, setDraftValue] = useState<string[]>(
                (filters?.['issueTypeCustom'] as string[] | undefined) ?? [],
              );

              const apply = () => {
                if (setFilters) {
                  setFilters((prev) => ({
                    ...prev,
                    issueTypeCustom: draftValue,
                  }));
                  setPopoverIsOpen(false);
                }
              };

              return (
                <TableFilterSelect
                  mode="multiple"
                  value={draftValue}
                  onChange={setDraftValue}
                  options={issueTypeOptions}
                  size={rowSize}
                  width="232px"
                  beforeList={
                    <TableFilterSelectListItem $size={rowSize}>
                      Произвольный вспомогательный элемент заголовка списка с
                      подсказкой
                    </TableFilterSelectListItem>
                  }
                  afterList={
                    <Box
                      $css={`position: sticky; bottom: 0; background-color: white; display: grid; gap: ${
                        rowSize === 'big' ? '4px' : '4px'
                      }; margin-top: 4px;`}
                    >
                      <Divider />
                      <Button
                        size={rowSize === 'small' ? 'xxs' : 's'}
                        style={{ marginLeft: 'auto ' }}
                        view="accent"
                        onClick={apply}
                      >
                        Применить
                      </Button>
                    </Box>
                  }
                />
              );
            },
            filter: (filterValue, rowValue) =>
              !Array.isArray(filterValue) ||
              !(filterValue as string[]).length ||
              (filterValue as string[]).some((fvCurr) => fvCurr === rowValue),
            valueInRow: (r) => r.issueType,
            compareWithClearedValue: (clearedValue, currV) =>
              JSON.stringify(clearedValue) === JSON.stringify(currV),
            keyInFilterState: 'issueTypeCustom',
          },
        },
        {
          key: 'complete',
          name: '% Complete',
        },
      ],
      [],
    );

    const headerContextValue = useMemo(
      () => ({
        issueTypeOptions: [
          {
            // Ошибка-1212---3232-3---4343434 - для визуальной проверки длинных текстов без пробелов
            text: 'Ошибка-1212---3232-3---4343434 при формировании выписки по счету',
            value: 'Bug',
          },
          {
            text: 'Улучшение производительности загрузки списка документов',
            value: 'Improvement',
          },
          {
            text: 'Эпик крупной функциональности платежного модуля',
            value: 'Epic',
          },
          {
            text: 'История пользовательского сценария оформления кредита',
            value: 'Story',
          },
        ],
      }),
      [],
    );

    // Combobox из sdds-finai ожидает items в формате { value, label }.
    const sidebarIssueTypeOptions = useMemo<ComboboxItemOption[]>(
      () =>
        headerContextValue.issueTypeOptions.map((option) => ({
          value: option.value,
          label: option.text,
        })),
      [headerContextValue],
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '60vh' },
          rowSize: {
            default: 'big',
            showInControl: true,
          },
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
            sidebarConfig: {
              items: {
                // Переопределяем рендер колоночного фильтра именно для сайдбара:
                // колоночный customRender остаётся в поповере шапки.
                issueTypeCustom: {
                  label: 'Issue Type (custom render)',
                  customRenderFn: (filters, setFilters) => {
                    // Хуки здесь допустимы: customRenderFn рендерится как
                    // компонент (см. RenderSlot в feature-filtering).
                    // Черновик выбора уезжает в фильтры сайдбара по кнопке
                    // «Применить» внутри выпадающего списка (afterList).
                    const [draftValue, setDraftValue] = useState<string[]>(
                      filters.issueTypeCustom,
                    );

                    return (
                      <Combobox
                        multiple
                        size="s"
                        items={sidebarIssueTypeOptions}
                        value={draftValue}
                        onChange={(next: string[]) => setDraftValue(next)}
                        closeAfterSelect={false}
                        placeholder="Выберите Issue Type"
                        afterList={
                          <Box $css="display: grid; gap: 4px; margin-top: 4px;">
                            <Divider />
                            <Button
                              size="xs"
                              view="accent"
                              style={{ marginLeft: 'auto' }}
                              onClick={() =>
                                setFilters((prev) => ({
                                  ...prev,
                                  issueTypeCustom: draftValue,
                                }))
                              }
                            >
                              Применить
                            </Button>
                          </Box>
                        }
                      />
                    );
                  },
                },
              },
            },
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
              issueTypeCustom: {
                label: 'issueTypeCustom',
                clearedValue: [],
              },
              complete: {
                label: 'complete',
                clearedValue: '',
              },
              date: {
                label: 'Дата',
                clearedValue: undefined,
              },
              globalFilter: {
                label: 'Global filter',
                clearedValue: '',
              },
            },
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
        headerContextValue={headerContextValue}
      />
    );
  },
};
