import { getHeaderButtonsBlockWidth } from '../utils/calculateMinColumnWidth';

export interface HeaderButtonsStateInput {
  /** У колонки есть фильтр. */
  filterAvailable: boolean;
  /** У колонки есть сортировка. */
  sortAvailable: boolean;
  /** Фильтр применён: кнопка видна и без наведения. */
  filterActive: boolean;
  /** Сортировка действует: кнопка видна и без наведения. */
  sortActive: boolean;
  /** Колонка выделена: шапка ведёт себя как при наведении, без анимации. */
  columnIsSelected: boolean;
  /**
   * Насколько курсор «наведён» на шапку: 0 без курсора, 1 когда курсор на
   * шапке. Значения между ними это кадры анимации входа или ухода.
   *
   * Подробнее: число приходит от Glide (drawArgs.hoverAmount), он сам ведёт
   * его за 80 мс и перерисовывает шапку на каждом кадре.
   */
  hoverAmount: number;
}

export interface HeaderButtonsState {
  showFilterButton: boolean;
  showSortButton: boolean;
  /** Блок кнопок ещё въезжает в ячейку и позиционируется абсолютно. */
  isSliding: boolean;
  /** Полная ширина блока кнопок с отступом от текста, px. */
  blockWidth: number;
  /** Уже въехавшая часть блока, px. Столько же занимает распорка в потоке. */
  visibleWidth: number;
}

/**
 * Решает, какие кнопки показать в шапке колонки и идёт ли сейчас анимация
 * их появления.
 *
 * Подробнее: кнопки показываются при наведении на шапку или у выделенной
 * колонки. Без наведения остаются только активные: применённый фильтр и
 * действующая сортировка. Появление по наведению анимируется долей
 * hoverAmount: пока она меньше единицы, блок считается въезжающим
 * (isSliding), а visibleWidth говорит, сколько пикселей блока уже видно.
 * Если хотя бы одна кнопка видна и без наведения, анимации нет, чтобы
 * активная кнопка не дёргалась.
 */
export function getHeaderButtonsState({
  filterAvailable,
  sortAvailable,
  filterActive,
  sortActive,
  columnIsSelected,
  hoverAmount,
}: HeaderButtonsStateInput): HeaderButtonsState {
  const hoverProgress = columnIsSelected ? 1 : hoverAmount;
  const headerIsActive = hoverProgress > 0;

  const showFilterButton = filterAvailable && (headerIsActive || filterActive);
  const showSortButton = sortAvailable && (headerIsActive || sortActive);

  const hasStaticButtons =
    (filterAvailable && filterActive) || (sortAvailable && sortActive);
  const isSliding = !hasStaticButtons && hoverProgress < 1;

  const blockWidth = getHeaderButtonsBlockWidth(
    [showFilterButton, showSortButton].filter(Boolean).length,
  );

  return {
    showFilterButton,
    showSortButton,
    isSliding,
    blockWidth,
    visibleWidth: blockWidth * hoverProgress,
  };
}
