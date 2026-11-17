import { ts } from 'ts-morph';

const cache = new Map<string, string>();
const printer = ts.createPrinter({ removeComments: true });

/** Стабильный текст: порядок union/intersection не зависит от истории TS checker. */
export function canonicalTypeText(text: string): string {
  const clean = text.replace(/import\("[^"]*"\)\./g, '');
  const cached = cache.get(clean);
  if (cached !== undefined) return cached;
  const source = ts.createSourceFile(
    'type.ts',
    `type Value = ${clean};`,
    ts.ScriptTarget.Latest,
    true,
  );
  const statement = source.statements[0];
  if (!statement || !ts.isTypeAliasDeclaration(statement)) return clean;
  const result = ts.transform(statement.type, [
    (context) => {
      const visit: ts.Visitor = (node) => {
        const updated = ts.visitEachChild(node, visit, context);
        if (ts.isUnionTypeNode(updated) || ts.isIntersectionTypeNode(updated)) {
          const unparen = (value: ts.TypeNode): ts.TypeNode =>
            ts.isParenthesizedTypeNode(value) ? unparen(value.type) : value;
          const flattened = updated.types.flatMap((value) => {
            const inner = unparen(value);
            return inner.kind === updated.kind &&
              (ts.isUnionTypeNode(inner) || ts.isIntersectionTypeNode(inner))
              ? [...inner.types]
              : [inner];
          });
          const unique = new Map(
            flattened.map((value) => [
              printer.printNode(ts.EmitHint.Unspecified, value, source),
              value,
            ]),
          );
          if (ts.isUnionTypeNode(updated)) {
            if (
              unique.has('boolean') ||
              (unique.has('true') && unique.has('false'))
            ) {
              unique.delete('true');
              unique.delete('false');
              unique.set(
                'boolean',
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword),
              );
            }
          }
          const members = [...unique]
            .sort(([a], [b]) => {
              if (a === b) return 0;
              return a < b ? -1 : 1;
            })
            .map(([, value]) => value);
          if (members.length === 1) return members[0];
          return ts.isUnionTypeNode(updated)
            ? ts.factory.createUnionTypeNode(members)
            : ts.factory.createIntersectionTypeNode(members);
        }
        ts.setEmitFlags(updated, ts.EmitFlags.SingleLine);
        return updated;
      };
      return (node) => ts.visitNode(node, visit) as ts.TypeNode;
    },
  ]);
  let transformed = result.transformed[0];
  while (transformed && ts.isParenthesizedTypeNode(transformed))
    transformed = transformed.type;
  const value = transformed
    ? printer.printNode(ts.EmitHint.Unspecified, transformed, source)
    : clean;
  result.dispose();
  cache.set(clean, value);
  return value;
}

export function formatPropType(text: string): string {
  // Уже обрезанный текст не является полным TS-выражением.
  if (text.endsWith('…')) return text;
  const canonical = canonicalTypeText(text);
  return canonical.length > 400 ? `${canonical.slice(0, 400)}…` : canonical;
}

/** undefined у optional-поля уже задан модификатором ?, вложенные типы не меняем. */
export function comparableType(text: string, required: boolean): string {
  if (text.endsWith('…')) return text;
  const canonical = canonicalTypeText(text);
  if (required) return canonical;
  const source = ts.createSourceFile(
    'optional.ts',
    `type Value = ${canonical};`,
    ts.ScriptTarget.Latest,
    true,
  );
  const statement = source.statements[0];
  if (
    !statement ||
    !ts.isTypeAliasDeclaration(statement) ||
    !ts.isUnionTypeNode(statement.type)
  )
    return canonical;
  const members = statement.type.types.filter(
    (node) => node.kind !== ts.SyntaxKind.UndefinedKeyword,
  );
  return members.length
    ? canonicalTypeText(members.map((node) => node.getText(source)).join(' | '))
    : canonical;
}
