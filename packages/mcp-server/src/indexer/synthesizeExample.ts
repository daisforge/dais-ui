import type { InheritedPropRecord, PropRecord } from '../types.js';

/** Грубая эвристика значения-заглушки по тексту типа — не точный резолвер, а стартовая точка для агента. */
function placeholderForType(typeText: string | undefined): string {
  const t = (typeText || '').replace(/\s*\|\s*undefined/g, '').trim();

  const literalMatch = t.match(/^"([^"]*)"/);
  if (literalMatch) return `"${literalMatch[1]}"`;

  if (t === 'boolean') return 'true';
  if (t === 'number') return '0';
  if (t === 'string') return "'значение'";
  if (/=>/.test(t)) return '() => {}';
  if (t.endsWith('[]') || t.startsWith('readonly ')) return '[]';
  if (t.includes('ReactNode') || t.includes('ReactElement')) return "'Контент'";
  return '{}';
}

/**
 * Синтетический `<Component requiredProp={...} />` из обязательных пропсов —
 * дешёвая заглушка, не проверенный пример. Вычисляется для КАЖДОГО
 * компонента (в отличие от examples[], которые есть только там, где нашлась
 * curated-стори или реальное JSX-вхождение — см. collectUsageExamples.ts и
 * TASKS.md T3) и кладётся в отдельное поле ComponentRecord.minimalUsage, а не
 * в examples[], чтобы агент не путал плейсхолдер с проверенным кодом и не
 * тратил вызов get_component_examples на строку, уже выводимую из
 * importStatement.
 */
export function synthesizeMinimalUsage(record: {
  name: string;
  props?: PropRecord[];
  inheritedProps?: InheritedPropRecord[];
}): string {
  const requiredProps = [
    ...(record.props || []),
    ...(record.inheritedProps || []),
  ].filter((p) => p.required);

  const attrs = requiredProps
    .map((p) => `${p.name}={${placeholderForType(p.type)}}`)
    .join(' ');

  return attrs ? `<${record.name} ${attrs} />` : `<${record.name} />`;
}
