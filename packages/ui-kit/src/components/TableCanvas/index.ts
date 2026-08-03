export type { SplitIconButtonProps } from './components/SplitIconButton';
export { SplitIconButton } from './components/SplitIconButton';
export {
  useHeaderContext,
  useRefTableGlobalContainerContext,
  useRowContext,
  useSidebar,
} from './contexts';
export { hideRowServiceKeysHandler as getRowWithoutServiceKeys } from './data/hideServiceKeysHanlder';
export {
  autoFocus,
  autoFocusAndSelect,
  CellEditorCombobox,
  CellEditorNumberFormat,
  CellEditorTextArea,
} from './feature-edit';
export {
  type CellEditorComboboxProps,
  type CellEditorNumberFormatProps,
  type CellEditorTextAreaProps,
} from './feature-edit/types';
export { TableFilterSelectListItem } from './feature-filtering';
export { addSkeletonToCellInRow } from './feature-infinity-scroll';
export type {
  TableNotification,
  TableNotificationCode,
  TableNotificationLevel,
  TableNotificationsConfig,
  TableNotificationType,
} from './feature-notifications';
export {
  type DetailPanelRow,
  isDetailPanelRow,
  isRowWithDetailPanelRow,
  type RowWithDetailPanel,
} from './feature-row-detail/typeGuards';
export type {
  RowInstrumentsDropdownItemOption,
  RowInstrumentsType,
} from './feature-row-instruments/types';
export { isGroupRow, isNotGroupRow } from './feature-rows-grouping/typeGuards';
export { type GroupRow } from './feature-rows-grouping/types';
export type { TooltipConfigResult } from './feature-tooltip';
export * from './styles';
export { TableCanvas } from './TableCanvas';
// Реэкспорт для controlled-режима выделения (tableConfig.cellsSelection.state):
// потребителю нужны CompactSelection (строить rows/columns) и тип GridSelection.
export * from './TableGlideInstance/reexports-for-external';
export * from './types';
export type { GridSelection } from '@glideappsfinal/glide-data-grid';
export { CompactSelection } from '@glideappsfinal/glide-data-grid';
// export { ControlBlockSwitch } from './widgets/control-block';
// export { NoRowsFallback } from './widgets/no-rows-fallback';
