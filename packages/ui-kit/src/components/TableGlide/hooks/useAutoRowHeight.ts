import type {
  Rectangle,
  RowHeightCallback,
} from '@glideappsfinal/glide-data-grid';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { flushSync } from 'react-dom';

import type { CellHeightReporter } from '../cellRenderer';
import { subscribeFontsLoaded } from '../lib/canvas/hooks/fontsLoaded';
import { anchorShiftOf } from './autoRowHeight/anchorShift';
import {
  AutoRowHeightStore,
  MAX_AUTO_ROW_HEIGHT,
  sameIds,
} from './autoRowHeight/AutoRowHeightStore';
import { useRowHeightChangesCheck } from './autoRowHeight/useRowHeightChangesCheck';

/** Строк в окне до первого сообщения glide о видимой области */
const INITIAL_VISIBLE_ROWS = 50;

/** Что накопилось после показанного `heightOf`: строки с новой высотой и признак устаревших замеров */
interface PendingChanges {
  from: number;
  to: number;
  /** Замеры помечены устаревшими (догрузка шрифта): следующий `heightOf` идёт без подсказки */
  stale: boolean;
}

const NO_CHANGES: PendingChanges = { from: Infinity, to: -1, stale: false };

interface Params<R extends object> {
  enabled: boolean;
  rows: readonly R[];
  columns: readonly { id: string; renderCell?: unknown }[];
  /** Тема таблицы (шрифты, отступы; меняется вместе с `rowSize`) */
  theme?: object;
  /** Потолок высоты строки, по умолчанию `MAX_AUTO_ROW_HEIGHT` */
  maxHeight?: number;
  /** Высота строки по размеру строк: ниже строка не бывает */
  baseHeight: number;
}

/**
 * Высота строк по содержимому ячеек (`rowHeight: 'auto'`).
 *
 * Отдельного замера нет: ячейка сообщает высоту содержимого, когда glide её рисует
 * (`reporterFor`), а glide рисует только видимые ячейки. Строку, которую ещё не
 * рисовали, glide сначала рисует с базовой высотой; коммит замеров рендерится синхронно
 * (`flushSync`), и таблица перерисовывается до показа кадра — базовая высота не мелькает.
 * Смена темы или рендера колонки и загрузка любого шрифта помечают замеры устаревшими:
 * ячейки перемеряются при следующей отрисовке, до этого строки держат прежнюю высоту.
 */
