import { clearButtonCaches } from '../cells/buttons';
import { invalidateTextCache } from '../primitives/CanvasText';
import { waitForFonts } from './fontUtils';

interface Listener {
  onLoaded: () => void;
  fontFamily?: () => string | undefined;
}

/** Загруженные семейства; null — неизвестно какие (уведомляются все) */
type Families = readonly string[] | null;

const normalizeFamily = (family: string) =>
  family.replace(/["']/g, '').trim().toLowerCase();

const isInterested = (listener: Listener, families: Families) => {
  const fontFamily = listener.fontFamily?.()?.toLowerCase();
  if (!families || !fontFamily) return true;
  return families.some((family) => fontFamily.includes(family));
};

const nextFrame = (callback: () => void) => {
  if (typeof requestAnimationFrame === 'function') {
    requestAnimationFrame(callback);
  } else {
    setTimeout(callback, 0);
  }
};

/** Загрузка шрифтов документа: одна подписка на все таблицы */
class FontsLoadedTracker {
  private readonly listeners = new Set<Listener>();

  private started = false;

  /** Семейства, загруженные с последнего уведомления; undefined — загрузок не было */
  private pending: Families | undefined;

  private flushScheduled = false;

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    this.start();
    return () => {
      this.listeners.delete(listener);
    };
  }

  private start(): void {
    if (this.started) return;
    this.started = true;
    waitForFonts().then(() => this.schedule(null));
    if (typeof document !== 'undefined') {
      document.fonts?.addEventListener?.('loadingdone', this.handleLoadingDone);
    }
  }

  private readonly handleLoadingDone = (event: Event) => {
    const { fontfaces } = event as Event & {
      fontfaces?: readonly { family: string }[];
    };
    if (!fontfaces) {
      this.schedule(null);
    } else if (fontfaces.length > 0) {
      this.schedule(fontfaces.map((face) => normalizeFamily(face.family)));
    }
  };

  /** Шрифт грузится несколькими начертаниями — пачку склеиваем в одно уведомление за кадр */
  private schedule(families: Families): void {
    this.pending =
      families === null || this.pending === null
        ? null
        : [...(this.pending ?? []), ...families];
    if (this.flushScheduled) return;
    this.flushScheduled = true;
    nextFrame(() => this.flush());
  }

  private flush(): void {
    const families = this.pending;
    this.pending = undefined;
    this.flushScheduled = false;
    if (families === undefined) return;

    const targets = [...this.listeners].filter((listener) =>
      isInterested(listener, families),
    );
    if (targets.length === 0) return;
    invalidateTextCache();
    clearButtonCaches();
    targets.forEach((listener) => listener.onLoaded());
  }
}

const tracker = new FontsLoadedTracker();

/**
 * Вызывает `onLoaded` после загрузки шрифтов и каждой следующей догрузки, предварительно
 * сбросив кеши ширин и переносов текста. Canvas запрашивает шрифт лениво, при первой
 * отрисовке, поэтому разового `waitForFonts` мало.
 *
 * Подписавшийся после первой загрузки уведомляется только о следующих. С `fontFamily`
 * подписчик не уведомляется о загрузке других семейств.
 * @returns отписка
 */
export function subscribeFontsLoaded(
  onLoaded: () => void,
  options: { fontFamily?: () => string | undefined } = {},
): () => void {
  return tracker.subscribe({ onLoaded, fontFamily: options.fontFamily });
}
