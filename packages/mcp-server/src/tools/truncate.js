export const RESPONSE_BUDGET_CHARS = 25000;

/**
 * Последний рубеж защиты бюджета ответа. Каждый инструмент уже спроектирован
 * компактным по построению (get_component без тел примеров, list_features без
 * apiDocs и т.д.) — это подстраховка на случай, если конкретная запись всё
 * равно оказалась больше расчётного бюджета (see: TableCanvas — 682k символов
 * в сыром meta.json на один компонент).
 */
export function truncateForResponse(payload, budget = RESPONSE_BUDGET_CHARS) {
  const text = JSON.stringify(payload, null, 2);
  if (text.length <= budget) return text;

  return `${text.slice(0, budget)}\n\n… [ответ обрезан: ${text.length} символов, показано ${budget}. Уточните запрос — используйте part/title/feature у соответствующего инструмента, чтобы получить нужный срез точечно.]`;
}
