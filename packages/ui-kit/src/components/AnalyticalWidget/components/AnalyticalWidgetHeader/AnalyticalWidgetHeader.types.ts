import type { LinkCompProps } from '@ui-kit/components/Link';
import type { TooltipProps } from '@ui-kit/components/Tooltip';
import type {
  CSSProperties,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
} from 'react';

export interface AnalyticalWidgetHeaderProps {
  /**
   * Заголовок. Строка обрезается троеточием (truncated text) с Tooltip при наведении
   * на обрезанный текст. Можно передать произвольный ReactNode (например, Skeleton на
   * время загрузки данных с бэкенда) — он рендерится как есть, без тултипа.
   */
  title?: ReactNode;
  /**
   * Пропсы для Tooltip заголовка
   */
  titleTooltipProps?: Omit<TooltipProps, 'text' | 'target'>;
  /**
   * Метка справа от заголовка
   */
  badge?: string;
  /**
   * Стили для метки (badge). Позволяет переопределить, например, text-transform
   */
  badgeStyles?: CSSProperties;
  /**
   * Подзаголовок. Строка обрезается троеточием (truncated text) с Tooltip при наведении
   * на обрезанный текст. Можно передать произвольный ReactNode (например, Skeleton на
   * время загрузки) — он рендерится как есть, без тултипа.
   */
  subtitle?: ReactNode;
  /**
   * Пропсы для Tooltip подзаголовка
   */
  subtitleTooltipProps?: Omit<TooltipProps, 'text' | 'target'>;
  /**
   * Текст Tooltip при наведении на иконку i, справа от тега. Если не передать этот параметр, то иконка отображаться не будет
   */
  infoTooltipText?: string;
  /**
   * Пропсы для Tooltip иконки i, справа от тега.
   */
  infoTooltipProps?: Omit<TooltipProps, 'text' | 'target'>;
  /**
   * @deprecated Стрелка больше не рисуется. Используйте `titleLinkProps`.
   */
  href?: string;
  /**
   * @deprecated Стрелка больше не рисуется. Используйте `titleLinkProps`.
   */
  hrefProps?: {
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    onKeyDown?: KeyboardEventHandler<HTMLAnchorElement>;
  };
  /**
   * Если необходимо title сделать ссылкой.
   * Пропсы для компонента Link, который оборачивает заголовок.
   * @default underline="none"
   */
  titleLinkProps?: Omit<LinkCompProps, 'ref'>;
  /**
   * Слот для контента в правой части шапки
   */
  rightSlot?: ReactNode;
  /**
   * Имя класса для шапки
   */
  className?: string;
}
