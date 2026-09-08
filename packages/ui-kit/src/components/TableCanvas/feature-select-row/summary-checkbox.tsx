import { Box } from '@ui-kit/components/Box';
import { Checkbox } from '@ui-kit/components/Checkbox';
import { Collapse } from '@ui-kit/components/Collapse';
import { Divider } from '@ui-kit/components/Divider';
import { Typography } from '@ui-kit/components/Typography';
import { useBreakpoint } from '@ui-kit/utils';
import { MutableRefObject } from 'react';

import { AnimatedCounter } from '../components/AnimatedCounter';
import {
  Canvas,
  CanvasEl,
  HeaderCellInfoGlideInstance,
} from '../TableGlideInstance';
import { ObjectForExtending } from '../types';
import { getCheckboxMetricsByTheme } from './checkbox-metrics';
import { useSelectingRowContext } from './selecting-contexts';
import { ChildrenInfo } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const renderSummaryCheckbox = ({
  ctxs,
  theme,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
HeaderCellInfoGlideInstance<any, unknown>): CanvasEl => {
  const {
    rows,
    flattenedRowsArrAndMap,
    selectingRowConfig,
    selectedRows,
    setSelectedRows,
    rowKeyGetter,
  } = ctxs.selectingRowCtx;

  const {
    selectingRowsIsActive,
    selectingRules,
    summaryChecked,
    summaryCheckedUncontrolled,
    rowCheckboxDisabled = () => false,
    rowShowCheckbox = () => true,
    disableSummaryCheckboxInHeader,
    hideSummaryCheckboxInHeader,
  } = selectingRowConfig;

  const callbackOnChange = summaryCheckedUncontrolled?.onChange;

  if (!selectingRowsIsActive || !rowKeyGetter || !selectedRows) {
    return <Canvas.Container />;
  }
  if (hideSummaryCheckboxInHeader) {
    return <Canvas.Container />;
  }

  const { levels = 1 } = selectingRules ?? {};
  const { flattenedRows } = flattenedRowsArrAndMap ?? {};

  // default checking
  const { allRowsOnLevel, checkedAll: defaultCheckedAll } = (() => {
    let allRowsOnLevel: NonNullable<typeof flattenedRows> = [];

    if (!flattenedRows || !selectedRows) {
      return { checkedAll: false, allRowsOnLevel };
    }
    if (levels === 1) {
      allRowsOnLevel = rows;
      return {
        checkedAll:
          allRowsOnLevel.length > 0 &&
          selectedRows.size === allRowsOnLevel.length,
        allRowsOnLevel,
      };
    }

    if (levels === 'all') {
      allRowsOnLevel = flattenedRows;
      return {
        checkedAll:
          allRowsOnLevel.length > 0 &&
          selectedRows.size === allRowsOnLevel.length,
        allRowsOnLevel,
      };
    }

    allRowsOnLevel = flattenedRows.filter((r) => {
      if (typeof levels === 'number') {
        const customLevel = levels;

        return (r.level ?? 1) === (customLevel ?? 1);
      }
      if (typeof levels === 'function') {
        return levels(r.level ?? 1);
      }
      return levels.some((num) => num === (r.level ?? 1));
    });

    return {
      checkedAll:
        allRowsOnLevel.length > 0 &&
        allRowsOnLevel.length === selectedRows.size,
      allRowsOnLevel,
    };
  })();

  const getAllRowsInfo = () => {
    const info: ChildrenInfo<ObjectForExtending, string | number> = {
      all: allRowsOnLevel,
      disabled: [],
      notDisabled: [],
      notDisabledAndNotHidden: [],
      notDisabledAndNotHiddenAreSelected: false,
      hidden: [],
      notHidden: [],
      selected: [],
      notSelected: [],
      someChildrenIsSelected: false,
    };

    // находясь на каждой строке  проверяем и обновляем info
    allRowsOnLevel.forEach(({ level, parent, ...row }) => {
      const rowKey = rowKeyGetter(row);

      const isSelected = selectedRows.has(rowKey);
      info[isSelected ? 'selected' : 'notSelected'].push(rowKey);

      const isShowed = rowShowCheckbox?.(row, level, parent) ?? true;
      info[isShowed ? 'notHidden' : 'hidden'].push(rowKey);

      const isDisabled = rowCheckboxDisabled?.(row, level, parent) ?? false;
      info[isDisabled ? 'disabled' : 'notDisabled'].push(rowKey);

      if (isShowed && !isDisabled) {
        info.notDisabledAndNotHidden.push(rowKey);

        if (info.notDisabledAndNotHidden.length === 1 && isSelected) {
          info.notDisabledAndNotHiddenAreSelected = true;
        }

        if (!isSelected) {
          info.notDisabledAndNotHiddenAreSelected = false;
        }
      }
    });

    if (info.selected.length) {
      info.someChildrenIsSelected = true;
    }

    return info;
  };

  const getSummaryCheckedFuncDefaultProps = () => ({
    rows,
    flattenedRows: flattenedRows ?? [],
    selectedRowsIds: selectedRows ?? new Set(),
    rowKeyGetter,
    getAllRowsInfo,
    rowCheckboxDisabled,
    rowShowCheckbox,

    allRowsInLevels: allRowsOnLevel,
  });

  const checkedAll = (() => {
    if (typeof summaryChecked !== 'undefined') {
      let checkedAll = false;
      if (typeof summaryChecked.checked === 'boolean') {
        checkedAll = summaryChecked.checked;
      } else {
        checkedAll = summaryChecked.checked(
          getSummaryCheckedFuncDefaultProps(),
        );
      }

      return checkedAll;
    }

    return defaultCheckedAll;
  })();
  const indeterminate = (() => {
    if (summaryChecked) {
      if (typeof summaryChecked.indeterminate === 'boolean') {
        return summaryChecked.indeterminate;
      }
      return summaryChecked.indeterminate({
        checkedAll,
        ...getSummaryCheckedFuncDefaultProps(),
      });
    }
    return selectedRows && selectedRows.size !== 0 && !checkedAll;
  })();

  const { checkboxSize } = getCheckboxMetricsByTheme(theme);
  const checkboxElement = (
    <Canvas.Checkbox
      checked={checkedAll}
      disabled={disableSummaryCheckboxInHeader}
      indeterminate={indeterminate}
      size={checkboxSize}
    />
  );
  const handleToggle = () => {
    callbackOnChange?.({
      target: { value: !checkedAll },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);

    if (summaryChecked) {
      summaryChecked.onChange({
        ...getSummaryCheckedFuncDefaultProps(),
        checkedAll,
        setSelectedRowsIds: setSelectedRows ?? (() => {}),
      });
      return;
    }

    if (!setSelectedRows || !rowKeyGetter) {
      return;
    }
    if (checkedAll) {
      setSelectedRows(new Set());
      return;
    }
    setSelectedRows(new Set(allRowsOnLevel.map((row) => rowKeyGetter(row))));
  };

  // Слитая (многоуровневая) шапка: чекбокс центрируем в ПОСЛЕДНЕМ (листовом) уровне —
  // нижней полосе высотой headerHeight, а не по центру всей высоты шапки. Позиция берётся
  // из этой же Canvas-раскладки, поэтому клик (хит-тест по раскладке) едет вместе с отрисовкой.
  const { headerHeight, groupHeaderLevels } = ctxs;
  const pinToLastLevel = groupHeaderLevels > 0;

  return (
    <Canvas.Container
      direction="column"
      style={{ width: '100%', height: '100%' }}
      justifyContent={pinToLastLevel ? 'flex-end' : 'center'}
      alignItems="center"
    >
      <Canvas.Container
        style={{
          width: '100%',
          height: pinToLastLevel ? headerHeight : '100%',
          cursor: 'pointer',
        }}
        justifyContent="center"
        alignItems="center"
        onClick={handleToggle}
      >
        {checkboxElement}
      </Canvas.Container>
    </Canvas.Container>
  );
};

export const SummaryCheckbox = ({
  isHaveRightDivider,
  hideCheckbox = false,
  renderOnlyCheckbox = false,
  onChangeHandlerRef,
}: {
  isHaveRightDivider: boolean;
  hideCheckbox?: boolean;
  renderOnlyCheckbox?: boolean;
  onChangeHandlerRef?: MutableRefObject<
    (arg: { clearButtonClicked: true; checkedAll: true }) => void
  >;
}) => {
  const { down } = useBreakpoint();
  const isCompact = down('xl');
  const labelVariant = isCompact ? 'BodyXS' : 'BodyS';
  const {
    rows,
    flattenedRowsArrAndMap,
    selectingRowConfig,
    selectedRows,
    setSelectedRows,
    rowKeyGetter,
    isSelectingRowLabelVisible,
    isSelectingRowCounterVisible,
    controlBlock,
  } = useSelectingRowContext();

  const {
    selectingRowsIsActive,
    selectingRules,
    summaryChecked,
    summaryCheckedUncontrolled,
    rowCheckboxDisabled = () => false,
    rowShowCheckbox = () => true,
    hideSummaryCheckboxInHeader,
  } = selectingRowConfig;

  const callbackOnChange = summaryCheckedUncontrolled?.onChange;

  if (!selectingRowsIsActive || !rowKeyGetter || !selectedRows) {
    return null;
  }

  if (renderOnlyCheckbox && hideSummaryCheckboxInHeader) {
    return null;
  }

  // hideSummaryCheckbox применяется только для основного компонента, не для renderOnlyCheckbox
  if (!renderOnlyCheckbox && selectingRowConfig?.hideSummaryCheckbox) {
    return null;
  }

  const { levels = 1 } = selectingRules ?? {};
  const { flattenedRows } = flattenedRowsArrAndMap ?? {};

  // default checking
  const { allRowsOnLevel, checkedAll: defaultCheckedAll } = (() => {
    let allRowsOnLevel: NonNullable<typeof flattenedRows> = [];

    if (!flattenedRows || !selectedRows) {
      return { checkedAll: false, allRowsOnLevel };
    }
    if (levels === 1) {
      allRowsOnLevel = rows;
      return {
        checkedAll:
          allRowsOnLevel.length > 0 &&
          selectedRows.size === allRowsOnLevel.length,
        allRowsOnLevel,
      };
    }

    if (levels === 'all') {
      allRowsOnLevel = flattenedRows;
      return {
        checkedAll:
          allRowsOnLevel.length > 0 &&
          selectedRows.size === allRowsOnLevel.length,
        allRowsOnLevel,
      };
    }

    allRowsOnLevel = flattenedRows.filter((r) => {
      if (typeof levels === 'number') {
        const customLevel = levels;

        return (r.level ?? 1) === (customLevel ?? 1);
      }
      if (typeof levels === 'function') {
        return levels(r.level ?? 1);
      }
      return levels.some((num) => num === (r.level ?? 1));
    });

    return {
      checkedAll:
        allRowsOnLevel.length > 0 &&
        allRowsOnLevel.length === selectedRows.size,
      allRowsOnLevel,
    };
  })();

  const getAllRowsInfo = () => {
    const info: ChildrenInfo<ObjectForExtending, string | number> = {
      all: allRowsOnLevel,
      disabled: [],
      notDisabled: [],
      notDisabledAndNotHidden: [],
      notDisabledAndNotHiddenAreSelected: false,
      hidden: [],
      notHidden: [],
      selected: [],
      notSelected: [],
      someChildrenIsSelected: false,
    };

    // находясь на каждой строке  проверяем и обновляем info
    allRowsOnLevel.forEach(({ level, parent, ...row }) => {
      const rowKey = rowKeyGetter(row);

      const isSelected = selectedRows.has(rowKey);
      info[isSelected ? 'selected' : 'notSelected'].push(rowKey);

      const isShowed = rowShowCheckbox?.(row, level, parent) ?? true;
      info[isShowed ? 'notHidden' : 'hidden'].push(rowKey);

      const isDisabled = rowCheckboxDisabled?.(row, level, parent) ?? false;
      info[isDisabled ? 'disabled' : 'notDisabled'].push(rowKey);

      if (isShowed && !isDisabled) {
        info.notDisabledAndNotHidden.push(rowKey);

        if (info.notDisabledAndNotHidden.length === 1 && isSelected) {
          info.notDisabledAndNotHiddenAreSelected = true;
        }

        if (!isSelected) {
          info.notDisabledAndNotHiddenAreSelected = false;
        }
      }
    });

    if (info.selected.length) {
      info.someChildrenIsSelected = true;
    }

    return info;
  };

  const getSummaryCheckedFuncDefaultProps = () => ({
    rows,
    flattenedRows: flattenedRows ?? [],
    selectedRowsIds: selectedRows ?? new Set(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setSelectedRowsIds: setSelectedRows ?? ((() => {}) as any),
    rowKeyGetter,
    rowCheckboxDisabled,
    rowShowCheckbox,
    allRowsInLevels: allRowsOnLevel,
    getAllRowsInfo,
  });

  const checkedAll = (() => {
    if (typeof summaryChecked !== 'undefined') {
      let checkedAll = false;
      if (typeof summaryChecked.checked === 'boolean') {
        checkedAll = summaryChecked.checked;
      } else {
        checkedAll = summaryChecked.checked(
          getSummaryCheckedFuncDefaultProps(),
        );
      }

      return checkedAll;
    }

    return defaultCheckedAll;
  })();

  const indeterminate = (() => {
    if (summaryChecked) {
      if (typeof summaryChecked.indeterminate === 'boolean') {
        return summaryChecked.indeterminate;
      }
      return summaryChecked.indeterminate({
        checkedAll,
        ...getSummaryCheckedFuncDefaultProps(),
      });
    }
    return selectedRows && selectedRows.size !== 0 && !checkedAll;
  })();

  const { isHaveCounter, count } = (() => {
    if (summaryChecked) {
      const count = summaryChecked.getCountOfChecked(
        getSummaryCheckedFuncDefaultProps(),
      );
      return { isHaveCounter: count > 0, count };
    }
    const count =
      (selectedRows &&
        typeof selectedRows.size === 'number' &&
        selectedRows.size) ||
      0;
    return { isHaveCounter: count > 0, count };
  })();

  const sizeOnOpen = (() => {
    if (!selectedRows || selectedRows.size === 0) return '0px';

    const symbolsCount = selectedRows.size.toString().length;
    // Средняя ширина одного символа шрифта body-xxs (Counter xs)
    const sizeOfSymbol = 6.1;
    // Горизонтальный padding Counter xs: 0.25rem * 2 = 4px * 2 ≈ 7.1px
    const sizeOfCounterWithoutSymbols = 7.1;
    // Counter xs при одной цифре становится квадратным (width = height = 16px),
    // поэтому минимальная ширина — 16px
    return `${
      Math.max(16, sizeOfCounterWithoutSymbols + symbolsCount * sizeOfSymbol) +
      4
    }px`;
  })();

  type OnChangeProps = Partial<
    Parameters<NonNullable<typeof summaryChecked>['onChange']>[0]
  >;

  const changeHandler = (onChangeProps?: OnChangeProps) => {
    if (summaryChecked) {
      summaryChecked.onChange({
        ...getSummaryCheckedFuncDefaultProps(),
        checkedAll,
        setSelectedRowsIds: setSelectedRows ?? (() => {}),
        ...onChangeProps,
      });
      return;
    }

    if (!setSelectedRows || !rowKeyGetter) {
      return;
    }
    if (checkedAll || onChangeProps?.clearButtonClicked) {
      setSelectedRows(new Set());
      return;
    }
    setSelectedRows(new Set(allRowsOnLevel.map((row) => rowKeyGetter(row))));
  };

  if (onChangeHandlerRef?.current) {
    onChangeHandlerRef.current = changeHandler;
  }

  const checkboxElement = (
    <Checkbox
      checked={checkedAll}
      indeterminate={indeterminate}
      onChange={(event) => {
        callbackOnChange?.(event);

        changeHandler();
      }}
      label={!renderOnlyCheckbox && isSelectingRowLabelVisible && 'Выбрано'}
    />
  );

  // Если нужно вернуть только чекбокс (для CheckboxHeaderCell)
  if (renderOnlyCheckbox) {
    return checkboxElement;
  }

  return (
    <Box
      $css={{
        display: 'flex',
        alignItems: 'center',
        '& .divider': {
          paddingLeft: '1px',
          marginLeft: '16px',
        },
      }}
      className={controlBlock?.domMetadata?.className}
      {...controlBlock?.domMetadata?.dataAttributes}
    >
      {!hideCheckbox && checkboxElement}
      {hideCheckbox && isSelectingRowLabelVisible && (
        <Typography variant={labelVariant}>Выбрано</Typography>
      )}
      <Collapse
        duration={0.3}
        orientation="horizontal"
        isOpen={isHaveCounter && isSelectingRowCounterVisible}
        sizeOnOpen={sizeOnOpen}
        unMountOnClose
        extContainerCss={{
          overflow: 'visible',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
        intContainerCss={{
          always: {
            opacity: '0',
            transition: '.3s ease',
          },
          onOpen: {
            opacity: 1,
          },
        }}
      >
        {isHaveCounter && isSelectingRowCounterVisible && (
          <AnimatedCounter
            className="counter"
            key={count}
            view="accent"
            size="xs"
            count={count}
            style={{
              marginBottom: '3px',
            }}
          />
        )}
      </Collapse>
      {isHaveRightDivider && (
        <Divider className="divider" orientation="vertical" length="16px" />
      )}
    </Box>
  );
};
