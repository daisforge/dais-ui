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
  // ВАЖНО: обращение к `import.meta.env.BASE_URL` должно оставаться литеральным.
  // Vite подставляет base только в точное выражение `import.meta.env.BASE_URL`;
  // если положить `import.meta` в переменную или прочитать через `?.`, замена не
  // сработает, и в собранном чанке останется рантайм-доступ к `import.meta.env`,
  // которого в браузере нет → url воркера схлопнется в '/mockServiceWorker.js'.
  // Локально (base === '/') это незаметно, а на стенде под /<repo>/ MSW падает с
  // «Service Worker script does not exist at the given path».
  const baseUrl = import.meta.env.BASE_URL || '/';

  return initialize(
    {
      serviceWorker: {
        url: `${baseUrl}mockServiceWorker.js`,
      },
    },
    initialRoutes,
  );
}

export { mswInitialize, mswLoader };
