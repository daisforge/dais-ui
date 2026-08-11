/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-cond-assign */
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/extensions */
/* eslint-disable simple-import-sort/imports */

/*
 * generate-meta.js — точка входа скрипта сбора мета-информации
 *
 * Запуск:
 *   node generators/meta-info/generate-meta.js            (режим single, по умолчанию)
 *   node generators/meta-info/generate-meta.js --split    (по файлу на компонент)
 *   node generators/meta-info/generate-meta.js --both      (и то, и другое)
 *
 * Выход:
 *   single → _docs/meta/components-meta.json               (один общий файл)
 *   split  → _docs/meta/components/<ComponentName>.json    (по файлу на компонент)
 *            + _docs/meta/components/_manifest.json         (мета + список компонентов)
 *
 * Поток:
 *   1. Регенерация types.string.json и functions.string.json
 *   2. Загрузка конфига + lookup-таблиц
 *   3. Для каждого компонента: resolveComponent -> parseMdx + parseStories
 *   4. Запись JSON (в выбранном режиме вывода)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

import { copyTypeAsStringSync } from '../storybook/copy-types-as-string.js';
import { resolveComponent } from './parsers/resolveComponent.js';
import {
  parseMdx,
  extractCategoryFromMdx,
  extractTitleFromMdx,
} from './parsers/parseMdx.js';
import { parseStories } from './parsers/parseStories.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..', '..');

// --- Аргументы командной строки ---
// Режим вывода:
//   --split  → по файлу на компонент в <outputDir>/<componentsDir>/
//   --both   → и общий файл, и по-файловый вывод
//   (по умолчанию / --single) → один общий components-meta.json
const argv = process.argv.slice(2);
const hasFlag = (name) => argv.includes(`--${name}`);

let outputMode = 'single';
if (hasFlag('both')) outputMode = 'both';
else if (hasFlag('split')) outputMode = 'split';

// --- Прогресс-бар (перезаписывает строку через \r) ---

const SPINNER = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
let spinnerIdx = 0;

function showProgress(text, current, total) {
  const spin = SPINNER[spinnerIdx++ % SPINNER.length];
  let bar = '';
  if (total) {
    const pct = Math.round(((current + 1) / total) * 100);
    const filled = Math.round(pct / 5);
    bar = ` ${'█'.repeat(filled)}${'░'.repeat(20 - filled)} ${pct}% `;
  }
  const line = `\x1b[36m${spin}\x1b[0m ${text}${bar}`;
  process.stdout.write(`\r\x1b[K${line}`);
}

function clearProgress() {
  process.stdout.write('\r\x1b[K');
}

// --- Шаг 0: регенерация lookup-таблиц ---

showProgress('Регенерация таблиц типов...');
try {
  execSync(
    'node ./generators/storybook/generate-storybook-types-as-string-json.js',
    { cwd: ROOT, stdio: 'pipe' }
  );
  showProgress('Регенерация таблиц функций...');
  execSync(
    'node ./generators/storybook/generate-storybook-func-as-string-json.js',
    { cwd: ROOT, stdio: 'pipe' }
  );
  clearProgress();
} catch (err) {
  clearProgress();
  console.warn(
    '[meta-info] Не удалось обновить таблицы, используем существующие.',
    err.message
  );
}

// --- Шаг 1: загрузка данных ---

const config = JSON.parse(
  readFileSync(join(__dirname, 'config', 'meta-config.json'), 'utf8')
);

// Ключи: "filePath$$$typeName" -> текст типа
const typesMap = JSON.parse(
  readFileSync(join(ROOT, 'packages/storybook/src/types.string.json'), 'utf8')
);

// Ключи: "filePath$$$funcName" -> текст функции
const funcsMap = JSON.parse(
  readFileSync(
    join(ROOT, 'packages/storybook/src/functions.string.json'),
    'utf8'
  )
);

const storiesBase = join(ROOT, config.storiesBase);
const storybookBaseUrl = config.storybookBaseUrl || '';

// --- Шаг 2: обработка компонентов ---

const components = {};
const total = config.components.length;

for (let idx = 0; idx < total; idx++) {
  const entry = config.components[idx];
  const name = typeof entry === 'string' ? entry : entry.name;
  showProgress(`[${idx + 1}/${total}] ${name}`, idx, total);

  try {
    const resolved = resolveComponent(entry, storiesBase);
    if (!resolved) {
      console.warn(`[WARN] Компонент ${name} не найден, пропускаем.`);
      continue;
    }

    if (resolved.type === 'simple') {
      components[name] = processSimpleComponent(resolved, entry);
    } else {
      components[name] = processComplexComponent(resolved, entry);
    }
  } catch (err) {
    clearProgress();
    console.error(`[ERROR] Ошибка при обработке ${name}:`, err.message);
  }
}

clearProgress();

// --- Шаг 2.5: standalone-страницы (интро «Установка и использование» и т.п.) ---
// Это НЕ компоненты: отдельные MDX вне storiesBase. Парсим их в docs и кладём в
// output.pages, чтобы AI-агент видел разделы установки/использования.

const pages = {};
const pagesConfig = Array.isArray(config.pages) ? config.pages : [];

for (const page of pagesConfig) {
  try {
    const mdxAbs = join(ROOT, page.mdx);
    if (!existsSync(mdxAbs)) {
      console.warn(`[WARN] Страница не найдена: ${page.mdx}, пропускаем.`);
      continue;
    }
    const pageTitle = extractTitleFromMdx(mdxAbs) || page.title;
    const pageDocs = parseMdx(mdxAbs, typesMap, null);
    pages[page.title || pageTitle] = {
      title: pageTitle,
      category: page.category || null,
      ...(page.description ? { description: page.description } : {}),
      docs: pageDocs,
      storybookUrl: buildStorybookUrl(pageTitle),
    };
  } catch (err) {
    console.error(
      `[ERROR] Ошибка при обработке страницы ${page.mdx}:`,
      err.message
    );
  }
}

// --- Шаг 3: запись JSON ---

// Инструкция для AI-агента из отдельного файла
const instructionsFile = config.instructionsFile
  ? join(__dirname, config.instructionsFile)
  : null;
const instructions =
  instructionsFile && existsSync(instructionsFile)
    ? readFileSync(instructionsFile, 'utf8').trim()
    : '';

const output = {
  generatedAt: new Date().toISOString(),
  version: '1.0.0',
  instructions,
  pages,
  components,
};

if (outputMode === 'single' || outputMode === 'both') {
  writeSingleFile(output, config);
}
if (outputMode === 'split' || outputMode === 'both') {
  writeSplitFiles(output, config);
}

// --- Шаг 4: диагностика — подсвечиваем проблемные компоненты ---

// ANSI-цвета для терминала
const COLORS = {
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  dim: '\x1b[2m',
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  bgYellow: '\x1b[43m\x1b[30m',
  bgRed: '\x1b[41m\x1b[37m',
};

printDiagnostics(components);

// --- Запись результата ---

// Режим single: один общий файл _docs/meta/components-meta.json
function writeSingleFile(output, cfg) {
  const outputDir = join(ROOT, cfg.outputDir);
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = join(outputDir, cfg.outputFile || 'components-meta.json');
  writeFileSync(outputPath, JSON.stringify(output, null, 2), 'utf8');

  console.log(`[meta-info] Единый файл → ${outputPath}`);
}

// Режим split: по файлу на компонент в _docs/meta/<componentsDir>/
// Имя файла = имя компонента (<ComponentName>.json), содержимое — его конфигурация.
// Дополнительно пишется _manifest.json: мета-инфо, страницы, инструкции и список компонентов.
function writeSplitFiles(output, cfg) {
  const outputDir = join(ROOT, cfg.outputDir);
  const componentsDir = join(outputDir, cfg.componentsDir || 'components');

  // Полностью пересоздаём папку, чтобы не оставались файлы удалённых компонентов
  if (existsSync(componentsDir)) {
    rmSync(componentsDir, { recursive: true, force: true });
  }
  mkdirSync(componentsDir, { recursive: true });

  const names = Object.keys(output.components);
  for (const name of names) {
    const filePath = join(componentsDir, `${name}.json`);
    writeFileSync(
      filePath,
      JSON.stringify(output.components[name], null, 2),
      'utf8'
    );
  }

  // Манифест: всё, что в single-файле лежит вокруг components
  const manifest = {
    generatedAt: output.generatedAt,
    version: output.version,
    instructions: output.instructions,
    pages: output.pages,
    components: names,
  };
  writeFileSync(
    join(componentsDir, '_manifest.json'),
    JSON.stringify(manifest, null, 2),
    'utf8'
  );

  console.log(
    `[meta-info] По файлу на компонент (${names.length}) → ${componentsDir}`
  );
}

// --- Storybook URL из title ---

function buildStorybookUrl(title) {
  if (!storybookBaseUrl || !title) return null;
  const storyId = title.toLowerCase().replace(/\//g, '-').replace(/\s+/g, '-');
  return `${storybookBaseUrl}/?path=/docs/${storyId}--docs`;
}

// --- Обработка простого компонента (строка в конфиге) ---
// Автодетект: ищем папку, находим *.mdx и *.stories.tsx

function processSimpleComponent(resolved, entry) {
  let storybookTitle = null;
  let storybookTitleFallback = null;
  const result = {
    title: resolved.name,
    category: null,
    docs: '',
    apiDocs: '',
    api: [],
    stories: [],
  };

  if (typeof entry === 'object') {
    if (entry.type) result.type = entry.type;
    if (entry.scope) result.scope = entry.scope;
    if (entry.scopeNote) result.scopeNote = entry.scopeNote;
    if (entry.description) result.description = entry.description;
    if (entry.category) result.category = entry.category;
    if (entry.hint) result.hint = entry.hint;
    if (entry.keywords?.length) result.keywords = entry.keywords;
    if (entry.role) result.role = entry.role;
  }

  for (const mdxPath of resolved.docsMdx) {
    if (!storybookTitle) storybookTitle = extractTitleFromMdx(mdxPath);
    const markdown = parseMdx(mdxPath, typesMap, null);
    result.docs += (result.docs ? '\n\n' : '') + markdown;

    if (!result.category) {
      result.category = extractCategoryFromMdx(mdxPath);
    }
  }

  for (const mdxPath of resolved.apiMdx) {
    const apiMarkdown = parseMdx(mdxPath, typesMap, null);
    result.apiDocs += (result.apiDocs ? '\n\n' : '') + apiMarkdown;
    const types = extractTypesFromApiMarkdown(apiMarkdown, mdxPath);
    result.api.push(...types);
  }

  for (const storyPath of resolved.storyFiles) {
    const { meta, stories } = parseStories(storyPath, typesMap, funcsMap);
    result.stories.push(...stories);

    if (meta.title) {
      pickBestTitle(meta.title, resolved.name);
    }
    if (!result.category && meta.category) {
      result.category = meta.category;
    }
  }

  result.storybookUrl = buildStorybookUrl(
    storybookTitle || storybookTitleFallback
  );
  return result;

  function pickBestTitle(title, componentName) {
    const lastSegment = title.split('/').pop().toLowerCase();
    if (lastSegment === componentName.toLowerCase()) {
      storybookTitle = title;
    } else if (!storybookTitleFallback) {
      storybookTitleFallback = title;
    }
  }
}

// --- Обработка сложного компонента (объект в конфиге) ---
// Явная конфигурация: rootDocs, api.dir, features[], exclude[]

function processComplexComponent(resolved, entry) {
  let storybookTitle = null;
  let storybookTitleFallback = null;
  const result = {
    title: resolved.name,
    category: entry.category || null,
    docs: '',
    apiDocs: '',
    api: [],
    stories: [],
    features: {},
  };

  if (entry.type) result.type = entry.type;
  if (entry.scope) result.scope = entry.scope;
  if (entry.scopeNote) result.scopeNote = entry.scopeNote;
  if (entry.description) result.description = entry.description;
  if (entry.hint) result.hint = entry.hint;
  if (entry.keywords?.length) result.keywords = entry.keywords;
  if (entry.role) result.role = entry.role;

  const argTypesMapping = entry.api?.argTypesMapping || null;

  // Docs — корневая документация
  for (const mdxPath of resolved.docsMdx) {
    if (!storybookTitle) storybookTitle = extractTitleFromMdx(mdxPath);
    const markdown = parseMdx(mdxPath, typesMap, argTypesMapping);
    result.docs += (result.docs ? '\n\n' : '') + markdown;
  }

  // API — текст + типы из MDX файлов (TypeSourceViewer / CustomArgTypes)
  for (const mdxPath of resolved.apiMdx) {
    const apiMarkdown = parseMdx(mdxPath, typesMap, argTypesMapping);
    result.apiDocs += (result.apiDocs ? '\n\n' : '') + apiMarkdown;
    const types = extractTypesFromApiMarkdown(apiMarkdown, mdxPath);
    result.api.push(...types);
  }

  // Фолбек: если MDX не дал типов, берём напрямую из исходников по argTypesMapping
  if (result.api.length === 0 && argTypesMapping) {
    for (const [compName, mapping] of Object.entries(argTypesMapping)) {
      const key = `${mapping.filePath}$$$${mapping.typeName}`;
      let typeSource = typesMap[key];
      if (!typeSource) {
        typeSource = copyTypeAsStringSync(mapping.filePath, mapping.typeName);
      }
      if (typeSource) {
        result.api.push({ typeName: mapping.typeName, source: typeSource });
      }
    }
  }

  // Stories на корневом уровне (обычно пустые заглушки для API)
  for (const storyPath of resolved.storyFiles) {
    const { meta, stories } = parseStories(storyPath, typesMap, funcsMap);
    result.stories.push(...stories);
    if (meta.title) {
      pickBestTitle(meta.title, resolved.name);
    }
  }

  // Features — подпапки, каждая как мини-компонент
  for (const feature of resolved.features) {
    let featureTitle = null;
    let featureTitleFallback = null;
    const featureResult = {
      docs: '',
      apiDocs: '',
      api: [],
      stories: [],
    };

    for (const mdxPath of feature.docsMdx) {
      if (!featureTitle) featureTitle = extractTitleFromMdx(mdxPath);
      const markdown = parseMdx(mdxPath, typesMap, argTypesMapping);
      featureResult.docs += (featureResult.docs ? '\n\n' : '') + markdown;
    }

    for (const mdxPath of feature.apiMdx) {
      const apiMarkdown = parseMdx(mdxPath, typesMap, argTypesMapping);
      featureResult.apiDocs +=
        (featureResult.apiDocs ? '\n\n' : '') + apiMarkdown;
      const types = extractTypesFromApiMarkdown(apiMarkdown, mdxPath);
      featureResult.api.push(...types);
    }

    for (const storyPath of feature.storyFiles) {
      const { meta, stories } = parseStories(storyPath, typesMap, funcsMap);
      featureResult.stories.push(...stories);
      if (meta.title) {
        const lastSegment = meta.title.split('/').pop().toLowerCase();
        const featureName = feature.name.split('/').pop().toLowerCase();
        if (lastSegment === featureName) {
          featureTitle = featureTitle || meta.title;
        } else if (!featureTitleFallback) {
          featureTitleFallback = meta.title;
        }
      }
    }

    featureResult.storybookUrl = buildStorybookUrl(
      featureTitle || featureTitleFallback
    );
    result.features[feature.name] = featureResult;
  }

  result.storybookUrl = buildStorybookUrl(
    storybookTitle || storybookTitleFallback
  );
  return result;

  function pickBestTitle(title, componentName) {
    const lastSegment = title.split('/').pop().toLowerCase();
    if (lastSegment === componentName.toLowerCase()) {
      storybookTitle = storybookTitle || title;
    } else if (!storybookTitleFallback) {
      storybookTitleFallback = title;
    }
  }
}

// --- Утилиты ---

// Извлекает типы из Markdown: находит блоки ```typescript ... ```
function extractTypesFromApiMarkdown(apiMarkdown, sourcePath) {
  const types = [];
  const codeBlockRegex = /```typescript\n([\s\S]*?)```/g;
  let match;

  while ((match = codeBlockRegex.exec(apiMarkdown)) !== null) {
    const source = match[1].trim();
    const typeNameMatch = source.match(
      /(?:export\s+)?(?:type|interface)\s+(\w+)/
    );
    const typeName = typeNameMatch ? typeNameMatch[1] : 'Unknown';
    types.push({ typeName, source });
  }

  return types;
}

// =====================================================================
//  ДИАГНОСТИКА — выводит предупреждения о проблемах в сгенерированных данных
// =====================================================================

function printDiagnostics(comps) {
  const warnings = []; // жёлтые — не критично, но стоит обратить внимание
  const errors = []; // красные — что-то точно не так

  for (const [name, comp] of Object.entries(comps)) {
    // --- Проверка Storybook URL ---
    if (!comp.storybookUrl) {
      warnings.push(`${name}: нет ссылки на Storybook (storybookUrl)`);
    }

    // --- Проверка документации ---
    if (!comp.docs || comp.docs.trim().length < 20) {
      // Для компонентов с features допустимо не иметь root-docs
      if (!comp.features || Object.keys(comp.features).length === 0) {
        errors.push(
          `${name}: нет документации (docs пустой или слишком короткий)`
        );
      } else {
        warnings.push(
          `${name}: нет корневой документации (есть features — может быть ок)`
        );
      }
    }

    // --- Проверка API ---
    const hasApi = comp.api && comp.api.length > 0;
    const hasApiDocs = comp.apiDocs && comp.apiDocs.trim().length > 20;
    if (!hasApi && !hasApiDocs) {
      warnings.push(`${name}: нет описания API (ни api[], ни apiDocs)`);
    }

    // --- Проверка stories ---
    if (!comp.stories || comp.stories.length === 0) {
      if (!comp.features || Object.keys(comp.features).length === 0) {
        warnings.push(`${name}: нет примеров кода (stories пустой)`);
      }
    }

    // --- Проверка кода отдельных stories ---
    if (comp.stories) {
      for (const story of comp.stories) {
        if (!story.code || story.code.trim().length === 0) {
          errors.push(`${name}.${story.exportName}: пустой код`);
        } else if (story.code.includes('[meta-info]')) {
          // [meta-info] — маркер ошибки парсинга (функция не найдена и т.д.)
          const marker = story.code.match(/\[meta-info\]\s*(.+)/);
          const reason = marker ? marker[1].trim() : 'неизвестная ошибка';
          errors.push(`${name}.${story.exportName}: ${reason}`);
        }
      }
    }

    // --- Проверка features ---
    if (comp.features) {
      for (const [featName, feat] of Object.entries(comp.features)) {
        if (!feat.docs || feat.docs.trim().length < 10) {
          warnings.push(`${name} → ${featName}: нет документации фичи`);
        }
        if (!feat.stories || feat.stories.length === 0) {
          warnings.push(`${name} → ${featName}: нет примеров фичи`);
        }
        if (feat.stories) {
          for (const story of feat.stories) {
            if (!story.code || story.code.trim().length === 0) {
              errors.push(
                `${name} → ${featName}.${story.exportName}: пустой код`
              );
            } else if (story.code.includes('[meta-info]')) {
              const marker = story.code.match(/\[meta-info\]\s*(.+)/);
              const reason = marker ? marker[1].trim() : 'неизвестная ошибка';
              errors.push(
                `${name} → ${featName}.${story.exportName}: ${reason}`
              );
            }
          }
        }
      }
    }
  }

  // --- Статистика ---
  let totalStories = 0;
  let totalFeatures = 0;
  for (const comp of Object.values(comps)) {
    totalStories += comp.stories?.length || 0;
    if (comp.features) {
      totalFeatures += Object.keys(comp.features).length;
      for (const feat of Object.values(comp.features)) {
        totalStories += feat.stories?.length || 0;
      }
    }
  }

  console.log(
    `\n${COLORS.cyan}╔══════════════════════════════════════════════════════╗${COLORS.reset}`
  );
  console.log(
    `${COLORS.cyan}║${COLORS.reset}  ${COLORS.bold}Диагностика meta-info${COLORS.reset}                               ${COLORS.cyan}║${COLORS.reset}`
  );
  console.log(
    `${COLORS.cyan}╠══════════════════════════════════════════════════════╣${COLORS.reset}`
  );
  console.log(
    `${COLORS.cyan}║${COLORS.reset}  Компонентов: ${Object.keys(comps)
      .length.toString()
      .padStart(3)}  |  Stories: ${totalStories
      .toString()
      .padStart(3)}  |  Features: ${totalFeatures.toString().padStart(3)}  ${
      COLORS.cyan
    }║${COLORS.reset}`
  );
  console.log(
    `${COLORS.cyan}╠══════════════════════════════════════════════════════╣${COLORS.reset}`
  );

  if (errors.length === 0 && warnings.length === 0) {
    console.log(
      `${COLORS.cyan}║${COLORS.reset}  ✅ Проблем не обнаружено                             ${COLORS.cyan}║${COLORS.reset}`
    );
  }

  if (errors.length > 0) {
    console.log(
      `${COLORS.cyan}║${COLORS.reset}                                                      ${COLORS.cyan}║${COLORS.reset}`
    );
    console.log(
      `${COLORS.cyan}║${COLORS.reset}  ${COLORS.bgRed} ОШИБКИ (${errors.length}) ${COLORS.reset}                                       ${COLORS.cyan}║${COLORS.reset}`
    );
    console.log(
      `${COLORS.cyan}║${COLORS.reset}                                                      ${COLORS.cyan}║${COLORS.reset}`
    );
    for (const err of errors) {
      console.log(
        `${COLORS.cyan}║${COLORS.reset}  ${COLORS.red}✗${COLORS.reset} ${err}`
      );
    }
  }

  if (warnings.length > 0) {
    console.log(
      `${COLORS.cyan}║${COLORS.reset}                                                      ${COLORS.cyan}║${COLORS.reset}`
    );
    console.log(
      `${COLORS.cyan}║${COLORS.reset}  ${COLORS.bgYellow} ПРЕДУПРЕЖДЕНИЯ (${warnings.length}) ${COLORS.reset}                              ${COLORS.cyan}║${COLORS.reset}`
    );
    console.log(
      `${COLORS.cyan}║${COLORS.reset}                                                      ${COLORS.cyan}║${COLORS.reset}`
    );
    for (const warn of warnings) {
      console.log(
        `${COLORS.cyan}║${COLORS.reset}  ${COLORS.yellow}⚠${COLORS.reset} ${warn}`
      );
    }
  }

  console.log(
    `${COLORS.cyan}║${COLORS.reset}                                                      ${COLORS.cyan}║${COLORS.reset}`
  );
  console.log(
    `${COLORS.cyan}╚══════════════════════════════════════════════════════╝${COLORS.reset}`
  );
}
