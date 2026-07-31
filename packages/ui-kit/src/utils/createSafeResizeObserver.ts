/**
 * Обёртка над ResizeObserver, которая откладывает вызов колбека на следующий кадр.
 *
 * Проблема в том, что браузер вызывает колбеки ResizeObserver прямо в layout-фазе.
 * Если внутри колбека вызвать setState, React ре-рендерит компонент, DOM меняется,
 * браузер снова считает layout и снова дёргает observer. Всё это происходит внутри
 * одного фрейма, и браузер в какой-то момент не успевает доставить все уведомления.
 * Тогда он выбрасывает "ResizeObserver loop completed with undelivered notifications".
 *
 * Решение простое: откладываем вызов колбека через requestAnimationFrame. Тогда
 * setState выполняется уже в следующем кадре, а не в layout-фазе текущего, и петля
 * не возникает.
 *
 * Если requestAnimationFrame недоступен (SSR или совсем старый браузер), падаем
 * на setTimeout с нулевой задержкой. Эффект тот же, просто без привязки к кадру.
 *
 * Использование: drop-in замена new ResizeObserver(callback).
 */

const rafAvailable = typeof requestAnimationFrame === 'function';
const cafAvailable = typeof cancelAnimationFrame === 'function';

// Планируем вызов на следующий кадр (или через macrotask если rAF нет)
const scheduleFrame = (fn: () => void): number => {
  if (rafAvailable) {
    return requestAnimationFrame(fn);
  }
  return setTimeout(fn, 0) as unknown as number;
};

// Отменяем запланированный вызов, соответственно чем он был запланирован
const cancelFrame = (id: number): void => {
  if (cafAvailable) {
    cancelAnimationFrame(id);
  } else {
    clearTimeout(id);
  }
};

export const createSafeResizeObserver = (
  callback: ResizeObserverCallback,
): ResizeObserver => {
  let frameId: number | null = null;

  return new ResizeObserver((entries, observer) => {
    // Если предыдущий вызов ещё не выполнился, отменяем его и планируем новый.
    // Это даёт нам бесплатный debounce: при быстрых последовательных ресайзах
    // колбек вызовется только один раз с последними данными.
    if (frameId !== null) {
      cancelFrame(frameId);
    }

    frameId = scheduleFrame(() => {
      frameId = null;
      callback(entries, observer);
    });
  });
};
