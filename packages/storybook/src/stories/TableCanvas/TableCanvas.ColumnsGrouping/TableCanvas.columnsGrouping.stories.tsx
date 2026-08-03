/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, dataObj, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  ColumnOrColumnGroupConfig,
  TableCanvas,
  tableCanvasFonts,
  tableCanvasTheme,
} from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/ColumnsGrouping',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
  args: {
    headerTreeLvl: Object.keys(dataObj)[0],
  },
  argTypes: {
    headerTreeLvl: {
      description: 'Уровни вложенности шапки таблицы',
      control: { type: 'radio' },
      options: Object.keys(dataObj),
    },
  },
};

export default meta;
const preCode = `
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`;

export const SimpleTable: StoryObj<{ headerTreeLvl: keyof typeof dataObj }> = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  args: {
    headerTreeLvl: 'lvl3',
  },

  name: 'Columns grouping',

  render: ({ headerTreeLvl }) => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnOrColumnGroupConfig<Row>[]>(
      () => [
        ...(dataObj[headerTreeLvl] ?? []).map((el, i) =>
          i === 0
            ? {
                ...el,
                name: (
                  <Canvas.Container padding={{ left: 8, right: 8 }}>
                    <Canvas.Text
                      color={tableCanvasTheme.accentColor}
                      font={tableCanvasFonts.bodyXSBold}
                    >
                      кастомный name
                    </Canvas.Text>
                  </Canvas.Container>
                ),
              }
            : el,
        ),
      ],
      [headerTreeLvl],
    );

    return (
      <TableCanvas
        key={headerTreeLvl}
        tableConfig={{
          containerStyle: { height: 700 },
          columnsControl: { enable: true },
          resizableColumn: true,
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};
