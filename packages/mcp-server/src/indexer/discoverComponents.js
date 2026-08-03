import fs from 'node:fs';
import path from 'node:path';
import { SymbolFlags } from 'ts-morph';

import { getProject, UI_KIT_SRC } from './tsProject.js';

const GROUPS = [
  { dir: 'components', group: 'components' },
  { dir: 'formComponents', group: 'formComponents' },
  { dir: 'layouts', group: 'layouts' },
];

// Папки, физически лежащие рядом с компонентами, но не являющиеся ими —
// внутренние Storybook-хелперы и т.п. Небольшой явный список, а не эвристика,
// потому что их экспорты (PascalCase функции) неотличимы от реальных
// компонентов по одним только флагам символа.
const EXCLUDED_DIRS = new Set(['StoriesUtils']);

function isAllCaps(name) {
  return /^[A-Z0-9_]+$/.test(name);
}

/** PascalCase-значение (не тип, не хук, не ALL_CAPS-константа, не enum). */
function isComponentLikeSymbol(symbol) {
  const name = symbol.getName();
  if (!/^[A-Z]/.test(name) || isAllCaps(name)) return false;

  const real = symbol.getFlags() & SymbolFlags.Alias ? symbol.getAliasedSymbol() : symbol;
  const flags = real.getFlags();
  const isValueLike = Boolean(flags & (SymbolFlags.Variable | SymbolFlags.Function | SymbolFlags.Class));
  const isEnum = Boolean(flags & SymbolFlags.Enum);

  return isValueLike && !isEnum;
}

/**
 * Обходит packages/ui-kit/src/{components,formComponents,layouts} и
 * возвращает список реально экспортируемых компонентов. Одна папка может
 * содержать НЕСКОЛЬКО компонентов (FormDatePickers → FormDatePicker +
 * FormDatePickerRange; Segment → SegmentGroup/SegmentItem/...; IconButton →
 * IconButton/IconButtonDots/IconButtonFilter) — поэтому не полагаемся на
 * совпадение "имя папки == имя компонента", а перечисляем реальные
 * PascalCase value-экспорты barrel-файла.
 */
export function discoverComponents() {
  const project = getProject();
  const entries = [];

  for (const { dir, group } of GROUPS) {
    const groupDir = path.join(UI_KIT_SRC, dir);
    if (!fs.existsSync(groupDir)) continue;

    for (const folderName of fs.readdirSync(groupDir)) {
      if (EXCLUDED_DIRS.has(folderName)) continue;

      const compDir = path.join(groupDir, folderName);
      if (!fs.statSync(compDir).isDirectory()) continue;

      const indexTs = path.join(compDir, 'index.ts');
      const indexTsx = path.join(compDir, 'index.tsx');
      const barrelPath = fs.existsSync(indexTs)
        ? indexTs
        : fs.existsSync(indexTsx)
          ? indexTsx
          : null;
      if (!barrelPath) continue;

      const barrelSourceFile = project.getSourceFileOrThrow(barrelPath);
      const seen = new Set();

      for (const symbol of barrelSourceFile.getExportSymbols()) {
        const name = symbol.getName();
        if (seen.has(name) || !isComponentLikeSymbol(symbol)) continue;
        seen.add(name);
        entries.push({ name, dir: compDir, group, barrelPath, folderName });
      }
    }
  }

  return entries;
}
