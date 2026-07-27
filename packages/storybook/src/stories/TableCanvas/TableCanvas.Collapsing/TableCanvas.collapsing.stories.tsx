/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/Collapsing',
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
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`;

export const InternalStateCollapsing: Story = {
  name: 'Collapse тела таблицы (внутреннее состояние)',
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
          name: 'ID',
          minWidth: 200,
          width: 300,
          maxWidth: 500
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
          containerStyle: { height: '400px' },
          collapsing: {
            enableCollapse: true,
            defaultCollapsed: true,
            expandText: 'Развернуть информацию',
            collapseText: 'Свернуть информацию'
          }
        }}
        columnConfig={columns}
        rows={rows}
      />
    );
  }
};

export const ExternalStateCollapsing: Story = {
  name: 'Collapse тела таблицы (внешнее состояние)',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const [externalCollapsed, setExternalCollapsed] = useState(true);
    const columns = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
          minWidth: 200,
          width: 300,
          maxWidth: 500
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Button onClick={() => setExternalCollapsed(!externalCollapsed)}>
          {externalCollapsed ? 'Развернуть таблицу' : 'Свернуть таблицу'}
        </Button>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '300px' },
            collapsing: {
              enableCollapse: true,
              collapsedState: [externalCollapsed, setExternalCollapsed],
              domMetadata: {
                className: 'testClassNameForCollapsing',
                dataAttributes: {
                  'data-test-collapsing': 'test-collapsing'
                }
              },
              onToggleCollapse: (collapsed) =>
                // eslint-disable-next-line no-console
                console.debug('Table collapsed:', collapsed)
            }
          }}
          columnConfig={columns}
          rows={rows}
        />
      </div>
    );
  }
};
