import { ChangeEvent } from 'react';

import { GroupRow } from '../feature-rows-grouping/types';
import { ObjectForExtending } from '../types/utils.type';
import { SELECTING_KEYS } from './constants';

export type ChildrenInfo<RowType, RowIdType> = {
  /**
   * все дочерние строки
   */
  all: RowType[];
  /**
   * все дочерние строки, которые disabled
   */
  disabled: RowIdType[];
  /**
   * все дочерние строки, которые НЕ disabled
   */
  notDisabled: RowIdType[];
  /**
   * все дочерние строки, которые НЕ disabled и НЕ скрыты через rowShowCheckbox
   */
  notDisabledAndNotHidden: RowIdType[];
  /**
   * все дочерние строки, которые НЕ disabled и НЕ скрыты через rowShowCheckbox все выбраны
   */
  notDisabledAndNotHiddenAreSelected: boolean;
  /**
   * все дочерние строки, которые скрыты через rowShowCheckbox
   */
  hidden: RowIdType[];
  /**
   * все дочерние строки, которые НЕ скрыты через rowShowCheckbox
   */
  notHidden: RowIdType[];
  /**
   * все дочерние строки, которые selected (уже выбраны, у которых чекбокс проставлен)
   */
  selected: RowIdType[];
  /**
   * все дочерние строки, которые НЕ selected (не выбраны, у которых чекбокс НЕ проставлен)
   */
  notSelected: RowIdType[];
  /**
   * есть ли хоть одна дочерная строка, которая выбрана (у которой чекбокс проставлен)
   */
  someChildrenIsSelected: boolean;
};
export type RowKeyGetter<RowType, RowIdType> = (row: RowType) => RowIdType;

export type RowShowCheckbox<RowType> = (
  row: RowType,
  lvl?: number,
  parent?: RowType | null,
) => boolean;

export type RowCheckboxDisabled<RowType> = (
  row: RowType,
  lvl?: number,
  parent?: RowType | null,
) => boolean;

export type RowGetStatesProps<RowType, RowIdType> = {
  /**
   * просчитанное по умолчанию значение наличия чекбокса у строки
   */
  isHaveCheckboxCalculated: boolean;
  /**
   * просчитанное по умолчанию значение checked у строки
   */
  isRowSelectedCalculated: boolean;
  /**
   * просчитанное по умолчанию значение indeterminate у строки
   */
  isIndeterminateCalculated: boolean;
  /**
   * просчитанное по умолчанию значение disabled у строки
   */
  isRowSelectionDisabled: boolean;

  rowKeyGetter: RowKeyGetter<RowType, RowIdType>;
  row: RowType;
  /**
   * Все строки таблицы в плоском виде с информацией об уровне и родительской строке
   */
  flattenedRowsMap: Map<
    RowIdType,
    RowType & {
      level?: number;
      parent?: RowType | null | undefined;
    }
  >;
  /**
   * стейт всех выбранных строк (Set)
   */
  selectedRows: ReadonlySet<RowIdType>;
  /**
   * сеттер стейта всех выбранных строк
   */
  setSelectedRows: React.Dispatch<React.SetStateAction<ReadonlySet<RowIdType>>>;
  /**
   * уровень вложенности текущей строки
   */
  level: number;
  /**
   * родительская строка для текущей строки
   */
  parent: RowType | null;
  /**
   * хендлер для получения детальных данных о дочерних строках текущей строки
   */
  getRowChildrenInfo: () => ChildrenInfo<RowType, RowIdType>;
  rowShowCheckbox: RowShowCheckbox<RowType> | undefined;
  rowCheckboxDisabled: RowCheckboxDisabled<RowType> | undefined;
};

export type RowGetStatesReturnType<RowType, RowIdType> = {
  /**
   * состояние checked, которое будет окончательным. Если не передано, то будет взято из расчетов по умолчанию
   */
  checked?: boolean | null;
  /**
   * состояние indeterminate, которое будет окончательным. Если не передано, то будет взято из расчетов по умолчанию
   */
  indeterminate?: boolean | null;
  /**
   * состояние showCheckbox, которое будет окончательным. Если не передано, то будет взято из расчетов по умолчанию
   */
  showCheckbox?: boolean | null;
  /**
   * состояние checkboxDisabled, которое будет окончательным. Если не передано, то будет взято из расчетов по умолчанию
   */
  checkboxDisabled?: boolean | null;
  /**
   * onChange у чекбокса, который будет окончательным. Если не передан, то будет взят из расчетов по умолчанию
   */
  onChange?:
    | ((p: {
        allParentsMap: Map<RowIdType, RowType>;
        isRowInLevels: (row: RowType) => boolean;
        defaultSetter: () => void;
        getRowParentsInfo: () => {
          all: RowType[];
          getShouldBeSelectedInfo: (
            actualSelecteds: ReadonlySet<RowIdType>,
          ) => {
            shouldBeSelected: RowIdType[];
            shouldNotBeSelected: RowIdType[];
          };
        };
      }) => void)
    | null;
};

export type SummaryCheckedFunc<
  RowType,
  ReturnType,
  AdditionalPropsObj extends ObjectForExtending | void = void,
  RowIdType extends string | number = string | number,
