import { flushSync } from 'react-dom';

type ViewTransition = { finished: Promise<void> };
type DocWithVT = Document & {
  startViewTransition?: (callback: () => void) => ViewTransition;
};

export const supportsViewTransition = (): boolean =>
  typeof document !== 'undefined' &&
  typeof (document as DocWithVT).startViewTransition === 'function';

/**
 * Оборачивает изменение состояния во View Transitions API, если он доступен.
 * Обновление прогоняется через flushSync — иначе React применит его асинхронно,
 * и браузер не увидит разницы в DOM между снимками «до/после». Направление
 * прокидывается атрибутом на `<html>`: по нему CSS-правила `::view-transition-*`
 * различают анимацию «вперёд/назад». Если API нет — просто обновляемся (fallback).
 */
export const runViewTransition = (
  update: () => void,
  options?: { direction?: 'next' | 'prev'; enabled?: boolean },
): void => {
  const { direction = 'next', enabled = true } = options ?? {};

  if (!enabled || !supportsViewTransition()) {
    update();
    return;
  }

  const doc = document as DocWithVT;
  doc.documentElement.dataset['dfStoriesDir'] = direction;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const transition = doc.startViewTransition!(() => flushSync(update));
  transition.finished.finally(() => {
    delete doc.documentElement.dataset['dfStoriesDir'];
  });
};
