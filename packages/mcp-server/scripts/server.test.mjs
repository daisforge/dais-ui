/* eslint-disable import/no-unresolved -- Node ESM resolves SDK subpath exports; checked by the stdio tests. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { after, before, test } from 'node:test';
import { fileURLToPath } from 'node:url';

import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

import { toToolResult } from '../dist/toolResponse.js';
import { ToolError } from '../dist/types.js';

const client = new Client({ name: 'mcp-regression', version: '1.0.0' });
const transport = new StdioClientTransport({
  command: process.execPath,
  args: [fileURLToPath(new URL('../dist/server.js', import.meta.url))],
  stderr: 'pipe',
});
const pkg = JSON.parse(
  fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
);
before(async () => {
  await client.connect(transport);
});
after(async () => {
  await client.close();
});

test('stdio handshake возвращает версию установленного пакета', () => {
  assert.deepEqual(client.getServerVersion(), {
    name: pkg.name,
    version: pkg.version,
  });
});

test('все объявленные инструменты возвращают корректный JSON', async () => {
  const args = {
    list_components: { limit: 3 },
    search_components: { query: 'таблица' },
    get_component: { name: 'TableCanvas' },
    get_component_props: { name: 'Canvas', part: 'Text' },
    get_component_examples: { name: 'Button' },
    get_type: { name: 'DropdownItemOption' },
    list_features: { component: 'TableCanvas' },
    get_feature: { component: 'TableCanvas', feature: 'Editing' },
    get_feature_examples: { component: 'TableCanvas', feature: 'Editing' },
    list_categories: {},
    get_installation_guide: {},
  };
  const { tools } = await client.listTools();
  assert.deepEqual(
    tools.map((tool) => tool.name).sort(),
    Object.keys(args).sort(),
  );
  for (const { name } of tools) {
    const response = await client.callTool({ name, arguments: args[name] });
    assert.ok(!response.isError, name);
    const data = JSON.parse(response.content[0].text);
    assert.equal(data.error, undefined, name);
  }
});

test('ошибки аргументов и неизвестные сущности отмечены isError', async () => {
  for (const [name, args] of [
    ['get_component', {}],
    ['get_component', { name: 'MissingMcpComponent' }],
    ['get_component_props', { name: 'Canvas', part: 'MissingPart' }],
    ['get_type', { name: 'MissingMcpType' }],
  ]) {
    const result = await client.callTool({ name, arguments: args });
    assert.equal(result.isError, true, `${name}: ${JSON.stringify(args)}`);
  }
});

test('поле error в данных не превращает успешный ответ в ошибку инструмента', () => {
  const data = { error: 'Сохранённая диагностика' };
  const success = toToolResult(data);
  const failure = toToolResult(new ToolError(data.error));
  assert.equal(success.isError, undefined);
  assert.equal(failure.isError, true);
  assert.deepEqual(JSON.parse(success.content[0].text), data);
  assert.deepEqual(JSON.parse(failure.content[0].text), data);
});
