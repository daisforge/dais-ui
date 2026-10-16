const IDENTIFIER = /^[A-Za-z_$][\w$]*$/;

const quote = (value: string) =>
  `'${value
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n')}'`;

export const toSource = (value: unknown, level = 0): string => {
  const pad = '  '.repeat(level + 1);
  const closePad = '  '.repeat(level);

  if (value === null) return 'null';
  if (typeof value === 'string') return quote(value);
  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }
  if (value instanceof Date) {
    const parts = [
      value.getFullYear(),
      value.getMonth(),
      value.getDate(),
      value.getHours(),
      value.getMinutes(),
      value.getSeconds(),
    ];
    return `new Date(${parts.join(', ')})`;
  }
  if (Array.isArray(value)) {
    if (!value.length) return '[]';
    const rows = value.map((item) => `${pad}${toSource(item, level + 1)},`);
    return `[\n${rows.join('\n')}\n${closePad}]`;
  }
  if (typeof value === 'object' && value) {
    const rows = Object.entries(value)
      .filter(([, item]) => item !== undefined)
      .map(
        ([key, item]) =>
          `${pad}${IDENTIFIER.test(key) ? key : quote(key)}: ${toSource(
            item,
            level + 1,
          )},`,
      );
    if (!rows.length) return '{}';
    return `{\n${rows.join('\n')}\n${closePad}}`;
  }
  return 'undefined';
};

export const declareSource = (name: string, type: string, value: unknown) =>
  `const ${name}: ${type} = ${toSource(value)};`;
