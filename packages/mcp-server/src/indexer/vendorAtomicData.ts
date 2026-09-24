/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-classes-per-file -- два маркерных класса ошибок (см. ниже) дешевле отдельного модуля ради них */
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const VENDOR_DIR = path.resolve(__dirname, '../../vendor/atomic-mcp-data');
const REPO_ROOT = path.resolve(__dirname, '../../../..');

/**
 * Тот же CDN, поверх которого работает официальный @salutejs/sdds-mcp (в их
 * npm-пакете лежит только dist/, данных нет — `MANIFEST_BASE_URL` в их
 * dist/config.js указывает ровно сюда). То есть это поддерживаемый канал
 * дистрибуции, а не скрейпинг внутреннего артефакта их сборки.
 */
const DEFAULT_BASE_URL = 'https://plasma.sberdevices.ru/mcp';
const DEFAULT_LIB = 'sdds-finai';
const ATOM_PACKAGE = '@salutejs/sdds-finai';
const LATEST = 'latest';

/** Секции с паспортами компонентов — их читают mergeAtomicData/vendorUsageExamples. */
const COMPONENT_SECTIONS = new Set(['components', 'beta']);

const CONCURRENCY = 8;
const RETRIES = 3;

type OnMissing = 'keep' | 'latest' | 'fail';

interface Options {
  source?: string;
  lib: string;
  version?: string;
  baseUrl: string;
  onMissing: OnMissing;
  dryRun: boolean;
  force: boolean;
}

interface AtomicManifest {
  version: string;
  builtAt?: string;
  paths: Record<string, string>;
}

interface IndexEntry {
  name: string;
  href: string;
}

/** Файл в стейджинге: путь относительно корня снэпшота + уже сериализованный текст. */
interface StagedFile {
  relPath: string;
  text: string;
}

// ───────────────────────────── аргументы ─────────────────────────────

function readFlag(argv: string[], name: string): string | undefined {
  const withEq = argv.find((a) => a.startsWith(`--${name}=`));
  if (withEq) return withEq.slice(name.length + 3);
  const idx = argv.indexOf(`--${name}`);
  if (idx === -1) return undefined;
  const value = argv[idx + 1];
  if (!value || value.startsWith('--')) {
    throw new Error(`Флаг --${name} требует значение.`);
  }
  return value;
}

function parseOptions(argv: string[]): Options {
  const onMissing = (readFlag(argv, 'on-missing') || 'keep') as OnMissing;
  if (!['keep', 'latest', 'fail'].includes(onMissing)) {
    throw new Error(
      `--on-missing принимает keep|latest|fail, получено: ${onMissing}`,
    );
  }
  return {
    source: readFlag(argv, 'source'),
    lib: readFlag(argv, 'lib') || DEFAULT_LIB,
    version: readFlag(argv, 'version'),
    baseUrl: readFlag(argv, 'base-url') || DEFAULT_BASE_URL,
    onMissing,
    dryRun: argv.includes('--dry-run'),
    force: argv.includes('--force'),
  };
}

// ───────────────────────────── версии ─────────────────────────────

/**
 * Версия РЕАЛЬНО установленного атома, а не диапазон `^0.360.0` из
 * packages/ui-kit/package.json: индекс должен обещать ровно те пропсы,
 * которые есть у потребителя, иначе получаем index-drift (см. ARCHITECTURE §5).
 */
function readInstalledAtomVersion(): string | undefined {
  const pkgPath = path.join(
    REPO_ROOT,
    'node_modules',
    ...ATOM_PACKAGE.split('/'),
    'package.json',
  );
  if (!fs.existsSync(pkgPath)) return undefined;
  try {
    return (JSON.parse(fs.readFileSync(pkgPath, 'utf8')) as { version: string })
      .version;
  } catch {
    return undefined;
  }
}

