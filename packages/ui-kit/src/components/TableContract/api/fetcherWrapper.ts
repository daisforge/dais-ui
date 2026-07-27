/* eslint-disable @typescript-eslint/no-explicit-any */

import { FetcherFunc, FetcherProps } from '../types';
import { ErrorApi } from './types';

export interface ErrorInstance<I = ErrorApi> extends Error {
  info?: I;
  status?: number;
}

export const fetcherWrapper = async <
  RespType = unknown,
  ErrorInfo extends ErrorApi = ErrorApi
>(
  fetcher: FetcherFunc,
  fetcherProps: FetcherProps
) => {
  const res = await fetcher(fetcherProps);

  if (!res.ok) {
    const error: ErrorInstance<ErrorInfo> = new Error();

    const infoFromBody = await res.json();

    error.status = res.status;
    error.info = infoFromBody;
    error.message = `An error occurred while fetching the data.

    ${JSON.stringify(infoFromBody, undefined, 2)}`;

    throw error;
  }

  return res.json() as RespType;
};
