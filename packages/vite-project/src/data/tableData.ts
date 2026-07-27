/* eslint-disable @typescript-eslint/no-non-null-assertion */
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
const getRandomLorem = () => LOREM.slice(0, Math.random() * LOREM.length - 1);
export function createRows(indexForStart?: number, count?: number) {
  const rows: Row[] = [];
  // eslint-disable-next-line no-plusplus

  const indexStart = indexForStart ?? 1;
  const countX = count ?? 200;
  for (let i = indexStart; i < indexStart + countX; i += 1) {
    rows.push({
      id: i,
      task: `Task ${i}`,
      complete: Math.min(100, Math.round(Math.random() * 110)),
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      priority: ['Critical', 'High', 'Medium', 'Low'][
        Math.floor(Math.random() * 4)
      ]!,
      done: [true, false][Math.floor(Math.random() * 2)]!,
      inspiredDay: Math.floor(Math.random() * 100),
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      issueType: ['Bug', 'Improvement', 'Epic', 'Story'][
        Math.floor(Math.random() * 4)
      ]!,
      developer: `${Math.random() * i * 100}asdf${Math.random() * 100}`,
      tr: `tr${i}`,
      loremIpsum: getRandomLorem(),
      subRows: [
        {
          id: `${i + 10000}`,
          task: `Task ${i + 10000}`,
          complete: Math.min(100, Math.round(Math.random() * 110)),
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          priority: ['Critical', 'High', 'Medium', 'Low'][
            Math.floor(Math.random() * 4)
          ]!,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          issueType: ['Bug', 'Improvement', 'Epic', 'Story'][
            Math.floor(Math.random() * 4)
          ]!,
          done: [true, false][Math.floor(Math.random() * 2)]!,
          inspiredDay: Math.floor(Math.random() * 100),

          developer: `${Math.random() * i * 100}asdf${Math.random() * 100}`,
          tr: `tr${i}`,
          loremIpsum: getRandomLorem(),
          subRows: [
            {
              id: `${i + 20000}`,
              task: `Task ${i + 20000}`,
              complete: Math.min(100, Math.round(Math.random() * 110)),
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              priority: ['Critical', 'High', 'Medium', 'Low'][
                Math.floor(Math.random() * 4)
              ]!,
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              issueType: ['Bug', 'Improvement', 'Epic', 'Story'][
                Math.floor(Math.random() * 4)
              ]!,
              done: [true, false][Math.floor(Math.random() * 2)]!,
              inspiredDay: Math.floor(Math.random() * 100),

              developer: `${Math.random() * i * 100}asdf${Math.random() * 100}`,
              tr: `tr${i + 20000}`,
              loremIpsum: getRandomLorem(),
              subRows: [
                {
                  id: `${i + 30000}`,
                  task: `Task ${i + 30000}`,
                  complete: Math.min(100, Math.round(Math.random() * 110)),
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  priority: ['Critical', 'High', 'Medium', 'Low'][
                    Math.floor(Math.random() * 4)
                  ]!,
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  issueType: ['Bug', 'Improvement', 'Epic', 'Story'][
                    Math.floor(Math.random() * 4)
                  ]!,
                  done: [true, false][Math.floor(Math.random() * 2)]!,
                  inspiredDay: Math.floor(Math.random() * 100),

                  developer: `${Math.random() * i * 100}asdf${
                    Math.random() * 100
                  }`,
                  tr: `tr${i + 30000}`,
                  loremIpsum: getRandomLorem(),
                },
              ],
            },
          ],
        },
        {
          id: `${`${i + 10000}additional`}`,
          task: `Task ${i + 10000}`,
          complete: Math.min(100, Math.round(Math.random() * 110)),
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          priority: ['Critical', 'High', 'Medium', 'Low'][
            Math.floor(Math.random() * 4)
          ]!,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          issueType: ['Bug', 'Improvement', 'Epic', 'Story'][
            Math.floor(Math.random() * 4)
          ]!,
          done: [true, false][Math.floor(Math.random() * 2)]!,
          inspiredDay: Math.floor(Math.random() * 100),

          developer: `${Math.random() * i * 100}asdf${Math.random() * 100}`,
          tr: `tr${i}`,
          loremIpsum: getRandomLorem(),
          subRows: [
            {
              id: `${`${i + 20000}additional`}`,
              task: `Task ${`${i + 20000}additional`} `,
              complete: Math.min(100, Math.round(Math.random() * 110)),
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              priority: ['Critical', 'High', 'Medium', 'Low'][
                Math.floor(Math.random() * 4)
              ]!,
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              issueType: ['Bug', 'Improvement', 'Epic', 'Story'][
                Math.floor(Math.random() * 4)
              ]!,
              done: [true, false][Math.floor(Math.random() * 2)]!,
              inspiredDay: Math.floor(Math.random() * 100),

              developer: `${Math.random() * i * 100}asdf${Math.random() * 100}`,
              tr: `tr${i + 20000}`,
              loremIpsum: getRandomLorem(),
              subRows: [
                {
                  id: `${`${i + 30000}additional`}`,
                  task: `Task ${i + 30000}`,
                  complete: Math.min(100, Math.round(Math.random() * 110)),
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  priority: ['Critical', 'High', 'Medium', 'Low'][
                    Math.floor(Math.random() * 4)
                  ]!,
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  issueType: ['Bug', 'Improvement', 'Epic', 'Story'][
                    Math.floor(Math.random() * 4)
                  ]!,
                  done: [true, false][Math.floor(Math.random() * 2)]!,
                  inspiredDay: Math.floor(Math.random() * 100),

                  developer: `${Math.random() * i * 100}asdf${
                    Math.random() * 100
                  }`,
                  tr: `tr${i + 30000}`,
                  loremIpsum: getRandomLorem(),
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
] as const;
export const TRIBES = ['ESG', 'Digital', 'Cost', 'Managment'] as const;
export const PRODUCTS = [
  'Инициативы',
  'АПО',
  'ЕРМ',
  'Портал планирования',
] as const;

export function createRowsTree<T extends string = 'subRows'>(childsKeyX?: T) {
  const childsKey = childsKeyX ?? ('subRows' as const);
  const rows: unknown[] = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < 200; i++) {
    rows.push({
      id: i,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      block: BLOCKS[Math.floor(Math.random() * 4)]!,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      blockActivity: ['Активный', 'В стоп-листе'][
        Math.floor(Math.random() * 2)
      ]!,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      tribe: TRIBES[Math.floor(Math.random() * 4)]!,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      tribeZone: ['Москва', 'Самара', 'Екатеринбург', 'Московская область'][
        Math.floor(Math.random() * 4)
      ]!,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      product: PRODUCTS[Math.floor(Math.random() * 4)]!,
      q1: Math.min(10000, Math.round(Math.random() * 11000)),
      q2: Math.min(10000, Math.round(Math.random() * 11000)),
      q3: Math.min(10000, Math.round(Math.random() * 11000)),
      q4: Math.min(10000, Math.round(Math.random() * 11000)),
      [childsKey]: [
        {
          id: `${i}tribe`,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          block: BLOCKS[Math.floor(Math.random() * 4)]!,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          blockActivity: ['Активный', 'В стоп-листе'][
            Math.floor(Math.random() * 2)
          ]!,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          tribe: TRIBES[Math.floor(Math.random() * 4)]!,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          tribeZone: ['Москва', 'Самара', 'Екатеринбург', 'Московская область'][
            Math.floor(Math.random() * 4)
          ]!,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          product: PRODUCTS[Math.floor(Math.random() * 4)]!,
          q1: Math.min(10000, Math.round(Math.random() * 11000)),
          q2: Math.min(10000, Math.round(Math.random() * 11000)),
          q3: Math.min(10000, Math.round(Math.random() * 11000)),
          q4: Math.min(10000, Math.round(Math.random() * 11000)),
          [childsKey]: [
            {
              id: `${i}product`,
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              block: BLOCKS[Math.floor(Math.random() * 4)]!,
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              blockActivity: ['Активный', 'В стоп-листе'][
                Math.floor(Math.random() * 2)
              ]!,
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              tribe: TRIBES[Math.floor(Math.random() * 4)]!,
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              tribeZone: [
                'Москва',
                'Самара',
                'Екатеринбург',
                'Московская область',
              ][Math.floor(Math.random() * 4)]!,
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              product: PRODUCTS[Math.floor(Math.random() * 4)]!,
              q1: Math.min(10000, Math.round(Math.random() * 11000)),
              q2: Math.min(10000, Math.round(Math.random() * 11000)),
              q3: Math.min(10000, Math.round(Math.random() * 11000)),
              q4: Math.min(10000, Math.round(Math.random() * 11000)),
            },
          ],
        },
      ],
    });
  }

  return rows as TreeRow<T extends string ? T : 'subRows'>[];
}

// --------------------------------------------- columns --------------------------------

const lvl3 = [
  {
    name: 'kek',
    key: 'kek',
    children: [
      {
        name: 'id and task',
        key: 'id and task',
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
        name: 'Priority and Issue Type',
        key: 'priority and issueType',
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
    name: 'pppppp',
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
    name: 'id and task',
    key: 'id and task',
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
    name: 'Priority and Issue Type',
    key: 'priority and issueType',
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
    name: 'pppppp',
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
    name: 'id',
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
    name: 'pppppp',
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
    name: 'id',
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
