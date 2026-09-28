/* eslint-disable no-console */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import type { OnMissing, StagedFile } from './vendorShared.js';
import {
  ATOM_PACKAGE,
  hashFiles,
  isRecord,
  readCurrentFiles,
  readFlag,
  readInstalledAtomVersion,
  reportToCi,
  swapIn,
  vendorDir,
  warn,
  writeStaging,
} from './vendorShared.js';

const DOCS_DIR = vendorDir('atomic-docs');

const DEFAULT_REPO = 'https://github.com/salute-developers/plasma.git';
/** Каталог доков внутри их монорепо — единственное, что забираем sparse-чекаутом. */
const DOCS_SUBPATH = 'website/sdds-finai-docs';
const GENERATE_INDEX = './scripts/generateIndex/index.mjs';

/**
 * Пять пакетов, которые импортирует их generateIndex. Ставим их в ОТДЕЛЬНЫЙ
 * каталог и подсовываем симлинком: `npm install` прямо в website/sdds-finai-docs
 * подтянул бы весь package.json докусауруса (сотни пакетов, минуты), а так
 * установка занимает секунды.
 */
const PARSER_DEPS = [
  'gray-matter',
  'unified',
  'remark-parse',
  'remark-mdx',
  'unist-util-visit',
];

interface Options {
  version?: string;
  ref?: string;
  repo: string;
  onMissing: OnMissing;
  dryRun: boolean;
}

/** Запись их index.json: текст страницы + откуда он взят. */
interface IndexEntry {
  pageContent: string;
  metadata: {
    category?: string;
    heading?: { text?: string };
    source?: { url?: string };
  };
}

class SourceUnavailableError extends Error {}

function parseOptions(argv: string[]): Options {
  const onMissing = (readFlag(argv, 'on-missing') || 'keep') as OnMissing;
  if (!['keep', 'fail'].includes(onMissing)) {
    throw new Error(
      `--on-missing здесь принимает keep|fail, получено: ${onMissing}`,
    );
  }
  return {
    version: readFlag(argv, 'version'),
    ref: readFlag(argv, 'ref'),
    repo: readFlag(argv, 'repo') || DEFAULT_REPO,
    onMissing,
    dryRun: argv.includes('--dry-run'),
  };
}

function run(cmd: string, args: string[], cwd: string): string {
  return execFileSync(cmd, args, {
    cwd,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    maxBuffer: 64 * 1024 * 1024,
  });
}

/**
 * Готовим чекаут: partial + sparse, только каталог доков. Полный клон — 990 МБ
 * и ~минута, этот — 17 МБ и ~6 секунд (замер в ARCHITECTURE §1.6d).
 */
function checkoutDocs(opts: Options, ref: string, workDir: string): string {
  try {
    run(
      'git',
      [
        'clone',
        '--depth',
        '1',
        '--filter=blob:none',
        '--sparse',
        '--branch',
        ref,
        opts.repo,
        'plasma',
      ],
      workDir,
    );
  } catch (error) {
    throw new SourceUnavailableError(
      `не удалось склонировать ${opts.repo} по ref "${ref}" (${
        error instanceof Error ? error.message.split('\n')[0] : String(error)
      })`,
    );
  }

  const repoDir = path.join(workDir, 'plasma');
  run('git', ['sparse-checkout', 'set', DOCS_SUBPATH], repoDir);

  const docsDir = path.join(repoDir, DOCS_SUBPATH);
  if (!fs.existsSync(path.join(docsDir, GENERATE_INDEX))) {
    throw new SourceUnavailableError(
      `в чекауте нет ${DOCS_SUBPATH}/${GENERATE_INDEX} — раскладка репозитория изменилась.`,
    );
  }
  return docsDir;
}

