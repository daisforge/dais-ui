/* eslint-disable no-console */
import fs from 'node:fs';
import path from 'node:path';

import type { AtomicPropRecord } from '../types.js';
import { readFlag, REPO_ROOT, vendorDir } from './vendorShared.js';

const DOCS_DIR = vendorDir('atomic-docs');
const MCP_DATA_DIR = vendorDir('atomic-mcp-data');
const DEFAULT_OUT = path.join(
  REPO_ROOT,
  'packages/mcp-server/.probe/atomic-docs-index.json',
);

/** Наши служебные файлы — перечень страниц и провенанс, контентом не являются. */
const SERVICE_FILES = new Set(['pages.json', 'provenance.json']);

/** Запись, как её пишет harvestAtomicDocs. */
interface DocRecord {
  name: string;
  slug: string;
  category: string;
  url: string;
  content: string;
}

/** Формат их generateIndex — воспроизводим один в один. */
interface IndexEntry {
  pageContent: string;
  metadata: {
    heading: { depth: number; text: string };
    source: { url: string };
    category: string;
    productId: string;
    /** Наше расширение формата: пропсы атома из vendor/atomic-mcp-data. */
    props?: AtomicPropRecord[];
  };
}

/** Страница снэпшота atomic-mcp-data — нужны только имя, категория и пропсы. */
interface McpDataRecord {
  name?: string;
  category?: string;
  api?: { props?: AtomicPropRecord[] };
}

/** Служебные файлы atomic-mcp-data — страниц документации в них нет. */
const MCP_DATA_SERVICE_FILES = new Set(['manifest.json', 'provenance.json']);

/**
 * У них `heading.depth` равен 1 на всех 87 страницах (сверено по их index.json),
 * а `productId` совпадает с первым сегментом пути в URL страницы
 * (`https://plasma.sberdevices.ru/sdds-finai/...` → `sdds-finai`). Поэтому оба
 * поля восстанавливаются из того, что уже лежит в снэпшоте, — harvestAtomicDocs
 * ради экспорта менять не нужно.
 */
const HEADING_DEPTH = 1;

function productIdOf(url: string): string {
  const m = url.match(/^https?:\/\/[^/]+\/([^/]+)\//);
  return m ? (m[1] as string) : '';
}

function readDocs(): DocRecord[] {
  if (!fs.existsSync(DOCS_DIR)) {
    throw new Error(
      `Нет каталога ${DOCS_DIR} — сначала соберите документацию: npm run mcp:harvest-docs`,
    );
  }
  const out: DocRecord[] = [];
  const walk = (dir: string): void => {
    fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
      const abs = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(abs);
        return;
      }
      if (!entry.name.endsWith('.json')) return;
      const rel = path.relative(DOCS_DIR, abs).split(path.sep).join('/');
      if (SERVICE_FILES.has(rel)) return;

      const parsed: unknown = JSON.parse(fs.readFileSync(abs, 'utf8'));
      const record = parsed as DocRecord;
      if (
        typeof record?.content !== 'string' ||
        typeof record?.url !== 'string'
      ) {
        throw new Error(
          `${rel}: не похоже на запись документации (нет content/url).`,
        );
      }
      out.push(record);
    });
  };
  walk(DOCS_DIR);
  return out;
}

function propsKey(category: string, name: string): string {
  return `${category}/${name}`;
}

/**
 * Снэпшот atomic-mcp-data и atomic-docs собраны с одних и тех же страниц,
 * но файлы названы по-разному (`components/Button.json` против
 * `components/button.json`), поэтому сопоставляем по паре category + name —
 * она совпадает у всех 87 страниц.
 */
