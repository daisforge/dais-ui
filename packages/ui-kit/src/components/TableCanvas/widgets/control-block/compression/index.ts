/* eslint-disable no-continue */
/**
 * Компрессия контрл-блока, фасад.
 *
 * Хук useCompressionFeatures принимает желаемое (несжатое) состояние,
 * замеры ширин и доступную ширину контейнера, и возвращает состояние,
 * которое реально помещается. Алгоритм детерминированный: для одной и
 * той же ширины всегда получается одно и то же состояние, поэтому
 * осцилляций (сжали, расширили, сжали) не бывает по построению.
 *
 * Порядок шагов компрессии описан в спецификации COMPRESSION.md.
 * Кратко: сначала прячутся лейблы кнопок, затем элементы по одному
 * уезжают в overflow дропдаун справа налево. В режиме редактирования
 * порядок другой: первыми прячутся лейблы Отменить и Сохранить.
 *
 * Структура модуля:
 * - steps.ts        шаги компрессии как данные (порядок = спецификация)
 * - width-model.ts  чистая модель ширины (расчёт, без React и DOM)
 * - cache.ts        кэш диапазонов ширины
 * - debug.ts        отладочные логи [CB]
 * - measure.ts      замеры реальных ширин из DOM (хук для ControlBlock)
 */
import { useCallback, useEffect, useRef, useState } from 'react';

import {
  CompressionCache,
  CompressionOptions,
  CompressionSpacing,
  InitialWidthsForToolsMenu,
  ToolsMenuState,
} from '../types';
import {
  addToCache,
  cloneState,
  findCachedState,
  getOrCreateElementCache,
} from './cache';
import {
  debugLogCompress,
  debugLogInit,
  debugResetInit,
  debugSkip,
  DebugStep,
} from './debug';
import { getCompressionPipeline } from './steps';
import { buildOverflowItems, calculateWidth } from './width-model';

export { useControlBlockMeasurements, useMeasurementEffects } from './measure';

