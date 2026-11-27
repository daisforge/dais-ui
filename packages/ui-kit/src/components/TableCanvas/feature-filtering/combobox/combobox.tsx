import { Box } from '@ui-kit/components/Box';
import { Checkbox } from '@ui-kit/components/Checkbox';
import { EmptyState } from '@ui-kit/components/EmptyState';
import { IconDone } from '@ui-kit/icons';
import { textAccent } from '@ui-kit/tokens';
import { ReactNode, useMemo, useState } from 'react';

import { SIZE } from '../../styles';
import { getTableDropdownConfig } from '../../styles/dropdown-sizes';
import {
  FilterControlsContext,
  TableFilterSearch,
  TableFilterSelectAll,
} from './filter-controls';
import { StyledList, StyledListItem } from './styled';

type Single = {
  mode?: 'single';
  value: string;
  onChange: (v: string) => void;
};
type Multiple = {
  mode?: 'multiple';
  value?: string[];
  onChange: (v: string[]) => void;
};

function isSingle(
  m: 'single' | 'multiple',
  onChange: ((v: string[]) => void) | ((v: string) => void),
): onChange is (v: string) => void {
  return m === 'single';
}

export const ComboboxX = ({
  value = [],
  onChange,
  mode = 'single',
  options,
  tabIndex,
  beforeList,
  listControls = 'default',
  afterList,
  size = 'medium',
  listMaxHeight = '360px',
  width,
}: (Single | Multiple) & {
  options: { text: string; value: string }[];
  tabIndex?: number | undefined;
  size?: SIZE;
  beforeList?: ReactNode;
  listControls?: 'default' | 'slots';
  afterList?: ReactNode;
  listMaxHeight?: string;
  width?: string;
}) => {
  const selectedLabel = useMemo(
    () => String(options.find((o) => o.value === value)?.text ?? ''),
    [options, value],
  );
  const [inputValue, setInputValue] = useState(selectedLabel);
  const filteredOptions = useMemo(() => {
    if (!inputValue || (mode === 'single' && inputValue === selectedLabel))
      return options;
    const query = inputValue.toLowerCase();
    return options.filter((o) => String(o.text).toLowerCase().includes(query));
  }, [inputValue, mode, options, selectedLabel]);

  const selected = useMemo(
    () => new Set(Array.isArray(value) ? value : []),
    [value],
  );
  const { checkboxSize, iconSize, iconWidth } = getTableDropdownConfig(size);
  const controls = useMemo(() => {
    const checked =
      options.length > 0 && options.every((o) => selected.has(o.value));
    return {
      size,
      tabIndex,
      inputValue,
      setInputValue,
      checked,
      indeterminate: !checked && options.some((o) => selected.has(o.value)),
      dividerBefore: listControls === 'default' && !!beforeList,
      selectAll:
        !isSingle(mode, onChange) && filteredOptions.length > 1
          ? () => {
              setInputValue('');
              onChange(checked ? [] : options.map((o) => o.value));
            }
          : undefined,
    };
  }, [
    beforeList,
    selected,
    filteredOptions.length,
    inputValue,
    listControls,
    mode,
    onChange,
    options,
    size,
    tabIndex,
  ]);

  return (
    <FilterControlsContext.Provider value={controls}>
      <Box $css={{ width: width ?? 'unset' }}>
        {listControls === 'default' && <TableFilterSearch />}
        {beforeList}
        {listControls === 'default' && <TableFilterSelectAll />}
        <StyledList
          role="listbox"
          aria-label="Варианты фильтра"
          aria-multiselectable={mode === 'multiple'}
          $maxHeight={listMaxHeight}
        >
          {filteredOptions.length === 0 ? (
            <li role="presentation">
              <EmptyState
                size="s"
                variant="not-result"
                title="Ничего не найдено"
              />
            </li>
          ) : (
            filteredOptions.map((o, index) => {
              const itemIsSelected =
                mode === 'single' ? o.value === value : selected.has(o.value);

              const itemOnClick = () => {
                if (isSingle(mode, onChange)) {
                  onChange(o.value);
                  setInputValue(String(o.text));
                  return;
                }
                const next = new Set(selected);
                if (itemIsSelected) next.delete(o.value);
                else next.add(o.value);
                onChange([...next]);
              };

              return (
                <StyledListItem
                  $size={size}
                  $selected={itemIsSelected}
                  key={o.value}
                  role="option"
                  aria-selected={itemIsSelected}
                  tabIndex={index === 0 ? 0 : -1}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      itemOnClick();
                    }
                    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                      event.preventDefault();
                      const adjacent =
                        event.key === 'ArrowDown'
                          ? event.currentTarget.nextElementSibling
                          : event.currentTarget.previousElementSibling;
                      if (adjacent instanceof HTMLElement) adjacent.focus();
                    }
                  }}
                  onClick={itemOnClick}
                >
                  {mode === 'single' && (
                    <span
                      style={{
                        width: iconWidth,
                        minWidth: iconWidth,
                        display: 'inline-flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        visibility: itemIsSelected ? 'visible' : 'hidden',
                      }}
                    >
                      <IconDone size={iconSize} color={textAccent} />
                    </span>
                  )}
                  {mode === 'multiple' && (
                    <Checkbox
                      checked={itemIsSelected}
                      onChange={() => {}}
                      size={checkboxSize}
                      style={{
                        pointerEvents: 'none',
                      }}
                    />
                  )}
                  {o.text}
                </StyledListItem>
              );
            })
          )}
        </StyledList>
        {afterList}
      </Box>
    </FilterControlsContext.Provider>
  );
};
