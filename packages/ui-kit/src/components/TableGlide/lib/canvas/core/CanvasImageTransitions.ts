import type { CanvasImageResources } from './CanvasImageResources';

/** Хранит URL показанного фото до загрузки нового; изображениями управляет Glide. */
export class CanvasImageTransitions {
  isActive = false;

  private resources?: CanvasImageResources;

  private displayed = new Map<
    string,
    {
      /** Имя участника, которому принадлежит последнее показанное фото. */
      name?: string;
      /** URL последнего загруженного фото для показа до загрузки нового URL. */
      url: string;
    }
  >();

  private painted = new Set<string>();

  beginFrame(resources?: CanvasImageResources) {
    this.isActive = true;
    if (
      this.resources?.loader !== resources?.loader ||
      this.resources?.colIndex !== resources?.colIndex ||
      this.resources?.rowIndex !== resources?.rowIndex
    ) {
      this.displayed.clear();
    }
    this.resources = resources ? { ...resources } : undefined;
    this.painted.clear();
  }

  getAvatarImage(id: string, name: string | undefined, url?: string) {
    const { resources } = this;
    if (!url || !resources) {
      this.displayed.delete(id);
      return undefined;
    }
    this.painted.add(id);
    const previous = this.displayed.get(id);
    if (previous?.name !== name) this.displayed.delete(id);
    const image = resources.loader.loadOrGetImage(
      url,
      resources.colIndex,
      resources.rowIndex,
    );
    if (image) {
      this.displayed.set(id, { name, url });
      return image;
    }
    if (previous && previous.name === name && previous.url !== url) {
      // Glide может переиспользовать HTMLImageElement после прокрутки, поэтому
      // храним только URL и при каждой отрисовке запрашиваем фото у загрузчика.
      return resources.loader.loadOrGetImage(
        previous.url,
        resources.colIndex,
        resources.rowIndex,
      );
    }
    return undefined;
  }

  endFrame() {
    this.isActive = false;
    this.displayed.forEach((_value, id) => {
      if (!this.painted.has(id)) this.displayed.delete(id);
    });
    this.painted.clear();
  }
}
