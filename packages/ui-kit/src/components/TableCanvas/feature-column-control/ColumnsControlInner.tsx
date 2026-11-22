import { Box } from '@ui-kit/components/Box';
import {
  ColumnConfig,
  ObjectForExtending,
} from '@ui-kit/components/TableCanvas';
import { IconClose, IconSearch } from '@ui-kit/icons';
import { StyledClearBtn, StyledSearchBlock } from '@ui-kit/shared/ui/Search';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { KeyText, KeyTextMap } from '../feature-key-text/types';
import { reorderHandler } from '../feature-reorder-columns/reorderHandler';
import { ROW_ERRORS_COLUMN_KEY } from '../feature-row-errors';
import { ROW_I_COLUMN_KEY } from '../feature-row-instruments';
import { ROW_MARKER_COLUMN_KEY } from '../feature-row-markers';
import { KEY_GROUPED_COL } from '../feature-rows-grouping';
import { CHECKBOX_COLUMN_KEY } from '../feature-select-row';
import { ChangeAllButtonsBlock } from './ChangeAllButtonsBlock';
import { ColumnsList } from './ColumnsList';
import { correctedDisabled } from './ColumnsList/handlers';
import {
  ColumnsState,
  getColumnsStateChanged,
  isSameColumnsStatePart,
} from './columnsStateDiff';
import { ConfirmOrResetBlock } from './ConfirmOrResetBlock';
import { expandKeyTextKeys } from './expandKeyTextKeys';
import { ColumnsControlConfig } from './types';

