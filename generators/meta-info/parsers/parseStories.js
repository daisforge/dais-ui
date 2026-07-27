/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/extensions */

/*
 * parseStories.js — извлечение примеров кода из .stories.tsx
 *
 * Что делает:
 *   Читает файл .stories.tsx и для каждой export const XXX: Story
 *   извлекает код примера — то, что потом покажется разработчику в документации.
 *
 * Как работает:
 *   1. Ищет все export const ... : Story = { ... } в файле
 *   2. Для каждой стори определяет «паттерн» — как именно написан пример
 *   3. По паттерну извлекает код (render-функцию, args, preCode)
 *   4. Резолвит ссылки: getFuncAsString → реальный код из functions.string.json
 *
 * Приоритет извлечения кода:
 *   1. storySourceDoc({ code: varName }) — автор явно указал переменную с кодом
 *   2. Автоопределение по паттерну (args-only / inline-render / named-function / render-method)
 *
 * Зависимости:
 *   - extractRender.js — низкоуровневые функции для парсинга текста
 *   - functions.string.json — тексты функций (генерируется generate-storybook-func-as-string-json.js)
 */

import { readFileSync } from 'fs';

import { getStrWithReplacedNewLineSymbols } from '../../helpers.js';
import {
  detectStoryPattern,
  extractArgsBlock,
  extractConstFunctionFromFile,
  extractFunctionFromFile,
  extractNamedFunctionRef,
  extractPreCode,
  extractRenderBody,
  extractRenderMethodBody,
  extractStoryExports,
  extractStorySourceDocCodeVar,
} from './extractRender.js';

// =====================================================================
//  ГЛАВНАЯ ФУНКЦИЯ
// =====================================================================

/**
 * Парсит файл .stories.tsx и возвращает мета-информацию + массив примеров.
 *
 * @param {string} filePath — путь к .stories.tsx файлу
 * @param {Object} typesMap — lookup типов (ключи "filePath$$$typeName")
 * @param {Object} funcsMap — lookup функций (ключи "filePath$$$funcName")
 * @returns {{ meta: { title, category }, stories: Array<{ exportName, displayName, type, code }> }}
 */
export function parseStories(filePath, typesMap, funcsMap) {
  let content = readFileSync(filePath, 'utf8');
  content = getStrWithReplacedNewLineSymbols(content);

  // Достаём title и category из meta: title: 'Категория/Компонент'
  const meta = extractMeta(content);

  // Находим все export const ... : Story = { ... }
  const storyExports = extractStoryExports(content);
  const stories = [];

  for (const { exportName, displayName, objectText } of storyExports) {
    // --- Приоритет 1: явно указанный код через storySourceDoc({ code: varName }) ---
    let code = extractCodeFromStorySourceDoc(content, objectText, funcsMap);

    // --- Определяем паттерн стори ---
    const pattern = detectStoryPattern(objectText);

    // --- Приоритет 2: извлекаем код по паттерну ---
    if (!code) {
      switch (pattern) {
        case 'args-only':
          code = extractArgsCode(objectText);
          break;

        case 'inline-render':
          code = extractInlineRenderCode(content, objectText, funcsMap);
          break;

        case 'named-function':
          code = extractNamedFunctionCode(content, objectText, funcsMap);
          break;

        case 'render-method':
          code = extractRenderMethodCode(content, objectText, funcsMap);
          break;

        default:
          code = `// [meta-info] Не удалось извлечь код (паттерн: ${pattern})`;
      }
    }

    // Пропускаем пустые стори-заглушки (используются для API-страниц)
    if (code && code.trim() === '() => <></>') continue;

    const type = pattern === 'args-only' ? 'args-only' : 'full-code';
    stories.push({ exportName, displayName, type, code });
  }

  return { meta, stories };
}

// =====================================================================
//  ИЗВЛЕЧЕНИЕ META
// =====================================================================

