import type { TypeRecord } from '../types.js';
import {
  clip,
  getCollectedTypeDecls,
  MAX_RAW_TYPE_CHARS,
  stripImportPaths,
} from './parseComponent.js';
import {
  deriveGroupAndFolder,
  resolveImportPath,
} from './resolveImportPath.js';

/**
 * Собирает Record<string, TypeRecord> из типов, которые parseComponent
 * структурно нашёл среди типов пропсов за весь прогон (collectNamedTypeRefs
 * копит их в module-level Map по ходу разбора компонентов — вызывать после
 * того, как все компоненты уже разобраны, иначе Map будет пуст).
 *
 * Одно имя может соответствовать НЕСКОЛЬКИМ разным типам в разных папках
 * ui-kit (TableCanvas активно переиспользует общие имена — свой
 * `ColumnConfig`, отдельный от легаси-`Table.ColumnConfig`). Когда коллизии
 * нет — ключ индекса это просто имя. Когда есть — каждый вариант получает
 * ключ вида "ПапкаКомпонента.Имя", а неоднозначный голый ключ не
 * регистрируется вовсе: тул get_type увидит отсутствие точного совпадения и
 * подскажет агенту квалифицированные варианты (см. tools/getType.ts).
 */
export function buildTypeIndex(): Record<string, TypeRecord> {
  const result: Record<string, TypeRecord> = {};

  for (const group of getCollectedTypeDecls()) {
    const ambiguous = group.length > 1;

    for (const { name, decl } of group) {
      const sourceFile = decl.getSourceFile().getFilePath();
      const { importPath, importStatement } = resolveImportPath(
        name,
        sourceFile,
      );
      const definition = clip(
        stripImportPaths(decl.getText()),
        MAX_RAW_TYPE_CHARS,
      ) as string;

      const record: TypeRecord = {
        name,
        definition,
        importPath,
        importStatement,
        sourceFile,
      };

      if (ambiguous) {
        const parts = deriveGroupAndFolder(sourceFile);
        const qualifiedKey = parts ? `${parts.folderName}.${name}` : name;
        result[qualifiedKey] = record;
      } else {
        result[name] = record;
      }
    }
  }

  return result;
}
