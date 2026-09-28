/* eslint-disable no-console */
import fs from 'node:fs';
import path from 'node:path';

import { readFlag, REPO_ROOT, vendorDir } from './vendorShared.js';

const DOCS_DIR = vendorDir('atomic-docs');
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
  };
}

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

function toIndexEntries(docs: DocRecord[]): IndexEntry[] {
  return docs
    .slice()
    .sort((a, b) => a.slug.localeCompare(b.slug))
    .map((doc) => ({
      pageContent: doc.content,
      metadata: {
        heading: { depth: HEADING_DEPTH, text: doc.name },
        source: { url: doc.url },
        category: doc.category,
        productId: productIdOf(doc.url),
      },
    }));
}

function main(): void {
  const argv = process.argv.slice(2);
  const outPath = path.resolve(readFlag(argv, 'out') || DEFAULT_OUT);

  const docs = readDocs();
  const entries = toIndexEntries(docs);
  const text = `${JSON.stringify(entries, null, 2)}\n`;

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, text);

  const chars = entries.reduce((s, e) => s + e.pageContent.length, 0);
  const byCategory: Record<string, number> = {};
  entries.forEach((e) => {
    const c = e.metadata.category || '—';
    byCategory[c] = (byCategory[c] || 0) + 1;
  });

  console.log(`Записей: ${entries.length}, символов текста: ${chars}`);
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
