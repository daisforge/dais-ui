import { Checkbox } from '@ui-kit/components/Checkbox';
import { createContext, type FC, useContext, useId } from 'react';

import type { SIZE } from '../../styles';
import { getTableDropdownConfig } from '../../styles/dropdown-sizes';
import { useFocusSearchInput } from '../use-focus-search-input';
import { inputStopPropagation } from '../utils';
import {
  SelectAllLabel,
  StyledListItem,
  StyledSearchBlockFilter,
  StyledTotalListItemContainer,
} from './styled';

// Слот также вызывается сайдбаром, у которого собственный поиск и выбор.
export const FilterControlsContext = createContext<{
  size: SIZE;
  tabIndex?: number;
  inputValue: string;
  setInputValue: (value: string) => void;
  checked: boolean;
  indeterminate: boolean;
  dividerBefore: boolean;
  selectAll?: () => void;
} | null>(null);

function SearchInput({
  size,
  tabIndex,
  value,
  onChange,
}: {
  size: 'xs' | 's';
  tabIndex?: number;
  value: string;
  onChange: (value: string) => void;
}) {
  const ref = useFocusSearchInput();
  return (
    <StyledSearchBlockFilter
      data-table-filter-search
      ref={ref}
      size={size}
      autoComplete="off"
      tabIndex={tabIndex}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      onClick={(event) => event.stopPropagation()}
      onKeyDown={inputStopPropagation}
    />
  );
}

/** Поле поиска по вариантам фильтра заголовка TableCanvas. */
export const TableFilterSearch: FC = () => {
  const controls = useContext(FilterControlsContext);
  if (!controls) return null;
  const { size, tabIndex, inputValue, setInputValue } = controls;
  return (
    <SearchInput
      size={getTableDropdownConfig(size).searchSize}
      tabIndex={tabIndex}
      value={inputValue}
      onChange={setInputValue}
    />
  );
};

/** Массовый выбор всех исходных вариантов множественного фильтра TableCanvas. */
export const TableFilterSelectAll: FC = () => {
  const controls = useContext(FilterControlsContext);
  const id = useId();
  if (!controls?.selectAll) return null;
  const { checked, indeterminate, size, selectAll, dividerBefore } = controls;
  return (
    <StyledTotalListItemContainer $listIsNonEmpty $beforeList={dividerBefore}>
      <StyledListItem as="div" $size={size} $selected={checked}>
        <Checkbox
          id={id}
          focused
          aria-label="Выбрать всё"
          checked={checked}
          indeterminate={indeterminate}
          size={getTableDropdownConfig(size).checkboxSize}
          onChange={selectAll}
        />
        <SelectAllLabel htmlFor={id}>Выбрать всё</SelectAllLabel>
      </StyledListItem>
    </StyledTotalListItemContainer>
  );
};
