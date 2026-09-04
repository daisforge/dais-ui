import type {
  ExpandedRowsChangeContextV,
  ExpandedRowsContextV,
  HeaderContextValueTypeInstance,
} from '../contexts';
import type { HandleExpandDetail } from '../feature-row-detail/types';
import { SelectingContextType } from '../feature-select-row/selecting-contexts';
import { ObjectForExtending } from './utils.type';

// eslint-disable-next-line @typescript-eslint/ban-types
export type CtxsType<Customs extends ObjectForExtending | void = {}> = {
  selectingRowCtx: SelectingContextType;
  headerCtx: HeaderContextValueTypeInstance<ObjectForExtending>;
  expandedRowsCtx: {
    expandedRowsIds: ExpandedRowsContextV | null;
    setExpandedRowsIds: ExpandedRowsChangeContextV | null;
    handleExpandRowDetail: HandleExpandDetail<ObjectForExtending>;
    expandButtonColumnKey: string | undefined;
  };
  rowCtx: ObjectForExtending;
  /**
   * Высота ОДНОГО header-ряда (листового и каждого групп-уровня — они равны).
   * Нужна рендерам шапки, чтобы позиционировать контент в ПОСЛЕДНЕМ (листовом)
   * уровне слитой многоуровневой шапки (напр. общий чекбокс прижимается к низу).
   */
  headerHeight: number;
  /** Число групп-уровней шапки (0 — одноуровневая шапка). */
  groupHeaderLevels: number;
} & Customs;
