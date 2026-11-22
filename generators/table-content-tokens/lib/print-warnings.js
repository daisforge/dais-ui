/* eslint-disable no-console */
/**
 * Вывод предупреждений генераторов цветов таблицы в консоль.
 *
 * Генераторы запускаются последними шагами npm run update, поэтому их вывод —
 * последнее, что видно в консоли. Предупреждения выделены жёлтым, чтобы их
 * не пропустить среди строк установки пакетов.
 */

/** Код терминала «жёлтый текст» и «обычный текст». */
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';

/** Печатает заголовок и строки предупреждений; без строк — ничего. */
export const printWarnings = (title, warnings) => {
  if (warnings.length === 0) {
    return;
  }
  console.warn(`\n${YELLOW}ВНИМАНИЕ — ${title}:${RESET}`);
  warnings.forEach((line) => console.warn(`${YELLOW}  - ${line}${RESET}`));
  console.warn('');
};
