/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  ColumnConfig,
  SortColumn,
  TableCanvas
} from '@ui-kit/components/TableCanvas';
import {
  IconAddOutline,
  IconBrightness0Fill,
  IconChevronCircleDownFill,
  IconStar
} from '@ui-kit/icons';
import React, { useCallback, useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/SimpleTable',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate
    }
  }
};

export default meta;
const preCode = `
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`;

export const SimpleTable: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Simple Table',
  render: () => {
    const [rows] = useState(createRows);
    const [isFavorite, setIsFavorite] = useState(true);

    const filteringStateAndSetter = useState({
      id: '',
      task: '',
      priority: 'All',
      issueType: [],
      complete: '',
      date: '',
      globalFilter: ''
    });
    const themeOverride = useCallback<
      NonNullable<ColumnConfig<Row>['themeOverride']>
    >((cellInfo) => {
      if (cellInfo.hovered.rowHover) {
        return { bgCell: cellInfo.theme.bgHeader };
      }
      return {};
    }, []);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'id',
          themeOverride,
          renderHeaderCell: ({ theme }) => (
            <Canvas.Container
              direction="row"
              alignItems="center"
              gap={8}
              padding={{
                left: theme.cellHorizontalPadding,
                right: theme.cellHorizontalPadding
              }}
            >
              <Canvas.Container position="relative">
                <Canvas.Icon icon={<IconChevronCircleDownFill />} />
                <Canvas.Icon
                  position="absolute"
                  top={-5}
                  right={-5}
                  icon={<IconBrightness0Fill color="#d70101" size="xs" />}
                />
              </Canvas.Container>
              <Canvas.Container position="relative">
                <Canvas.Icon icon={<IconAddOutline />} />
                <Canvas.Icon
                  position="absolute"
                  top={-5}
                  right={-5}
                  icon={<IconBrightness0Fill color="#d70101" size="xs" />}
                />
              </Canvas.Container>
            </Canvas.Container>
          ),
          renderCell: ({ theme }) => (
            <Canvas.Container
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              gap={8}
              padding={{
                left: theme.cellHorizontalPadding,
                right: theme.cellHorizontalPadding
              }}
            >
              <Canvas.Container position="relative">
                <Canvas.Icon icon={<IconChevronCircleDownFill />} />
                <Canvas.Icon
                  position="absolute"
                  top={-5}
                  right={-5}
                  icon={<IconBrightness0Fill color="#d70101" size="xs" />}
                />
              </Canvas.Container>
              <Canvas.Container position="relative">
                <Canvas.Icon icon={<IconAddOutline />} />
                <Canvas.Icon
                  position="absolute"
                  top={-5}
                  right={-5}
                  icon={<IconBrightness0Fill color="#d70101" size="xs" />}
                />
              </Canvas.Container>
            </Canvas.Container>
          )
        },
        {
          key: 'task',
          name: 'Title',
          themeOverride,
          minWidth: 200,
          width: 250,
          renderCell: ({ row, theme }) => (
            <Canvas.Container
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              gap={8}
              wrap="wrap"
              padding={{
                left: theme.cellHorizontalPadding,
                right: theme.cellHorizontalPadding
              }}
              style={{ width: '100%' }}
            >
              <Canvas.Container direction="column" gap={2}>
                <Canvas.Text
                  font={theme.baseFontStyle}
                  color={theme.accentFg}
                  style={{ flexGrow: 1 }}
                >
                  {row.task ?? '—'}
                </Canvas.Text>
                <Canvas.Text
                  font={theme.baseFontStyle}
                  color={theme.textHeader}
                  style={{ flexGrow: 1 }}
                >
                  {row.priority ?? '—'}
                </Canvas.Text>
              </Canvas.Container>
              <Canvas.Button
                portalHoverEnabled
                variant="secondary"
                onClick={() =>
                  // eslint-disable-next-line no-console
                  console.log('Подробнее по сотруднику', row.complete)
                }
              >
                Подробнее
              </Canvas.Button>
            </Canvas.Container>
          )
        },
        {
          key: 'priority',
          name: 'Priority',
          sortingType: 'stringSort',
          themeOverride,
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
          themeOverride,
          filtering: {
            component: 'input',
            filter: 'includes',

            valueInRow: (r) => `${r.task} ${r.id}`,

            keyInFilterState: 'task'
          }
        },
        {
          key: 'complete',
          name: '% Complete',
          themeOverride
        }
      ],
      [themeOverride]
    );

    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '60vh' },
          rowSize: {
            default: 'big',
            showInControl: true
          },
          highlightActiveType: 'row',

          fullScreenEnabled: true,
          controlBlock: {
            customFeatures: [
              // Обязательная кастомная фича
              {
                value: 'favorite',
                label: 'Удалить из избранного',
                Icon: IconStar,
                onClick: () => {},
                mandatory: true,
                details: {
                  type: 'switch',
                  label: 'В избранном',
                  checked: isFavorite,
                  onChange: (e) => setIsFavorite(e.target.checked)
                }
              }
            ]
          },
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
            }
          },
          sorting: {
            state: sortingStateAndSetter
          }
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};
