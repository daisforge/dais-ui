/**
 * Парсит TSV-строку (tab-separated values) из clipboard в двумерный массив.
 *
 * Разделители: `\t` между колонками, `\n` (или `\r\n`) между строками.
 * Trailing пустая строка отбрасывается — Excel добавляет `\n` в конец.
 */
export function parseTsv(text: string): string[][] {
  if (!text) return [];

  const normalized = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const lines = normalized.split('\n');

  if (lines.length > 0 && lines[lines.length - 1] === '') {
    lines.pop();
  }

  return lines.map((line) => line.split('\t'));
}
