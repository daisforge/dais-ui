# Генератор цветов таблицы (table-token-states)

Мини-проект внутри `generators/`: источник палитры «семантический токен ×
состояние» для TableCanvas/TableGlide. Это **инструмент разработчика** —
в сборку библиотеки не входит, в CI не запускается; потребители `@daisforge/ui`
о нём не знают. Результат его работы — обычный закоммиченный файл
`packages/ui-kit/src/components/TableGlide/theming/table-colors.generated.ts`.

## Структура: что чьё

| Что | Чьё | Правила |
|---|---|---|
| `code/` — формулы (`table-token-states.ts`), данные (`table-token-sources.ts`), тесты, `generate.ts`, `output.json` | **Дизайнер (источник истины)** | не править; при обновлении от дизайнера заменить целиком и прогнать тесты |
| `docs/`, `demo/`, `README.md` | Дизайнер | читать; README — модель, формулы, API |
| `emit-table-colors.ts` | **Наш слой интеграции** | палитра + временные значения для дыр тем → эмит `table-colors.generated.ts` |
| `INTEGRATION-STATUS.md` | Наш | статус/вопросы дизайнеру; временный, перед сливом во внутренний контур будет переработан |
| `package.json`, `tsconfig.json` | Наши | см. «Почему мини-проект изолирован» |

## Команды

```bash
cd generators/table-token-states
npm ci            # локальные devDeps: tsx, vitest, typescript (однократно)
npm test          # 17 тестов дизайнера — прогонять после любой замены code/
npm run typecheck # strict-проверка кода дизайнера её же флагами
npm run emit      # пересборка палитры → theming/table-colors.generated.ts
```

После `emit` прогнать в корне `npx nx test ui-kit`: тест
`theming/fill-states.test.ts` сверяет рантайм-копию формулы с палитрой
бит-в-бит.

## Почему мини-проект изолирован (ответ на «что за node_modules»)

1. **Код дизайнера — источник истины.** Мы обязуемся не править `code/*`,
   чтобы при каждом обновлении от дизайн-системы просто заменять файлы.
   Поэтому его нельзя подгонять под строгие флаги репозитория
   (`noUncheckedIndexedAccess` и др. его ломают) — у папки свой tsconfig.
2. **Свои devDeps** (`tsx` для запуска TS-скриптов, `vitest`, `typescript`) —
   их нет в корне репозитория; ставятся локально `npm ci`, в git не попадают
   (node_modules игнорируется корневым .gitignore), workspaces корня их не
   видят (`workspaces: ["packages/ui-kit"]`).
3. **Линтер репозитория папку не проверяет** (generators/ вне проектов nx) —
   это осознанно: стиль кода дизайнера не переписываем.

Что уедет во внутренний контур: только исходники папки (~15 файлов,
без node_modules). Вопрос «сокращать ли» (например, оставить только данные
и emit, а формулы брать из ui-kit `fill-states.ts`) — решение этапа
рефакторинга вместе с Рамилём; пока изоляция дешевле и безопаснее.

## Связанное

- Рантайм-копия fill-формулы: `packages/ui-kit/src/components/TableGlide/theming/fill-states.ts`
  (менять только синхронно с `code/table-token-states.ts`; защищено тестом).
- Второй генератор — токены «чернил» из CSS тем атомарки:
  `generators/theme-tokens/` (plain node, без зависимостей; спорные
  соответствия имён — `report.md`).
- Статус интеграции, нерешённые вопросы, план: `INTEGRATION-STATUS.md`.
- Демо дизайнера: `demo/table-states-prototype.html` (открывается локально).
