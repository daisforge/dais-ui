/**
 * ВОСПРОИЗВЕДЕНИЕ БАГА: Дёрганье (twitching) ListOfFilters при открытии SplitView
 *
 * Описание:
 * Когда ListOfFilters (полоска с чипами фильтров) находится внутри mainContent
 * у SplitView, при открытии/закрытии sidebar чипы начинают «прыгать/дёргаться».
 *
 * Причина:
 * Внутри ListOfFilters на контейнере Box стоит `transition: all 0.5s ease`.
 * При открытии sidebar SplitView плавно меняет grid-template-columns (0.2s),
 * что постоянно меняет ширину mainContent. ResizeObserver внутри useUpdateSize
 * на каждом кадре обновляет стейт → контейнер «догоняет» новую ширину с задержкой
 * из-за transition → визуальное дёрганье.
 *
 * Фикс:
 * Убрать (закомментировать) `transition: all 0.5s ease` в ListOfFilters.tsx.
 * Анимация open/close и так обрабатывается родительским Collapse.
 *
 * Шаги воспроизведения:
 * 1. Выберите несколько фильтров, чтобы появились чипы
 * 2. Нажмите «Открыть sidebar»
 * 3. Наблюдайте за полоской чипов — она «дёргается» при анимации sidebar
 * 4. Закройте sidebar — дёрганье повторяется
 *
 * После применения фикса (убрать transition: all в ListOfFilters):
 * Чипы плавно адаптируются без подёргиваний.
 */

import { useCallback, useState } from 'react';
import { SplitView, ListOfFilters, useFiltersList } from '@dais-ui/ui-kit';

// МОКОВЫЕ ДАННЫЕ
type FilterKey = 'status' | 'priority' | 'category' | 'assignee';

const FILTER_OPTIONS: Record<FilterKey, { label: string; value: string }[]> = {
  status: [
    { label: 'Новый', value: 'new' },
    { label: 'В работе', value: 'in_progress' },
    { label: 'На проверке', value: 'review' },
    { label: 'Завершён', value: 'done' },
  ],
  priority: [
    { label: 'Низкий', value: 'low' },
    { label: 'Средний', value: 'medium' },
    { label: 'Высокий', value: 'high' },
    { label: 'Критический', value: 'critical' },
  ],
  category: [
    { label: 'Баг', value: 'bug' },
    { label: 'Фича', value: 'feature' },
    { label: 'Рефакторинг', value: 'refactor' },
    { label: 'Документация', value: 'docs' },
  ],
  assignee: [
    { label: 'Иванов', value: 'ivanov' },
    { label: 'Петров', value: 'petrov' },
    { label: 'Сидоров', value: 'sidorov' },
  ],
};

const FILTERS_INFO: Record<
  FilterKey,
  { label: string; clearedValue: unknown }
> = {
  status: { label: 'Статус', clearedValue: [] },
  priority: { label: 'Приоритет', clearedValue: [] },
  category: { label: 'Категория', clearedValue: '' },
  assignee: { label: 'Исполнитель', clearedValue: [] },
};

const INITIAL_FILTERS: Record<FilterKey, unknown> = {
  status: [],
  priority: [],
  category: '',
  assignee: [],
};

// КОМПОНЕНТ ПРИМЕРА

