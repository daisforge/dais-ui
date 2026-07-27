import type { CSSProperties, ReactNode } from 'react';

export type MassActionsStaticProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /**
   * Позиционирование компонента
   * - 'absolute' - абсолютное позиционирование (по умолчанию)
   * - 'static' - обычный блок без абсолютного позиционирования
   * - 'relative' - относительное позиционирование
   */
  position?: 'absolute' | 'static' | 'relative';
  /**
   * Явный контроль видимости компонента
   * Если не указан, компонент всегда виден
   * Если указан, компонент отображается только при show === true
   */
  show?: boolean;
  /**
   * Включить/отключить анимацию появления/исчезновения
   * @default true
   */
  animate?: boolean;
};
