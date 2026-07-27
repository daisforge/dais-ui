/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@ui-kit/components/Badge';
import {
  Canvas,
  ColumnConfig,
  TableCanvas,
  tableCanvasTheme
} from '@ui-kit/components/TableCanvas';
import { IconSearch } from '@ui-kit/icons';
import React, { ComponentProps, useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/Custom renders',
  parameters: {
    docs: {
      page: DocStoryTemplate
    }
  },
  tags: ['!autodocs']
};

export default meta;

type Story = StoryObj<
  Pick<ComponentProps<typeof TableCanvas>, 'columnConfig' | 'rows'> & {
    noRowsFallback: boolean;
  }
>;

const customRenderCellPreCode = `
import { createRows, type Row } from '@df-storybook/data/tableData';
import {
  Canvas,
  ColumnConfig,
  TableCanvas,
  tableCanvasTheme,
} from '@dais-ui/ui-kit/components/TableCanvas';
import { Badge } from '@dais-ui/ui-kit';
import React, { ComponentProps, useMemo, useState } from 'react';
`;

export const CustomRenderCell: Story = {
  name: 'Кастомизация рендера ячеек шапки, данных, итоговых данных',
  ...storySourceDoc({
    preCode: customRenderCellPreCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState<Row[]>(createRows(0, 20));
    const columnConfig = useMemo(
      (): ColumnConfig<Row>[] => [
        {
          key: 'id',
          name: 'ID',
          renderHeaderCell({ theme, column }) {
            return (
              <Canvas.Container
                padding={{
                  left: theme.cellHorizontalPadding,
                  right: theme.cellHorizontalPadding
                }}
                alignItems="center"
              >
                <Canvas.Text
                  color={theme.textHeader}
                  font={theme.headerFontStyle}
                >
                  {column.name} - кастомный renderHeaderCell
                </Canvas.Text>
              </Canvas.Container>
            );
          },
          renderCell: ({ column, row, theme }) => (
            <Canvas.Container
              padding={{
                left: theme.cellHorizontalPadding,
                right: theme.cellHorizontalPadding
              }}
              alignItems="center"
            >
              <Canvas.Badge
                view="accent"
                text={row[column.key as keyof Row]?.toString() ?? ''}
              />
            </Canvas.Container>
          ),
          renderSummaryCell: ({ row: summ, theme }) => (
            <Canvas.Container
              padding={{
                left: theme.cellHorizontalPadding,
                right: theme.cellHorizontalPadding
              }}
              alignItems="center"
            >
              <Canvas.Text font={theme.baseFontStyle}>
                Итого {summ?.toString() ?? ''} - кастомный renderSummaryCell
              </Canvas.Text>
            </Canvas.Container>
          )
        },
        {
          key: 'task',
          name: (
            <Canvas.Container
              padding={{ left: tableCanvasTheme.cellHorizontalPadding }}
              alignItems="center"
            >
              <Canvas.Text
                font={tableCanvasTheme.headerFontStyle}
                color={tableCanvasTheme.textHeader}
              >
                Task - кастомный canvas-name
              </Canvas.Text>
            </Canvas.Container>
          ),
          width: 200,
          renderCell: ({ row, rowInd, theme }) => (
            <Canvas.Container
              padding={{
                left: theme.cellHorizontalPadding,
                right: theme.cellHorizontalPadding
              }}
              alignItems="center"
            >
              <Canvas.Button
                view="secondary"
                onClick={() =>
                  // Для примера
                  // eslint-disable-next-line no-alert
                  alert(`Строка ${rowInd}. Клик по кнопке кастомной ячейки`)
                }
              >
                {`${row?.task} кликните`}
              </Canvas.Button>
            </Canvas.Container>
          )
        },
        {
          key: 'priority',
          name: 'Priority',
          renderCell: ({ row, theme }) => {
            const viewMap: Record<
              Row['priority'],
              ComponentProps<typeof Badge>['view']
            > = {
              High: 'accent',
              Medium: 'warning',
              Low: 'dark',
              Critical: 'negative'
            };
            return (
              <Canvas.Container
                padding={{
                  left: theme.cellHorizontalPadding,
                  right: theme.cellHorizontalPadding
                }}
                alignItems="center"
              >
                <Canvas.Badge
                  text={row.priority}
                  view={viewMap[row.priority] || 'default'}
                  pilled
                />
              </Canvas.Container>
            );
          }
        },
        {
          key: 'issueType',
          name: 'Issue Type'
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
          summaryRows: {
            showDefault: true,
            showInControl: false
          }
        }}
        columnConfig={columnConfig}
        rows={rows}
        bottomSummaryRows={[rows.length]}
      />
    );
  }
};

function renderCellWithHoverIcon(
  getValue: (row: Row) => React.ReactNode
): NonNullable<ColumnConfig<Row>['renderCell']> {
  return ({ row, theme, hovered }) => (
    <Canvas.Container
      direction="row"
      alignItems="center"
      columnGap={8}
      padding={{
        left: theme.cellHorizontalPadding,
        right: theme.cellHorizontalPadding
      }}
      style={{ width: '100%' }}
    >
      <Canvas.Text font={theme.baseFontStyle} style={{ flexGrow: 1 }}>
        {getValue(row)}
      </Canvas.Text>
      <Canvas.Container
        alignItems="center"
        justifyContent="center"
        style={{ width: 20, height: 20 }}
      >
        {hovered.cellHover && (
          <Canvas.Icon
            icon={<IconSearch />}
            size={16}
            color={theme.tokens.textAccent}
          />
        )}
      </Canvas.Container>
    </Canvas.Container>
  );
}

function HoveredCellIconExample() {
  const [rows] = useState<Row[]>(createRows(0, 20));
  const columnConfig = useMemo(
    (): ColumnConfig<Row>[] => [
      {
        key: 'id',
        name: 'ID',
        width: 80,
        renderCell: renderCellWithHoverIcon((row) => row.id)
      },
      {
        key: 'task',
        name: 'Task',
        width: 320,
        renderCell: renderCellWithHoverIcon((row) => row.task)
      },
      {
        key: 'priority',
        name: 'Priority',
        width: 140,
        renderCell: renderCellWithHoverIcon((row) => row.priority)
      },
      {
        key: 'issueType',
        name: 'Issue Type',
        width: 160,
        renderCell: renderCellWithHoverIcon((row) => row.issueType)
      },
      {
        key: 'complete',
        name: '% Complete',
        renderCell: renderCellWithHoverIcon((row) => `${row.complete}%`)
      }
    ],
    []
  );

  return (
    <TableCanvas
      tableConfig={{ containerStyle: { height: 500 } }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
}

const hoverIconCode = `
import { createRows, type Row } from '@df-storybook/data/tableData';
import {
  Canvas,
  ColumnConfig,
  TableCanvas,
} from '@dais-ui/ui-kit/components/TableCanvas';
import { IconSearch } from '@dais-ui/ui-kit/icons';
import React, { useMemo, useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx',
  'renderCellWithHoverIcon'
)}

${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx',
  'HoveredCellIconExample'
)}
`;

export const HoveredCellIcon: Story = {
  name: 'Иконка при наведении на ячейку',
  ...storySourceDoc({
    code: hoverIconCode,
    previewSource: 'shown'
  }),
  render: HoveredCellIconExample
};

function renderCellWithActiveIcon(
  getValue: (row: Row) => React.ReactNode
): NonNullable<ColumnConfig<Row>['renderCell']> {
  return ({ row, theme, active }) => (
    <Canvas.Container
      direction="row"
      alignItems="center"
      columnGap={8}
      padding={{
        left: theme.cellHorizontalPadding,
        right: theme.cellHorizontalPadding
      }}
      style={{ width: '100%' }}
    >
      <Canvas.Text font={theme.baseFontStyle} style={{ flexGrow: 1 }}>
        {getValue(row)}
      </Canvas.Text>
      <Canvas.Container
        alignItems="center"
        justifyContent="center"
        style={{ width: 20, height: 20 }}
      >
        {active.cellActive && (
          <Canvas.Icon
            icon={<IconSearch />}
            size={16}
            color={theme.tokens.textAccent}
          />
        )}
      </Canvas.Container>
    </Canvas.Container>
  );
}

function ActiveCellIconExample() {
  const [rows] = useState<Row[]>(createRows(0, 20));
  const columnConfig = useMemo(
    (): ColumnConfig<Row>[] => [
      {
        key: 'id',
        name: 'ID',
        width: 80,
        renderCell: renderCellWithActiveIcon((row) => row.id)
      },
      {
        key: 'task',
        name: 'Task',
        width: 320,
        renderCell: renderCellWithActiveIcon((row) => row.task)
      },
      {
        key: 'priority',
        name: 'Priority',
        width: 140,
        renderCell: renderCellWithActiveIcon((row) => row.priority)
      },
      {
        key: 'issueType',
        name: 'Issue Type',
        width: 160,
        renderCell: renderCellWithActiveIcon((row) => row.issueType)
      },
      {
        key: 'complete',
        name: '% Complete',
        renderCell: renderCellWithActiveIcon((row) => `${row.complete}%`)
      }
    ],
    []
  );

  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: 500 },
        highlightActiveType: 'cell'
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
}

const activeIconCode = `
import { createRows, type Row } from '@df-storybook/data/tableData';
import {
  Canvas,
  ColumnConfig,
  TableCanvas,
} from '@dais-ui/ui-kit/components/TableCanvas';
import { IconSearch } from '@dais-ui/ui-kit/icons';
import React, { useMemo, useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx',
  'renderCellWithActiveIcon'
)}

${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/TableCanvas.CustomRender/TableCanvas.customRenderCell.stories.tsx',
  'ActiveCellIconExample'
)}
`;

export const ActiveCellIcon: Story = {
  name: 'Иконка активной ячейки',
  ...storySourceDoc({
    code: activeIconCode,
    previewSource: 'shown'
  }),
  render: ActiveCellIconExample
};
