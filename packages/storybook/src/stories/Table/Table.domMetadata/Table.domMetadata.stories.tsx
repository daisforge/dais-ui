/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ColumnConfig,
  DOM_METADATA_ACTIONS,
  Table
} from '@ui-kit/components/Table';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/DomMetadata',
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

export const DomMetadataOnClick: Story = {
  name: 'onClick для аналитики',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const [groupedCols, setGroupedCols] = useState<string[]>([]);
    const [filters, setFilters] = useState({});

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
          rowsGrouping: { columnGroupLabel: 'ID' }
        },
        {
          key: 'task',
          name: 'Title',
          rowsGrouping: { columnGroupLabel: 'Title' }
        },
        {
          key: 'priority',
          name: 'Priority',
          rowsGrouping: { columnGroupLabel: 'Priority' }
        }
      ],
      []
    );

    // Общий обработчик для аналитики.
    // e — MouseEvent (undefined для элементов внутри Dropdown).
    // detail — контекст: action, columnKey, size и др.
    // detail.action — одна из констант DOM_METADATA_ACTIONS
    const handleDomMetadataClick = (
      source: string,
      e?: React.MouseEvent<HTMLElement>,
      detail?: Record<string, unknown>
    ) => {
      // Пример: проверка конкретного действия через константу
      if (detail?.action === DOM_METADATA_ACTIONS.TOGGLE_GROUP) {
        console.debug(
          `[DomMetadata] Группировка по столбцу: ${detail.columnKey}`
        );
      }
      console.debug(`[DomMetadata] ${source}:`, {
        detail,
        target: e?.currentTarget
      });
    };

    return (
      <Table
        tableConfig={{
          containerStyle: { height: '700px' },

          // 1. Группировка строк
          // detail.action: 'toggle-group' | 'reset-groups' | 'custom-item-select'
          // detail.columnKey: ключ столбца (для toggle-group и custom-item-select)
          rowsGrouping: {
            groupByState: [groupedCols, setGroupedCols],
            rowKeyGetter: (row) => row.id.toString(),
            domMetadata: {
              className: 'analytics-grouping',
              dataAttributes: { 'data-feature': 'grouping' },
              onClick: (e, detail) =>
                handleDomMetadataClick('rowsGrouping', e, detail)
            }
          },

          // 2. Кнопка размера строки
          // detail.action: 'change-row-size'
          // detail.size: новый размер ('small' | 'medium' | 'big')
          rowSize: {
            showInControl: true,
            default: 'small',
            available: ['small', 'medium', 'big'],
            domMetadata: {
              className: 'analytics-row-size',
              dataAttributes: { 'data-feature': 'row-size' },
              onClick: (e, detail) =>
                handleDomMetadataClick('rowSize', e, detail)
            }
          },

          // 3. Настройки столбцов: закрепление и видимость
          // pinDomMetadata — detail.action: 'pin-column' | 'unpin-column', detail.columnKey
          // switchDomMetadata — detail.action: 'show-column' | 'hide-column', detail.columnKey
          columnsControl: {
            enable: true,
            pinDomMetadata: {
              className: 'analytics-pin',
              dataAttributes: { 'data-feature': 'pin-column' },
              onClick: (e, detail) =>
                handleDomMetadataClick('pinColumn', e, detail)
            },
            switchDomMetadata: {
              className: 'analytics-switch',
              dataAttributes: { 'data-feature': 'column-visibility' },
              onClick: (e, detail) =>
                handleDomMetadataClick('columnVisibility', e, detail)
            }
          },

          // 4. Таб настроек сайдбара (шестерёнка + крестик закрыть)
          // detail.action: 'toggle-sidebar-tab' (шестерёнка) | 'close-sidebar' (крестик)
          // detail.tabId: id таба (для toggle-sidebar-tab)
          sidebarConfig: {
            defaultTabs: [
              {
                id: 'tableSettings',
                domMetadata: {
                  className: 'analytics-settings',
                  dataAttributes: { 'data-feature': 'settings' },
                  onClick: (e, detail) =>
                    handleDomMetadataClick('settings', e, detail)
                }
              }
            ]
          },

          filtering: {
            state: [filters, setFilters]
          }
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};
