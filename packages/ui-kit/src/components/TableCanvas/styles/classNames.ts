import { tableTabsClassNames } from '@ui-kit/components/TableTabs/TableTabs.classNames';

import { tableSidebarFilterBlockClassNames } from '../feature-filtering/sidebar-filter-block/SideBarFilter.classnames';
import { tableSidebarClassNames } from '../feature-right-sidebar';
import { controlBlockClassNames } from '../widgets/control-block/control-block.classnames';

export const tableClassNames = {
  tableContainer: 'rdg-container-all',
  tableContainerFullScreened: 'rdg-container-all__full-screened',
  table: 'gdg-table:not(.dvn-scroller)',
  tableAndTableScroller: 'gdg-table',
  tableScroller: 'dvn-scroller',
  tableCardsViewContainer: 'rdg-cards-view-container',
  tableRowsViewContainer: 'rdg-rows-view-container',
  cell: 'rdg-cell',
  cellPinnedLeft: 'rdg-cell-frozen',
  row: 'rdg-row',
  editingCell: 'rdg-editor-container',
  editableCell: 'rdg-editable-cell',
  editedSuccessfullyCell: 'rdg-edited-successfully-cell',
  editedWithErrorCell: 'rdg-edited-with-error-cell',
  summaryRow: 'rdg-summary-row',
  bottomSummaryRow: 'rdg-bottom-summary-row',
  topSummaryRow: 'rdg-top-summary-row',

  headerRow: 'rdg-header-row',
  headerCellFilterSorting: 'rdg-header-cell__filter-sorting',
  headerCellLeftIcons: 'rdg-header-cell__left-icons',
  headerCellTextContent: 'rdg-header-cell__text-content',
  headerCellRightIcons: 'rdg-header-cell__right-icons',
  headerCellFilterIsActive: 'rdg-header-cell__filter-sorting--is-filter-active',
  headerCellFilterIsAvailable:
    'rdg-header-cell__filter-sorting--is-filter-available',
  headerCellSortingIsActive:
    'rdg-header-cell__filter-sorting--is-sorting-active',
  headerCellSortingIsAvailable:
    'rdg-header-cell__filter-sorting--is-sorting-available',
  headerCellContainer: 'rdg-header-cell__container',
  ...tableTabsClassNames,
  ...controlBlockClassNames,
  ...tableSidebarClassNames,
  ...tableSidebarFilterBlockClassNames
} as const;