function readPropsByPage(): Map<string, AtomicPropRecord[]> {
  if (!fs.existsSync(MCP_DATA_DIR)) {
    throw new Error(
      `Нет каталога ${MCP_DATA_DIR} — сначала завендорьте данные атомов: npm run mcp:vendor-atomic`,
    );
  }
  const out = new Map<string, AtomicPropRecord[]>();
  const walk = (dir: string): void => {
    fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
      const abs = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(abs);
        return;
      }
      if (!entry.name.endsWith('.json')) return;
      const rel = path.relative(MCP_DATA_DIR, abs).split(path.sep).join('/');
      if (MCP_DATA_SERVICE_FILES.has(rel)) return;

      const record = JSON.parse(fs.readFileSync(abs, 'utf8')) as McpDataRecord;
      const props = record.api?.props;
      if (!record.name || !record.category || !props?.length) return;
      out.set(propsKey(record.category, record.name), props);
    });
  };
  walk(MCP_DATA_DIR);
  return out;
}

/**
 * Генератор PropsTable атомарной команды пишет "" в description/default —
 * пустая строка читается как содержательный (пустой) дефолт, поэтому такие
 * поля не выгружаем (как и dropEmptyStrings в mergeAtomicData.ts).
 */
function cleanProp(p: AtomicPropRecord): AtomicPropRecord {
  const cleaned = { ...p };
  if (cleaned.description === '') delete cleaned.description;
  if (cleaned.default === '') delete cleaned.default;
  return cleaned;
}

/**
 * Пропсы дублируются текстом в конец pageContent, чтобы их находил и
 * полнотекстовый/векторный поиск по странице, а не только чтение metadata.
 * Список, а не таблица: юнион-типы (`"s" | "xs"`) ломают столбцы markdown-таблицы.
 * В заголовке три синонима — по любому из них запрос находит раздел.
 */
function propsToMarkdown(props: AtomicPropRecord[]): string {
  const lines = props.map((p) => {
    let line = `- \`${p.name}\`${p.required ? ' (обязательный)' : ''}: \`${
      p.type
    }\``;
    if (p.default) line += `, по умолчанию \`${p.default}\``;
    if (p.description) line += ` — ${p.description}`;
    return line;
  });
  return `## Свойства | Props | API\n\n${lines.join('\n')}`;
}

function toIndexEntries(
  docs: DocRecord[],
  propsByPage: Map<string, AtomicPropRecord[]>,
): IndexEntry[] {
  return docs
    .slice()
    .sort((a, b) => a.slug.localeCompare(b.slug))
    .map((doc) => {
      const rawProps = propsByPage.get(propsKey(doc.category, doc.name));
      const props = rawProps?.map(cleanProp);
      return {
        pageContent: props
          ? `${doc.content}\n\n${propsToMarkdown(props)}`
          : doc.content,
        metadata: {
          heading: { depth: HEADING_DEPTH, text: doc.name },
          source: { url: doc.url },
          category: doc.category,
          productId: productIdOf(doc.url),
          ...(props ? { props } : {}),
        },
      };
    });
}

function main(): void {
  const argv = process.argv.slice(2);
  const outPath = path.resolve(readFlag(argv, 'out') || DEFAULT_OUT);

  const docs = readDocs();
  const entries = toIndexEntries(docs, readPropsByPage());
  const text = `${JSON.stringify(entries, null, 2)}\n`;

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, text);

  const chars = entries.reduce((s, e) => s + e.pageContent.length, 0);
  const byCategory: Record<string, number> = {};
  entries.forEach((e) => {
    const c = e.metadata.category || '—';
    byCategory[c] = (byCategory[c] || 0) + 1;
  });

  const withProps = entries.filter((e) => e.metadata.props).length;

  console.log(`Записей: ${entries.length}, символов текста: ${chars}`);
  console.log(`С пропсами: ${withProps} из ${entries.length}`);
  console.log(
    `По категориям: ${Object.entries(byCategory)
      .map(([k, v]) => `${k}: ${v}`)
      .join(', ')}`,
  );
  console.log(`Файл: ${outPath} (${(text.length / 1024).toFixed(0)} КБ)`);
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
