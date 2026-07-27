/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-continue */
/* eslint-disable no-cond-assign */

/*
 * extractRender.js — низкоуровневый парсер текста .stories.tsx файлов
 *
 * Что делает:
 *   Работает с ТЕКСТОМ файла (не AST). Через регулярки и подсчёт скобок
 *   находит и вырезает нужные куски кода: объекты стори, render-функции,
 *   args-блоки, preCode и т.д.
 *
 * Зачем:
 *   parseStories.js вызывает эти функции чтобы получить код примеров.
 *   Этот файл — «ножницы», а parseStories.js — «сборщик».
 *
 * Ключевой принцип:
 *   extractBalancedBlock() — основа всего. Находит парную закрывающую скобку
 *   для открывающей, пропуская скобки внутри строк, шаблонов и комментариев.
 *   Без этого JSX-комментарии {/* ... * /} ломают подсчёт.
 */

// =====================================================================
//  ОСНОВНЫЕ ФУНКЦИИ (используются в parseStories.js)
// =====================================================================

/**
 * Находит все стори в файле.
 *
 * Что ищет: `export const MyStory: Story = { ... }`
 * Что возвращает: массив { exportName, displayName, objectText }
 *   - exportName  — имя переменной (MyStory)
 *   - displayName — из поля name: 'Красивое имя' (или exportName если нет)
 *   - objectText  — весь текст объекта { ... } целиком
 */
