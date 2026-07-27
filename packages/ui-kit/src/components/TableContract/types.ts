import type {
  ColumnConfig,
  ControlBlockButtonProps,
  ObjectForExtending,
  SortColumn,
  TableConfig,
  TableProps
} from '@ui-kit/components/Table';

import { PaginationParams } from './types.contractQueryParams';
import { ContractColumnConfig } from './types.contractResponse';

export type * from './types.contractQueryParams';
export type * from './types.contractResponse';

export { ControlBlockButtonProps as TableContractControlBlockButtonProps };

export type InstanceTableProps = TableProps<
  ObjectForExtending,
  string,
  ObjectForExtending,
  ObjectForExtending,
  ObjectForExtending,
  ObjectForExtending
>;
export type InstanceColumnConfig = ColumnConfig<ObjectForExtending> &
  Pick<ContractColumnConfig, 'columnType'>;
export type InstanceTableConfig = TableConfig<
  ObjectForExtending,
  unknown,
  string,
  ObjectForExtending
>;

export type UrlAction =
  | [param: 'sortKey', payload: readonly SortColumn[]]
  | [param: 'pagination', payload: PaginationParams]
  | [param: 'q', payload: string]
  | [param: 'filters', payload: Record<string, string>];

// ------------------------------------------ FETCHER FRONT
export type FetcherProps = {
  /**
   * pathParams - параметры запроса пути 'domain/path/:id-pathParam.
   */
  pathParams?: string;
  /**
   * params - query search параметры запроса, которые будут изменяться самой таблицей в зависимости от того, какие фичи активированы.
   */
  params?: string;
  /**
   * method - метод запроса. Его тип основан на типе HTTP fetch.body.
   * Будет использоваться преимущественно GET.
   * @example GET | POST | PUT | PATCH | DELETE
   */
  method?: RequestInit['method'];
  /**
   * body - передаваемая полезная информация. Его тип основан на типе HTTP fetch.body.
   */
  body?: RequestInit['body'];
};

export type FetcherFunc = (p: FetcherProps) => Promise<Response>;