/** -1 / 0 / 1, нечисловые хвосты вроде `-dev.0` игнорируются. */
function compareVersions(a: string, b: string): number {
  const toParts = (v: string) =>
    v.split('.').map((chunk) => Number.parseInt(chunk, 10) || 0);
  const pa = toParts(a);
  const pb = toParts(b);
  const len = Math.max(pa.length, pb.length);
  let result = 0;
  Array.from({ length: len }).forEach((_, i) => {
    if (result !== 0) return;
    const left = pa[i] || 0;
    const right = pb[i] || 0;
    if (left !== right) result = left > right ? 1 : -1;
  });
  return result;
}

function readCurrentSnapshotVersion(): string | undefined {
  const manifestPath = path.join(VENDOR_DIR, 'manifest.json');
  if (!fs.existsSync(manifestPath)) return undefined;
  try {
    return (
      JSON.parse(fs.readFileSync(manifestPath, 'utf8')) as { version?: string }
    ).version;
  } catch {
    return undefined;
  }
}

// ───────────────────────────── сеть ─────────────────────────────

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

interface RawResponse {
  status: number;
  text: string;
}

/**
 * Три класса неудачи, различать которые обязательно: реакция на них разная.
 * Раньше они различались подстрокой в тексте ошибки — так «битый JSON у
 * конкретного компонента» попадал в ту же ветку, что «версии нет», и
 * молча не обновлял снэпшот вместо падения.
 */
class VersionMissingError extends Error {}
class NetworkError extends Error {}

/**
 * Редиректы НЕ следуем осознанно: неопубликованная версия отвечает
 * 301 на главную страницу сайта, которая отдаёт HTML с кодом 200. С
 * `redirect: 'follow'` (как в клиенте атомарной команды) такой ответ
 * выглядит успешным, и в снэпшот уезжает HTML вместо данных.
 */
async function fetchRaw(url: string): Promise<RawResponse> {
  let lastError: unknown;
  const attempt = async (n: number): Promise<RawResponse | undefined> => {
    try {
      const res = await fetch(url, { redirect: 'manual' });
      if (res.status >= 500 && n < RETRIES - 1) {
        await sleep(300 * 2 ** n);
        return undefined;
      }
      return { status: res.status, text: await res.text() };
    } catch (error) {
      lastError = error;
      if (n < RETRIES - 1) {
        await sleep(300 * 2 ** n);
        return undefined;
      }
      // Голое `fetch failed` из undici не говорит, куда именно не достучались.
      throw new NetworkError(
        `${url}: сеть недоступна после ${RETRIES} попыток (${
          error instanceof Error ? error.message : String(error)
        })`,
      );
    }
  };

  const attempts = Array.from({ length: RETRIES }, (_, i) => i);
  // eslint-disable-next-line no-restricted-syntax
  for (const n of attempts) {
    // eslint-disable-next-line no-await-in-loop
    const res = await attempt(n);
    if (res) return res;
  }
  throw lastError instanceof Error
    ? lastError
    : new Error(`Не удалось загрузить ${url}`);
}

async function fetchJsonFile(url: string): Promise<StagedFileText> {
  const res = await fetchRaw(url);
  if (res.status >= 300 && res.status < 400) {
    throw new VersionMissingError(
      `${url} → HTTP ${res.status} (редирект: такой версии/файла на CDN нет)`,
    );
  }
  if (res.status !== 200) {
    throw new Error(`${url} → HTTP ${res.status}`);
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(res.text);
  } catch {
    throw new VersionMissingError(
      `${url} вернул не JSON (первые 80 символов: ${res.text
        .slice(0, 80)
        .replace(/\s+/g, ' ')}) — вероятно, это HTML-страница сайта.`,
    );
  }
  return { text: res.text, parsed };
}

interface StagedFileText {
  text: string;
  parsed: unknown;
}

