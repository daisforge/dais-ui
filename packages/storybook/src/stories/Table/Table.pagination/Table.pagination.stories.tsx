/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react-hooks/rules-of-hooks */
import { getPaginationDataAsync, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { ColumnConfig, Table } from '@ui-kit/components/Table';
import React, { useEffect, useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/Pagination',
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
import { ColumnConfig, Table } from '@daisforge/ui';

`;

export const PaginationTable: Story = {
  name: 'Таблица с пагинацией',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const total = 300;

    const [perPage, setPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [rows, setRows] = useState<Row[]>([]);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
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
          key: 'complete',
          name: '% Complete'
        }
      ],
      []
    );

    // Загрузка данных при монтировании и при изменении страницы/perPage
    useEffect(() => {
      const loadData = async () => {
        const data = await getPaginationDataAsync({
          page: currentPage,
          perPage,
          total
        });
        setRows(data);
      };

      loadData();
    }, [currentPage, perPage]);

    return (
      <Table
        tableConfig={{
          containerStyle: { height: 700 },
          collapsing: {
            enableCollapse: true
          },
          pagination: {
            count: total,
            perPage,
            value: currentPage, // Важно указать, при активации responsiveSlots
            responsiveSlots: true,
            onChangePageValue(page, scrollToTop) {
              if (typeof page === 'number') {
                setCurrentPage(page);
                scrollToTop();
              }
            },
            async onChange(page, perPage, scrollToTop) {
              if (typeof page === 'number' && typeof perPage === 'number') {
                setCurrentPage(page);
                setPerPage(perPage);
                scrollToTop();
              }
            }
          }
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};

export const PaginationTableFixedSlots: Story = {
  name: 'Таблица с фиксированным количеством slots',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const total = 300;

    const [perPage, setPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [rows, setRows] = useState<Row[]>([]);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
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
          key: 'complete',
          name: '% Complete'
        }
      ],
      []
    );

    useEffect(() => {
      const loadData = async () => {
        const data = await getPaginationDataAsync({
          page: currentPage,
          perPage,
          total
        });
        setRows(data);
      };

      loadData();
    }, [currentPage, perPage]);

    return (
      <Table
        tableConfig={{
          containerStyle: { height: 700 },
          pagination: {
            count: total,
            slots: 9,
            perPage,
            onChangePageValue(page, scrollToTop) {
              if (typeof page === 'number') {
                setCurrentPage(page);
                scrollToTop();
              }
            },
            async onChange(page, perPage, scrollToTop) {
              if (typeof page === 'number' && typeof perPage === 'number') {
                setCurrentPage(page);
                setPerPage(perPage);
                scrollToTop();
              }
            }
          }
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};
