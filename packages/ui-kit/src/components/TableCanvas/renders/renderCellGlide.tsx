import {
  IconChevronDown,
  IconChevronRight,
  IconDisclosureDownOutline,
  IconDisclosureRightOutline,
} from '@ui-kit/icons';

import { Canvas } from '../../TableGlide';
import {
  SKELETON_CELLS_KEY,
  SKELETON_ROW_KEY,
  SkeletonCells,
} from '../feature-infinity-scroll';
import type { KeyText } from '../feature-key-text/types';
import { ExpandDetailButton } from '../feature-row-detail/ExpandDetailButton';
import { rowIsHaveDetailPanel } from '../feature-row-detail/handlers';
import { RowDetailConfig } from '../feature-row-detail/types';
import { ROW_I_COLUMN_KEY } from '../feature-row-instruments';
import { ROW_MARKER_COLUMN_KEY } from '../feature-row-markers';
import { CHECKBOX_COLUMN_KEY } from '../feature-select-row';
import { SUBROWS_KEY } from '../feature-tree/constants';
import { getHasArrow, getTreeIdAndLvlOfRow } from '../feature-tree/handlers';
import {
  CanvasContent,
  CellContent,
  CellInfoGlideInstance,
  createTextCellGlide,
  isCanvasContent,
  isCanvasEl,
  isCanvasString,
  isGlideGridCellObj,
} from '../TableGlideInstance';
import { ContentFormat } from '../TableGlideInstance/type';
import { ColumnConfig, ObjectForExtending, TableConfig } from '../types';
import { FormattedContent } from './formatCell';
import { ROW_ICON_BUTTON_CONFIG } from './rowIconConfig';
import {
  DEFAULT_CELL_PADDING_INLINE,
  getPaddingLeftFinal,
} from './styleConstants';
import { withSelectIcon } from './withSelectIcon';

const TREE_BUTTON_CONFIG = {
  big: {
    ...ROW_ICON_BUTTON_CONFIG.big,
    gap: 8,
    ExpandedIcon: IconDisclosureDownOutline,
    CollapsedIcon: IconDisclosureRightOutline,
  },
  medium: {
    ...ROW_ICON_BUTTON_CONFIG.medium,
    gap: 2,
    ExpandedIcon: IconChevronDown,
    CollapsedIcon: IconChevronRight,
  },
  small: {
    ...ROW_ICON_BUTTON_CONFIG.small,
    gap: 0,
    ExpandedIcon: IconChevronDown,
    CollapsedIcon: IconChevronRight,
  },
};

const getTreeButton = (
  expanded: boolean,
  toggleExpand: () => void,
  rowSize: 'big' | 'medium' | 'small' = 'big',
) => {
  const { overrideSquareSize, overrideIconSize, ExpandedIcon, CollapsedIcon } =
    TREE_BUTTON_CONFIG[rowSize];
  const Icon = expanded ? ExpandedIcon : CollapsedIcon;

  return (
    <Canvas.EmbedIconButton
      icon={<Icon />}
      view="secondary"
      interaction={{
        selection: 'keep',
        cellClick: 'stop',
        editor: 'never',
        contextMenu: 'keep-selection',
      }}
      // buttonSize="xs"
      overrideSquareSize={overrideSquareSize}
      overrideIconSize={overrideIconSize}
      onClick={toggleExpand}
      style={{
        flexShrink: 0,
      }}
    />
  );
};

type CellPaddingInline =
  | number
  | {
      left?: number;
      right?: number;
    };

const resolveCellPaddingInline = (
  paddingInline: CellPaddingInline = DEFAULT_CELL_PADDING_INLINE,
) => {
  if (typeof paddingInline === 'number') {
    return {
      left: paddingInline,
      right: paddingInline,
    };
  }

  return {
    left: paddingInline.left ?? DEFAULT_CELL_PADDING_INLINE,
    right: paddingInline.right ?? DEFAULT_CELL_PADDING_INLINE,
  };
};

const renderCenteredContainerWithPadding = (
  children: CanvasContent,
  paddingInline: CellPaddingInline = DEFAULT_CELL_PADDING_INLINE,
) => {
  const padding = resolveCellPaddingInline(paddingInline);

  return (
    <Canvas.Container
      style={{ width: '100%' }}
      alignContent="center"
      padding={padding}
    >
      {children}
    </Canvas.Container>
  );
};