/** Промис-пул: CDN за QRATOR, сотня одновременных запросов ему не нужна. */
async function mapPool<T, R>(
  items: T[],
  worker: (item: T) => Promise<R>,
): Promise<R[]> {
  const results: R[] = new Array<R>(items.length);
  let cursor = 0;
  const runner = async (): Promise<void> => {
    // eslint-disable-next-line no-restricted-syntax, no-constant-condition
    while (true) {
      const index = cursor;
      cursor += 1;
      const item = items[index];
      if (index >= items.length || item === undefined) return;
      // eslint-disable-next-line no-await-in-loop
      results[index] = await worker(item);
    }
  };
  await Promise.all(
    Array.from({ length: Math.min(CONCURRENCY, items.length) }, runner),
  );
  return results;
}

// ───────────────────────────── валидация ─────────────────────────────

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function assertManifest(value: unknown, where: string): AtomicManifest {
  if (
    !isRecord(value) ||
    typeof value.version !== 'string' ||
    !isRecord(value.paths)
  ) {
    throw new Error(
      `${where}: не похоже на manifest.json (нет version/paths).`,
    );
  }
  return value as unknown as AtomicManifest;
}

function assertIndex(value: unknown, where: string): IndexEntry[] {
  if (
    !Array.isArray(value) ||
    value.some((e) => !isRecord(e) || typeof e.href !== 'string')
  ) {
    throw new Error(`${where}: индекс секции не массив записей с href.`);
  }
  return value as IndexEntry[];
}

/**
 * Проверяем ДО записи: битый файл не должен попасть в снэпшот молча —
 * mergeAtomicData прочитает его как «пропсов нет» и тихо обеднит индекс.
 *
 * `api`/`examples` обязательными НЕ считаем: у всей секции `beta/`
 * (EmbeddedButton/Popover/Tooltip) их нет ни на CDN, ни в текущем снэпшоте —
 * это прозаические страницы, где весь текст лежит в `summary`. Требование
 * обязательного `api.props` (как в componentPassportSchema атомарной команды)
 * заворачивало бы легитимные файлы. Но если поле есть — форма проверяется:
 * мусор вида `api: "…"` уже опасен, его mergeAtomicData прочитает как пустоту.
 */
function assertPayload(value: unknown, where: string): void {
  if (!isRecord(value) || typeof value.name !== 'string') {
    throw new Error(`${where}: не документ снэпшота (нет строкового name).`);
  }
  if (
    value.api !== undefined &&
    (!isRecord(value.api) || !Array.isArray(value.api.props))
  ) {
    throw new Error(`${where}: поле api есть, но в нём нет массива props.`);
  }
  if (value.examples !== undefined && !Array.isArray(value.examples)) {
    throw new Error(`${where}: поле examples есть, но это не массив.`);
  }
}

// ───────────────────────────── загрузка снэпшота ─────────────────────────────

interface FetchResult {
  manifest: AtomicManifest;
  files: StagedFile[];
  sections: Record<string, number>;
  manifestUrl: string;
}

async function fetchSnapshot(
  baseUrl: string,
  lib: string,
  version: string,
): Promise<FetchResult> {
  const root = `${baseUrl}/${lib}/${version}`;
  const manifestUrl = `${root}/manifest.json`;
  const manifestFile = await fetchJsonFile(manifestUrl);
  const manifest = assertManifest(manifestFile.parsed, manifestUrl);

  const files: StagedFile[] = [
    { relPath: 'manifest.json', text: manifestFile.text },
  ];
  const sections: Record<string, number> = {};

  // Секции берём из самого манифеста, а не из захардкоженного списка:
  // появится новая — приедет сама, без правки кода.
  const sectionNames = Object.keys(manifest.paths);

  // eslint-disable-next-line no-restricted-syntax
  for (const section of sectionNames) {
    const indexHref = manifest.paths[section] as string;
    const indexUrl = `${root}/${indexHref}`;
    // eslint-disable-next-line no-await-in-loop
    const indexFile = await fetchJsonFile(indexUrl);
    const entries = assertIndex(indexFile.parsed, indexUrl);
    const dir = path.posix.dirname(indexHref);

    files.push({ relPath: indexHref, text: indexFile.text });

    // eslint-disable-next-line no-await-in-loop
    const docs = await mapPool(entries, async (entry) => {
      const relPath = path.posix.join(dir, entry.href);
      const url = `${root}/${relPath}`;
      const file = await fetchJsonFile(url);
      assertPayload(file.parsed, url);
      return { relPath, text: file.text };
    });

    files.push(...docs);
    sections[section] = entries.length;
  }

  return { manifest, files, sections, manifestUrl };
}

