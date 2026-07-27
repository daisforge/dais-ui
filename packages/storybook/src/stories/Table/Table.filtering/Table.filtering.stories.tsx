/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import {
  createSeededRandom,
  FIXED_DATE_TIMESTAMP
} from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '@ui-kit/components/Calendar';
import { DatePicker } from '@ui-kit/components/DatePicker';
import { ModalDF } from '@ui-kit/components/ModalDF';
import {
  ColumnConfig,
  ColumnOrColumnGroupConfig,
  Table,
  TableFilterSelectListItem
} from '@ui-kit/components/Table';
import { TextField } from '@ui-kit/components/TextField';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/Filtering/Simple',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate
    }
  }
};

export default meta;

const preCode = `
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Badge,
  Box,
  Button,
  ColumnConfig,
  ColumnOrColumnGroupConfig,
  RenderCellProps,
  RowHeightFunc,
  SIZES,
  Select,
  Switch,
  Table,
  TextField,
} from '@dais-ui/ui-kit';
import { IconAddOutline, IconBoxOutline, IconSber } from '@dais-ui/ui-kit/icons';
`;

type Story = StoryObj;

export const Filtering: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(() => {
      const seededRandom = createSeededRandom(42);
      return createRows().map((el) => ({
        ...el,
        id: Math.floor(seededRandom() * 1000),
        date: (() => {
          const date = new Date(
            FIXED_DATE_TIMESTAMP +
              (Math.floor(seededRandom() * 61) - 30) * 86400000
          );
          return `${String(date.getDate()).padStart(2, '0')}.${String(
            date.getMonth() + 1
          ).padStart(2, '0')}.${date.getFullYear()}`;
        })()
      }));
    });

    const columnConfig = useMemo<
      readonly ColumnConfig<Row & { date: string }>[]
    >(
      () => [
        {
          key: 'id',
          name: 'ID',
          filtering: {
            component: 'input',
            filter: 'startWith',

            valueInRow: (r) => r.id,
            keyInFilterState: 'id'
          }
        },
        {
          key: 'date',
          name: 'Date',
          filtering: {
            component: 'custom',
            customRender: (props) => {
              const {
                headerContextState: { filters, setFilters }
              } = props;
              return (
                <Calendar
                  value={filters?.['date']}
                  onChangeValue={(v) => {
                    if (setFilters)
                      setFilters((prev) => ({
                        ...prev,
                        date: v
                      }));
                  }}
                />
              );
            },
            filter: (filterValue, rowValue) =>
              filterValue ? rowValue === filterValue : true,
            valueInRow: (r) => r.date,
            compareWithClearedValue: (clearedValue, currV) =>
              clearedValue === currV,
            keyInFilterState: 'date'
          }
        },
        {
          key: 'task',
          name: 'Title',
          filtering: {
            component: 'input',
            filter: 'includes',

            valueInRow: (r) => `${r.task} ${r.id}`,

            keyInFilterState: 'task'
          }
        },
        {
          key: 'priority',
          name: 'Priority',
          filtering: {
            component: 'select',
            selectOptions: {
              type: 'constant',
              options: [
                { value: 'All', text: 'All' },
                { value: 'High', text: 'High' },
                { value: 'Critical', text: 'Critical' },
                { value: 'Medium', text: 'Medium' },
                { value: 'Low', text: 'Low' }
              ]
            },

            keyInFilterState: 'priority',
            valueInRow: (r) => r.priority,
            filter: {
              typeOfValue: 'single',
              filteringType: (fv, rv) => (fv !== 'All' ? rv === fv : true)
            }
          }
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
                  custom beforeList
                </TableFilterSelectListItem>
              );
            },
            component: 'select',
            selectOptions: {
              type: 'stateInHeaderContext',
              optionsKeyInHeaderContext: 'issueTypeOptions'
            },
            keyInFilterState: 'issueType',
            valueInRow: (r) => r.issueType,
            filter: {
              typeOfValue: 'multiple',
              filteringType: (fv, rv) =>
                !fv.length || fv.some((fvCurr) => fvCurr === rv)
            }
          }
        },
        {
          key: 'complete',
          name: '% Complete',
          filtering: {
            component: 'input',
            keyInFilterState: 'complete',
            valueInRow: (r) => r.complete,
            filter: (fv, rv) => (+rv || 0) >= (+fv || 0)
          }
        }
      ],
      []
    );

    const filteringStateAndSetter = useState({
      id: '',
      task: '',
      priority: 'All',
      issueType: [],
      complete: '',
      date: '',
      globalFilter: ''
    });

    const headerContextValue = useMemo(
      () => ({
        issueTypeOptions: [
          { text: 'Bug', value: 'Bug' },
          { text: 'Improvement', value: 'Improvement' },
          { text: 'Epic', value: 'Epic' },
          { text: 'Story', value: 'Story' }
        ]
      }),
      []
    );

    return (
      <Table
        tableConfig={{
          containerStyle: { height: '700px' },
          filtering: {
            state: filteringStateAndSetter,
            filtersInfo: {
              id: {
                label: 'id',
                clearedValue: ''
              },
              task: {
                label: 'task',
                clearedValue: ''
              },
              priority: {
                label: 'Some Label',
                clearedValue: 'All'
              },
              issueType: {
                label: 'issueType',
                clearedValue: []
              },
              complete: {
                label: 'complete',
                clearedValue: ''
              },
              date: {
                label: 'Дата',
                clearedValue: ''
              },
              globalFilter: {
                label: 'Global filter',
                clearedValue: ''
              }
            },
            sidebarConfig: {
              order: ['globalFilter', 'date'],
              items: {
                date: {
                  label: 'Some label for date',
                  customRenderFn: (filters, setFilters) => (
                    <DatePicker
                      value={filters?.['date']}
                      onCommitDate={(v) => {
                        if (setFilters && !(v instanceof Date))
                          setFilters((prev) => ({
                            ...prev,
                            date: v
                          }));
                      }}
                      size="s"
                      style={{
                        width: '100%'
                      }}
                    />
                  )
                },
                task: {
                  label: 'Some label for task'
                },
                globalFilter: {
                  label: 'Some global filter',
                  customRenderFn: (filters, setFilters) => (
                    <TextField
                      value={filters['globalFilter']}
                      onChange={(e) => {
                        setFilters((prev) => ({
                          ...prev,
                          globalFilter: e.target.value
                        }));
                      }}
                    />
                  )
                }
              }
            }
          }
        }}
        columnConfig={columnConfig}
        rows={rows}
        headerContextValue={headerContextValue}
      />
    );
  }
};

