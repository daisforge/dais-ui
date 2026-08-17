import { createSafeResizeObserver } from '@ui-kit/utils';
import { RefObject, useEffect } from 'react';

/**
 * Компонент `Tabs` (`@salutejs/sdds-finai`) пересчитывает видимость стрелок-скролла
 * только по нативному событию `scroll` и один раз при монтировании (см. `HorizontalTabs`:
 * эффект пересчёта `lastItemVisible` завязан лишь на проп `clip`, а не на реальную ширину
 * содержимого). Поэтому когда список чипов меняется (добавили/убрали активный фильтр)
 * или сам контейнер меняет ширину без реального скролла — стрелки остаются в неактуальном
 * состоянии, пока пользователь не проскроллит блок вручную.
 *
 * Хук наблюдает за скролл-контейнером табов (класс `.tabs-clip-scroll`, который
 * прокидывается библиотекой) и его содержимым. При любом изменении их размеров
 * форсирует диспатч нативного `scroll`-события на скролл-контейнер — это заставляет
 * внутренний `handleScroll` из `Tabs` пересчитать видимость стрелок, не вмешиваясь
 * в саму библиотеку.
 */
export const useSyncTabsScrollArrows = (
  containerRef: RefObject<HTMLElement | null>,
  active: boolean,
) => {
  useEffect(() => {
    if (!active) return undefined;

    const scrollWrapper =
      containerRef.current?.querySelector<HTMLElement>('.tabs-clip-scroll');
    // содержимое-«трек» с чипами - именно его ширина растёт/уменьшается при
    // добавлении/удалении фильтров, а не ширина самого scroll-контейнера
    const track = scrollWrapper?.firstElementChild as HTMLElement | null;

    if (!scrollWrapper) return undefined;

    const syncArrows = () => {
      scrollWrapper.dispatchEvent(new Event('scroll', { bubbles: true }));
    };

    const resizeObserver = createSafeResizeObserver(syncArrows);
    resizeObserver.observe(scrollWrapper);
    if (track) {
      resizeObserver.observe(track);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef, active]);
};
