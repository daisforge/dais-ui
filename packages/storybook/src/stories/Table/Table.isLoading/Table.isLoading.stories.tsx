/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@ui-kit/components/Switch';
import { ColumnConfig, Table } from '@ui-kit/components/Table';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/IsLoading',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate
    },
    screenshot: {
      skip: true
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
} from '@daisforge/ui';
import { IconAddOutline, IconBoxOutline, IconSber } from '@daisforge/ui/icons';
`;

export const IsLoading: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'IsLoading',
  render: () => {
    const [rows] = useState(createRows);
    const [isVisibleLoadingOverlay, setIsVisibleLoadingOverlay] =
      useState(false);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
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
      <>
        <Switch
          style={{ width: 'fit-content' }}
          label={
            isVisibleLoadingOverlay ? 'Скрыть overlay' : 'Показать overlay'
          }
          checked={isVisibleLoadingOverlay}
          onChange={() => setIsVisibleLoadingOverlay((prev) => !prev)}
        />
        <Table
          tableConfig={{
            containerStyle: { height: 500 },
            isLoading: { boolean: true, skeletonRowsCount: 5 },
            loadingOverlay: {
              active: isVisibleLoadingOverlay,
              showSubtitleDelay: 3000,
              subtitle:
                'Данные обрабатываются, обычно это занимает не более 10 секунд'
            }
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </>
    );
  }
};