export const useCompressionFeatures = (
  initialState: ToolsMenuState,
  measuredWidths: InitialWidthsForToolsMenu | undefined,
  element: HTMLDivElement | null | undefined,
  spacing: CompressionSpacing,
  options?: CompressionOptions,
) => {
  const originalStateRef = useRef(initialState);

  useEffect(() => {
    originalStateRef.current = initialState;
  }, [initialState]);

  const [compressedState, setCompressedState] =
    useState<ToolsMenuState>(initialState);

  // Объекты spacing и options приходят новыми каждый рендер,
  // стабилизируем доступ к ним через refs
  const spacingRef = useRef(spacing);
  spacingRef.current = spacing;

  const optionsRef = useRef(options);
  optionsRef.current = options;

  const measuredWidthsRef = useRef(measuredWidths);
  measuredWidthsRef.current = measuredWidths;

  // Кэш живёт по DOM элементу таблицы и переживает ремаунт контрл-блока
  const cacheRef = useRef<CompressionCache>({ cache: new Map() });

  useEffect(() => {
    cacheRef.current = getOrCreateElementCache(element);
    debugResetInit();
  }, [element]);

  useEffect(() => {
    if (element && cacheRef.current) {
      cacheRef.current.cache.clear();
    }
    debugLogInit(
      originalStateRef.current,
      measuredWidths,
      spacingRef.current as unknown as Record<string, number>,
      optionsRef.current as unknown as Record<string, unknown>,
    );
  }, [measuredWidths, element]);

  // Ключ кэша: конфигурация, от которой зависит результат компрессии
  const getCacheKey = useCallback(
    () =>
      JSON.stringify({
        state: originalStateRef.current,
        measuredWidths,
        editModeEnabled: optionsRef.current?.editModeEnabled,
        hasEditModeLeftSlot: optionsRef.current?.hasEditModeLeftSlot,
      }),
    [measuredWidths],
  );

  const calculateCurrentWidth = useCallback(
    (state: ToolsMenuState, breakdown?: Record<string, number>): number =>
      calculateWidth(state, measuredWidths, spacingRef.current, breakdown),
    [measuredWidths],
  );

  const compress = useCallback(
    (availableWidth: number) => {
      if (availableWidth <= 0) return;

      // Защита: не сжимаем, пока замеры лейблов не готовы. Иначе кнопки
      // с лейблами считаются как ноль, алгоритм решает что всё помещается,
      // компрессия не срабатывает и появляется скролл.
      const mw = measuredWidthsRef.current;
      const orig = originalStateRef.current;
      const expectsMeasured =
        orig.leftSide.leftSideInner.length > 0 ||
        orig.rightSide.buttons.length > 0 ||
        orig.leftSide.editRowFeature.isActive;
      const hasMeasurements = !!(
        mw &&
        (mw.leftSideInnerBlock || mw.rightButtons || mw.featureLeftButtons)
      );
      if (expectsMeasured && !hasMeasurements) {
        debugSkip('no-measurements', availableWidth);
        return;
      }

      const cachedState = findCachedState(
        cacheRef.current,
        getCacheKey(),
        availableWidth,
      );
      if (cachedState) {
        debugLogCompress({
          availableWidth,
          contentWidthBefore: 0,
          steps: [],
          finalState: cachedState,
          fromCache: true,
          measuredWidths: measuredWidthsRef.current,
        });
        setCompressedState(cachedState);
        return;
      }

      const saveToCache = (state: ToolsMenuState, stateWidth: number) =>
        addToCache(
          cacheRef.current,
          getCacheKey(),
          availableWidth,
          state,
          stateWidth,
          originalStateRef.current,
        );

      setCompressedState(() => {
        const state = cloneState(originalStateRef.current);
        const steps: DebugStep[] = [];

        // Строим список элементов, которые могут уйти в дропдаун
        state.rightSide.overflowItems = buildOverflowItems(state);
        state.rightSide.isOverflowTriggerVisible = false;

        // Разбивка ширины по элементам для логов, считается на несжатом
        // состоянии и показывает полные ширины
        const breakdown: Record<string, number> = {};
        let currentWidth = calculateCurrentWidth(state, breakdown);
        const contentWidthBefore = currentWidth;

        const logAndCache = () => {
          debugLogCompress({
            availableWidth,
            contentWidthBefore,
            steps,
            finalState: state,
            fromCache: false,
            measuredWidths: measuredWidthsRef.current,
            breakdown,
          });
          saveToCache(state, currentWidth);
        };

        if (currentWidth <= availableWidth) {
          steps.push({
            step: '0: initial fits',
            widthAfter: currentWidth,
            fits: true,
          });
          logAndCache();
          return state;
        }

        steps.push({
          step: '0: initial overflow',
          widthAfter: currentWidth,
          fits: false,
        });

        // Конвейер шагов (порядок и состав в steps.ts). В режиме
        // редактирования он другой: кнопки Отменить и Сохранить широкие,
        // их лейблы прячутся первыми, правую часть стараемся не трогать.
        const hasGroupingCounter = !!state.rightSide.hasGroupingCounter;
        const ctx = {
          isEditMode: !!optionsRef.current?.editModeEnabled,
          // Сжатие поиска с 250 до 210 допускаем в режиме редактирования с
          // editModeLeftSlot (кастомный слот занял место, это крайняя мера),
          // либо когда у группировки появился счётчик: его ширину гасим за
          // счёт поиска, чтобы не прятать лейблы правых кнопок.
          allowSearchShrink:
            (!!optionsRef.current?.editModeEnabled &&
              !!optionsRef.current?.hasEditModeLeftSlot) ||
            hasGroupingCounter,
          hasGroupingCounter,
        };

        for (const step of getCompressionPipeline(ctx)) {
          if (!step.applies(state, ctx)) continue;

          step.apply(state);
          currentWidth = calculateCurrentWidth(state);
          const fits = currentWidth <= availableWidth;
          steps.push({
            step: step.name,
            widthAfter: currentWidth,
            fits,
          });
          if (fits) {
            logAndCache();
            return state;
          }
        }

        // Дальше элементы по одному уезжают в overflow дропдаун.
        // Коллапс идёт с конца массива, то есть справа налево по конфигу.
        const { overflowItems } = state.rightSide;
        for (let idx = overflowItems.length - 1; idx >= 0; idx -= 1) {
          const oi = overflowItems[idx];
          // guard для noUncheckedIndexedAccess плюс пропуск уже спрятанных
          if (!oi || oi.isInDropdown) continue;

          oi.isInDropdown = true;

          // Первый спрятанный элемент включает триггер дропдауна
          if (!state.rightSide.isOverflowTriggerVisible) {
            state.rightSide.isOverflowTriggerVisible = true;
          }

          currentWidth = calculateCurrentWidth(state);
          const fits = currentWidth <= availableWidth;
          steps.push({
            step: `overflow: ${oi.sourceType}[${oi.sourceIndex}] to dropdown`,
            widthAfter: currentWidth,
            fits,
          });
          if (fits) {
            logAndCache();
            return state;
          }
        }

        // Всё сжали, но всё ещё не помещается. Возвращаем максимально
        // сжатое состояние, остаток уходит в горизонтальный скролл.
        steps.push({
          step: 'MAX COMPRESSED, still overflows',
          widthAfter: currentWidth,
          fits: false,
        });
        logAndCache();
        return state;
      });
    },
    [getCacheKey, calculateCurrentWidth],
  );

  const resetCompression = useCallback(() => {
    cacheRef.current.cache.clear();
    setCompressedState(originalStateRef.current);
  }, []);

  return {
    compressedState,
    compress,
    calculateCurrentWidth,
    resetCompression,
  };
};
