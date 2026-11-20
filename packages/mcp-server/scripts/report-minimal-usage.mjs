import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import ts from 'typescript';

import { getComponent } from '../dist/tools/getComponent.js';

const configPath = fileURLToPath(
  new URL('../test/tsconfig.json', import.meta.url),
);
const config = ts.getParsedCommandLineOfConfigFile(
  configPath,
  {},
  {
    ...ts.sys,
    onUnRecoverableConfigFileDiagnostic(diagnostic) {
      throw new Error(
        ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'),
      );
    },
  },
);
assert.ok(config);
assert.equal(config.errors.length, 0, JSON.stringify(config.errors));

const index = JSON.parse(
  fs.readFileSync(
    new URL('../data/component-index.json', import.meta.url),
    'utf8',
  ),
);
const components = Object.keys(index.components);
assert.ok(components.length > 0, 'В индексе нет компонентов');
const host = ts.createCompilerHost(config.options);
const canonicalPath = (filename) =>
  host.getCanonicalFileName(path.normalize(filename));
const examples = new Map();
const failures = [];
const roots = [];

// Отдельный виртуальный модуль на каждый пример из MCP, со своим импортом.
for (const component of components) {
  const response = getComponent(index, { name: component });
  if (response.error || !response.importStatement || !response.minimalUsage) {
    failures.push({
      component,
      message: response.error || 'Нет импорта или примера',
    });
  } else {
    const filename = path.join(
      path.dirname(configPath),
      `mcp-example-${component}.tsx`,
    );
    roots.push(filename);
    examples.set(canonicalPath(filename), {
      component,
      text: `${response.importStatement}\nvoid (${response.minimalUsage});\n`,
    });
  }
}

const getSourceFile = host.getSourceFile.bind(host);
host.getSourceFile = (filename, languageVersion, ...args) => {
  const example = examples.get(canonicalPath(filename));
  return example
    ? ts.createSourceFile(filename, example.text, languageVersion)
    : getSourceFile(filename, languageVersion, ...args);
};
const program = ts.createProgram(roots, config.options, host);
for (const diagnostic of ts.getPreEmitDiagnostics(program)) {
  const example =
    diagnostic.file && examples.get(canonicalPath(diagnostic.file.fileName));
  const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
  // Диагностику самого примера записываем в отчёт. Сбой окружения должен быть виден в CI.
  if (!example)
    throw new Error(
      `${diagnostic.file?.fileName ?? 'TypeScript'}: TS${
        diagnostic.code
      } ${message}`,
    );
  failures.push({
    component: example.component,
    code: diagnostic.code,
    message,
  });
}

const failed = new Set(failures.map(({ component }) => component)).size;
const report = {
  total: components.length,
  passed: components.length - failed,
  failed,
  failures,
};
const reportDir = new URL('../.probe/', import.meta.url);
fs.mkdirSync(reportDir, { recursive: true });
fs.writeFileSync(
  new URL('minimal-usage-report.json', reportDir),
  `${JSON.stringify(report, null, 2)}\n`,
);
console.log(
  `minimalUsage: ${report.passed} из ${report.total} компилируются, ${failed} с ошибками`,
);
