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
  parent?: RowType | null
) => boolean;

export type RowCheckboxDisabled<RowType> = (
  row: RowType,
  lvl?: number,
  parent?: RowType | null
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
            actualSelecteds: ReadonlySet<RowIdType>
          ) => {
            shouldBeSelected: RowIdType[];
            shouldNotBeSelected: RowIdType[];
          };
        };
      }) => void)
    | null;
};
