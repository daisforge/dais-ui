import { SegmentProvider } from '@salutejs/sdds-finai';
import { useChangedFormContext } from '@ui-kit/formComponents/utils';
import React from 'react';
import type { FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import { SegmentControlled } from './SegmentControlled';
import type { FormSegmentGroupProps, TGroupPropsForStyled } from './types';
import { toDefaultSelected } from './utils';

export const FormSegmentGroup = <TFieldValues extends FieldValues>(
  props: FormSegmentGroupProps<TFieldValues>,
) => {
  const {
    name,
    options,
    onChange: handleChange,
    singleSelectedRequired,
    selectionMode = 'single',
    // пропсы группы
    view,
    size = 's',
    pilled,
    hasBackground,
    stretch,
    orientation,
    className,
    style,
    // items (сегменты)
    items,
    // label/hint
    label,
    titleCaption,
    hintText,
    hintTrigger,
    hintHasArrow,
    showError = true,
  } = props;

  const formCtx = useChangedFormContext(options);
  const { control, rules, remOptions } = formCtx;

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      {...remOptions}
      render={({
        field: {
          onChange,
          value,
          ref,
          onBlur,
          disabled,
          name: fieldName,
          ...fieldRest
        },
        fieldState: { error },
      }) => {
        const groupProps: TGroupPropsForStyled<TFieldValues> = {
          ...fieldRest,
          name,
          className,
          style,
          disabled,
          size,
          view,
          pilled,
          hasBackground,
          stretch,
          // важно: у SDDS горизонталь — дефолт, поэтому передаём только 'vertical'
          orientation: orientation === 'vertical' ? 'vertical' : undefined,
          $mode: orientation === 'vertical' ? 'column' : 'row',
          ref,
          onBlur,
        };

        // Создаём defaultSelected на основе текущего значения
        const defaultSelected = toDefaultSelected(value);

        return (
          <SegmentProvider
            // Важно! Необходимо сделать для принудительного ререндера в случаях, когда значения компонента будут задаваться программно через form.setValue()
            key={`segment-${name}-${defaultSelected.join('|')}`}
            defaultSelected={defaultSelected}
            singleSelectedRequired={singleSelectedRequired}
            {...fieldRest}
          >
            <SegmentControlled<TFieldValues>
              value={value}
              onRHFChange={(next) => onChange(next)}
              onUserChange={(next) => {
                handleChange?.(next, formCtx);
              }}
              label={label}
              titleCaption={titleCaption}
              hintText={hintText}
              hintTrigger={hintTrigger}
              hintHasArrow={hintHasArrow}
              optionsRequired={options}
              errorMessage={error?.message}
              groupProps={groupProps}
              selectionMode={selectionMode}
              items={items}
              singleSelectedRequired={singleSelectedRequired}
              showError={showError}
            />
          </SegmentProvider>
        );
      }}
    />
  );
};

FormSegmentGroup.displayName = 'FormSegmentGroup';
