/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import { useMemo, useState } from 'react';

const meta: Meta = {
  title:
    'Локальные компоненты/TableCanvas/SelectingRow/Ручная настройка выбор строк',
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

export const CustomRowSelection: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Независимый выбор строк в иерархии',
  render: () => {
    const [rows] = useState(createRows);

    const columns = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
          subRow: {
            keyOfColumnInSubRow: 'id',
            isColumnWithArrow: true
          },
          resizable: true
        },
        {
          key: 'issueType',
          name: 'issue',
          subRow: {
            keyOfColumnInSubRow: 'issueType'
          }
        },
        {
          key: 'developer',
          name: 'Developer'
        }
      ],
      []
    );

    const selectingRowStateAndSetter = useState(
      (): ReadonlySet<string | number> => new Set()
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '700px' },
          resizableColumn: true,
          subRows: {
            getSubRows: (row) => row?.subRows,
            rowKeyGetter: (row) => row.id
          },
          selecting: {
            state: selectingRowStateAndSetter,
            rowKeyGetter: (r) => r.id,
            selectingRules: {
              levels: [1, 2]
            },
            showDefault: true,
            summaryChecked: {
              checked({ allRowsInLevels, selectedRowsIds }) {
                return (
                  selectedRowsIds.size > 0 &&
                  allRowsInLevels.length === selectedRowsIds.size
                );
              },

              indeterminate({ checkedAll, allRowsInLevels, selectedRowsIds }) {
                return (
                  !checkedAll &&
                  selectedRowsIds.size > 0 &&
                  selectedRowsIds.size < allRowsInLevels.length
                );
              },
              getCountOfChecked({ selectedRowsIds }) {
                return selectedRowsIds.size;
              },
              onChange({
                checkedAll,

                setSelectedRowsIds,
                allRowsInLevels,
                rowKeyGetter
              }) {
                if (!checkedAll) {
                  setSelectedRowsIds(
                    new Set(...[allRowsInLevels.map((r) => rowKeyGetter(r))])
                  );
                } else {
                  setSelectedRowsIds(new Set());
                }
              }
            },
            rowGetStates({
              row,
              selectedRows,

              rowKeyGetter,
              setSelectedRows,
              isRowSelectedCalculated
            }) {
              return {
                checked: selectedRows.has(rowKeyGetter(row)),
                indeterminate: false,
                onChange() {
                  setSelectedRows((prev) => {
                    const newV = new Set(prev);
                    newV[isRowSelectedCalculated ? 'delete' : 'add'](
                      rowKeyGetter(row)
                    );
                    return newV;
                  });
                }
              };
            }
          }
        }}
        columnConfig={columns}
        rows={rows}
      />
    );
  }
};

