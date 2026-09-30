import type { ImageWindowLoader } from '@glideappsfinal/glide-data-grid';

/** Ресурсы текущей отрисовки; жизненным циклом загрузчика управляет Glide. */
export interface CanvasImageResources {
  /** Загрузчик и кэш изображений Glide; связывает URL с ячейкой для перерисовки после загрузки. */
  loader: Pick<ImageWindowLoader, 'loadOrGetImage'>;
  /** Индекс столбца из текущего draw Glide, включая его внутренние служебные столбцы. */
  colIndex: number;
  /** Индекс строки из текущего draw Glide; это координата ячейки, а не бизнес-данные строки. */
  rowIndex: number;
}
