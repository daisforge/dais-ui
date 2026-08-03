import { Box } from '@ui-kit/components/Box';
import { IconButton } from '@ui-kit/components/IconButton';
import { Switch } from '@ui-kit/components/Switch';
import { ColumnConfig, ObjectForExtending } from '@ui-kit/components/Table';
import { TypographyWithAutoTooltip } from '@ui-kit/components/Typography';
import { IconPinFill, IconPinListOutline, IconPinOutline } from '@ui-kit/icons';
import { EmptySearchFallback } from '@ui-kit/shared/ui/Search';
import { textSecondary } from '@ui-kit/tokens';
import { useHasScroll } from '@ui-kit/utils/hooks/useHasScroll';
import React, { useMemo, useRef } from 'react';

import { KeyText, KeyTextMap } from '../../feature-key-text/types';
import {
  getKeyTextCorrectedBorderPlacement,
  getKeyTextCorrectedIsOvered,
} from '../../feature-reorder-columns/handlers';
import { isRowInstrumentsColumn } from '../../feature-row-instruments';
import { KEY_GROUPED_COL } from '../../feature-rows-grouping';
import { CHECKBOX_COLUMN_KEY } from '../../feature-select-row';
import { DOM_METADATA_ACTIONS } from '../../types/dom-metadata-actions';
import { DragButton } from '../dnd/DragButton';
import { StyledDragContainer, StyledDragItem } from '../dnd/styled';
import { useDragAndDrop } from '../dnd/useDragAndDrop';
import { useHovering } from '../dnd/useHovering';
import { ColumnsControlConfig } from '../types';
import { correctedDisabled, getColumnLabel } from './handlers';

