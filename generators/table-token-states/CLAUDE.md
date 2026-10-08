# Генератор цветов таблицы (table-token-states)

Мини-проект внутри `generators/`: источник палитры «семантический токен ×
состояние» для TableCanvas/TableGlide. Это инструмент разработчика —
в сборку библиотеки не входит и в CI не запускается. Результат его работы —
обычный закоммиченный файл
`packages/ui-kit/src/components/TableGlide/theming/table-colors.generated.ts`.

## Структура

**Код дизайн-системы — источник истины, по смыслу не править.** При
обновлении от дизайнера файлы заменяются целиком, затем
`npm run format && npm test` (форматирование prettier допустимо — семантика
защищена тестами):

- `code/table-token-states.ts` — формулы (OKLCH, шаг по лучу, наложение выделения);
- `code/table-token-sources.ts` — темы, семантические токены, карта ключей таблицы;
- `code/table-token-states.test.ts`, `code/generate.ts`, `code/table-token-states.output.json`;
- `docs/`, `demo/table-states-prototype.html`, `README.md` — документация и
  интерактивный прототип (README — модель, формулы, API, порядок подключения).

**Слой интеграции библиотеки:**

- `emit-table-colors.ts` — считает палитру через `buildTableColors()`,
  закрывает дыры тем временными значениями (их состояния считаются той же
  формулой `fillStates`, не руками) и эмитит `table-colors.generated.ts`;
- `INTEGRATION-STATUS.md` — статус интеграции и открытые вопросы к дизайнеру;
- `package.json` (только scripts, без зависимостей), `tsconfig.json`,
  `.gitignore` — локальная инфраструктура. Своих node_modules у папки НЕТ:
  tsx/vitest/typescript/prettier берутся из devDependencies корня
  (npm run добавляет родительские node_modules/.bin в PATH).

## Команды

```bash
cd generators/table-token-states
npm test          # тесты дизайнера — прогонять после любой замены code/
npm run typecheck # strict-проверка всего TS папки (tsc -p tsconfig.json)
npm run emit      # пересборка палитры → theming/table-colors.generated.ts
npm run format    # prettier по папке + ../theme-tokens (есть и format:check)
```

Зависимости ставятся обычным `npm ci` в КОРНЕ репозитория — отдельной
установки у мини-проекта нет.

После `emit` прогнать в корне `npx nx test ui-kit`: тест
`theming/fill-states.test.ts` сверяет рантайм-копию формулы с палитрой
бит-в-бит.

## Границы изоляции (что локально, а что общее)

Общее с корнем: все зависимости (tsx/vitest/typescript/prettier в
devDependencies корня, один package-lock на репозиторий) и форматирование
(prettier той же версии, что проверяет IDE).

Локальное — только два осознанных исключения:

1. `tsconfig.json`: код `code/*` не подгоняется под строгие флаги
   репозитория (`noUncheckedIndexedAccess` и др. его ломают) — иначе
   потеряется возможность заменять файлы 1-в-1 при обновлениях от
   дизайн-системы.
2. eslint: `code/` и `demo/` исключены в корневом `.eslintignore` по той же
   причине неприкосновенности; наш слой (`emit-table-colors.ts`) линтится
   как обычный код.

## Связанное

- Рантайм-копия fill-формулы:
  `packages/ui-kit/src/components/TableGlide/theming/fill-states.ts` —
  менять только синхронно с `code/table-token-states.ts`, защищено тестом.
- Второй генератор — токены «чернил» из CSS тем атомарки:
  `generators/theme-tokens/` (plain node, без зависимостей; спорные
  соответствия имён — в `report.md`).
- Статус интеграции и открытые вопросы: `INTEGRATION-STATUS.md`.
