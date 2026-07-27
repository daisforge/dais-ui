import { FetcherFunc } from '../types';
import { ObjectAny } from '../types.contractResponse';
import { fetcherWrapper } from './fetcherWrapper';
import type { ErrorApi } from './types';

export type ContractCreateOneBody = ObjectAny;
export type ContractCreateOneResponse = ContractCreateOneBody;

export type ContractDeleteOneBody = ObjectAny;
export type ContractDeleteOneResponse = ContractDeleteOneBody;

export type ContractUpdateOneBody = {
  before: ObjectAny;
  after: ObjectAny;
};
export type ContractUpdateOneResponse = ContractUpdateOneBody;

export type ErrorApiUpdateOne = ErrorApi & {
  before: ObjectAny;
};

export class EditingApi {
  static createOne = (
    rowForUpdate: ContractCreateOneBody,
    fetcher: FetcherFunc
  ) =>
    fetcherWrapper<ContractCreateOneResponse>(fetcher, {
      method: 'POST',
      body: JSON.stringify(rowForUpdate)
    });

  static deleteOne = (
    rowForDelete: ContractDeleteOneBody,
    fetcher: FetcherFunc
  ) =>
    fetcherWrapper<ContractDeleteOneResponse>(fetcher, {
      method: 'POST',
      body: JSON.stringify(rowForDelete),
      pathParams: 'delete'
    });

  static updateOne = (payload: ContractUpdateOneBody, fetcher: FetcherFunc) =>
    fetcherWrapper<ContractUpdateOneResponse>(fetcher, {
      method: 'PUT',
      body: JSON.stringify(payload)
    });
}
