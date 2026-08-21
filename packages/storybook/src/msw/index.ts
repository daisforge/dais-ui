import { SetupWorker } from 'msw/browser';
import { initialize, mswLoader } from 'msw-storybook-addon';

import * as routes from './routes';

const initialRoutes = Object.values(routes)
  .map((el) => el.route)
  .flat();

/*
 * Initializes MSW
 * See https://github.com/mswjs/msw-storybook-addon#configuring-msw
 * to learn how to customize it
 */
function mswInitialize(): SetupWorker | undefined {
  const impMeta = import.meta as ImportMeta & {
    env?: { BASE_URL: string };
  };
  return initialize(
    {
      serviceWorker: {
        url: `${impMeta.env?.BASE_URL}mockServiceWorker.js`,
      },
    },
    initialRoutes,
  );
}

export { mswInitialize, mswLoader };
