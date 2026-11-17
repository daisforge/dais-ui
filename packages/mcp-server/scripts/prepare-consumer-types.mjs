import assert from 'node:assert/strict';
import fs from 'node:fs';

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
