# Задачи по @daisforge/ui-mcp

План работ по итогам ревью индекса и тулов (индекс на момент ревью: 243 компонента, 77 фичей, 51 тип, `data/component-index.json` — 3.9 МБ).

Задачи упорядочены по приоритету. У каждой — измеримый критерий приёмки. Проверочные снипплеты запускаются из `packages/mcp-server/`.

Правила для исполнителя:

- Не менять публичные сигнатуры тулов без явной пометки в задаче — их знает уже написанный клиентский промпт.
- После правок индексера обязателен `npm run mcp:build-index` и повторный прогон `src/validate/validateIndex.ts` — он проверяет индекс против настоящих типов.
- Все изменения формата ответа отражать в `README.md` и `ARCHITECTURE.md`.

---

## Статус

| Коммит | Задача | Проверка приёмки |
|---|---|---|
| `a7246f6` | **T1** — `list_components` не отдаёт битый JSON | ✅ `JSON.parse` ок, 24913 симв., shown 237 / total 243 |
| `a800a5a` | **T4** — утечка DOM/ARIA-шума | ⚠️ шум 0.0% ✅, но компонентов с >50 пропсов — **12** при цели ≤8 |
| `967b259` | **T5** — компактная карточка `get_component` | ✅ max 2637 (≤4000), медиана 495 (≤1200) |
| _(не закоммичено)_ | **T14** — пополевой мёрдж own/vendor пропсов | ✅ `inheritedProps` с описанием 932/1727 (54%, цель ≥40%), 0 записей с `default: ""`/`description: ""` |
| _(не закоммичено)_ | **T13** — фолбэк `tryExtractViaComponentProps` в `resolveCompoundPart` | ⚠️ фолбэк добавлен и работает (1 ранее-пустая compound-часть резолвится); 3 compound-части всё ещё дают вложенный `Omit<` — другая причина (принтер типа теряет alias intersection), см. ARCHITECTURE.md §5 |
| _(не закоммичено)_ | **T11** — роли primary/part/internal | ✅ 177/43/23 (эталон 177/42/27 на 246 сырых записях, разница объясняется 3 доиндексерными коллизиями имён — см. README.md); все контрольные имена (`Col`, `AccordionItem`, `ToastProvider`...) остались `primary`; `parentComponent`/`relatedExports` заполнены у 100% |
| _(не закоммичено)_ | **T12** — дедуп compound-частей | ✅ все 10 пар (`DrawerDF/{Content,Header,Footer}`, `MassActions/Counter`, `Stories/Preview`, `FiltersActions/{FiltersButton,DotsIconButton,ListOfFilters,Tabs,TabItem}`) — 0 расхождений в props между top-level и compound-part путём |
| _(не закоммичено)_ | **T2** — description/category/keywords для 100% каталога | ✅ description/category/keywords: 0 missing из 243 (было 151/208/243); 10 ручных поисковых запросов — правильный компонент в топ-3 у всех 10; ⚠️ побочный эффект: `list_components({})` без фильтров теперь показывает ~120 из 177 `primary` (не регрессия — `truncationNotice`/`hasMore`/`limit`/`offset` работают, см. ARCHITECTURE.md §4.1/§5) |
| _(не закоммичено)_ | **T3** — реальные примеры вместо synthesized | ✅ `minimalUsage` вынесен и заполнен у 100% (было 0 — вообще не существовало отдельным полем); `examples[]` с `type: "synthesized"` — 0 (было 209); четыре источника вместо одного: `usage` (грep по монорепо, с проверкой импортов и compound dot-notation) — 207 примеров, `vendor` (curated `examples[]` из вендоренного снэпшота — и "свои", и найденные кросс-файловым сканом у чужих компонентов, найдены по ходу задачи — см. поправку ниже) — 210; доля компонентов с `full-code`/`usage`/`vendor` — **86.0% (209/243)** при цели ≥60% (было 14%/34) |

Побочный критерий T4 перепроверен после T13/T14 — без изменений: **12** компонентов с >50 собственными пропсами (было 16 → 12 после T4; T13/T14 не рассчитаны на сокращение этого числа, прогноз в предыдущей версии этого файла не подтвердился). Нужна отдельная работа — не входит в T13/T14.

Не начаты: **T6** (own-пропсы с `default` — работа не начата; побочный пункт 4 — пустые `default`/`description` у `inherited` — закрыт вместе с T14), **T7** (`TextField` начинается с `onClear, autoComplete, enterKeyHint` — 2 из 5 всё ещё DOM-ные), **T8**, **T9**, **T15**, **T10** (замер после всего — теперь после T6/T7/T9 тоже). T2 (`hint`) отдельно не трогали — T2 просила только description/category/keywords; `hint` остаётся 8/243, это T9-территория (disambiguation-подсказки между конкурирующими компонентами).

