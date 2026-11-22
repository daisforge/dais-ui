import assert from 'node:assert/strict';
import { test } from 'node:test';

import { Project } from 'ts-morph';

import { canonicalTypeText } from '../dist/indexer/typeDisplay.js';

test('нормализация отображения сохраняет семантику union, функций и литералов', () => {
  const cases = [
    '"b" | "a" | "b"',
    'true | false | undefined',
    'boolean | false',
    '(number | string | undefined)',
    '((value: string) => number) | undefined',
    '((value: string) => number) | ((value: number) => string)',
    '(value: string) => number | undefined',
    '{ text: "two  spaces"; value?: "z" | "a" }',
    '{ a: string } & { b: number }',
    'string extends number ? "yes" : "no"',
  ];
  const project = new Project({
    useInMemoryFileSystem: true,
    compilerOptions: { strict: true, noLib: true },
  });
  const file = project.createSourceFile(
    'contracts.ts',
    cases
      .map(
        (text, i) =>
          `type Original${i} = ${text};\ntype Display${i} = ${canonicalTypeText(
            text,
          )};`,
      )
      .join('\n'),
  );
  assert.deepEqual(
    file
      .getPreEmitDiagnostics()
      .filter((d) => d.getSourceFile())
      .map((d) => d.getMessageText()),
    [],
  );
  cases.forEach((text, i) => {
    const original = file.getTypeAliasOrThrow(`Original${i}`).getType();
    const display = file.getTypeAliasOrThrow(`Display${i}`).getType();
    assert.ok(!display.isAny(), text);
    assert.ok(
      original.isAssignableTo(display) && display.isAssignableTo(original),
      text,
    );
  });
  assert.equal(
    canonicalTypeText('(number | string | undefined)'),
    canonicalTypeText('number | string | undefined'),
  );
  assert.notEqual(canonicalTypeText('string'), canonicalTypeText('number'));
});
