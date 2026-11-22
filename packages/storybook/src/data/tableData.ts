/* eslint-disable @typescript-eslint/no-non-null-assertion */

// Детерминированный генератор случайных чисел
// Даёт одинаковые "случайные" числа при каждом запуске
export function createSeededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };
}

export const FIXED_DATE_TIMESTAMP = new Date('2026-01-15').getTime();

export interface Row {
  id: number | string;
  task: string;
  priority: string;
  issueType: string;
  developer: string;
  complete: number;
  done: boolean;
  inspiredDay: number;
  tr: string;
  loremIpsum: string;
  subRows?: Row[];
}

const LOREM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat elit non metus viverra viverra. Aliquam at efficitur odio. Ut tincidunt sapien vestibulum, luctus purus et, blandit leo. Sed ut felis ut nunc vehicula maximus et et turpis. Mauris nec enim libero. Vestibulum interdum condimentum placerat. Etiam dapibus diam in quam volutpat, ut sollicitudin purus vestibulum. Nam maximus elit quis lorem placerat imperdiet. In volutpat quis magna eget maximus. Integer aliquam, eros sit amet iaculis eleifend, nibh dui sagittis lectus, vitae rutrum tortor nibh eget tellus. Maecenas vitae porttitor nibh. Mauris eu ipsum suscipit, lobortis massa eu, efficitur orci. Suspendisse vehicula eget nisi et imperdiet. Maecenas feugiat nibh a enim auctor ornare. Aliquam erat volutpat. Duis hendrerit laoreet rutrum. Mauris metus metus, finibus sit amet urna a, elementum faucibus quam. Etiam venenatis est in eros molestie hendrerit. Curabitur condimentum, nisi ut tincidunt vehicula, dolor magna vulputate sem, a placerat dui metus nec tortor. Pellentesque mattis suscipit tincidunt. Morbi suscipit sagittis sem, eget malesuada ante interdum et.`;

const getRandomLorem = (random: () => number) =>
  LOREM.slice(0, random() * LOREM.length - 1);

export function createRows(indexForStart?: number, count?: number) {
  const random = createSeededRandom(42);
  const rows: Row[] = [];
  const indexStart = indexForStart ?? 1;
  const countX = count ?? 200;

  for (let i = indexStart; i < indexStart + countX; i += 1) {
    rows.push({
      id: i,
      task: `Task ${i}`,
      complete: Math.min(100, Math.round(random() * 110)),
      priority: ['Critical', 'High', 'Medium', 'Low'][
        Math.floor(random() * 4)
      ]!,
      done: [true, false][Math.floor(random() * 2)]!,
      inspiredDay: Math.floor(random() * 100),
      issueType: ['Bug', 'Improvement', 'Epic', 'Story'][
        Math.floor(random() * 4)
      ]!,
      developer: `${random() * i * 100}asdf${random() * 100}`,
      tr: `tr${i}`,
      loremIpsum: getRandomLorem(random),
      subRows: [
        {
          id: `${i + 10000}`,
          task: `Task ${i + 10000}`,
          complete: Math.min(100, Math.round(random() * 110)),
          priority: ['Critical', 'High', 'Medium', 'Low'][
            Math.floor(random() * 4)
          ]!,
          issueType: ['Bug', 'Improvement', 'Epic', 'Story'][
            Math.floor(random() * 4)
          ]!,
          done: [true, false][Math.floor(random() * 2)]!,
          inspiredDay: Math.floor(random() * 100),
          developer: `${random() * i * 100}asdf${random() * 100}`,
          tr: `tr${i}`,
          loremIpsum: getRandomLorem(random),
          subRows: [
            {
              id: `${i + 20000}`,
              task: `Task ${i + 20000}`,
              complete: Math.min(100, Math.round(random() * 110)),
              priority: ['Critical', 'High', 'Medium', 'Low'][
                Math.floor(random() * 4)
              ]!,
              issueType: ['Bug', 'Improvement', 'Epic', 'Story'][
                Math.floor(random() * 4)
              ]!,
              done: [true, false][Math.floor(random() * 2)]!,
              inspiredDay: Math.floor(random() * 100),
              developer: `${random() * i * 100}asdf${random() * 100}`,
              tr: `tr${i + 20000}`,
              loremIpsum: getRandomLorem(random),
              subRows: [
                {
                  id: `${i + 30000}`,
                  task: `Task ${i + 30000}`,
                  complete: Math.min(100, Math.round(random() * 110)),
                  priority: ['Critical', 'High', 'Medium', 'Low'][
                    Math.floor(random() * 4)
                  ]!,
                  issueType: ['Bug', 'Improvement', 'Epic', 'Story'][
                    Math.floor(random() * 4)
                  ]!,
                  done: [true, false][Math.floor(random() * 2)]!,
                  inspiredDay: Math.floor(random() * 100),
                  developer: `${random() * i * 100}asdf${random() * 100}`,
                  tr: `tr${i + 30000}`,
                  loremIpsum: getRandomLorem(random),
                },
              ],
            },
          ],
        },
        {
          id: `${`${i + 10000}additional`}`,
          task: `Task ${i + 10000}`,
          complete: Math.min(100, Math.round(random() * 110)),
          priority: ['Critical', 'High', 'Medium', 'Low'][
            Math.floor(random() * 4)
          ]!,
          issueType: ['Bug', 'Improvement', 'Epic', 'Story'][
            Math.floor(random() * 4)
          ]!,
          done: [true, false][Math.floor(random() * 2)]!,
          inspiredDay: Math.floor(random() * 100),
          developer: `${random() * i * 100}asdf${random() * 100}`,
          tr: `tr${i}`,
          loremIpsum: getRandomLorem(random),
          subRows: [
            {
              id: `${`${i + 20000}additional`}`,
              task: `Task ${`${i + 20000}additional`} `,
              complete: Math.min(100, Math.round(random() * 110)),
              priority: ['Critical', 'High', 'Medium', 'Low'][
                Math.floor(random() * 4)
              ]!,
              issueType: ['Bug', 'Improvement', 'Epic', 'Story'][
                Math.floor(random() * 4)
              ]!,
              done: [true, false][Math.floor(random() * 2)]!,
              inspiredDay: Math.floor(random() * 100),
              developer: `${random() * i * 100}asdf${random() * 100}`,
              tr: `tr${i + 20000}`,
              loremIpsum: getRandomLorem(random),
              subRows: [
                {
                  id: `${`${i + 30000}additional`}`,
                  task: `Task ${i + 30000}`,
                  complete: Math.min(100, Math.round(random() * 110)),
                  priority: ['Critical', 'High', 'Medium', 'Low'][
                    Math.floor(random() * 4)
                  ]!,
                  issueType: ['Bug', 'Improvement', 'Epic', 'Story'][
                    Math.floor(random() * 4)
                  ]!,
                  done: [true, false][Math.floor(random() * 2)]!,
                  inspiredDay: Math.floor(random() * 100),
                  developer: `${random() * i * 100}asdf${random() * 100}`,
                  tr: `tr${i + 30000}`,
                  loremIpsum: getRandomLorem(random),
                },
              ],
            },
          ],
        },
      ],
    });
  }
  return rows;
}

// -------------------------------------------- Tree

export type TreeRow<ChildsKey extends void | string = 'subRows'> = {
  id: number | string;
  block: string;
  blockActivity: string;
  tribe: string;
  tribeZone: string;
  product: string;
  q1: number;
  q2: number;
  q3: number;
  q4: number;
} & {
  [key in ChildsKey extends string
    ? ChildsKey
    : 'subRows']?: TreeRow<ChildsKey>[];
};

export const BLOCKS = [
  'Finance',
  'Реклама',
  'Технологии',
  'Информации',
  'Аналитика',
  'Маркетинг',
  'HR',
  'Безопасность',
  'Инфраструктура',
  'Продуктовый блок',
  'Операционный блок',
  'Стратегия',
  'Юридический',
  'Комплаенс',
  'Риски',
] as const;

export const TRIBES = [
  'ESG',
  'Digital',
  'Cost',
  'Managment',
  'Platform',
  'Data Science',
  'DevOps',
  'QA',
  'Frontend and Mobile Experience',
  'Backend',
  'Mobile',
  'Infrastructure and Cloud Operations',
  'Security',
  'Architecture',
  'Customer support and Service Management',
] as const;
export const PRODUCTS = [
  'Инициативы',
  'АПО',
  'ЕРМ',
  'Портал планирования',
  'СберБизнес',
  'СберОнлайн',
  'Платформа данных',
  'CRM',
  'Мониторинг',
  'Аналитический портал управлененской отчетности',
  'Документооборот',
  'Интеграционная шина корпоративных сервисов',
  'Личный кабинет',
  'Платежный шлюз',
  'Биллинг',
] as const;

export function createRowsTree<T extends string = 'subRows'>(childsKeyX?: T) {
  const random = createSeededRandom(43);
  const childsKey = childsKeyX ?? ('subRows' as const);
  const rows: unknown[] = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < 200; i++) {
    rows.push({
      id: i,
      block: BLOCKS[Math.floor(random() * BLOCKS.length)]!,
      blockActivity: ['Активный', 'В стоп-листе'][Math.floor(random() * 2)]!,
      tribe: TRIBES[Math.floor(random() * TRIBES.length)]!,
      tribeZone: ['Москва', 'Самара', 'Екатеринбург', 'Московская область'][
        Math.floor(random() * 4)
      ]!,
      product: PRODUCTS[Math.floor(random() * PRODUCTS.length)]!,
      q1: Math.min(10000, Math.round(random() * 11000)),
      q2: Math.min(10000, Math.round(random() * 11000)),
      q3: Math.min(10000, Math.round(random() * 11000)),
      q4: Math.min(10000, Math.round(random() * 11000)),
      [childsKey]: [
        {
          id: `${i}tribe`,
          block: BLOCKS[Math.floor(random() * BLOCKS.length)]!,
          blockActivity: ['Активный', 'В стоп-листе'][
            Math.floor(random() * 2)
          ]!,
          tribe: TRIBES[Math.floor(random() * TRIBES.length)]!,
          tribeZone: ['Москва', 'Самара', 'Екатеринбург', 'Московская область'][
            Math.floor(random() * 4)
          ]!,
          product: PRODUCTS[Math.floor(random() * PRODUCTS.length)]!,
          q1: Math.min(10000, Math.round(random() * 11000)),
          q2: Math.min(10000, Math.round(random() * 11000)),
          q3: Math.min(10000, Math.round(random() * 11000)),
          q4: Math.min(10000, Math.round(random() * 11000)),
          [childsKey]: [
            {
              id: `${i}product`,
              block: BLOCKS[Math.floor(random() * BLOCKS.length)]!,
              blockActivity: ['Активный', 'В стоп-листе'][
                Math.floor(random() * 2)
              ]!,
              tribe: TRIBES[Math.floor(random() * TRIBES.length)]!,
              tribeZone: [
                'Москва',
                'Самара',
                'Екатеринбург',
                'Московская область',
              ][Math.floor(random() * 4)]!,
              product: PRODUCTS[Math.floor(random() * PRODUCTS.length)]!,
              q1: Math.min(10000, Math.round(random() * 11000)),
              q2: Math.min(10000, Math.round(random() * 11000)),
              q3: Math.min(10000, Math.round(random() * 11000)),
              q4: Math.min(10000, Math.round(random() * 11000)),
            },
          ],
        },
      ],
    });
  }
  return rows as TreeRow<T extends string ? T : 'subRows'>[];
}

/** Форма поддерева: массив форм детей, `[]` — лист */
type TreeShape = readonly TreeShape[];

const RAGGED_TREE_MAX_LVL = 5;

// Фиксированные corner-кейсы для отступов subRows (идут первыми в таблице)
const RAGGED_TREE_CORNER_CASES: readonly TreeShape[] = [
  // корневой лист без детей
  [],
  // один дочерний лист
  [[]],
  // несколько дочерних листьев
  [[], [], []],
  // родитель на 1 уровне и его лист на 2, затем лист на 1 уровне
  [[[]], []],
  // цепочка до максимальной глубины, затем резкий возврат на верхний уровень
  [[[[[[]]]]]],
  [],
  // перемешанные листья и ветки разной глубины среди соседей
  [[], [[[], []], []], [], [[[[]]], []]],
  // каждый уровень — несколько детей
  [
    [
      [[], []],
      [[], []],
    ],
    [
      [[], []],
      [[], []],
    ],
  ],
];

/**
 * Дерево с неравномерной глубиной (до 6 уровней) и разным числом детей —
 * «рваная лестница» для проверки отступов subRows. Первые строки —
 * фиксированные corner-кейсы, дальше — случайное дерево (seeded, стабильно
 * для скриншотов).
 */
export function createRaggedRowsTree(): TreeRow[] {
  const random = createSeededRandom(7);
  const pick = <T>(list: readonly T[]): T =>
    list[Math.floor(random() * list.length)]!;
  const quarter = () => Math.min(10000, Math.round(random() * 11000));

  const createRandomShape = (lvl: number): TreeShape => {
    if (lvl >= RAGGED_TREE_MAX_LVL || random() < 0.3 + lvl * 0.12) {
      return [];
    }
    const childrenCount = 1 + Math.floor(random() * 4);
    return Array.from({ length: childrenCount }, () =>
      createRandomShape(lvl + 1),
    );
  };

  const buildNode = (shape: TreeShape, id: string): TreeRow => {
    const subRows = shape.map((child, i) => buildNode(child, `${id}-${i + 1}`));
    return {
      id,
      block: pick(BLOCKS),
      blockActivity: pick(['Активный', 'В стоп-листе']),
      tribe: pick(TRIBES),
      tribeZone: pick([
        'Москва',
        'Самара',
        'Екатеринбург',
        'Московская область',
      ]),
      product: pick(PRODUCTS),
      q1: quarter(),
      q2: quarter(),
      q3: quarter(),
      q4: quarter(),
      ...(subRows.length ? { subRows } : {}),
    };
  };

  const randomShapes = Array.from({ length: 40 }, () => createRandomShape(0));

  return [...RAGGED_TREE_CORNER_CASES, ...randomShapes].map((shape, i) =>
    buildNode(shape, `${i + 1}`),
  );
}

// --------------------------------------------- columns --------------------------------

const lvl3 = [
  {
    key: 'kek',
    name: 'Kek',
    children: [
      {
        name: 'id and task',
        key: 'Id and task',
        children: [
          {
            key: 'id',
            name: 'id',
            resizable: true,
          },
          {
            key: 'task',
            name: 'Title',
            resizable: true,
          },
        ],
      },
      {
        key: 'priority and issueType',
        name: 'Priority and Issue Type',
        children: [
          {
            key: 'priority',
            name: 'Priority',
            resizable: true,
          },
          {
            key: 'issueType',
            name: 'Issue',
            resizable: true,
          },
        ],
      },
    ],
  },
  {
    key: 'pppp',
    name: 'Pppppp',
    children: [
      {
        key: 'complete',
        name: '% Complete',
        resizable: true,
      },
    ],
  },
];

const lvl2 = [
  {
    key: 'id and task',
    name: 'Id and task',
    children: [
      {
        key: 'id',
        name: 'Id',
        resizable: true,
      },
      {
        key: 'task',
        name: 'Title',
        resizable: true,
      },
    ],
  },
  {
    key: 'priority and issueType',
    name: 'Priority and Issue Type',
    children: [
      {
        key: 'priority',
        name: 'Priority',
        resizable: true,
      },
      {
        key: 'issueType',
        name: 'Issue',
        resizable: true,
      },
    ],
  },
  {
    key: 'pppp',
    name: 'Pppppp',
    children: [
      {
        key: 'complete',
        name: '% Complete',
        resizable: true,
      },
    ],
  },
  {
    key: 'developer',
    name: 'developer',
  },
];

const lvl2v2 = [
  {
    key: 'id',
    name: 'Id',
    resizable: true,
  },
  {
    key: 'task',
    name: 'Title',
    resizable: true,
  },
  {
    key: 'priority',
    name: 'Priority',
    resizable: true,
  },
  {
    key: 'issueType',
    name: 'Issue',
    resizable: true,
  },
  {
    key: 'pppp',
    name: 'Pppppp',
    children: [
      {
        key: 'complete',
        name: '% Complete',
        resizable: true,
      },
    ],
  },
  {
    key: 'developer',
    name: 'developer',
  },
];

const lvl1 = [
  {
    key: 'id',
    name: 'Id',
    resizable: true,
  },
  {
    key: 'task',
    name: 'Title',
    resizable: true,
  },
  {
    key: 'priority',
    name: 'Priority',
    resizable: true,
  },
  {
    key: 'issueType',
    name: 'Issue',
    resizable: true,
  },
  {
    key: 'complete',
    name: '% Complete',
    resizable: true,
  },
  {
    key: 'developer',
    name: 'developer',
  },
];

export const dataObj = {
  lvl1,
  lvl2,
  lvl2v2,
  lvl3,
};

export function getPaginationData({
  page,
  perPage,
  total,
}: {
  page: number;
  perPage: number;
  total: number;
}) {
  const maxOfPage = page * perPage;
  let count = perPage;

  if (maxOfPage > total) {
    const prevPageMax = page > 1 ? maxOfPage - perPage : 0;
    count = total - prevPageMax;
  }

  return createRows((page - 1) * perPage, count);
}

export async function getPaginationDataAsync({
  page,
  perPage,
  total,
}: {
  page: number;
  perPage: number;
  total: number;
}) {
  const maxOfPage = page * perPage;
  let count = perPage;

  if (maxOfPage > total) {
    const prevPageMax = page > 1 ? maxOfPage - perPage : 0;
    count = total - prevPageMax;
  }

  return createRows((page - 1) * perPage, count);
}
