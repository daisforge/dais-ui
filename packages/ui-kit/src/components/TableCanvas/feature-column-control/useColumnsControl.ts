import {
  Dispatch,
  SetStateAction,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { KeyTextMap } from '../feature-key-text/types';
import {
  isPinningDisabled,
  PinningActionCtx,
  unpinColumns,
} from '../widgets/control-block/pinning-menu/pinning-actions';
import { collapseKeyTextKeys, expandKeyTextKeys } from './expandKeyTextKeys';
import { ColumnsControlConfig } from './types';

const NO_HIDDEN_COLS: string[] = [];

export const useColumnsControl = ({
  tableConfigColumnsControl,
  tableConfigKeyTextBoolean,
  colsWithKeyTextMap,
  columnsGroupingIsActive,
}: {
  tableConfigColumnsControl: ColumnsControlConfig | undefined;
  columnsGroupingIsActive: boolean;
  tableConfigKeyTextBoolean: boolean;
  colsWithKeyTextMap: KeyTextMap;
}) => {
  const columnsControlEnable = !!tableConfigColumnsControl?.enable;

  const columnsControlConfig: ColumnsControlConfig = {
    ...{
      enable: columnsControlEnable,
      reorderingAside: columnsControlEnable,
      reorderingHeader: columnsControlEnable,
      pinning: columnsControlEnable && !columnsGroupingIsActive,
      hiding: columnsControlEnable,
    },
    ...tableConfigColumnsControl,
  };

  const columnsControlInControlBlockBoolean =
    columnsControlEnable &&
    (columnsControlConfig.hiding ||
      columnsControlConfig.pinning ||
      columnsControlConfig.reorderingAside);

  const reorderInHeaderIsActive =
    columnsControlEnable && !!columnsControlConfig.reorderingHeader;

  const reorderIsActive =
    columnsControlEnable &&
    !!(
      columnsControlConfig.reorderingHeader ||
      columnsControlConfig.reorderingAside
    );

  const [pinnedCols, setPinnedCols] = useState(() =>
    expandKeyTextKeys(
      (columnsControlConfig.pinning &&
        tableConfigColumnsControl?.pinnedDefault) ||
        [],
      colsWithKeyTextMap,
      tableConfigKeyTextBoolean,
    ),
  );

  const innerHiddenState = useState(() =>
    collapseKeyTextKeys(
      (columnsControlConfig.hiding &&
        tableConfigColumnsControl?.hiddenDefault) ||
        [],
      colsWithKeyTextMap,
      tableConfigKeyTextBoolean,
    ),
  );
  const [hiddenColsRaw, setHiddenColsRaw] =
    tableConfigColumnsControl?.hiddenState ?? innerHiddenState;
  const hidingIsActive = !!columnsControlConfig.hiding;
  // При hiding: false скрытие выключено целиком, переданное значение не
  // применяется.
  const hiddenCols = useMemo(
    () =>
      hidingIsActive
        ? expandKeyTextKeys(
            hiddenColsRaw,
            colsWithKeyTextMap,
            tableConfigKeyTextBoolean,
          )
        : NO_HIDDEN_COLS,
    [
      hidingIsActive,
      hiddenColsRaw,
      colsWithKeyTextMap,
      tableConfigKeyTextBoolean,
    ],
  );
  // Состояние хранит по одному исходному ключу на пару key/text, а таблица
  // работает с обоими ключами пары. Иначе потребитель, сняв скрытие по
  // исходному ключу, оставит второй ключ, и пара останется скрытой.
  // Карту пар читаем через ref, чтобы ссылка на сеттер не менялась вместе с
  // картой.
  const colsWithKeyTextMapRef = useRef(colsWithKeyTextMap);
  useLayoutEffect(() => {
    colsWithKeyTextMapRef.current = colsWithKeyTextMap;
  }, [colsWithKeyTextMap]);
  const setHiddenColsWithKeyText = useCallback<
    Dispatch<SetStateAction<string[]>>
  >(
    (action) =>
      setHiddenColsRaw((prev) => {
        const map = colsWithKeyTextMapRef.current;
        const next = collapseKeyTextKeys(
          typeof action === 'function'
            ? action(expandKeyTextKeys(prev, map, true))
            : action,
          map,
          true,
        );
        // Тот же состав возвращаем прежней ссылкой, чтобы React пропустил
        // обновление без перерисовки.
        const sameAsPrev =
          next.length === prev.length &&
          next.every((key, i) => key === prev[i]);
        return sameAsPrev ? prev : next;
      }),
    [setHiddenColsRaw],
  );
  const setHiddenCols = tableConfigKeyTextBoolean
    ? setHiddenColsWithKeyText
    : setHiddenColsRaw;

  const [openControlModal, setOpenControlModal] = useState(false);

  // Контекст для чистых pin/unpin-хелперов (учёт disablePinning и пар key/text).
  // Тот же набор полей, что собирает use-feature-array для меню закрепления.
  const pinningActionCtx = useMemo<PinningActionCtx>(
    () => ({
      disablePinningSet: new Set(columnsControlConfig.disablePinning ?? []),
      colsWithKeyTextMap,
      tableConfigKeyTextBoolean,
    }),
    [
      columnsControlConfig.disablePinning,
      colsWithKeyTextMap,
      tableConfigKeyTextBoolean,
    ],
  );

  // Открепление одной колонки по клику на пин-иконку в шапке.
  const onUnpinColumn = useCallback(
    (key: string) => {
      setPinnedCols((prev) => unpinColumns(prev, [key], pinningActionCtx));
    },
    [pinningActionCtx],
  );

  // Закрепление колонки менять нельзя (напр. запинена по умолчанию и в
  // disablePinning) — в шапке рисуем индикатор без кнопки/действия.
  const getColumnPinningDisabled = useCallback(
    (key: string) => isPinningDisabled(key, pinningActionCtx),
    [pinningActionCtx],
  );

  return {
    columnsControlEnable,
    columnsControlConfig,
    columnsControlInControlBlockBoolean,
    reorderInHeaderIsActive,
    reorderIsActive,
    pinnedCols,
    setPinnedCols,
    hiddenCols,
    setHiddenCols,
    openControlModal,
    setOpenControlModal,
    colsWithKeyTextMap,
    onUnpinColumn,
    getColumnPinningDisabled,
  };
};
