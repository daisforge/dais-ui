import { StoriesPreviewProps } from '../../Stories.types';

export interface StoriesPreviewInternalProps extends StoriesPreviewProps {
  /**
   * @internal Индекс группы, инжектится корнем `Stories` при клонировании.
   * Снаружи задавать не нужно.
   */
  __index?: number;
}
