import type { EmptyStateProps } from '@ui-kit/components/EmptyState';
import type { ErrorPageProps } from '@ui-kit/layouts/ErrorPage';
import type { ReactNode } from 'react';

type TableContentStateFrame = {
  displayMode?: 'body-overlay' | 'full-content';
  borderLeftTopRadiusRounded?: boolean;
  borderRightTopRadiusRounded?: boolean;
  borderLeftBottomRadiusRounded?: boolean;
  borderRightBottomRadiusRounded?: boolean;
  custom?: ReactNode;
};

export type TableContentStateEmptyOverlay = {
  kind: 'empty';
} & TableContentStateFrame &
  Partial<EmptyStateProps>;

export type TableContentStateErrorOverlay = {
  kind: 'error';
  errorPageProps?: Partial<ErrorPageProps>;
} & TableContentStateFrame;

export type TableContentStateOverlay =
  | TableContentStateEmptyOverlay
  | TableContentStateErrorOverlay;

/**
 * Empty state внутри body-области canvas-таблицы.
 * Шапка колонок, control block и pagination остаются видимыми.
 */
export type TableCanvasEmptyStateConfig = TableCanvasContentStateBase &
  Partial<EmptyStateProps>;

type TableCanvasContentStateBase = {
  /**
   * Включено ли состояние.
   */
  enabled: boolean;
  /**
   * Полностью кастомный контент состояния вместо дефолтного EmptyState.
   */
  custom?: ReactNode;
};
/**
 * Error state внутри body-области canvas-таблицы.
 */
export type TableCanvasErrorStateConfig = TableCanvasContentStateBase &
  Partial<ErrorPageProps>;
