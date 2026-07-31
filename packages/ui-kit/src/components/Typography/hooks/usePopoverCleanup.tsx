// ID контейнера для TypographyWithAutoTooltip
const TYPOGRAPHY_TOOLTIP_CONTAINER_ID = 'typography-with-auto-tooltip-root';
// Флаг для батчинга операций очистки
let scheduled = false;
// ID таймера для отмены запланированной очистки
let tid: ReturnType<typeof setTimeout> | null = null;
// Счетчик экземпляров для управления жизненным циклом контейнера, в котором будут тултипы типографики (TYPOGRAPHY_TOOLTIP_CONTAINER_ID)
let containerInstanceCount = 0;

function removeEmptyPopoverRoots() {
  if (typeof document === 'undefined') return;

  // Удаляем только контейнеры внутри специального контейнера
  const typographyContainer = document.getElementById(
    TYPOGRAPHY_TOOLTIP_CONTAINER_ID,
  );
  if (typographyContainer) {
    // Ищем popover-контейнеры внутри нашего контейнера
    typographyContainer
      .querySelectorAll<HTMLElement>("[id^='plasma-popover-root']:empty")
      .forEach((root) => root.remove());

    // Если сам контейнер пустой, можно его оставить (он может понадобиться снова)
  }
}

function scheduleInternal() {
  if (scheduled) return;
  scheduled = true;
  tid = setTimeout(() => {
    scheduled = false;
    tid = null;
    removeEmptyPopoverRoots();
  }, 0);
}

function cancelInternal() {
  if (tid) {
    clearTimeout(tid);
    tid = null;
  }
  scheduled = false;
}

function flushInternal() {
  if (tid) {
    clearTimeout(tid);
    tid = null;
  }
  scheduled = false;
  removeEmptyPopoverRoots();
}

/**
 * Создает контейнер для TypographyWithAutoTooltip
 * Возвращает функцию очистки
 * */
function createTypographyTooltipContainer(): (() => void) | undefined {
  if (typeof document === 'undefined') return undefined;

  containerInstanceCount += 1;

  // Создаем контейнер только при первом использовании
  if (containerInstanceCount === 1) {
    const container = document.createElement('div');
    container.id = TYPOGRAPHY_TOOLTIP_CONTAINER_ID;
    document.body.appendChild(container);
  }

  // функция очистки
  return () => {
    containerInstanceCount -= 1;

    // Удаляем контейнер только когда все экземпляры размонтированы И контейнер пустой
    if (containerInstanceCount === 0) {
      const container = document.getElementById(
        TYPOGRAPHY_TOOLTIP_CONTAINER_ID,
      );
      if (container) {
        // Проверяем, что контейнер пустой (нет активных popover-ов)
        const hasPopovers =
          container.querySelectorAll("[id^='plasma-popover-root']").length > 0;

        // Удаляем только если контейнер действительно пустой
        if (!hasPopovers) {
          container.remove();
        }
        // Если есть активные popover-ы, оставляем контейнер - они закроются сами
        // и будут удалены через schedule() (он используется в useEffect при размонтировании)
      }
    }
  };
}

/**
 * Возвращает { schedule, flush, cancel, getContainerId, createContainer } — SingleTone
 * getContainerId - функция для получения ID контейнера для TypographyWithAutoTooltip
 * useContainer - хук для создания/управления контейнером через React
 * */
export function usePopoverCleanup() {
  return {
    schedule: scheduleInternal,
    flush: flushInternal,
    cancel: cancelInternal,
    getContainerId: () => TYPOGRAPHY_TOOLTIP_CONTAINER_ID,
    createContainer: createTypographyTooltipContainer,
  };
}
