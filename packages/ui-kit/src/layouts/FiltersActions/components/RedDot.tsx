import React from 'react';

import { Circle } from './Circle';

export type RedDotProps = {
  /** Показывать ли точку. Обычно прокидывается из `isRedDotVisible` рендер-API. */
  visible?: boolean;
  /**
   * Смещение точки от правого верхнего угла контейнера (top/right).
   * По умолчанию `0` — точка прижата к углу.
   */
  offset?: string | number;
};

/**
 * Красная точка-индикатор («есть активные фильтры»).
 *
 * Позиционируется абсолютно в правом верхнем углу, поэтому контейнер-родитель
 * должен иметь `position: relative`. Экспортируется публично, чтобы её можно
 * было использовать на кастомном таргете `FiltersActions.FiltersButtonWithPopover`
 * (проп `renderTarget`) и сохранить единый вид индикатора.
 */
export const RedDot = ({ visible, offset }: RedDotProps) => (
  <Circle visible={visible} topLeft={offset} />
);
