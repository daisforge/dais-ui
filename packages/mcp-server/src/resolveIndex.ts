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

const requireFromSelf = createRequire(import.meta.url);

/**
 * Резолвит '@daisforge/ui/...' в проекте потребителя — сначала от его CWD,
 * затем от места, где лежим мы сами.
 *
 * Второй заход обязателен: MCP-клиент волен запускать сервер с любым рабочим
 * каталогом (Claude Code берёт корень проекта, а Claude Desktop и часть других
 * клиентов — что угодно вплоть до '/'), и тогда резолв только от CWD не находит
 * библиотеку, хотя она установлена. Раньше это молча уводило в ветку 'bundled'
 * с сообщением «@daisforge/ui не установлен в этом проекте» — неправдой, из-за
 * которой агент получал данные не той версии, что стоит у потребителя.
 * При обычной установке мы и библиотека — соседи в одном node_modules, поэтому
 * резолв от собственного файла её находит независимо от CWD.
 */
function resolveFromConsumer(specifier: string): string | undefined {
  try {
    const req = createRequire(path.join(process.cwd(), 'package.json'));
    return req.resolve(specifier);
  } catch {
    // CWD не подошёл — пробуем от себя, см. комментарий выше.
  }
  try {
    return requireFromSelf.resolve(specifier);
  } catch {
    return undefined;
  }
}

function getInstalledLibVersion(): string | undefined {
  const pkgPath = resolveFromConsumer('@daisforge/ui/package.json');
  if (!pkgPath) return undefined;
  return readJson<{ version?: string }>(pkgPath)?.version;
}

/**
 * Индекс, у которого обвалился источник данных, а не просто «старая версия».
 * Признаки бинарные и не зависят от размера каталога: `features` пустой либо
 * нет `guides.installation`. И то, и другое приходит ТОЛЬКО из курированной
 * меты, которая лежит в .gitignore — если её не сгенерировали перед сборкой,
 * индекс собирается молча и без них (см. assertMetaAvailable).
 *
 * Проверять здесь пороги из checkCompleteness нельзя: они откалиброваны под
 * текущий каталог, а установленная у потребителя библиотека может быть
 * заметно старее и легитимно беднее. Обвал источника — другое.
 */
function isDegradedIndex(index: ComponentIndex): boolean {
  return index.features.length === 0 || !index.guides?.installation;
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
  // (появилось в 1.14.0 — первом релизе, где publish-npm.yml кладёт индекс в
  // тарбол библиотеки). Не зависит от CWD клиента, см. resolveFromConsumer.
  const installedIndexPath = resolveFromConsumer(
    '@daisforge/ui/mcp-data/component-index.json',
  );
  if (installedIndexPath) {
    const index = readJson<ComponentIndex>(installedIndexPath);
    if (index && !isDegradedIndex(index)) {
      return { index, source: 'installed', installedLibVersion };
    }

    // Индекс внутри библиотеки есть, но неполный. Так уехал @daisforge/ui@1.14.0
    // — первая версия, куда индекс вообще начал класться: релизный шаг собирал
    // его мимо `npm run meta`, и наружу отправился каталог без features, без
    // guides и без full-code примеров. Раньше такой индекс выигрывал у
    // запасного безусловно (проверялось только «файл есть и парсится»), то
    // есть обновление библиотеки УХУДШАЛО данные MCP: до 1.14.0 работал
    // bundled, с 1.14.0 включился заведомо худший installed.
    //
    // Откатываемся на запасной, только если он сам не деградировал — иначе
    // менять шило на мыло, теряя совпадение по версии библиотеки.
    const fallback = readJson<ComponentIndex>(BUNDLED_INDEX_PATH);
    if (index && fallback && !isDegradedIndex(fallback)) {
      return {
        index: fallback,
        source: 'bundled',
        installedLibVersion,
        dataVersionNotice:
          `Индекс внутри установленного @daisforge/ui@${installedLibVersion} неполный ` +
          '(нет features и гайда по установке — он собран до исправления релизного пайплайна), ' +
          `поэтому используется запасной индекс версии ${fallback.libVersion} из @daisforge/ui-mcp. ` +
          'Возможны расхождения в пропсах, если версии не совпадают — обновите @daisforge/ui.',
      };
    }

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
