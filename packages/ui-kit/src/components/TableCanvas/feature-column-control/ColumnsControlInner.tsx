import { Box } from '@ui-kit/components/Box';
import {
  ColumnConfig,
  ObjectForExtending,
} from '@ui-kit/components/TableCanvas';
import { IconClose, IconSearch } from '@ui-kit/icons';
import { StyledClearBtn, StyledSearchBlock } from '@ui-kit/shared/ui/Search';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { KeyText, KeyTextMap } from '../feature-key-text/types';
import { reorderHandler } from '../feature-reorder-columns/reorderHandler';
import { ROW_I_COLUMN_KEY } from '../feature-row-instruments';
import { ROW_MARKER_COLUMN_KEY } from '../feature-row-markers';
import { KEY_GROUPED_COL } from '../feature-rows-grouping';
import { CHECKBOX_COLUMN_KEY } from '../feature-select-row';
import { ChangeAllButtonsBlock } from './ChangeAllButtonsBlock';
import { ColumnsList } from './ColumnsList';
import { correctedDisabled } from './ColumnsList/handlers';
import { ConfirmOrResetBlock } from './ConfirmOrResetBlock';
import { buildConfirmParams } from './confirmParams';
import { ColumnsControlConfig } from './types';

const SERVICE_COLS_SET = new Set([
  ROW_MARKER_COLUMN_KEY,
  ROW_I_COLUMN_KEY,
  CHECKBOX_COLUMN_KEY,
  KEY_GROUPED_COL,
]);
const withoutServiceCols = (cols: string[]) =>
  cols.filter((cKey) => !SERVICE_COLS_SET.has(cKey));

type ColumnsState = { order: string[]; pinned: string[]; hidden: string[] };

export const ColumnsControlInner = <
  Row extends ObjectForExtending,
  SummaryRow,
