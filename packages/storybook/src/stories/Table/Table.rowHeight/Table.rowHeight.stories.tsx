/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@ui-kit/components/Box';
import { StoryTableConfigComp } from '@ui-kit/components/StoriesUtils';
import {
  ColumnConfig,
  RowHeightFunc,
  SIZES,
  Table
} from '@ui-kit/components/Table';
import React, { ComponentType, useCallback, useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/RowHeight',
  tags: ['!autodocs'],

  parameters: {
    docs: {
      page: DocStoryTemplate
    }
  },
  component: StoryTableConfigComp as ComponentType<unknown>
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

export const RowHeight: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Row height',
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'id'
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
          key: 'loremIpsum',
          name: 'Длинный текст',
          width: 500,
          renderCell: ({ row }) => (
            <Box as="span" $css={{ textWrap: 'wrap' }}>
              {row.loremIpsum}
            </Box>
          )
        },
        {
          key: 'complete',
          name: '% Complete'
        }
      ],
      []
    );

    const rowHeight: RowHeightFunc<Row> = useCallback((r, currenRowSize) => {
      const symbolWidth = 11.5;

      const paddingInline = 16;
      const widthOfLoremCol = 500 - paddingInline * 2;
      const symbolsInOneLine = Math.round(widthOfLoremCol / symbolWidth);
      const heightOfLineInitial = 22; // в css
      const heightOfLine = heightOfLineInitial - 2; // скорректированный

      const allSymbols = r.loremIpsum.length;

      const countOfLine = Math.ceil(allSymbols / symbolsInOneLine);
      const paddingBlock = Number(
        SIZES[currenRowSize.rowSizeName].cell['padding-block'].slice(0, -2)
      );

      const neededHeight = heightOfLine * countOfLine + paddingBlock * 2;

      return neededHeight > currenRowSize.rowSizeValue
        ? neededHeight
        : currenRowSize.rowSizeValue;
    }, []);

    return (
      <Table
        tableConfig={{
          containerStyle: { height: 700 },
          rowHeight
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};
