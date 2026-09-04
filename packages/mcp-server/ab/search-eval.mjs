#!/usr/bin/env node
/**
 * Замер релевантности search_components: набор запросов → что обязано быть в
 * топ-3 выдачи. Нужен потому, что скоринг в searchComponents.ts — набор
 * подобранных вручную весов, и любая правка (новый источник хитов, новый
 * штраф, морфология) на глаз выглядит улучшением, а по факту может двигать
 * выдачу в обе стороны. Ровно так был отклонён дешёвый стемминг: те же 8 из
 * 12 попаданий, но с шумом вместо фичей таблицы.
 *
 * Это НЕ часть A/B-прогона агентов (ab/run.mjs) — отдельная быстрая проверка
 * без модели и без песочницы, секунда на прогон:
 *
 *   npm run mcp:search-eval            (из корня репозитория)
 *
 * Ожидания намеренно мягкие (топ-3, несколько допустимых ответов на запрос):
 * задача — ловить деградацию, а не фиксировать текущую выдачу до строчки.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  'dist',
);

const { resolveIndex } = await import(path.join(DIST, 'resolveIndex.js'));
const { searchComponents } = await import(
  path.join(DIST, 'tools/searchComponents.js')
);

/** [запрос, любое из этих имён должно попасть в топ-3]. Фича записывается как "Компонент/Фича". */
const CASES = [
  ['редактирование ячеек таблицы', ['TableCanvas', 'TableCanvas/Editing']],
  [
    'конфигурация группировки колонок',
    ['TableCanvas/ColumnsGrouping', 'ColumnsGroupingConfig'],
  ],
  ['GridCellKind renderCell ячейка текст CellContent', ['CellContent']],
  [
    'выпадающий список с поиском',
    ['Combobox', 'Select', 'FormSelect', 'Autocomplete'],
  ],
  ['модальное окно с шапкой и футером', ['ModalDF']],
  ['боковая выезжающая панель', ['DrawerDF', 'LeftPanel']],
  [
    'копирование и вставка как в excel',
    ['TableCanvas/CopyPasteFill', 'TableCanvas'],
  ],
  ['поле ввода даты в форме', ['FormDatePicker', 'DatePicker']],
  ['таблица внутри модального окна', ['TableCanvas', 'ModalDF']],
  [
    'формат числа в колонке таблицы',
    ['NumberFormatOptions', 'ContentFormat', 'TableCanvas.ContentFormat'],
  ],
  [
    'бесконечная прокрутка строк',
    ['TableCanvas/InfinityScroll', 'TableCanvas'],
  ],
  ['уведомление тост', ['Toast', 'Notification', 'ToastProvider']],
];

const label = (r) =>
  r.kind === 'feature' ? `${r.component}/${r.feature}` : r.name;

const { index } = resolveIndex();

let hits = 0;
const misses = [];

for (const [query, expected] of CASES) {
  const { results } = searchComponents(index, { query, limit: 3 });
  const top = results.map(label);
  if (top.some((t) => expected.includes(t))) hits += 1;
  else {
    misses.push(
      `${query}\n      ждали: ${expected.join(' | ')}\n      топ-3: ${
        top.join(', ') || '(пусто)'
      }`,
    );
  }
}

console.log(
  `search_components: попаданий в топ-3 — ${hits} из ${CASES.length}`,
);
if (misses.length > 0) {
  console.log(`\nпромахи:\n    ${misses.join('\n    ')}`);
}
