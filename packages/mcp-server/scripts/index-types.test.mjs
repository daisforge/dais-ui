import assert from 'node:assert/strict';
import path from 'node:path';
import { before, test } from 'node:test';

/* eslint-disable import/no-unresolved -- test:index-types собирает dist перед запуском; lint работает и до сборки. */
import { buildTypeIndex } from '../dist/indexer/indexTypes.js';
import {
  expandCollectedTypeRefs,
  parseComponent,
} from '../dist/indexer/parseComponent.js';
import { UI_KIT_SRC } from '../dist/indexer/tsProject.js';
import { getType } from '../dist/tools/getType.js';
/* eslint-enable import/no-unresolved */

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

test('MCP возвращает совместимый публичный алиас DropdownProps', () => {
  const result = getType(index, { name: 'DropdownProps' });
  assert.equal(result.error, undefined);
  assert.equal(result.importPath, '@daisforge/ui');
  assert.match(result.sourceFile, /components\/Dropdown\/index\.ts$/);
  assert.match(
    result.definition,
    /T extends DropdownItemOption = DropdownItemOption/,
  );
  assert.match(result.definition, /SDDSDropdownProps<T>/);
  assert.match(result.definition, /RefAttributes<HTMLButtonElement>/);
});
