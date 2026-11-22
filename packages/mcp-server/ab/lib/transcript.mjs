import fs from 'node:fs';

/**
 * Разбор stream-json транскрипта одного прогона `claude -p`.
 *
 * Ключевая метрика T10 — сколько вызовов инструментов агент делает ДО первой
 * строчки сгенерированного кода: именно её должен снижать MCP (один точный
 * ответ индекса вместо блуждания по исходникам).
 */
export function parseTranscript(file, answerFileName = 'answer.tsx') {
  const toolCalls = [];
  let result;

  for (const raw of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const line = raw.trim();
    if (!line) continue;
    let ev;
    try {
      ev = JSON.parse(line);
    } catch {
      continue; // недописанная строка при убийстве процесса по таймауту
    }

    if (ev.type === 'result') {
      result = ev;
      continue;
    }
    if (ev.type !== 'assistant' || !ev.message?.content) continue;
    for (const block of ev.message.content) {
      if (block.type !== 'tool_use') continue;
      toolCalls.push({
        name: block.name,
        target:
          block.input?.file_path || block.input?.name || block.input?.query,
      });
    }
  }

  const writeIdx = toolCalls.findIndex(
    (t) =>
      (t.name === 'Write' || t.name === 'Edit' || t.name === 'MultiEdit') &&
      typeof t.target === 'string' &&
      t.target.endsWith(answerFileName),
  );

  const mcpCalls = toolCalls.filter((t) => t.name.startsWith('mcp__')).length;
  const sourceCalls = toolCalls.filter((t) =>
    ['Read', 'Grep', 'Glob'].includes(t.name),
  ).length;

  return {
    toolCalls: toolCalls.length,
    toolCallsBeforeCode: writeIdx === -1 ? null : writeIdx,
    wroteAnswer: writeIdx !== -1,
    mcpCalls,
    sourceCalls,
    toolSequence: toolCalls.map((t) => t.name),
    costUsd: result?.total_cost_usd ?? null,
    durationMs: result?.duration_ms ?? null,
    numTurns: result?.num_turns ?? null,
    isError: result?.is_error ?? null,
    subtype: result?.subtype ?? null,
  };
}
