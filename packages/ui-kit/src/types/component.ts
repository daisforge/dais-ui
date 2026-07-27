import type { CSSProperties } from 'react';

export type TComponentSize = 's' | 'm' | 'l' | 'xl';

export type TComponentColor = CSSProperties['color'];

export type TViewColor =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'negative'
  | 'warning'
  | 'positive'
  | 'paragraph'
  | 'tertiary'
  | 'outlinesSolidPrimary';

export type TViewColors = Record<TViewColor, TComponentColor>;

export type TBorderRadiusSizes =
  | 'none'
  | 'xxs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | 'xxl';
