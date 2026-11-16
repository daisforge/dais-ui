import assert from 'node:assert/strict';
import path from 'node:path';
import { before, test } from 'node:test';

import { buildTypeIndex } from '../dist/indexer/indexTypes.js';
import {
  expandCollectedTypeRefs,
  parseComponent,
} from '../dist/indexer/parseComponent.js';
import { UI_KIT_SRC } from '../dist/indexer/tsProject.js';
import { getType } from '../dist/tools/getType.js';

let index;

before(() => {
  // Настоящие декларации установленного SDDS и локальной Table: проверяем
  // весь путь от реэкспорта и коллизии имён до ответа MCP, без моков типов.
  ['Dropdown', 'Table'].forEach((name) => {
    const dir = path.join(UI_KIT_SRC, 'components', name);
    const result = parseComponent({
      name,
      dir,
      group: 'components',
      folderName: name,
      barrelPath: path.join(dir, 'index.ts'),
    });
    assert.equal(result.error, undefined);
  });
  expandCollectedTypeRefs(3);
  index = { components: {}, types: buildTypeIndex() };
});

test('MCP возвращает публичный тип пункта SDDS с актуальными полями', () => {
  const result = getType(index, { name: 'DropdownItemOption' });
  assert.equal(result.error, undefined);
  assert.equal(result.internal, undefined);
  assert.equal(result.importNotice, undefined);
  assert.equal(result.importPath, '@daisforge/ui');
  assert.match(result.importStatement, /import \{ DropdownItemOption \}/);
  assert.match(result.sourceFile, /plasma-new-hope\/.*Dropdown/);
  assert.match(result.definition, /type DropdownItemOption\s*=/);
  assert.match(result.definition, /placement\?:/);
  assert.match(result.definition, /hidden\?:/);
  assert.match(result.definition, /items\?: DropdownItemOption\[\]/);
  assert.doesNotMatch(result.definition, /\bItemOption\b/);
});

test('внутренний тип Table не подменяет публичный DropdownItemOption', () => {
  const result = getType(index, { name: 'Table.DropdownItemOption' });
  assert.equal(result.error, undefined);
  assert.equal(result.internal, true);
  assert.equal(result.importPath, undefined);
  assert.match(result.sourceFile, /Table\/types\/additional.type.ts$/);
  assert.match(result.definition, /isDisabled\?:/);
  assert.notEqual(result, getType(index, { name: 'DropdownItemOption' }));
});

test('индексация реэкспортов не добавляет непубличные типы React и DOM', () => {
  ['ReactNode', 'SyntheticEvent', 'HTMLAttributes', 'CSSProperties'].forEach(
    (name) => assert.equal(index.types[name], undefined),
  );
});

test('публичный алиас не превращает ссылку на другой тип в рекурсию', () => {
  const result = getType(index, { name: 'DropdownProps' });
  assert.equal(result.error, undefined);
  assert.equal(result.importPath, '@daisforge/ui');
  assert.match(result.definition, /type Props<T extends DropdownItemOption>/);
  assert.match(result.definition, /Omit<DropdownProps<T>/);
  assert.match(result.definition, /export type \{ Props as DropdownProps \}/);
});
