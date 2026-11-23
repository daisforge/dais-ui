#!/usr/bin/env node
/**
 * Срез MCP-индекса для демо конструктора.
 *
 * Берёт packages/mcp-server/data/component-index.json (тот же индекс, что
 * отдаёт MCP-сервер агентам) и оставляет компоненты демо с пропсами простых
 * типов: строковые union, boolean, string, number. Из них панель свойств
 * строит контролы, а проверка дерева сверяет значения.
 *
 *   node packages/storybook/src/stories/AiDemos/PageBuilder/catalog/build-catalog.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '../../../../../../..');
const indexPath = path.join(repoRoot, 'packages/mcp-server/data/component-index.json');
const outPath = path.join(here, 'catalog.generated.ts');

const COMPONENTS = [
  'PageLayout',
  'PageTitle',
  'Box',
  'Widget',
  'Typography',
  'Button',
  'IconButton',
  'TextField',
  'TextArea',
  'Checkbox',
  'Switch',
  'Badge',
  'Note',
  'EmptyState',
  'TableCanvas',
  'Divider',
];

/** Пропсы, которые в демо задаются не контролом, а структурой дерева */
const SKIP = new Set(['children', 'as', 'forwardedAs', 'theme', 'className', 'style']);
/** Служебные пропсы DOM и атомов: в панели свойств макета они шум */
const NOISE = new Set([
  'type',
  'enterKeyHint',
  'focused',
  'blur',
  'pin',
  'contentPlacing',
  'dirName',
  'name',
  'maxLength',
  'minLength',
  'customBackgroundColor',
  'customColor',
  'checked',
  'singleLine',
  'shiftLeft',
  'shiftRight',
  'square',
  'isLoading',
  'containerType',
  'breakWord',
  'isItalic',
  'isNumeric',
  'extraBold',
  'medium',
  'noWrap',
  'appearance',
  'contentBeforeSizing',
  'keepPlaceholder',
]);
/** Сначала то, что меняют в макете чаще всего */
const PRIORITY = [
  'text',
  'title',
  'label',
  'placeholder',
  'subtitle',
  'view',
  'variant',
  'size',
  'labelPlacement',
  'showBackButton',
  'pilled',
  'stretch',
  'outlined',
  'disabled',
  'bold',
  'orientation',
  'centered',
];
const MAX_PROPS = 10;
const rank = (name) => {
  const i = PRIORITY.indexOf(name);
  return i === -1 ? PRIORITY.length : i;
};

function simpleType(raw) {
  const type = String(raw ?? '').replace(/\s*\|\s*undefined/g, '').trim();
  if (type === 'boolean') return { kind: 'boolean' };
  if (type === 'string') return { kind: 'string' };
  if (type === 'number') return { kind: 'number' };
  const literals = type.split('|').map((part) => part.trim());
  if (literals.length > 1 && literals.every((part) => /^"[^"]*"$/.test(part))) {
    return { kind: 'enum', options: literals.map((part) => part.slice(1, -1)) };
  }
  return null;
}

const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
const catalog = {};

for (const name of COMPONENTS) {
  const record = index.components[name];
  if (!record) {
    console.warn(`нет в индексе: ${name}`);
    continue;
  }
  const seen = new Set();
  const props = [];
  const all = [...(record.props ?? []), ...(record.inheritedProps ?? [])].sort(
    (a, b) => rank(a.name) - rank(b.name),
  );
  for (const prop of all) {
    if (SKIP.has(prop.name) || NOISE.has(prop.name) || seen.has(prop.name) || prop.deprecated)
      continue;
    const type = simpleType(prop.type);
    if (!type) continue;
    seen.add(prop.name);
    props.push({
      name: prop.name,
      ...type,
      description: (prop.description ?? '').split('\n')[0].slice(0, 140),
      ...(prop.default ? { default: prop.default } : {}),
      ...(prop.required ? { required: true } : {}),
    });
    if (props.length >= MAX_PROPS) break;
  }
  catalog[name] = {
    name,
    kind: record.type,
    description: record.description ?? '',
    importStatement: record.importStatement,
    props,
  };
}

const banner = `/* eslint-disable */
/**
 * Сгенерировано build-catalog.mjs из MCP-индекса (${index.libVersion ?? 'версия не указана'}).
 * Не редактировать вручную: перегенерировать скриптом.
 */
`;
fs.writeFileSync(
  outPath,
  `${banner}export const MCP_CATALOG = ${JSON.stringify(catalog, null, 2)} as const;\n`,
);
console.log(`записано: ${path.relative(repoRoot, outPath)}, компонентов: ${Object.keys(catalog).length}`);
