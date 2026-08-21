export const RESPONSE_BUDGET_CHARS = 25000;

/** Общая форма ответа тула, отдающего список: пагинация видна агенту напрямую. */
export interface TruncatedList<T> {
  items: T[];
  shown: number;
  total: number;
  /** Присутствует, только когда часть элементов не влезла в бюджет. */
  truncationNotice?: string;
}

/**
 * Бюджетирует список поэлементно: сериализует кандидатов один за другим и
 * добирает элементы, пока итоговый (pretty-printed, как его увидит агент
 * через truncateForResponse) JSON помещается в бюджет. В отличие от среза
 * строки, всегда возвращает валидный объект — не может разрезать элемент
 * пополам.
 */
function notice(shownCount: number, total: number): string {
  return `Показано ${shownCount} из ${total}. Уточните запрос фильтрами либо используйте limit/offset (где поддерживается), чтобы получить остаток.`;
}

export function truncateList<T>(
  items: readonly T[],
  budget: number = RESPONSE_BUDGET_CHARS,
): TruncatedList<T> {
  const total = items.length;
  const shown: T[] = [];

  for (const item of items) {
    const shownCount = shown.length + 1;
    const candidate: TruncatedList<T> = {
      items: [...shown, item],
      shown: shownCount,
      total,
      ...(shownCount < total
        ? { truncationNotice: notice(shownCount, total) }
        : {}),
    };

    if (
      JSON.stringify(candidate, null, 2).length > budget &&
      shown.length > 0
    ) {
      break;
    }
    shown.push(item);
  }

  const result: TruncatedList<T> = { items: shown, shown: shown.length, total };
  if (shown.length < total) {
    result.truncationNotice = notice(shown.length, total);
  }
  return result;
}

/**
 * Последний рубеж защиты бюджета ответа. Каждый инструмент уже спроектирован
 * компактным по построению (get_component без тел примеров, list_features без
 * apiDocs и т.д.), а списочные ответы бюджетируются заранее через
 * truncateList — это подстраховка на случай, если конкретная запись всё
 * равно оказалась больше расчётного бюджета (see: TableCanvas — 682k символов
 * в сыром meta.json на один компонент).
 *
 * В отличие от старой реализации, никогда не режет сериализованную строку
 * посередине: результат всегда валидный JSON — обрезается только текстовое
 * значение внутри поля `raw`.
 */
export function truncateForResponse(
  payload: unknown,
  budget: number = RESPONSE_BUDGET_CHARS,
): string {
  const text = JSON.stringify(payload, null, 2);
  if (text.length <= budget) return text;

  const notice = `Ответ обрезан: ${text.length} символов исходно, показано начало (обрезка внутри поля raw, JSON снаружи валиден). Уточните запрос — используйте part/title/feature у соответствующего инструмента, чтобы получить нужный срез точечно.`;

  const build = (rawLen: number): string =>
    JSON.stringify(
      {
        truncated: true,
        totalChars: text.length,
        notice,
        raw: text.slice(0, rawLen),
      },
      null,
      2,
    );

  // Экранирование спецсимволов внутри raw (кавычки, переносы строк — их много
  // в pretty-printed JSON) может увеличить длину сериализованного результата
  // сильнее, чем длина самого среза, поэтому простое вычитание overhead один
  // раз не гарантирует итоговый размер — ищем бинарным поиском максимальный
  // rawLen, при котором результат всё ещё укладывается в бюджет.
  let lo = 0;
  let hi = Math.min(text.length, budget);
  let best = build(0);
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    const candidate = build(mid);
    if (candidate.length <= budget) {
      best = candidate;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return best;
}