export const ColumnsList = <Row extends ObjectForExtending, SummaryRow>({
  searchQuery = '',
  columnsOrder,
  onColumnsReorder,
  setPinnedCols,
  setHiddenCols,
  columnConfig,
  columnsControlConfig,
  colsWithKeyTextMap,
  keyText,
  tableConfigKeyTextBoolean,
  disablePinningSet,
  disableHidingSet,
  pinnedColsSet,
  hiddenColsSet,
}: {
  searchQuery: string;
  columnsOrder: string[];
  onColumnsReorder: (sourceKey: string, targetKey: string) => void;

  setPinnedCols: React.Dispatch<React.SetStateAction<string[]>>;

  setHiddenCols: React.Dispatch<React.SetStateAction<string[]>>;
  columnConfig: readonly ColumnConfig<Row, SummaryRow>[];
  columnsControlConfig: ColumnsControlConfig;
  colsWithKeyTextMap: KeyTextMap;
  keyText: KeyText;
  tableConfigKeyTextBoolean: boolean;
  disableHidingSet: Set<string>;
  disablePinningSet: Set<string>;
  pinnedColsSet: Set<string>;
  hiddenColsSet: Set<string>;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const columnsOrderWithoutServiceColumns = useMemo(
    () =>
      columnsOrder.filter(
        (c) =>
          c !== CHECKBOX_COLUMN_KEY &&
          c !== KEY_GROUPED_COL &&
          !isRowInstrumentsColumn(c),
      ),
    [columnsOrder],
  );
  const {
    hoveredId,
    setDroppedAsHovered,
    onDragIconHoverStart,
    onDragIconHoverEnd,
  } = useHovering();

  const {
    draggingId,
    draggingOverId,
    borderPlacement,
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDrop,
  } = useDragAndDrop({
    columnsOrder: columnsOrderWithoutServiceColumns,
    onColumnsReorder,
    setDroppedAsHovered,
  });

  const columnsConfigMap = useMemo(
    () => new Map(columnConfig.map((c) => [c.key, c])),
    [columnConfig],
  );

  const scrollState = useHasScroll(containerRef, 'vertical');
  const hasVerticalScroll =
    typeof scrollState === 'boolean' ? scrollState : scrollState.vertical;

  const reorderingIsActive = !!columnsControlConfig.reorderingAside;
  const pinningIsActive = !!columnsControlConfig.pinning;
  const hidingIsActive = !!columnsControlConfig.hiding;

  const filteredColumns = useMemo(() => {
    if (!searchQuery) return columnsOrderWithoutServiceColumns;

    return columnsOrderWithoutServiceColumns.filter((key) => {
      const isKeyText = colsWithKeyTextMap.get(key);
      const label = getColumnLabel({
        columnsControlConfig,
        columnsConfigMap,
        isHiddenColumn: hiddenColsSet.has(key),
        isPinnedColumn: pinnedColsSet.has(key),
        key,
        isKeyText,
        keyText,
        tableConfigKeyTextBoolean,
      });
      return String(label).toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [
    columnsOrderWithoutServiceColumns,
    searchQuery,
    colsWithKeyTextMap,
    columnsControlConfig,
    columnsConfigMap,
    hiddenColsSet,
    pinnedColsSet,
    keyText,
    tableConfigKeyTextBoolean,
  ]);

  const isEmptySearch = !!(filteredColumns.length === 0 && searchQuery);

  return (
    <StyledDragContainer
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      ref={containerRef}
      $hasScroll={hasVerticalScroll}
      $isEmptySearch={isEmptySearch}
    >
      {isEmptySearch && (
        <EmptySearchFallback icon={<IconPinListOutline size="m" />} />
      )}
      {filteredColumns.map((key) => {
        const isHiddenColumn = hiddenColsSet.has(key);
        const isPinnedColumn = pinnedColsSet.has(key);

        const isDisabledHiding = disableHidingSet.has(key);
        const isDisabledPinning = disablePinningSet.has(key);

        const isKeyText = colsWithKeyTextMap.get(key);

        const label = getColumnLabel({
          columnsControlConfig,
          columnsConfigMap,
          isHiddenColumn,
          isPinnedColumn,
          key,
          isKeyText,
          keyText,
          tableConfigKeyTextBoolean,
        });

        const onClickPinBtn = () => {
          if (!pinningIsActive) {
            return;
          }

          if (isPinnedColumn) {
            setPinnedCols((prev) =>
              prev.filter((colKey) => {
                if (isKeyText) {
                  return (
                    colKey !== isKeyText.keyKey && colKey !== isKeyText.textKey
                  );
                }
                return colKey !== key;
              }),
            );
          } else {
            setPinnedCols((prev) => {
              if (isKeyText) {
                return [...prev, isKeyText.keyKey, isKeyText.textKey];
              }
              return [...prev, key];
            });
          }
        };
        const onChangeHideSwitch = () => {
          if (!hidingIsActive) {
            return;
          }

          if (isHiddenColumn) {
            setHiddenCols((prev) =>
              prev.filter((colKey) => {
                if (isKeyText) {
                  return (
                    colKey !== isKeyText.keyKey && colKey !== isKeyText.textKey
                  );
                }
                return colKey !== key;
              }),
            );
          } else {
            setHiddenCols((prev) => {
              if (isKeyText) {
                return [...prev, isKeyText.keyKey, isKeyText.textKey];
              }
              return [...prev, key];
            });
          }
        };

        const correctedBorderPlacement = getKeyTextCorrectedBorderPlacement({
          keyText,
          colsWithKeyTextMap,
          currentId: key,
          borderPlacement,
          tableConfigKeyTextBoolean,
        });

        const isOvered = draggingOverId === key;

        const correctedIsOvered = getKeyTextCorrectedIsOvered({
          colsWithKeyTextMap,
          draggingId,
          currentId: key,
          currentIsDraggingOver: isOvered,
          tableConfigKeyTextBoolean,
        });

        const correctedIsDisabledHiding = correctedDisabled(disableHidingSet, {
          colsWithKeyTextMap,
          currentKey: key,
          tableConfigKeyTextBoolean,
        });
        const correctedIsDisabledPinning = correctedDisabled(
          disablePinningSet,
          {
            colsWithKeyTextMap,
            currentKey: key,
            tableConfigKeyTextBoolean,
          },
        );

        return (
          <StyledDragItem
            className="drag-item"
            key={key}
            id={key}
            {...(reorderingIsActive && {
              draggable: true,
              onDragStart: handleDragStart,
              onDragEnd: handleDragEnd,
              $isOvered: correctedIsOvered ?? isOvered,
              $borderPlacement: correctedBorderPlacement ?? borderPlacement,
              title: 'Перетащить колонку',
            })}
          >
            {reorderingIsActive && (
              <DragButton
                itemIsDragging={draggingId === key}
                itemIsHovered={hoveredId === key}
                onMouseEnter={() => onDragIconHoverStart(key, draggingId)}
                onMouseLeave={() => onDragIconHoverEnd(key, draggingId)}
              />
            )}
            {pinningIsActive && (
              <IconButton
                disabled={correctedIsDisabledPinning ?? isDisabledPinning}
                id="pin-column-btn"
                title={isPinnedColumn ? 'Открепить' : 'Закрепить'}
                size="s"
                view="clear"
                style={{ flexShrink: 0 }}
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  onClickPinBtn();
                  columnsControlConfig?.pinDomMetadata?.onClick?.(e, {
                    action: isPinnedColumn
                      ? DOM_METADATA_ACTIONS.UNPIN_COLUMN
                      : DOM_METADATA_ACTIONS.PIN_COLUMN,
                    columnKey: key,
                    enabled: !isPinnedColumn,
                  });
                }}
                className={columnsControlConfig?.pinDomMetadata?.className}
                {...columnsControlConfig?.pinDomMetadata?.dataAttributes}
              >
                {isPinnedColumn ? (
                  <IconPinFill color={textSecondary} />
                ) : (
                  <IconPinOutline color={textSecondary} />
                )}
              </IconButton>
            )}
            <Box $css={{ flex: 1, minWidth: 0 }}>
              <TypographyWithAutoTooltip variant="BodyS" tooltipText={label}>
                {label}
              </TypographyWithAutoTooltip>
            </Box>

            {hidingIsActive && (
              <Box
                title={isHiddenColumn ? 'Показать' : 'Скрыть'}
                $css={{ marginLeft: 'auto', flexShrink: 0 }}
                className={columnsControlConfig?.switchDomMetadata?.className}
                {...columnsControlConfig?.switchDomMetadata?.dataAttributes}
              >
                <Switch
                  checked={!isHiddenColumn}
                  disabled={correctedIsDisabledHiding ?? isDisabledHiding}
                  onChange={(e) => {
                    onChangeHideSwitch();
                    columnsControlConfig?.switchDomMetadata?.onClick?.(
                      e as unknown as React.MouseEvent<HTMLElement>,
                      {
                        action: isHiddenColumn
                          ? DOM_METADATA_ACTIONS.SHOW_COLUMN
                          : DOM_METADATA_ACTIONS.HIDE_COLUMN,
                        columnKey: key,
                        enabled: isHiddenColumn,
                      },
                    );
                  }}
                  toggleSize="s"
                />
              </Box>
            )}
          </StyledDragItem>
        );
      })}
    </StyledDragContainer>
  );
};
