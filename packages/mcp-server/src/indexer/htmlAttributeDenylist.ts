/* eslint-disable no-continue */
import { getProject } from './tsProject.js';

/**
 * Статические поля React-компонента (React.ComponentClass / FunctionComponent) —
 * не JSX-пропсы, а служебные члены. Не приходят из HTMLAttributes, поэтому
 * фильтруются отдельным точным списком имён.
 */
export const REACT_STATIC_MEMBER_NAMES = new Set([
  'propTypes',
  'contextTypes',
  'childContextTypes',
  'defaultProps',
  'displayName',
  'getDerivedStateFromError',
  'getDerivedStateFromProps',
  // styled-components API-шум: есть у КАЖДОГО styled(...)-компонента
  // (BoxProps и всё, что от него наследуется), почти никогда не используется
  // осмысленно в реальном коде.
  'theme',
  'forwardedAs',
]);

/**
 * Имена, которые всегда DOM/React-служебный шум независимо от текста типа —
 * дизайн-система их не переопределяет осмысленно нигде в кодовой базе.
 * НЕ добавлять сюда `disabled`, `size`, `value`, `checked`, `role`,
 * `tabIndex`, `hidden`, `draggable`, `color`, `autoComplete`,
 * `enterKeyHint` — их дизайн-система переопределяет, они должны проходить
 * через сравнение типов в isNoiseProp, иначе потеряем реальные пропсы.
 */
export const UNCONDITIONAL_NOISE_NAMES = new Set([
  'key',
  'ref',
  'dangerouslySetInnerHTML',
  'suppressContentEditableWarning',
  'suppressHydrationWarning',
  'contentEditable',
  'inputMode',
  'itemProp',
  'itemScope',
  'itemType',
  'itemID',
  'itemRef',
  'nonce',
  'is',
  'about',
  'datatype',
  'inlist',
  'prefix',
  'property',
  'resource',
  'typeof',
  'vocab',
  'security',
  'unselectable',
  'radioGroup',
  'results',
  'translate',
  'spellCheck',
]);

/** Безусловные паттерны имени: aria-*, data-*, обработчики *Capture. */
const UNCONDITIONAL_NOISE_PATTERNS = [/^aria-/, /^data-/, /^on[A-Z].*Capture$/];

let cachedDenylistMap: Map<string, string> | undefined;

/**
 * Пропсы `ComponentProps<typeof X>` почти всегда содержат ~300 унаследованных
 * DOM/ARIA-атрибутов (onDrag, aria-live, spellCheck...) вперемешку с реальными
 * пропсами дизайн-системы. Часть имён совпадает (disabled, size, value,
 * checked) — поэтому фильтруем не по имени, а по паре имя+текст типа: если
 * тип совпадает с "чистым" HTML-атрибутом дословно — значит дизайн-система
 * его не переопределяла, это шум. Если тип уже, чем в HTML (например
 * `size: "s" | "m" | "l"` вместо HTML `size: number`) — это осмысленный
 * пропс, оставляем.
 */
function buildDenylistMap(): Map<string, string> {
  const project = getProject();
  const tmp = project.createSourceFile(
    'packages/ui-kit/src/__mcp_denylist_probe.ts',
    `
      import type { AllHTMLAttributes, AriaAttributes, DOMAttributes } from 'react';
      export type __Denylist = AllHTMLAttributes<HTMLElement> & AriaAttributes & DOMAttributes<HTMLElement>;
    `,
    { overwrite: true },
  );

  const alias = tmp.getTypeAliasOrThrow('__Denylist');
  const map = new Map<string, string>();
  for (const symbol of alias.getType().getProperties()) {
    const decl = symbol.getValueDeclaration() ?? symbol.getDeclarations()[0];
    if (!decl) continue;
    try {
      map.set(symbol.getName(), symbol.getTypeAtLocation(decl).getText());
    } catch {
      // пропускаем нерезолвящиеся члены — не критично для денылиста
    }
  }

  tmp.forget();
  return map;
}

export function getDenylistMap(): Map<string, string> {
  if (!cachedDenylistMap) {
    cachedDenylistMap = buildDenylistMap();
  }
  return cachedDenylistMap;
}

/**
 * Снимает внешние скобки, только если они реально оборачивают весь текст
 * целиком (а не просто `(A) & (B)`, где скобки закрываются раньше конца).
 */
function stripOuterParens(typeText: string): string {
  if (!typeText.startsWith('(') || !typeText.endsWith(')')) return typeText;
  let depth = 0;
  for (let i = 0; i < typeText.length; i += 1) {
    if (typeText[i] === '(') depth += 1;
    else if (typeText[i] === ')') {
      depth -= 1;
      if (depth === 0 && i !== typeText.length - 1) return typeText;
    }
  }
  return typeText.slice(1, -1).trim();
}

