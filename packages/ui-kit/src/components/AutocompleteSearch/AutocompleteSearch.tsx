import { EmptyState } from '@ui-kit/components/EmptyState';
import { IconSearch } from '@ui-kit/icons';
import {
  shadowDownSoftS,
  surfaceSolidCard,
  textSecondary
} from '@ui-kit/tokens';
import { useRef } from 'react';

import {
  StyledAutocomplete,
  StyledBeforeList
} from './AutocompleteSearch.styled';
import { AutocompleteSearchProps } from './AutocompleteSearch.types';

export const AutocompleteSearch = ({
  placeholder = 'Поиск',
  size = 's',
  value,
  onChange,
  handlerClear,
  onClear,
  disabled,
  readOnly,
  beforeListTotal,
  beforeListTotalEntity,
  ...restProps
}: AutocompleteSearchProps) => {
  const countRef = useRef(0);

  return (
    <StyledAutocomplete
      value={value}
      placeholder={placeholder}
      size={size}
      view="default"
      onChange={onChange}
      disabled={disabled}
      readOnly={readOnly}
      beforeList={
        (typeof beforeListTotal === 'number' || beforeListTotal) &&
        countRef.current && (
          <StyledBeforeList variant="BodyS">
            Найдено{beforeListTotalEntity ? ` ${beforeListTotalEntity}` : ''}:{' '}
            {typeof beforeListTotal === 'number'
              ? beforeListTotal
              : countRef.current}
          </StyledBeforeList>
        )
      }
      renderList={(list) => {
        countRef.current = list?.length ?? 0;
        return !list?.length ? (
          <EmptyState
            size="s"
            title="Ничего не нашлось"
            variant="not-result"
            $css={{
              background: surfaceSolidCard,
              borderRadius: '10px',
              boxShadow: shadowDownSoftS,
              padding: '16px 0'
            }}
          />
        ) : undefined;
      }}
      contentLeft={<IconSearch color={textSecondary} size={size} />}
      onClear={onClear ?? handlerClear}
      {...restProps}
    />
  );
};
