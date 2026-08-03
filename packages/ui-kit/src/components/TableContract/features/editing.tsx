/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ModalDFConfirmationProps } from '@ui-kit/components/ModalDFConfirmation';
import {
  addSkeletonToRow,
  deleteSkeletonFromRow,
} from '@ui-kit/components/Table/feature-infinity-scroll';
import { RowInstrumentsType } from '@ui-kit/components/Table/feature-row-instruments/types';
import type {
  FeatureItem,
  FeatureItemWithCustomIcon,
} from '@ui-kit/components/Table/widgets/control-block/types';
import { IconTrashOutline } from '@ui-kit/icons';
import { useCallback, useEffect, useMemo, useState } from 'react';
import useSWRMutation from 'swr/mutation';

import { EditingApi, ErrorInstance } from '../api';
import { getRowKeyGetter } from '../lib/getRowKeyGetter';
import type {
  ContractTableConfig,
  FetcherFunc,
  InstanceColumnConfig,
  InstanceTableConfig,
  ObjectAny,
  TableContractControlBlockButtonProps,
} from '../types';
import { AddRowsIconButtonWithPopover } from '../ui/AddRowsIconButtonWithPopover';

export const DELETE_MODAL_CONTENT = {
  header: 'Удалить строку?',
  body: 'Если удалить строку, восстановить ее и продолжить с ней работу будет невозможно.',
  mainButton: { view: 'negative', text: 'Удалить' },
  secondaryButton: { view: 'secondary', text: 'Отменить' },
} satisfies ModalDFConfirmationProps['content'];

const defaultModalDeleteState = {
  opened: false,
  mainButtonOnClick: () => {},
  secondaryButtonOnClick: () => {},
};

export type RowInstrProps = Parameters<RowInstrumentsType<ObjectAny>>[0];

export type RowInstrItem = ReturnType<
  RowInstrumentsType<ObjectAny>
>['items'][number];

export type GetDeleteOneRowRowInstrItem = (
  props: RowInstrProps,
) => RowInstrItem;

type EditingReturnType = {
  editing: Pick<InstanceTableConfig, 'editing'> | null;
  saveButton: TableContractControlBlockButtonProps | null;
  createOneRowButton?: FeatureItem;
  getDeleteOneRowRowInstrument?: GetDeleteOneRowRowInstrItem;
  modalDeletePropsState?: typeof defaultModalDeleteState;
};

const NEW_ROW_KEY = 'NEW_ROW_KEY_XXXXXXXXX';

const isNewRow = (r: ObjectAny) => !!r?.[NEW_ROW_KEY];
const clearedRow = (r: ObjectAny) => {
  // 1
  const newRow = deleteSkeletonFromRow(r); // создается копия
  // 2
  delete newRow[NEW_ROW_KEY];

  return newRow;
};

