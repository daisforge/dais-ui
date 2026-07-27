/**
 * Пути для импорта типов должны быть относительно текущего файл
 */
import type { ContractQueryParams } from '../TableContract/types.contractQueryParams';
import type {
  ContractColumnConfig,
  ContractResponse,
  ContractTableConfig
} from '../TableContract/types.contractResponse';

export function StoryContractDataMain(
  _p: Pick<ContractResponse['data'], 'main'>
) {
  return null;
}
export function StoryContractComp(_p: ContractResponse) {
  return null;
}
export function StoryContractTableConfigComp(_p: ContractTableConfig) {
  return null;
}

export function StoryContractColumnConfigComp(_p: ContractColumnConfig) {
  return null;
}

type ContractQueryParamsForBackend = {
  [Key in keyof ContractQueryParams]-?: Exclude<
    ContractQueryParams[Key],
    null | undefined
  >;
};
export function StoryContractQueryParamsComp(
  _p: ContractQueryParamsForBackend
) {
  return null;
}

export function StoryContractColumnSortingComp(
  _p: NonNullable<Pick<ContractColumnConfig, 'sortingType'>>
) {
  return null;
}
export function StoryContractSearchingComp(
  _p: ContractTableConfig['searching']
) {
  return null;
}
export function StoryContractColumnSearchingComp(
  _p: ContractColumnConfig['searching']
) {
  return null;
}
export function StoryContractSubRowsComp(_p: ContractTableConfig['subRows']) {
  return null;
}
export function StoryContractColumnSubRowsComp(
  _p: NonNullable<ContractColumnConfig['subRow']>
) {
  return null;
}
export function StoryContractColumnSummaryCellComp(
  _p: NonNullable<ContractColumnConfig['summaryCell']>
) {
  return null;
}
