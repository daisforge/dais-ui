/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Box } from '@ui-kit/components/Box';
import { IconClose, IconSearch } from '@ui-kit/icons';
import { textSecondary } from '@ui-kit/tokens/color';
import { mergeClasses, useDebouncedValue } from '@ui-kit/utils';
import { FC, useEffect, useLayoutEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

import {
  useRefTableGlobalContainerContext,
  useSearchContext
} from '../contexts';
import { COLORS, HEIGHT_CONTROL_BLOCK } from '../styles';
import { ActiveViewModsType } from '../types';
import {
  StyledAutocompleteBlock,
  StyledClearBtn,
  StyledSearchBlock
} from './styled';
import type { SearchBlockProps } from './types';

export const SearchBlock: FC<SearchBlockProps> = ({
  isVisible = false,
  size = 's',
  iconSize = 's',
  $isFullHeight = false
}) => {
  const refTableGlobalContainer = useRefTableGlobalContainerContext();
  const context = useSearchContext();

  if (!context) {
    throw new Error('SearchBlock must be used within SearchContextProvider');
  }

  const {
    searchQuery,
    setSearchQuery,
    clearSearch,
    onDebouncedChange,
    onChange,
    debounceDelay,
    isDebounceActive,
    searchClasses,
    placeholder = 'Поиск',
    internalLocalValue: localValue,
    setInternalLocalValue: setLocalValue,
    domMetadata,
    searchOnType,
    autocomplete
  } = context;

  const isManualSearchMode = !searchOnType;

  // Отслеживаем предыдущее значение searchQuery для реакции на внешние изменения
  const prevSearchQueryRef = useRef(searchQuery);
  // Последнее значение, установленное через внешнюю синхронизацию
  const lastExternalValueRef = useRef<string | null>(null);

  const debouncedValue = useDebouncedValue(
    localValue,
    isDebounceActive ? debounceDelay : 0
  );

  // Синхронизация internalLocalValue с searchQuery при изменении извне
  // Важно: используем useLayoutEffect, чтобы синхронизация произошла ДО отрисовки,
  // иначе будет видно промежуточное состояние (searchQuery != localValue)
  useLayoutEffect(() => {
    const prevSearchQuery = prevSearchQueryRef.current;

    // Обновляем ref для следующего рендера
    prevSearchQueryRef.current = searchQuery;

    // Если searchQuery изменился извне И не совпадает с localValue,
    // синхронизируем их (это может быть очистка, установка нового значения и т.д.)
    if (prevSearchQuery !== searchQuery && localValue !== searchQuery) {
      setLocalValue(searchQuery);
      // Сохраняем последнее внешнее значение для защиты от старых debouncedValue
      lastExternalValueRef.current = searchQuery;

      // Немедленно вызываем onDebouncedChange с новым значением,
      // чтобы отменить ожидающий дебаунс со старым значением
      if (!isManualSearchMode && isDebounceActive) {
        onDebouncedChange?.(searchQuery);
      }
    }
  }, [
    searchQuery,
    localValue,
    setLocalValue,
    isManualSearchMode,
    isDebounceActive,
    onDebouncedChange
  ]);

  useEffect(() => {
    // Поиск будет работать при клике на иконку поиска / enter
    if (isManualSearchMode) return;

    if (!isDebounceActive) {
      // Если debounce отключен, сразу обновляем значение
      if (localValue !== searchQuery) {
        onChange?.(localValue);
        setSearchQuery(localValue);
      }
      return;
    }

    // Guard 1: КРИТИЧНО! Если debouncedValue не совпадает с текущим localValue,
    // значит он устарел (была внешняя синхронизация localValue или пользователь продолжил ввод).
    // Игнорируем устаревший debouncedValue.
    if (debouncedValue !== localValue) {
      return;
    }

    // Guard 2: Если есть активная внешняя синхронизация (lastExternalValueRef !== null),
    // игнорируем ВСЕ debouncedValue до тех пор, пока не придет ожидаемое значение.
    // Это предотвращает применение старых значений из очереди дебаунса.
    if (lastExternalValueRef.current !== null) {
      if (debouncedValue === lastExternalValueRef.current) {
        // Пришло ожидаемое значение, сбрасываем защиту
        lastExternalValueRef.current = null;
      } else {
        // Это старое значение из очереди, игнорируем
        return;
      }
    }

    if (debouncedValue !== searchQuery) {
      onDebouncedChange?.(debouncedValue);
      setSearchQuery(debouncedValue);
    }
  }, [
    debouncedValue,
    searchQuery,
    setSearchQuery,
    onDebouncedChange,
    isDebounceActive,
    localValue,
    onChange,
    isManualSearchMode
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setLocalValue(value);

    if (!isManualSearchMode) {
      onChange?.(value);
    }
  };

  const handleClear = () => {
    clearSearch();
    setSearchQuery('');
    onChange?.('');

    // Немедленно вызываем onDebouncedChange с пустой строкой,
    // чтобы отменить ожидающий дебаунс со старым значением
    if (!isManualSearchMode && isDebounceActive) {
      onDebouncedChange?.('');
    }
  };

  const handleSearch = () => {
    if (localValue !== searchQuery) {
      setSearchQuery(localValue);
      onChange?.(localValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() === 'enter') {
      if (isManualSearchMode) {
        handleSearch();
      } else {
        setSearchQuery(localValue);
      }
    }
  };

  const handleSuggestionSelect = (suggestion: { label: string }) => {
    setLocalValue(suggestion.label);
    setSearchQuery(suggestion.label);
    onChange?.(suggestion.label);
    onDebouncedChange?.(suggestion.label);
    autocomplete?.onSuggestionSelect?.(suggestion);
  };

  if (!isVisible) return null;

  if (autocomplete) {
    const { onSuggestionSelect: _, ...autocompleteRest } = autocomplete;

    return (
      <StyledAutocompleteBlock
        placeholder={placeholder}
        value={localValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        contentLeft={
          <span style={{ marginRight: '4px' }}>
            <IconSearch size={iconSize} color={textSecondary} />
          </span>
        }
        onClear={localValue ? handleClear : undefined}
        onSuggestionSelect={handleSuggestionSelect}
        portal={refTableGlobalContainer}
        className={mergeClasses(searchClasses, domMetadata?.className)}
        $isFullHeight={$isFullHeight}
        {...autocompleteRest}
        {...domMetadata?.dataAttributes}
      />
    );
  }

  return (
    <StyledSearchBlock
      placeholder={placeholder}
      size={size}
      value={localValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      contentLeft={
        <span
          style={{
            marginRight: '2px'
          }}
        >
          <IconSearch size={iconSize} />
        </span>
      }
      contentRight={
        localValue ? (
          <StyledClearBtn onClick={handleClear} aria-label="Очистить поиск">
            <IconClose size={iconSize} />
          </StyledClearBtn>
        ) : undefined
      }
      appearance="clear"
      className={mergeClasses(searchClasses, domMetadata?.className)}
      $isFullHeight={$isFullHeight}
      {...domMetadata?.dataAttributes}
    />
  );
};

export const StyledSearchBlockBellow = styled(Box)<{
  $activeView: ActiveViewModsType;
  $isCollapsed: boolean;
}>`
  height: ${HEIGHT_CONTROL_BLOCK}px;
  max-height: ${HEIGHT_CONTROL_BLOCK}px;
  padding-inline: 16px;
  border: 1px solid;
  border-bottom: none;
  transition: max-height 0.1s ease;
  ${({ $activeView, $isCollapsed }) =>
    css({
      ...($activeView === 'rows' && {
        backgroundColor: COLORS.white,
        borderColor: COLORS.border
      }),
      ...($activeView === 'cards' && {
        borderColor: 'transparent'
      }),
      ...($isCollapsed && {
        maxHeight: 0,
        overflow: 'hidden',
        borderTop: 'none',
        transitionDelay: '0.3s'
      })
    })}
`;