function installParserDeps(workDir: string, docsDir: string): void {
  const depsDir = path.join(workDir, 'deps');
  fs.mkdirSync(depsDir, { recursive: true });
  fs.writeFileSync(
    path.join(depsDir, 'package.json'),
    `${JSON.stringify({
      name: 'genidx-deps',
      private: true,
      type: 'module',
    })}\n`,
  );
  run(
    'npm',
    ['install', '--silent', '--no-audit', '--no-fund', ...PARSER_DEPS],
    depsDir,
  );
  fs.symlinkSync(
    path.join(depsDir, 'node_modules'),
    path.join(docsDir, 'node_modules'),
    'dir',
  );
}

/**
 * Их скрипт печатает «File does not exist» на каждую <PropsTable>: раскрытие
 * таблиц требует артефакта сборки докусауруса и обёрнуто у них в existsSync,
 * поэтому без него скрипт не падает, а пропускает таблицы. Нам это и нужно —
 * пропсы у нас свои (ts-morph) и вендорные (CDN), не хватало только прозы.
 */
function runGenerateIndex(docsDir: string): IndexEntry[] {
  run(process.execPath, [GENERATE_INDEX], docsDir);
  const outPath = path.join(docsDir, 'index.json');
  if (!fs.existsSync(outPath)) {
    throw new SourceUnavailableError(
      'generateIndex отработал, но index.json не появился.',
    );
  }
  const parsed: unknown = JSON.parse(fs.readFileSync(outPath, 'utf8'));
  if (!Array.isArray(parsed) || parsed.length === 0) {
    throw new SourceUnavailableError('index.json пуст или не массив.');
  }
  parsed.forEach((entry, i) => {
    if (
      !isRecord(entry) ||
      typeof entry.pageContent !== 'string' ||
      !isRecord(entry.metadata)
    ) {
      throw new SourceUnavailableError(
        `index.json[${i}]: нет pageContent/metadata.`,
      );
    }
  });
  return parsed as IndexEntry[];
}

