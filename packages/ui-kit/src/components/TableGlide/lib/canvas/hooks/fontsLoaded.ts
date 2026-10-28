import { clearButtonCaches } from '../cells/buttons';
import { invalidateTextCache } from '../primitives/CanvasText';
import { waitForFonts } from './fontUtils';

const nextFrame = (callback: () => void) => {
  if (typeof requestAnimationFrame === 'function') {
    requestAnimationFrame(callback);
  } else {
    setTimeout(callback, 0);
  }
};

/** Загрузка шрифтов документа: одна подписка на все таблицы */
class FontsLoadedTracker {
  private readonly listeners = new Set<() => void>();

  private started = false;

  private flushScheduled = false;

  subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    this.start();
    return () => {
      this.listeners.delete(listener);
    };
  }

  private start(): void {
    if (this.started) return;
    this.started = true;
    waitForFonts().then(() => this.schedule());
    if (typeof document !== 'undefined') {
      document.fonts?.addEventListener?.('loadingdone', this.handleLoadingDone);
    }
  }

  private readonly handleLoadingDone = (event: Event) => {
    const { fontfaces } = event as Event & { fontfaces?: readonly unknown[] };
    if (!fontfaces || fontfaces.length > 0) this.schedule();
  };

  /** Шрифт грузится несколькими начертаниями — пачку склеиваем в одно уведомление за кадр */
  private schedule(): void {
    if (this.flushScheduled) return;
    this.flushScheduled = true;
    nextFrame(() => this.flush());
  }

  private flush(): void {
    this.flushScheduled = false;
    if (this.listeners.size === 0) return;
    invalidateTextCache();
    clearButtonCaches();
    [...this.listeners].forEach((listener) => listener());
  }
}

const tracker = new FontsLoadedTracker();

/**
 * Вызывает `onLoaded` после загрузки шрифтов и каждой следующей догрузки любого семейства,
 * предварительно сбросив кеши ширин и переносов текста. Canvas запрашивает шрифт лениво,
 * при первой отрисовке, поэтому разового `waitForFonts` мало; у ячейки может быть свой
 * шрифт, не из темы, поэтому фильтра по семейству нет.
 *
 * Подписавшийся после первой загрузки уведомляется только о следующих.
 * @returns отписка
 */
export function subscribeFontsLoaded(onLoaded: () => void): () => void {
  return tracker.subscribe(onLoaded);
}