function stripOuterParensRepeated(typeText: string): string {
  let t = typeText;
  for (let prev = ''; prev !== t; ) {
    prev = t;
    t = stripOuterParens(t).trim();
  }
  return t;
}

/**
 * Разбивает текст типа по union (`|`) или intersection (`&`) верхнего уровня
 * — то есть игнорирует вхождения разделителя внутри `<...>`, `(...)`,
 * `{...}`, `[...]` и строковых литералов (литеральные типы вроде `"a|b"`
 * в кодовой базе не встречаются, но на всякий случай не разбиваем и там).
 */
function splitTopLevel(typeText: string, separator: '|' | '&'): string[] {
  const parts: string[] = [];
  let depth = 0;
  let quote: string | null = null;
  let current = '';

  for (let i = 0; i < typeText.length; i += 1) {
    const ch = typeText[i];

    if (quote) {
      current += ch;
      if (ch === quote && typeText[i - 1] !== '\\') quote = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      quote = ch;
      current += ch;
      continue;
    }
    if (ch === '(' || ch === '[' || ch === '{' || ch === '<') depth += 1;
    else if (ch === ')' || ch === ']' || ch === '}' || ch === '>') depth -= 1;

    if (depth === 0 && ch === separator) {
      parts.push(current.trim());
      current = '';
      continue;
    }
    current += ch;
  }
  parts.push(current.trim());
  return parts;
}

/**
 * Убирает буквально повторяющиеся члены union/intersection верхнего уровня
 * (после нормализации конкретного HTML-элемента разные члены схлопываются
 * в один и тот же текст — см. normalizeElementGeneric).
 */
function dedupeTopLevel(typeText: string, separator: '|' | '&'): string {
  const t = stripOuterParensRepeated(typeText);
  if (!t.includes(separator)) return t;

  const members = splitTopLevel(t, separator).map(stripOuterParensRepeated);
  return Array.from(new Set(members)).join(` ${separator} `);
}

/**
 * Компоненты спредят DOM-пропсы на разные теги (input/button/div/...), из-за
 * чего у обработчиков событий и подобных полей меняется параметр конкретного
 * HTML-элемента (`FormEventHandler<HTMLDivElement>` vs `<HTMLInputElement>`),
 * хотя по сути это один и тот же непереопределённый DOM-пропс. Нормализуем
 * конкретный элемент перед сравнением, чтобы не терять их как "разные" типы.
 *
 * Дополнительно схлопываем алиасы, которые тайпчекер иногда печатает вместо
 * разложенного типа в зависимости от точки резолва: `Booleanish` (реальный
 * тип `boolean | "true" | "false"`), префикс `React.` (виден/не виден в
 * зависимости от того, реэкспортирован ли символ в области резолва) и
 * хвостовой `| undefined` (optional-модификатор и так учитывается отдельно
 * через SymbolFlags.Optional, в тексте типа он лишний шум для сравнения).
 *
 * Отдельный случай — компонент рендерит DOM-пропс на несколько разных
 * элементов (`ComponentProps<'input'> & ComponentProps<'div'>` или
 * `... | ComponentProps<'a'>`): тайпчекер печатает union/intersection
 * одного и того же обработчика с разными generic-параметрами
 * (`ClipboardEventHandler<HTMLInputElement> & ClipboardEventHandler<HTMLDivElement>`,
 * `MouseEventHandler<HTMLElement> | MouseEventHandler<HTMLAnchorElement>`),
 * которое после нормализации конкретного элемента схлопывается в буквально
 * повторяющиеся члены — убираем дубликаты на обоих уровнях.
 */
function normalizeElementGeneric(typeText: string): string {
  const t = typeText
    .replace(/HTML[A-Za-z]*Element/g, 'HTMLElement')
    .replace(/\bBooleanish\b/g, 'boolean | "true" | "false"')
    .replace(/\bReact\./g, '')
    .replace(/\s*\|\s*undefined\b/g, '')
    .trim();

  return dedupeTopLevel(dedupeTopLevel(t, '|'), '&');
}

/** true — считаем пропс шумом (унаследованный DOM-атрибут без переопределения). */
export function isNoiseProp(name: string, typeText: string): boolean {
  if (REACT_STATIC_MEMBER_NAMES.has(name)) return true;
  if (UNCONDITIONAL_NOISE_NAMES.has(name)) return true;
  if (UNCONDITIONAL_NOISE_PATTERNS.some((re) => re.test(name))) return true;
  const denyType = getDenylistMap().get(name);
  if (denyType === undefined) return false;
  return (
    normalizeElementGeneric(denyType) === normalizeElementGeneric(typeText)
  );
}
