/* eslint-disable import/extensions -- The MCP SDK uses explicit .js subpaths. */
import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js';

import { truncateForResponse } from './tools/truncate.js';
import { ToolError } from './types.js';

export function toToolResult(payload: unknown): CallToolResult {
  return {
    content: [{ type: 'text', text: truncateForResponse(payload) }],
    ...(payload instanceof ToolError ? { isError: true } : {}),
  };
}
