import { lazy } from 'react';

export const StoriesViewerLazy = lazy(() =>
  import('./StoriesViewer').then((module) => ({
    default: module.StoriesViewer
  }))
);