export function useAutoRowHeight<R extends object>({
  enabled,
  rows,
  columns,
  theme,
  maxHeight = MAX_AUTO_ROW_HEIGHT,
  baseHeight,
}: Params<R>) {
  const [version, setVersion] = useState(0);
  const anchorShiftRef = useRef(0);
  // Объект заменяется целиком: эффект после показа сбрасывает его, только если с рендера ничего не добавилось
  const pendingRef = useRef<PendingChanges>(NO_CHANGES);
  const [store] = useState(() => {
    const created = new AutoRowHeightStore<R>((changes) => {
      anchorShiftRef.current += anchorShiftOf(changes, created.visibleRows);
      let { from, to } = pendingRef.current;
      changes.forEach(({ rowIndex }) => {
        from = Math.min(from, rowIndex);
        to = Math.max(to, rowIndex);
      });
      pendingRef.current = { ...pendingRef.current, from, to };
      flushSync(() => setVersion((value) => value + 1));
    });
    created.setVisibleRows(0, INITIAL_VISIBLE_ROWS);
    return created;
  });

  // Шрифт у Canvas.Text может быть свой, не из темы: ждём загрузки любого семейства. Пропсы glide при
  // этом не меняются, а ячейки перемеряются только при отрисовке, поэтому следующий heightOf идёт
  // без подсказки, и glide перерисовывает экран целиком
  useEffect(() => {
    if (!enabled) return undefined;
    return subscribeFontsLoaded(() => {
      store.invalidate();
      pendingRef.current = { ...pendingRef.current, stale: true };
      setVersion((value) => value + 1);
    });
  }, [enabled, store]);

  // Сверяем во время рендера: glide рисует ячейки раньше эффектов TableGlide
  const prevRef = useRef({ theme, columns });
  const prev = prevRef.current;
  if (prev.theme !== theme) {
    store.invalidate();
  } else if (prev.columns !== columns) {
    const renderCellOf = new Map(prev.columns.map((c) => [c.id, c.renderCell]));
    store.invalidate(
      columns
        .filter(
          (c) =>
            renderCellOf.has(c.id) && renderCellOf.get(c.id) !== c.renderCell,
        )
        .map((c) => c.id),
    );
  }
  prevRef.current = { theme, columns };

  // Смена ширины даёт новый массив колонок с теми же id: ссылку не меняем, иначе
  // glide заново пересчитает позиции всех строк
  const columnIdsRef = useRef<readonly string[]>([]);
  const columnIds = useMemo(() => {
    const ids = columns.map((column) => column.id);
    if (sameIds(ids, columnIdsRef.current)) return columnIdsRef.current;
    columnIdsRef.current = ids;
    return ids;
  }, [columns]);

  store.setMaxHeight(maxHeight);
  store.setBaseHeight(baseHeight);
  store.setColumns(columnIds);

  // Показанной считается версия с теми же строками, базовой высотой, колонками и потолком
  const depsToken = useMemo(
    () => [rows, baseHeight, columnIds, maxHeight] as const,
    [rows, baseHeight, columnIds, maxHeight],
  );

  // Glide зовёт для всех строк при каждой смене высот: найденная высота читается из индекса store.
  // Если с показанной версии изменились только высоты строк, функция несёт `changes`, и glide спросит
  // и перерисует лишь эти строки; иначе пересчитает и перерисует всё
  const versionRef = useRef(0);
  const renderedRef = useRef(pendingRef.current);
  const shownRef = useRef<{ version: number; token: unknown }>();
  const heightOf = useMemo<RowHeightCallback>(() => {
    versionRef.current += 1;
    const read = (rowIndex: number) =>
      store.heightAt(rows, rowIndex) ?? baseHeight;
    const shown = shownRef.current;
    const pending = pendingRef.current;
    renderedRef.current = pending;
    return Object.assign(read, {
      version: versionRef.current,
      changes:
        shown !== undefined && shown.token === depsToken && !pending.stale
          ? {
              previousVersion: shown.version,
              from: pending.from,
              to: pending.to,
            }
          : undefined,
    });
    // version: высоты в store изменились, glide должен спросить их заново
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store, rows, baseHeight, depsToken, version]);

  useRowHeightChangesCheck(heightOf, enabled ? rows.length : 0);

  useLayoutEffect(() => {
    shownRef.current = { version: heightOf.version ?? 0, token: depsToken };
    // Замеры и инвалидации, пришедшие после рендера, останутся в следующей подсказке
    if (pendingRef.current === renderedRef.current) {
      pendingRef.current = NO_CHANGES;
    }
  }, [heightOf, depsToken]);

  const trackVisibleRegion = useCallback(
    (range: Rectangle) => store.setVisibleRows(range.y, range.y + range.height),
    [store]
  );

  const reporterFor = useCallback(
    (
      row: R,
      rowIndex: number,
      columnId: string,
      isSpan: boolean,
    ): CellHeightReporter => {
      store.setColumns(columnIds);
      return store.reporter(row, rowIndex, columnId, isSpan);
    },
    [store, columnIds],
  );

  /** Накопленный с прошлого вызова сдвиг прокрутки, который держит видимое содержимое на месте */
  const takeAnchorShift = useCallback(() => {
    const shift = anchorShiftRef.current;
    anchorShiftRef.current = 0;
    return shift;
  }, []);

  return useMemo(
    () => ({
      heightOf,
      trackVisibleRegion,
      reporterFor,
      takeAnchorShift,
      version,
    }),
    [heightOf, trackVisibleRegion, reporterFor, takeAnchorShift, version],
  );
}
