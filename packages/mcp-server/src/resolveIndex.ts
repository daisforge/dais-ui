/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import type { ComponentIndex, ResolvedIndex } from './types.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BUNDLED_INDEX_PATH = path.resolve(
  __dirname,
  '../data/component-index.json',
);
const SIBLING_UI_KIT_PKG = path.resolve(__dirname, '../../ui-kit/package.json');

function readJson<T>(filePath: string): T | undefined {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8')) as T;
  } catch {
    return undefined;
  }
}

/** Резолвит '@daisforge/ui/...' относительно CWD консьюмера (не относительно нашего пакета). */
function resolveFromConsumer(specifier: string): string | undefined {
  try {
    const req = createRequire(path.join(process.cwd(), 'package.json'));
    return req.resolve(specifier);
  } catch {
    return undefined;
  }
}

function getInstalledLibVersion(): string | undefined {
  const pkgPath = resolveFromConsumer('@daisforge/ui/package.json');
  if (!pkgPath) return undefined;
  return readJson<{ version?: string }>(pkgPath)?.version;
}

function buildDataVersionNotice(
  libNotInstalled: boolean,
  versionMismatch: boolean,
  libVersion: string,
  installedLibVersion: string | undefined,
): string | undefined {
  if (libNotInstalled) {
    return `@daisforge/ui не установлен в этом проекте. Данные MCP соответствуют версии ${libVersion} — прочитайте ресурс daisforge-ui://catalog/installation-guide, чтобы подключить библиотеку.`;
  }
  if (versionMismatch) {
    return `Данные MCP соответствуют @daisforge/ui@${libVersion}, у вас установлена ${installedLibVersion} — возможны расхождения в пропсах. Обновите @daisforge/ui для точных данных.`;
  }
  return undefined;
}

/**
 * Трёхуровневый резолв индекса (см. план): workspace → installed → bundled.
 * Обязателен для того, чтобы MCP работал даже у потребителей на версиях
 * @daisforge/ui, опубликованных до появления mcp-data (сейчас вся история
 * версий), или вообще без установленной библиотеки.
 */
export function resolveIndex(): ResolvedIndex {
  // 1. Workspace — сосед packages/ui-kit существует физически рядом с нами
  // (значит мы запущены внутри самого монорепо dais/ui, а не как
  // установленный npm-пакет где-то ещё).
  if (fs.existsSync(SIBLING_UI_KIT_PKG)) {
    const index = readJson<ComponentIndex>(BUNDLED_INDEX_PATH);
    if (index) {
      return { index, source: 'workspace' };
    }
  }

  const installedLibVersion = getInstalledLibVersion();

  // 2. Installed — версия @daisforge/ui у потребителя уже содержит mcp-data
  // (появилось начиная с версии, в которой был опубликован этот MCP).
  const installedIndexPath = resolveFromConsumer(
    '@daisforge/ui/mcp-data/component-index.json',
  );
  if (installedIndexPath) {
    const index = readJson<ComponentIndex>(installedIndexPath);
    if (index) {
      return { index, source: 'installed', installedLibVersion };
    }
  }

  // 3. Bundled — запасной индекс, вшитый в сам @daisforge/ui-mcp. Нужен для
  // старых версий библиотеки без mcp-data и для случая, когда библиотека
  // вообще не установлена.
  const index = readJson<ComponentIndex>(BUNDLED_INDEX_PATH);
  if (!index) {
    throw new Error(
      `Не найден ни один источник индекса (workspace/installed/bundled). ` +
        `Запасной индекс должен лежать в ${BUNDLED_INDEX_PATH} — похоже, пакет @daisforge/ui-mcp собран некорректно.`,
    );
  }

  const libNotInstalled = installedLibVersion === undefined;
  const versionMismatch =
    !libNotInstalled && installedLibVersion !== index.libVersion;

  return {
    index,
    source: 'bundled',
    installedLibVersion,
    libNotInstalled: libNotInstalled || undefined,
    dataVersionNotice: buildDataVersionNotice(
      libNotInstalled,
      versionMismatch,
      index.libVersion,
      installedLibVersion,
    ),
  };
}