/** Прежний офлайн-режим: тот же формат, но из локального каталога mcpData. */
function readSnapshotFromDisk(sourceDir: string): FetchResult {
  const manifestPath = path.join(sourceDir, 'manifest.json');
  if (!fs.existsSync(manifestPath)) {
    throw new Error(
      `Не найден manifest.json в ${sourceDir}. Убедитесь, что там прогнан \`npm run generate-mcp-data\`.`,
    );
  }
  const manifestText = fs.readFileSync(manifestPath, 'utf8');
  const manifest = assertManifest(JSON.parse(manifestText), manifestPath);

  const files: StagedFile[] = [
    { relPath: 'manifest.json', text: manifestText },
  ];
  const sections: Record<string, number> = {};

  Object.entries(manifest.paths).forEach(([section, indexHref]) => {
    const indexPath = path.join(sourceDir, indexHref);
    if (!fs.existsSync(indexPath)) return;
    const indexText = fs.readFileSync(indexPath, 'utf8');
    const entries = assertIndex(JSON.parse(indexText), indexPath);
    const dir = path.posix.dirname(indexHref);
    files.push({ relPath: indexHref, text: indexText });

    entries.forEach((entry) => {
      const relPath = path.posix.join(dir, entry.href);
      const abs = path.join(sourceDir, relPath);
      if (!fs.existsSync(abs)) return;
      const text = fs.readFileSync(abs, 'utf8');
      assertPayload(JSON.parse(text), abs);
      files.push({ relPath, text });
    });
    sections[section] = entries.length;
  });

  return { manifest, files, sections, manifestUrl: sourceDir };
}

// ───────────────────────────── дифф ─────────────────────────────

interface ComponentShape {
  props: string[];
  examples: number;
}

/** Первый сегмент пути внутри снэпшота: 'components' | 'beta' | 'tokens' | … */
function sectionOf(relPath: string): string {
  return relPath.split('/')[0] || '';
}

function readComponentShapes(
  files: Map<string, string>,
): Map<string, ComponentShape> {
  const shapes = new Map<string, ComponentShape>();
  files.forEach((text, relPath) => {
    const section = sectionOf(relPath);
    if (!COMPONENT_SECTIONS.has(section) || relPath.endsWith('/index.json')) {
      return;
    }
    try {
      const parsed = JSON.parse(text) as {
        api?: { props?: { name?: string }[] };
        examples?: unknown[];
      };
      shapes.set(relPath, {
        props: (parsed.api?.props || []).map((p) => String(p.name)).sort(),
        examples: (parsed.examples || []).length,
      });
    } catch {
      /* битый файл уже отсеян валидацией — здесь просто пропускаем */
    }
  });
  return shapes;
}

function readCurrentFiles(): Map<string, string> {
  const files = new Map<string, string>();
  if (!fs.existsSync(VENDOR_DIR)) return files;
  const walk = (dir: string): void => {
    fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
      const abs = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(abs);
        return;
      }
      if (!entry.name.endsWith('.json')) return;
      const rel = path.relative(VENDOR_DIR, abs).split(path.sep).join('/');
      if (rel === 'provenance.json') return;
      files.set(rel, fs.readFileSync(abs, 'utf8'));
    });
  };
  walk(VENDOR_DIR);
  return files;
}

