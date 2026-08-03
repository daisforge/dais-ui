import { createContext } from 'react';

import { ClickStream } from './types';

type TClickStreamContext = ClickStream | null;

const CLICK_STREAM_CONTEXT_DEFAULT_VALUES: TClickStreamContext = null;

export const ClickStreamContext = createContext<TClickStreamContext>(
  CLICK_STREAM_CONTEXT_DEFAULT_VALUES,
);
