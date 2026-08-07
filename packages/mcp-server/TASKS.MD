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

Не начаты: **T2** (description 92/243, category 35/243, keywords 0, hint 8), **T3** (209 synthesized-примеров, `minimalUsage` нет, реальные примеры у 12% при цели 60%), **T6** (0 own-пропсов с `default`, 1727 `inherited` с `default: ""`), **T7** (`TextField` начинается с `onClear, autoComplete, enterKeyHint` — 2 из 5 всё ещё DOM-ные), **T8**, **T9**, **T10**, **T11**–**T15**.

**T4 закрыт не полностью**: основной критерий (0% шума) достигнут, побочный — «компонентов с >50 собственными пропсами не больше 8» — нет, сейчас 12 (было 16). Отдельной работы не требует: остаток частично закроется T13 и T14, перепроверить после них.

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

## T2. Каталог пустой: нет описаний, категорий, синонимов

**Приоритет: критический. Тип: контент (данные), не код.**

Текущее покрытие: `description` — 92 из 243, `category` — 35, `hint` — 8, `hasCuratedMeta` — 35. Для 62% компонентов каталог отдаёт голое имя и `type`.

Последствие двойное. Во-первых, `list_components` не решает свою единственную задачу — выбор компонента под задачу. Во-вторых, `searchComponents.scoreComponent` начисляет очки за `hint` (+20), `description` (+10), `docs` (+4), `category` (+2) — почти все веса приходятся на отсутствующие поля, и поиск вырождается в совпадение по имени, то есть в «угадай имя», ровно ту болезнь, которую он должен лечить.

Файлы: источник — курированный `_docs/meta/components-meta.json` (читается `src/indexer/mergeMeta.ts`). Правки вносить туда, а не в индексер.

Что сделать:

1. Для всех 243 компонентов заполнить `description` — одна строка назначения, максимум 100 символов, отвечающая на вопрос «когда его брать». Не пересказ имени: «Attach — компонент Attach» бесполезен.
2. Заполнить `category` для всех — из существующего набора категорий (`list_categories` покажет текущий).
3. Добавить поле `keywords: string[]` — 2–4 синонима на русском и английском, включая формулировки задачи, а не имени: `Calendar` → `["выбор даты", "date range", "календарь"]`. Прокинуть его в `ComponentMeta`/`ComponentRecord` (`src/types.ts`), в `mergeMeta.ts`, в выдачу `list_components`/`get_component` и в скоринг `searchComponents` с весом на уровне `hint` (+20).
4. Черновик описаний и keywords можно сгенерить по исходникам компонентов (JSDoc, имена пропсов, соседние стори) — но вычитать вручную, ошибка здесь дороже пропуска.

Приёмка:

```bash
node -e "
const idx=require('./data/component-index.json');
const c=Object.values(idx.components).filter(x=>!x.error);
const miss=f=>c.filter(x=>!x[f]).map(x=>x.name);
['description','category','keywords'].forEach(f=>console.log(f,'missing:',miss(f).length, miss(f).slice(0,10).join(',')));
"
```

- `description`, `category`, `keywords` заполнены у 100% неошибочных компонентов.
- Ручной чек: 10 запросов вида «таблица с фильтрами», «загрузка файла», «выпадающий список», «date range», «тултип», «шаги визарда» — в топ-3 `search_components` присутствует правильный компонент.

---

## T3. 209 из 243 компонентов имеют только синтезированный пример

**Приоритет: высокий. Тип: код + контент.**

`finalizeExamples` (`src/indexer/buildIndex.ts:52`) при отсутствии curated-стори вызывает `synthesizeExample`, который для компонента без обязательных пропсов даёт `<Attach />` — средняя длина синтезированного примера по индексу 22 символа. Это не пример, а имя тега. При этом он попадает в `exampleTitles` карточки под именем «Минимальный пример», и агент тратит целый вызов `get_component_examples`, чтобы получить строку, которую уже знал из `importStatement`.

Файлы: `src/indexer/synthesizeExample.ts`, `src/indexer/buildIndex.ts`, `src/tools/getComponent.ts`, `src/tools/getComponentExamples.ts`, `src/types.ts`.

Что сделать:

1. Вынести синтезированный пример из `examples[]` в отдельное поле `minimalUsage: string` компонента и отдавать его **прямо в карточке** `get_component`. Тогда `exampleTitles: []` честно означает «примеров нет», и агент не тратит вызов впустую.
2. Добавить в индексер сбор реальных использований: грепом по приложениям монорепо (`apps/**`, `packages/**` кроме `ui-kit`) найти JSX-вхождения компонента, взять 1–2 самых «богатых» (максимум различных пропсов), обрезать до разумного размера, пометить `type: 'usage'` с полем `sourceFile`. Это лучший доступный источник примеров: код заведомо компилируется и отражает реальные паттерны применения, в отличие от Storybook, покрывающего 35 компонентов.
3. `ExampleKind` дополнить `'usage'`. В `get_component_examples` сортировать: `full-code` → `usage` → `args-only`.

Приёмка:

- Доля компонентов, у которых есть хотя бы один пример типа `full-code` или `usage`, — не ниже 60% (сейчас 14%).
- `get_component_examples` не возвращает записей типа `synthesized`.
- В карточке `get_component` присутствует `minimalUsage`.

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

~~T1~~ → ~~T4~~ → ~~T5~~ → **T14 → T13 → T11 → T12** → T2 и T3 (объёмные, содержательные, дают эффект на качество выбора) → T6, T7 → T9 → T8 → T15 → T10 (замер после всего).

Первые три выполнены (см. «Статус»). Остаток начинается с T14. Пояснение к порядку:

- **T14 и T13 идут первыми**: чистый код, немедленный эффект на качество пропсов, не зависят от контентных задач. После них перепроверить побочный критерий T4 (компонентов с >50 собственными пропсами должно стать ≤8).
- **T11 стоит перед T2**: контентная вычитка описаний должна идти уже по разделённому каталогу, чтобы не тратить усилия на 27 `internal`-записей. Сами по себе T11 и T2 дают эффект только вместе — 177 голых имён немногим лучше 243 голых имён.
- **T15** — перед финальным замером T10.

T2, T9 и контентная часть T11 (оверрайды `role`) — контентные, их можно вести параллельно с кодовыми задачами: они правят `_docs/meta/components-meta.json`, а не `src/`.