function printDiff(
  before: Map<string, string>,
  after: Map<string, string>,
  lines: string[],
): void {
  const beforeShapes = readComponentShapes(before);
  const afterShapes = readComponentShapes(after);

  const added = [...afterShapes.keys()].filter((k) => !beforeShapes.has(k));
  const removed = [...beforeShapes.keys()].filter((k) => !afterShapes.has(k));

  if (added.length) lines.push(`Новые компоненты: ${added.join(', ')}`);
  if (removed.length) lines.push(`Пропали компоненты: ${removed.join(', ')}`);

  afterShapes.forEach((next, key) => {
    const prev = beforeShapes.get(key);
    if (!prev) return;
    const gained = next.props.filter((p) => !prev.props.includes(p));
    const lost = prev.props.filter((p) => !next.props.includes(p));
    if (gained.length || lost.length) {
      lines.push(
        `  ${key}: ${gained.length ? `+[${gained.join(', ')}]` : ''}${
          lost.length ? ` -[${lost.join(', ')}]` : ''
        }`,
      );
    } else if (prev.examples !== next.examples) {
      lines.push(`  ${key}: примеров ${prev.examples} → ${next.examples}`);
    }
  });

  const guideKeys = [...after.keys()].filter(
    (key) => !COMPONENT_SECTIONS.has(sectionOf(key)) && key !== 'manifest.json',
  );
  const newGuides = guideKeys.filter((key) => !before.has(key));
  const changedGuides = guideKeys.filter(
    (key) => before.has(key) && before.get(key) !== after.get(key),
  );
  if (newGuides.length) {
    lines.push(
      `Новые документы-гайды (${newGuides.length}): ${newGuides.join(', ')}`,
    );
  }
  if (changedGuides.length) {
    lines.push(`Изменились гайды: ${changedGuides.join(', ')}`);
  }
}

// ───────────────────────────── запись ─────────────────────────────

function writeStaging(files: StagedFile[]): string {
  const staging = fs.mkdtempSync(path.join(os.tmpdir(), 'atomic-vendor-'));
  files.forEach((file) => {
    const abs = path.join(staging, ...file.relPath.split('/'));
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, file.text);
  });
  return staging;
}

function buildProvenance(
  opts: Options,
  result: FetchResult,
  requestedVersion: string,
  usedLatestFallback: boolean,
): string {
  const fileHashes: Record<string, string> = {};
  result.files
    .slice()
    .sort((a, b) => a.relPath.localeCompare(b.relPath))
    .forEach((file) => {
      fileHashes[file.relPath] = crypto
        .createHash('sha256')
        .update(file.text)
        .digest('hex');
    });

  return `${JSON.stringify(
    {
      lib: opts.lib,
      requestedVersion,
      resolvedVersion: result.manifest.version,
      usedLatestFallback,
      source: opts.source ? `file:${opts.source}` : result.manifestUrl,
      fetchedAt: new Date().toISOString(),
      installedLibVersion: readInstalledAtomVersion() || null,
      sections: result.sections,
      files: fileHashes,
    },
    null,
    2,
  )}\n`;
}

/**
 * Снос старого снэпшота — ПОСЛЕ того, как новый полностью скачан и
 * провалидирован в стейджинге. В прежней версии rmSync шёл первым, и обрыв
 * сети посреди прогона оставлял репозиторий без вендорных данных вовсе.
 */
function swapIn(staging: string): void {
  fs.rmSync(VENDOR_DIR, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(VENDOR_DIR), { recursive: true });
  fs.cpSync(staging, VENDOR_DIR, { recursive: true });
}

function reportToCi(lines: string[]): void {
  const summaryPath = process.env.GITHUB_STEP_SUMMARY;
  if (!summaryPath) return;
  fs.appendFileSync(summaryPath, `${lines.join('\n')}\n`);
}

// ───────────────────────────── main ─────────────────────────────

function warn(message: string): void {
  console.warn(
    process.env.GITHUB_ACTIONS ? `::warning::${message}` : `⚠ ${message}`,
  );
}

