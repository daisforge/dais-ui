import type {
  ExpandedRowsChangeContextV,
  ExpandedRowsContextV,
  HeaderContextValueTypeInstance,
} from '../contexts';
import { SelectingContextType } from '../feature-select-row/selecting-contexts';
import { ObjectForExtending } from '../types/utils.type';
import { HandleExpandDetail } from './feature-row-detail/types';

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
} & Customs;
