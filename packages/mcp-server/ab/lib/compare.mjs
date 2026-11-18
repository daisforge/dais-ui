import crypto from 'node:crypto';

export const sha256 = (value) =>
  crypto.createHash('sha256').update(value).digest('hex');

/** Stable paired schedule: every task has both arms, alternating their order. */
export function schedule(tasks, repeats) {
  return Array.from({ length: repeats }, (_, repeat) =>
    tasks.flatMap((task, index) =>
      ((index + repeat) % 2 ? ['after', 'before'] : ['before', 'after']).map(
        (arm) => ({ arm, repeat: repeat + 1, task }),
      ),
    ),
  ).flat();
}

export function promptFor(task) {
  return [
    `Задача: ${task.prompt}`,
    'Приложение React 18 + TypeScript strict, @daisforge/ui@1.29.1 уже установлен.',
    'Разрешены react, styled-components, react-hook-form, zod, @hookform/resolvers и публичные пути @daisforge/ui, включая подпути.',
    'Изучи API через доступный MCP ui. Источник сведений о библиотеке — только MCP; не читай файлы, не используй shell, web или других агентов.',
    'Верни JSON с полем code: полный самостоятельный TSX-файл с именованным экспортом React-компонента. Ничего не записывай на диск.',
    'Реализуй всё поведение из задачи; данные и локальное состояние размести в этом файле. Не подменяй компоненты библиотеки заглушками.',
    'Не используй any, @ts-ignore, @ts-expect-error, @ts-nocheck или приведения типов для обхода ошибок API.',
    'Это одна попытка: не запускай сборку, тесты или установку; не спрашивай уточнений. Оценивается только code.',
  ].join('\n');
}

/** Infrastructure errors are retained; a failed MCP approval is not model quality. */
export function parseEvents(text) {
  const events = text
    .trim()
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => JSON.parse(line));
  const items = events
    .filter((e) => e.type === 'item.completed')
    .map((e) => e.item);
  const calls = items.filter((i) => i.type === 'mcp_tool_call');
  // Before the fix, tool-level failures were JSON payloads without isError.
  // Count them in both arms, otherwise proper error signalling looks like a regression.
  const failedCall = (call) =>
    Boolean(
      call.status === 'failed' ||
        call.error ||
        call.result?.isError ||
        call.result?.content?.some((block) => {
          if (block.type !== 'text') return false;
          try {
            return Boolean(JSON.parse(block.text)?.error);
          } catch {
            return false;
          }
        }),
    );
  const completed = events.findLast((e) => e.type === 'turn.completed');
  const errors = events.filter(
    (e) => e.type === 'error' || e.type === 'turn.failed',
  );
  const blocked = calls.find((c) =>
    /approval|connect|timed out|closed|transport/i.test(c.error?.message || ''),
  );
  return {
    completed: Boolean(completed),
    usage: completed?.usage ?? null,
    mcpCalls: calls.length,
    mcpErrors: calls.filter(failedCall).length,
    nonMcpTools: items
      .filter(
        (i) =>
          !['agent_message', 'reasoning', 'mcp_tool_call'].includes(i.type),
      )
      .map((i) => i.type),
    infrastructureError:
      blocked?.error?.message ||
      (errors.length ? JSON.stringify(errors) : null),
    tools: calls.map((c) => ({
      tool: c.tool,
      arguments: c.arguments,
      failed: failedCall(c),
    })),
  };
}

export const mean = (values) =>
  values.length ? values.reduce((sum, n) => sum + n, 0) / values.length : null;

/** Resample tasks (clusters), retaining all repeats and the before/after pairing. */
export function pairedBootstrap(rows, field, iterations = 5000) {
  const ids = [...new Set(rows.map((r) => r.taskId))];
  const deltas = ids.map((id) => {
    const group = rows.filter((r) => r.taskId === id);
    const before = group
      .filter((r) => r.arm === 'before')
      .map((r) => Number(r[field]));
    const after = group
      .filter((r) => r.arm === 'after')
      .map((r) => Number(r[field]));
    if (!before.length || before.length !== after.length)
      throw new Error(`Unpaired task ${id}`);
    return mean(after) - mean(before);
  });
  let seed = 170164;
  const random = () => {
    // eslint-disable-next-line no-bitwise -- deterministic unsigned 32-bit PRNG
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 2 ** 32;
  };
  const samples = Array.from({ length: iterations }, () =>
    mean(deltas.map(() => deltas[Math.floor(random() * deltas.length)])),
  ).sort((a, b) => a - b);
  return {
    delta: mean(deltas),
    low: samples[Math.floor(iterations * 0.025)],
    high: samples[Math.floor(iterations * 0.975)],
    clusters: ids.length,
  };
}
