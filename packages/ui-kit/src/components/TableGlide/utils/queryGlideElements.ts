import { classNames } from '../classNames';

/**
 * Ищет DOM-элементы Glide (контейнер `.gdg-table` и скроллер `.dvn-scroller`)
 * внутри переданного wrapper-элемента.
 */
export function queryGlideElements(wrapper: HTMLElement | null | undefined): {
  container: HTMLDivElement | null;
  scroller: HTMLDivElement | null;
  underlay: HTMLDivElement | null;
} {
  const container =
    wrapper?.querySelector<HTMLDivElement>(`.${classNames.glideTable}`) ?? null;
  const scroller =
    container?.querySelector<HTMLDivElement>(`.${classNames.glideScroller}`) ??
    null;
  const underlay =
    container?.querySelector<HTMLDivElement>(`.${classNames.glideUnderlay}`) ??
    null;
  return { container, scroller, underlay };
}
