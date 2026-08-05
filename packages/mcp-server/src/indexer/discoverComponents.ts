/* eslint-disable no-continue */
/* eslint-disable no-bitwise */
import fs from 'node:fs';
import path from 'node:path';

import type { Symbol as TsSymbol } from 'ts-morph';
import { SymbolFlags } from 'ts-morph';

import type { ComponentGroup } from '../types.js';
import { getProject, UI_KIT_SRC } from './tsProject.js';

export interface ComponentEntry {
  name: string;
  dir: string;
  group: ComponentGroup;
  barrelPath: string;
  folderName: string;
}

const GROUPS: { dir: string; group: ComponentGroup }[] = [
  { dir: 'components', group: 'components' },
  { dir: 'formComponents', group: 'formComponents' },
  { dir: 'layouts', group: 'layouts' },
];

// Папки, физически лежащие рядом с компонентами, но не являющиеся ими —
// внутренние Storybook-хелперы и т.п. Небольшой явный список, а не эвристика,
// потому что их экспорты (PascalCase функции) неотличимы от реальных
// компонентов по одним только флагам символа.
const EXCLUDED_DIRS = new Set(['StoriesUtils']);

/**
 * Отдельные PascalCase value-экспорты внутри иначе легитимных барреля
 * компонентов, которые сами компонентами не являются — внутренние классы
 * canvas-рендеринга (TableGlide), API-классы (TableContract), React.Context/
 * внутренний класс-держатель рефов (Tabs, TableTabs) и объекты с именами
 * CSS-классов (GridDND, Layout). Они случайно удовлетворяют тем же флагам
 * символа (Variable/Function/Class), что и настоящие компоненты — по
 * аналогии с EXCLUDED_DIRS, явный список, а не эвристика: попытка отличить
 * их структурно через `T extends JSXElementConstructor<any>` дала 80+
 * ложных срабатываний на настоящих компонентах (FormTextField, Select,
 * PageLayout...) — тайпчекер слишком часто не резолвит такую форму для
 * generic/forwardRef-обёрток, так что как сигнал она непригодна.
 */
const EXCLUDED_NAMES = new Set([
  // TableGlide/lib/canvas — внутренние примитивы canvas-рендеринга
  'CanvasAbsoluteContainer',
  'CanvasHoverController',
  'CanvasLeaf',
  'CanvasRegistry',
  'CanvasRoot',
  'DrawBatcher',
  'CanvasChevron',
  'CellCanvasRoot',
  'FlexBox',
  'FlexElement',
  'RootFlexBox',
  // TableContract/api — API-классы, не компоненты
  'DataViewApi',
  'EditingApi',
  // React.Context и внутренний класс-держатель рефов, а не компоненты
  'TableTabsContext',
  'TabsContext',
  'TabItemRefs',
  // Объекты с именами CSS-классов
  'GridDNDClassNames',
  'LayoutDfClassNames',
  // Класс диапазона выделения из glide-data-grid, не компонент
  'CompactSelection',
]);

function isAllCaps(name: string): boolean {
  return /^[A-Z0-9_]+$/.test(name);
}

function findBarrelPath(compDir: string): string | undefined {
  const indexTs = path.join(compDir, 'index.ts');
  if (fs.existsSync(indexTs)) return indexTs;
  const indexTsx = path.join(compDir, 'index.tsx');
  if (fs.existsSync(indexTsx)) return indexTsx;
  return undefined;
}

/** PascalCase-значение (не тип, не хук, не ALL_CAPS-константа, не enum). */
function isComponentLikeSymbol(symbol: TsSymbol): boolean {
  const name = symbol.getName();
  if (!/^[A-Z]/.test(name) || isAllCaps(name)) return false;

  const real = symbol.isAlias() ? symbol.getAliasedSymbol() ?? symbol : symbol;
  const flags = real.getFlags();
  const isValueLike = Boolean(
    flags & (SymbolFlags.Variable | SymbolFlags.Function | SymbolFlags.Class),
  );
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
export function discoverComponents(): ComponentEntry[] {
  const project = getProject();
  const entries: ComponentEntry[] = [];

  for (const { dir, group } of GROUPS) {
    const groupDir = path.join(UI_KIT_SRC, dir);
    if (!fs.existsSync(groupDir)) continue;

    for (const folderName of fs.readdirSync(groupDir)) {
      if (EXCLUDED_DIRS.has(folderName)) continue;

      const compDir = path.join(groupDir, folderName);
      if (!fs.statSync(compDir).isDirectory()) continue;

      const barrelPath = findBarrelPath(compDir);
      if (!barrelPath) continue;

      const barrelSourceFile = project.getSourceFileOrThrow(barrelPath);
      const seen = new Set<string>();

      for (const symbol of barrelSourceFile.getExportSymbols()) {
        const name = symbol.getName();
        if (seen.has(name) || EXCLUDED_NAMES.has(name)) continue;
        if (!isComponentLikeSymbol(symbol)) continue;
        seen.add(name);
        entries.push({ name, dir: compDir, group, barrelPath, folderName });
      }
    }
  }

  return entries;
}
