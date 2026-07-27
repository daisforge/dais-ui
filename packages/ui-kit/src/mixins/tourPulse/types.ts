export type TourPulseMixinOptions = {
  /**
   * Цвет заливки подсвеченной области.
   * @default 'transparent'
   */
  backgroundColor?: string;
  /**
   * Цвет внутреннего бордера на старте анимации.
   * @default 'var(--on-light-outline-accent-minor, rgb(82, 186, 255))'
   */
  borderColor?: string;
  /**
   * Цвет внутреннего бордера в середине анимации.
   * @default 'rgba(82, 186, 255, 0.42)'
   */
  borderColorFade?: string;
  /**
   * Цвет внешнего ореола на старте анимации.
   * @default 'rgba(82, 186, 255, 0.24)'
   */
  shadowColor?: string;
  /**
   * Цвет внешнего ореола в середине анимации.
   * @default 'rgba(82, 186, 255, 0)'
   */
  shadowColorFade?: string;
  /**
   * Внешний отступ пульсации относительно target-элемента.
   * Работает для позиционированного элемента или pseudo-element.
   * @default '-4px'
   */
  inset?: string;
  /**
   * Скругление пульсации.
   * @default '16px'
   */
  borderRadius?: string;
  /**
   * @default '1.4s'
   */
  duration?: string;
  /**
   * @default 'ease-in-out'
   */
  timingFunction?: string;
  /**
   * @default 'infinite'
   */
  iterationCount?: string | number;
  /**
   * @default true
   */
  pointerEventsNone?: boolean;
};