**Важная поправка по T3, обнаруженная при исполнении**: изначальная постановка называла источниками только curated Storybook-стори и грep по монорепо (`collectUsageExamples.ts`). Этого хватило на 56.0% (136/243) — ниже цели, разрыв структурный: этот чекаут не содержит `webpack-finportal-platform`/`webpack-project-finalheader` из CLAUDE.md, часть примитивов (`Row`, `Col`, `Card`, `Toast`) реально нигде не используется в имеющихся `packages/storybook`+`packages/vite-project`. Третий, изначально не учтённый источник — сам вендоренный снэпшот `vendor/atomic-mcp-data/**/<atomicBase>.json` (уже читается `mergeAtomicData.ts` ради `api.props`, см. T14) несёт собственное поле `examples[]: {title, snippet}` — готовый curated-код от атомарной команды, 71 из 77 файлов (92%) непустые. Подключение этого источника (`vendorExamples.ts`, с переписыванием импорта `@salutejs/sdds-finai` → `@daisforge/ui`) подняло итог до 75.3% — выше цели без единого нового грепа. Четвёртый источник, предложенный по ходу ревью: у compound-частей (`AccordionItem` и т.п.) нет своего файла в вендорном снэпшоте — `mergeAtomicData` для них не резолвит `atomicBase` вовсе, — но их реальное использование почти всегда показано ВНУТРИ примеров родителя (`Accordion.json` целиком построен вокруг `<AccordionItem>`). `vendorUsageExamples.ts` сканирует `examples[]` ВСЕХ вендорных файлов разом за такими "чужими" вхождениями — подняло итог до 86.0%. Подробности — `ARCHITECTURE.md` §1.8b.

