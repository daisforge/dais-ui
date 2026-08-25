import { createDebugLogger } from '@ui-kit/shared/utils/debug';
import { useEffect, useRef } from 'react';

/**
 * Ставит фокус в инпут поиска при открытии поповера фильтра.
 *
 * Зачем: обычно фокус в инпут наводит floating-ui FloatingFocusManager (берёт
 * первый tabbable-элемент внутри поповера). Это гонка: если инпут ещё не
 * примонтирован в момент, когда FFM вычисляет initial-focus (медленная dev-сборка,
 * другой движок браузера), FFM фокусит сам контейнер диалога — и вокруг поповера
 * появляется фокус-рамка, а каретки в инпуте нет.
 *
 * Делаем фокус детерминированным, не завязанным на исход гонки:
 * 1) focusin в capture-фазе ловит момент, когда FFM навёл фокус на контейнер нашего
 *    поповера, и синхронно (до отрисовки кадра) уводит фокус в инпут — кадр с
 *    рамкой не успевает нарисоваться. Перехват срабатывает только для нашего
 *    экземпляра и только в начальном окне открытия, чтобы не мешать Tab-навигации.
 * 2) requestAnimationFrame-фокус как подстраховка на случай, если FFM фокус на
 *    контейнер не наводит вовсе.
 *
 * ВАЖНО (внешняя зависимость): скоуп перехвата опирается на атрибут
 * `data-floating-ui-focusable`, который проставляет floating-ui на контейнере
 * фокус-менеджера. В нашем случае его рендерит БЕТА-поповер `PopoverBeta`
 * (@salutejs/sdds-finai/beta -> plasma-new-hope `_beta/Popover` -> floating-ui
 * `FloatingFocusManager`), используемый в `PopoverContainer` (StyledPopoverBeta).
 * Если атомарка/floating-ui переименуют или уберут этот атрибут — селектор ниже
 * перестанет находить контейнер, перехват отключится и вернётся проблеск рамки.
 * Тогда обновить селектор `data-floating-ui-focusable` здесь.
 *
 * Диагностика: логи таймлайна фокуса включаются в консоли браузера общим флагом
 * фильтра `window.__TABLE_CANVAS_FILTER_DEBUG__ = true` (вывод через console.debug,
 * нужен уровень Verbose/Debug в фильтрах консоли).
 *
 * Возвращает ref, который нужно навесить на инпут поиска.
 */

const PFX = '[filter-focus]';
const focusDebug = createDebugLogger('TABLE_CANVAS_FILTER');

const describe = (el: Element | null) => {
  if (!el) return null;
  const html = el as HTMLElement;
  return {
    tag: el.tagName,
    role: el.getAttribute('role'),
    id: html.id || null,
    tabindex: el.getAttribute('tabindex'),
    floatingFocusable: el.hasAttribute('data-floating-ui-focusable'),
  };
};

export const useFocusSearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    focusDebug(PFX, 'mount', {
      refInput: describe(ref.current),
      active: describe(document.activeElement),
    });

    let armed = true;

    const onFocusIn = (e: FocusEvent) => {
      if (!armed) return;
      const input = ref.current;
      const target = e.target as HTMLElement | null;
      if (!input || !target || target === input) return;
      // Реагируем строго на НАШ ближайший floating-контейнер (тот, что оборачивает
      // наш инпут). Так не заденем ни внешний контейнер, который мог бы нас
      // оборачивать, ни чужие поповеры на странице.
      if (target === input.closest('[data-floating-ui-focusable]')) {
        focusDebug(PFX, 'focusin-redirect', { from: describe(target) });
        input.focus();
        armed = false;
      }
    };
    document.addEventListener('focusin', onFocusIn, true);

    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        ref.current?.focus();
        focusDebug(PFX, 'raf-focus', {
          active: describe(document.activeElement),
        });
      });
    });

    // Снимаем перехват после начального окна открытия, чтобы не мешать навигации.
    const disarm = setTimeout(() => {
      armed = false;
    }, 300);

    // Диагностический таймлайн: подтверждает, что фокус встал в инпут и не был
    // уведён обратно. Вывод молчит, пока не включён флаг (см. JSDoc).
    const timeline = [50, 150, 300].map((ms) =>
      setTimeout(() => {
        focusDebug(PFX, `t+${ms}`, {
          active: describe(document.activeElement),
          focusedOurInput: document.activeElement === ref.current,
        });
      }, ms),
    );

    return () => {
      document.removeEventListener('focusin', onFocusIn, true);
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(disarm);
      timeline.forEach(clearTimeout);
    };
  }, []);

  return ref;
};
