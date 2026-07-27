/* eslint-disable no-alert */
/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/ControlBlock/MassPanelAction',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate
    }
  }
};

export default meta;

type Story = StoryObj;

const preCode = `
import { ColumnConfig, TableCanvas } from '@dais-ui/ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

`;

export const MassPanelActionBasic: Story = {
  name: 'Базовая панель массовых действий',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const selectingRowStateAndSetter = useState(
      (): ReadonlySet<string | number> => new Set()
    );

    const columns = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID'
        },
        {
          key: 'task',
          name: 'Title'
        },
        {
          key: 'priority',
          name: 'Priority'
        },
        {
          key: 'issueType',
          name: 'Issue Type'
        },
        {
          key: 'developer',
          name: 'Developer'
        }
      ],
      []
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 700 },
          selecting: {
            state: selectingRowStateAndSetter,
            rowKeyGetter: (row) => row.id
          },
          controlBlock: {
            massActionPanel: {
              buttons: [
                {
                  type: 'button',
                  text: 'Экспорт',
                  view: 'secondary',
                  onClick: () => {
                    alert('Экспорт выбранных строк');
                  }
                },

                {
                  type: 'button',
                  text: 'Архивировать',
                  view: 'secondary',
                  onClick: () => {
                    alert('Архивирование выбранных строк');
                  }
                },
                {
                  type: 'button',
                  text: 'Дублировать',
                  view: 'secondary',
                  onClick: () => {
                    alert('Дублирование выбранных строк');
                  }
                },
                {
                  type: 'button',
                  text: 'Accent',
                  view: 'accent',
                  onClick: () => {
                    alert('Accent click');
                  }
                }
              ]
            }
          }
        }}
        columnConfig={columns}
        rows={rows}
      />
    );
  }
};

export const MassPanelActionWithAccent: Story = {
  name: 'Панель с accent кнопками',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const selectingRowStateAndSetter = useState(
      (): ReadonlySet<string | number> => new Set()
    );

    const columns = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID'
        },
        {
          key: 'task',
          name: 'Title'
        },
        {
          key: 'priority',
          name: 'Priority'
        },
        {
          key: 'issueType',
          name: 'Issue Type'
        }
      ],
      []
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 700 },
          selecting: {
            state: selectingRowStateAndSetter,
            rowKeyGetter: (row) => row.id
          },
          controlBlock: {
            massActionPanel: {
              buttons: [
                {
                  type: 'button',
                  text: 'Обычная кнопка 1',
                  view: 'secondary',
                  onClick: () => alert('Кнопка 1')
                },

                {
                  type: 'button',
                  text: 'Обычная кнопка 2',
                  view: 'secondary',
                  onClick: () => alert('Кнопка 2')
                },
                {
                  type: 'button',
                  text: 'Еще одна кнопка',
                  view: 'secondary',
                  onClick: () => alert('Accent Button')
                },
                {
                  type: 'button',
                  text: 'Обычная кнопка 3',
                  view: 'secondary',
                  onClick: () => alert('Кнопка 3')
                },
                {
                  type: 'button',
                  text: 'Accent кнопка (всегда видима)',
                  view: 'accent',
                  onClick: () => alert('Accent кнопка')
                }
              ]
            }
          }
        }}
        columnConfig={columns}
        rows={rows}
      />
    );
  }
};

export const MassPanelActionWithButton: Story = {
  name: 'Панель с кнопками типа Button',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const selectingRowStateAndSetter = useState(
      (): ReadonlySet<string | number> => new Set()
    );

    const columns = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID'
        },
        {
          key: 'task',
          name: 'Title'
        },
        {
          key: 'priority',
          name: 'Priority'
        }
      ],
      []
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 700 },
          selecting: {
            state: selectingRowStateAndSetter,
            rowKeyGetter: (row) => row.id
          },
          controlBlock: {
            massActionPanel: {
              buttons: [
                {
                  type: 'button',
                  text: 'Отменить',
                  view: 'secondary',
                  onClick: () => alert('Отменить')
                },
                {
                  type: 'button',
                  text: 'Действие',
                  view: 'secondary',
                  onClick: () => alert('Действие')
                },
                {
                  type: 'button',
                  text: 'Сохранить',
                  view: 'accent',
                  onClick: () => alert('Сохранить')
                }
              ]
            }
          }
        }}
        columnConfig={columns}
        rows={rows}
      />
    );
  }
};

