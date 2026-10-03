import path from 'path';
import { Plugin } from 'vite';

/**
 * Перенаправляет внутренние импорты модулей вида `export * from '<external>'`
 * прямо во внешний пакет.
 *
 * Проблема: src/icons/index.ts — это `export * from '@salutejs/plasma-icons'`, а компоненты
 * импортируют иконки через `@ui-kit/icons`. Rollup (Vite 5) переписывал такие импорты
 * в прямые `import { IconX } from '@salutejs/plasma-icons'`. Rolldown (Vite 8) вместо этого
 * собирает в рантайме объект-namespace со всем пакетом иконок — бандлер потребителя не может
 * его вырезать, и в приложение попадают все иконки (+9 МБ в packages/vite-project).
 *
 * Сама точка входа (`@daisforge/ui/icons`) не затрагивается — она собирается как entry,
 * а не импортируется другими модулями.
 */
export function viteDFUIExternalStarReexports(
  reexports: Record<string, string>,
): Plugin {
  const byModulePath = new Map(
    Object.entries(reexports).map(([modulePath, external]) => [
      path.resolve(modulePath),
      external,
    ]),
  );

  return {
    name: 'vite-df-ui-external-star-reexports',
    // Только сборка библиотеки: в dev/vitest external-модуль по id не разрешается
    apply: 'build',
    enforce: 'pre',
    async resolveId(source, importer, options) {
      if (!importer) {
        return null;
      }
      const resolved = await this.resolve(source, importer, {
        ...options,
        skipSelf: true,
      });
      const external = resolved && byModulePath.get(resolved.id);
      return external ? { id: external, external: true } : null;
    },
  };
}
