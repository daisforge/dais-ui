// Utils
export { applyValuesToRows } from './utils/applyValuesToRows';
export { buildActiveDataRange } from './utils/buildActiveDataRange';
export { collectMatrixFromTargets } from './utils/collectMatrixFromTargets';
export { collectTextMatrix } from './utils/collectTextMatrix';
export { findFirstDataCol } from './utils/findFirstDataCol';
export { getCellText } from './utils/getCellText';
export { isCellEditable } from './utils/isCellEditable';
export { iterateCellRange } from './utils/iterateCellRange';
export {
  DEFAULT_COPY_HOTKEY,
  DEFAULT_PASTE_HOTKEY,
  matchHotkey,
} from './utils/matchHotkey';
export { parseTsv } from './utils/parseTsv';
export { rangeToIndexes } from './utils/rangeToIndexes';
export { resolveSubRowKey } from './utils/resolveSubRowKey';
export {
  resolveTransferTargets,
  type TransferTargetKind,
  type TransferTargets,
} from './utils/resolveTransferTargets';
export { shouldSkipCell, type SkipReason } from './utils/shouldSkipCell';
export {
  normalizePasteValue,
  validatePasteValue,
} from './utils/validatePasteValue';
export { writeCellValue } from './utils/writeCellValue';

// Types
export type {
  AllowedFillDirections,
  CellIterationItem,
  CellTransferCellInfo,
  CellTransferConfig,
  CopyMeta,
  FillHandleConfig,
  FillMeta,
  FillPatternEvent,
  HotkeyConfig,
  OverflowBehavior,
  PasteConfig,
  PasteMeta,
  ReadonlyBehavior,
  Rectangle,
  RowsChangeType,
  TransferColumnConfig,
  ValidationMode,
} from './types';

// Hooks
export { useClipboard } from './hooks/useClipboard';
export { useCopy } from './hooks/useCopy';
export { useFillHandle } from './hooks/useFillHandle';
export { usePaste } from './hooks/usePaste';