>({
  onClose,
  columnsOrder,
  getDefaultColumnsOrder,
  setColumnsOrder,
  pinnedCols,
  setPinnedCols,
  hiddenCols,
  setHiddenCols,
  columnConfig,
  columnsControlConfig,
  colsWithKeyTextMap,
  keyText,
  tableConfigKeyTextBoolean,
}: {
  opened: boolean;
  onClose: () => void;
  columnsOrder: string[];
  getDefaultColumnsOrder: () => string[];
  setColumnsOrder: React.Dispatch<React.SetStateAction<string[]>>;
  pinnedCols: string[];
  setPinnedCols: React.Dispatch<React.SetStateAction<string[]>>;
  hiddenCols: string[];
  setHiddenCols: React.Dispatch<React.SetStateAction<string[]>>;
  columnConfig: readonly ColumnConfig<Row, SummaryRow>[];
  columnsControlConfig: ColumnsControlConfig;
  colsWithKeyTextMap: KeyTextMap;
  keyText: KeyText;
  tableConfigKeyTextBoolean: boolean;
}) => {
  const [localOrder, setLocalOrder] = useState(columnsOrder);
  const [localPinned, setLocalPinned] = useState(pinnedCols);
  const [localHiddens, setLocalHiddens] = useState(hiddenCols);
  const [searchQuery, setSearchQuery] = useState('');

  const setters = { setColumnsOrder, setHiddenCols, setPinnedCols };

  // Режим без кнопок «Отменить / Применить»: каждая правка в списке сразу
  // пишется в стейт таблицы и сразу уходит в onConfirm. Локальные стейты
  // при этом лишь повторяют стейт таблицы через эффекты ниже.
  const applyImmediately = !!columnsControlConfig.applyImmediately;

  const commitImmediately = (patch: Partial<ColumnsState>) => {
    const prev = {
      order: columnsOrder,
      pinned: pinnedCols,
      hidden: hiddenCols,
    };
    const next = { ...prev, ...patch };
    if (patch.order) setColumnsOrder(patch.order);
    if (patch.pinned) setPinnedCols(patch.pinned);
    if (patch.hidden) setHiddenCols(patch.hidden);

    const params = buildConfirmParams(prev, next, withoutServiceCols);
    // правка, которая ничего не поменяла (например, колонку бросили на её же
    // место), в onConfirm не уходит
    if (Object.keys(params.changed).length) {
      columnsControlConfig.onConfirm?.(params, setters);
    }
  };

  const immediateSetter =
    (key: keyof ColumnsState): React.Dispatch<React.SetStateAction<string[]>> =>
    (action) => {
      const prevValue = {
        order: columnsOrder,
        pinned: pinnedCols,
        hidden: hiddenCols,
      }[key];
      const nextValue =
        typeof action === 'function' ? action(prevValue) : action;
      commitImmediately({ [key]: nextValue });
    };

  const setOrder = applyImmediately ? immediateSetter('order') : setLocalOrder;
  const setPinned = applyImmediately
    ? immediateSetter('pinned')
    : setLocalPinned;
  const setHiddens = applyImmediately
    ? immediateSetter('hidden')
    : setLocalHiddens;

  // отображаем блок поиска в настройках столбцов в случае, если колонок больше 10
  const isVisibleSearchColumnBlock = Object.keys(columnConfig).length >= 10;

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value.toLowerCase());
    },
    [],
  );

  const handleClear = useCallback(() => {
    setSearchQuery('');
  }, []);

  const orderIsNotChanged = useMemo(
    () => {
      const notCheckingKeysSet = SERVICE_COLS_SET;
      const global = getDefaultColumnsOrder()
        .filter((k) => !notCheckingKeysSet.has(k))
        .join();
      const local = localOrder.filter((k) => !notCheckingKeysSet.has(k)).join();

      return global === local;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [localOrder],
  );

  const onColumnsReorderLocal = useCallback(
    (sourceKey: string, targetKey: string) =>
      reorderHandler({
        sourceKey,
        targetKey,
        reorderIsActive: true,
        setColumnsOrder: setOrder,
        keyText,
        tableConfigKeyTextBoolean,
        colsWithKeyTextMap,
        pinnedCols: localPinned,
      }),
    [
      colsWithKeyTextMap,
      keyText,
      tableConfigKeyTextBoolean,
      localPinned,
      setOrder,
    ],
  );

  const confirmOrResetHandlers = {
    confirmAllLocalChanging() {
      setColumnsOrder(localOrder);
      setPinnedCols(localPinned);
      setHiddenCols(localHiddens);

      columnsControlConfig.onConfirm?.(
        buildConfirmParams(
          { order: columnsOrder, pinned: pinnedCols, hidden: hiddenCols },
          { order: localOrder, pinned: localPinned, hidden: localHiddens },
          withoutServiceCols,
        ),
        setters,
      );
      onClose();
    },
    resetAllLocalChanging() {
      setLocalOrder(columnsOrder);
      setLocalPinned(pinnedCols);
      setLocalHiddens(hiddenCols);
      onClose();
    },
  };

  // ------------------------------ hiding ------------------------------
  const hiddenColsSet = useMemo(() => new Set(localHiddens), [localHiddens]);

  const disableHidingSet = new Set(columnsControlConfig.disableHiding ?? []);

  const notDisabledHidingCols = localOrder.filter((k) => {
    // Служебные колонки (чекбокс выбора строк, row-instruments, row-markers) не
    // показываются в списке колонок, поэтому не должны попадать в «скрыть все».
    // Иначе, например, чекбокс-колонка выбора застревает в hiddenCols — и выбор
    // строк перестаёт работать.
    if (SERVICE_COLS_SET.has(k)) {
      return false;
    }
    const correctedDisabledHidingKeyText = correctedDisabled(disableHidingSet, {
      colsWithKeyTextMap,
      currentKey: k,
      tableConfigKeyTextBoolean,
    });
    return !(correctedDisabledHidingKeyText ?? disableHidingSet.has(k));
  });

  const allNotDisabledHidingColsIsVisible = notDisabledHidingCols.every(
    (k) => !hiddenColsSet.has(k),
  );

  const columnsVisibilityProps = {
    allColumnsIsVisible: allNotDisabledHidingColsIsVisible,
    allColumnsVisibilityChanger: () => {
      setHiddens((prev) => {
        if (allNotDisabledHidingColsIsVisible) {
          const res = [...prev, ...notDisabledHidingCols];
          const resWithoutCopy = Array.from(new Set(res));

          return resWithoutCopy;
        }
        const notDisabledColsSet = new Set(notDisabledHidingCols);

        return prev.filter((k) => !notDisabledColsSet.has(k));
      });
    },
  };
  // ------------------------------ pinning ------------------------------
  const pinnedColsSet = useMemo(() => new Set(localPinned), [localPinned]);
  const disablePinningSet = new Set(columnsControlConfig.disablePinning ?? []);
  const pinnedDefaultSet = new Set(columnsControlConfig.disablePinning ?? []);

  const pinnedAlways = localOrder.filter((k) => {
    const isPinnedDefault = pinnedDefaultSet.has(k);

    const isDisabledPinning = disablePinningSet.has(k);

    return isPinnedDefault && isDisabledPinning;
  });

  const disabledUnpinAll = localPinned.length === pinnedAlways.length;

  const clearLocalPinned = () =>
    setPinned((prev) =>
      prev.filter((k) => {
        const correctedDisable = correctedDisabled(disablePinningSet, {
          colsWithKeyTextMap,
          currentKey: k,
          tableConfigKeyTextBoolean,
        });

        return correctedDisable ?? disablePinningSet.has(k);
      }),
    );

  useEffect(() => {
    setLocalOrder(columnsOrder);
  }, [columnsOrder]);

  useEffect(() => {
    setLocalPinned(pinnedCols);
  }, [pinnedCols]);

  useEffect(() => {
    setLocalHiddens(hiddenCols);
  }, [hiddenCols]);

  return (
    <>
      {isVisibleSearchColumnBlock && (
        <Box $css={{ marginBottom: '12px' }}>
          <StyledSearchBlock
            placeholder="Поиск"
            value={searchQuery}
            onChange={handleSearchChange}
            contentLeft={
              <span style={{ marginRight: '2px' }}>
                <IconSearch />
              </span>
            }
            contentRight={
              searchQuery ? (
                <StyledClearBtn
                  onClick={handleClear}
                  aria-label="Очистить поиск"
                >
                  <IconClose />
                </StyledClearBtn>
              ) : undefined
            }
            clear
          />
        </Box>
      )}
      <ChangeAllButtonsBlock
        disabledClearPinnedButton={disabledUnpinAll}
        columnsControlConfig={columnsControlConfig}
        clearLocalPinned={clearLocalPinned}
        resetToDefaultOrder={() => setOrder(getDefaultColumnsOrder())}
        disableResetToDefaultOrderButton={orderIsNotChanged}
        {...columnsVisibilityProps}
      />

      <ColumnsList
        searchQuery={searchQuery}
        columnsOrder={localOrder}
        onColumnsReorder={onColumnsReorderLocal}
        setPinnedCols={setPinned}
        setHiddenCols={setHiddens}
        columnConfig={columnConfig}
        columnsControlConfig={columnsControlConfig}
        colsWithKeyTextMap={colsWithKeyTextMap}
        keyText={keyText}
        tableConfigKeyTextBoolean={tableConfigKeyTextBoolean}
        disableHidingSet={disableHidingSet}
        disablePinningSet={disablePinningSet}
        pinnedColsSet={pinnedColsSet}
        hiddenColsSet={hiddenColsSet}
      />
      {!applyImmediately && <ConfirmOrResetBlock {...confirmOrResetHandlers} />}
    </>
  );
};