const renderCellInWrapper = (
  children: CanvasContent,
  paddingInline: CellPaddingInline = DEFAULT_CELL_PADDING_INLINE,
) => {
  // return createTextCellGlide('LOADING CELL1');
  if (isCanvasString(children)) {
    return createTextCellGlide(children);
  }
  if (isCanvasEl(children)) {
    return renderCenteredContainerWithPadding(children, paddingInline);
  }

  return createTextCellGlide(children ? `${children}` : '');
};

export const RenderCellGlide = <
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown,
>({
  renderCellProps,
  column,
  tableConfigSubRows,
  // currIndex,
  // indexZeroColKey,
  tableConfigRowDetailPanel,
  editModeEnabled,
  keyText,
}: {
  renderCellProps: CellInfoGlideInstance<RowType, SummaryRowType>;
  column: ColumnConfig<RowType, SummaryRowType>;
  tableConfigSubRows: TableConfig<
    RowType,
    SummaryRowType,
    RowIdType,
    FilterStateType
  >[typeof SUBROWS_KEY];

  tableConfigRowDetailPanel: RowDetailConfig<RowType> | undefined;
  // currIndex: number;
  // indexZeroColKey: string | undefined;
  keyText: KeyText;
  editModeEnabled: boolean;
}): CellContent => {
  // const {
  //   row,
  //   tabIndex,
  //   onRowChange,
  //   column: { idx },
  //   rowIdx,
  // } = renderCellProps;
  const {
    row,
    ctxs: { expandedRowsCtx },
    theme,
  } = renderCellProps;
  const {
    expandedRowsIds,
    setExpandedRowsIds,
    handleExpandRowDetail,
    expandButtonColumnKey,
  } = expandedRowsCtx;

  const isSelectColumn =
    editModeEnabled && column?.editingCell?.component === 'select';
  const rowSize = theme.rowSize ?? 'big';
  const cellPaddingInline =
    theme.cellHorizontalPadding ?? DEFAULT_CELL_PADDING_INLINE;
  const selectCellVisual = {
    rowSize,
    cellPaddingInline,
    overlayRightOffset: 0,
  };
  const selectCellVisualInPaddedContainer = {
    ...selectCellVisual,
    overlayRightOffset: cellPaddingInline,
  };
  // Select-trigger должен лежать внутри hit-bounds своего canvas-parent.
  // Поэтому правый padding wrapper-а отдаем overlay, а не выводим chevron за parent.
  const getSelectAwareWrapperPadding = (select: boolean): CellPaddingInline =>
    select ? { left: cellPaddingInline, right: 0 } : cellPaddingInline;
  const getSelectAwareVisual = (select: boolean): typeof selectCellVisual =>
    select ? selectCellVisual : selectCellVisualInPaddedContainer;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((row as any)?.[SKELETON_ROW_KEY]) {
    return (
      <Canvas.Container padding={cellPaddingInline} alignItems="center">
        <Canvas.Skeleton
          roundness={8}
          lighter
          style={{ flexGrow: 1, alignSelf: 'stretch' }}
        />
      </Canvas.Container>
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const skeletonCells = (row as any)?.[SKELETON_CELLS_KEY] as
    | SkeletonCells
    | undefined;

  if (skeletonCells && skeletonCells.has(column.key)) {
    return createTextCellGlide('LOADING CELL');
  }
  if (column.key === CHECKBOX_COLUMN_KEY && column.renderCell) {
    return column.renderCell(renderCellProps);
  }
  if (column.key === ROW_MARKER_COLUMN_KEY && column.renderCell) {
    return column.renderCell(renderCellProps);
  }

  const defaultLvl0RenderElement: CellContent = column.renderCell
    ? column.renderCell(renderCellProps)
    : FormattedContent(row?.[column.key], column.contentFormat);
  const isCustomRenderCell = !!column.renderCell;

  if (isGlideGridCellObj(defaultLvl0RenderElement)) {
    return defaultLvl0RenderElement;
  }

  const effectivePadding = cellPaddingInline;

  const tableConfigSubrowsActivated = !!tableConfigSubRows;
  const tableConfigRowDetailActivated = !!tableConfigRowDetailPanel;

  // ------------------------------- DEFAULT (NO SUBROWS & NO ROWDETAIL) -------------------------------
  if (!tableConfigSubrowsActivated && !tableConfigRowDetailActivated) {
    if (
      isCustomRenderCell &&
      isCanvasEl(defaultLvl0RenderElement) &&
      !isSelectColumn
    ) {
      return defaultLvl0RenderElement;
    }

    return renderCellInWrapper(
      withSelectIcon(defaultLvl0RenderElement, {
        isSelect: isSelectColumn,
        editModeEnabled,
        visual: getSelectAwareVisual(isSelectColumn),
      }),
      getSelectAwareWrapperPadding(isSelectColumn),
    );
  }
  const cellIsHaveDetailExpandButton = () =>
    rowIsHaveDetailPanel(row) && column.key === expandButtonColumnKey;
  // ------------------------------- DEFAULT (NO SUBROWS & HAVE ROWDETAIL) ----------------------------------------------------
  if (!tableConfigSubrowsActivated && tableConfigRowDetailActivated) {
    if (!cellIsHaveDetailExpandButton()) {
      return renderCellInWrapper(
        withSelectIcon(defaultLvl0RenderElement, {
          isSelect: isSelectColumn,
          editModeEnabled,
          visual: getSelectAwareVisual(isSelectColumn),
        }),
        getSelectAwareWrapperPadding(isSelectColumn),
      );
    }
    return renderCenteredContainerWithPadding(
      <>
        {withSelectIcon(defaultLvl0RenderElement, {
          isSelect: isSelectColumn,
          editModeEnabled,
          textInCanvasText: 'textInCanvasText',
          visual: selectCellVisualInPaddedContainer,
        })}
        {ExpandDetailButton({ row, handleExpandRowDetail })}
      </>,
      effectivePadding,
    );
  }
  // ----------------------------------------------------------------------------------------------------------------------------
  const rowExpandId = tableConfigSubRows?.rowKeyGetter?.(row) ?? 'trololo';

  const expanded = !!expandedRowsIds?.has(rowExpandId);
  const toggleExpand = () => {
    setExpandedRowsIds?.((prev) => {
      const copy = new Set(prev);
      if (expanded) {
        copy.delete(rowExpandId);
      } else {
        copy.add(rowExpandId);
      }
      return copy;
    });
    return undefined;
  };

  const { lvl } = getTreeIdAndLvlOfRow(row);
  const columnHasArrow = getHasArrow(column.subRow?.isColumnWithArrow, keyText);
  const columnHasExpandButton = cellIsHaveDetailExpandButton();
  // ------------------------------- LVL 0 RENDER ---------------------------------------
  if (lvl === 0) {
    if (!columnHasArrow && !columnHasExpandButton) {
      return renderCellInWrapper(
        withSelectIcon(defaultLvl0RenderElement, {
          isSelect: isSelectColumn,
          editModeEnabled,
          visual: getSelectAwareVisual(isSelectColumn),
        }),
        getSelectAwareWrapperPadding(isSelectColumn),
      );
    }

    const subRows = tableConfigSubRows?.getSubRows?.(row);

    const hasChildren = tableConfigSubrowsActivated && !!subRows?.length;

    const hasChildrenAndArrow = columnHasArrow && hasChildren;
    const hasExpandDetailButton =
      tableConfigRowDetailActivated && cellIsHaveDetailExpandButton();

    if (!columnHasArrow && !hasExpandDetailButton) {
      return renderCellInWrapper(
        withSelectIcon(defaultLvl0RenderElement, {
          isSelect: isSelectColumn,
          editModeEnabled,
          visual: getSelectAwareVisual(isSelectColumn),
        }),
        getSelectAwareWrapperPadding(isSelectColumn),
      );
    }
    if (!columnHasArrow && hasExpandDetailButton) {
      return renderCenteredContainerWithPadding(
        <>
          {withSelectIcon(defaultLvl0RenderElement, {
            isSelect: isSelectColumn,
            editModeEnabled,
            textInCanvasText: 'textInCanvasText',
            visual: selectCellVisualInPaddedContainer,
          })}
          {ExpandDetailButton({ row, handleExpandRowDetail })}
        </>,
        effectivePadding,
      );
    }

    const treeGap = hasChildrenAndArrow
      ? TREE_BUTTON_CONFIG[theme.rowSize ?? 'big'].gap
      : 8;

    return (
      <Canvas.Container
        direction="row"
        alignItems="center"
        columnGap={treeGap}
        padding={{
          left: getPaddingLeftFinal(
            effectivePadding,
            lvl,
            hasChildrenAndArrow,
            false,
          ),
        }}
      >
        {hasChildrenAndArrow &&
          getTreeButton(expanded, toggleExpand, theme.rowSize)}
        {withSelectIcon(defaultLvl0RenderElement, {
          isSelect: isSelectColumn,
          editModeEnabled,
          textInCanvasText: 'textInCanvasText',
          visual: selectCellVisual,
        })}
        {hasExpandDetailButton &&
          ExpandDetailButton({ row, handleExpandRowDetail })}
      </Canvas.Container>
    );
    // return  createTextCellWithSubRowArrowGlide({
    //   depth: lvl,
    //   text: defaultLvl0RenderElement,
    //   isOpen: expanded,
    //   onClickOpener: toggleExpand,
    // });
  }
  // ------------------------------------------------------------------------------------

  // ------------------------------- SUBROWS RENDER -------------------------------------

  const defaultLvlNot0RenderElement: CellContent = (() => {
    if (column.key === CHECKBOX_COLUMN_KEY && column.renderCell) {
      // return column.renderCell(renderCellProps);
      return 'CHECKBOX CELL';
    }
    if (column.key === ROW_I_COLUMN_KEY && column.renderCell) {
      // return column.renderCell(renderCellProps);
      return 'ROW_I_COLUMN_KEY CELL';
    }
    if (column.key === ROW_MARKER_COLUMN_KEY && column.renderCell) {
      return column.renderCell(renderCellProps);
    }

    if (column.subRow?.renderSubRowCell) {
      // FIXME
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return column.subRow.renderSubRowCell(renderCellProps as any, lvl);
    }

    const getContentFormat = (): ContentFormat | undefined =>
      column.subRow?.contentFormat ?? column.contentFormat;

    if (column.subRow?.parentKeyAsDefault) {
      return FormattedContent(row?.[column.key], getContentFormat());
    }

    if (column.subRow?.keyOfColumnInSubRow) {
      const subKey =
        typeof column.subRow.keyOfColumnInSubRow === 'function'
          ? column.subRow.keyOfColumnInSubRow(lvl)
          : column.subRow.keyOfColumnInSubRow;

      return FormattedContent(row?.[subKey], getContentFormat());
    }
    return '';
    // return 'NOT FOUND in RenderCellGlide';
    // return row?.[column.key];
  })();
  if (!isCanvasContent(defaultLvlNot0RenderElement)) {
    return defaultLvlNot0RenderElement;
  }
  const isSubRowSelectColumn =
    column.subRow?.editingCell?.component === 'select';

  const subRows = tableConfigSubRows?.getSubRows?.(row);

  const hasChildren = tableConfigSubrowsActivated && !!subRows?.length;

  const hasChildrenAndArrow = columnHasArrow && hasChildren;

  if (!columnHasArrow && !columnHasExpandButton) {
    return renderCellInWrapper(
      withSelectIcon(defaultLvlNot0RenderElement, {
        isSelect: isSubRowSelectColumn,
        editModeEnabled,
        visual: getSelectAwareVisual(isSubRowSelectColumn),
      }),
      getSelectAwareWrapperPadding(isSubRowSelectColumn),
    );
  }

  if (!columnHasArrow && columnHasExpandButton) {
    return renderCenteredContainerWithPadding(
      <>
        {withSelectIcon(defaultLvlNot0RenderElement, {
          isSelect: isSubRowSelectColumn,
          editModeEnabled,
          textInCanvasText: 'textInCanvasText',
          visual: selectCellVisualInPaddedContainer,
        })}
        {ExpandDetailButton({ row, handleExpandRowDetail })}
      </>,
      effectivePadding,
    );
  }
  const treeGapSub = hasChildrenAndArrow
    ? TREE_BUTTON_CONFIG[theme.rowSize ?? 'big'].gap
    : 8;

  return (
    <Canvas.Container
      direction="row"
      alignItems="center"
      columnGap={treeGapSub}
      padding={{
        left: getPaddingLeftFinal(
          effectivePadding,
          lvl,
          hasChildrenAndArrow,
          false,
        ),
      }}
    >
      {hasChildrenAndArrow &&
        getTreeButton(expanded, toggleExpand, theme.rowSize)}
      {withSelectIcon(defaultLvlNot0RenderElement, {
        isSelect: isSubRowSelectColumn,
        editModeEnabled,
        textInCanvasText: 'textInCanvasText',
        visual: selectCellVisual,
      })}
      {columnHasExpandButton &&
        ExpandDetailButton({ row, handleExpandRowDetail })}
    </Canvas.Container>
  );
};