// Из title: 'Категория/Компонент' достаём { title, category }
// Пример: 'Локальные компоненты/TextField' → category = 'Локальные компоненты'
function extractMeta(content) {
  const metaStart = content.search(/(?:const\s+meta\b|export\s+default\s*\{)/);
  const searchContent = metaStart >= 0 ? content.slice(metaStart) : content;
  const titleMatch = searchContent.match(/title:\s*['"]([^'"]+)['"]/);
  const title = titleMatch ? titleMatch[1] : null;

  let category = null;
  if (title) {
    const parts = title.split('/');
    if (parts.length > 1) {
      category = parts.slice(0, -1).join('/');
    }
  }

  return { title, category };
}

// =====================================================================
//  ИЗВЛЕЧЕНИЕ КОДА ПО ПАТТЕРНАМ
// =====================================================================

// --- args-only ---
// Стори без render — только args: { label: 'Click me', size: 's' }
// Возвращаем текст объекта args как есть
function extractArgsCode(objectText) {
  const argsBlock = extractArgsBlock(objectText);
  if (!argsBlock) return null;
  return argsBlock;
}

// --- inline-render ---
// Стори с render: () => ... (стрелочная функция прямо в объекте)
//
// Три подслучая:
//   1. render вызывает локальную функцию: (args) => <StoryRender {...args} />
//      → находим определение StoryRender в файле и показываем его код
//   2. render содержит ...args: (args) => <Comp {...args} onChange={...} />
//      → показываем render + args-блок для контекста
//   3. Обычный render: () => <Comp prop="val" />
//      → показываем render как есть
//
// Во всех случаях если есть preCode (импорты, хелперы) — добавляем перед render.
function extractInlineRenderCode(fileContent, objectText, funcsMap) {
  const renderBody = extractRenderBody(objectText);
  let preCode = extractPreCode(fileContent, objectText);

  if (!renderBody) return null;

  // Резолвим интерполяции в preCode (например ${getFuncAsString(...)})
  if (preCode) {
    preCode = resolveInterpolations(preCode, fileContent, funcsMap);
  }

  // Подслучай 1: render просто вызывает локальную функцию
  // (args) => <StoryRender {...args} /> → ищем function StoryRender или const StoryRender
  const localFuncMatch = renderBody.match(
    /^\(args\)\s*=>\s*<(\w+)\s+\{\.\.\.args\}\s*\/>/
  );
  if (localFuncMatch) {
    const funcName = localFuncMatch[1];
    // Ищем как обычную функцию: function StoryRender() { ... }
    let funcBody = extractFunctionFromFile(fileContent, funcName);
    // Ищем как стрелочную: const StoryRender: FC<...> = (args) => { ... }
    if (!funcBody) {
      funcBody = extractConstFunctionFromFile(fileContent, funcName);
    }
    if (funcBody) {
      const argsBlock = extractArgsBlock(objectText);
      const parts = [];
      if (preCode) parts.push(preCode);
      parts.push(funcBody);
      if (argsBlock) parts.push(`// Props:\n${argsBlock}`);
      return parts.join('\n\n');
    }
  }

  // Подслучай 2: render содержит ...args → добавляем args для понимания пропсов
  if (renderBody.includes('...args')) {
    const argsBlock = extractArgsBlock(objectText);
    const parts = [];
    if (preCode) parts.push(preCode);
    parts.push(renderBody);
    if (argsBlock) parts.push(`// Props:\n${argsBlock}`);
    return parts.join('\n\n');
  }

  // Подслучай 3: обычный render — показываем как есть
  const parts = [];
  if (preCode) parts.push(preCode);
  parts.push(renderBody);
  return parts.join('\n\n');
}

// --- storySourceDoc({ code: varName }) ---
// Автор явно указал переменную с готовым кодом примера.
// Находим переменную в файле и резолвим её содержимое.
function extractCodeFromStorySourceDoc(fileContent, objectText, funcsMap) {
  const codeVarName = extractStorySourceDocCodeVar(objectText);
  if (!codeVarName) return null;

  return resolveCodeVariable(fileContent, codeVarName, funcsMap);
}

// --- render-method ---
// render() { ... } — метод объекта (без двоеточия после render)
// Извлекаем тело метода + preCode если есть
function extractRenderMethodCode(fileContent, objectText, funcsMap) {
  const body = extractRenderMethodBody(objectText);
  const preCode = extractPreCode(fileContent, objectText);

  if (!body) return null;

  const parts = [];
  if (preCode) {
    parts.push(resolveInterpolations(preCode, fileContent, funcsMap));
  }
  parts.push(`render() ${body}`);
  return parts.join('\n\n');
}

// --- named-function ---
// render: MyFunction — ссылка на функцию по имени.
// Ищем код функции в 3 местах (от самого надёжного к фолбеку):
//   1. Шаблонная строка: const myCode = `import...\n${getFuncAsString(...)}`
//   2. functions.string.json по ключу "filePath$$$funcName"
//   3. Определение function прямо в файле stories
function extractNamedFunctionCode(fileContent, objectText, funcsMap) {
  const funcName = extractNamedFunctionRef(objectText);
  if (!funcName) return null;

  // 1. Ищем шаблонную строку с getFuncAsString для этой функции
  const codeVarPattern = new RegExp(
    `(?:const|let|var)\\s+(\\w+)\\s*=\\s*\`([\\s\\S]*?getFuncAsString\\([\\s\\S]*?['"]${funcName}['"][\\s\\S]*?\\))[\\s\\S]*?\``,
    'm'
  );
  const codeVarMatch = fileContent.match(codeVarPattern);

  if (codeVarMatch) {
    const templateContent = codeVarMatch[2];
    return resolveTemplateWithGetFuncAsString(
      templateContent,
      fileContent,
      funcsMap
    );
  }

  // 2. Прямой поиск в functions.string.json
  const funcKey = findFuncKey(funcsMap, funcName);
  if (funcKey && funcsMap[funcKey]) {
    const preCode = extractPreCode(fileContent, objectText);
    const parts = [];
    if (preCode) parts.push(preCode);
    parts.push(funcsMap[funcKey]);
    return parts.join('\n\n');
  }

  // 3. Определение функции прямо в файле stories
  const funcBody = extractFunctionFromFile(fileContent, funcName);
  if (funcBody) {
    const preCode = extractPreCode(fileContent, objectText);
    const parts = [];
    if (preCode) parts.push(preCode);
    parts.push(funcBody);
    return parts.join('\n\n');
  }

  return `// [meta-info] Функция ${funcName} не найдена`;
}

// =====================================================================
//  РЕЗОЛВИНГ ПЕРЕМЕННЫХ И ИНТЕРПОЛЯЦИЙ
// =====================================================================

// Резолвит переменную, указанную в storySourceDoc({ code: varName }).
// Ищет определение переменной в файле и подставляет реальный код.
//
// Два варианта определения:
//   const varName = `import...\n${getFuncAsString(...)}` — шаблонная строка
//   const varName = getFuncAsString('path', 'name')     — прямой вызов
function resolveCodeVariable(fileContent, varName, funcsMap) {
  // Вариант 1: шаблонная строка с интерполяциями
  const varDefRegex = new RegExp(
    `(?:const|let|var)\\s+${varName}\\s*=\\s*\`([\\s\\S]*?)\``,
    'm'
  );
  const varDef = fileContent.match(varDefRegex);

  if (varDef) {
    const templateContent = varDef[1];
    return resolveInterpolations(templateContent, fileContent, funcsMap);
  }

  // Вариант 2: прямой вызов getFuncAsString('filePath', 'funcName')
  const gfsRegex = new RegExp(
    `(?:const|let|var)\\s+${varName}\\s*=\\s*getFuncAsString\\(\\s*['"]([^'"]+)['"]\\s*,\\s*['"]([^'"]+)['"]\\s*\\)`
  );
  const gfsMatch = fileContent.match(gfsRegex);
  if (gfsMatch) {
    const key = `${gfsMatch[1]}$$$${gfsMatch[2]}`;
    return (
      funcsMap[key] || `// [meta-info] ${gfsMatch[2]} не найдена (ключ: ${key})`
    );
  }

  return null;
}

// Разбирает шаблонную строку вида:
//   `import { Button } from '...'\n\n${getFuncAsString('path', 'Name')}`
// Часть до ${getFuncAsString} — обычно импорты.
// getFuncAsString → подставляем реальный код функции из funcsMap.
function resolveTemplateWithGetFuncAsString(
  templateContent,
  fileContent,
  funcsMap
) {
  // Всё до ${getFuncAsString(...)} — обычно импорты
  const parts = templateContent.split(/\$\{getFuncAsString\(/);
  const imports = parts[0].trim();

  // Достаём аргументы getFuncAsString('filePath', 'funcName')
  const getFuncMatch = templateContent.match(
    /getFuncAsString\(\s*['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*\)/
  );

  if (!getFuncMatch) return imports || null;

  const [, fp, fn] = getFuncMatch;
  const key = `${fp}$$$${fn}`;
  const funcBody = funcsMap[key];

  if (funcBody) {
    return `${imports}\n\n${funcBody}`;
  }

  return `${imports}\n\n// [meta-info] ${fn} не найдена в functions.string.json (ключ: ${key})`;
}

// Ищет ключ в funcsMap по имени функции.
// Ключи имеют формат "filePath$$$funcName", ищем совпадение по суффиксу.
function findFuncKey(funcsMap, funcName) {
  return Object.keys(funcsMap).find((key) => key.endsWith(`$$$${funcName}`));
}

/**
 * Подставляет реальные значения вместо интерполяций в шаблонных строках.
 *
 * Обрабатывает два типа:
 *   ${getFuncAsString('path', 'name')} → код функции из funcsMap
 *   ${varName}                         → содержимое const varName = `...` из файла
 *
 * Второй тип нужен для случаев вроде PageLayout, где preCode-переменная
 * используется в нескольких стори: const preCode = `import...`
 * а потом const code = `${preCode}\n${getFuncAsString(...)}`
 */
function resolveInterpolations(template, fileContent, funcsMap) {
  return template
    .replace(
      // Сначала резолвим getFuncAsString — это самый конкретный паттерн
      /\$\{getFuncAsString\(\s*['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*\)\}/g,
      (match, fp, fn) => {
        const key = `${fp}$$$${fn}`;
        return (
          funcsMap[key] || `// [meta-info] ${fn} не найдена (ключ: ${key})`
        );
      }
    )
    .replace(
      // Потом резолвим простые переменные ${varName}
      /\$\{(\w+)\}/g,
      (match, varName) => {
        const varRegex = new RegExp(
          `(?:const|let|var)\\s+${varName}\\s*=\\s*\`([\\s\\S]*?)\``,
          'm'
        );
        const varDef = fileContent.match(varRegex);
        if (varDef) return varDef[1].trim();
        // Если не нашли — оставляем как есть (может быть код типа `${i + 1}`)
        return match;
      }
    )
    .trim();
}
