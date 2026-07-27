import { ModalDFConfirmation } from '@ui-kit/components/ModalDFConfirmation';
import { Table } from '@ui-kit/components/Table';
import type { FeatureItem } from '@ui-kit/components/Table/widgets/control-block/types';
import React, {
  CSSProperties,
  useEffect,
  useId,
  useMemo,
  useReducer,
  useState
} from 'react';
import useSWR from 'swr';

import { DataViewApi, ErrorInstance } from './api';
import { TABLE_STYLES } from './constants';
import { DELETE_MODAL_CONTENT, useEditing } from './features/editing';
import { useFiltering } from './features/filtering';
import { usePagination } from './features/pagination';
import { useSearching } from './features/searching';
import { useSorting } from './features/sorting';
import { useSubRowsConfig } from './features/subRows';
import { paramsReducer } from './params';
import { responseMapper } from './responseMapper';
import { TableOtherView } from './TableOtherView';
import type {
  ContractTableConfig,
  FetcherFunc,
  InstanceTableConfig,
  TableContractControlBlockButtonProps
} from './types';

export const TableContract = ({
  fetcher,
  stylesBeforeLoad,
  onRowMutationError
}: {
  fetcher: FetcherFunc;
  stylesBeforeLoad?: CSSProperties;
  onRowMutationError?: (error: ErrorInstance) => void;
}) => {
  const id = useId();
  const [params, dispatchParams] = useReducer(
    paramsReducer,
    undefined,
    () => new URLSearchParams()
  );

  const paramsString = params.toString();

  // -------------------------------------------- FETCH
  const {
    data: mappedResult,
    isValidating,
    isLoading,
    error
  } = useSWR(
    () => id + paramsString,
    async () => {
      const data = await DataViewApi.get({ params: paramsString }, fetcher);
      return responseMapper(data);
    },
    {
      keepPreviousData: true,
      staleTime: 3000,
      revalidateOnFocus: false
    }
  );

  // const rows
  const [rowsState, setRowsState] = useState<
    NonNullable<typeof mappedResult>['rows']
  >(() => {
    if (!mappedResult?.tableConfigBackend?.editing) {
      return [];
    }
    if (!mappedResult?.rows) {
      return [];
    }
    return mappedResult.rows;
  });
  const tableConfigBackendEditing = !!mappedResult?.tableConfigBackend?.editing;

  useEffect(() => {
    if (!tableConfigBackendEditing) {
      return;
    }
    if (!mappedResult?.rows) {
      return;
    }
    if (mappedResult?.rows) {
      setRowsState(mappedResult.rows);
    }
  }, [mappedResult?.rows, tableConfigBackendEditing]);

  // -------------------------------------------- EDITING

  const {
    editing,
    saveButton,
    createOneRowButton,
    getDeleteOneRowRowInstrument,
    modalDeletePropsState
  } = useEditing({
    tableConfigBackendSubRows: mappedResult?.tableConfigBackend?.subRows,
    tableConfigBackendEditing: mappedResult?.tableConfigBackend?.editing,
    tableConfigColumnsConfig: mappedResult?.columnsConfig,
    setRowsState,
    rowsFromBackend: mappedResult?.rows ?? [],
    fetcher,
    onRowMutationError
  });
  // -------------------------------------------- SEARCHING
  const searchingConfig = useSearching({
    tableConfigBackendSearching: mappedResult?.tableConfigBackend?.searching,
    dispatchParams
  });
  // -------------------------------------------- FILTERING
  const filtering = useFiltering({
    tableConfigBackendFiltering: mappedResult?.tableConfigBackend?.filtering,
    dispatchParams,
    columnsConfig: mappedResult?.columnsConfig
  });

  // -------------------------------------------- PAGINATION
  const paginationConfig = usePagination({
    tableConfigBackendPagination: mappedResult?.tableConfigBackend?.pagination,
    params,
    dispatchParams
  });

  // -------------------------------------------- SORTING
  const sortingConfig = useSorting({
    tableConfigBackendSorting: mappedResult?.tableConfigBackend?.sorting,
    params,
    dispatchParams
  });

  // -------------------------------------------- SUB_ROWS
  const subRowsConfig = useSubRowsConfig(
    mappedResult?.tableConfigBackend?.subRows
  );

  // -------------------------------------------- ROW INSTRUMENTS
  const rowInstruments = useMemo(():
    | InstanceTableConfig['rowInstruments']
    | null => {
    if (!getDeleteOneRowRowInstrument) {
      return null;
    }
    return {
      getRowDropdownConfig: (rowProps) => ({
        items: [getDeleteOneRowRowInstrument(rowProps)],
        dropdownProps: { useItemContentAsButtonContent: true }
      }),
      showInControl: false,
      openedState: [true, () => {}]
    };
  }, [getDeleteOneRowRowInstrument]);

  if (!mappedResult?.rows && isLoading) {
    return <TableOtherView view="loading" style={stylesBeforeLoad} />;
  }

  const stylesFromBackend = mappedResult?.tableConfigBackend?.containerStyle;
  if (!mappedResult?.rows || error) {
    return (
      <TableOtherView
        view="error"
        style={{ ...stylesBeforeLoad, ...stylesFromBackend }}
      />
    );
  }
  if (!mappedResult?.rows) {
    return (
      <TableOtherView
        view="error"
        style={{ ...stylesBeforeLoad, ...stylesFromBackend }}
      />
    );
  }
  const controlBlockRightSideInner: TableContractControlBlockButtonProps[] = [
    ...(saveButton ? [saveButton] : [])
  ];
  const controlBlockCustomFeatures: FeatureItem[] = [
    ...(createOneRowButton ? [createOneRowButton] : [])
  ];

  const isHaveControlBlockCustomFeatures =
    controlBlockCustomFeatures.length > 0;
  const isHaveControlBlockRightSideInner =
    controlBlockRightSideInner.length > 0;

  const isHaveControlBlock =
    isHaveControlBlockRightSideInner || isHaveControlBlockCustomFeatures;

  const {
    rows,
    columnsConfig,
    tableConfigBackend,
    topSummaryRows,
    bottomSummaryRows
  } = mappedResult;

  const mappedContainerStyles = {
    containerStyle: {
      ...tableConfigBackend?.containerStyle,
      height: tableConfigBackend?.height ?? TABLE_STYLES.height
    }
  };

  const mappedFeatures = {
    ...subRowsConfig,
    ...sortingConfig,
    ...paginationConfig,
    ...searchingConfig,
    ...editing,
    ...filtering,
    // styles
    ...mappedContainerStyles
  };
  const restFeatures = (
    tableConfigBackend
      ? Object.fromEntries(
          Object.entries(tableConfigBackend).filter(
            ([key]) => !mappedFeatures[key as keyof typeof mappedFeatures]
          )
        )
      : {}
  ) as Omit<ContractTableConfig, keyof typeof mappedFeatures>;

  return (
    <>
      <Table
        tableConfig={{
          isLoading: {
            boolean: isValidating,
            skeletonRowsCount: rows.length ?? 10
          },
          ...(isHaveControlBlock && {
            controlBlock: {
              enableAdaptiveCompress: false,
              ...(isHaveControlBlockRightSideInner && {
                rightSideInner: controlBlockRightSideInner
              }),
              ...(isHaveControlBlockCustomFeatures && {
                customFeatures: controlBlockCustomFeatures
              })
            }
          }),

          ...(rowInstruments && {
            rowInstruments
          }),
          ...restFeatures,
          ...mappedFeatures
        }}
        columnConfig={columnsConfig}
        rows={editing ? rowsState : rows}
        topSummaryRows={topSummaryRows}
        bottomSummaryRows={bottomSummaryRows}
      />
      <ModalDFConfirmation
        opened={modalDeletePropsState?.opened}
        content={{
          ...DELETE_MODAL_CONTENT,
          mainButton: {
            ...DELETE_MODAL_CONTENT.mainButton,
            onClick: modalDeletePropsState?.mainButtonOnClick
          },
          secondaryButton: {
            ...DELETE_MODAL_CONTENT.secondaryButton,
            onClick: modalDeletePropsState?.secondaryButtonOnClick
          }
        }}
      />
    </>
  );
};
