/* eslint-disable no-redeclare */
import { Box } from '@ui-kit/components/Box';
import { Checkbox } from '@ui-kit/components/Checkbox';
import { EmptyState } from '@ui-kit/components/EmptyState';
import { SIZE, SIZES } from '@ui-kit/components/TableCanvas';
import { IconDone } from '@ui-kit/icons';
import { ReactNode, useMemo, useState } from 'react';

import { useFocusSearchInput } from '../use-focus-search-input';
import { inputStopPropagation } from '../utils';
import {
  StyledList,
  StyledListItem,
  StyledSearchBlockFilter,
  StyledTotalListItemContainer,
} from './styled';

type Single = {
  mode?: 'single';
  value: string;
  onChange: (v: string) => void;
};
type Multiple = {
  mode?: 'multiple';
  value: string[];
  onChange: (v: string[]) => void;
};

function isSingle(
  m: 'single' | 'multiple',
  onChange: ((v: string[]) => void) | ((v: string) => void),
): onChange is (v: string) => void;

function isSingle(
  m: 'single' | 'multiple',
  value: string | string[],
): value is string;
function isSingle(m: 'single' | 'multiple', _valueOrOnChange: unknown) {
  return m === 'single';
}

const getItemIsSelected = (
  o: { text: string; value: string },
  mode: 'multiple' | 'single',
  value: string | string[],
) => {
  if (isSingle(mode, value)) {
    return o.value === value;
  }
  return value.some((selectedV) => selectedV === o.value);
};

export const ComboboxX = ({
  value,
  onChange,
  mode = 'single',
  options,
  tabIndex,
  beforeList,
  size = 'medium',
  listMaxHeight = '360px',
  width,
}: (Single | Multiple) & {
  options: { text: string; value: string }[];
  tabIndex?: number | undefined;
  size?: SIZE;
  beforeList?: ReactNode;
  listMaxHeight?: string;
  width?: string;
}) => {
  const [inputValue, setInputValue] = useState(
    options.find((o) => o.value === value)?.text ?? '',
  );

  // Детерминированный фокус в инпут поиска при открытии поповера (см. хук).
  const searchInputRef = useFocusSearchInput();

  const optionsLabelMap = useMemo(
    () => new Map(options.map((el) => [el.value, el.text])),
    [options],
  );

  const filteredOptions = useMemo(() => {
    if (isSingle(mode, value)) {
      if (inputValue === '' || optionsLabelMap.get(value) === inputValue) {
        return options;
      }
      return options.filter((o) =>
        o.text.toLowerCase().includes(inputValue.toLowerCase()),
      );
    }

    if (inputValue === '') {
      return options;
    }
    return options.filter((o) =>
      o.text.toLowerCase().includes(inputValue.toLowerCase()),
    );
  }, [inputValue, mode, options, optionsLabelMap, value]);

  const checkAllStates = {
    indeterminate: value?.length !== 0 && value?.length !== options.length,
    checked: value?.length !== 0 && value?.length === options.length,
    onChange: () => {},
  };

  return (
    <Box
      $css={{
        width: width ?? 'unset',
      }}
    >
      <StyledSearchBlockFilter
        ref={searchInputRef}
        size={SIZES[size].input as 'xs'}
        autoComplete="off"
        tabIndex={tabIndex}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onKeyDown={inputStopPropagation}
      />
      <StyledList $maxHeight={listMaxHeight}>
        {beforeList}
        {!isSingle(mode, onChange) && filteredOptions.length > 1 && (
          <StyledTotalListItemContainer
            $listIsNonEmpty={!!filteredOptions.length}
            $beforeList={!!beforeList}
          >
            <StyledListItem
              $size={size}
              $selected={checkAllStates.checked}
              onClick={() => {
                setInputValue('');

                if (checkAllStates.checked) {
                  onChange([]);
                  return;
                }
                onChange(options.map((el) => el.value));
              }}
            >
              <Checkbox
                {...checkAllStates}
                size="s"
                style={{
                  pointerEvents: 'none',
                  marginRight: '8px',
                }}
              />
              Выбрать всё
            </StyledListItem>
          </StyledTotalListItemContainer>
        )}
        {filteredOptions.length === 0 ? (
          <EmptyState size="s" variant="not-result" title="Ничего не найдено" />
        ) : (
          filteredOptions.map((o) => {
            const itemIsSelected = getItemIsSelected(o, mode, value);

            const itemOnClick = () => {
              if (isSingle(mode, onChange)) {
                onChange(o.value);
                setInputValue(o.text);
                return;
              }
              if (!isSingle(mode, value)) {
                const selecteds = new Set(value);
                selecteds[selecteds.has(o.value) ? 'delete' : 'add'](o.value);
                onChange([...selecteds]);
              }
            };

            return (
              <StyledListItem
                $size={size}
                $selected={itemIsSelected}
                key={o.value}
                onClick={itemOnClick}
              >
                {mode === 'single' && (
                  <span
                    style={{
                      width: '16px',
                      minWidth: '16px',
                      display: 'inline-flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: '8px',
                      visibility: itemIsSelected ? 'visible' : 'hidden',
                    }}
                  >
                    <IconDone size="s" color="var(--text-accent)" />
                  </span>
                )}
                {mode === 'multiple' && (
                  <Checkbox
                    checked={itemIsSelected}
                    onChange={() => {}}
                    size="s"
                    style={{
                      pointerEvents: 'none',
                      marginRight: '8px',
                    }}
                  />
                )}
                {o.text}
              </StyledListItem>
            );
          })
        )}
      </StyledList>
    </Box>
  );
};
