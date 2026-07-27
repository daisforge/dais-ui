/* eslint-disable no-nested-ternary */
/**
 * Отладочные логи компрессии контрл-блока.
 *
 * Каждое событие пишется ОДНОЙ строкой вида: [CB] {...JSON...} — так всю
 * консоль можно скопировать целиком, ничего не разворачивая.
 *
 * Включение в консоли браузера: `window.__CB_DEBUG__ = true` (shared-логгер
 * createDebugLogger, namespace "CB"). По умолчанию ВЫКЛЮЧЕНО. Логи идут через
 * console.debug — в DevTools нужен уровень Verbose/Debug.
 */
import { createDebugLogger } from '@ui-kit/shared/utils/debug';

import { InitialWidthsForToolsMenu, ToolsMenuState } from '../types';

const cbLog = createDebugLogger('CB');

/**
 * Включён ли дебаг компрессии (`window.__CB_DEBUG__`). Нужен measure.ts, чтобы
 * не гонять дорогие DOM-замеры (getBoundingClientRect) ради логов, когда дебаг
 * выключен. Сам логгер тоже проверяет флаг, но эта функция позволяет отсечь
 * построение payload заранее.
 */
export const isCompressionDebugEnabled = () =>
  typeof window !== 'undefined' &&
  // eslint-disable-next-line no-underscore-dangle
  !!(window as unknown as Record<string, unknown>)['__CB_DEBUG__'];

let initLogged = false;
let prevAvailWidth = 0;

const emit = (payload: Record<string, unknown>) => {
  cbLog('[CB]', JSON.stringify(payload));
};

const round = (n: number) => Math.round(n);
const roundArr = (a?: number[]) => a?.map(round);

/** Один шаг алгоритма компрессии для лога */
export type DebugStep = { step: string; widthAfter: number; fits: boolean };

/** Лог пропуска расчёта (например, замеры ещё не готовы) */
export const debugSkip = (reason: string, availableWidth: number) => {
  emit({ ev: 'skip', reason, avail: round(availableWidth) });
};

/** Разовый лог стартовой конфигурации (активные фичи, замеры, спейсинги) */
export const debugLogInit = (
  initialState: ToolsMenuState,
  measuredWidths: InitialWidthsForToolsMenu | undefined,
  spacing: Record<string, number>,
  options: Record<string, unknown> | undefined
) => {
  if (!isCompressionDebugEnabled() || initLogged) return;
  initLogged = true;

  emit({
    ev: 'init',
    active: {
      collapse: initialState.leftSide.collapsingBlock.isActive,
      editRow: initialState.leftSide.editRowFeature.isActive,
      editModeEnabled: initialState.leftSide.editRowFeature.editModeEnabled,
      search: initialState.middle.searchingFeature.isActive,
      searchMin: initialState.middle.searchingFeature.minWidth,
      leftInner: initialState.leftSide.leftSideInner.length,
      buttons: initialState.rightSide.buttons.length,
      custom: initialState.rightSide.customFeatures.length,
      canBeCompressed: initialState.rightSide.customFeatures
        .map((cf, i) => (cf.canBeCompressed ? i : null))
        .filter((x) => x !== null)
    },
    measuredWidths,
    spacing,
    options
  });
};

/** Лог одного прохода компрессии: вход, шаги, итог, разбивка ширины */
export const debugLogCompress = (data: {
  availableWidth: number;
  contentWidthBefore: number;
  steps: DebugStep[];
  finalState: ToolsMenuState;
  fromCache: boolean;
  measuredWidths: InitialWidthsForToolsMenu | undefined;
  breakdown?: Record<string, number>;
}) => {
  if (!isCompressionDebugEnabled()) return;
  const {
    availableWidth,
    contentWidthBefore,
    steps,
    finalState,
    fromCache,
    measuredWidths,
    breakdown
  } = data;
  const dir =
    prevAvailWidth > 0
      ? availableWidth < prevAvailWidth
        ? 'shrink'
        : 'expand'
      : 'first';
  prevAvailWidth = availableWidth;

  const mw = measuredWidths;

  emit({
    ev: 'compress',
    dir,
    avail: round(availableWidth),
    content: round(contentWidthBefore),
    fromCache,
    steps: fromCache
      ? []
      : steps.map((s) => ({
          s: s.step,
          w: round(s.widthAfter),
          fits: s.fits
        })),
    result: {
      editRowLabel: finalState.leftSide.editRowFeature.isLabelVisible,
      buttonLabels: finalState.rightSide.buttons.map((b) => b.isLabelVisible),
      leftInnerLabels: finalState.leftSide.leftSideInner.map(
        (b) => b.isLabelVisible
      ),
      search: finalState.middle.searchingFeature.isActive,
      searchMin: finalState.middle.searchingFeature.minWidth,
      overflowTrigger: finalState.rightSide.isOverflowTriggerVisible,
      inDropdown: finalState.rightSide.overflowItems
        .filter((oi) => oi.isInDropdown)
        .map((oi) => `${oi.sourceType}[${oi.sourceIndex}]`),
      totalOverflow: finalState.rightSide.overflowItems.length
    },
    breakdown: breakdown
      ? Object.fromEntries(
          Object.entries(breakdown).map(([k, v]) => [k, round(v)])
        )
      : undefined,
    measuredWidths: mw
      ? {
          rightButtons: roundArr(mw.rightButtons),
          rightButtonsIcon: roundArr(mw.rightButtonsIcon),
          featureLeft: roundArr(mw.featureLeftButtons),
          featureLeftIcon: roundArr(mw.featureLeftButtonsIcon),
          leftSideInnerBlock: mw.leftSideInnerBlock,
          custom: roundArr(mw.customFeatures),
          overflowTrigger: mw.overflowTrigger,
          inlineTitle: mw.inlineTitle,
          collapseBlock: mw.collapseBlock,
          editModeLeftSlot: mw.editModeLeftSlot
        }
      : undefined
  });
};

/** Сброс разовых флагов (при смене наблюдаемого элемента) */
export const debugResetInit = () => {
  initLogged = false;
  prevAvailWidth = 0;
};
