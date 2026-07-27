import { ContentFormat, ObjectForExtending } from '../Table/types';
import { type ColumnAnsiSqlType, DataType } from './constants';
import { getRowKeyGetter } from './lib/getRowKeyGetter';
import type {
  ContractColumnConfig,
  ContractResponse,
  ContractTableConfig,
  InstanceColumnConfig,
  ObjectAny
} from './types';
import { SelectBooleanEditor } from './ui/selectBooleanEditor';

export const ANSI_SQL_TO_UI_EDITING: Record<
  DataType['ansiSqlType'],
  NonNullable<InstanceColumnConfig['editingCell']>
> = {
  Boolean: {
    component: (renderEditCellProps) => (
      <SelectBooleanEditor {...renderEditCellProps} />
    )
  },
  Text: { component: 'inputString' },
  // Numbers
  'Integer/Int/Int4': { component: 'inputNumber' },
  'Numeric/decimal': { component: 'inputNumber' },
  Real: { component: 'inputNumber' },
  // Dates
  Date: { component: 'inputString' },
  Time: { component: 'inputString' },
  'Timestamp with timezone': { component: 'inputString' },
  'Timestamp without timezone': { component: 'inputString' }
};

const getEditingCellFront = (
  backValue: ContractColumnConfig['editingCell'],
  columnType: ColumnAnsiSqlType | undefined
): InstanceColumnConfig['editingCell'] => {
  if (!backValue) {
    if (!columnType) return undefined;

    const uiConfig = ANSI_SQL_TO_UI_EDITING[columnType];

    const frontValue: InstanceColumnConfig['editingCell'] = {
      ...uiConfig,
      error: { value: () => false },
      editable: true
    };
    return frontValue;
  }
  const { error: errorBack, editable: editableBack, ...rest } = backValue;

  const error: NonNullable<InstanceColumnConfig['editingCell']>['error'] =
    errorBack
      ? {
          value: (row: ObjectAny) => {
            const keyGetter = getRowKeyGetter(errorBack.value.keyInRow);
            const rowErrorValue = keyGetter(row);

            return rowErrorValue === errorBack.value.errorValue;
          }
        }
      : undefined;

  const editable: NonNullable<InstanceColumnConfig['editingCell']>['editable'] =
    editableBack
      ? (row: ObjectAny) => {
          if (!editableBack) {
            return false;
          }

          const keyGetter = getRowKeyGetter(editableBack.keyInRow);
          const rowErrorValue = keyGetter(row);
          return rowErrorValue === editableBack.editableValue;
        }
      : undefined;

  const frontValue: InstanceColumnConfig['editingCell'] = {
    ...(error && { error }),
    ...(editable && { editable }),

    ...rest
  };

  return frontValue;
};

export const columnsConfigMapper = (
  columnsConfigBackend: ContractColumnConfig[],
  tableConfigBackend: ContractTableConfig | undefined
): InstanceColumnConfig[] =>
  columnsConfigBackend.map((columnBackend) => {
    const { columnType } = columnBackend;
    type KeyOfInstance = keyof InstanceColumnConfig;

    // по умолчанию включено
    const columnAdditionalEntries: [
      KeyOfInstance,
      InstanceColumnConfig[KeyOfInstance]
    ][] = [];

    if (tableConfigBackend?.filtering) {
      columnAdditionalEntries.push([
        'filtering',
        {
          component: 'input',
          filter: 'includes',
          keyInFilterState: columnBackend.key
        } as InstanceColumnConfig['filtering']
      ]);
    }

    const columnEntries = Object.entries(columnBackend).map((el) => {
      const key = el[0] as keyof ContractColumnConfig;
      switch (key) {
        case 'subRow': {
          let newValue: InstanceColumnConfig['subRow'] | null = null;

          const backValue = el[1] as ContractColumnConfig['subRow'];
          if (!backValue) {
            return [key, backValue];
          }

          const {
            contentFormat,
            keyOfColumnInSubRow,
            editingCell: editingCellBack,
            ...restValue
          } = backValue;

          const editingCell: NonNullable<
            InstanceColumnConfig['subRow']
          >['editingCell'] = editingCellBack
            ? getEditingCellFront(editingCellBack, columnType)
            : undefined;

          newValue = {
            ...restValue,
            ...(contentFormat && {
              contentFormat: contentFormat as ContentFormat
            }),
            ...(editingCell && {
              editingCell: editingCell as unknown as undefined
            }),
            ...(keyOfColumnInSubRow && {
              keyOfColumnInSubRow: (lvl) => {
                if (
                  typeof backValue.keyOfColumnInSubRow === 'string' ||
                  typeof backValue.keyOfColumnInSubRow === 'number'
                )
                  return backValue.keyOfColumnInSubRow;

                const key = backValue.keyOfColumnInSubRow?.[lvl];
                return key ?? backValue.keyOfColumnInSubRow?.['default'] ?? '';
              }
            })
          };
          return [key, newValue];
        }
        case 'searching': {
          const backValue = el[1] as ContractColumnConfig['searching'];
          if (!backValue) {
            return [key, backValue];
          }
          const frontValue: NonNullable<InstanceColumnConfig['searching']> = {
            valueInRow(row) {
              return row?.[backValue.keyInRow];
            }
          };

          return [key, frontValue];
        }
        case 'summaryCell': {
          const keyRenderSummaryCell = 'renderSummaryCell' as const;
          const backValue = el[1] as ContractColumnConfig['summaryCell'];

          if (!backValue || (!backValue.key && !backValue.text)) {
            return [keyRenderSummaryCell, undefined];
          }

          const renderSummaryCell: InstanceColumnConfig['renderSummaryCell'] =
            ({ row }) => {
              if (backValue.text !== undefined) {
                return backValue.text;
              }
              const v = backValue.key
                ? (row as ObjectForExtending)[backValue.key]
                : null;

              return v;
            };

          return [keyRenderSummaryCell, renderSummaryCell];
        }
        case 'columnType': {
          const backValue = el[1] as ContractColumnConfig['columnType'];

          const defV = [key, backValue];
          if (!backValue) return defV;
          const editingBackValue = columnBackend.editingCell;
          const isHaveEditingCell = !!editingBackValue;

          if (isHaveEditingCell) return defV;

          const editingCellKey = 'editingCell';
          const editingCellFront = getEditingCellFront(
            editingBackValue,
            columnType
          );

          columnAdditionalEntries.push([editingCellKey, editingCellFront]);

          return defV;
        }
        case 'editingCell': {
          const backValue = el[1] as ContractColumnConfig['editingCell'];

          const editingCellFront = getEditingCellFront(backValue, columnType);
          return [key, editingCellFront];
        }
        default:
          return el;
      }
    });

    const columnConfig: InstanceColumnConfig = Object.fromEntries([
      ...columnAdditionalEntries,
      ...columnEntries
    ]);

    return columnConfig;
  });

export const responseMapper = (resp: ContractResponse) => {
  const {
    data: {
      main: rows,
      topSummary: topSummaryRows,
      bottomSummary: bottomSummaryRows
    },
    meta: { tableConfig: tableConfigBackend, columns: columnsConfigBackend }
  } = resp;

  const columnsConfig = columnsConfigMapper(
    columnsConfigBackend,
    tableConfigBackend
  );

  return {
    rows,
    columnsConfig,
    tableConfigBackend,
    topSummaryRows,
    bottomSummaryRows
  };
};
