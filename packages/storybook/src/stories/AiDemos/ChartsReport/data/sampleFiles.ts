/**
 * Примеры файлов для демо. Генерируются детерминированно и отдаются
 * в тот же разбор CSV, что и файл пользователя, — путь данных одинаковый.
 */

export type SampleFile = {
  id: string;
  fileName: string;
  title: string;
  /** Подсказки, которые агент предлагает после загрузки файла */
  prompts: string[];
  build: () => string;
};

/** Простой детерминированный генератор, чтобы цифры не менялись между запусками */
function seeded(seed: number) {
  let value = seed;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

const MONTHS = Array.from(
  { length: 12 },
  (_, index) => `2025-${String(index + 1).padStart(2, '0')}`,
);

function buildSales(): string {
  const random = seeded(42);
  const regions: [string, number][] = [
    ['Москва', 48],
    ['Северо-Запад', 27],
    ['Сибирь', 19],
    ['Юг', 15],
  ];
  const products: [string, number][] = [
    ['Кредиты', 1],
    ['Депозиты', 0.7],
    ['Карты', 0.45],
  ];
  const lines = ['Месяц;Регион;Продукт;Выручка, млн ₽;Сделки'];
  MONTHS.forEach((month, monthIndex) => {
    const season =
      1 + 0.25 * Math.sin((monthIndex / 11) * Math.PI) + monthIndex * 0.02;
    regions.forEach(([region, base]) => {
      products.forEach(([product, factor]) => {
        const revenue = base * factor * season * (0.85 + random() * 0.3);
        const deals = Math.round(revenue * (9 + random() * 4));
        lines.push(
          `${month};${region};${product};${revenue
            .toFixed(1)
            .replace('.', ',')};${deals}`,
        );
      });
    });
  });
  return lines.join('\n');
}

function buildBudget(): string {
  const random = seeded(7);
  const departments: [string, number][] = [
    ['ИТ', 420],
    ['Маркетинг', 260],
    ['Операционный блок', 380],
    ['HR', 140],
    ['Юридический', 90],
    ['Финансы', 120],
  ];
  const quarters = ['2025-03-31', '2025-06-30', '2025-09-30', '2025-12-31'];
  const lines = ['Дата;Подразделение;План, млн ₽;Факт, млн ₽'];
  quarters.forEach((date) => {
    departments.forEach(([department, base]) => {
      const plan = base / 4;
      const fact = plan * (0.82 + random() * 0.32);
      lines.push(
        `${date};${department};${plan.toFixed(1).replace('.', ',')};${fact
          .toFixed(1)
          .replace('.', ',')}`,
      );
    });
  });
  return lines.join('\n');
}

export const SAMPLE_FILES: SampleFile[] = [
  {
    id: 'sales',
    fileName: 'продажи_2025.csv',
    title: 'Продажи 2025',
    prompts: [
      'Покажи динамику выручки по месяцам в разрезе регионов и добавь итоговые KPI',
      'Добавь структуру выручки по продуктам в разрезе регионов',
      'Сделай первый график столбцами',
      'Оставь только Москву и Сибирь',
      'Добавь таблицу',
    ],
    build: buildSales,
  },
  {
    id: 'budget',
    fileName: 'бюджет_план_факт.csv',
    title: 'Бюджет план-факт',
    prompts: [
      'Сравни план и факт по подразделениям',
      'Добавь динамику факта по кварталам',
      'Добавь таблицу',
      'Назови отчёт «Исполнение бюджета 2025»',
    ],
    build: buildBudget,
  },
];

/** Подсказки до загрузки файла */
export const START_PROMPTS = SAMPLE_FILES.map(
  (file) => `Взять пример: ${file.title}`,
);
