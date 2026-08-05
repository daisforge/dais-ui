import path from 'node:path';

import type { ExportedDeclarations } from 'ts-morph';

import { getProject, UI_KIT_SRC } from './tsProject.js';

const ROOT_BARREL_PATH = path.join(UI_KIT_SRC, 'index.ts');
const ROOT_IMPORT_PATH = '@daisforge/ui';

let cachedRootExportedDecls:
  | ReadonlyMap<string, ExportedDeclarations[]>
  | undefined;

/**
 * packages/ui-kit/src/index.ts реэкспортирует почти всё единым плоским
 * барелем через `export * from './components/X'` — но не всё: например
 * `export { TableCanvas } from './components/TableCanvas'` — ИМЕНОВАННЫЙ
 * реэкспорт, из-за которого внутренние помощники TableCanvas (Canvas,
 * CellEditorCombobox, SplitIconButton...) и все его типы (ColumnConfig и
 * подобные) недоступны по плоскому пути, хотя физически существуют и
 * используются в реальном коде через сабпас. Спрашиваем сам баррель
 * (getExportedDeclarations следует по цепочкам `export *`), а не хардкодим
 * список исключений.
 */
function getRootExportedDecls(): ReadonlyMap<string, ExportedDeclarations[]> {
  if (!cachedRootExportedDecls) {
    const barrel = getProject().getSourceFileOrThrow(ROOT_BARREL_PATH);
    cachedRootExportedDecls = barrel.getExportedDeclarations();
  }
  return cachedRootExportedDecls;
}

/**
 * TableCanvas активно переиспользует общие имена (ColumnConfig, Item и
 * т.п.) — по всему ui-kit есть и другие сущности с теми же именами (у
 * легаси-`Table`, например, свой ColumnConfig). Поэтому недостаточно
 * проверить, что имя ЕСТЬ среди корневых экспортов — нужно убедиться, что
 * корень экспортирует ИМЕННО эту декларацию (сравниваем файл), иначе
 * `import { ColumnConfig } from '@daisforge/ui'` может резолвиться в
 * совершенно другой (несовместимый) тип с тем же именем.
 */
function isExportedFromRoot(name: string, sourceFilePath: string): boolean {
  const decls = getRootExportedDecls().get(name);
  return (
    decls?.some((d) => d.getSourceFile().getFilePath() === sourceFilePath) ??
    false
  );
}

/** "packages/ui-kit/src/components/TableCanvas/types.ts" → { group: "components", folderName: "TableCanvas" }. */
export function deriveGroupAndFolder(
  absoluteFilePath: string,
): { group: string; folderName: string } | undefined {
  const rel = path.relative(UI_KIT_SRC, absoluteFilePath);
  const [group, folderName] = rel.split(path.sep);
  if (!group || !folderName || group.startsWith('..')) return undefined;
  return { group, folderName };
}

/**
 * @param exportedName Имя, под которым сущность (компонент или тип) реально
 *   экспортируется — то, что пойдёт в `import { exportedName } from ...`.
 * @param sourceFilePath Путь к файлу, где сущность объявлена — для сущностей,
 *   не реэкспортированных из корня, используется, чтобы вычислить сабпас.
 *   Для чистых реэкспортов атомов (`export { Badge } from '@salutejs/...'`)
 *   этот путь указывает в node_modules — но такие сущности всегда
 *   реэкспортированы из корня (их локальный баррель — часть цепочки
 *   `export *` до корня), поэтому сабпас-ветка для них не задействуется.
 */
export function resolveImportPath(
  exportedName: string,
  sourceFilePath: string,
): { importPath: string; importStatement: string } {
  let importPath = ROOT_IMPORT_PATH;

  if (!isExportedFromRoot(exportedName, sourceFilePath)) {
    const parts = deriveGroupAndFolder(sourceFilePath);
    if (parts) {
      importPath = `${ROOT_IMPORT_PATH}/${parts.group}/${parts.folderName}`;
    }
  }

  return {
    importPath,
    importStatement: `import { ${exportedName} } from '${importPath}';`,
  };
}