export const CustomRowSelectionWithDisabledAndHidden: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Ручная настройка выбора строк с учетом disabled, hidden строк',
  render: () => {
    const [rows] = useState(createRows);

    const columns = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
          subRow: {
            keyOfColumnInSubRow: 'id',
            isColumnWithArrow: true
          },
          resizable: true
        },
        {
          key: 'issueType',
          name: 'issue',
          subRow: {
            keyOfColumnInSubRow: 'issueType'
          }
        },
        {
          key: 'developer',
          name: 'Developer'
        }
      ],
      []
    );

    const selectingRowStateAndSetter = useState(
      (): ReadonlySet<string | number> => new Set()
    );
    const rowShowCheckbox = (r: Row) => r.id !== 2;
    const rowCheckboxDisabled = (r: Row) => r.id.toString().endsWith('0001');

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '700px' },
          resizableColumn: true,
          subRows: {
            getSubRows: (row) => row?.subRows,
            rowKeyGetter: (row) => row.id
          },
          selecting: {
            state: selectingRowStateAndSetter,
            rowKeyGetter: (r) => r.id + r.issueType,
            selectingRules: {
              levels: [1, 2, 3]
            },
            showDefault: true,
            summaryChecked: {
              checked({ selectedRowsIds, getAllRowsInfo }) {
                const { notHidden } = getAllRowsInfo();

                return (
                  selectedRowsIds.size > 0 &&
                  notHidden.length === selectedRowsIds.size
                );
              },
              indeterminate({ checkedAll, allRowsInLevels, selectedRowsIds }) {
                return (
                  !checkedAll &&
                  selectedRowsIds.size > 0 &&
                  selectedRowsIds.size < allRowsInLevels.length
                );
              },
              getCountOfChecked({ selectedRowsIds }) {
                return selectedRowsIds.size;
              },
              onChange({
                checkedAll,
                clearButtonClicked,
                setSelectedRowsIds,

                getAllRowsInfo
              }) {
                // eslint-disable-next-line no-console
                console.log('========clearButtonClicked:', clearButtonClicked);

                const {
                  notDisabledAndNotHidden,
                  notDisabledAndNotHiddenAreSelected
                } = getAllRowsInfo();

                if (checkedAll) {
                  setSelectedRowsIds(new Set());
                  return;
                }
                setSelectedRowsIds((prevSelecteds) => {
                  const needToDelete = notDisabledAndNotHiddenAreSelected;

                  const newSelecteds = new Set(prevSelecteds);
                  notDisabledAndNotHidden.forEach((rKey) => {
                    newSelecteds[needToDelete ? 'delete' : 'add'](rKey);
                  });
                  return newSelecteds;
                });
              }
            },

            rowGetStates({
              isRowSelectedCalculated,
              getRowChildrenInfo,
              isHaveCheckboxCalculated,
              rowKeyGetter,
              selectedRows,
              row,
              setSelectedRows
            }) {
              if (!isHaveCheckboxCalculated) return { showCheckbox: false };

              const rowInfo = getRowChildrenInfo();
              const hasChildren = !!rowInfo.all.length;

              const allVisible = rowInfo.notHidden;
              const allSelected = rowInfo.selected;
              const checked = !hasChildren
                ? isRowSelectedCalculated
                : !!allVisible.length &&
                  allVisible.length === allSelected.length;
              return {
                checked,
                indeterminate:
                  hasChildren && !checked && rowInfo.someChildrenIsSelected,
                onChange({ getRowParentsInfo }) {
                  const {
                    all,
                    selected,
                    notDisabledAndNotHidden,
                    notHidden,
                    someChildrenIsSelected
                  } = getRowChildrenInfo();

                  const rowKey = rowKeyGetter(row);
                  const rowIsChecked = selectedRows.has(rowKey);

                  const hasChildren = !!all.length;

                  const checked = !hasChildren
                    ? rowIsChecked
                    : someChildrenIsSelected &&
                      selected.length >= notHidden.length;

                  setSelectedRows((prevSelecteds) => {
                    const newSelecteds = new Set(prevSelecteds);
                    // обработка самой строки если она без дочерних строк
                    if (!hasChildren) {
                      newSelecteds[checked ? 'delete' : 'add'](
                        rowKeyGetter(row)
                      );
                    } else {
                      // обработка дочерних строк
                      // не полагаемся на checked, чтобы обработать логику выбора сразу при checked и indeterminate
                      const needToAdd = notDisabledAndNotHidden.every((rKey) =>
                        prevSelecteds.has(rKey)
                      );

                      notDisabledAndNotHidden.forEach((rKey) => {
                        newSelecteds[needToAdd ? 'delete' : 'add'](rKey);
                      });

                      // обработка самой строки. Проверка всех детей для того, чтобы определить выбирать ли текущую строку
                      const rowChidlrenSelectedAll = notHidden.every((rKey) =>
                        newSelecteds.has(rKey)
                      );

                      newSelecteds[rowChidlrenSelectedAll ? 'add' : 'delete'](
                        rowKey
                      );
                    }

                    // обработка родительских строк
                    const { shouldBeSelected, shouldNotBeSelected } =
                      getRowParentsInfo().getShouldBeSelectedInfo(newSelecteds);

                    shouldBeSelected.forEach((rKey) => newSelecteds.add(rKey));
                    shouldNotBeSelected.forEach((rKey) =>
                      newSelecteds.delete(rKey)
                    );
                    return newSelecteds;
                  });
                }
              };
            },

            rowCheckboxDisabled,
            rowShowCheckbox
          }
        }}
        columnConfig={columns}
        rows={rows}
      />
    );
  }
};
