/**
 * packages/ui-kit/src/index.ts реэкспортирует ВСЁ (components, formComponents,
 * layouts) единым плоским барелем — `export * from './components/X'` и т.д.
 * Проверено напрямую по файлу: для v1-скоупа (components/formComponents/
 * layouts) путь импорта всегда один и тот же, '@daisforge/ui', независимо от
 * группы. Отдельные сабпасы ('@daisforge/ui/icons', '/tokens') понадобятся
 * только в v1.1, когда индекс расширится на иконки/токены — тогда сюда
 * добавится маппинг per-group, а не раньше.
 */
const ROOT_IMPORT_PATH = '@daisforge/ui';

export function resolveImportPath(record: { name: string }): {
  importPath: string;
  importStatement: string;
} {
  return {
    importPath: ROOT_IMPORT_PATH,
    importStatement: `import { ${record.name} } from '${ROOT_IMPORT_PATH}';`,
  };
}
