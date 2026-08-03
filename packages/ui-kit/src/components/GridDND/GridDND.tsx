/* eslint-disable no-nested-ternary */
/* eslint-disable no-restricted-syntax */
import 'react-grid-layout/css/styles.css';

import { iconButtonFilterClassNames } from '@ui-kit/components/IconButton';
import React, {
  type FC,
  forwardRef,
  type ReactNode,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { type Layout, type ReactGridLayoutProps } from 'react-grid-layout';

import { analyticalWidgetClassNames } from '../AnalyticalWidget/AnalyticalWidget.constants';
import {
  fallbackCols,
  fallbackRowHeight,
  GridDNDClassNames as cls,
} from './GridDND.constants';
import { ItemWrapper } from './GridDND.ItemWrapper';
import { MeasuredContainer as ResponsiveGridLayout } from './GridDND.MeasuredContainer';
import { GridDNDContainer, GridItem, GridItemContent } from './GridDND.styled';
import type {
  GridDNDItemConfig,
  GridDNDProps,
  GridDNDRef,
} from './GridDND.types';
import {
  initSizeByType,
  layoutsShallowEqual,
  packByItemsOrder,
  placeRectFirstFit,
  readingOrder,
} from './utils';

const DefaultGridItemInner: FC<{
  children: ReactNode;
  // eslint-disable-next-line react/no-unused-prop-types
  isDraggable: boolean;
  className?: string;
}> = ({ children, className }) => (
  <GridItemContent className={className}>{children}</GridItemContent>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const log = (...args: any[]) =>
  // eslint-disable-next-line no-console
  console.log('%c[GridDND]', 'color:#6b5b95;font-weight:600', ...args);

const GridDNDWithRef = forwardRef<GridDNDRef, GridDNDProps>(
  (
    {
      // Источник истины — последовательность
      items,

      // Адаптивность
      breakpoints = { lg: 1375, md: 1143, sm: 911, xs: 679, xxs: 0 },
      cols = { lg: 6, md: 5, sm: 4, xs: 3, xxs: 2 },
      rowHeights = { lg: 248, md: 248, sm: 248, xs: 248, xxs: 248 },

      // RGL поведение
      isDraggable = true,
      isResizable = false,
      margin = [16, 16],
      containerPadding = [0, 0],
      preventCollision = false,
      allowOverlap = false,
      isBounded = true,
      autoSize = true,
      useCSSTransforms = true,
      compactType = 'horizontal',
      smartCompact = true,
      resizeHandles = ['se', 'sw', 'ne', 'nw', 's', 'w', 'e', 'n'],
      draggableHandle = `.${cls.dragHandle}`,
      draggableCancel = `button, input, select, textarea, .${cls.noDrag}, .${analyticalWidgetClassNames.topSlot}, .${iconButtonFilterClassNames.root}`,

      maxRows,
      transformScale,

      // Колбеки
      onLayoutChange,
      onBreakpointChange,
      onItemsChange,
      onWidthChange,
      onDrag,
      onDragStart,
      onDragStop,

      // Контент
      children,

      // Задержка активации D&D
      dragActivationDelay = 0,

      // Стилизация
      gridItemComponent,
      containerStyle,
      gridStyle,

      enableLogs = false,
    },
    ref,
  ) => {
    // --------------------------------------------------------------------------------
    //  === Канонический порядок и размеры ===
    // Пояснение: всё остальное (layouts, вид) — производные от этих двух.

    // - itemsOrder: порядок id (единственная истина порядка)
    const [itemsOrder, setItemsOrder] = useState<string[]>(() =>
      items.map((i) => i.id),
    );

    // - itemSizesRef: карта размеров по id (устойчива между рендерами)
    const itemSizesRef = useRef<Record<string, { w: number; h: number }>>(
      Object.fromEntries(items.map((i) => [i.id, initSizeByType(i.type)])),
    );

    // --------------------------------------------------------------------------------
    // === Технические рефы и флаги согласования с RGL ===
    // Пояснение: Помогают разрулить гонки стейт/событие/анимация

    // Окно "игнора" эхо-событий onLayoutChange после нашего reflow
    const isApplyingReflowRef = useRef(false);

    // Последний целевой layouts, чтобы можно было "добить" RGL
    const lastReflowTargetRef = useRef<Record<string, Layout[]>>({
      lg: [],
      md: [],
      sm: [],
      xs: [],
      xxs: [],
    });

    // Текущий BP без гонок (быстрее, чем ждать state)
    const activeBpRef = useRef('lg');
    // След для smart-compact детектора направления
    const dragHistoryRef = useRef<
      { x: number; y: number; timestamp: number }[]
    >([]);

    // --------------------------------------------------------------------------------
    // === Задержка активации D&D (dragActivationDelay) ===
    //
    // Как работает:
    // 1. Пользователь зажимает палец/мышку (pointerdown) на карточке
    // 2. Запускается таймер на dragActivationDelay мс
    //    + параллельно слушаем pointermove для определения скролла/выделения текста
    // 3. Если курсор сместился больше 8px — считаем скроллом или
    //    выделением текста, таймер отменяется, D&D не активируется
    // 4. По истечении таймера (если движения не было):
    //    - isDragDelayActive → true (isDraggable переключается на true через effectiveIsDraggable)
    //    - Блокируется выделение текста (user-select: none на контейнере)
    //    - Блокируется нативный скролл (touch-action: none на контейнере)
    //    - Курсор переключается на grab (grabbing при перетаскивании)
    //    - Обводка появляется только у зажатой карточки (activeItemId)
    //    - Эмулируется mousedown на элементе draggableHandle внутри карточки
    // 5. react-draggable (используется внутри react-grid-layout) подхватывает mousedown
    //    и начинает слушать mousemove — при движении мышки (которая уже зажата) начинается драг
    // 6. После dragStop или pointerup (если драг не начался) — режим деактивируется
    //
    // Почему нужна эмуляция mousedown:
    // react-draggable слушает onMouseDown на элементе с draggableHandle
    // (см. https://github.com/react-grid-layout/react-draggable — DraggableCore.js).
    // В момент реального pointerdown isDraggable ещё false, react-draggable не активен.
    // После delay мы ставим isDraggable=true (React перерендерит), затем через 2 RAF
    // (чтобы DOM обновился) диспатчим синтетический mousedown на draggableHandle элемент.
    // react-draggable ловит его, проверяет handle через matchesSelectorAndParentsTo,
    // и начинает drag session — добавляет document-level mousemove/mouseup.
    //
    // _synthetic флаг на событии предотвращает зацикливание:
    // наш handlePointerDown игнорирует события с _synthetic === true.
    //
    // Pointer Events (pointerdown/pointerup/pointermove) используются вместо
    // mouse events для единообразной обработки мыши и touch.
    //
    // TODO: в будущем можно добавить классы-исключения для элементов,
    // при клике на которые таймер не будет запускаться (аналогично draggableCancel).

    const hasDragDelay = dragActivationDelay > 0;
    const [isDragDelayActive, setIsDragDelayActive] = useState(false);
    const [activeItemId, setActiveItemId] = useState<string | null>(null);
    const dragDelayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
      null,
    );
    const isDraggingRef = useRef(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const savedMouseRef = useRef<{
      clientX: number;
      clientY: number;
      handleEl: HTMLElement | null;
    } | null>(null);

    const clearDragDelayTimer = useCallback(() => {
      if (dragDelayTimerRef.current) {
        clearTimeout(dragDelayTimerRef.current);
        dragDelayTimerRef.current = null;
      }
    }, []);

    const deactivateDragDelay = useCallback(() => {
      setIsDragDelayActive(false);
      setActiveItemId(null);
      isDraggingRef.current = false;
    }, []);

    // Порог движения (px²). Если палец/курсор сместился больше — считаем скроллом
    // или выделением текста и отменяем активацию D&D.
    const MOVE_THRESHOLD_SQ = 64; // 8px * 8px

    useEffect(() => {
      if (!hasDragDelay || !containerRef.current) return undefined;

      const el = containerRef.current;

      // Отслеживание движения — отмена таймера при скролле/выделении текста
      let moveCleanup: (() => void) | null = null;

      const startMoveTracking = (startX: number, startY: number) => {
        const onPointerMove = (moveE: PointerEvent) => {
          const dx = moveE.clientX - startX;
          const dy = moveE.clientY - startY;
          if (dx * dx + dy * dy > MOVE_THRESHOLD_SQ) {
            clearDragDelayTimer();
            setActiveItemId(null);
            savedMouseRef.current = null;
            stopMoveTracking();
          }
        };
        document.addEventListener('pointermove', onPointerMove);
        moveCleanup = () => {
          document.removeEventListener('pointermove', onPointerMove);
          moveCleanup = null;
        };
      };

      const stopMoveTracking = () => {
        moveCleanup?.();
      };

      // Проверка: клик попал в область нативного скроллбара
      const isScrollbarClick = (e: PointerEvent) => {
        const target = e.target as HTMLElement;
        return (
          e.offsetX > target.clientWidth || e.offsetY > target.clientHeight
        );
      };

      const handlePointerDown = (e: PointerEvent) => {
        // Игнорируем эмулированные mousedown чтобы не зациклиться
        // eslint-disable-next-line no-underscore-dangle
        if ((e as PointerEvent & { _synthetic?: boolean })._synthetic) return;

        // Правая/средняя кнопка мыши — не активируем D&D
        if (e.button !== 0) return;

        // Клик по скроллбару — не активируем D&D
        if (isScrollbarClick(e)) return;

        clearDragDelayTimer();
        stopMoveTracking();

        const target = e.target as HTMLElement;
        const gridItem = target.closest(`.${cls.gridItem}`);
        const itemWrapper = gridItem?.querySelector(`.${cls.gridItemWrapper}`);
        const itemId = itemWrapper?.id ?? null;

        // draggableHandle элемент — именно на него нужно эмулировать mousedown,
        // потому что react-draggable проверяет target через matchesSelectorAndParentsTo
        const handleEl = gridItem?.querySelector(
          `.${cls.dragHandle}`,
        ) as HTMLElement | null;

        setActiveItemId(itemId);

        savedMouseRef.current = {
          clientX: e.clientX,
          clientY: e.clientY,
          handleEl,
        };

        // Запускаем отслеживание движения (pointermove — ловит и мышь, и тачпад)
        // для отмены при скролле/выделении текста
        startMoveTracking(e.clientX, e.clientY);

        dragDelayTimerRef.current = setTimeout(() => {
          // Таймер сработал — движения не было, активируем D&D
          stopMoveTracking();
          setIsDragDelayActive(true);

          // 2 RAF: первый — React применит isDraggable=true,
          // второй — DOM обновится, react-draggable навесит обработчики.
          // После этого диспатчим mousedown на draggableHandle.
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              const saved = savedMouseRef.current;
              if (!saved?.handleEl) return;

              const syntheticEvent = new MouseEvent('mousedown', {
                bubbles: true,
                cancelable: true,
                clientX: saved.clientX,
                clientY: saved.clientY,
                button: 0,
                buttons: 1,
              });
              // Помечаем событие чтобы наш handlePointerDown его проигнорировал
              // eslint-disable-next-line no-underscore-dangle
              (
                syntheticEvent as MouseEvent & { _synthetic?: boolean }
              )._synthetic = true;
              saved.handleEl.dispatchEvent(syntheticEvent);
            });
          });
        }, dragActivationDelay);
      };

      const handlePointerUp = () => {
        clearDragDelayTimer();
        stopMoveTracking();
        savedMouseRef.current = null;
        // Если драг не начался (пользователь отпустил до delay или после без движения) —
        // сбрасываем состояние. Если драг начался — сброс произойдёт в handleDragStop.
        if (!isDraggingRef.current) {
          requestAnimationFrame(() => {
            deactivateDragDelay();
          });
        }
      };

      el.addEventListener('pointerdown', handlePointerDown);
      document.addEventListener('pointerup', handlePointerUp);

      return () => {
        el.removeEventListener('pointerdown', handlePointerDown);
        document.removeEventListener('pointerup', handlePointerUp);
        clearDragDelayTimer();
        stopMoveTracking();
      };
    }, [
      hasDragDelay,
      dragActivationDelay,
      clearDragDelayTimer,
      deactivateDragDelay,
    ]);

    const effectiveIsDraggable = hasDragDelay
      ? isDraggable && isDragDelayActive
      : isDraggable;

    // --------------------------------------------------------------------------------
    // === State для визуальной части ===
    // Пояснение: всё, что влияет на отрисовку/поведение RGL.

    // Текущее представление для всех BP (дериват от order + cols)
    const [layouts, setLayouts] = useState<Record<string, Layout[]>>({
      lg: [],
      md: [],
      sm: [],
      xs: [],
      xxs: [],
    });

    const [currentBreakpoint, setCurrentBreakpoint] = useState<string>('lg');
    const [currentRowHeight, setCurrentRowHeight] = useState<number>(
      rowHeights['lg'] ?? fallbackRowHeight,
    );

    // Текущее направление компактации (smart-compact)
    const [currentCompactType, setCurrentCompactType] =
      useState<ReactGridLayoutProps['compactType']>(compactType);

    // временно отключаем compactType на 1–2 кадра при reflow
    const [suppressCompaction, setSuppressCompaction] = useState(false);

    // --------------------------------------------------------------------------------
    // === Быстрые мемо/маппинги ===
    // Пояснение: дешёвые кэшируемые вычисления; исключают лишние .find() и тд.

    const draggableClassName = useMemo(
      () => draggableHandle.split('.').join(' '),
      [draggableHandle],
    );

    const GridItemInner = useMemo(
      () => gridItemComponent ?? DefaultGridItemInner,
      [gridItemComponent],
    );

    // Типы виджетов (s/m/l) из props.items — базовый источник.
    // Обновляется только при смене props.items.
    const propsTypeById = useMemo(
      () => new Map(items.map((i) => [i.id, i.type as 's' | 'm' | 'l'])),
      [items],
    );

    // Рантайм-типы виджетов (s/m/l), добавленные/переопределённые через наше API.
    // Храним в ref (не вызывает ререндер), приоритет выше, чем у props.
    // Чистим, когда виджет удалён или исчез из props и текущего порядка.
    const runtimeTypeByIdRef = useRef<Map<string, 's' | 'm' | 'l'>>(new Map());

    // --------------------------------------------------------------------------------
    // === Чистые помощники (без side-effects) ===

    // Выдаёт тип с простым приоритетом: runtime → props → "s".
    const getType = useCallback(
      (id: string): 's' | 'm' | 'l' =>
        runtimeTypeByIdRef.current.get(id) ??
        (propsTypeById.get(id) as 's' | 'm' | 'l' | undefined) ??
        's',
      [propsTypeById],
    );

    const asTypedOrder = useCallback(
      (order: string[]) => order.map((id) => ({ id, type: getType(id) })),
      [getType],
    );

    // Получить высоту строки для BP
    const getRowHeight = useCallback(
      (bp: string) =>
        rowHeights[bp as keyof typeof rowHeights] ??
        rowHeights['md'] ??
        fallbackRowHeight,
      [rowHeights],
    );

    // Собрать GridDNDItemConfig[]
    const buildWidgetsForBp = useCallback(
      (
        bp: string,
        layoutsArg: Record<string, Layout[]>,
        orderArg?: string[],
      ): GridDNDItemConfig[] => {
        const order = orderArg ?? itemsOrder;
        const lay = layoutsArg[bp] ?? [];
        const fallbackTarget = lastReflowTargetRef.current[bp] ?? [];

        const byId = new Map(lay.map((l) => [l.i, l]));
        const byIdFallback = new Map(fallbackTarget.map((l) => [l.i, l]));

        return order.map((id) => {
          const type = getType(id);
          const l = byId.get(id) ?? byIdFallback.get(id) ?? null;
          const size = itemSizesRef.current[id] ?? initSizeByType(type);
          const pos = l
            ? { x: l.x, y: l.y, w: l.w, h: l.h }
            : { x: 0, y: 0, w: size.w, h: size.h };
          return { id, type, position: pos };
        });
      },
      [itemsOrder, getType],
    );

    const getBaseLayoutForBp = useCallback(
      (bp: string): Layout[] => {
        const target = lastReflowTargetRef.current[bp] ?? [];
        if (target.length) return target;
        return layouts[bp] ?? [];
      },
      [layouts],
    );

    const logDND = useCallback(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (...args: any) => {
        if (enableLogs) {
          log(...args);
        }
      },
      [enableLogs],
    );

    // --------------------------------------------------------------------------------
    // === Ядро расчёта раскладки (единственная точка мутации layouts) ===
    // Пояснение: все пути, которые меняют layouts, проходят ТОЛЬКО здесь.

    // Применяет layouts с "окном тишины" для RGL, сохраняет target
    const setLayoutsInternal = useCallback((next: Record<string, Layout[]>) => {
      // сохраняем target
      lastReflowTargetRef.current = next;

      // ставим окно игнора «эхо»-событий
      isApplyingReflowRef.current = true;
      setSuppressCompaction(true); // заморозка компактации на время применения

      setLayouts(next);

      // снимаем флаги не сразу, а через 2 кадра — чтобы RGL точно успокоился
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          isApplyingReflowRef.current = false;
          setSuppressCompaction(false);
          log('[GridDND] reflow window closed');
        });
      });
    }, []);

    // Детерминированная укладка по очереди на все BP
    const reflowAllByOrder = useCallback(
      (order: string[]) => {
        const out: Record<string, Layout[]> = {};
        for (const bp of Object.keys(cols)) {
          const c = cols[bp] ?? fallbackCols;
          out[bp] = packByItemsOrder(
            order,
            itemSizesRef.current,
            c,
            isResizable,
          );
        }
        logDND('reflowAllByOrder', { order, out });
        setLayoutsInternal(out);
        return out;
      },
      [cols, isResizable, setLayoutsInternal, logDND],
    );

    // --------------------------------------------------------------------------------
    // === Вспомогательные функции UX/согласования с RGL ===
    // Пояснение: минимизируем "дрожь" и артефакты компактации.

    // Переключает currentCompactType (smart-compact)
    const detectDragDirection = useCallback(
      (x: number, y: number) => {
        if (!smartCompact) return;
        const now = Date.now();
        dragHistoryRef.current.push({ x, y, timestamp: now });
        dragHistoryRef.current = dragHistoryRef.current.filter(
          (p) => now - p.timestamp <= 300,
        );
        if (dragHistoryRef.current.length < 2) return;
        let dx = 0;
        let dy = 0;
        for (let i = 1; i < dragHistoryRef.current.length; i += 1) {
          const a = dragHistoryRef.current[i - 1];
          const b = dragHistoryRef.current[i];
          // eslint-disable-next-line no-continue
          if (!a || !b) continue;
          dx += Math.abs(b.x - a.x);
          dy += Math.abs(b.y - a.y);
        }
        if (dx + dy < 10) return;
        if (dx > dy * 1.5) setCurrentCompactType('horizontal');
        else if (dy > dx * 1.5) setCurrentCompactType('vertical');
      },
      [smartCompact],
    );

    // Переустановка тех же layouts с новыми ссылками,
    // чтобы RGL гарантированно применил target после своих финальных событий.
    const forceSyncWithRgl = useCallback(() => {
      // повторно переустановим ТЕКУЩИЙ target (новые ссылки), +заморозим компактацию
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const target = lastReflowTargetRef.current;
          const cloned: Record<string, Layout[]> = {};
          for (const [bp, arr] of Object.entries(target)) {
            cloned[bp] = arr.map((l) => ({ ...l }));
          }
          logDND('[GridDND] forceSyncWithRgl → re-push target layouts');
          setLayoutsInternal(cloned);
        });
      });
    }, [setLayoutsInternal, logDND]);

    // --------------------------------------------------------------------------------
    // === EFFECTS ===

    // Первичный reflow по входным items → формируем layouts для всех BP
    useEffect(() => {
      // первичная раскладка по всем брейкпоинтам
      reflowAllByOrder(items.map((i) => i.id));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // только при маунте

    // Чистим runtime-типы.
    // Удаляем id, которых больше нет ни в props.items, ни в текущем порядке.
    // (Чтобы не копились старые записи в runtimeTypeByIdRef.)
    useEffect(() => {
      const allowed = new Set<string>([...propsTypeById.keys(), ...itemsOrder]);
      runtimeTypeByIdRef.current.forEach((_, id) => {
        if (!allowed.has(id)) runtimeTypeByIdRef.current.delete(id);
      });
    }, [propsTypeById, itemsOrder]);

    // Гарантируем размеры для новых items из props.
    // Если для id ещё нет записи — ставим дефолт по типу.
    // (Уже записанные размеры не трогаем.)
    useEffect(() => {
      items.forEach((it) => {
        if (!itemSizesRef.current[it.id]) {
          itemSizesRef.current[it.id] = initSizeByType(it.type);
        }
      });
    }, [items]);

    // --------------------------------------------------------------------------------
    // === Обработчики RGL (единственная точка реакции на действия пользователя) ===
    // Пояснение: вся пользовательская динамика проходит здесь

    // сброс истории, вернуть compactType в дефолт, проброс наружу
    const handleDragStart = useCallback(
      (
        layout: Layout[],
        oldItem: Layout,
        newItem: Layout,
        placeholder: Layout,
        e: MouseEvent,
        element: HTMLElement,
      ) => {
        dragHistoryRef.current = [];
        setCurrentCompactType(compactType);
        if (hasDragDelay) isDraggingRef.current = true;
        onDragStart?.(layout, oldItem, newItem, placeholder, e, element);
      },
      [compactType, onDragStart, hasDragDelay],
    );

    // smart-compact трекинг, проброс наружу
    const handleDrag = useCallback(
      (
        layout: Layout[],
        oldItem: Layout,
        newItem: Layout,
        placeholder: Layout,
        e: MouseEvent,
        element: HTMLElement,
      ) => {
        detectDragDirection(e.clientX, e.clientY);
        onDrag?.(layout, oldItem, newItem, placeholder, e, element);
      },
      [detectDragDirection, onDrag],
    );

    // 1) readingOrder(layout) → nextOrder
    // 2) reflowAllByOrder(nextOrder) → nextLayouts
    // 3) onItemsChange / onLayoutChange (+ meta: itemsOrder, itemsOrderTyped)
    // 4) reconcile: если live ≠ target → forceSyncWithRgl()
    const handleDragStop = useCallback(
      (
        layout: Layout[],
        oldItem: Layout,
        newItem: Layout,
        placeholder: Layout,
        e: MouseEvent,
        element: HTMLElement,
      ) => {
        onDragStop?.(layout, oldItem, newItem, placeholder, e, element);

        if (hasDragDelay) deactivateDragDelay();

        const nextOrder = readingOrder(layout);
        logDND('[GridDND] dragStop: nextOrder(readingOrder)', nextOrder);
        setItemsOrder(nextOrder);

        const nextLayouts = reflowAllByOrder(nextOrder);
        const bp = activeBpRef.current;

        const widgets = buildWidgetsForBp(bp, nextLayouts, nextOrder);

        onItemsChange?.(widgets);
        onLayoutChange?.(
          {
            breakpoint: bp,
            cols: cols[bp] ?? fallbackCols,
            rowHeight: currentRowHeight,
            items: widgets,
          },
          nextLayouts,
          { itemsOrder: nextOrder, itemsOrderTyped: asTypedOrder(nextOrder) },
        );

        setCurrentCompactType(compactType);

        // если «живой» layout RGL != нашему target — переустановим target ещё раз
        const live = layout;
        const target = nextLayouts[bp];
        if (!layoutsShallowEqual(live, target)) {
          logDND(
            '[GridDND] dragStop: live layout != target → forceSyncWithRgl()',
          );
          forceSyncWithRgl();
        } else {
          logDND('[GridDND] dragStop: live layout == target (OK)');
        }
      },
      [
        onDragStop,
        hasDragDelay,
        deactivateDragDelay,
        reflowAllByOrder,
        buildWidgetsForBp,
        onItemsChange,
        onLayoutChange,
        cols,
        currentRowHeight,
        compactType,
        forceSyncWithRgl,
        logDND,
        asTypedOrder,
      ],
    );

    // игнорируем в окне reflow; игнорим "подозрительные" maxW;
    // игнорируем, если cur == lastReflowTarget[bp]; иначе — живое обновление + onLayoutChange
    const handleLayoutChange = useCallback(
      (cur: Layout[], all: Record<string, Layout[]>) => {
        logDND('RGL onLayoutChange', { cur, all });

        const bp = activeBpRef.current;

        // игнорировать эхо, если длина cur отличается от длины target (на drag длина не меняется).
        const targetLen = (lastReflowTargetRef.current[bp] ?? []).length;
        if (
          cur.length === targetLen &&
          layoutsShallowEqual(cur, lastReflowTargetRef.current[bp])
        ) {
          logDND('[GridDND] onLayoutChange[IGNORED: equals-target]', { bp });
          return;
        }

        // если находимся в «окне reflow» — игнорим
        if (isApplyingReflowRef.current) {
          logDND('[GridDND] onLayoutChange[IGNORED: reflow-window]', {
            bp,
            cur,
          });
          return;
        }

        // если пришёл layout с подозрительным maxW (часто RGL создает эхо из старого BP) — игнорируем
        const expectedCols = cols[bp] ?? fallbackCols;
        const suspiciousCols = cur.some(
          (l) => typeof l.maxW === 'number' && l.maxW !== expectedCols,
        );
        if (suspiciousCols) {
          return;
        }

        // если cur == нашему target — тоже игнорим (это эхо нашей переустановки)
        if (layoutsShallowEqual(cur, lastReflowTargetRef.current[bp])) {
          logDND('[GridDND] onLayoutChange[IGNORED: equals-target]', { bp });
          return;
        }

        // иначе — это живое перетаскивание, синхронизируем
        setLayouts((prev) => ({ ...prev, [bp]: cur.map((l) => ({ ...l })) }));
        const widgets = buildWidgetsForBp(bp, { ...layouts, [bp]: cur });
        onLayoutChange?.(
          {
            breakpoint: bp,
            cols: expectedCols,
            rowHeight: currentRowHeight,
            items: widgets,
          },
          { ...layouts, [bp]: cur },
          { itemsOrder },
        );
      },
      [
        onLayoutChange,
        buildWidgetsForBp,
        layouts,
        cols,
        currentRowHeight,
        itemsOrder,
        logDND,
      ],
    );

    const handleBreakpointChange = useCallback(
      (newBp: string) => {
        activeBpRef.current = newBp;
        setCurrentBreakpoint(newBp);
        setCurrentRowHeight(getRowHeight(newBp));

        // раскладываем текущий order под новый cols
        const next = reflowAllByOrder(itemsOrder);
        const widgets = buildWidgetsForBp(newBp, next, itemsOrder);
        onBreakpointChange?.(newBp, {
          breakpoint: newBp,
          cols: cols[newBp] ?? fallbackCols,
          rowHeight: getRowHeight(newBp),
          items: widgets,
        });
      },
      [
        getRowHeight,
        reflowAllByOrder,
        itemsOrder,
        buildWidgetsForBp,
        onBreakpointChange,
        cols,
      ],
    );

    const handleWidthChange = useCallback(
      (
        w: number,
        margin: [number, number],
        colsArg: number,
        containerPaddingArg: [number, number],
      ) => {
        onWidthChange?.(w, margin, colsArg, containerPaddingArg);
        // MeasuredContainer сам вызовет onBreakpointChange -> handleBreakpointChange выше
      },
      [onWidthChange],
    );

    // --------------------------------------------------------------------------------
    // === Локальные экшены, используемые и снаружи, и внутри ===

    const removeItemById = useCallback(
      (id: string) => {
        // чистим оверлей
        runtimeTypeByIdRef.current.delete(id);
        delete itemSizesRef.current[id];

        setItemsOrder((prev) => {
          const next = prev.filter((x) => x !== id);
          const nextLayouts = reflowAllByOrder(next);
          const bp = activeBpRef.current;
          const widgets = buildWidgetsForBp(bp, nextLayouts, next);

          onItemsChange?.(widgets);
          onLayoutChange?.(
            {
              breakpoint: bp,
              cols: cols[bp] ?? fallbackCols,
              rowHeight: currentRowHeight,
              items: widgets,
            },
            nextLayouts,
            { itemsOrder: next, itemsOrderTyped: asTypedOrder(next) },
          );
          return next;
        });
      },
      [
        reflowAllByOrder,
        buildWidgetsForBp,
        onItemsChange,
        onLayoutChange,
        cols,
        currentRowHeight,
        asTypedOrder,
      ],
    );

    // Изменить type (и, как следствие, размер) существующего виджета.
    // Игнорирует id, которых нет в текущем порядке.
    // Использует runtime-оверлей (runtimeTypeByIdRef) — приоритет выше props.
    const setItemTypeById = useCallback(
      (id: string, type: 's' | 'm' | 'l') => {
        if (!itemsOrder.includes(id)) return;

        runtimeTypeByIdRef.current.set(id, type);

        const bp = activeBpRef.current;
        const gridCols = cols[bp] ?? fallbackCols;
        const size0 = initSizeByType(type);
        itemSizesRef.current[id] = {
          w: Math.max(1, Math.min(size0.w, gridCols)),
          h: Math.max(1, size0.h),
        };

        const nextLayouts = reflowAllByOrder(itemsOrder);
        const widgets = buildWidgetsForBp(bp, nextLayouts, itemsOrder);
        onItemsChange?.(widgets);
        onLayoutChange?.(
          {
            breakpoint: bp,
            cols: gridCols,
            rowHeight: currentRowHeight,
            items: widgets,
          },
          nextLayouts,
          { itemsOrder, itemsOrderTyped: asTypedOrder(itemsOrder) },
        );
      },
      [
        itemsOrder,
        cols,
        reflowAllByOrder,
        buildWidgetsForBp,
        onItemsChange,
        onLayoutChange,
        currentRowHeight,
        asTypedOrder,
      ],
    );

    // --------------------------------------------------------------------------------
    // === API ===
    // Пояснение: наружу отдаём операции высокого уровня; внутри — один путь мутации.

    useImperativeHandle(
      ref,
      () => ({
        api: {
          getOrder: () => itemsOrder,
          getOrderDetailed: () => asTypedOrder(itemsOrder),
          setOrder: (order: string[]) => {
            setItemsOrder(order);
            const next = reflowAllByOrder(order);
            const bp = activeBpRef.current;
            const widgets = buildWidgetsForBp(bp, next, order);
            onItemsChange?.(widgets);
            onLayoutChange?.(
              {
                breakpoint: bp,
                cols: cols[bp] ?? fallbackCols,
                rowHeight: currentRowHeight,
                items: widgets,
              },
              next,
              { itemsOrder: order, itemsOrderTyped: asTypedOrder(order) },
            );
          },
          addItem: (spec, index) => {
            // 0) запоминаем тип и дефолтный размер
            runtimeTypeByIdRef.current.set(
              spec.id,
              spec.type as 's' | 'm' | 'l',
            );
            const size0 = initSizeByType(spec.type);
            const bp = activeBpRef.current;
            const gridCols = cols[bp] ?? fallbackCols;
            const size = {
              w: Math.max(1, Math.min(size0.w, gridCols)),
              h: Math.max(1, size0.h),
            };
            itemSizesRef.current[spec.id] = size;

            // 1) берём базовый лейаут и вычислим стартовую точку поиска (если индекс подсказан)
            const base = getBaseLayoutForBp(bp);
            let startX = 0;
            let startY = 0;
            if (index != null) {
              const prevIdx = Math.max(
                0,
                Math.min(index - 1, itemsOrder.length - 1),
              );
              const prevId = itemsOrder[prevIdx];
              const prev = base.find((l) => l.i === prevId);
              if (prev) {
                startY = prev.y;
                startX = prev.x + prev.w; // начнём искать правее соседнего
              }
            }

            // 2) находим ближайшую дыру
            const spot = placeRectFirstFit(
              base,
              gridCols,
              size.w,
              size.h,
              startX,
              startY,
            );

            // 3) временный лейаут с вставленным айтемом → читаем новый порядок
            const temp: Layout[] = base.concat([
              { i: spec.id, x: spot.x, y: spot.y, w: size.w, h: size.h },
            ]);
            const nextOrder = readingOrder(temp);

            // 4) фиксируем порядок и делаем стандартный reflow на все BP
            setItemsOrder(nextOrder);
            const nextLayouts = reflowAllByOrder(nextOrder);

            const widgets = buildWidgetsForBp(bp, nextLayouts, nextOrder);
            onItemsChange?.(widgets);
            onLayoutChange?.(
              {
                breakpoint: bp,
                cols: gridCols,
                rowHeight: currentRowHeight,
                items: widgets,
              },
              nextLayouts,
              {
                itemsOrder: nextOrder,
                itemsOrderTyped: asTypedOrder(nextOrder),
              },
            );
          },
          removeItem: removeItemById,
          setItemType: setItemTypeById,
          getAllLayouts: () => layouts,
          getCurrentLayout: () => {
            const bp = activeBpRef.current;
            const widgets = buildWidgetsForBp(bp, layouts, itemsOrder);
            return {
              breakpoint: bp,
              cols: cols[bp] ?? fallbackCols,
              rowHeight: currentRowHeight,
              items: widgets,
            };
          },
        },
      }),
      [
        removeItemById,
        setItemTypeById,
        itemsOrder,
        asTypedOrder,
        reflowAllByOrder,
        buildWidgetsForBp,
        onItemsChange,
        onLayoutChange,
        cols,
        currentRowHeight,
        getBaseLayoutForBp,
        layouts,
      ],
    );

    // --------------------------------------------------------------------------------
    // === Производные данные для рендера ===
    // Пояснение: единое место формирования того, что реально рендерим.

    // Готовим список виджетов для текущего BP (с фолбэками)
    const widgetsForCurrent = useMemo(
      () => buildWidgetsForBp(currentBreakpoint, layouts, itemsOrder),
      [currentBreakpoint, layouts, itemsOrder, buildWidgetsForBp],
    );

    return (
      <GridDNDContainer
        ref={containerRef}
        style={{
          ...containerStyle,
          ...(hasDragDelay && isDragDelayActive
            ? { userSelect: 'none' as const, touchAction: 'none' as const }
            : {}),
        }}
      >
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={breakpoints}
          cols={cols}
          rowHeight={currentRowHeight}
          margin={margin}
          containerPadding={containerPadding}
          isDraggable={effectiveIsDraggable}
          isResizable={isResizable}
          onLayoutChange={handleLayoutChange}
          onBreakpointChange={handleBreakpointChange}
          autoSize={autoSize}
          useCSSTransforms={useCSSTransforms}
          preventCollision={preventCollision}
          compactType={
            suppressCompaction
              ? null
              : smartCompact
              ? currentCompactType
              : compactType
          }
          allowOverlap={allowOverlap}
          isBounded={isBounded}
          draggableHandle={draggableHandle}
          draggableCancel={draggableCancel}
          resizeHandles={isResizable ? resizeHandles : []}
          maxRows={maxRows}
          transformScale={transformScale}
          onWidthChange={handleWidthChange}
          onDrag={handleDrag}
          onDragStart={handleDragStart}
          onDragStop={handleDragStop}
          style={{ background: 'transparent', ...gridStyle }}
        >
          {widgetsForCurrent.map((cfg) => (
            <GridItem
              key={cfg.id}
              $isDraggable={
                hasDragDelay
                  ? isDragDelayActive && activeItemId === cfg.id
                  : isDraggable
              }
            >
              <GridItemInner
                isDraggable={effectiveIsDraggable}
                className={draggableClassName}
              >
                {typeof children === 'function'
                  ? children(
                      cfg,
                      () => removeItemById(cfg.id),
                      (type) => setItemTypeById(cfg.id, type),
                    )
                  : children}
              </GridItemInner>
            </GridItem>
          ))}
        </ResponsiveGridLayout>
      </GridDNDContainer>
    );
  },
);

export const GridDND = Object.assign(GridDNDWithRef, {
  ItemWrapper,
});

GridDND.displayName = 'GridDND';
