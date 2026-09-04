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

let cachedPublicFolders: ReadonlySet<string> | undefined;

/**
 * Папки, из которых корневой баррель реально что-то экспортирует, — то есть
 * настоящие точки входа библиотеки. У пакета нет `exports`-мапы, поэтому
 * ФИЗИЧЕСКИ резолвится любой сабпас до собранного файла, включая сугубо
 * внутренние (`@daisforge/ui/components/TableGlide` — низкоуровневая обвязка
 * glide-data-grid, из корня не экспортируется вовсе). Отправлять туда агента
 * нельзя: строка соберётся, но это импорт из потрохов библиотеки. Поэтому
 * "публичность" папки определяется по корневому баррелю, а не по факту
 * существования файла.
 */
function getPublicFolders(): ReadonlySet<string> {
  if (!cachedPublicFolders) {
    const folders = new Set<string>();
    getRootExportedDecls().forEach((decls) => {
      decls.forEach((decl) => {
        const parts = deriveGroupAndFolder(decl.getSourceFile().getFilePath());
        if (parts) folders.add(`${parts.group}/${parts.folderName}`);
      });
    });
    cachedPublicFolders = folders;
  }
  return cachedPublicFolders;
}

/**
 * Тот же вопрос, что и `isExportedFromRoot`, но к баррелю ПАПКИ компонента
 * (`components/TableCanvas/index.ts`) — он и стоит за сабпасом
 * `@daisforge/ui/components/TableCanvas`. Сравниваем не только имя, но и файл
 * декларации: в TableCanvas полно тёзок (`ColumnConfig` у него свой,
 * отдельный от легаси-`Table`).
 */
function isExportedFromFolderBarrel(
  group: string,
  folderName: string,
  name: string,
  sourceFilePath: string,
): boolean {
  const barrelPath = path.join(UI_KIT_SRC, group, folderName, 'index.ts');
  const barrel = getProject().getSourceFile(barrelPath);
  if (!barrel) return false;

  return (
    barrel
      .getExportedDeclarations()
      .get(name)
      ?.some((d) => d.getSourceFile().getFilePath() === sourceFilePath) ?? false
  );
}

/**
 * Один и тот же тип часто реэкспортируют несколько барелей: `CellContent`
 * объявлен в `TableGlide` (внутренняя папка) и реэкспортирован из
 * `TableCanvas` (публичная). Правильный ответ агенту — публичный сабпас, а не
 * тот, где тип физически объявлен. Ищем среди публичных папок, начиная с той,
 * где объявление лежит; порядок остальных фиксирован алфавитом, чтобы индекс
 * не «дрожал» между сборками.
 */
function findPublicExportSite(
  name: string,
  sourceFilePath: string,
): { group: string; folderName: string } | undefined {
  const publicFolders = getPublicFolders();
  const own = deriveGroupAndFolder(sourceFilePath);
  const ownKey = own ? `${own.group}/${own.folderName}` : undefined;

  const ordered = [
    ...(ownKey && publicFolders.has(ownKey) ? [ownKey] : []),
    ...[...publicFolders].filter((folder) => folder !== ownKey).sort(),
  ];

  const hit = ordered.find((key) => {
    const [group, folderName] = key.split('/');
    return Boolean(
      group &&
        folderName &&
        isExportedFromFolderBarrel(group, folderName, name, sourceFilePath),
    );
  });
  if (!hit) return undefined;

  const [group, folderName] = hit.split('/');
  return group && folderName ? { group, folderName } : undefined;
}

export interface ResolvedTypeImport {
  importPath?: string;
  importStatement?: string;
  /** true — тип объявлен в ui-kit, но наружу не экспортирован ниоткуда. */
  internal?: true;
  importNotice?: string;
}

/**
 * Импорт для ТИПА, а не для компонента. Разница принципиальная: у компонента
 * сабпас-ветка `resolveImportPath` всегда попадает в цель (компонент на то и
 * компонент, что экспортирован), а среди типов полно сугубо внутренних —
 * особенно после транзитивного раскрытия, которое доходит до вспомогательных
 * `ColumnDefaultOmitted`/`ContentFormat` в недрах TableCanvas. Отдать на них
 * синтезированный `import { ContentFormat } from '@daisforge/ui/components/
 * TableCanvas'` — это выдать агенту строку, которая не соберётся; уж лучше
 * честно сказать, что тип внутренний, и показать само определение.
 */
export function resolveTypeImport(
  name: string,
  sourceFilePath: string,
): ResolvedTypeImport {
  if (isExportedFromRoot(name, sourceFilePath)) {
    return {
      importPath: ROOT_IMPORT_PATH,
      importStatement: `import { ${name} } from '${ROOT_IMPORT_PATH}';`,
    };
  }

  const site = findPublicExportSite(name, sourceFilePath);
  if (site) {
    const importPath = `${ROOT_IMPORT_PATH}/${site.group}/${site.folderName}`;
    return {
      importPath,
      importStatement: `import { ${name} } from '${importPath}';`,
    };
  }

  return {
    internal: true,
    importNotice:
      `Тип "${name}" не экспортируется из публичной точки входа — импортировать его нельзя. ` +
      'Определение приведено для понимания структуры: опишите нужную форму ' +
      'по месту либо возьмите её из типа, который экспортирован.',
  };
}
