/**
 * Выпуск палитры таблицы для обёртки TableGlide из генератора дизайнера.
 *
 * Код генератора (code/*) — источник истины дизайн-системы, он не правится.
 * Этот скрипт — слой интеграции dais-ui: считает палитру через buildTableColors(),
 * закрывает null-ы (см. README «Открытые вопросы») временными значениями,
 * согласованными с дизайнером, и пишет готовый файл
 * packages/ui-kit/src/components/TableGlide/theming/table-colors.generated.ts.
 *
 * Состояния временных цветов считаются той же формулой (fillStates),
 * а не подбираются руками — модель «токен × состояние» сохраняется.
 *
 * Запуск: npm run emit (из generators/table-token-states).
 */
import { writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  THEMES,
  type StateName,
  type States,
  type ThemeName,
  buildTableColors,
  fillStates,
} from './code/table-token-states';
import {
  CELL,
  SEMANTIC,
  TABLE_COLORS,
  THEME_SETTINGS,
} from './code/table-token-sources';

const OUT_PATH = resolve(
  dirname(fileURLToPath(import.meta.url)),
  '../../packages/ui-kit/src/components/TableGlide/theming/table-colors.generated.ts',
);

// ─── База: честный расчёт генератора ───

const byTableKey = buildTableColors(
  TABLE_COLORS,
  SEMANTIC,
  THEME_SETTINGS,
  CELL,
);

// Комментарии к значениям, подставленным слоем интеграции: ключ → тема → причина.
const notes = new Map<string, Map<ThemeName, string>>();
const note = (key: string, theme: ThemeName, why: string) => {
  if (!notes.has(key)) notes.set(key, new Map());
  notes.get(key)!.set(theme, why);
};

/** Четыре состояния произвольного hex по правилам темы (та же формула, что у токенов). */
const statesFor = (hex: string, theme: ThemeName): States => {
  const setting = THEME_SETTINGS[theme];
  return fillStates(hex, setting.mode, {
    stepFactor: setting.stepFactor,
    cardHex: SEMANTIC.surfaceSolidCard.values[theme] ?? undefined,
    primaryHex: SEMANTIC.surfaceSolidPrimary.values[theme],
    selectionHex: SEMANTIC.surfaceTransparentAccent.values[theme],
  });
};

// ─── Временные заливки: группа из четырёх ключей состояния на один исходный цвет ───

type TempFillGroup = {
  /** Ключи таблицы по состояниям. */
  keys: Record<StateName, string>;
  /** Временный hex по темам. */
  values: Partial<Record<ThemeName, string>>;
  why: string;
};

const TEMP_FILLS: TempFillGroup[] = [
  {
    // data-yellow-light: в теме 0.79.1 ошибочно amber-150 #FFE4AE, решение дизайнера — amber-100.
    // В beta-темах токена нет, временные Amber/100 и Amber/950 (запрошены у владельцев темы).
    // В HC токена нет — текущее ручное значение таблицы.
    keys: {
      rest: 'bgEditableCell',
      hover: 'bgEditableCellHovered',
      active: 'bgEditableCellActive',
      hoverActive: 'bgEditableCellActiveHovered',
    },
    values: {
      light: '#FFF6E5',
      betaCoreLight: '#FFF5E7',
      betaCoreDark: '#211607',
      highContrastLight: '#F1DDB8',
    },
    why: 'временно: data-yellow-light (light amber-100; beta Amber/100|950; HC — текущее значение)',
  },
  {
    // data-blue-light: в beta-темах токена нет, временные Blue/100 и Blue/950.
    // В HC токена нет — текущее ручное значение TableCanvas.
    keys: {
      rest: 'editedSuccessfullyCellColor',
      hover: 'editedSuccessfullyCellHoverColor',
      active: 'editedSuccessfullyCellActiveColor',
      hoverActive: 'editedSuccessfullyCellActiveHoverColor',
    },
    values: {
      betaCoreLight: '#EFF8FF',
      betaCoreDark: '#0C1A24',
      highContrastLight: '#DAE8F1',
    },
    why: 'временно: data-blue-light (beta Blue/100|950; HC — текущее значение)',
  },
];

for (const group of TEMP_FILLS) {
  for (const [theme, hex] of Object.entries(group.values) as [
    ThemeName,
    string,
  ][]) {
    const states = statesFor(hex, theme);
    for (const state of ['rest', 'hover', 'active', 'hoverActive'] as const) {
      const key = group.keys[state];
      const value = states[state];
      if (value) {
        byTableKey[key][theme] = value;
        note(key, theme, group.why);
      }
    }
  }
}

// ─── Статические подстановки для одиночных ключей ───

// В highContrastLight нет surface-solid-primary → hover белого фона не считается;
// берём текущее ручное значение таблицы.
byTableKey.bgRowHovered.highContrastLight = '#E8EEF2';
note(
  'bgRowHovered',
  'highContrastLight',
  'временно: в HC нет surface-solid-primary, текущее ручное значение',
);

