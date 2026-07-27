import type { LinkCompProps } from '@ui-kit/components/Link';
import type { TooltipProps } from '@ui-kit/components/Tooltip';

export interface AnalyticalWidgetTitleProps {
  /**
   * Заголовок. При нехватке места будет обрезаться троеточием (truncated text) с Tooltip при наведении на обрезанный текст
   */
  title?: string;
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
