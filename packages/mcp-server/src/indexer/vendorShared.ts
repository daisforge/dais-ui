/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const REPO_ROOT = path.resolve(__dirname, '../../../..');
export const ATOM_PACKAGE = '@salutejs/sdds-finai';

/** Каталог вендорных данных внутри пакета: vendor/<name>. */
export function vendorDir(name: string): string {
  return path.resolve(__dirname, '../../vendor', name);
}

/** Файл в стейджинге: путь относительно корня каталога + готовый текст. */
export interface StagedFile {
  relPath: string;
  text: string;
}

/** Что делать, когда источник данных недоступен или версия не найдена. */
export type OnMissing = 'keep' | 'latest' | 'fail';

export function warn(message: string): void {
  console.warn(
    process.env.GITHUB_ACTIONS ? `::warning::${message}` : `⚠ ${message}`,
  );
}

export function readFlag(argv: string[], name: string): string | undefined {
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

/**
 * Версия РЕАЛЬНО установленного атома, а не диапазон `^0.360.0` из
 * packages/ui-kit/package.json: и пропсы, и документация должны описывать
 * ровно то, что есть у потребителя (см. ARCHITECTURE §1.6c).
 */
export function readInstalledAtomVersion(): string | undefined {
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
export function compareVersions(a: string, b: string): number {
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

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

export function sha256(text: string): string {
  return crypto.createHash('sha256').update(text).digest('hex');
}

/** Текущее содержимое каталога: relPath → текст. provenance.json не читаем — он наш. */
export function readCurrentFiles(rootDir: string): Map<string, string> {
  const files = new Map<string, string>();
  if (!fs.existsSync(rootDir)) return files;
  const walk = (dir: string): void => {
    fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
      const abs = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(abs);
        return;
      }
      if (!entry.name.endsWith('.json')) return;
      const rel = path.relative(rootDir, abs).split(path.sep).join('/');
      if (rel === 'provenance.json') return;
      files.set(rel, fs.readFileSync(abs, 'utf8'));
    });
  };
  walk(rootDir);
  return files;
}

export function writeStaging(files: StagedFile[], prefix: string): string {
  const staging = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  files.forEach((file) => {
    const abs = path.join(staging, ...file.relPath.split('/'));
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, file.text);
  });
  return staging;
}

/**
 * Снос старого каталога — ПОСЛЕ того, как новый полностью собран и
 * провалидирован в стейджинге. Обратный порядок (снести, потом качать)
 * оставлял бы репозиторий без данных при любом обрыве посередине.
 */
export function swapIn(staging: string, targetDir: string): void {
  fs.rmSync(targetDir, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(targetDir), { recursive: true });
  fs.cpSync(staging, targetDir, { recursive: true });
}

/** Дублируем сводку в отчёт шага GitHub Actions, если мы в CI. */
export function reportToCi(lines: string[]): void {
  const summaryPath = process.env.GITHUB_STEP_SUMMARY;
  if (!summaryPath) return;
  fs.appendFileSync(summaryPath, `${lines.join('\n')}\n`);
}

/** Карта sha256 по файлам — для provenance.json. */
export function hashFiles(files: StagedFile[]): Record<string, string> {
  const out: Record<string, string> = {};
  files
    .slice()
    .sort((a, b) => a.relPath.localeCompare(b.relPath))
    .forEach((file) => {
      out[file.relPath] = sha256(file.text);
    });
  return out;
}
