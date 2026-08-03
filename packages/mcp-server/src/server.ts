#!/usr/bin/env node
/* eslint-disable import/extensions -- @modelcontextprotocol/sdk requires explicit .js subpaths under NodeNext resolution */
import type { ToolCallback } from '@modelcontextprotocol/sdk/server/mcp.js';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import type {
  ShapeOutput,
  ZodRawShapeCompat,
} from '@modelcontextprotocol/sdk/server/zod-compat.js';
import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import { z } from 'zod';

import { resolveIndex } from './resolveIndex.js';
import { getComponent } from './tools/getComponent.js';
import { getComponentExamples } from './tools/getComponentExamples.js';
import { getComponentProps } from './tools/getComponentProps.js';
import { getFeature } from './tools/getFeature.js';
import { getFeatureExamples } from './tools/getFeatureExamples.js';
import { getInstallationGuide } from './tools/getInstallationGuide.js';
import { listCategories } from './tools/listCategories.js';
import { listComponents } from './tools/listComponents.js';
import { listFeatures } from './tools/listFeatures.js';
import { searchComponents } from './tools/searchComponents.js';
import { truncateForResponse } from './tools/truncate.js';
import type { RuntimeIndex } from './types.js';

function loadIndex(): RuntimeIndex {
  const resolved = resolveIndex();
  // dataVersionNotice/libNotInstalled/source кладём прямо в index — тулзам
  // так не нужно принимать второй аргумент на каждый вызов.
  return {
    ...resolved.index,
    dataVersionNotice: resolved.dataVersionNotice,
    libNotInstalled: resolved.libNotInstalled,
    indexSource: resolved.source,
  };
}

/**
 * Явная аннотация возврата CallToolResult обязательна: без неё литерал
 * 'text' расширяется до string и объект перестаёт подходить под
 * дискриминированный union content-блоков SDK.
 */
function toToolResult(payload: unknown): CallToolResult {
  return { content: [{ type: 'text', text: truncateForResponse(payload) }] };
}

/** Хендлер тулза: индекс + args, выведенные из той же zod-схемы, что уходит в SDK. */
type ToolHandler<Shape extends ZodRawShapeCompat> = (
  index: RuntimeIndex,
  args: ShapeOutput<Shape>,
) => unknown;

/**
 * Дженерик Shape нужен ровно для одного: чтобы TS проверил, что тип args
 * хендлера согласован с переданной zod-схемой (иначе рассинхрон схемы и
 * реализации ловится только в рантайме).
 *
 * В сам SDK схема уходит уже расширенной до ZodRawShapeCompat: ToolCallback —
 * условный тип, и на нерезолвнутом Shape он остаётся отложенным, из-за чего
 * ни одна конкретная функция под него не подходит (TS2352). На конкретном
 * ZodRawShapeCompat он резолвится в (args: Record<string, any>) => …, и
 * единственное сужение — as ShapeOutput<Shape> — стоит ровно на границе,
 * где SDK уже провалидировал args настоящей zod-схемой.
 */
function registerJsonTool<Shape extends ZodRawShapeCompat>(
  server: McpServer,
  index: RuntimeIndex,
  name: string,
  description: string,
  inputSchema: Shape,
  handler: ToolHandler<Shape>,
): void {
  const widenedSchema: ZodRawShapeCompat = inputSchema;
  const cb: ToolCallback<ZodRawShapeCompat> = async (args) =>
    toToolResult(handler(index, args as ShapeOutput<Shape>));

  server.registerTool(name, { description, inputSchema: widenedSchema }, cb);
}

function main(): void {
  const index = loadIndex();

  const server = new McpServer({ name: '@daisforge/ui-mcp', version: '0.1.0' });

  registerJsonTool(
    server,
    index,
    'list_components',
    'Список компонентов @daisforge/ui с фильтрами по типу (wrapper/composition/standalone/form), категории, scope.',
    {
      type: z.string().optional(),
      category: z.string().optional(),
      scope: z.string().optional(),
    },
    listComponents,
  );

  registerJsonTool(
    server,
    index,
    'search_components',
    'Поиск компонентов и их фичей по свободному запросу (рус/англ) — включая disambiguation-подсказки (например "таблица" → TableCanvas).',
    {
      query: z.string(),
      limit: z.number().int().positive().max(50).optional(),
    },
    searchComponents,
  );

  registerJsonTool(
    server,
    index,
    'get_component',
    'Компактная карточка компонента: тип, категория, hint, importStatement, имена пропсов, compound-части, список фичей. Для деталей используйте get_component_props/get_component_examples.',
    { name: z.string() },
    getComponent,
  );

  registerJsonTool(
    server,
    index,
    'get_component_props',
    'Полные пропсы компонента (собственные + унаследованные от атомарного @salutejs/sdds-finai компонента). part — для compound-частей (например "Header" у DrawerDF).',
    { name: z.string(), part: z.string().optional() },
    getComponentProps,
  );

  registerJsonTool(
    server,
    index,
    'get_component_examples',
    'Примеры кода компонента. Без title — список заголовков + первый пример; с title — конкретный пример.',
    { name: z.string(), title: z.string().optional() },
    getComponentExamples,
  );

  registerJsonTool(
    server,
    index,
    'list_features',
    'Список фичей компонента (актуально для TableCanvas/Table — десятки фичей вроде Filtering/Sorting/CopyPasteFill, недоступных иначе).',
    { component: z.string() },
    listFeatures,
  );

  registerJsonTool(
    server,
    index,
    'get_feature',
    'Документация и API конкретной фичи компонента (без тел примеров). Регистронезависимо, понимает вложенные пути вроде "CanvasElements/CanvasText".',
    { component: z.string(), feature: z.string() },
    getFeature,
  );

  registerJsonTool(
    server,
    index,
    'get_feature_examples',
    'Примеры кода конкретной фичи. Без title — список заголовков + первый пример.',
    {
      component: z.string(),
      feature: z.string(),
      title: z.string().optional(),
    },
    getFeatureExamples,
  );

  registerJsonTool(
    server,
    index,
    'list_categories',
    'Категории компонентов библиотеки с количеством по типам.',
    {},
    listCategories,
  );

  registerJsonTool(
    server,
    index,
    'get_installation_guide',
    'Гайд по установке и подключению @daisforge/ui (пакет, стили/токены, использование компонентов/иконок).',
    {},
    getInstallationGuide,
  );

  const transport = new StdioServerTransport();
  server.connect(transport);
}

main();
