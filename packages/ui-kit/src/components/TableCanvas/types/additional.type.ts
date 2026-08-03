import React, { ReactNode } from 'react';

import { DataAttributes } from './utils.type';

export type Option = { text: string; value: string };

export type DropdownItemOption = {
  /**
   *  Значение у item
   */
  value: string | number;
  /**
   * Метка-подпись к item
   */
  label: string;
  /**
   * Список дочерних items.
   */
  items?: Array<DropdownItemOption>;
  /**
   * Item не активен
   */
  disabled?: boolean;
  /**
   * Слот для контента слева
   */
  contentLeft?: ReactNode;
  /**
   * Слот для контента справа
   */
  contentRight?: ReactNode;
  /**
   * Отобразить ли разделитель до элемента
   */
  dividerBefore?: boolean;
  /**
   * Отобразить ли разделитель после элемента
   */
  dividerAfter?: boolean;
  /**
   * Выбранный item.
   * @deprecated использовать ContentLeft || ContentRight
   */
  isActive?: boolean;
  /**
   * Кастомный цвет текста
   * @deprecated
   */
  color?: string;
  /**
   * Item не активен
   * @deprecated использовать disabled
   */
  isDisabled?: boolean;
};

/**
 * Метки для автоматизированного тестирования и аналитики
 *
 * Используется для прокидывания кастомных классов и data-атрибутов
 * с целью поиска элементов в DOM для онбординга и аналитики
 */
export type DomMetadata = {
  /**
   * CSS класс для стилизации и поиска элемента
   *
   * @example 'user-profile-card'
   * @example 'onboarding-step-1'
   */
  className?: string;
  /**
   * Data-атрибуты для тестирования, аналитики и онбординга
   *
   * @example { 'data-testid': 'submit-button', 'data-analytics': 'click-event' }
   */
  dataAttributes?: DataAttributes;
  /**
   * Обработчик клика для аналитики и трекинга
   *
   * Вызывается вместе с основным обработчиком элемента (не заменяет его).
   * Не вызывает stopPropagation — оригинальная логика кнопки сохраняется.
   *
   * @param e - MouseEvent (может быть undefined для элементов внутри Dropdown)
   * @param detail - контекст действия: action, columnKey, size и др.
   *
   * @example onClick: (e, detail) => analytics.track(detail?.action, detail)
   */
  onClick?: (
    e?: React.MouseEvent<HTMLElement>,
    detail?: Record<string, unknown>,
  ) => void;
};