export function extractStoryExports(fileContent) {
  const stories = [];
  const regex =
    /export\s+const\s+(\w+)\s*:\s*(?:Story|StoryObj[^=]*)\s*=\s*\{/g;
  let match;

  while ((match = regex.exec(fileContent)) !== null) {
    const exportName = match[1];
    if (exportName === 'default') continue;

    // Позиция открывающей { объекта стори
    const startIndex = match.index + match[0].length - 1;
    const objectText = extractBalancedBlock(fileContent, startIndex, '{', '}');
    if (!objectText) continue;

    const nameMatch = objectText.match(/name:\s*['"]([^'"]+)['"]/);
    const displayName = nameMatch ? nameMatch[1] : exportName;

    stories.push({ exportName, displayName, objectText });
  }

  return stories;
}

/**
 * Определяет, как стори рендерит компонент (какой «паттерн» используется).
 *
 * Паттерны:
 *   'args-only'      — нет render, только args: {...}. Storybook рендерит сам.
 *   'inline-render'  — render: () => ... (стрелочная функция прямо в объекте)
 *   'named-function' — render: MyFunction (ссылка на функцию по имени)
 *   'render-method'  — render() { ... } (метод объекта, без двоеточия)
 *   'unknown'        — не удалось определить
 */
export function detectStoryPattern(objectText) {
  const hasRenderProp = /\brender\s*:/.test(objectText);
  const hasRenderMethod = /\brender\s*\(\s*\)/.test(objectText);
  const hasArgs = /\bargs\s*:/.test(objectText);

  // Нет render вообще — значит только args
  if (!hasRenderProp && !hasRenderMethod && hasArgs) return 'args-only';

  // render() { ... } — метод (без двоеточия после render)
  if (hasRenderMethod && !hasRenderProp) return 'render-method';

  if (hasRenderProp) {
    const renderMatch = objectText.match(/\brender\s*:\s*/);
    if (!renderMatch) return 'unknown';

    const afterRender = objectText.slice(
      renderMatch.index + renderMatch[0].length
    );

    // render: () => ... или render: function ...
    if (/^\(/.test(afterRender) || /^function/.test(afterRender)) {
      return 'inline-render';
    }

    // render: MyFunc — имя с заглавной буквы = ссылка на функцию
    if (/^[A-Z]\w*/.test(afterRender)) {
      return 'named-function';
    }

    return 'inline-render';
  }

  return 'unknown';
}

/**
 * Извлекает тело render-функции из объекта стори.
 *
 * Поддерживает 4 формата записи:
 *   1. render: (args) => { return <Comp /> }     — стрелочная с блоком
 *   2. render: () => (<Comp />)                   — стрелочная с круглыми скобками
 *   3. render: () => <Comp />                     — стрелочная без скобок (голый JSX)
 *   4. render: function Name() { ... }            — обычная функция
 *
 * Возвращает строку вида "(args) => { ... }" или null если не нашёл.
 */
export function extractRenderBody(objectText) {
  const renderMatch = objectText.match(/\brender\s*:\s*/);
  if (!renderMatch) return null;

  const startAfterRender = renderMatch.index + renderMatch[0].length;
  const afterRender = objectText.slice(startAfterRender);

  // Формат 1: (args) => { ... }
  const arrowBlockMatch = afterRender.match(/^(?:\([^)]*\)|(\w+))\s*=>\s*\{/);
  if (arrowBlockMatch) {
    const bodyStart = afterRender.indexOf(
      '{',
      arrowBlockMatch[0].indexOf('=>')
    );
    const block = extractBalancedBlock(afterRender, bodyStart, '{', '}');
    if (block) {
      const params = afterRender.slice(0, afterRender.indexOf('=>')).trim();
      return `${params} => ${block}`;
    }
  }

  // Формат 2: () => ( <Comp /> )
  const arrowParenMatch = afterRender.match(/^(?:\([^)]*\)|(\w+))\s*=>\s*\(/);
  if (arrowParenMatch) {
    const bodyStart = afterRender.indexOf('(', afterRender.indexOf('=>'));
    const block = extractBalancedBlock(afterRender, bodyStart, '(', ')');
    if (block) {
      const params = afterRender.slice(0, afterRender.indexOf('=>')).trim();
      return `${params} => ${block}`;
    }
  }

  // Формат 3: () => <Comp /> (голый JSX без обёрточных скобок)
  const arrowJsxMatch = afterRender.match(/^(?:\([^)]*\)|(\w+))\s*=>\s*</);
  if (arrowJsxMatch) {
    const arrowPos = afterRender.indexOf('=>');
    const jsxStart = arrowPos + 2;
    const jsxBody = extractUntilCommaOrEnd(afterRender, jsxStart);
    if (jsxBody) {
      const params = afterRender.slice(0, arrowPos).trim();
      return `${params} => ${jsxBody}`;
    }
  }

  // Формат 4: render: function Name() { ... }
  const funcDeclMatch = afterRender.match(/^function\s+(\w+)\s*\([^)]*\)\s*\{/);
  if (funcDeclMatch) {
    const bodyStart = afterRender.indexOf('{', afterRender.indexOf('('));
    const block = extractBalancedBlock(afterRender, bodyStart, '{', '}');
    if (block) {
      const header = afterRender.slice(0, bodyStart).trim();
      return `${header} ${block}`;
    }
  }

  return null;
}

// =====================================================================
//  ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ-ИЗВЛЕКАТЕЛИ
// =====================================================================

// render: FunctionName → достаёт имя функции ("FunctionName")
export function extractNamedFunctionRef(objectText) {
  const renderMatch = objectText.match(/\brender\s*:\s*([A-Z]\w*)/);
  if (renderMatch) return renderMatch[1];
  return null;
}

// storySourceDoc({ code: myVar }) → достаёт имя переменной ("myVar")
export function extractStorySourceDocCodeVar(objectText) {
  const match = objectText.match(
    /storySourceDoc\(\s*\{[\s\S]*?\bcode\s*:\s*(\w+)/
  );
  if (match) return match[1];
  return null;
}

/**
 * Ищет обычную функцию в файле: function Name(...) { ... }
 * Возвращает полный текст функции (заголовок + тело) или null.
 */
export function extractFunctionFromFile(fileContent, funcName) {
  const regex = new RegExp(`function\\s+${funcName}\\s*\\([^)]*\\)\\s*\\{`);
  const match = fileContent.match(regex);
  if (!match) return null;

  const bodyStart = fileContent.indexOf(
    '{',
    match.index + match[0].indexOf('(')
  );
  const block = extractBalancedBlock(fileContent, bodyStart, '{', '}');
  if (!block) return null;

  const header = fileContent.slice(match.index, bodyStart).trim();
  return `${header} ${block}`;
}

/**
 * Ищет стрелочную функцию в файле: const Name: FC<...> = (...) => { ... }
 * Нужна для случаев вроде: const StoryRender: FC<Props> = (args) => { ... }
 * Возвращает полный текст (объявление + тело) или null.
 */
export function extractConstFunctionFromFile(fileContent, funcName) {
  const regex = new RegExp(
    `(?:const|let)\\s+${funcName}[^=]*=\\s*(?:(?:\\([^)]*\\)|\\w+)\\s*=>\\s*)`,
    'm'
  );
  const match = fileContent.match(regex);
  if (!match) return null;

  const afterArrow = match.index + match[0].length;
  const ch = fileContent[afterArrow];

  // Тело может быть в { ... } или в ( ... )
  let block;
  if (ch === '{') {
    block = extractBalancedBlock(fileContent, afterArrow, '{', '}');
  } else if (ch === '(') {
    block = extractBalancedBlock(fileContent, afterArrow, '(', ')');
  } else {
    return null;
  }
  if (!block) return null;

  return `${fileContent.slice(match.index, afterArrow).trim()} ${block}`;
}

// render() { ... } → достаёт тело метода (блок { ... })
export function extractRenderMethodBody(objectText) {
  const match = objectText.match(/\brender\s*\(\s*\)\s*\{/);
  if (!match) return null;

  const bodyStart = objectText.indexOf(
    '{',
    match.index + match[0].indexOf(')')
  );
  return extractBalancedBlock(objectText, bodyStart, '{', '}');
}

/**
 * Извлекает preCode — код, который показывается ПЕРЕД render.
 * Обычно это импорты, типы, хелперы — всё что нужно для понимания примера.
 *
 * Ищет в 4 форматах:
 *   1. preCode: `шаблонная строка`       — прямо в объекте стори
 *   2. preCode: 'обычная строка'          — в одинарных кавычках
 *   3. preCode: someVar                   — ссылка на переменную
 *   4. preCode (shorthand)                — { preCode } → ищет const preCode = `...`
 */
export function extractPreCode(fileContent, storyObjectText) {
  // Формат 1: шаблонная строка
  const inlineMatch = storyObjectText.match(/preCode\s*:\s*`([\s\S]*?)`/);
  if (inlineMatch) return inlineMatch[1].trim();

  // Формат 2: обычная строка
  const singleQuoteMatch = storyObjectText.match(/preCode\s*:\s*'([\s\S]*?)'/);
  if (singleQuoteMatch) return singleQuoteMatch[1].trim();

  // Формат 3: ссылка на переменную → ищем const someVar = `...` в файле
  const varMatch = storyObjectText.match(/preCode\s*:\s*(\w+)/);
  if (varMatch) {
    return resolvePreCodeVar(fileContent, varMatch[1]);
  }

  // Формат 4: shorthand { preCode } → ищем const preCode = `...` в файле
  const shorthandMatch = storyObjectText.match(/\bpreCode\b(?!\s*:)/);
  if (shorthandMatch) {
    return resolvePreCodeVar(fileContent, 'preCode');
  }

  return null;
}

// args: { ... } → достаёт весь текст объекта args как строку
export function extractArgsBlock(objectText) {
  const argsMatch = objectText.match(/\bargs\s*:\s*\{/);
  if (!argsMatch) return null;

  const startIndex = objectText.indexOf('{', argsMatch.index + 4);
  return extractBalancedBlock(objectText, startIndex, '{', '}');
}

// =====================================================================
//  ВНУТРЕННИЕ УТИЛИТЫ (не экспортируются)
// =====================================================================

// Ищет const varName = `...` в файле и возвращает содержимое шаблонной строки
function resolvePreCodeVar(fileContent, varName) {
  const varDefRegex = new RegExp(
    `(?:const|let|var)\\s+${varName}\\s*=\\s*\`([\\s\\S]*?)\``,
    'm'
  );
  const varDef = fileContent.match(varDefRegex);
  if (varDef) return varDef[1].trim();
  return null;
}

// =====================================================================
//  ПАРСЕР СКОБОК — ядро всего файла
// =====================================================================

/**
 * Находит парную закрывающую скобку для открывающей.
 *
 * Пример: extractBalancedBlock("{ a: { b } }", 0, '{', '}') → "{ a: { b } }"
 *
 * Считает глубину вложенности скобок, но ПРОПУСКАЕТ скобки внутри:
 *   - строк ('...' и "...")
 *   - шаблонных строк (`...${...}...`) — включая вложенные
 *   - комментариев (// ... и /* ... *\/)
 *
 * Без пропуска комментариев JSX-код {/* комментарий *\/} ломает подсчёт,
 * потому что { от {/* считается открывающей скобкой, а парной } для неё нет.
 */
function extractBalancedBlock(text, startIndex, openChar, closeChar) {
  if (text[startIndex] !== openChar) return null;

  let depth = 0;
  let i = startIndex;

  while (i < text.length) {
    const ch = text[i];

    // Пропускаем содержимое строк — внутри них скобки не считаем
    if (ch === "'" || ch === '"') {
      i = skipString(text, i);
      continue;
    }

    // Пропускаем шаблонные строки (с учётом вложенных ${...})
    if (ch === '`') {
      i = skipTemplateLiteral(text, i);
      continue;
    }

    // Пропускаем однострочные комментарии // ...
    if (ch === '/' && text[i + 1] === '/') {
      i = skipLineComment(text, i);
      continue;
    }

    // Пропускаем блочные комментарии /* ... */
    if (ch === '/' && text[i + 1] === '*') {
      i = skipBlockComment(text, i);
      continue;
    }

    // Считаем скобки
    if (ch === openChar) depth++;
    if (ch === closeChar) depth--;

    // Когда глубина вернулась к 0 — нашли парную скобку
    if (depth === 0) {
      return text.slice(startIndex, i + 1);
    }
    i++;
  }

  return null;
}

// --- Skip-функции ---
// Каждая принимает позицию начала и возвращает позицию СРАЗУ ПОСЛЕ пропущенного блока.

// 'строка' или "строка" — перепрыгивает до закрывающей кавычки, учитывая \'
function skipString(text, start) {
  const quote = text[start];
  let i = start + 1;
  while (i < text.length) {
    if (text[i] === '\\') {
      i += 2;
      continue;
    }
    if (text[i] === quote) return i + 1;
    i++;
  }
  return i;
}

/**
 * Перепрыгивает шаблонную строку `...`.
 *
 * Сложность: внутри ${...} могут быть другие строки и даже вложенные шаблоны.
 * Пример: `привет ${`вложенный ${x}`}` — три уровня вложенности.
 * Поэтому при встрече ${ рекурсивно обрабатываем содержимое интерполяции.
 */
function skipTemplateLiteral(text, start) {
  let i = start + 1;
  while (i < text.length) {
    if (text[i] === '\\') {
      i += 2;
      continue;
    }
    // Закрывающий бэктик — конец шаблона
    if (text[i] === '`') return i + 1;

    // Начало интерполяции ${...}
    if (text[i] === '$' && i + 1 < text.length && text[i + 1] === '{') {
      i += 2; // пропускаем ${
      let braceDepth = 1;
      // Ищем парную } для этой интерполяции
      while (i < text.length && braceDepth > 0) {
        if (text[i] === "'" || text[i] === '"') {
          i = skipString(text, i);
          continue;
        }
        // Вложенный шаблон внутри интерполяции — рекурсия
        if (text[i] === '`') {
          i = skipTemplateLiteral(text, i);
          continue;
        }
        if (text[i] === '{') braceDepth++;
        if (text[i] === '}') braceDepth--;
        if (braceDepth > 0) i++;
      }
      if (braceDepth === 0) i++; // пропускаем закрывающую }
      continue;
    }
    i++;
  }
  return i;
}

// Перепрыгивает до конца строки (для //)
function skipLineComment(text, start) {
  const lineEnd = text.indexOf('\n', start);
  return lineEnd === -1 ? text.length : lineEnd + 1;
}

// Перепрыгивает до */ (для /* ... */)
function skipBlockComment(text, start) {
  const commentEnd = text.indexOf('*/', start + 2);
  return commentEnd === -1 ? text.length : commentEnd + 2;
}

// =====================================================================
//  ВСПОМОГАТЕЛЬНЫЙ ПАРСЕР ДЛЯ ГОЛОГО JSX
// =====================================================================

/**
 * Для формата render: () => <Comp /> (без скобок-обёрток).
 * Извлекает текст до запятой или закрывающей скобки на нулевой глубине.
 * Нужен потому что у такого JSX нет чёткого «закрывающего символа» —
 * мы просто читаем до конца выражения.
 */
function extractUntilCommaOrEnd(text, startIndex) {
  let depth = 0;
  let inString = false;
  let stringChar = '';
  let angleBrackets = 0;

  for (let i = startIndex; i < text.length; i++) {
    const ch = text[i];
    const prev = i > 0 ? text[i - 1] : '';

    if (inString) {
      if (ch === stringChar && prev !== '\\') inString = false;
      continue;
    }

    if (ch === "'" || ch === '"' || ch === '`') {
      inString = true;
      stringChar = ch;
      continue;
    }

    if (ch === '{' || ch === '(') depth++;
    if (ch === '}' || ch === ')') {
      if (depth === 0) return text.slice(startIndex, i).trim();
      depth--;
    }
    if (ch === '<') angleBrackets++;
    if (ch === '>') angleBrackets--;
    if (ch === ',' && depth === 0 && angleBrackets <= 0) {
      return text.slice(startIndex, i).trim();
    }
  }

  return text.slice(startIndex).trim();
}