**Остановились здесь**: T14 → T13 → T11 → T12 → T2 → T3 выполнены и закоммичены. Следующий шаг по порядку исполнения — **T6**/**T7** (можно параллельно — оба чисто код, не зависят друг от друга).

**Важная поправка по T2, обнаруженная при исполнении**: `_docs/meta/components-meta.json` (изначально названный целевым файлом для правок) — генерируемый build-артефакт (`npm run meta` из `generators/meta-info/generate-meta.js`), редактировать его напрямую нельзя — правки теряются при регенерации. Реальных редактируемых источника — два: `generators/meta-info/config/meta-config.json` (126 компонентов с собственным кодом в `ui-kit`) и новый `packages/mcp-server/vendor/atomic-curated-meta.json` (117 чистых реэкспортов атомов `@salutejs/sdds-finai`, у которых нет ни своего кода, ни Storybook-страницы — `generators/meta-info` их принципиально не видит). Подробности — `ARCHITECTURE.md` §1.5/§1.5a.

---

## T1. `list_components` без фильтров возвращает битый JSON

**Приоритет: критический. Тип: код.**

Полный ответ `list_components({})` — 29226 символов при `RESPONSE_BUDGET_CHARS = 25000`. `truncateForResponse` режет строку по символу, поэтому агент получает синтаксически невалидный JSON и теряет 20 компонентов из 243. Это первый вызов первого тула в любом сценарии.

Файлы: `src/tools/truncate.ts`, `src/tools/listComponents.ts`.

Что сделать:

1. В `truncate.ts` перестать резать сериализованную строку. Ввести `truncateList(items, budget)`: сериализовать поэлементно, добирать элементы, пока влезают, вернуть валидный объект с полями `items`, `shown`, `total`, `truncationNotice`. Строковый срез оставить только как аварийный фолбэк для нелистовых payload'ов и обязательно с валидным JSON на выходе (обрезать значение внутри поля, а не сам JSON).
2. В `listComponents` отдавать компактнее: `description` клипить до 120 символов, `formVariant` и `deprecated` не дублировать, если они выводимы.
3. Если после этого полный список всё ещё близок к бюджету — добавить `limit`/`offset` в схему тула и отдавать `total` + `hasMore`.

Приёмка:

```bash
node -e "
const {listComponents}=require('./dist/tools/listComponents.js');
const idx=require('./data/component-index.json');
const {truncateForResponse}=require('./dist/tools/truncate.js');
const s=truncateForResponse(listComponents(idx,{}));
JSON.parse(s.split('\n\n…')[0]); // не должно бросить
console.log('ok, chars', s.length);
"
```

- `JSON.parse` ответа любого тула при любых аргументах не бросает.
- `list_components({})` перечисляет все 243 компонента либо явно сообщает `total` и способ добрать остаток.

---

## T2. Каталог пустой: нет описаний, категорий, синонимов ✅ Выполнено

**Приоритет: критический. Тип: контент (данные) + немного кода.**

Было: `description` — 92 из 243, `category` — 35, `hint` — 8, `hasCuratedMeta` — 35. Для 62% компонентов каталог отдавал голое имя и `type`.

Последствие двойное. Во-первых, `list_components` не решал свою единственную задачу — выбор компонента под задачу. Во-вторых, `searchComponents.scoreComponent` начисляет очки за `hint` (+20), `description` (+10), `docs` (+4), `category` (+2) — почти все веса приходились на отсутствующие поля, и поиск вырождался в совпадение по имени, то есть в «угадай имя», ровно ту болезнь, которую он должен лечить.

**Файлы — правки по факту (не совпадает с изначальной постановкой):**

`_docs/meta/components-meta.json`, названный изначально целевым файлом, оказался генерируемым build-артефактом (`npm run meta` из `generators/meta-info/generate-meta.js` перезаписывает его целиком) — редактировать напрямую нельзя, правки теряются при регенерации. Реальных редактируемых источника — два, в зависимости от того, есть ли у компонента собственный код в `ui-kit`:

- `generators/meta-info/config/meta-config.json` — для 126 компонентов с собственной реализацией (было 36 куратированных, до T2 не хватало ещё 90). Резолвер `generators/meta-info/parsers/resolveComponent.js` до T2 требовал папку `packages/storybook/src/stories/<Name>/` — при её отсутствии компонент тихо выпадал из вывода генератора (скрытый баг: `{type:'simple', ...null}` даёт truthy объект, `if (!resolved) continue` не срабатывает, дальше падение в `processSimpleComponent` гасится try/catch). Пофикшено — при отсутствии папки теперь минимальная запись без `docs/api/stories` вместо потери компонента.
- `packages/mcp-server/vendor/atomic-curated-meta.json` (новый файл) — для 117 компонентов без единой строчки собственного кода (чистые реэкспорты `export {X} from '@salutejs/sdds-finai'`) — у них нет ни JSDoc, ни Storybook-страницы, `generators/meta-info` их принципиально не видит. Читается новым `src/indexer/mergeAtomicCuratedMeta.ts`, независимым от `mergeMeta.ts`.

Заодно перенесён в `meta-config.json` (`role: "part"`) T11-оверрайд `FiltersActionsTabs`/`FiltersActionsTabItem`, который раньше существовал только в сгенерированном файле и был бы стёрт первым же `npm run meta`.

Подробности пайплайна — `ARCHITECTURE.md` §1.5/§1.5a.

Что сделано:

1. Для всех 243 компонентов заполнен `description` — одна строка ≤100 символов, отвечающая на вопрос «когда его брать» (без пересказа имени).
2. Заполнена `category` для всех — три существующих значения (`"Локальные компоненты"` 213 / `"Композиции"` 16 / `"Формы"` 14), таксономия не расширялась (осознанное решение — не ломать контракт `meta-config.types.ts`).
3. Добавлено поле `keywords: string[]` (2–4 синонима задачи, ru/en) — в `ComponentMeta`/`ComponentRecord`/`AtomicCuratedMetaEntry` (`src/types.ts`), в `mergeMeta.ts`/`mergeAtomicCuratedMeta.ts`, в выдачу `get_component`/`search_components` (в скоринге — вес на уровне `hint`, +20); **не** прокинуто в `list_components` — см. побочный эффект ниже.
4. Черновики description/category/keywords сгенерированы 10 параллельными агентами по батчам ~25 компонентов, каждый читал реальный код (`ownFilePath`, `sourceFile`, Storybook-стори при наличии; для чистых реэкспортов — `inheritedProps` + вендоренный `summary` из `vendor/atomic-mcp-data`, без выдумывания поведения) и провалидирован автоматически (длина ≤100, запрещённая тавтология, keyword ≠ имени дословно, допустимые category) + выборочно вручную.

Побочный эффект (не баг, задокументирован в ARCHITECTURE.md §4.1/§5): `list_components({})` без фильтров теперь показывает ~120 из 177 `primary`-компонентов за один вызов (было близко к полному списку, пока `description`/`category` были почти везде пустыми) — с непустым описанием у 100% каталога полный список не помещается в `RESPONSE_BUDGET_CHARS`. `truncationNotice`/`hasMore`/`limit`/`offset` — рабочий путь добрать остаток, ровно механизм, который спроектировал T1.

Приёмка:

```bash
node -e "
const idx=require('./data/component-index.json');
const c=Object.values(idx.components).filter(x=>!x.error);
const miss=f=>c.filter(x=>!x[f]).map(x=>x.name);
['description','category','keywords'].forEach(f=>console.log(f,'missing:',miss(f).length, miss(f).slice(0,10).join(',')));
"
```

- ✅ `description`, `category`, `keywords` заполнены у 100% (0/243 missing по каждому полю).
- ✅ Ручной чек: 10 запросов «таблица с фильтрами», «загрузка файла», «выпадающий список», «date range», «тултип», «шаги визарда», «модальное окно», «уведомление», «автокомплит», «пагинация» — в топ-3 `search_components` присутствует правильный компонент у всех 10 (после точечной правки keywords для `Tooltip`/`TooltipBeta`/`Autocomplete`/`Pagination`/`Steps` — исходно борьба шла с транслитерацией: «тултип»/«автокомплит»/«пагинация» не встречались дословно ни в имени, ни в исходных keywords).

---

## T3. 209 из 243 компонентов имеют только синтезированный пример ✅ Выполнено

**Приоритет: высокий. Тип: код + контент.**

`finalizeExamples` (`src/indexer/buildIndex.ts:52`) при отсутствии curated-стори вызывает `synthesizeExample`, который для компонента без обязательных пропсов даёт `<Attach />` — средняя длина синтезированного примера по индексу 22 символа. Это не пример, а имя тега. При этом он попадает в `exampleTitles` карточки под именем «Минимальный пример», и агент тратит целый вызов `get_component_examples`, чтобы получить строку, которую уже знал из `importStatement`.

Файлы — четыре новых модуля вместо одного, изначальная постановка недооценила доступные источники (см. поправку в «Статус»): `src/indexer/synthesizeExample.ts` (переименован в `synthesizeMinimalUsage`), `src/indexer/collectUsageExamples.ts` (новый), `src/indexer/vendorExamples.ts` (новый), `src/indexer/vendorUsageExamples.ts` (новый), `src/indexer/mergeAtomicData.ts`, `src/indexer/buildIndex.ts`, `src/tools/getComponent.ts`, `src/types.ts`.

Что сделано:

1. Синтезированный пример вынесен из `examples[]` в отдельное поле `minimalUsage: string` компонента (`synthesizeMinimalUsage`, всегда вычислено) и отдаётся **прямо в карточке** `get_component`. `exampleTitles: []` теперь честно означает «примеров нет» — `nextSteps` в этом случае не предлагает звать `get_component_examples`.
2. Сбор реальных использований — `collectUsageExamples.ts`: однопроходный (не по разу на компонент) грep по `apps/**`+`packages/**` кроме `ui-kit`/`mcp-server` (список директорий считается динамически, не хардкодится), разбор через сырой `ts.createSourceFile` (без типов — только синтаксис). Два уточнения сверх изначальной постановки, найденные при исполнении:
   - **Проверка импорта, не текста тега** — JSX-тег засчитывается как usage, только если он в этом же файле реально импортирован из `@daisforge/ui`/`@daisforge/ui/*`/`@ui-kit/*` (с поддержкой `as`-алиасов и `import * as`). Без этого частые имена локальных styled-components в Storybook-стори (`Container`, `Card`, `Toast`) давали бы ложные "usage"-примеры — код, который выглядит как настоящее использование, но к реальному компоненту отношения не имеет.
   - **Compound-части через dot-notation** — `<DrawerDF.Content>`/`<ModalDF.Header>` резолвятся в плоское имя (`DrawerDFContent`), под которым эта compound-часть лежит в индексе отдельной записью (T12). Без этого все 10 T12-пар были бы обречены на 0 примеров — плоским именем их в реальном коде не пишут.
   - 1–2 самых «богатых» (по числу атрибутов JSX-тега) вхождения на компонент, по возможности из разных файлов, обрезка до ~700 символов, `type: 'usage'` с полем `sourceFile` (путь относительно корня монорепо).
3. Третий источник, не входивший в изначальную постановку — `vendorExamples.ts`: `mergeAtomicData.ts` уже читал вендоренный снэпшот `vendor/atomic-mcp-data/**/<atomicBase>.json` ради `api.props` (T14), но не замечал его собственное поле `examples[]: {title, snippet}` — готовый curated-код от атомарной команды (71 из 77 файлов непустые, 440 сниппетов). `finalizeVendorExamples` переписывает импорт (`@salutejs/sdds-finai` → `@daisforge/ui`, иначе пример выглядит рабочим, но не собирается), отбирает до 2 сниппетов покомпактнее и дедуплицированных по заголовку, `type: 'vendor'`.
4. Четвёртый источник, предложенный по ходу ревью — `vendorUsageExamples.ts`: у compound-частей (`AccordionItem` и т.п.) нет собственного файла в вендорном снэпшоте, `mergeAtomicData` для них не резолвит `atomicBase` вовсе — но их реальное использование почти всегда показано ВНУТРИ примеров родителя (`Accordion.json` целиком построен вокруг `<AccordionItem>` — проверено: все 10 examples его содержат). Сканирует `examples[].snippet` ВСЕХ вендорных файлов разом тем же приёмом, что `collectUsageExamples.ts` — разбор через `ts.createSourceFile`, резолв тега по импортам сниппета из `@salutejs/sdds-finai(/beta)`, не по тексту. Результат домешивается в те же `vendorExampleSnippets`, что и "свои" сниппеты, — `finalizeVendorExamples` обрабатывает оба источника одинаково.
5. `ExampleKind` дополнен `'usage'` и `'vendor'`. `finalizeExamples` больше не выбирает один источник по приоритету — собирает примеры из всех сразу (curated + usage + vendor: разные компоненты покрыты разными источниками, а не строгой иерархией), сортирует `full-code → usage → vendor → args-only` и режет до 4 суммарно. Сортировка сделана один раз в индексере (`buildIndex.ts`), а не в `get_component_examples` — так тот же порядок бесплатно достаётся и `get_component.exampleTitles`.

Подробности пайплайна — `ARCHITECTURE.md` §1.8/§1.8a/§1.8b.

Приёмка:

- ✅ Доля компонентов, у которых есть хотя бы один пример типа `full-code`/`usage`/`vendor`, — **86.0% (209/243)** при цели ≥60% (было 14%/34). Проход только curated+usage дал 56.0% — ниже цели по структурной причине чекаута (нет `webpack-finportal-platform`/`webpack-project-finalheader` из CLAUDE.md; `.mdx`-документация как источник проверена и отклонена — `ts.createSourceFile` в recovery-режиме путает JSX в markdown-прозе с настоящими примерами, проверено на `IconSvgSprite/iconSvgSprite.mdx`); + "свои" вендорные файлы — 75.3%; + кросс-файловый скан вендора — 86.0%.
- ✅ `get_component_examples` не возвращает записей типа `synthesized` — типа `synthesized` в `ExampleKind` больше не существует вовсе (0 из 243 в `examples[]`, было 209).
- ✅ В карточке `get_component` присутствует `minimalUsage` — у 100% записей (0 без него).

---

## T4. Утечка DOM/ARIA-шума в собственные пропсы

**Приоритет: высокий. Тип: код.**

Денилист (`src/indexer/htmlAttributeDenylist.ts:82`) сравнивает текст типа дословно с `AllHTMLAttributes & AriaAttributes & DOMAttributes`. Подход верный, но промахивается везде, где TypeScript печатает алиас, а не разложенный тип: `Booleanish`, `React.Key`, `React.LegacyRef`, `React.HTMLInputAutoCompleteAttribute`, `React.ReactNode` в разных нормализациях.

Замер: ~19% всех собственных пропсов индекса (836 из 4358) — DOM-шум. У худших компонентов это половина: `Attach` 86 из 170, `MassActionsButton` 85 из 176, `Accordion` 82 из 161. 16 компонентов имеют более 50 «собственных» пропсов.

Файлы: `src/indexer/htmlAttributeDenylist.ts`, точка вызова — `src/indexer/parseComponent.ts:416`.

Что сделать:

1. Добавить безусловный дроп по шаблонам имени, независимо от типа: `/^aria-/`, `/^data-/`, `/^on[A-Z].*Capture$/`.
2. Добавить точный список безусловно шумных имён: `key`, `ref`, `dangerouslySetInnerHTML`, `suppressContentEditableWarning`, `suppressHydrationWarning`, `contentEditable`, `inputMode`, `itemProp`, `itemScope`, `itemType`, `itemID`, `itemRef`, `nonce`, `is`, `about`, `datatype`, `inlist`, `prefix`, `property`, `resource`, `typeof`, `vocab`, `security`, `unselectable`, `radioGroup`, `results`, `translate`, `spellCheck`.
3. Расширить `normalizeElementGeneric` до общей нормализации алиасов перед сравнением: разворачивать `Booleanish`, снимать префикс `React.`, схлопывать `| undefined`.
4. Осторожно: имена вроде `disabled`, `size`, `value`, `checked`, `role`, `tabIndex`, `hidden`, `draggable`, `color`, `autoComplete`, `enterKeyHint` дизайн-система переопределяет — их нельзя класть в безусловный список, они должны проходить через сравнение типов. `validateIndex` поймает, если что-то нужное выкинули.

Приёмка:

```bash
node -e "
const idx=require('./data/component-index.json');
const c=Object.values(idx.components).filter(x=>!x.error);
const bad=p=>/^(aria-|data-)|Capture\$/.test(p.name)||['key','ref','contentEditable','dangerouslySetInnerHTML'].includes(p.name);
const n=c.flatMap(x=>x.props||[]).filter(bad).length, t=c.flatMap(x=>x.props||[]).length;
console.log('noise',n,'of',t,(100*n/t).toFixed(1)+'%');
console.log('>50 props:',c.filter(x=>(x.props||[]).length>50).map(x=>x.name+':'+x.props.length).join(', '));
"
```

- Доля шумных пропсов — 0%.
- Компонентов с более чем 50 собственными пропсами — не больше 8 (сейчас 16); оставшиеся — реально широкие API вроде `TableGlide`.
- `npx tsc -p probe.tsconfig.json` на перегенерированном `.probe/validate.ts` проходит без ошибок (ничего нужного не потеряли).

---

## T5. Карточка `get_component` не компактная

**Приоритет: высокий. Тип: код. Зависит от T4.**

`getComponent` кладёт в `ownProps` все собственные пропсы строками `name?: type`. Для `Attach` карточка весит 20219 символов при полном `get_component_props` в 42997. То есть «компактная карточка», задуманная как дешёвый шаг выбора, стоит половину полного ответа — экономия от расщепления тулов съедена.

T4 уберёт примерно половину объёма, но структурная проблема останется: `TableGlideInstance` имеет 153 честных пропса.

Файлы: `src/tools/getComponent.ts`, `src/tools/shared.ts`.

Что сделать:

1. В `ownProps` оставлять только required-пропсы плюс до 10 значимых необязательных (значимые = имеющие `description`, не `deprecated`). Остальные отдавать числом в `ownPropsCount` и явной подсказкой в `nextSteps`.
2. `summarizeProp` — клипить текст типа до 80 символов с многоточием; длинные union-литералы в карточке не нужны.
3. Убрать из карточки поля, которые агенту нечего решать: `wrappedBy`, `formVariant`, `scope` оставить (они влияют на выбор), `atomicMcpVersion` и подобное — нет.

Приёмка:

```bash
node -e "
const {getComponent}=require('./dist/tools/getComponent.js');
const idx=require('./data/component-index.json');
const sizes=Object.keys(idx.components).map(n=>[n,JSON.stringify(getComponent(idx,{name:n})).length]).sort((a,b)=>b[1]-a[1]);
console.log('max',sizes[0],'p95',sizes[Math.floor(sizes.length*0.05)]);
"
```

- Карточка любого компонента — не больше 4000 символов.
- Медиана — не больше 1200.

---

## T6. Нет значений по умолчанию у собственных пропсов

**Приоритет: средний. Тип: код.**

В `PropRecord` (`src/types.ts`) поля `default` нет вовсе. У `InheritedPropRecord` оно есть, но в вендоренном снэпшоте заполнено пустой строкой во всех проверенных выборках.

Дефолты — основная причина, по которой агент пишет пропсы, которые писать не надо: не зная, что `size` по умолчанию `"m"`, он проставляет его явно в каждом вызове.

Файлы: `src/types.ts`, `src/indexer/parseComponent.ts` (`extractPropsFromType`, около строки 401).

Что сделать:

1. Добавить `default?: string` в `PropRecord`.
2. Извлекать из деструктуризации параметров функции-компонента: `({ size = 'm', view = 'default', ...rest })` — самый распространённый в кодовой базе источник. Резолвить через ts-morph по `ObjectBindingPattern` параметра.
3. Вторым источником — тег `@default` в JSDoc пропса, если есть.
4. Пустые строки в `InheritedPropRecord.default` вычищать в `mergeAtomicData` — поле должно отсутствовать, а не быть пустым: пустая строка читается агентом как «дефолт — пустая строка».

Приёмка:

- Доля собственных пропсов с непустым `default` — не ниже 25%.
- Ни одного пропса с `default: ""` в индексе.

---

## T7. Порядок и качество описаний пропсов

**Приоритет: средний. Тип: код.**

Порядок пропсов повторяет порядок резолва типа. У `TextField` первым идёт `onClear`, вторым `contentEditable`, третьим `aria-autocomplete` — то есть самое важное перемешано со служебным. При обрезке по бюджету теряется случайное подмножество, а не наименее нужное.

Плюс 47% пропсов не имеют описания вовсе, а заметная часть остальных несёт переписанные доки React DOM («Indicates the current "checked" state of checkboxes...») — это токены на ветер.

Файлы: `src/indexer/parseComponent.ts`, `src/tools/getComponentProps.ts`.

Что сделать:

1. Сортировать пропсы при сборке индекса: `required` → собственные с описанием → собственные без описания → `deprecated` в конец. Внутри групп — по алфавиту, для стабильности диффов индекса.
2. Отбрасывать описания, дословно совпадающие с текстом из React-типизаций (тот же приём, что и в денилисте: построить карту `имя → описание` из `AllHTMLAttributes & AriaAttributes` и сравнивать). После T4 таких останется мало, но `role`/`tabIndex`/`color` переопределяются и проходят фильтр с чужим описанием.
3. `inheritedProps` в ответе `get_component_props` сортировать так же.

Приёмка:

- Первые 5 пропсов у `TextField`, `Select`, `Button`, `DrawerDF` — осмысленные пропсы дизайн-системы, не DOM.
- Ни одного описания, дословно совпадающего с React DOM.

---

## T8. Схлопнуть одноразовые тулы в ресурсы

**Приоритет: низкий. Тип: код. Меняет публичный контракт.**

`list_categories` и `get_installation_guide` отдают информацию, которая нужна один раз за сессию и не зависит от аргументов. Каждый из них занимает слот в описании тулов, который агент читает при каждом запросе.

Дополнительно: `get_installation_guide` содержит устаревшее имя пакета `@sber-digital-finance-ui/ui-kit` (проблема в курированном `components-meta.json`, известна и зафиксирована в `ARCHITECTURE.md`).

Что сделать:

1. Починить имя пакета в `_docs/meta/components-meta.json` — это делается независимо от остального и первым.
2. Перевести оба на MCP resources (`server.registerResource`). Список категорий продублировать в описание тула `list_components` — он там нужен как значения параметра `category`.
3. Итог: 11 тулов → 9.

Приёмка: `get_installation_guide` не упоминает `@sber-digital-finance-ui`; ресурсы читаются через MCP Inspector.

---

## T9. Правила выбора между конкурирующими компонентами

**Приоритет: средний. Тип: контент.**

В библиотеке сосуществуют `Table`, `TableCanvas`, `TableGlide`, `TableGlideInstance`, `DataEditor`; у форм — пары `Select`/`FormSelect`, `DatePicker`/`FormDatePicker` и так далее. Флаг `legacy` есть, но он говорит только «этот плохой» и не говорит «бери вместо него вот этот». Это ровно то место, где агент выбирает неправильно, и ровно то, чего нет ни в `.d.ts`, ни в исходниках.

Что сделать:

1. Добавить в `ComponentMeta` поле `supersededBy?: string` и `chooseWhen?: string` (одна строка: при каких условиях брать именно этот из группы).
2. Заполнить для всех `legacy`-компонентов и всех групп-конкурентов.
3. Отдавать оба поля в `get_component` и в результатах `search_components` — именно там происходит выбор.
4. Отдельно рассмотреть поле `gotchas?: string[]` — 1–3 строки антипаттернов на компонент, для тех, где есть неочевидные ограничения (`Modal` вне `Portal`, обязательные пары компонентов, взаимоисключающие пропсы). Заполнять не для всех, а только там, где ошибка реально частая.

Приёмка: у каждого компонента с `legacy: true` заполнен `supersededBy`; у каждой группы из 2+ конкурирующих компонентов заполнен `chooseWhen`.

---

## T10. Замкнуть A/B-метрику

**Приоритет: средний. Тип: инфраструктура. Делать после T1–T5.**

`.probe/ab/` (`withMcp.tsx`, `withMcp2.tsx`, `withSource.tsx`) — правильная идея, но пока это файлы для сравнения глазами. `validateIndex` проверяет, что индекс не врёт; он не проверяет, что индекс помогает.

Что сделать:

1. Собрать 15–20 задач на генерацию кода разной сложности: одиночный компонент, форма с валидацией, таблица с фильтрами и массовыми действиями, композиция дровера с таблицей внутри.
2. Для каждой — прогон агента дважды: с MCP и без (только исходники и `node_modules`).
3. Считать три числа: доля результатов, проходящих `tsc`; количество выдуманных пропсов и импортов на задачу; количество вызовов тулов до первой строчки сгенерированного кода.
4. Зафиксировать базовую линию до правок T1–T5 и повторить после. Если третье число не падает, а первое не растёт — набор тулов подобран неверно, и это повод пересобрать состав, а не докручивать данные.

Приёмка: скрипт в `.probe/`, воспроизводимый одной командой; таблица «до/после» в `ARCHITECTURE.md`.

---

## T11. Каталог не различает основные компоненты и части основных

**Приоритет: высокий. Тип: код + контент.**

Агент выбирает из 243 записей, хотя «основных» компонентов (со своей папкой) в библиотеке ~130, а остальное — вспомогательные части этих основных. `list_components` не даёт понять, что `ModalDFHeader` — слот внутри `ModalDF`, а `CanvasRect` — внутренний примитив рендеринга, который в прикладном коде не используется никогда.

Замеры: 246 обнаруженных экспортов из 126 папок с barrel-файлом; в 121 папке есть экспорт, буквально совпадающий с именем папки, ещё 5 папок без совпадения (`Segment`, `Skeleton`, `FormDatePickers`, `FormRadioGroupBox`, `FormSegments`).

Важно: правило «оставить только `name === folderName`» (133 записи) — **неверное**. Оно вырезало бы `Col`, `Row`, все 13 компонентов типографики (`BodyM`, `TextL`…), `AccordionItem`, `DatePickerRange`, `ToastProvider` — то, что агент выбирает штатно. Проверенная трёхролевая эвристика даёт **177 primary / 42 part / 27 internal** и на контрольной выборке не теряет ни одного нужного компонента.

Отдельно учесть: размер списка — не главная причина, по которой каталог плох. `description` заполнен у 92 из 243 (T2). Список из 177 голых имён немногим лучше 243 голых имён — T11 и T2 дают эффект только вместе.

Сигнал уже есть в коде, но теряется: `discoverComponents()` возвращает `folderName` в `ComponentEntry` (`src/indexer/discoverComponents.ts:12`), а `src/indexer/buildIndex.ts:76` не переносит его в `WorkingComponentRecord`.

Файлы: `src/types.ts`, `src/indexer/buildIndex.ts`, `src/indexer/mergeMeta.ts`, `src/tools/listComponents.ts`, `src/tools/getComponent.ts`, `src/tools/searchComponents.ts`.

Что сделать:

1. Прокинуть `folderName` из `ComponentEntry` в `WorkingComponentRecord`/`ComponentRecord`.
2. Добавить `role: 'primary' | 'part' | 'internal'`, вычисляемую в новом модуле `src/indexer/classifyRole.ts`:
   - `name === folderName` → `primary`;
   - иначе имя из списка внутренних (`/Styled$/`, `/^Canvas/`, `/^CellEditor/`, `RootBridge`, `DrawBatcher`, `TextCellEntry*`, `NoRowsFallback`, `ControlBlockSwitch`, `TableFilterSelectListItem`, `RedDot`, `SplitIconButton`) → `internal`;
   - иначе имя начинается с `folderName` И остаток совпадает со структурным слотом (`Header|Footer|Content|Body|Divider|ServiceButtons|Left|Main|Bullets?|BackIconButton|DotsIconButton|IconButtonBack|IconButtonDots|Preview|ListOfFilters|FiltersButton|ToggleButton`) → `part`;
   - иначе → `primary`.
3. Разрешить курируемый оверрайд `role` через `_docs/meta/components-meta.json` — тем же принципом «curated wins over heuristic», что уже реализован в `src/indexer/mergeMeta.ts`. Спорные случаи для ручной вычитки: `FiltersActionsTabs`, `FiltersActionsTabItem`, `DataEditor`, `TableGlideInstance`, `MassActionsButton`, `TabsController`, `CellTextbox*`.
4. Добавить `parentComponent?: string` (для `part`/`internal` — имя владельца папки) и `relatedExports?: string[]` на карточку `primary`-компонента, чтобы части не стали недостижимы.
5. `list_components` по умолчанию отдаёт только `role: 'primary'`; новый параметр `role?: 'primary'|'part'|'internal'|'all'`. В описании тула явно сказать, что части доступны через карточку родителя.
6. `search_components` **по роли не фильтровать** — там агент ищет по конкретной потребности и может искать именно `ModalDFHeader`. Достаточно понижающего множителя для `internal` по аналогии с `LEGACY_PENALTY_FACTOR`, не исключения.

Приёмка:

```bash
node -e "
const idx=require('./data/component-index.json');
const c=Object.values(idx.components).filter(x=>!x.error);
const by=r=>c.filter(x=>x.role===r).length;
console.log('primary',by('primary'),'part',by('part'),'internal',by('internal'));
console.log('без role:',c.filter(x=>!x.role).length);
['Col','Row','BodyM','AccordionItem','ToastProvider','DatePickerRange','RadioGroup','ListItem']
  .forEach(n=>console.log(n,'->',idx.components[n]&&idx.components[n].role));