export function useEditing({
  tableConfigBackendSubRows,
  tableConfigBackendEditing,
  tableConfigColumnsConfig,
  setRowsState,
  fetcher,
  onRowMutationError,
}: {
  rowsFromBackend: ObjectAny[];
  tableConfigBackendSubRows: ContractTableConfig['subRows'] | undefined;
  tableConfigBackendEditing: ContractTableConfig['editing'] | undefined;
  tableConfigColumnsConfig: InstanceColumnConfig[] | undefined;
  setRowsState: React.Dispatch<React.SetStateAction<ObjectAny[]>>;
  fetcher: FetcherFunc;
  onRowMutationError: ((error: ErrorInstance) => void) | undefined;
}): EditingReturnType {
  const {
    rowUniqIdKey,
    rowEditable,
    defaultEnabled,
    showToggleEnabledButton,
    saving,
  } = tableConfigBackendEditing ?? {};
  const savingType = saving?.type ?? 'onRowChange';

  const enabled = !!tableConfigBackendEditing;
  const editingModeDefaultActive = !!tableConfigBackendEditing?.defaultEnabled;

  // const [newRows, setNewRows] = useState<ObjectAny[]>([]);
  const [changedRows, _setChangedRows] = useState<ObjectAny[]>([]);
  const [editingModeEnabled, setEditingModeEnabled] = useState(
    !!tableConfigBackendEditing?.defaultEnabled,
  );

  const [modalDeletePropsState, setModalDeletePropsState] = useState(
    defaultModalDeleteState,
  );

  const updateRowInState = useCallback(
    (
      findIndexCb: (row: ObjectAny) => boolean,
      newValueOfRow: ObjectAny | ((prev: ObjectAny) => ObjectAny),
    ) => {
      const getNewV = (prev: ObjectAny) =>
        typeof newValueOfRow === 'function'
          ? (newValueOfRow(prev) as ObjectAny)
          : newValueOfRow;

      setRowsState((prev) => {
        const index = prev.findIndex(findIndexCb);
        if (index === -1) return prev;

        const copy = [...prev];

        const currentV = copy[index]!; // ! - выше проверили по индексу
        const newV = getNewV(currentV);

        copy[index] = newV;

        return copy;
      });
    },
    [setRowsState],
  );

  useEffect(() => {
    setEditingModeEnabled(editingModeDefaultActive);
  }, [editingModeDefaultActive]);

  const subRowsKey = tableConfigBackendSubRows?.subRowsKey;

  const rowEditableString = JSON.stringify(rowEditable);

  const editing = useMemo((): EditingReturnType['editing'] => {
    if (!enabled || !rowUniqIdKey) {
      return null;
    }

    const rowKeyGetter = getRowKeyGetter(rowUniqIdKey);

    return {
      editing: {
        rowKeyGetter,
        ...(rowEditableString && {
          rowEditable(row) {
            const rowEditableObj = JSON.parse(rowEditableString) as NonNullable<
              typeof rowEditable
            >;

            const keyGetter = getRowKeyGetter(rowEditableObj.keyInRow);
            const rowEditableValue = keyGetter(row);
            return rowEditableValue === rowEditableObj.editableValue;
          },
        }),

        async onRowsChange(_, changingInfo) {
          if (savingType === 'onRowChange') {
            const changedObj = changingInfo.rows[0];
            const index = changingInfo.indexes[0];
            if (!changedObj || index === undefined || index === -1) return;

            const newVOfChangedRow = changedObj.after;
            const prevVOfChangedRow = changedObj.before;

            if (isNewRow(newVOfChangedRow)) {
              const everyCellIsFilled = tableConfigColumnsConfig?.every(
                (col) => newVOfChangedRow?.[col.key] !== undefined,
              );

              const findNewRowCb = (r: ObjectAny) =>
                r?.[NEW_ROW_KEY] === newVOfChangedRow?.[NEW_ROW_KEY];

              if (!everyCellIsFilled) {
                updateRowInState(findNewRowCb, newVOfChangedRow);

                return;
              }

              try {
                updateRowInState(findNewRowCb, (prev) =>
                  addSkeletonToRow(prev),
                );

                const dataFromBack = await EditingApi.createOne(
                  clearedRow(newVOfChangedRow),
                  fetcher,
                );

                updateRowInState(findNewRowCb, clearedRow(dataFromBack)); // очищается флаг новой строки и флаг скелетона
              } catch (error) {
                updateRowInState(findNewRowCb, (prev) =>
                  deleteSkeletonFromRow(prev),
                );
                onRowMutationError?.(error as ErrorInstance);
              }

              return;
            }

            const findCb = (r: ObjectAny) =>
              rowKeyGetter(r) === rowKeyGetter(prevVOfChangedRow);

            try {
              updateRowInState(findCb, (prev) => addSkeletonToRow(prev));
              const clearedChangedObj: typeof changedObj = {
                before: clearedRow(prevVOfChangedRow),
                after: clearedRow(newVOfChangedRow),
              };

              const dataFromBack = await EditingApi.updateOne(
                clearedChangedObj,
                fetcher,
              );

              updateRowInState(
                findCb,
                deleteSkeletonFromRow(dataFromBack.after),
              ); // очищается  флаг скелетона
            } catch (error) {
              updateRowInState(findCb, (prev) => deleteSkeletonFromRow(prev));
              onRowMutationError?.(error as ErrorInstance);
            }
          }
          if (savingType === 'onSubmit') {
            // setRowsState(rows);
            // setChangedRows(changingInfo.rows.map((i) => i.after));
          }
        },
        ...(subRowsKey && { subRowsKey }),
        defaultEnabled,
        showToggleEnabledButton,
        async onToggleEnableEditing(editingIsActive) {
          // удаляем из ui незаполненные новые строки
          if (!editingIsActive) {
            setRowsState((prev) => prev.filter((r) => !r[NEW_ROW_KEY]));
          }
          setEditingModeEnabled(editingIsActive);
        },
      },
    };
  }, [
    defaultEnabled,
    enabled,
    fetcher,
    onRowMutationError,
    rowEditableString,
    rowUniqIdKey,
    savingType,
    setRowsState,
    showToggleEnabledButton,
    subRowsKey,
    tableConfigColumnsConfig,
    updateRowInState,
  ]);

  const { isMutating, trigger } = useSWRMutation(
    'saving',
    async () => fetcher({ method: 'PUT', body: JSON.stringify(changedRows) }),
    { onError(_err, _key, _config) {}, onSuccess(_data, _key, _config) {} },
  );

  const saveButton: EditingReturnType['saveButton'] =
    editingModeEnabled && savingType === 'onSubmit'
      ? ({
          text: 'Сохранить',
          isLoading: isMutating,
          disabled: changedRows.length === 0,
          onClick: () => {
            trigger();
          },
        } as TableContractControlBlockButtonProps)
      : null;

  const createOneRowButton: FeatureItemWithCustomIcon = {
    value: 'createOneRow',

    CustomIconRender: () => (
      <AddRowsIconButtonWithPopover
        onSubmit={(count) => {
          if (count > 0) {
            const newRows = Array.from({ length: count }, (_, _index) => {
              const newRow: ObjectAny = { [NEW_ROW_KEY]: crypto.randomUUID() };

              return newRow;
            });
            setRowsState((prev) => [...newRows, ...prev]);
          }
        }}
      />
    ),
  };

  const getDeleteOneRowRowInstrument: GetDeleteOneRowRowInstrItem = ({
    row: rowForDelete,
  }: RowInstrProps) => ({
    value: 'delete',
    label: 'Удалить строку',
    contentLeft: <IconTrashOutline size="xs" color="inherit" />,
    async onItemSelect() {
      const rowKeyGetter = editing?.editing?.rowKeyGetter;
      if (!rowKeyGetter) return;

      const deleteRowFunc = async () => {
        if (isNewRow(rowForDelete)) {
          setRowsState((prev) =>
            prev.filter((r) => r[NEW_ROW_KEY] !== rowForDelete[NEW_ROW_KEY]),
          );
          return;
        }
        const findCb = (r: ObjectAny) =>
          rowKeyGetter(r) === rowKeyGetter(rowForDelete);

        try {
          updateRowInState(findCb, addSkeletonToRow(rowForDelete));
          await EditingApi.deleteOne(rowForDelete, fetcher);
          setRowsState((prev) => prev.filter((r) => !findCb(r)));
        } catch (error) {
          updateRowInState(findCb, deleteSkeletonFromRow(rowForDelete));

          onRowMutationError?.(error as ErrorInstance);
        }
      };

      setModalDeletePropsState({
        opened: true,
        mainButtonOnClick: () => {
          deleteRowFunc();
          setModalDeletePropsState(defaultModalDeleteState);
        },
        secondaryButtonOnClick: () => {
          setModalDeletePropsState(defaultModalDeleteState);
        },
      });
    },
  });

  return {
    editing,
    saveButton,
    ...(editingModeEnabled && {
      createOneRowButton,
      getDeleteOneRowRowInstrument,
    }),
    modalDeletePropsState,
  };
}
