import { ContractResponse, FetcherFunc, FetcherProps } from '../types';
import { fetcherWrapper } from './fetcherWrapper';

export class DataViewApi {
  static get = async (fetchProps: FetcherProps, fetcher: FetcherFunc) =>
    fetcherWrapper<ContractResponse>(fetcher, fetchProps);
}
