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
 * Компоненты спредят DOM-пропсы на разные теги (input/button/div/...), из-за
 * чего у обработчиков событий и подобных полей меняется параметр конкретного
 * HTML-элемента (`FormEventHandler<HTMLDivElement>` vs `<HTMLInputElement>`),
 * хотя по сути это один и тот же непереопределённый DOM-пропс. Нормализуем
 * конкретный элемент перед сравнением, чтобы не терять их как "разные" типы.
 */
function normalizeElementGeneric(typeText: string): string {
  return typeText.replace(/HTML[A-Za-z]*Element/g, 'HTMLElement');
}

/** true — считаем пропс шумом (унаследованный DOM-атрибут без переопределения). */
export function isNoiseProp(name: string, typeText: string): boolean {
  if (REACT_STATIC_MEMBER_NAMES.has(name)) return true;
  const denyType = getDenylistMap().get(name);
  if (denyType === undefined) return false;
  return (
    normalizeElementGeneric(denyType) === normalizeElementGeneric(typeText)
  );
}