const SplitViewAndListOfFilters = () => {
  // Состояние sidebar
  const [sidebarOpened, setSidebarOpened] = useState(false);

  // Состояние фильтров
  const [filters, setFilters] =
    useState<Record<FilterKey, unknown>>(INITIAL_FILTERS);

  const updateFilters = useCallback((key: FilterKey, value: unknown) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }, []);

  // Хук для генерации чипов и clearAll
  const { filterList, filterListOpened, clearAll } = useFiltersList<FilterKey>({
    filters,
    filtersInfo: FILTERS_INFO,
    options: FILTER_OPTIONS,
    updateFilters,
  });

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Шапка с кнопками управления */}
      <div
        style={{
          padding: '12px 16px',
          borderBottom: '1px solid #e0e0e0',
          display: 'flex',
          gap: 12,
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <button
          onClick={() => setSidebarOpened((prev) => !prev)}
          style={{
            padding: '8px 16px',
            background: sidebarOpened ? 'red' : 'blue',
            color: 'white',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          {sidebarOpened ? 'Закрыть sidebar' : 'Открыть sidebar'}
        </button>

        <span style={{ color: '#666', fontSize: 13 }}>|</span>
        <span style={{ fontSize: 13, color: '#888' }}>Фильтры:</span>

        {/* Кнопки быстрого добавления фильтров */}
        {(Object.keys(FILTER_OPTIONS) as FilterKey[]).map((filterKey) => {
          const opts = FILTER_OPTIONS[filterKey];
          const info = FILTERS_INFO[filterKey];
          const isArray = Array.isArray(INITIAL_FILTERS[filterKey]);

          return (
            <button
              key={filterKey}
              onClick={() => {
                if (isArray) {
                  // Добавить все значения в массивный фильтр
                  const currentArr = (filters[filterKey] as string[]) || [];
                  const allValues = opts.map((o) => o.value);
                  // Тоггл: если все уже выбраны — очистить, иначе — выбрать все
                  const allSelected = allValues.every((v) =>
                    currentArr.includes(v),
                  );
                  updateFilters(
                    filterKey,
                    allSelected ? info.clearedValue : allValues,
                  );
                } else {
                  // Тоггл для single-value фильтра
                  const current = filters[filterKey];
                  updateFilters(
                    filterKey,
                    current ? info.clearedValue : opts[0].value,
                  );
                }
              }}
              style={{
                padding: '4px 10px',
                fontSize: 12,
                border: '1px solid #ccc',
                borderRadius: 4,
                cursor: 'pointer',
                background:
                  (Array.isArray(filters[filterKey]) &&
                    (filters[filterKey] as string[]).length > 0) ||
                  (!Array.isArray(filters[filterKey]) && filters[filterKey])
                    ? '#c8e6c9'
                    : 'white',
              }}
            >
              {info.label}
            </button>
          );
        })}
      </div>

      {/* SplitView с ListOfFilters внутри mainContent */}
      <div style={{ flex: 1, overflow: 'auto' }}>
        <SplitView
          headerHeight={56}
          mainContent={
            <div>
              {/* Полоска фильтров - здесь может быть дёрганье при открытии sidebar */}
              <ListOfFilters
                opened={filterListOpened}
                items={filterList}
                clearAll={clearAll}
              />

              {/* Имитация основного контента */}
              <div style={{ padding: 16 }}>
                <h3>Основной контент (mainContent)</h3>
                <p style={{ color: '#666' }}>
                  Выберите фильтры кнопками сверху, затем откройте/закройте
                  sidebar.
                  <br />
                  Наблюдайте за полоской чипов — при анимации sidebar она будет
                  дёргаться.
                </p>
                <div
                  style={{
                    marginTop: 16,
                    padding: 16,
                    background: '#f5f5f5',
                    borderRadius: 8,
                    fontFamily: 'monospace',
                    fontSize: 13,
                  }}
                >
                  <div>Текущие фильтры:</div>
                  <pre>{JSON.stringify(filters, null, 2)}</pre>
                </div>
              </div>
            </div>
          }
          sidebar={{
            isOpened: sidebarOpened,
            content: (
              <div style={{ padding: 16, height: '100%' }}>
                <h3>Sidebar</h3>
                <p style={{ color: '#666' }}>
                  Контент бокового меню. Потяните разделитель для ресайза.
                </p>
                <button
                  onClick={() => setSidebarOpened(false)}
                  style={{
                    marginTop: 12,
                    padding: '6px 12px',
                    border: '1px solid #ccc',
                    borderRadius: 4,
                    cursor: 'pointer',
                  }}
                >
                  Закрыть
                </button>
              </div>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default SplitViewAndListOfFilters;