> = (
  props: {
    rows: RowType[];
    flattenedRows: (RowType & {
      level?: number;
      parent?: RowType | null;
    })[];
    selectedRowsIds: ReadonlySet<RowIdType>;
    rowKeyGetter: (row: RowType) => RowIdType;

    rowCheckboxDisabled: RowCheckboxDisabled<RowType>;
    rowShowCheckbox: RowShowCheckbox<RowType>;
    allRowsInLevels: (RowType & {
      level?: number;
      parent?: RowType | null;
    })[];
    getAllRowsInfo: () => ChildrenInfo<RowType, RowIdType>;
  } & (AdditionalPropsObj extends ObjectForExtending
    ? AdditionalPropsObj
    : // eslint-disable-next-line @typescript-eslint/ban-types
      {}),
) => ReturnType;

export type SelectingRowConfig<RowType, RowIdType extends string | number> = {
  /**
   * showDefault - состояние, отвечающее за то, видно ли по дефолту чекбоксы.
   */
  showDefault?: boolean;
  /**
   * showState - состояние, отвечающее за то, видны ли чекбоксы.
   */
  showState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  /**
   * showInControl - состояние, отвечающее за то, добавлять ли выбор строк как фичу, которую можно скрывать и раскрывать в правой части контролблока.
   */
  showInControl?: boolean;
  /**
   * selectingRules - пропс, отвечающий за кастомизацию логики выбора строк.
   */
  selectingRules?: {
    // TODO доработать логику
    // changeableOfRowWithoutCheckbox?: boolean;
    // changeableDisabledRow?: boolean;
    /**
     * levels - логика активации чекбоксов у строк с определенным уровнем вложенности.
     */
    levels?: number | 'all' | number[] | ((lvl: number) => boolean);
  };
  disableSummaryCheckboxInHeader?: boolean;
  hideSummaryCheckboxInHeader?: boolean;
  /**
   * hideSummaryCheckbox - в островке  массовых действий
   */
  hideSummaryCheckbox?: boolean;
  /**
   * summaryChecked - пропс, отвечающий за логику состояния checked у итогового чекбокса в левой части контролблока.
   */
  summaryChecked?: {
    checked: boolean | SummaryCheckedFunc<RowType, boolean>;
    indeterminate:
      | boolean
      | SummaryCheckedFunc<RowType, boolean, { checkedAll: boolean }>;
    getCountOfChecked: SummaryCheckedFunc<RowType, number>;
    onChange: SummaryCheckedFunc<
      RowType,
      void,
      {
        checkedAll: boolean;
        clearButtonClicked?: boolean;
        setSelectedRowsIds: React.Dispatch<
          React.SetStateAction<ReadonlySet<string | number>>
        >;
      }
    >;
  };

  /**
   * summaryCheckedUncontrolled - пропс отвечающий за колбеки в неконтролируемом режиме
   */
  summaryCheckedUncontrolled?: {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  };

  /**
   * rowShowCheckbox - пропс, отвечающий за то, будет ли у конкретной строки отрендерен чекбокс.
   */
  rowShowCheckbox?: RowShowCheckbox<RowType>;
  /**
   * rowCheckboxDisabled - пропс, отвечающий за то, будет ли у конкретной строки чекбокс задизейблен.
   */
  rowCheckboxDisabled?: RowCheckboxDisabled<RowType>;
  /**
   * Функция для переопределения checked, indeterminate для каждой строки.
   * Что будет возвращено функцией в объекте, то будет переопределено.
   */
  rowGetStates?: (
    p: RowGetStatesProps<RowType, RowIdType>,
  ) => RowGetStatesReturnType<RowType, RowIdType> | null;
  groupedRow?: {
    /**
     * Функция для переопределения checked, indeterminate, showCheckbox, checkboxDisabled для группированных строк.
     * Что будет возвращено функцией в объекте, то будет переопределено.
     */
    getStates: (p: {
      checkedCalculated: boolean;
      indeterminateCalculated: boolean;
      row: GroupRow<RowType>;
      selectedRows: ReadonlySet<string | number>;
      selectedChildCount: number;
      childCount: number;
    }) => {
      checked?: boolean | null;
      indeterminate?: boolean | null;
      showCheckbox?: boolean | null;
      checkboxDisabled?: boolean | null;
    } | null;
    onChange?: (p: {
      row: GroupRow<RowType>;

      setSelectedRows: React.Dispatch<
        React.SetStateAction<ReadonlySet<string | number>>
      >;
      checked: boolean;
      indeterminate: boolean;
      checkboxDisabled: boolean;
      showCheckbox: boolean;
      defaultSetter: () => void;
    }) => void;
  };
};

export type FlattenedRowsArrAndMap<RowType, RowIdType> = {
  flattenedRows: (RowType & {
    [SELECTING_KEYS.level]?: number;
    [SELECTING_KEYS.parent]?: RowType | null;
  })[];

  flattenedRowsMap: Map<
    RowIdType,
    RowType & {
      [SELECTING_KEYS.level]?: number;
      [SELECTING_KEYS.parent]?: RowType | null;
    }
  >;
};
