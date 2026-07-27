import { ReactNode } from 'react';

export type CSSValue = string | number;

export type PageLayoutProps = {
  /** Верхний отступ. По умолчанию var(--global-header-height, 72px). 0 — для шапки микрофронта */
  paddingTop?: CSSValue;
  /** Нижний отступ. По умолчанию адаптивный (24px / 32px). 0 — для шапки микрофронта */
  paddingBottom?: CSSValue;
  /** Минимальная высота. По умолчанию 100dvh. 0 или 'auto' — для шапки микрофронта */
  minHeight?: CSSValue;
  children: ReactNode;
  className?: string;
};