"
```

- `role` заполнена у 100% неошибочных записей; ни один контрольный компонент не оказался `part`/`internal`.
- `list_components({})` возвращает ~177 записей вместо 243; `list_components({role:'all'})` — все.
- У каждого `part`/`internal` заполнен `parentComponent`; у каждого родителя — `relatedExports`.

---

## T12. Compound-части дублируются в индексе

**Приоритет: средний. Тип: код. Связана с T11.**

10 записей присутствуют одновременно как top-level компонент и как элемент `compoundParts` родителя: `DrawerDF/{Content,Header,Footer}`, `MassActions/Counter`, `Stories/Preview`, `FiltersActions/{FiltersButton,DotsIconButton,ListOfFilters,Tabs,TabItem}`. Это два независимых пути резолва одного типа, дающих разный результат, и двойной расход бюджета ответа.

Файлы: `src/indexer/buildIndex.ts`, `src/tools/getComponent.ts`, `src/tools/getComponentProps.ts`.

Что сделать:

1. После сборки записей связать пары: если `${parent.name}${part.name}` совпадает с именем top-level записи — проставить ей `compoundPartOf: { component, part }`.
2. В карточке такой записи вместо повторной выдачи пропсов — ссылка на `get_component_props({ name: parent, part })`.
3. Проверить, какой из двух путей резолва даёт более полные пропсы, и оставить его источником истины — не собирать один и тот же тип дважды.

Приёмка: ни одна пара «top-level ↔ compoundPart» не отдаёт два разных набора пропсов; `JSON.parse` ответов не ломается.

---

## T13. `resolveCompoundPart` не имеет фолбэка через `ComponentProps`

**Приоритет: средний. Тип: код.**

`resolveCompoundPart` (`src/indexer/parseComponent.ts:703`) пробует только `findPropsDeclaration` → `findLocalTypeDeclaration` → `findPropsDeclFromSignature`, но **не** вызывает `tryExtractViaComponentProps` — финальный фолбэк, который для top-level компонентов подключён на `src/indexer/parseComponent.ts:788`.

Результат: у `ModalDFHeader.badge` в индексе лежит нечитаемый сырой тип на 400 символов (`((((Omit<Omit<PropsType<{ view: {...`), бесполезный агенту и съедающий бюджет ответа.

Файлы: `src/indexer/parseComponent.ts`.

Что сделать: добавить `tryExtractViaComponentProps(localDecl)` последним звеном цепочки в `resolveCompoundPart`, по аналогии с `parseComponent`.

Приёмка:

- Ни у одной compound-части нет пропса, чей `type` начинается с `((((Omit<`.
- `npx tsc -p probe.tsconfig.json` на перегенерированном `.probe/validate.ts` проходит без ошибок.

---

## T14. `mergeAtomicData` уничтожает описания и `required`, полученные из ts-morph

**Приоритет: высокий. Тип: код.**

`mergeAtomicData` (`src/indexer/mergeAtomicData.ts:83`) выкидывает из `props[]` всё, что нашлось в `inheritedProps` по имени. Замысел верный — иначе у чистых реэкспортов список задваивался бы, — но вендорная запись **строго беднее** нашей.

Замер вендорного снэпшота: 1491 проп, из них **0 с описанием, 0 с дефолтом, 0 с `required: true`**. Причина на их стороне: `PropsTable` в `generateIndexFiles.mjs` (репозиторий `plasma/website/sdds-finai-docs`) кладёт в текст только `{name, type}`.

Замер потерь на выборке из 40 wrapper-компонентов: дедуп удалил 749 own-пропсов, из них **454 имели реальное русское описание** (`Autocomplete.value` → «Значение поля ввода.», `Autocomplete.filter` → «Коллбэк фильтра подсказок.») и 8 имели `required: true`. Всё это заменено пустыми строками.

Файлы: `src/indexer/mergeAtomicData.ts`, `src/types.ts`.

Что сделать:

1. Вместо удаления own-пропса — пополевой мёрдж, где непустое значение выигрывает: `description`/`required` берём из own (ts-morph), список пропсов и текст типа — из вендора.
2. Пустые `default: ""` / `description: ""` из вендора не записывать вовсе — поле должно отсутствовать, а не быть пустым (пересекается с пунктом 4 задачи T6).
3. Отметить в `ARCHITECTURE.md` (§1.6), что вендорный снэпшот — источник *списка* пропсов и чистых текстов типов, а не описаний.

Приёмка:

```bash
node -e "
const idx=require('./data/component-index.json');
const all=Object.values(idx.components).filter(x=>!x.error).flatMap(x=>x.inheritedProps||[]);
console.log('inherited всего:',all.length);
console.log('  с описанием:',all.filter(p=>p.description).length);
console.log('  с default:\"\":',all.filter(p=>p.default==='').length);
"
```

- Доля `inheritedProps` с непустым `description` — не ниже 40% (сейчас 0%).
- Ни одного `default: ""` и `description: ""` в индексе.

---

## T15. Вендорный снэпшот покрывает 77 атомов из 126 wrapper'ов

**Приоритет: низкий. Тип: инфраструктура.**

37 компонентов помечены `atomicDataMissing: true` — для их `atomicBase` нет файла в снэпшоте (`CalendarBase`, `DatePickerRange`, `Divider`, `DrawerHeader`…). Снэпшот содержит 73 компонента + 4 beta.

Важно для оценки приоритета: расширение снэпшота **не даст прироста по качеству данных** — вендор не несёт ни описаний, ни дефолтов, ни `required` (см. T14), а собственный фолбэк `tryExtractViaComponentProps` для этих же компонентов уже отдаёт настоящие русские описания и корректный `required`. Проверено на `CalendarBase`: `value` — `required: true`, «Выбранное значение.». Ценность задачи — унификация источника и чистые тексты типов, а не полнота данных.

Что сделать: перегенерировать снэпшот у атомарной команды (`npm run generate-mcp-data` в `plasma/website/sdds-finai-docs`) и перевендорить (`npm run mcp:vendor-atomic -- --source …`); зафиксировать в `ARCHITECTURE.md`, какие атомы принципиально не имеют отдельной страницы (compound-части `Drawer` и т.п.).

Приёмка: число записей с `atomicDataMissing: true` уменьшилось; ни один компонент не потерял пропсы после перевендоринга.

---

## Порядок исполнения

~~T1~~ → ~~T4~~ → ~~T5~~ → ~~T14~~ → ~~T13~~ → ~~T11~~ → ~~T12~~ → ~~T2~~ → ~~T3~~ (86.0% при цели 60%, см. «Статус») → **T6, T7** (можно параллельно) → T9 → T8 → T15 → T10 (замер после всего).

Первые девять выполнены (см. «Статус»). Остаток начинается с T6/T7. Пояснение к порядку:

- **T14 и T13 шли первыми**: чистый код, немедленный эффект на качество пропсов, не зависели от контентных задач. Побочный критерий T4 перепроверен после них — без изменений (12, см. «Статус»), нужна отдельная работа.
- **T11 стоит перед T2**: контентная вычитка описаний должна идти уже по разделённому каталогу, чтобы не тратить усилия на 23 `internal`-записи. Сами по себе T11 и T2 дали эффект только вместе — 177 голых имён были бы немногим лучше 243 голых имён.
- **T3 — после T11/T12/T2**: compound-dot-notation в usage-примерах опирается на T12-пары (какие плоские имена вообще искать), а сама формулировка задачи («лучший доступный источник примеров») предполагала уже разделённый по ролям и описанный каталог, не сырой список.
- **T15** — перед финальным замером T10.

T9 и контентная часть T11 (оверрайды `role`) — контентные, их можно вести параллельно с кодовыми задачами: они правят `generators/meta-info/config/meta-config.json`/`packages/mcp-server/vendor/atomic-curated-meta.json` (см. поправку в T2), а не `src/`.