async function resolveRemote(opts: Options): Promise<{
  result: FetchResult;
  requested: string;
  fallback: boolean;
} | null> {
  const installed = readInstalledAtomVersion();
  const requested = opts.version || installed || LATEST;
  if (!opts.version && !installed) {
    warn(
      `${ATOM_PACKAGE} не установлен — версию снэпшота резолвим как "${LATEST}".`,
    );
  }

  try {
    const result = await fetchSnapshot(opts.baseUrl, opts.lib, requested);
    return { result, requested, fallback: false };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);

    /**
     * Недоступность CDN — отдельный случай от «версии нет». Шаг стоит внутри
     * релизного workflow, и падать из-за чужой сети релиз не должен: снэпшот
     * закоммичен, пакет соберётся на нём. Кто хочет жёсткого поведения —
     * ставит --on-missing=fail.
     */
    if (error instanceof NetworkError) {
      if (opts.onMissing === 'fail') throw error;
      warn(
        `CDN недоступен (${message}) — снэпшот оставлен без изменений (--on-missing=${opts.onMissing}).`,
      );
      return null;
    }

    if (!(error instanceof VersionMissingError)) throw error;

    if (opts.onMissing === 'fail') {
      throw new Error(
        `Версия ${opts.lib}@${requested} не опубликована на CDN (${message}).`,
      );
    }
    if (opts.onMissing === 'keep') {
      warn(
        `Версия ${opts.lib}@${requested} не опубликована на CDN — снэпшот оставлен без изменений (--on-missing=keep).`,
      );
      return null;
    }
    if (requested === LATEST) {
      warn(
        `"${LATEST}" недоступен на CDN — снэпшот оставлен без изменений (--on-missing=latest, откатываться больше некуда).`,
      );
      return null;
    }
    warn(
      `Версия ${opts.lib}@${requested} не опубликована на CDN — берём "${LATEST}" (--on-missing=latest).`,
    );
    const result = await fetchSnapshot(opts.baseUrl, opts.lib, LATEST);
    return { result, requested, fallback: true };
  }
}

async function main(): Promise<void> {
  const opts = parseOptions(process.argv.slice(2));

  let result: FetchResult;
  let requested: string;
  let fallback = false;

  if (opts.source) {
    result = readSnapshotFromDisk(path.resolve(opts.source));
    requested = result.manifest.version;
  } else {
    const remote = await resolveRemote(opts);
    if (!remote) return;
    ({ result, requested, fallback } = remote);
  }

  const current = readCurrentSnapshotVersion();
  if (
    current &&
    compareVersions(result.manifest.version, current) < 0 &&
    !opts.force
  ) {
    throw new Error(
      `Отказ: снэпшот сейчас на ${current}, а загруженные данные — ${result.manifest.version} (даунгрейд). ` +
        'Если это намеренно, повторите с --force.',
    );
  }

  const before = readCurrentFiles();
  const after = new Map(result.files.map((f) => [f.relPath, f.text]));

  const lines: string[] = [];
  const versionLine =
    current === result.manifest.version
      ? `Версия снэпшота: ${result.manifest.version} (без изменения версии)`
      : `Версия снэпшота: ${current ?? '—'} → ${result.manifest.version}`;
  lines.push(versionLine);
  printDiff(before, after, lines);
  const sectionsLine = Object.entries(result.sections)
    .map(([name, count]) => `${name}: ${count}`)
    .join(', ');
  lines.push(`Секции — ${sectionsLine}`);

  const unchanged =
    before.size === after.size &&
    [...after.entries()].every(([key, text]) => before.get(key) === text);
  if (unchanged) lines.push('Содержимое совпадает с текущим снэпшотом.');

  lines.forEach((line) => console.log(line));
  reportToCi(lines);

  if (opts.dryRun) {
    console.log('--dry-run: файлы не записаны.');
    return;
  }
  if (unchanged) return;

  result.files.push({
    relPath: 'provenance.json',
    text: buildProvenance(opts, result, requested, fallback),
  });

  const staging = writeStaging(result.files);
  try {
    swapIn(staging);
  } finally {
    fs.rmSync(staging, { recursive: true, force: true });
  }

  console.log(`Вендоринг готов: ${VENDOR_DIR}`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
