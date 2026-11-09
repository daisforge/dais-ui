import { writeFileSync } from 'node:fs';
import {
  THEMES,
  buildTableColors,
  deriveAllStates,
} from './table-token-states';
import {
  CELL,
  SEMANTIC,
  TABLE_COLORS,
  THEME_SETTINGS,
} from './table-token-sources';
const bySemanticToken = deriveAllStates(SEMANTIC, THEME_SETTINGS, CELL);
const byTableKey = buildTableColors(
  TABLE_COLORS,
  SEMANTIC,
  THEME_SETTINGS,
  CELL,
);
let total = 0,
  nulls = 0;
for (const rec of Object.values(byTableKey))
  for (const t of THEMES) {
    total++;
    if (rec[t] == null) nulls++;
  }
writeFileSync(
  process.argv[2],
  JSON.stringify(
    {
      generated:
        '2026-10-19, table-token-states.ts v1.3 (модель «токен + состояние»; hover2 для выбранной строки; контрастная тема из пакета 0.1.2; имена data-*-on-light в beta и контрастной) + table-token-sources.ts',
      themes: THEMES,
      note: 'null не ожидается: у всех 19 токенов есть значения в шести темах (проверено тестом). В beta core и контрастной data-yellow-light и data-blue-light называются data-*-on-light — поле names у токена',
      bySemanticToken,
      byTableKey,
    },
    null,
    2,
  ) + '\n',
);
type Src = {
  name: string;
  names?: Record<string, string | undefined>;
  values: Record<string, string | null | undefined>;
  hover?: Record<string, string | null | undefined>;
  active?: Record<string, string | null | undefined>;
};
const S = SEMANTIC as Record<string, Src>;
const hx = (v: string | null | undefined) => (v ? `\`${v}\`` : '—');
const themeHead = `| ${THEMES.join(' | ')} |`;
const themeSep = `|${THEMES.map(() => '---').join('|')}|`;
let md = `# Цвета таблицы — исходные токены, карта и результат по шести темам

Сгенерировано 19.10.2026 из \`code/table-token-sources.ts\` генератором \`code/table-token-states.ts\` (v1.3). Темы: light и dark — \`@salutejs/sdds-themes\` 0.79.1 (значения этих токенов в 0.83.0 те же); betaCoreLight и betaCoreDark — \`@salutejs-ds/sdds_finai_beta_core\` 0.1.0; highContrastLight и highContrastDark — \`@salutejs-ds/sdds_finai_high_contrast\` 0.1.2. В beta core и контрастной токены \`data-yellow-light\` и \`data-blue-light\` называются \`data-*-on-light\`, в таблице раздела 1 это указано рядом с именем.

Как читать. Разработчикам нужны две вещи: **вход** — семантические токены темы с их hex (раздел 1), и **карта** — какой токен и в каком состоянии стоит за каждым ключом таблицы (раздел 2). Состояния: rest — токен как есть; hover — +1δ по лучу OKLCH; hover2 — ещё +1δ по тому же лучу (+2δ от покоя), выбранная строка под курсором; active — выделение, \`surface-transparent-accent\` наложен на цвет покоя (как компонент Selection Area в макете «Выделение ячеек»); hoverActive — +1δ по лучу от цвета выделения (hover на выделенных ячейках показывается; в макете «Выделение ячеек» сказано обратное, это ошибка макета, правится). Всё, у чего состояние не rest, генератор вычисляет; вычисленные значения приведены в разделе 3 для сверки.

## 1. Вход: семантические токены и их hex в каждой теме

Это единственные цвета, которые задаются руками. Токены с состоянием из темы (текст) приведены с их собственными hover и active.

| Токен ${themeHead}
|---${themeSep}
`;
for (const s of Object.values(S)) {
  const alias = s.names
    ? ` (beta, контрастная: \`${[
        ...new Set(Object.values(s.names).filter(Boolean)),
      ].join('`, `')}\`)`
    : '';
  md += `| \`${s.name}\`${alias} | ${THEMES.map((t) => hx(s.values[t])).join(
    ' | ',
  )} |\n`;
  if (s.hover)
    md += `| \`${s.name}-hover\` (из темы) | ${THEMES.map((t) =>
      hx(s.hover?.[t]),
    ).join(' | ')} |\n`;
  if (s.active)
    md += `| \`${s.name}-active\` (из темы) | ${THEMES.map((t) =>
      hx(s.active?.[t]),
    ).join(' | ')} |\n`;
}
md += `
## 2. Карта: ключ таблицы → семантический токен + состояние

hex здесь нет намеренно: rest — токен как есть, hover — +1δ по лучу, hover2 — +2δ по лучу, active — наложение выделения, hoverActive — +1δ по лучу от цвета выделения; для text и outline состояния берутся из темы. Как ключи складываются в выбранную строку (highlightActiveType = 'row') — комментарий перед \`TABLE_COLORS\` в \`code/table-token-sources.ts\` и README, раздел «Как подключить».

| Ключ в коде | Что красит | Семантический токен | Состояние |
|---|---|---|---|
`;
for (const [key, e] of Object.entries(TABLE_COLORS))
  md += `| \`${key}\` | ${e.paints ?? ''} | \`${S[e.source].name}\` | ${
    e.state
  } |\n`;
