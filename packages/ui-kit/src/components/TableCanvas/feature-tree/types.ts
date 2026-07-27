export type SubRows<RowType, RowIdType> = {
  /**
   * Функция получения дочерних строк.
   *
   * ⚠️ **Должна быть чистой и стабильной** — не менять логику между рендерами.
   *
   * Если структура дерева может динамически меняться — оберните в `useCallback`.
   */
  getSubRows: (row: RowType) => RowType[] | undefined;
  /**
   * Функция получения уникального ключа строки.
   *
   * ⚠️ **Должна быть чистой и стабильной** — не менять логику между рендерами.
   *
   * Если логика получения ключа может динамически меняться — оберните в `useCallback`.
   */
  rowKeyGetter: (row: RowType) => RowIdType;
  /**
   * Внешний стейт развёрнутых строк.
   * Если не задан — используется внутренний `useState`.
   */
  expandedIdsState?: [
    Set<string | number>,
    (
      newV:
        | Set<string | number>
        | ((prev: Set<string | number>) => Set<string | number>)
    ) => void
  ];
};
