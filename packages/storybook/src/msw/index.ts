import { setupWorker } from 'msw/browser';
import { mswLoader as createMswLoader } from 'msw-storybook-addon/csf3';

import * as routes from './routes';

const initialRoutes = Object.values(routes)
  .map((el) => el.route)
  .flat();

/*
 * Loader, который поднимает MSW с начальными хендлерами.
 * Хендлеры из setupWorker() переживают сброс между историями,
 * а parameters.msw в историях добавляет к ним свои.
 * See https://github.com/mswjs/msw-storybook-addon#custom-worker-setup
 */
const mswLoader = createMswLoader(async () => {
  // ВАЖНО: обращение к `import.meta.env.BASE_URL` должно оставаться литеральным.
  // Vite подставляет base только в точное выражение `import.meta.env.BASE_URL`;
  // если положить `import.meta` в переменную или прочитать через `?.`, замена не
  // сработает, и в собранном чанке останется рантайм-доступ к `import.meta.env`,
  // которого в браузере нет → url воркера схлопнется в '/mockServiceWorker.js'.
  // Локально (base === '/') это незаметно, а на стенде под /<repo>/ MSW падает с
  // «Service Worker script does not exist at the given path».
  const baseUrl = import.meta.env.BASE_URL || '/';

  const worker = setupWorker(...initialRoutes);
  await worker.start({
    serviceWorker: {
      url: `${baseUrl}mockServiceWorker.js`,
    },
  });

  return worker;
});

export { mswLoader };
