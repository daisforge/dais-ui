import { getPaginationHeight } from '../feature-pagination/handlers';
import type { PaginationSize } from '../feature-pagination/types';

export const HEIGHT_CONTROL_BLOCK = 40;
export const HEIGHT_FILTERLIST_BLOCK = 33;
export const HEIGHT_TABLE_DEFAULT = 350;
export const MIN_CONTENT_HEIGHT = 316;

type ReservedTableHeightOptions = {
  isHaveControlBlock: boolean | undefined;
  controlBlockHeight: number;
  collapseButtonPlacement: 'inside' | 'above';
  filtersAreVisible: boolean;
  isSearchingBellow: boolean;
  paginationActiveInConfig: boolean;
  paginationHeight: number;
  paginationCustomSize: PaginationSize | undefined;
};

/**
 * Возвращает суммарную высоту в px, занятую элементами вне рабочей области:
 * управлением, заголовком collapse сверху, фильтрами и активной пагинацией.
 * BottomSheet делит рабочую область с canvas и в этот резерв не входит.
 * Использует переданные размеры без самостоятельного измерения DOM.
 */
export function getReservedTableHeight({
  isHaveControlBlock,
  controlBlockHeight,
  collapseButtonPlacement,
  filtersAreVisible,
  isSearchingBellow,
  paginationActiveInConfig,
  paginationHeight,
  paginationCustomSize,
}: ReservedTableHeightOptions): number {
  // Поиск под управлением занимает дополнительную строку той же высоты.
  const controlHeight = isHaveControlBlock
    ? controlBlockHeight * (isSearchingBellow ? 2 : 1)
    : 0;
  // При размещении above заголовок collapse занимает отдельное место.
  const aboveHeight =
    collapseButtonPlacement === 'above' ? controlBlockHeight : 0;
  const filterHeight = filtersAreVisible ? HEIGHT_FILTERLIST_BLOCK : 0;
  // До первого измерения используем высоту по размеру пагинации.
  // При collapse сохраняем её естественный размер, чтобы кадры анимации
  // не меняли резерв; после отключения пагинации резерв равен нулю.
  const paginationReservedHeight = paginationActiveInConfig
    ? paginationHeight ||
      getPaginationHeight(paginationActiveInConfig, paginationCustomSize)
    : 0;

  return controlHeight + aboveHeight + filterHeight + paginationReservedHeight;
}
