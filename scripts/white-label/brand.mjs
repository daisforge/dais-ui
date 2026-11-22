/**
 * Общие правила white-label: как исходный бренд заменяется на зеркальные имена
 * и как проверяется, что от него ничего не осталось.
 *
 * Используется двумя скриптами, чтобы они гарантированно обрабатывали имена
 * одинаково:
 *   - packages/mcp-server/scripts/build-alias-package.mjs — зеркало MCP-сервера;
 *   - scripts/white-label/rename-artifact.mjs — переименование готовых сборок
 *     (tarball библиотеки, статика Storybook).
 *
 * Модуль ничего не делает при импорте и не читает окружение на верхнем уровне:
 * ошибки бросаются как BrandError, а как на них реагировать (process.exit,
 * сообщение) решает вызывающий скрипт.
 *
 * Файл копируется в npm-пакет Storybook (bin/) вместе с rename-artifact.mjs,
 * поэтому импортировать здесь можно только встроенные модули Node.
 */
import fs from 'node:fs';
import path from 'node:path';

export class BrandError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BrandError';
  }
}

/** Имя пакета npm: со scope или без. */
export const NPM_NAME_RE =
  /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;

/** Любая форма исходного бренда, которой не должно остаться в результате. */
export const BRAND_RE = /dais/i;

/**
 * Внешние пакеты под scope исходного бренда, у которых нет зеркала: сборка
 * ставит их из npm под собственным именем, поэтому имя не заменяется и
 * проверкой на остатки бренда не считается. Подстрока покрывает и подпути
 * ('…/dist/index.css'), и соседние пакеты ('-cells', '-source').
 *
 * Ни одно правило замены их не задевает: '@daisforge/ui' требует '/ui' сразу
 * после scope. Добавлять сюда пакет можно только если у него действительно
 * нет зеркала — иначе его нужно переименовывать правилом в createReplacements.
 */
export const PRESERVED_PACKAGE_NAMES = ['@daisforge/glide-data-grid'];

/**
 * Читает и валидирует зеркальное имя пакета из окружения.
 * @param {string} varName
 * @param {Record<string, string | undefined>} [env]
 */
export function readEnvName(varName, env = process.env) {
  const value = (env[varName] ?? '').trim();
  if (!value) {
    throw new BrandError(
      `Не задана переменная окружения ${varName}. Она приходит из GitHub Secrets ` +
        `(там же, где NPM_TOKEN); локально передайте её явно перед командой.`,
    );
  }
  if (!NPM_NAME_RE.test(value)) {
    throw new BrandError(`${varName}="${value}" не похоже на имя npm-пакета.`);
  }
  // Иначе финальный guard (греп на /dais/i) упадёт на самом же новом имени,
  // и причина будет выглядеть как поломка замены, хотя дело в имени.
  if (BRAND_RE.test(value)) {
    throw new BrandError(
      `${varName}="${value}" содержит "dais" — зеркальное имя не должно ` +
        `наследовать исходный бренд.`,
    );
  }
  return value;
}

