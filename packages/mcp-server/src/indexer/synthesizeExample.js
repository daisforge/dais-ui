/** Грубая эвристика значения-заглушки по тексту типа — не точный резолвер, а стартовая точка для агента. */
function placeholderForType(typeText) {
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
 * Синтетический пример `<Component requiredProp={...} />` из обязательных
 * пропсов — только когда нет ни одной curated-стори (большинство из 265+
 * компонентов). Явно помечается type: "synthesized", чтобы агент не путал
 * его с проверенным примером из Storybook.
 */
export function synthesizeExample(record) {
  const requiredProps = [
    ...(record.props || []),
    ...(record.inheritedProps || []),
  ].filter((p) => p.required);

  const attrs = requiredProps
    .map((p) => `${p.name}={${placeholderForType(p.type)}}`)
    .join(' ');

  const jsx = attrs ? `<${record.name} ${attrs} />` : `<${record.name} />`;

  return {
    exportName: 'Synthesized',
    displayName: 'Минимальный пример',
    type: 'synthesized',
    code: jsx,
  };
}
