import type { LinkCompProps } from '@ui-kit/components/Link';
import type { TooltipProps } from '@ui-kit/components/Tooltip';
import type { ReactNode } from 'react';

export interface AnalyticalWidgetTitleProps {
  /**
   * Заголовок. Строка обрезается троеточием с Tooltip; произвольный ReactNode
   * (например, Skeleton) рендерится как есть.
   */
  title?: ReactNode;
  /**
   * Пропсы для Tooltip заголовка
   */
  titleTooltipProps?: Omit<TooltipProps, 'text' | 'target'>;
  /**
   * Если необходимо title сделать ссылкой.
   * Пропсы для компонента Link, который оборачивает заголовок.
   * @default underline="none"
   */
  titleLinkProps?: Omit<LinkCompProps, 'ref'>;
}