const SERVICE_COLS_SET = new Set([
  ROW_MARKER_COLUMN_KEY,
  ROW_I_COLUMN_KEY,
  CHECKBOX_COLUMN_KEY,
  ROW_ERRORS_COLUMN_KEY,
  KEY_GROUPED_COL,
]);
const withoutServiceCols = (cols: string[]) =>
  cols.filter((cKey) => !SERVICE_COLS_SET.has(cKey));

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
  const isInstantApply = columnsControlConfig.applyMode === 'instant';

  // В режиме confirm панель копит изменения в локальном состоянии, а в таблицу
  // они уходят по кнопке «Применить». В режиме instant локального состояния нет:
  // панель читает и меняет состояние таблицы напрямую.
  const [localOrderState, setLocalOrderState] = useState(columnsOrder);
  const [localPinnedState, setLocalPinnedState] = useState(pinnedCols);
  const [localHiddensState, setLocalHiddensState] = useState(hiddenCols);
  const [searchQuery, setSearchQuery] = useState('');

  // Что панель попросила записать в состояние таблицы, по частям. Нужно, чтобы
  // в режиме instant вызывать onConfirm только на действия пользователя в
  // панели, а не на внешние изменения (пин в шапке, перенос заголовка,
  // hiddenState потребителя). Запоминаем само значение, а не флаг: если сеттер
  // потребителя изменение не применил, следующее внешнее изменение с просьбой
  // панели не совпадёт и onConfirm не вызовет. Запоминаем внутри функции
  // обновления: так просьба появляется, только если сеттер её вызвал, и
  // совпадает с тем, что он получил. Повторный вызов функции (StrictMode)
  // запишет то же значение.
  const requestedFromPanelRef = useRef<Partial<ColumnsState>>({});

  const markChangedFromPanel = useCallback(
    (
        part: keyof ColumnsState,
        setter: React.Dispatch<React.SetStateAction<string[]>>,
      ) =>
      (value: React.SetStateAction<string[]>) => {
        setter((prev) => {
          const next = typeof value === 'function' ? value(prev) : value;
          requestedFromPanelRef.current[part] = next;
          return next;
        });
      },
    [],
  );

  const localOrder = isInstantApply ? columnsOrder : localOrderState;
  const localPinned = isInstantApply ? pinnedCols : localPinnedState;
  const localHiddens = isInstantApply ? hiddenCols : localHiddensState;

  const setLocalOrder = useMemo(
    () =>
      isInstantApply
        ? markChangedFromPanel('order', setColumnsOrder)
        : setLocalOrderState,
    [isInstantApply, markChangedFromPanel, setColumnsOrder],
  );
  const setLocalPinned = useMemo(
    () =>
      isInstantApply
        ? markChangedFromPanel('pinned', setPinnedCols)
        : setLocalPinnedState,
    [isInstantApply, markChangedFromPanel, setPinnedCols],
  );
  const setLocalHiddens = useMemo(
    () =>
      isInstantApply
        ? markChangedFromPanel('hidden', setHiddenCols)
        : setLocalHiddensState,
    [isInstantApply, markChangedFromPanel, setHiddenCols],
  );

  // Предыдущее применённое состояние таблицы: от него считаем `changed`
  // для onConfirm в режиме instant.
  const appliedStateRef = useRef<ColumnsState>({
    order: columnsOrder,
    pinned: pinnedCols,
    hidden: hiddenCols,
  });

  useEffect(() => {
    const prev = appliedStateRef.current;
    const next: ColumnsState = {
      order: columnsOrder,
      pinned: pinnedCols,
      hidden: hiddenCols,
    };
    appliedStateRef.current = next;

    if (!isInstantApply) {
      requestedFromPanelRef.current = {};
      return;
    }

    const changed = getColumnsStateChanged(prev, next);
    const changedParts = Object.keys(changed) as (keyof ColumnsState)[];

    // Изменение пришло из панели, если часть стала ровно такой, какую просила
    // панель. Просьбу по изменившейся части забываем в любом случае. Скрытые
    // и закреплённые сравниваем с обоими ключами пар key/text: состояние может
    // хранить один ключ пары, а панель просить оба.
    const withPairs = (keys: string[]) =>
      expandKeyTextKeys(keys, colsWithKeyTextMap, tableConfigKeyTextBoolean);
    const requested = requestedFromPanelRef.current;
    let changedFromPanel = false;
    changedParts.forEach((part) => {
      const requestedPart = requested[part];
      delete requested[part];
      if (!requestedPart) return;
      const samePart =
        part === 'order'
          ? isSameColumnsStatePart(part, requestedPart, next[part])
          : isSameColumnsStatePart(
              part,
              withPairs(requestedPart),
              withPairs(next[part]),
            );
      changedFromPanel = changedFromPanel || samePart;
    });

    if (!changedFromPanel) {
      return;
    }

    columnsControlConfig.onConfirm?.(
      {
        order: withoutServiceCols(next.order),
        pinned: withoutServiceCols(next.pinned),
        hidden: withoutServiceCols(next.hidden),
        changed,
      },
      { setColumnsOrder, setHiddenCols, setPinnedCols },
    );
    // onConfirm и сеттеры стабильны по смыслу: реагируем только на изменение состояния колонок
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columnsOrder, pinnedCols, hiddenCols, isInstantApply]);

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
        setColumnsOrder: setLocalOrder,
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
      setLocalOrder,
    ],
  );

  const confirmOrResetHandlers = {
    confirmAllLocalChanging() {
      setColumnsOrder(localOrder);
      setPinnedCols(localPinned);
      setHiddenCols(localHiddens);

      if (columnsControlConfig?.onConfirm) {
        const changed = getColumnsStateChanged(
          { order: columnsOrder, pinned: pinnedCols, hidden: hiddenCols },
          { order: localOrder, pinned: localPinned, hidden: localHiddens },
        );

        columnsControlConfig.onConfirm(
          {
            order: withoutServiceCols(localOrder),
            pinned: withoutServiceCols(localPinned),
            hidden: withoutServiceCols(localHiddens),
            changed,
          },
          { setColumnsOrder, setHiddenCols, setPinnedCols },
        );
      }
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
      setLocalHiddens((prev) => {
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
    setLocalPinned((prev) =>
      prev.filter((k) => {
        const correctedDisable = correctedDisabled(disablePinningSet, {
          colsWithKeyTextMap,
          currentKey: k,
          tableConfigKeyTextBoolean,
        });

        return correctedDisable ?? disablePinningSet.has(k);
      }),
    );

  // Состояние таблицы поменялось снаружи панели (пин в шапке, перенос заголовка,
  // раскрытие скрытых столбцов) — подтягиваем его в локальные копии.
  useEffect(() => {
    setLocalOrderState(columnsOrder);
  }, [columnsOrder]);

  useEffect(() => {
    setLocalPinnedState(pinnedCols);
  }, [pinnedCols]);

  useEffect(() => {
    setLocalHiddensState(hiddenCols);
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
        resetToDefaultOrder={() => setLocalOrder(getDefaultColumnsOrder())}
        disableResetToDefaultOrderButton={orderIsNotChanged}
        {...columnsVisibilityProps}
      />

      <ColumnsList
        searchQuery={searchQuery}
        columnsOrder={localOrder}
        onColumnsReorder={onColumnsReorderLocal}
        setPinnedCols={setLocalPinned}
        setHiddenCols={setLocalHiddens}
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
      {!isInstantApply && <ConfirmOrResetBlock {...confirmOrResetHandlers} />}
    </>
  );
};