md += `
## 3. Результат для сверки: hex ключа таблицы в каждой теме

Выход генератора при δ = 0,025, в тёмных темах × 1,2; выделение — \`surface-transparent-accent\` на подложке (12 % в светлых темах, 20 % в тёмных).

| Ключ в коде | Токен · состояние ${themeHead}
|---|---${themeSep}
`;
for (const [key, e] of Object.entries(TABLE_COLORS))
  md += `| \`${key}\` | \`${S[e.source].name}\` · ${e.state} | ${THEMES.map(
    (t) => hx(byTableKey[key][t]),
  ).join(' | ')} |\n`;
md += `
## 4. Пять состояний каждого семантического токена

Для ячеек, окрашенных потребителем, и для любых новых ключей: состояния токена целиком.

| Токен | Состояние ${themeHead}
|---|---${themeSep}
`;
for (const [k, st] of Object.entries(bySemanticToken))
  for (const state of [
    'rest',
    'hover',
    'hover2',
    'active',
    'hoverActive',
  ] as const)
    md += `| \`${S[k].name}\` | ${state} | ${THEMES.map((t) =>
      hx(st[t]?.[state]),
    ).join(' | ')} |\n`;
writeFileSync(process.argv[3], md);
let csvTokens = 'token,' + THEMES.join(',') + '\n';
for (const s of Object.values(S)) {
  csvTokens +=
    [s.name, ...THEMES.map((t) => s.values[t] ?? '')].join(',') + '\n';
  if (s.hover)
    csvTokens +=
      [s.name + '-hover', ...THEMES.map((t) => s.hover?.[t] ?? '')].join(',') +
      '\n';
  if (s.active)
    csvTokens +=
      [s.name + '-active', ...THEMES.map((t) => s.active?.[t] ?? '')].join(
        ',',
      ) + '\n';
}
writeFileSync(process.argv[4], csvTokens);
let csvMap =
  'key,paints,token,state,' + THEMES.map((t) => `result_${t}`).join(',') + '\n';
for (const [key, e] of Object.entries(TABLE_COLORS))
  csvMap +=
    [
      key,
      JSON.stringify(e.paints ?? ''),
      S[e.source].name,
      e.state,
      ...THEMES.map((t) => byTableKey[key][t] ?? ''),
    ].join(',') + '\n';
writeFileSync(process.argv[5], csvMap);
console.log(
  `table keys: ${Object.keys(byTableKey).length}, semantic tokens: ${
    Object.keys(bySemanticToken).length
  }, cells: ${total}, filled: ${total - nulls}, null: ${nulls}`,
);
