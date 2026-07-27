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
function mswInitialize() {
  return initialize(undefined, initialRoutes);
}

export { mswInitialize, mswLoader };
