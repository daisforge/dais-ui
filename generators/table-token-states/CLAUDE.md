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
- `package.json`, `tsconfig.json`, `.gitignore` — локальная инфраструктура.

## Команды

```bash
cd generators/table-token-states
npm ci            # локальные devDeps: tsx, vitest, typescript, prettier (однократно)
npm test          # тесты дизайнера — прогонять после любой замены code/
npm run typecheck # strict-проверка всего TS папки (tsc -p tsconfig.json)
npm run emit      # пересборка палитры → theming/table-colors.generated.ts
npm run format    # prettier по папке + ../theme-tokens (есть и format:check)
```

После `emit` прогнать в корне `npx nx test ui-kit`: тест
`theming/fill-states.test.ts` сверяет рантайм-копию формулы с палитрой
бит-в-бит.

## Почему мини-проект изолирован

1. Код `code/*` не подгоняется под строгие флаги репозитория
   (`noUncheckedIndexedAccess` и др. его ломают) — у папки свой `tsconfig.json`
   с флагами из её же скрипта typecheck; иначе потеряется возможность
   заменять файлы 1-в-1 при обновлениях от дизайн-системы.
2. Свои devDeps (`tsx`, `vitest`, `typescript`) — их нет в корне репозитория;
   ставятся локально `npm ci`, в git не попадают, workspaces корня их не видят.
3. Линтер репозитория папку не проверяет (generators/ вне проектов nx) —
   осознанно, по той же причине неприкосновенности кода.

## Связанное

- Рантайм-копия fill-формулы:
  `packages/ui-kit/src/components/TableGlide/theming/fill-states.ts` —
  менять только синхронно с `code/table-token-states.ts`, защищено тестом.
- Второй генератор — токены «чернил» из CSS тем атомарки:
  `generators/theme-tokens/` (plain node, без зависимостей; спорные
  соответствия имён — в `report.md`).
- Статус интеграции и открытые вопросы: `INTEGRATION-STATUS.md`.