// В highContrastLight нет background-primary → затухание на сером берём из light.
byTableKey.fadeGray.highContrastLight = byTableKey.fadeGray.light;
note(
  'fadeGray',
  'highContrastLight',
  'временно: в HC нет background-primary, копия light',
);

// В tokens.ts HC нет surface-negative-minor и surface-info-minor → статусные ячейки из light.
for (const key of [
  'bgCellNegative',
  'bgCellNegativeHovered',
  'bgCellNegativeActive',
  'bgCellNegativeActiveHovered',
  'bgCellInfo',
  'bgCellInfoHovered',
  'bgCellInfoActive',
  'bgCellInfoActiveHovered',
]) {
  byTableKey[key].highContrastLight = byTableKey[key].light;
  note(
    key,
    'highContrastLight',
    'временно: в HC нет минорного токена статуса, копия light',
  );
}

// ─── Проверка полноты ───

const missing: string[] = [];
for (const [key, record] of Object.entries(byTableKey)) {
  for (const theme of THEMES) {
    if (!record[theme]) missing.push(`${key}.${theme}`);
  }
}
if (missing.length > 0) {
  throw new Error(`Не закрыты значения: ${missing.join(', ')}`);
}

// ─── Выпуск TS-файла ───

// Параметры формулы fillStates по темам — для рантайм-расчёта состояний
// произвольных цветов потребителя (themeOverride.bgCell статусных ячеек).
const fillParams = THEMES.map((theme) => {
  const setting = THEME_SETTINGS[theme];
  const stepFactor = setting.stepFactor ?? (setting.mode === 'dark' ? 1.2 : 1);
  const q = (v: string | null | undefined) => (v ? `'${v}'` : 'null');
  return `  ${theme}: { mode: '${setting.mode}', stepFactor: ${stepFactor}, cardHex: ${q(
    SEMANTIC.surfaceSolidCard.values[theme],
  )}, primaryHex: ${q(SEMANTIC.surfaceSolidPrimary.values[theme])}, selectionHex: ${q(
    SEMANTIC.surfaceTransparentAccent.values[theme],
  )} },`;
});

const lines: string[] = [];
lines.push('/**');
lines.push(
  ' * АВТОГЕНЕРИРОВАНО из generators/table-token-states — НЕ ПРАВИТЬ РУКАМИ.',
);
lines.push(
  ' * Перегенерация: cd generators/table-token-states && npm run emit',
);
lines.push(' *');
lines.push(
  ' * Модель: каждый цвет таблицы = семантический токен темы × состояние',
);
lines.push(
  ' * (rest / hover / active / hoverActive), расчёт в OKLCH на этапе генерации,',
);
lines.push(
  ' * здесь — только готовые непрозрачные hex. Подробности: generators/table-token-states/README.md.',
);
lines.push(
  ' * Значения с пометкой «временно» закрывают дыры тем (см. README, «Открытые вопросы»).',
);
lines.push(' */');
lines.push('');
lines.push(
  `export const TABLE_COLOR_THEMES = [${THEMES.map((t) => `'${t}'`).join(', ')}] as const;`,
);
lines.push('');
lines.push(
  'export type TableColorTheme = (typeof TABLE_COLOR_THEMES)[number];',
);
lines.push('');
lines.push('export const TABLE_STATE_COLORS = {');
for (const [key, record] of Object.entries(byTableKey)) {
  const entry = TABLE_COLORS[key];
  const source = entry ? SEMANTIC[entry.source].name : '?';
  const paints = entry?.paints ? ` — ${entry.paints}` : '';
  lines.push(`  /** ${source} · ${entry?.state ?? '?'}${paints} */`);
  lines.push(`  ${key}: {`);
  for (const theme of THEMES) {
    const why = notes.get(key)?.get(theme);
    lines.push(`    ${theme}: '${record[theme]}',${why ? ` // ${why}` : ''}`);
  }
  lines.push('  },');
}
lines.push('} as const;');
lines.push('');
lines.push('export type TableStateColorKey = keyof typeof TABLE_STATE_COLORS;');
lines.push('');
lines.push('/**');
lines.push(
  ' * Параметры формулы состояний по темам — вход для рантайм-fillStates',
);
lines.push(
  ' * (состояния произвольных цветов потребителя). cardHex — фон ячейки,',
);
lines.push(
  ' * primaryHex — луч для цвета без хромы, selectionHex — заливка выделения с альфой.',
);
lines.push(' */');
lines.push('export const TABLE_FILL_PARAMS = {');
lines.push(...fillParams);
lines.push('} as const;');
lines.push('');

writeFileSync(OUT_PATH, lines.join('\n'));

const tempCount = [...notes.values()].reduce((sum, m) => sum + m.size, 0);
// eslint-disable-next-line no-console
console.log(
  `table-colors.generated.ts: ${Object.keys(byTableKey).length} ключей × ${THEMES.length} тем, временных значений: ${tempCount}`,
);
