import type { TypographyWithAutoTooltipProps } from '@ui-kit/components/Typography';
import type { TypographyVariant } from '@ui-kit/components/Typography/Typography';
import { ReactNode } from 'react';

/** Форма триггера-превью. Прямоугольный вариант — тот же движок, меняются только радиусы. */
export type StoriesShape = 'circle' | 'rect';

/** Пропы подписи триггера — весь набор `TypographyWithAutoTooltip`, пробрасывается поверх дефолтов. */
export type StoriesTitleProps = Partial<
  TypographyWithAutoTooltipProps<TypographyVariant>
>;

/** Явный режим темы. По умолчанию тема определяется автоматически (useActiveTheme). */
export type StoriesMode = 'light' | 'dark';

/** Способ вписывания ассета в баннер (значения CSS `object-fit`). */
export type StoriesObjectFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'none'
  | 'scale-down';

/** Тип ассета сегмента. `video` зарезервирован под будущую реализацию. */
export type StoryAssetType = 'image' | 'gif' | 'video';

/** Пресет перехода между группами. */
export type StoriesGroupTransition = 'slide' | 'fade' | 'none';

/**
 * Режим видимости стрелок навигации (стрелки листают сегменты внутри группы,
 * а на границе группы — переходят к соседней, как тап и клавиши ←/→):
 * `auto` — скрыть, если сегмент всего один; иначе показать;
 * `always` — показывать всегда; `never` — не показывать.
 * Недоступную по направлению стрелку по умолчанию не рендерим — см. `hideDisabledArrows`.
 */
export type StoriesArrows = 'auto' | 'always' | 'never';

/** Один сегмент (под-стори) внутри группы. */
export interface StorySlide {
  /** Стабильный идентификатор сегмента (ключи, внешняя адресация). */
  id?: string;
  /** URL ассета (картинка или GIF). */
  src: string;
  /** Тип ассета. По умолчанию `image` (video пока не реализован). */
  type?: StoryAssetType;
  /** Длительность показа сегмента, мс. Переопределяет дефолт группы и компонента. */
  duration?: number;
  /** Способ вписывания ассета. По умолчанию `cover`. */
  objectFit?: StoriesObjectFit;
  /** Слот внизу баннера (любой ReactNode). Может отличаться на каждом сегменте. */
  footer?: ReactNode;
}

/** Контекст ошибки загрузки ассета сегмента. */
export interface StoryErrorContext {
  groupIndex: number;
  slideIndex: number;
  slide: StorySlide;
  /** Повторить загрузку ассета. */
  retry: () => void;
}

/** Состояние триггера, передаваемое в `renderTrigger` для полной кастомизации. */
export interface StoriesTriggerState {
  /** Порядковый индекс группы. */
  index: number;
  /** Просмотрена ли группа (значение пропа `viewed`). */
  viewed: boolean;
  /** Открыт ли сейчас вьюер на этой группе. */
  isActive: boolean;
}

/** Пропсы одного триггера-превью (одна группа сторей). */
export interface StoriesPreviewProps {
  /** Сегменты группы: показываются по очереди после клика на триггер. */
  slides: StorySlide[];
  /** Форма триггера. По умолчанию `circle`. */
  shape?: StoriesShape;
  /** Подпись под триггером (по умолчанию до 2 строк, ellipsis с авто-тултипом). */
  title?: string;
  /** Пропсы подписи (TypographyWithAutoTooltip) поверх дефолтов; выравнивание — через `style.textAlign`. */
  titleProps?: StoriesTitleProps;
  /** Картинка-превью внутри триггера. Если не задана — заливка-заглушка. */
  image?: string;
  /** Просмотрена ли группа. Контролируется снаружи: по колбэкам гасите обводку. */
  viewed?: boolean;
  /** Дефолтная длительность сегментов этой группы, мс. */
  defaultDuration?: number;
  /** Размер круглого триггера (сторона), px. По умолчанию 98. */
  size?: number;
  /** Ширина прямоугольного триггера, px. По умолчанию равна `size`. */
  width?: number;
  /** Высота прямоугольного триггера, px. По умолчанию равна `size`. */
  height?: number;
  /** Полная замена визуала триггера. Отменяет встроенную отрисовку. */
  renderTrigger?: (state: StoriesTriggerState) => ReactNode;
  className?: string;
}

