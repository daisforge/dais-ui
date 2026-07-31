import { lazy } from 'react';

export const ControlBlockLazy = lazy(() =>
  import('./ControlBlock').then((module) => ({
    default: module.ControlBlock,
  })),
);
