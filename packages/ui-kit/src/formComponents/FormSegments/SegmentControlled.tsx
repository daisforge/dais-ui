import { SegmentGroup, SegmentItem, useSegment } from '@salutejs/sdds-finai';
import { BodyXS } from '@ui-kit/components/Typography';
import { getIsRequired } from '@ui-kit/formComponents/utils';
import { getViewColor } from '@ui-kit/utils';
import isEqual from 'lodash.isequal';
import React, { useEffect } from 'react';
import type { FieldValues } from 'react-hook-form';

import { cls, HiddenTextField, SegmentGroupContainer } from './styled';
import type { SegmentControlledProps } from './types';
import { fromArray, removeItemsIfFindCopy, toArray } from './utils';

export function SegmentControlled<TFieldValues extends FieldValues>({
  value,
  onRHFChange,
  onUserChange,
  selectionMode = 'single',
  label,
  titleCaption,
  hintText,
  hintTrigger = 'hover',
  hintHasArrow = true,
  optionsRequired,
  groupProps,
  errorMessage,
  items,
  singleSelectedRequired,
  showError = true,
}: SegmentControlledProps<TFieldValues>) {
  const isMultiple = selectionMode === 'multiple';
  const { selectedSegmentItems } = useSegment();

  // Синхронизация выбранных элементов с формой
  useEffect(() => {
    const currentFormValue = toArray(value, isMultiple);
    const areEqual = isEqual(
      [...currentFormValue].sort(),
      [...selectedSegmentItems].sort(),
    );
    if (!areEqual) {
      // Важно! в mutiple режиме компонент атомарной либы при повторном клике на сегмент просто добавляет как дубликат выбранное значение в массив.
      // Для фикса использую функцию removeItemsIfFindCopy, которая удаляет все элементы из массива, если там были найдены дубликаты, потому что дубликат - сигнификатор того, что на элемент кликнули повторно - следовательно нужно снять выделение.
      const clearedArr = singleSelectedRequired
        ? selectedSegmentItems
        : removeItemsIfFindCopy(selectedSegmentItems);
      const newValue = fromArray(clearedArr, isMultiple);
      onRHFChange(newValue);
      onUserChange?.(newValue);
    }
    // Реагируем только на изменение выбранных элементов
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSegmentItems, singleSelectedRequired]);

  const {
    $mode,
    className,
    style,
    ref,
    name,
    disabled,
    onBlur,
    ...nativeGroupProps
  } = groupProps;

  // Значения для HiddenTextField
  const inputValue = Array.isArray(value)
    ? value.join(', ')
    : String(value ?? '');
  const inputSize = nativeGroupProps.size ?? 's';

  return (
    <SegmentGroupContainer $mode={$mode} className={className} style={style}>
      {(label || titleCaption) && (
        <HiddenTextField
          required={getIsRequired(optionsRequired)}
          label={label}
          value={inputValue}
          hintHasArrow={hintHasArrow}
          hintText={hintText ?? ''}
          hintTrigger={hintTrigger}
          className={cls.hiddenInput}
          titleCaption={titleCaption}
          size={inputSize}
        />
      )}
      {/* Важно! создать скрытый инпут, нужен для базовой валидации RHF */}
      <input
        type="hidden"
        name={name}
        value={String(value)}
        ref={ref}
        disabled={disabled}
        onBlur={onBlur}
      />
      <SegmentGroup {...nativeGroupProps} selectionMode={selectionMode}>
        {items.map((item) => {
          const { value: itemValue, ...itemProps } = item;
          const stringItemValue = String(itemValue);
          // Важно использовать SegmentItem напрямую, не заниматься клонированием React.cloneElement и тп, так как не будут корректно применяться стили к склонированным SegmentItem. Поэтому любые решение с манипуляцией children в рамках данного компонента - обречены на провал.
          return (
            <SegmentItem
              key={stringItemValue}
              value={stringItemValue}
              type="button" // Важно! указать тип, иначе браузер будет считать кнопку по умолчанию submit и тригерить валидацию всей формы перед отправкой
              {...itemProps}
            />
          );
        })}
      </SegmentGroup>
      {showError && errorMessage && (
        <BodyXS color={getViewColor('negative')}>{errorMessage}</BodyXS>
      )}
    </SegmentGroupContainer>
  );
}
