import type { DataEditorRef } from '@glideappsfinal/glide-data-grid';
import type { Ref, RefObject } from 'react';
import { useCallback, useRef } from 'react';

import { dispatchCanvasPortalHover } from '../lib/canvas';
import type {
  ColumnGlideLast,
  GlideProps,
  ObjectForExtending,
  Theme,
} from '../types';

// ─────────────────────────────────────────────────────────────────────────────
// Типы
// ─────────────────────────────────────────────────────────────────────────────

type OnItemHovered = NonNullable<GlideProps['onItemHovered']>;

export interface UseItemHoveredHandlerParams<R extends ObjectForExtending, SR> {
  /** Адаптированные колонки (ColumnGlideLast), по ним читаем cellTooltip / headerCellTooltip. */
  columnsLast: ColumnGlideLast<R, SR>[];
  /** Массив строк таблицы. */
  rows: readonly R[];
  /** Контексты (ctxs), пробрасываемые в tooltipContext. */
  ctxs: ObjectForExtending;
  /** Ref на DataEditor (для getBounds). */
  refTable?: Ref<DataEditorRef>;
  /** Тема Glide (пробрасывается в tooltipContext). */
  theme: Theme;
  /** Ref на DOM-контейнер таблицы — события portal hover диспатчатся на него. */
  portalEventTargetRef?: RefObject<HTMLElement | null>;
  /** Внешний onItemHovered из restProps (если передан потребителем компонента). */
  externalOnItemHovered?: OnItemHovered;
  /**
   * Колбэк трекинга строки под курсором (hoverEffects.row). Вызывается на
   * каждое hover-событие: для `kind === 'cell'` — с индексом строки, для
   * остальных (header, group-header, out-of-bounds — включая уход мыши с
   * таблицы) — с undefined (сброс). Дедупликация повторных значений — на
   * стороне вызывающего (setState с prev-проверкой). Не передан — фича
   * выключена, ветка не выполняется.
   */
  onHoverRowChange?: (rowInd: number | undefined) => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// Хук
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Возвращает обработчик `onItemHovered` для GlideDataEditor — ЕДИНЫЙ агрегатор
 * всей hover-логики таблицы. Новые ветки, реагирующие на движение мыши,
 * добавляются сюда, а не обёртками вокруг возвращаемой функции.
 *
 * ## Зачем
 *
 * Glide вызывает `onItemHovered` при каждом движении мыши по таблице.
 * `args.kind` сообщает, над чем мышь: `'cell'`, `'header'`, `'group-header'`, `'out-of-bounds'`.
 *
 * Ветки обработчика (по порядку):
 * 1. Внешний `onItemHovered` потребителя (`externalOnItemHovered`).
 * 2. Трекинг строки для hoverEffects.row (`onHoverRowChange`): `'cell'` →
 *    индекс строки, всё остальное → undefined (сброс подсветки).
 * 3. Колоночные тултипы:
 *    - `'cell'`   → проверяет `column.cellTooltip`        → диспатчит show/hide
 *    - `'header'` → проверяет `column.headerCellTooltip`  → диспатчит show/hide
 *    - остальное  → диспатчит hide (скрыть текущий тултип)
 *
 * Canvas-ноды внутри ячеек обрабатываются отдельно через CellCanvasRoot.
 *
 * ## Поток данных
 *
 * 1. Мышь наводится на ячейку/шапку → Glide вызывает `onItemHovered`
 * 2. Проверяем: есть ли у колонки соответствующий конфиг? Если нет — скрываем тултип.
 * 3. Получаем bounds ячейки через `dataEditorRef.getBounds()`
 * 4. Диспатчим `CustomEvent` через `dispatchCanvasPortalHover()` на контейнер таблицы
 * 5. `CanvasTooltipOverlay` (через `usePortalHover`) ловит событие и показывает `<Tooltip>`
 *
 * ## ВАЖНО: порядок пропсов в JSX
 *
 * `onItemHovered` **обязательно передаётся ПОСЛЕ `{...restProps}`**:
 *
 * ```tsx
 * <StyledGlideDataEditor
 *   {...restProps}
 *   onItemHovered={onItemHovered}  // ← ПОСЛЕ restProps
 * />
 * ```
 *
 * Причина: в JSX последний проп с одинаковым именем перезаписывает предыдущий.
 * Если `restProps` содержит свой `onItemHovered`, то при размещении нашего
 * обработчика ДО `{...restProps}` он будет перезаписан внешним, и тултипы
 * перестанут скрываться при переходе между ячейками.
 * Внешний `onItemHovered` при этом не теряется — мы вызываем его внутри
 * нашего обработчика первой строкой (`externalOnItemHovered?.(args)`).
 */
export function useItemHoveredHandler<R extends ObjectForExtending, SR>(
  params: UseItemHoveredHandlerParams<R, SR>,
  dataEditorRef: RefObject<DataEditorRef | null>
): OnItemHovered {
  const {
    columnsLast,
    rows,
    ctxs,
    refTable,
    theme,
    portalEventTargetRef,
    externalOnItemHovered,
    onHoverRowChange,
  } = params;

  // Хранит id текущего hovered-элемента (колоночного тултипа), чтобы:
  // - не диспатчить show повторно при движении мыши внутри той же области
  // - при hide отправить событие с правильным originId
  const lastHoveredRef = useRef<string | null>(null);

  /**
   * Диспатчит hide и сбрасывает реф. `immediate=true` — без 400мс debounce,
   * потому что Glide даёт точное событие перехода между ячейками.
   *
   * Два режима:
   * - `lastHoveredRef` задан → скрываем конкретный тултип (колоночный, созданный onItemHovered).
   * - `lastHoveredRef` пуст → диспатчим hide **без originId**, что скрывает ЛЮБОЙ тултип
   *   (в т.ч. от canvas-нод, которые не трекаются lastHoveredRef).
   *   `usePortalHover` пропускает hide без originId через stale-проверку,
   *   потому что условие `hideOrigin && currentNodeIdRef && hideOrigin !== currentNodeIdRef`
   *   не срабатывает при `hideOrigin === null`.
   */
  const hideCurrentTooltip = useCallback((portalTarget: EventTarget | null) => {
    const currentOrigin = lastHoveredRef.current;
    lastHoveredRef.current = null;

    dispatchCanvasPortalHover(
      {
        visible: false,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        source: 'cell',
        originId: currentOrigin ?? undefined,
        nodeId: currentOrigin ?? undefined,
      },
      portalTarget,
      true // immediate — без debounce
    );
  }, []);

  // ─── Основной обработчик ───────────────────────────────────────────────────

  const onItemHovered = useCallback<OnItemHovered>(
    (args) => {
      // Вызываем внешний обработчик, если потребитель передал свой onItemHovered.
      externalOnItemHovered?.(args);

      // Трекинг строки под курсором (hoverEffects.row): cell → строка,
      // не-cell (header/group-header/out-of-bounds) → сброс.
      onHoverRowChange?.(args.kind === 'cell' ? args.location[1] : undefined);

      const portalTarget = portalEventTargetRef?.current ?? null;

      // Общие данные из location (переиспользуются в header и cell)
      const colInd = args.location?.[0] as number | undefined;
      const column = colInd != null ? columnsLast[colInd] : undefined;

      // ─── header: тултип для шапки колонки ───
      if (args.kind === 'header') {
        // У колонки нет headerCellTooltip → скрываем текущий тултип и выходим.
        if (!column?.headerCellTooltip) {
          hideCurrentTooltip(portalTarget);
          return;
        }

        const headerId = `header-tooltip-${colInd}`;
        const isSameHeader = lastHoveredRef.current === headerId;

        // Скрываем предыдущий тултип только при переходе на ДРУГОЙ header.
        // При движении в пределах того же header — не скрываем (избегаем hide→show на каждый mousemove).
        if (!isSameHeader) {
          hideCurrentTooltip(portalTarget);
        }

        // Получаем координаты шапки. rowIndex = -1 означает header в Glide API.
        const bounds = dataEditorRef.current?.getBounds(colInd!, -1);
        if (!bounds) return;

        lastHoveredRef.current = headerId;

        // priority: 0 — колоночный тултип уступает canvas-нодовому (priority: 1).
        // Диспатчим на каждый mousemove, чтобы usePortalHover мог восстановить
        // колоночный тултип после скрытия canvas-нодового.
        dispatchCanvasPortalHover(
          {
            visible: true,
            x: bounds.x,
            y: bounds.y,
            width: bounds.width,
            height: bounds.height,
            source: 'header',
            originId: headerId,
            nodeId: headerId,
            priority: 0,
            tooltipContext: {
              column,
              ctxs,
              refTable,
              colInd,
              theme,
            },
          },
          portalTarget
        );
        return;
      }

      // ─── cell: тултип для ячейки данных ───
      if (args.kind === 'cell') {
        const rowInd = args.location[1];
        const row = rows[rowInd];

        // У колонки нет cellTooltip или строка/колонка не найдены → скрываем.
        if (!column || !row || !column.cellTooltip) {
          hideCurrentTooltip(portalTarget);
          return;
        }

        const cellId = `col-tooltip-${colInd}-${rowInd}`;
        const isSameCell = lastHoveredRef.current === cellId;

        // Скрываем предыдущий тултип только при переходе на ДРУГУЮ ячейку.
        if (!isSameCell) {
          hideCurrentTooltip(portalTarget);
        }

        // Получаем координаты ячейки.
        const bounds = dataEditorRef.current?.getBounds(colInd!, rowInd);
        if (!bounds) return;

        lastHoveredRef.current = cellId;

        // priority: 0 — колоночный тултип уступает canvas-нодовому (priority: 1).
        dispatchCanvasPortalHover(
          {
            visible: true,
            x: bounds.x,
            y: bounds.y,
            width: bounds.width,
            height: bounds.height,
            source: 'cell',
            originId: cellId,
            nodeId: cellId,
            priority: 0,
            tooltipContext: {
              column,
              row,
              ctxs,
              refTable,
              colInd,
              rowInd,
              theme,
            },
          },
          portalTarget
        );
        return;
      }

      // ─── group-header, out-of-bounds — скрываем тултип ───
      hideCurrentTooltip(portalTarget);
    },
    [
      columnsLast,
      rows,
      ctxs,
      refTable,
      theme,
      portalEventTargetRef,
      externalOnItemHovered,
      onHoverRowChange,
      hideCurrentTooltip,
      dataEditorRef,
    ]
  );

  return onItemHovered;
}