/** `https://…/sdds-finai/components/accordion/` → `components/accordion`. */
function slugOf(entry: IndexEntry): string {
  const url = entry.metadata.source?.url || '';
  const slug = url
    .replace(/^https?:\/\/[^/]+\/[^/]+\//, '')
    .replace(/\/+$/, '');
  return slug || entry.metadata.category || 'index';
}

function toStagedFiles(entries: IndexEntry[]): StagedFile[] {
  const listing: {
    name: string;
    slug: string;
    category: string;
    url: string;
    chars: number;
  }[] = [];

  const files = entries.map((entry) => {
    const slug = slugOf(entry);
    const record = {
      name: entry.metadata.heading?.text || slug,
      slug,
      category: entry.metadata.category || '',
      url: entry.metadata.source?.url || '',
      content: entry.pageContent,
    };
    listing.push({
      name: record.name,
      slug,
      category: record.category,
      url: record.url,
      chars: record.content.length,
    });
    return {
      relPath: `${slug}.json`,
      text: `${JSON.stringify(record, null, 2)}\n`,
    };
  });

  const duplicates = files
    .map((f) => f.relPath)
    .filter((p, i, all) => all.indexOf(p) !== i);
  if (duplicates.length) {
    throw new SourceUnavailableError(
      `страницы с одинаковым slug: ${[...new Set(duplicates)].join(', ')}`,
    );
  }

  listing.sort((a, b) => a.slug.localeCompare(b.slug));
  // Не `index.json`: так называется ИХ файл со всем контентом разом, а это
  // наш перечень страниц — путать два разных артефакта не стоит.
  files.push({
    relPath: 'pages.json',
    text: `${JSON.stringify(listing, null, 2)}\n`,
  });
  return files;
}

function buildDiff(
  before: Map<string, string>,
  after: Map<string, string>,
  lines: string[],
): void {
  const sizeOf = (text: string | undefined): number => {
    if (!text) return 0;
    try {
      return ((JSON.parse(text) as { content?: string }).content || '').length;
    } catch {
      return 0;
    }
  };

  const added = [...after.keys()].filter(
    (k) => k !== 'pages.json' && !before.has(k),
  );
  const removed = [...before.keys()].filter(
    (k) => k !== 'pages.json' && !after.has(k),
  );
  if (added.length) {
    lines.push(`Новые страницы (${added.length}): ${added.join(', ')}`);
  }
  if (removed.length) {
    lines.push(`Пропали страницы (${removed.length}): ${removed.join(', ')}`);
  }

  const changed: string[] = [];
  after.forEach((text, key) => {
    if (key === 'pages.json' || !before.has(key)) return;
    if (before.get(key) === text) return;
    const was = sizeOf(before.get(key));
    const now = sizeOf(text);
    changed.push(was === now ? `${key}` : `${key} (${was} → ${now} симв.)`);
  });
  if (changed.length) {
    lines.push(`Изменились (${changed.length}): ${changed.join(', ')}`);
  }
}

function buildProvenance(
  opts: Options,
  ref: string,
  files: StagedFile[],
  entries: IndexEntry[],
): string {
  const byCategory: Record<string, number> = {};
  entries.forEach((e) => {
    const c = e.metadata.category || '—';
    byCategory[c] = (byCategory[c] || 0) + 1;
  });
  return `${JSON.stringify(
    {
      repo: opts.repo,
      ref,
      installedLibVersion: readInstalledAtomVersion() || null,
      generatedBy: `${DOCS_SUBPATH}/${GENERATE_INDEX}`,
      fetchedAt: new Date().toISOString(),
      pages: entries.length,
      chars: entries.reduce((s, e) => s + e.pageContent.length, 0),
      byCategory,
      files: hashFiles(files),
    },
    null,
    2,
  )}\n`;
}

function main(): void {
  const opts = parseOptions(process.argv.slice(2));
  const installed = readInstalledAtomVersion();
  const version = opts.version || installed;
  if (!opts.ref && !version) {
    throw new Error(
      `${ATOM_PACKAGE} не установлен и не передан --version/--ref — неоткуда взять ревизию доков.`,
    );
  }
  const ref = opts.ref || `${ATOM_PACKAGE}@${version}`;

  const workDir = fs.mkdtempSync(path.join(os.tmpdir(), 'atomic-docs-'));
  let entries: IndexEntry[];
  try {
    const docsDir = checkoutDocs(opts, ref, workDir);
    installParserDeps(workDir, docsDir);
    entries = runGenerateIndex(docsDir);
  } catch (error) {
    fs.rmSync(workDir, { recursive: true, force: true });
    if (error instanceof SourceUnavailableError && opts.onMissing === 'keep') {
      warn(
        `Документация атомарки не собрана (${error.message}) — каталог оставлен без изменений (--on-missing=keep).`,
      );
      return;
    }
    throw error;
  }

  const files = toStagedFiles(entries);
  const before = readCurrentFiles(DOCS_DIR);
  const after = new Map(files.map((f) => [f.relPath, f.text]));

  const lines = [
    `Документация атомарки: ref ${ref}, страниц ${entries.length}`,
  ];
  buildDiff(before, after, lines);
  const unchanged =
    before.size === after.size &&
    [...after.entries()].every(([key, text]) => before.get(key) === text);
  if (unchanged) lines.push('Содержимое совпадает с текущим каталогом.');
  lines.forEach((line) => console.log(line));
  reportToCi(lines);

  if (opts.dryRun) {
    console.log('--dry-run: файлы не записаны.');
  } else if (!unchanged) {
    files.push({
      relPath: 'provenance.json',
      text: buildProvenance(opts, ref, files, entries),
    });
    const staging = writeStaging(files, 'atomic-docs-stage-');
    try {
      swapIn(staging, DOCS_DIR);
    } finally {
      fs.rmSync(staging, { recursive: true, force: true });
    }
    console.log(`Документация записана: ${DOCS_DIR}`);
  }

  fs.rmSync(workDir, { recursive: true, force: true });
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
