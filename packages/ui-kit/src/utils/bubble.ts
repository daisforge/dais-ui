/**
 * Создает и инициирует кастомное событие, которое всплывает через DOM.
 * @template T - Тип данных, передаваемых в событии
 * @param {HTMLElement | Node | Document | Window} element - Элемент, на котором будет вызвано событие.
 * @param {string} eventName - Название события (например, "user-click").
 * @param {T} [detail] - Дополнительные данные, передаваемые в событии (опционально).
 * @param {CustomEventInit<T> & {bubbles?: boolean, cancelable?: boolean, composed?: boolean}} [params] - Дополнительные параметры события (опционально).
 * @param {boolean} [params.bubbles=true] - Если `true`, событие будет всплывать.
 * @param {boolean} [params.cancelable=true] - Если `true`, событие можно отменить через `preventDefault()`.
 * @param {boolean} [params.composed=true] - Если `true`, событие пересекает границы Shadow DOM.
 * @returns {boolean} - `false`, если событие было отменено, иначе `true`.
 * @example
 * // Простое событие
 * bubble(button, 'custom-click');
 *
 * // Событие с данными
 * bubble(document.body, 'user-action', { id: 123 });
 *
 * // Без всплытия
 * bubble(modal, 'close', null, { bubbles: false });
 */
export function bubble<T = unknown>(
  element: HTMLElement | Node | Document | Window,
  eventName: string,
  detail?: T,
  params: Omit<CustomEventInit<T>, 'detail'> & {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
  } = {}
): boolean {
  const eventParams: CustomEventInit<T> = {
    bubbles: true,
    cancelable: true,
    composed: true,
    ...params,
    detail
  };

  const event = new CustomEvent(eventName, eventParams);
  return element.dispatchEvent(event);
}
