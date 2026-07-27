import { correctedDisabled } from '../../../feature-column-control/ColumnsList/handlers';
import { KeyTextMap } from '../../../feature-key-text/types';

/**
 * Контекст, нужный для учёта запрета закрепления (disablePinning) с поправкой
 * на пары key/text: если запрещена любая половина пары — запрещена вся пара.
 */
export type PinningActionCtx = {
  disablePinningSet: Set<string>;
  colsWithKeyTextMap: KeyTextMap;
  tableConfigKeyTextBoolean: boolean;
};

/**
 * Разворачивает ключи в пары key/text: если ключ — половина пары, добавляет обе
 * половины. Нужно, чтобы открепление одной видимой колонки снимало закрепление
 * с обоих ключей пары (иначе близнец остаётся закреплённым и синий индикатор в
 * контрл-блоке не гаснет). Повторяет разворот из pinnedDefault (useColumnsControl).
 */
export const expandKeyTextPairs = (
  keys: string[],
  ctx: PinningActionCtx
): string[] => {
  if (!ctx.tableConfigKeyTextBoolean) {
    return keys;
  }
  const out = new Set<string>();
  keys.forEach((key) => {
    const pair = ctx.colsWithKeyTextMap.get(key);
    if (pair) {
      out.add(pair.keyKey);
      out.add(pair.textKey);
    } else {
      out.add(key);
    }
  });
  return [...out];
};

/**
 * Закрепление запрещено для ключа (с учётом пар key/text).
 * Повторяет правило сайдбара: correctedDisabled(...) ?? disablePinningSet.has(k).
 */
export const isPinningDisabled = (
  key: string,
  ctx: PinningActionCtx
): boolean => {
  const corrected = correctedDisabled(ctx.disablePinningSet, {
    colsWithKeyTextMap: ctx.colsWithKeyTextMap,
    currentKey: key,
    tableConfigKeyTextBoolean: ctx.tableConfigKeyTextBoolean
  });
  return corrected ?? ctx.disablePinningSet.has(key);
};

/**
 * «Закрепить столбцы»: добавляет выделенные колонки к уже закреплённым.
 * Пропускает те, что нельзя закреплять (disablePinning с учётом пар key/text)
 * и уже закреплённые. Если добавлять нечего — возвращает исходный массив
 * (та же ссылка), чтобы не провоцировать лишний ре-рендер.
 */
export function pinColumns(
  pinned: string[],
  selectedKeys: string[],
  ctx: PinningActionCtx
): string[] {
  const pinnedSet = new Set(pinned);
  const toAdd: string[] = [];

  expandKeyTextPairs(selectedKeys, ctx).forEach((key) => {
    if (pinnedSet.has(key)) return;
    if (isPinningDisabled(key, ctx)) return;
    pinnedSet.add(key);
    toAdd.push(key);
  });

  if (toAdd.length === 0) return pinned;
  return [...pinned, ...toAdd];
}

/**
 * «Сбросить закрепление» (= «Открепить все» в сайдбаре): снимает закрепление
 * со всех колонок, КРОМЕ тех, которым его менять нельзя (disablePinning с
 * учётом пар key/text). Повторяет clearLocalPinned из ColumnsControlInner.
 */
export function resetPinning(
  pinned: string[],
  ctx: PinningActionCtx
): string[] {
  return pinned.filter((key) => isPinningDisabled(key, ctx));
}

/**
 * «Открепить выбранные» (левая иконка-тоглер): снимает закрепление только с
 * выбранных колонок, кроме тех, которым менять нельзя (disablePinning).
 * В отличие от resetPinning, невыбранные закреплённые не трогает.
 */
export function unpinColumns(
  pinned: string[],
  selectedKeys: string[],
  ctx: PinningActionCtx
): string[] {
  const toRemove = new Set(
    expandKeyTextPairs(selectedKeys, ctx).filter(
      (key) => !isPinningDisabled(key, ctx)
    )
  );
  if (toRemove.size === 0) return pinned;
  const next = pinned.filter((key) => !toRemove.has(key));
  return next.length === pinned.length ? pinned : next;
}

export type PinIconAction = 'pin' | 'unpin' | 'none';

/**
 * Состояние левой иконки закрепления: цвет, tooltip и действие по клику.
 * colored (синий) — если среди ВИДИМЫХ колонок есть закреплённая.
 * tooltip/action — от пересечения выделения и закрепления.
 */
export function getPinIconState({
  selectedKeys,
  pinnedCols,
  hiddenCols,
  ctx
}: {
  selectedKeys: string[];
  pinnedCols: string[];
  hiddenCols: string[];
  ctx: PinningActionCtx;
}): { colored: boolean; tooltip: string; action: PinIconAction } {
  const hiddenSet = new Set(hiddenCols);
  const colored = pinnedCols.some((key) => !hiddenSet.has(key));

  if (selectedKeys.length === 0) {
    return {
      colored,
      tooltip: 'Выберите, что закрепить',
      action: 'none'
    };
  }

  const pinnedSet = new Set(pinnedCols);
  const hasPinnable = selectedKeys.some(
    (key) => !pinnedSet.has(key) && !isPinningDisabled(key, ctx)
  );

  return hasPinnable
    ? { colored, tooltip: 'Закрепить', action: 'pin' }
    : { colored, tooltip: 'Открепить', action: 'unpin' };
}
