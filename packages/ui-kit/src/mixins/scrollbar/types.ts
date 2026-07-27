export interface ScrollbarStylesProps {
  /** Ширина скроллбара */
  width?: string;
  /** Высота скроллбара (для горизонтального) */
  height?: string;
  /** Скругление трека */
  borderRadius?: string;
  /** Тонкий скроллбар (Firefox scrollbar-width: thin) */
  isThin?: boolean;
  /** Цвет thumb */
  thumbColor?: string;
  /** Цвет thumb при наведении (по умолчанию = thumbColor) */
  thumbColorHover?: string;
  /** Цвет трека */
  trackColor?: string;
  /** Цвет трека при наведении (по умолчанию = trackColor) */
  trackColorHover?: string;
  /** Тема: light | dark */
  theme?: 'light' | 'dark';
}