export const FilteringInModal: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(() => {
      const seededRandom = createSeededRandom(42);
      return createRows().map((el) => ({
        ...el,
        id: Math.floor(seededRandom() * 1000),
        date: (() => {
          const date = new Date(
            FIXED_DATE_TIMESTAMP +
              (Math.floor(seededRandom() * 61) - 30) * 86400000
          );
          return `${String(date.getDate()).padStart(2, '0')}.${String(
            date.getMonth() + 1
          ).padStart(2, '0')}.${date.getFullYear()}`;
        })()
      }));
    });

    const columnConfig = useMemo(
      (): readonly ColumnOrColumnGroupConfig<Row & { date: string }>[] => [
        {
          key: 'id',
          name: 'ID',
          filtering: {
            component: 'input',
            filter: 'startWith',

            valueInRow: (r) => r.id,
            keyInFilterState: 'id'
          }
        },
        {
          key: 'date',
          name: 'Date',
          filtering: {
            component: 'custom',
            customRender: (props) => {
              const {
                headerContextState: { filters, setFilters }
              } = props;
              return (
                <Calendar
                  value={filters?.['date']}
                  onChangeValue={(v) => {
                    if (setFilters)
                      setFilters((prev) => ({
                        ...prev,
                        date: v
                      }));
                  }}
                />
              );
            },
            filter: (filterValue, rowValue) =>
              filterValue ? rowValue === filterValue : true,
            valueInRow: (r) => r.date,
            compareWithClearedValue: (clearedValue, currV) =>
              clearedValue === currV,
            keyInFilterState: 'date'
          }
        },
        {
          key: 'taskParent',
          name: 'taskParent',
          children: [
            {
              key: 'task',
              name: 'Title 22asdf asdfsdff ddd ',
              filtering: {
                component: 'input',
                filter: 'includes',

                valueInRow: (r) => `${r.task} ${r.id}`,

                keyInFilterState: 'task'
              }
            },
            {
              key: 'priority',
              name: 'Priority',
              filtering: {
                component: 'select',
                selectOptions: {
                  type: 'constant',
                  options: [
                    { value: 'All', text: 'All' },
                    { value: 'High', text: 'High' },
                    { value: 'Critical', text: 'Critical' },
                    { value: 'Medium', text: 'Medium' },
                    { value: 'Low', text: 'Low' }
                  ]
                },

                keyInFilterState: 'priority',
                valueInRow: (r) => r.priority,
                filter: {
                  typeOfValue: 'single',
                  filteringType: (fv, rv) => (fv !== 'All' ? rv === fv : true)
                }
              }
            }
          ]
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
                  custom beforeList
                </TableFilterSelectListItem>
              );
            },
            component: 'select',
            selectOptions: {
              type: 'stateInHeaderContext',
              optionsKeyInHeaderContext: 'issueTypeOptions'
            },
            keyInFilterState: 'issueType',
            valueInRow: (r) => r.issueType,
            filter: {
              typeOfValue: 'multiple',
              filteringType: (fv, rv) =>
                !fv.length || fv.some((fvCurr) => fvCurr === rv)
            }
          }
        },
        {
          key: 'complete',
          name: '% Complete',
          filtering: {
            component: 'input',
            keyInFilterState: 'complete',
            valueInRow: (r) => r.complete,
            filter: (fv, rv) => (+rv || 0) >= (+fv || 0)
          }
        }
      ],
      []
    );

    const filteringStateAndSetter = useState({
      id: '',
      task: '',
      priority: 'All',
      issueType: [],
      complete: '',
      date: '',
      globalFilter: ''
    });

    const headerContextValue = useMemo(
      () => ({
        issueTypeOptions: [
          { text: 'Bug', value: 'Bug' },
          { text: 'Improvement', value: 'Improvement' },
          { text: 'Epic', value: 'Epic' },
          { text: 'Story', value: 'Story' }
        ]
      }),
      []
    );

    const tableJsx = (
      <Table
        tableConfig={{
          containerStyle: { height: '700px' },
          filtering: {
            state: filteringStateAndSetter,
            filtersInfo: {
              id: {
                label: 'id',
                clearedValue: ''
              },
              task: {
                label: 'task',
                clearedValue: ''
              },
              priority: {
                label: 'Some Label',
                clearedValue: 'All'
              },
              issueType: {
                label: 'issueType',
                clearedValue: []
              },
              complete: {
                label: 'complete',
                clearedValue: ''
              },
              date: {
                label: 'Дата',
                clearedValue: ''
              },
              globalFilter: {
                label: 'Global filter',
                clearedValue: ''
              }
            },
            sidebarConfig: {
              order: ['globalFilter', 'date'],
              items: {
                date: {
                  label: 'Some label for date',
                  customRenderFn: (filters, setFilters) => (
                    <DatePicker
                      value={filters?.['date']}
                      onCommitDate={(v) => {
                        if (setFilters && !(v instanceof Date))
                          setFilters((prev) => ({
                            ...prev,
                            date: v
                          }));
                      }}
                      size="s"
                      style={{
                        width: '100%'
                      }}
                    />
                  )
                },
                task: {
                  label: 'Some label for task'
                },
                globalFilter: {
                  label: 'Some global filter',
                  customRenderFn: (filters, setFilters) => (
                    <TextField
                      value={filters['globalFilter']}
                      onChange={(e) => {
                        setFilters((prev) => ({
                          ...prev,
                          globalFilter: e.target.value
                        }));
                      }}
                    />
                  )
                }
              }
            }
          }
        }}
        columnConfig={columnConfig}
        rows={rows}
        headerContextValue={headerContextValue}
      />
    );

    const [modalOpened, setModalOpened] = useState(false);

    return (
      <ModalDF
        opened={modalOpened}
        isFocusTrapped={false}
        onClose={() => setModalOpened(false)}
      >
        <ModalDF.Main>
          <ModalDF.Header />
          <ModalDF.Content
            $css={{
              '&&': {
                overflow: 'visible'
              }
            }}
          >
            {tableJsx}
          </ModalDF.Content>
        </ModalDF.Main>
      </ModalDF>
    );
  }
};
