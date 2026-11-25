// Дефолты compound-компонентов на Object.assign проверяются на текущих исходниках
// ui-kit текущим индексером, а не по закоммиченному data/component-index.json:
// его обновляет релиз MCP, и на чистом checkout он может быть собран старым
// индексером. Полная пересборка индекса не нужна — разбираются два компонента.
import assert from 'node:assert/strict';
import { test } from 'node:test';

import { discoverComponents } from '../dist/indexer/discoverComponents.js';
import { getDenylistMap } from '../dist/indexer/htmlAttributeDenylist.js';
import { parseComponent } from '../dist/indexer/parseComponent.js';
import { preparePublicContracts } from '../dist/indexer/publicContract.js';

const parse = (() => {
  const entries = discoverComponents().filter((entry) =>
    ['FiltersActions', 'GridDND'].includes(entry.name),
  );
  preparePublicContracts(entries);
  // Как в buildIndex: денылист прогревается до разбора компонентов.
  getDenylistMap();
  const parsed = Object.fromEntries(
    entries.map((entry) => [entry.name, parseComponent(entry)]),
  );
  return (name) => {
    assert.equal(parsed[name]?.error, undefined, name);
    return parsed[name];
  };
})();

const defaultOf = (props, name) =>
  props.find((prop) => prop.name === name)?.default;

test('compound через Object.assign сохраняет дефолты корня и частей', () => {
  // Корень — отдельная переменная в первом аргументе Object.assign.
  assert.equal(
    defaultOf(parse('FiltersActions').props, 'mainBlockProps'),
    '{}',
  );
  assert.equal(
    defaultOf(parse('GridDND').props, 'compactType'),
    "'horizontal'",
  );
  // Часть в сокращённой записи `{ TextFieldSearch }`.
  const part = parse('FiltersActions').compoundParts.find(
    ({ name }) => name === 'TextFieldSearch',
  );
  assert.equal(defaultOf(part.props, 'size'), "'s'");
});
