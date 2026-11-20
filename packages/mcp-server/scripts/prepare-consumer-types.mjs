import assert from 'node:assert/strict';
import fs from 'node:fs';

import { getComponent } from '../dist/tools/getComponent.js';
import { getComponentProps } from '../dist/tools/getComponentProps.js';

const index = JSON.parse(
  fs.readFileSync(
    new URL('../data/component-index.json', import.meta.url),
    'utf8',
  ),
);
const cases = [
  ['McpSpinnerWidth', 'Spinner', undefined, 'width'],
  ['McpDrawerFixedWidth', 'DrawerDF', 'Content', 'fixedWidth'],
  ['McpChipsOpened', 'AnalyticalWidget', 'Chips', 'opened'],
  ['McpTableFilterChange', 'TableFilterSelect', undefined, 'onChange'],
];
const declarations = cases.map(([alias, name, part, field]) => {
  const response = getComponentProps(index, { name, part });
  assert.equal(response.error, undefined);
  const prop = [...response.props, ...(response.inheritedProps || [])].find(
    (p) => p.name === field,
  );
  assert.ok(prop, `${name}.${field} missing`);
  assert.ok(!prop.type.endsWith('…'), `${name}.${field} truncated`);
  return `export type ${alias} = ${prop.type};`;
});
fs.mkdirSync(new URL('../.probe/', import.meta.url), { recursive: true });
fs.writeFileSync(
  new URL('../.probe/consumer-response-types.ts', import.meta.url),
  `${declarations.join('\n')}\n`,
);

// Компилируем тот же JSX и импорт, которые получит клиент MCP.
const forms = Object.values(index.components).filter(
  (component) => component.group === 'formComponents',
);
assert.ok(forms.length > 0);
const usageExamples = forms.map(({ name }) => {
  const response = getComponent(index, { name });
  assert.equal(response.error, undefined);
  assert.ok(response.importStatement, `${name}: нет импорта`);
  assert.ok(response.minimalUsage, `${name}: нет минимального примера`);
  return response;
});
fs.writeFileSync(
  new URL('../.probe/consumer-minimal-usage.tsx', import.meta.url),
  [
    ...usageExamples.map((response) => response.importStatement),
    ...usageExamples.map((response) => `void (${response.minimalUsage});`),
    '',
  ].join('\n'),
);
