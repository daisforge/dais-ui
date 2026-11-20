import { ts } from 'ts-morph';

import type { InheritedPropRecord, PropRecord } from '../types.js';

function isArrayType(text: string): boolean {
  if (!text.endsWith('[]')) return false;
  const source = ts.createSourceFile(
    'placeholder.ts',
    `type Value = ${text};`,
    ts.ScriptTarget.Latest,
  );
  const [alias] = source.statements;
  return Boolean(
    alias && ts.isTypeAliasDeclaration(alias) && ts.isArrayTypeNode(alias.type),
  );
}

/** Грубая эвристика значения-заглушки по тексту типа — не точный резолвер, а стартовая точка для агента. */
function placeholderForType(typeText: string | undefined): string {
  const t = (typeText || '').replace(/\s*\|\s*undefined/g, '').trim();

  const literalMatch = t.match(/^"([^"]*)"/);
  if (literalMatch) return `"${literalMatch[1]}"`;

  if (t === 'boolean') return 'true';
  if (t === 'number') return '0';
  if (t === 'string' || t === 'number | string') return "'значение'";
  if (isArrayType(t) || t.startsWith('readonly ')) return '[]';
  if (/=>/.test(t)) return '() => {}';
  if (t.includes('ReactNode') || t.includes('ReactElement')) return "'Контент'";
  return '{}';
}

/**
 * Синтетический `<Component requiredProp={...} />` из обязательных пропсов —
 * стартовая заготовка для агента. Вычисляется для каждого
 * компонента (в отличие от examples[], которые есть только там, где нашлась
 * curated-стори или реальное JSX-вхождение — см. collectUsageExamples.ts и
 * TASKS.md T3) и кладётся в отдельное поле ComponentRecord.minimalUsage, а не
 * в examples[], чтобы агент не путал плейсхолдер с проверенным кодом и не
 * тратил вызов get_component_examples на строку, уже выводимую из
 * importStatement.
 */
export function synthesizeMinimalUsage(
  record: {
    name: string;
    apiKind?: 'namespace';
    props?: PropRecord[];
    inheritedProps?: InheritedPropRecord[];
    compoundParts?: { name: string }[];
  },
  readFullTypes: (names: ReadonlySet<string>) => PropRecord[],
): string {
  if (record.apiKind === 'namespace') {
    const part =
      record.compoundParts?.find((p) => p.name === 'Container') ??
      record.compoundParts?.[0];
    return part
      ? `<${record.name}.${part.name} />`
      : `// ${record.name}: объект с компонентами`;
  }
  const requiredProps = [
    ...(record.props || []),
    ...(record.inheritedProps || []),
  ].filter((p) => p.required);
  // Отображаемый тип может терять суффикс массива из-за лимита ответа MCP.
  const clipped = new Set(
    requiredProps.filter((p) => p.type.endsWith('…')).map((p) => p.name),
  );
  const fullTypes = new Map(
    readFullTypes(clipped).map((p) => [p.name, p.type]),
  );

  const attrs = requiredProps
    .map(
      (p) =>
        `${p.name}={${placeholderForType(fullTypes.get(p.name) ?? p.type)}}`,
    )
    .join(' ');

  const openTag = attrs ? `<${record.name} ${attrs}>` : `<${record.name}>`;

  // У compound-компонента самозакрывающийся `<ModalDF />` — не минимальный
  // пример, а неработающий: весь контент живёт в частях. Перечисляем реально
  // найденные части, но НЕ выдумываем их вложенность (какая часть внутри
  // какой — знает только пример из get_component_examples).
  const parts = record.compoundParts || [];
  if (parts.length > 0) {
    const partNames = parts.map((p) => `${record.name}.${p.name}`).join(', ');
    return `${openTag}\n  {/* части: ${partNames} */}\n</${record.name}>`;
  }

  return attrs ? `<${record.name} ${attrs} />` : `<${record.name} />`;
}
