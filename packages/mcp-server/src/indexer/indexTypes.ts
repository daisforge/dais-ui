import { Node, SyntaxKind } from 'ts-morph';

import type { TypeRecord } from '../types.js';
import {
  clip,
  getCollectedTypeDecls,
  MAX_RAW_TYPE_CHARS,
  stripImportPaths,
} from './parseComponent.js';
import {
  deriveGroupAndFolder,
  resolveTypeImport,
} from './resolveImportPath.js';

/** Сохраняем публичное имя алиаса и рекурсивные ссылки, не меняя AST проекта. */
function getTypeDefinition(name: string, decl: Node): string {
  let text = decl.getText();
  if (
    (Node.isTypeAliasDeclaration(decl) || Node.isInterfaceDeclaration(decl)) &&
    decl.getName() !== name
  ) {
    const allIdentifiers = decl.getDescendantsOfKind(SyntaxKind.Identifier);
    const identifiers = allIdentifiers.filter((identifier) =>
      identifier.getSymbol()?.getDeclarations().includes(decl),
    );
    // Props из SDDS может уже ссылаться на другой DropdownProps из new-hope.
    // Переименование заголовка создало бы ложный рекурсивный тип; показываем
    // исходную декларацию и её публичный алиас, как в barrel самого SDDS.
    if (
      allIdentifiers.some(
        (identifier) =>
          identifier.getText() === name && !identifiers.includes(identifier),
      )
    ) {
      return clip(
        stripImportPaths(
          `${text}\nexport type { ${decl.getName()} as ${name} };`,
        ),
        MAX_RAW_TYPE_CHARS,
      ) as string;
    }
    identifiers.reverse().forEach((identifier) => {
      const start = identifier.getStart() - decl.getStart();
      text = `${text.slice(0, start)}${name}${text.slice(
        start + identifier.getWidth(),
      )}`;
    });
  }
  return clip(stripImportPaths(text), MAX_RAW_TYPE_CHARS) as string;
}

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
 * Внешний тип из корневого реэкспорта сохраняет публичное имя; локальные
 * тёзки получают квалифицированные ключи (DropdownItemOption и Table.DropdownItemOption).
 */
export function buildTypeIndex(): Record<string, TypeRecord> {
  const result: Record<string, TypeRecord> = {};

  for (const group of getCollectedTypeDecls()) {
    const ambiguous = group.length > 1;

    for (const { name, decl } of group) {
      const sourceFile = decl.getSourceFile().getFilePath();
      const definition = getTypeDefinition(name, decl);

      const record: TypeRecord = {
        name,
        definition,
        ...resolveTypeImport(name, sourceFile),
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
