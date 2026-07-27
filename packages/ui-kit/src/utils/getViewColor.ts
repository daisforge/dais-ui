import { viewColors } from '../constants';
import type { TComponentColor, TViewColor } from '../types';

export const getViewColor = (view: TViewColor): TComponentColor =>
  viewColors[view];