/** Публичный снимок состояния вьюера (возвращается `ref.getState()`). */
export interface StoriesState {
  /** Открыт ли вьюер. */
  isOpen: boolean;
  /** Индекс активной группы. */
  groupIndex: number;
  /** Индекс активного сегмента внутри группы. */
  slideIndex: number;
  /** Идёт ли проигрывание (false во время паузы). */
  isPlaying: boolean;
}

/** Набор императивных команд управления сторями. */
export interface StoriesController {
  /** Открыть вьюер (опционально сразу на группе/сегменте). */
  open: (groupIndex?: number, slideIndex?: number) => void;
  /** Закрыть вьюер. */
  close: () => void;
  /** Следующий сегмент (в конце группы — следующая группа; в самом конце — закрытие). */
  next: () => void;
  /** Предыдущий сегмент (в начале группы — предыдущая группа). */
  prev: () => void;
  /** Следующая группа. */
  nextGroup: () => void;
  /** Предыдущая группа. */
  prevGroup: () => void;
  /** Перейти к конкретной группе и сегменту. */
  goTo: (groupIndex: number, slideIndex?: number) => void;
  /** Поставить на паузу. */
  pause: () => void;
  /** Снять с паузы. */
  resume: () => void;
}

/** Императивный handle, доступный через `ref`. */
export interface StoriesRef extends StoriesController {
  /** Текущее состояние вьюера. */
  getState: () => StoriesState;
}

/** Пропсы корневого компонента `Stories`. */
export interface StoriesProps {
  /** Триггеры-превью: список `Stories.Preview`. */
  children: ReactNode;
  /** Длительность сегмента по умолчанию, мс. */
  defaultDuration?: number;

  /** Controlled-открытие вьюера. */
  open?: boolean;
  /** Начальное открытие для uncontrolled-режима. */
  defaultOpen?: boolean;
  /** Controlled-индекс активной группы. */
  activeGroupIndex?: number;
  /** Controlled-индекс активного сегмента. */
  activeSlideIndex?: number;

  /** Изменилось открытие/закрытие вьюера. */
  onOpenChange?: (open: boolean, meta: { groupIndex: number }) => void;
  /** Сменилась активная группа. */
  onGroupChange?: (groupIndex: number) => void;
  /** Сменился активный сегмент (под-стори). */
  onSlideChange?: (groupIndex: number, slideIndex: number) => void;
  /** Досмотрены все группы (перед автозакрытием). */
  onComplete?: () => void;
  /** Группа полностью досмотрена — удобно гасить индикатор «просмотрено». */
  onGroupComplete?: (groupIndex: number) => void;
  /** Вьюер закрылся (крестик / Esc / клик по оверлею / автозакрытие). */
  onClose?: () => void;
  /** Ошибка загрузки ассета сегмента. */
  onError?: (ctx: StoryErrorContext) => void;
  /** Свой контент при ошибке загрузки ассета (по умолчанию — встроенный EmptyState). */
  renderError?: (ctx: StoryErrorContext) => ReactNode;

  /** Показывать затемнённый оверлей. По умолчанию `true`. */
  overlay?: boolean;
  /** Цвет оверлея. */
  overlayColor?: string;
  /** z-index оверлея. */
  zIndex?: number;

  /** Предзагружать первый ассет группы при наведении на её триггер. По умолчанию `true`. */
  preloadOnHover?: boolean;
  /** Задержка показа ассета, мс (для демо/тестов загрузки). */
  loadingDelay?: number;
  /** Порог удержания указателя для паузы, мс. По умолчанию 200. */
  pauseHoldDelay?: number;
  /** Пресет анимации перехода между группами. По умолчанию `slide`. */
  groupTransition?: StoriesGroupTransition;
  /** Режим видимости стрелок навигации. По умолчанию `auto` (скрыть при единственном сегменте). */
  arrows?: StoriesArrows;
  /**
   * Прятать стрелку, когда в её сторону листать некуда (крайний сегмент),
   * вместо показа в disabled-состоянии. По умолчанию `true`.
   */
  hideDisabledArrows?: boolean;
  /** Явный режим темы. По умолчанию определяется автоматически. */
  mode?: StoriesMode;

  className?: string;
}

/** Нормализованные данные группы, собранные из `Stories.Preview` (внутреннее). */
export interface StoriesGroupMeta {
  slides: StorySlide[];
  defaultDuration?: number;
}