/** '@acme/ds-mcp' → 'acme-ds-mcp'. Годится и как имя bin, и как схема URI. */
export function toFlatName(packageName) {
  return packageName.replace(/^@/, '').replace(/\//g, '-');
}

/** Форма имени пакета внутри регулярки в коде: '@daisforge\/ui'. */
export const escapeForRegexLiteral = (name) => name.replace(/\//g, '\\/');

/**
 * Таблица замен: пары [исходная строка, зеркальная строка].
 *
 * Порядок обязателен: длинные токены первыми. Если сначала заменить
 * '@daisforge/ui', то '@daisforge/ui-mcp' превратится в '<ALT_LIB>-mcp' —
 * то есть имя MCP-пакета склеится из имени библиотеки.
 * Правило на '@daisforge/ui' покрывает и подпути ('/icons', '/tokens',
 * '/components/…'): все они начинаются с '@daisforge/ui'.
 *
 * Список закрытый и проверяется гардом (findBrandLeftovers): если в артефактах
 * появится новая форма бренда, которой здесь нет, сборка упадёт с указанием
 * файла и строки — тогда сюда добавляется правило.
 *
 * @param {{ lib: string, mcp: string }} names
 * @returns {Array<[string, string]>}
 */
export function createReplacements({ lib, mcp }) {
  const mcpBin = toFlatName(mcp);
  const uriScheme = toFlatName(lib);
  return [
    ['@daisforge/ui-mcp', mcp],
    [escapeForRegexLiteral('@daisforge/ui-mcp'), escapeForRegexLiteral(mcp)],
    ['daisforge-ui-mcp', mcpBin],
    ['daisforge-ui://', `${uriScheme}://`],
    ['@daisforge/ui', lib],
    [escapeForRegexLiteral('@daisforge/ui'), escapeForRegexLiteral(lib)],
    ['daisforge-ui', uriScheme],
    // Упоминание монорепозитория в комментарии resolveIndex.ts.
    ['dais/ui', uriScheme],
    // Стори-папка packages/storybook/src/stories/AiChatDAIS — не публичный API
    // библиотеки, а имя файла, попадающее в sourceFile/displayName примеров типа
    // 'usage'. Эти пути и так не резолвятся за пределами монорепо, но бренд в них
    // виден, поэтому имя нейтрализуется.
    ['AiChatDAIS', 'AiChatAssistant'],
    // Внутренние идентификаторы библиотеки и Storybook. Определяются и
    // используются внутри одного и того же бандла, поэтому согласованная замена
    // их не ломает:
    //   - префикс CSS-классов уведомлений (styles/notificationClassNames.ts);
    ['dais-ui__', `${uriScheme}__`],
    //   - описание Symbol в Dropdown — на поведение не влияет;
    ['daisDropdownOriginalItem', 'dropdownOriginalItem'],
    //   - служебный хук скриншот-тестов в декораторе Storybook.
    ['daisScreenshotRepaint', 'screenshotRepaint'],
  ];
}

/**
 * @param {string} text
 * @param {Array<[string, string]>} replacements
 */
export function applyReplacements(text, replacements) {
  return replacements.reduce(
    (acc, [from, to]) => acc.split(from).join(to),
    text,
  );
}

/** Все файлы каталога рекурсивно (абсолютные пути). */
export function walkFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkFiles(full));
    else out.push(full);
  }
  return out;
}

/**
 * Ищет остатки исходного бренда в содержимом файлов.
 * @param {string} dir
 * @param {{ filter?: (file: string) => boolean, ignore?: string[], ignorePatterns?: RegExp[] }} [options]
 *   filter — какие файлы читать (по умолчанию все); ignore — точные строки,
 *   которые совпадают с /dais/i, но остаются осознанно; ignorePatterns — то же
 *   регулярками (с флагом g). Вырезаются из строки перед проверкой, так что
 *   настоящий бренд в той же строке всё равно будет найден.
 * @returns {string[]} строки вида 'относительный/путь:строка: текст'
 */
export function findBrandLeftovers(
  dir,
  { filter = () => true, ignore = [], ignorePatterns = [] } = {},
) {
  const strip = (line) =>
    ignore.reduce(
      (acc, token) => acc.split(token).join(''),
      ignorePatterns.reduce((acc, re) => acc.replace(re, ''), line),
    );
  const hits = [];
  for (const file of walkFiles(dir)) {
    if (!filter(file)) continue;
    const text = fs.readFileSync(file, 'utf8');
    if (!BRAND_RE.test(text)) continue;
    text.split('\n').forEach((line, i) => {
      if (BRAND_RE.test(strip(line))) {
        hits.push(
          `${path.relative(dir, file)}:${i + 1}: ${line.trim().slice(0, 160)}`,
        );
      }
    });
  }
  return hits;
}

/** Первые `limit` совпадений и хвост «… и ещё N» для сообщения об ошибке. */
export function formatHits(hits, limit = 20) {
  return (
    `${hits.slice(0, limit).join('\n')}` +
    `${hits.length > limit ? `\n… и ещё ${hits.length - limit}` : ''}`
  );
}
