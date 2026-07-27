import { http, HttpResponse, type JsonBodyType } from 'msw';

type Breakpoints = Record<string, number>;
type GridItemSpec = {
  id: string;
  type: 's' | 'm' | 'l';
};

const DEFAULT_BREAKPOINTS: Breakpoints = {
  lg: 1857,
  md: 1377,
  sm: 1145,
  xs: 913,
  xxs: 0
};

// ——— In-memory состояние ———
const BREAKPOINTS: Breakpoints = { ...DEFAULT_BREAKPOINTS };
let ITEMS: GridItemSpec[] = [
  { id: 'widget1', type: 's' },
  { id: 'widget2', type: 'l' },
  { id: 'widget3', type: 'm' },
  { id: 'widget4', type: 's' },
  { id: 'widget5', type: 's' },
  { id: 'widget6', type: 'm' },
  { id: 'widget7', type: 's' },
  { id: 'widget8', type: 's' },
  { id: 'widget9', type: 'm' },
  { id: 'widget10', type: 'l' }
];

// Утилиты
const json = <T extends JsonBodyType>(data: T) => HttpResponse.json(data);
const BASE = '/api/griddnd';

const routes = [
  // 1) Получить брейкпоинты
  http.get(`${BASE}/breakpoints`, () => json({ breakpoints: BREAKPOINTS })),

  // 2) Получить все items
  http.get(`${BASE}/items`, () => json({ items: ITEMS })),

  // 3) Сохранить все items
  http.put(`${BASE}/items`, async ({ request }) => {
    const body = (await request.json()) as { items?: GridItemSpec[] };
    if (!body?.items) {
      return HttpResponse.json(
        { message: 'items is required' },
        { status: 400 }
      );
    }
    ITEMS = body.items;
    return json({ ok: true });
  })
];

export const gridDndRoutes = {
  ENDPOINTS: {
    GET_BREAKPOINTS: `${BASE}/breakpoints`,
    GET_ITEMS: `${BASE}/items`,
    PUT_ITEMS: `${BASE}/items`
  },

  handlers: routes,
  route: routes
};
