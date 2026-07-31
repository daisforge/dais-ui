import { Combobox } from '@ui-kit/components/Combobox';
import { TextField } from '@ui-kit/components/TextField';
import React from 'react';

import { SIZES } from '../../styles';
import { ColumnConfig, ObjectForExtending } from '../../types';
import type { Option } from '../../types/additional.type';
import { FilterComponentInPopoverProps } from '../header-filter-button/types';
import { CheckBoxAllSelected } from './styled';

export const useFilterRenderer = <
  FilterStateType extends ObjectForExtending,
  R extends ObjectForExtending,
  SR,
>() => {
  const renderFilter = (
    props: FilterComponentInPopoverProps<FilterStateType, ColumnConfig<R, SR>>,
    customRenderFn?: () => React.ReactNode,
    label?: string,
  ): React.ReactNode => {
    const { columnConfig, headerContextState } = props;
    const { filters, setFilters, rowSize } = headerContextState;

    // Если есть кастомный рендер, используем его
    if (customRenderFn) {
      return customRenderFn();
    }

    const columnConfigFiltering = columnConfig.filtering;
    if (!columnConfigFiltering) {
      return null;
    }

    // Кастомный рендер из колонки
    if (columnConfigFiltering.component === 'custom') {
      return columnConfigFiltering.customRender(
        props as FilterComponentInPopoverProps<
          ObjectForExtending,
          ColumnConfig<R, SR>
        >,
      );
    }

    // Рендер инпута
    if (columnConfigFiltering.component === 'input') {
      const valueKeyInFilters = (columnConfigFiltering.keyInFilterState ||
        columnConfig.key) as keyof typeof filters;

      return (
        <TextField
          size={SIZES[rowSize].input}
          // contentLeft={<IconSearch size="xs" color="textSecondary" />}
          autoComplete="off"
          value={filters?.[valueKeyInFilters] as string}
          onChange={(e) => {
            const newValue = e.target.value;
            setFilters?.((prev) => {
              // Не обновляем состояние, если значение не изменилось
              if (prev[valueKeyInFilters] === newValue) return prev;
              return {
                ...prev,
                [valueKeyInFilters]: newValue,
              };
            });
          }}
        />
      );
    }

    // Рендер комбобокса
    if (columnConfigFiltering.component === 'select') {
      const keyInFilterState =
        columnConfigFiltering.keyInFilterState as keyof typeof filters;
      const valueX = filters?.[keyInFilterState] as string | string[];
      const mode = columnConfigFiltering.filter.typeOfValue;

      const options = (() => {
        if (columnConfigFiltering.selectOptions.type === 'constant') {
          return columnConfigFiltering.selectOptions.options;
        }
        const keyInHeaderContext = columnConfigFiltering.selectOptions
          .optionsKeyInHeaderContext as unknown as keyof typeof headerContextState;

        if (keyInHeaderContext in headerContextState) {
          const options = headerContextState?.[keyInHeaderContext] ?? [];
          return options as unknown as Option[];
        }
        return [];
      })();

      // Конвертируем options в формат, ожидаемый Combobox
      const comboboxItems = options.map((option) => ({
        value: String(option.value), // Важно, что value - строка
        label: String(option.text),
      }));

      const BeforeList = columnConfigFiltering?.beforeList ?? (() => undefined);

      // Функция для рендеринга "Выбрать все" в multiple режиме
      const renderSelectAll = () => {
        if (mode !== 'multiple') return null;

        const allSelected =
          Array.isArray(valueX) && valueX.length === comboboxItems.length;

        return (
          <CheckBoxAllSelected
            checked={allSelected}
            indeterminate={
              Array.isArray(valueX) &&
              valueX.length > 0 &&
              valueX.length < comboboxItems.length
            }
            onChange={() => {
              if (allSelected) {
                setFilters?.((prev) => ({
                  ...prev,
                  [keyInFilterState]: [],
                }));
              } else {
                setFilters?.((prev) => ({
                  ...prev,
                  [keyInFilterState]: comboboxItems.map((item) => item.value),
                }));
              }
            }}
            label="Выбрать всё"
            size={SIZES[rowSize].checkboxOfCombobox}
            $rowSize={rowSize}
          />
        );
      };

      return mode === 'multiple' ? (
        <Combobox
          multiple
          size={SIZES[rowSize].input}
          items={comboboxItems}
          value={valueX as string[]}
          onChange={(value: string[]) => {
            setFilters?.((prev) => ({
              ...prev,
              [keyInFilterState]: value,
            }));
          }}
          beforeList={
            <>
              {BeforeList && <BeforeList {...props} />}
              {renderSelectAll()}
            </>
          }
          filter={(item, searchText) =>
            item.label.toLowerCase().includes(searchText.toLowerCase())
          }
          closeAfterSelect={false}
          placeholder={`Выберите ${label ?? 'значение'}`}
          listMaxHeight={columnConfigFiltering.listMaxHeight ?? '360px'}
        />
      ) : (
        <Combobox
          size={SIZES[rowSize].input}
          items={comboboxItems}
          value={valueX as string}
          onChange={(value: string) => {
            setFilters?.((prev) => ({
              ...prev,
              [keyInFilterState]: value,
            }));
          }}
          beforeList={
            <>
              {BeforeList && <BeforeList {...props} />}
              {renderSelectAll()}
            </>
          }
          filter={(item, searchText) =>
            item.label.toLowerCase().includes(searchText.toLowerCase())
          }
          closeAfterSelect
          placeholder={`Выберите ${label ?? 'значение'}`}
          listMaxHeight={columnConfigFiltering.listMaxHeight ?? '360px'}
        />
      );
    }

    return null;
  };

  return { renderFilter };
};