export const MassPanelActionWithDisabled: Story = {
  name: 'Панель с disabled кнопками',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const selectingRowStateAndSetter = useState(
      (): ReadonlySet<string | number> => new Set()
    );
    const [selectedCount] = selectingRowStateAndSetter;

    const columns = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID'
        },
        {
          key: 'task',
          name: 'Title'
        },
        {
          key: 'priority',
          name: 'Priority'
        }
      ],
      []
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 700 },
          selecting: {
            state: selectingRowStateAndSetter,
            rowKeyGetter: (row) => row.id
          },
          controlBlock: {
            massActionPanel: {
              buttons: [
                {
                  type: 'button',
                  text: 'Экспорт',
                  view: 'secondary',
                  disabled: selectedCount.size === 0,
                  disabledTooltipProps: {
                    text: 'Выберите хотя бы одну строку для экспорта'
                  },
                  onClick: () => alert('Экспорт')
                },

                {
                  type: 'button',
                  text: 'Архивировать',
                  view: 'secondary',
                  disabled: selectedCount.size < 2,
                  disabledTooltipProps: {
                    text: 'Выберите минимум 2 строки для архивирования'
                  },
                  onClick: () => alert('Архивировать')
                },
                {
                  type: 'button',
                  text: 'Accent',
                  view: 'accent',
                  disabled: selectedCount.size === 0,
                  disabledTooltipProps: {
                    text: 'Выберите строки для удаления'
                  },
                  onClick: () => alert('Accent')
                }
              ]
            }
          }
        }}
        columnConfig={columns}
        rows={rows}
      />
    );
  }
};

export const MassPanelActionForceShow: Story = {
  name: 'Панель без selecting (show: true)',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);

    const columns = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID'
        },
        {
          key: 'task',
          name: 'Title'
        },
        {
          key: 'priority',
          name: 'Priority'
        },
        {
          key: 'issueType',
          name: 'Issue Type'
        }
      ],
      []
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 700 },
          controlBlock: {
            massActionPanel: {
              show: true,
              buttons: [
                {
                  type: 'button',
                  text: 'Отменить',
                  view: 'secondary',
                  onClick: () => {
                    alert('Отменить');
                  }
                },
                {
                  type: 'button',
                  text: 'Сохранить',
                  view: 'accent',
                  onClick: () => {
                    alert('Сохранить');
                  }
                }
              ]
            }
          }
        }}
        columnConfig={columns}
        rows={rows}
      />
    );
  }
};

/**
 * Уменьшенная панель массовых действий — размер `size: 'xs'`.
 *
 * Размер задаётся ИЗВНЕ через `controlBlock.massActionPanel.size` и НЕ зависит от ширины вьюпорта
 * (медиазапрос 1280 внутри таблицы не используется). В XS уменьшаются кнопки (`xxs`), «Сбросить всё» (`xxs`),
 * иконки дропдауна скрытых действий и сворачивания (`xs`) и внутренние отступы панели.
 */
export const MassPanelActionSizeXS: Story = {
  name: 'Уменьшенная панель (size XS)',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    // Предвыбираем несколько строк, чтобы панель сразу была видна (со счётчиком и «Сбросить всё»).
    const selectingRowStateAndSetter = useState<ReadonlySet<string | number>>(
      () => new Set(rows.slice(0, 3).map((r) => r.id))
    );

    const columns = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        { key: 'id', name: 'ID' },
        { key: 'task', name: 'Title' },
        { key: 'priority', name: 'Priority' },
        { key: 'issueType', name: 'Issue Type' },
        { key: 'developer', name: 'Developer' }
      ],
      []
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 700 },
          selecting: {
            state: selectingRowStateAndSetter,
            rowKeyGetter: (row) => row.id
          },
          controlBlock: {
            massActionPanel: {
              // Размер панели задаётся извне, независимо от вьюпорта.
              size: 'xs',
              buttons: [
                {
                  type: 'button',
                  text: 'Экспорт',
                  view: 'secondary',
                  onClick: () => alert('Экспорт')
                },
                {
                  type: 'button',
                  text: 'Архивировать',
                  view: 'secondary',
                  onClick: () => alert('Архивировать')
                },
                {
                  type: 'button',
                  text: 'Дублировать',
                  view: 'secondary',
                  onClick: () => alert('Дублировать')
                },
                {
                  type: 'button',
                  text: 'Accent',
                  view: 'accent',
                  onClick: () => alert('Accent')
                }
              ]
            }
          }
        }}
        columnConfig={columns}
        rows={rows}
      />
    );
  }
};
