/* eslint-disable @typescript-eslint/no-use-before-define */

import { generateId } from '@df-storybook/utils/generateId';

/* eslint-disable no-restricted-syntax */
function highlightText(text: string, query: string): string {
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}
export const SERVICE_ID_START = 'service:';
/**
 * Ищет вхождение query в CHANGELOG.md.
 * Возвращает только те релизы (версии), где найдено совпадение.
 * Внутри релиза выводятся ВСЕ записи (не только совпавшие).
 * Совпадения оборачиваются в <mark> для подсветки.
 */
export function searchChangelog(
  markdown: string,
  query: string
): VersionBlock[] {
  const queryTrimmed = query.trim();
  if (!queryTrimmed || queryTrimmed.length < 2)
    return [{ id: `${SERVICE_ID_START}all changelog`, content: markdown }];

  const blocks = splitIntoVersionBlocks(markdown).slice(1);

  const searchLower = query.toLowerCase();

  const matched = blocks.filter((block) =>
    block.content.toLowerCase().includes(searchLower)
  );

  if (matched.length === 0) {
    return [
      {
        id: `${SERVICE_ID_START}not found`,
        content: `Ничего не найдено по запросу **«${query}»** .`
      }
    ];
  }

  const highlighted = matched.map((block) => ({
    id: block.id,
    content: highlightText(block.content, query)
  }));
  return highlighted;
}

export interface VersionBlock {
  id: string;
  content: string;
}

function splitIntoVersionBlocks(markdown: string): VersionBlock[] {
  const lines = markdown.split('\n');
  const blocks: VersionBlock[] = [];
  let currentLines: string[] = [];

  for (const line of lines) {
    if (/^#{1,2}\s+\[?\d+\.\d+/.test(line)) {
      if (currentLines.length > 0) {
        blocks.push({ id: generateId(), content: currentLines.join('\n') });
      }
      currentLines = [line];
    } else {
      currentLines.push(line);
    }
  }

  if (currentLines.length > 0) {
    blocks.push({ id: generateId(), content: currentLines.join('\n') });
  }

  return blocks;
}
