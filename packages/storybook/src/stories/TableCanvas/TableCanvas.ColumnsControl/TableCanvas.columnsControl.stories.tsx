/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@ui-kit/components/Box';
import {
  Canvas,
  ColumnConfig,
  TableCanvas
} from '@ui-kit/components/TableCanvas';
import { IconDone, IconPinListOutline } from '@ui-kit/icons';
import { textInfo } from '@ui-kit/tokens';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/ColumnsControl',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate
    }
  }
};

export default meta;
const preCode = `
import { ColumnConfig, TableCanvas } from '@dais-ui/ui-kit/components/TableCanvas';

`;

type Story = StoryObj;

export const ColumnsControl: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
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
          }
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
        },
        {
          key: 'tr1',
          name: 'TR'
        },
        {
          key: 'complete',
          name: '% Complete'
        }
      ],
      []
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
              task: 'Задачи'
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
            }
          }
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
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
    previewSource: 'shown'
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
        { key: 'complete', name: '% Complete' }
      ],
      []
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
            }
          },
          columnsControl: {
            enable: true,
            pinning: true,
            disablePinning: ['developer'],
            pinnedDefault: ['complete']
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
                  onClick: () => setIsRowsPinned((prev) => !prev)
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
                        visibility: isHeaderPinned ? 'visible' : 'hidden'
                      }}
                    >
                      <IconDone
                        size={ctx.rowSize === 'small' ? 'xs' : 's'}
                        color={textInfo}
                      />
                    </Box>
                  ),
                  onClick: () => setIsHeaderPinned((prev) => !prev)
                }
              ]
            }
          }
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};
