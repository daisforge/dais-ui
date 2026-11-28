import { http, HttpResponse } from 'msw';

/**
 * Настоящие иллюстрации Empty State на дизайн-страницах.
 *
 * EmptyState берёт иллюстрации по адресу `/pl/static-res/finportal_icons/images/…`.
 * В обычном Storybook по этому адресу ничего нет (картинки отдаются только в сборке
 * для скриншот-тестов), и компонент показывает запасную картинку `no-content` для любого варианта.
 * Здесь запросы к этому адресу перехватываются (MSW уже подключён в Storybook)
 * и получают файлы из `packages/ui-kit/src/images`. Сам компонент не меняется.
 *
 * Подключение: `parameters: { msw: { handlers: emptyStateImageHandlers } }` в метаданных историй.
 */

const files = import.meta.glob(
  '../../../../ui-kit/src/images/{empty-state,error-page}/*.webp',
  { eager: true, query: '?url', import: 'default' },
) as Record<string, string>;

const urlByName: Record<string, string> = {};

Object.entries(files).forEach(([path, url]) => {
  const match = path.match(/images\/([^/]+)\/([^/]+)$/);

  if (match) {
    urlByName[`${match[1]}/${match[2]}`] = url;
  }
});

export const emptyStateImageHandlers = [
  http.get(
    '*/pl/static-res/finportal_icons/images/:folder/:file',
    async ({ params }) => {
      const url = urlByName[`${params.folder}/${params.file}`];

      if (!url) {
        return undefined;
      }

      const response = await fetch(url);

      return new HttpResponse(await response.arrayBuffer(), {
        headers: { 'Content-Type': 'image/webp' },
      });
    },
  ),
];
