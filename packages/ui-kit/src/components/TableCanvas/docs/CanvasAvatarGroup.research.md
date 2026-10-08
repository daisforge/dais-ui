# AvatarGroup как Canvas-элемент: исследование и проект реализации

> **Согласованный и реализованный релиз (29.09.2026): вариант A + публичный Canvas.Image.** Default Avatar/AvatarGroup — **s (24 px)**, фото Avatar — **fill**, visibleCount — **3** плюс отдельный +N. Загрузчик — штатный Glide; при недоступном фото остаются инициалы, без error callbacks/retry/специальной авторизации. Status, extra Badge/Counter, isScalable, адаптивный count и индивидуальная keyboard navigation не входят. Итог реализации и проверки — раздел 18. Исследовательские альтернативы ниже не расширяют этот scope.

Дата: 29 сентября 2026. Статус: исследование; production-код не изменён.

Цель — перенести внешний вид и полезное поведение SDDS FinAI AvatarGroup в TableCanvas/TableGlide, добавив встроенное ограничение числа аватаров. Документ предназначен в том числе для другого агента, который будет реализовывать feature.

Уточнение заказчика: оценить каждый параметр по полезности и сложности; объём первой реализации можно сократить. Поэтому ниже явно разделены установленное поведение Plasma, рекомендуемый контракт и возможности последующих этапов. Рекомендации по сокращению не являются уже согласованным окончательным scope.

## 1. Основной вывод

Нужны два примитива: `CanvasAvatar` и `CanvasAvatarGroup`, а также декларативные `Canvas.Avatar` и `Canvas.AvatarGroup`. Публичный вход группы через `items` лучше подходит существующему canvas-движку, чем React children: группа сама создаёт внутренние Avatar-ноды, располагает их, выбирает видимые элементы и добавляет отдельный Avatar с `customText="+N"`.

`totalCount` и `visibleCount` **не являются реализованными свойствами Plasma AvatarGroup**. Они живут в истории `DynamicSize`, которая самостоятельно создаёт нужное количество children. Компонент не делает `slice`, не считает остаток и не заменяет картинку счётчиком. `DynamicSize` также не означает автоматическую адаптацию к ширине контейнера.

Для требуемого примера рекомендуемый контракт: пять `items`, `visibleCount={3}` → первые три аватара и четвёртый круг `+2`. Счётчик — дополнительный слот, он не входит в `visibleCount`.

Главная сложность — не арифметика `+N`, а:

- прозрачные вырезы между аватарами и их изменение при hover;
- асинхронные изображения, кэш и перерисовка видимых строк;
- корректная интеграция внутренних нод в layout, события и тултипы;
- отличия браузерных возможностей HTML от canvas: индивидуальный фокус, ARIA, произвольные children.

Рекомендуемый первый релиз: фото, инициалы, customText, четыре фиксированных размера, круглая форма, групповые маски/hover, `items`, `visibleCount`, `totalCount`, клики и тултипы. `status` — небольшое полезное дополнение после готовности базового рисования. Badge/Counter, `fit`, индивидуальный Tab-фокус и произвольные слоты не нужны для реализации основного сценария.

Дополнительная проверка локального форка `glide` подтверждает: **можно переиспользовать уже работающий `DrawArgs.imageLoader` без копирования загрузчика и без новой версии зависимости**. `UserProfileCell` полезен как образец кругового clip и рисования фото, но не как готовый Canvas-примитив. Группы с масками FinAI и `+N` в проверенных исходниках нет. Подробная карта переиспользования, ограничения и изменения плана — в разделе 16.

## 2. Источники и границы проверки

Исследованные локальные состояния:

| Источник | Состояние |
| --- | --- |
| `plasma` | HEAD `c13feb4d78c772f5d9aaae2a62c78329e1df2d52`, рабочее дерево было чистым |
| `dais-ui` | HEAD `08fb99950e22966ea186e6ea182ee4d3d40aa551`, перед исследованием рабочее дерево было чистым |
| Опубликованные docs/Storybook | SDDS FinAI `0.360.0`, SDDS themes `0.82.0`, проверены в браузере |
| Зависимость dais-ui | `@glideappsfinal/glide-data-grid` `6.5.1`; изучен установленный исходный код |
| Локальный форк `glide` | HEAD `b615c59d6091fb1bbab8eabff7ad1e7a96642cad`, рабочее дерево чистое; дополнительно изучены core и `packages/cells` |

[Документация AvatarGroup](https://plasma.sberdevices.ru/sdds-finai/components/avatarGroup/) описывает его как обёртку над Avatar. В [Dynamic Size](https://plasma.sberdevices.ru/sdds-finai-storybook/?path=/story/data-display-avatargroup--dynamic-size) визуально проверен исходный пример: `totalCount=10`, `visibleCount=3`, результат `1 2 3 +7`, всего четыре круга. Внешняя страница и локальный код согласуются в этом поведении.

Основные утверждения о реализации ниже основаны на локальных исходниках, а не на предположениях по скриншоту. Браузерное поведение hover/focus на всех комбинациях не прогонялось; формулы и ограничения выведены из CSS и TS. Canvas-прототип, нагрузочные измерения и pixel-diff в рамках исследования не создавались.

### 2.1. Карта исходников Plasma

Корень путей этой таблицы: `/Users/artur/WebstormProjects/sber/plasma`.

| Файл относительно корня | Что подтверждает |
| --- | --- |
| `packages/sdds-finai/src/components/AvatarGroup/AvatarGroup.ts` | Вертикаль использует core без дополнительных вариаций |
| `packages/sdds-finai/src/components/AvatarGroup/AvatarGroup.stories.tsx` | `Default`, `DynamicSize`, `Accessibility`; арифметика `+N` находится здесь |
| `packages/plasma-new-hope/src/components/AvatarGroup/AvatarGroup.types.ts` | `children: ReactNode` и HTML-атрибуты; никаких count props |
| `packages/plasma-new-hope/src/components/AvatarGroup/AvatarGroup.tsx` | Простой Root с children, без бизнес-логики |
| `packages/plasma-new-hope/src/components/AvatarGroup/AvatarGroup.styles.ts` | Flex, margin, radial masks, hover и focus-visible |
| `packages/sdds-finai/src/components/Avatar/Avatar.config.ts` | Точные размеры, цвета через токены, default `xxl`, статус и extra |
| `packages/sdds-finai/src/components/Avatar/Avatar.stories.tsx` | Поддерживаемые в FinAI варианты; shape только `circled` |
| `packages/plasma-new-hope/src/components/Avatar/Avatar.types.ts` | Общий контракт Avatar, badge/counter union и HTMLAttributes |
| `packages/plasma-new-hope/src/components/Avatar/Avatar.tsx` | Приоритет контента, extra, доступность, ограничения `fit`/`s` |
| `packages/plasma-new-hope/src/components/Avatar/Avatar.styles.ts` | Изображение, текст, масштабирование Wrapper, позиционирование extra |
| `packages/plasma-new-hope/src/components/Avatar/utils/getInitialsForName.ts` | Точный алгоритм инициалов |
| `packages/plasma-new-hope/src/components/Avatar/variations/_focused/base.ts` | Фокус через `addFocus`, а не произвольный border |
| `packages/plasma-new-hope/src/components/AvatarGroup/AvatarGroup.component-test.tsx` | Базовые visual tests и простой пример с фото |
| `packages/plasma-new-hope/src/components/Counter/Counter.tsx` | Форматирование дополнительного Counter; это не групповой `+N` |
| `packages/themes/sdds-themes/src/themes/sdds_finai__light.ts` | Реальные light-значения CSS theme variables |
| `packages/themes/sdds-themes/src/themes/sdds_finai__dark.ts` | Реальные dark-значения CSS theme variables |

Быстрые переходы к ключевым исходникам: [Plasma group styles](/Users/artur/WebstormProjects/sber/plasma/packages/plasma-new-hope/src/components/AvatarGroup/AvatarGroup.styles.ts), [DynamicSize](/Users/artur/WebstormProjects/sber/plasma/packages/sdds-finai/src/components/AvatarGroup/AvatarGroup.stories.tsx), [FinAI Avatar config](/Users/artur/WebstormProjects/sber/plasma/packages/sdds-finai/src/components/Avatar/Avatar.config.ts), [canvas builder](/Users/artur/WebstormProjects/sber/dais-ui/packages/ui-kit/src/components/TableGlide/lib/canvas/components/index.tsx), [cell renderer](/Users/artur/WebstormProjects/sber/dais-ui/packages/ui-kit/src/components/TableGlide/cellRenderer.ts), [public Canvas exports](/Users/artur/WebstormProjects/sber/dais-ui/packages/ui-kit/src/components/TableCanvas/TableGlideInstance/reexports-for-external.ts). Абсолютные ссылки рассчитаны на текущий workspace; таблицы сохраняют переносимые относительные пути.

## 3. Что в действительности делает Plasma

### 3.1. AvatarGroup

Компонент принимает `children` и остальные `HTMLAttributes<HTMLDivElement>`, возвращает Root с этими children. Группа не задаёт размер всем детям: размеры задаются каждому Avatar отдельно. У неё нет собственных size/view/count/overflow props, выбора скрытых элементов, popover по `+N` и управления клавиатурной навигацией.

Default story создаёт пять одинаковых Avatar `size="xxl"`. DynamicSize создаёт `visibleCount` текстовых Avatar, затем при `totalCount > visibleCount` ещё один с разницей. История не является production-алгоритмом валидации: например, число обычных children не ограничивается `totalCount`. Копировать `Array(args.visibleCount)` в новый компонент нельзя.

Accessibility story передаёт каждому Avatar `role="button"`, `tabIndex={0}`, `focused`. Группа сама не добавляет детям эти свойства.

### 3.2. Avatar: содержимое и ограничения

Приоритет фактического кода:

1. Truthy `customText` → текст, даже если есть `url`.
2. Иначе truthy `url` → `<img src={url} alt={name}>`.
3. Иначе → инициалы из `name`.

`customText` типизирован как string. В stories встречается число, но это не основание расширять новый публичный тип. Строка `"0"` работает; пустая строка не подавляет фото/инициалы.

Инициалы: `name.split(' ')`, первые символы первых двух частей, `toUpperCase()`. Это не «первая и последняя часть ФИО», не `trim().split(/\s+/)` и не обработка Unicode grapheme clusters. Например, `Иван  Фадеев` даёт `И`, а `Иван Иванович Фадеев` — `ИИ`. Для точного переноса сохранить алгоритм; улучшение нормализации отдельно описать как отличие.

В Avatar нет обработки `onError`, автоматической замены сломанного URL и отдельного loading state. В canvas разумно показывать инициалы до загрузки и при ошибке, но это **расширение**, а не скопированное поведение Plasma.

У `<img>` заданы `width: 100%` и `height: 100%`, но не задан `object-fit: cover`. Базовый перенос — растягивание до квадрата. Обрезка прямоугольного фото по центру выглядит привычнее, однако добавляет поведение, которого нет в этих стилях. При необходимости можно позже добавить `imageFit`, сохранив явно выбранный default.

Wrapper обрезает содержимое по радиусу. `isScalable` масштабирует именно Wrapper до `1.02` на hover, не весь Root со статусом и extra; transition в этом CSS не задан.

### 3.3. Реальные вариации FinAI

Core тип допускает `shape?: string`, комментарий называет `circled` и `rounded`. Но FinAI config содержит только `circled`, а story предлагает только его. Размерные border-radius в config сами по себе не означают полноценный поддерживаемый вариант `rounded`: для него в FinAI нет отдельной настройки позиции статуса. Не переносить возможности другой вертикали под видом FinAI parity.

Аналогично default core — `m`, но default **FinAI — `xxl`**. Доступные размеры FinAI: `s`, `m`, `l`, `xxl`, `fit`; `xs` и `xl` здесь нет. Основной `view` — только `default`; семь view относятся к дополнительным Badge/Counter.

### 3.4. Метрики для переноса

Числа в px ниже предполагают `1rem = 16px`, как в текущих canvas font utilities. Это не универсальная гарантия браузерного rem; при другом root font-size DOM и canvas могут разойтись.

| size | D, диаметр | font-size / line-height | weight | Диаметр status | Радиус из size до circled override | Вынос extra |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| s | 24 | 8 / 8 | 600 | 6 | 8 | 1.008 |
| m | 36 | 14 / 14 | 600 | 8 | 10 | 2.016 |
| l | 48 | 20 / 20 | 600 | 8 | 12 | 2.016 |
| xxl | 88 | 32 / 32 | 600 | 12 | 18 | 0 при отсутствии внешнего override |
| fit | 100% контейнера | 0 / 0 | 0 | 0 | 50% | extra отключён |

В `circled` итоговый радиус — `D/2`. Для status центр расположен в `(0.867D, 0.867D)` относительно начала Avatar; top/left индикатора равны `0.867D - statusDiameter/2`.

Цвета:

| Роль | Plasma token | Действие в canvas |
| --- | --- | --- |
| Текст | `textAccent` | Читать resolved color из `theme.tokens` |
| Фон | В Plasma — `surfaceTransparentAccentActive` | В Canvas — `avatarBackground`; light уточнён по макету, см. §18.7 |
| Active status | `surfacePositive` | Токен уже есть |
| Inactive status | `surfaceSolidTertiary` | Токен уже есть |
| Focus | `surfaceAccent` | Токен уже есть; сам механизм focus отдельно |
| Font family | `--plasma-typo-text-font-family` | Проверить соответствие `theme.fontFamily` реальной теме |

В исходном Plasma `surfaceTransparentAccent` имеет другую альфу. Фон Avatar в `sdds_finai__light.ts` — `#118CDF33`, в `sdds_finai__dark.ts` — `#118CDF24`. Для Canvas светлый фон позднее уточнён по макету до `#199AF033` (§18.7). Значение fallback в экспортируемом token string не обязательно равно активному light theme; источником считать файл конкретной темы.

Существующий `TableGlide/tokens.ts` делает `TOKENS_DARK = { ...TOKENS_LIGHT }` с TODO. Поэтому даже добавление правильного background для dark не обеспечит полной dark parity текста/статусов. Нужно либо дополнить реальные используемые Avatar-токены в dark, либо явно ограничить подтверждённую parity light-темой. Для highContrastLight/betaCoreLight взять значения из соответствующих установленных тем, не угадывать по близким цветам.

## 4. Оценка свойств: польза, цена, рекомендуемый объём

Сложность: **Н** — небольшая локальная работа после готовности renderer; **С** — отдельная логика и проверки; **В** — затрагивает архитектуру или требует существенной визуальной/интеграционной проверки. Эти оценки не складываются арифметически: многие свойства используют одну инфраструктуру.

### 4.1. Группа

| Возможность | Польза в таблице | Сложность | Решение |
| --- | --- | --- | --- |
| `items` | Высокая: массив участников естественно хранится в row | С | Основной API, группа создаёт внутренние Avatar |
| `children` | Низкая при наличии items | С/В | Не поддерживать в v1; не нужно два конкурирующих способа описания |
| `visibleCount` | Высокая: компактная ячейка | Н | Встроить; число обычных Avatar, без счётчика |
| `totalCount` | Высокая при частично загруженном списке | Н | Опционально; default `items.length` |
| `size` на группе | Высокая: единая геометрия | Н | Добавить; не свойство исходной группы, а удобство canvas API |
| `+N` | Основное требование | Н/С | Отдельный Avatar; не переносить компонент Counter ради этого |
| Маски и overlap | Обязательны для узнаваемого вида | С | Переносить точно |
| Групповой hover | Показывает перекрытую часть участника | С/В | Переносить, проверить hit ownership и redraw |
| Автоподбор count по ширине | Полезен при resize узких колонок | В | Отложить; `DynamicSize` этого не делает |
| Размеры разные у отдельных items | Обычно не нужны в ячейке | В | В v1 запретить; маски рассчитаны на единый D |
| `onItemClick`, `onOverflowClick` | Профиль, список участников | С | Предусмотреть; события отдельные, одного физического клика достаточно |
| Тултип item / overflow | Высокая, особенно на маленьких фото | Н/С | Использовать существующий portal tooltip |
| Встроенный popover списка | Зависит от продукта | В | Не включать в примитив; callback отдаёт данные/anchor потребителю |
| Настраиваемые overlap/mask ratios | Низкая; легко разрушить parity | С | Оставить константами, не добавлять public knobs заранее |
| RTL, wrap, вертикальная группа | Нет запроса, Plasma CSS физически использует left | С/В | Не заявлять поддержку в v1 |

### 4.2. Avatar

| Свойство/возможность Plasma | Польза в таблице | Сложность | Рекомендация и отличие canvas |
| --- | --- | --- | --- |
| `url` | Высокая | В для инфраструктуры, Н для draw | Обязательно; кэш, загрузка и redraw входят в feature |
| `name` | Высокая: инициалы, tooltip, текст ячейки | Н | Обязательно; документировать алгоритм инициалов |
| `customText` | Высокая: `+N`, обозначения | Н/С | Обязательно; центрирование и clip; не рисовать `[object Object]` |
| `size=s/m/l/xxl` | Высокая для s/m, остальные для parity | Н | Все четыре; одна таблица метрик |
| `size=fit` | Низкая для группы, иногда нужна standalone | В | Отложить: проценты, конечные bounds, font/status=0, отсутствие extra |
| `shape=circled` | Основной вариант FinAI | Н | Обязательно; единственный публичный shape либо вообще без prop |
| `shape=rounded` | Дополнительный дизайн | С | Не считать обязательным FinAI; при добавлении отдельно решить status/masks |
| `view=default` | Фактически единственный основной view | Н | Необязательный literal либо не публиковать prop |
| `status=active/inactive` | Часто полезно для людей | Н/С | Хороший кандидат в v1; тестировать обрезку маской группы |
| `isScalable` | Небольшой декоративный эффект 2% | С | Отложить, если нужно сократить; групповой hover важнее |
| `focused` | Сам prop не создаёт DOM-фокус | В | Не обещать простой перенос; нужен keyboard/a11y дизайн |
| `statusLabels` | Полезен для локализации доступного описания | Н после a11y | Вводить вместе с действующим текстовым/a11y каналом |
| `hasExtra`, `type` | Дополнительные числа/метки | С/В | Отложить; предпочесть позже discriminated union `extra` |
| `extraPlacement` | Полезен только вместе с extra | С | Четыре позиции, default top-right; учесть bounds и обрезку |
| `count`, `maxCount` | Полезно для счётчиков на человеке | С | Отдельно от hiddenCount группы; воспроизвести форматирование и геометрию |
| `thousandSeparator` | Невысокая в очень маленьком counter | Н/С | Добавлять вместе с Counter; нормализовать граничные значения |
| `counterView` | Тематический цвет | Н после extra | Семь вариантов, через theme tokens |
| `badgeView`, `text` | Может понадобиться статус/роль | С | После основного сценария; размер Badge отличается от текущего CanvasBadge |
| `pilled` | Небольшая визуальная вариация | Н | Только вместе с badge |
| `customColor`, `customBackgroundColor` | Продуктовая кастомизация badge | Н | В Plasma это параметры extra Badge, не основного Avatar; конкретные цвета, не `var(...)` |
| `contentLeft`, `contentRight` | Иконка/произвольный контент в badge | В | ReactNode не переносить; при необходимости icon API на основе `ButtonIcon` |
| `clear`, `transparent` | Legacy badge flags присутствуют в общих типах | С | Не включать автоматически: Avatar не передаёт их в ExtraBadge как рабочие props |
| `customBorderRadius` | Только для `fit` | С/В | Отложить вместе с fit; произвольный CSS string не является числовым canvas radius |
| `role`, `tabIndex`, `aria-*` | Существенны для доступности | В | Не копировать типами без реализации; §11 |
| `id` | Нужен для hit/tooltip identity | Н | Canvas id, не DOM id; стабильность внутри ячейки |
| `className`, CSS `style`, `ref<HTMLDivElement>` | DOM-контракт | В/неприменимо | Не переносить; использовать canvas style и CanvasEvent |
| HTML `onClick`/mouse handlers | Высокая для взаимодействия | С | CanvasEvent, а не React.MouseEvent<HTMLDivElement> |

### 4.3. Предлагаемые уровни объёма

**A — достаточный первый релиз:** базовый Avatar + группа + реальная загрузка фото + маски/hover + per-item tooltip/click + текстовое представление ячейки + четыре размера. Это уже полноценная feature, не просто новый файл примитива.

**B — небольшое расширение:** status и при необходимости isScalable. Их можно оценивать независимо; status даёт больше функциональной пользы.

**C — отдельные задачи:** extra Badge/Counter, fit/rounded, автоматический visibleCount, индивидуальная keyboard navigation/a11y. Не называть A полным переносом всего Avatar API.

## 5. Рекомендуемый API и семантика счётчика

Ниже — проект контракта, не код существующего API. Типы специальных событий/tooltip следует импортировать из canvas, а не переобъявлять несовместимые аналоги. Основной публичный entry point потребителя — `@daisforge/ui/components/TableCanvas`.

```ts
type AvatarSize = 's' | 'm' | 'l' | 'xxl';

interface AvatarContent {
  name?: string;
  url?: string;
  customText?: string;
  // При выборе объёма B:
  status?: 'active' | 'inactive';
}

interface CanvasAvatarItem extends AvatarContent {
  id: string; // уникальный внутри группы, не индекс массива
  tooltip?: CanvasNodeTooltipConfig;
}

interface AvatarGroupItemClick {
  item: CanvasAvatarItem;
  index: number; // индекс исходного items, не координата таблицы
  event: CanvasEvent<CanvasAvatar>;
}

interface AvatarGroupOverflowClick {
  hiddenCount: number;       // все не показанные, включая незагруженные
  hiddenItems: readonly CanvasAvatarItem[]; // только имеющиеся в items
  totalCount: number;        // нормализованный total
  event: CanvasEvent<CanvasAvatar>;
}

interface CanvasAvatarGroupProps {
  items: readonly CanvasAvatarItem[];
  visibleCount?: number; // предлагаемый default: 3
  totalCount?: number;   // default: items.length
  size?: AvatarSize;     // согласованный default: s (24 px)
  onItemClick?: (args: AvatarGroupItemClick) => void;
  onOverflowClick?: (args: AvatarGroupOverflowClick) => void;
  overflowTooltip?: CanvasNodeTooltipConfig;
  // Обычные canvas props: id, style, position/offsets, zIndex,
  // group tooltip и portalHoverEnabled — по существующим соглашениям.
  // children не поддерживается.
}
```

У standalone `Canvas.Avatar` — тот же контент, `size`, canvas layout/tooltip props и `onClick(event)`. Не следует делать `CanvasAvatarItem = Omit<всех props Avatar, ...>`: так можно случайно разрешить произвольный размер, позиционирование или будущие неподходящие group-item props. Явный общий content type проще контролировать.

Групповой size намеренно не переопределяется item-ами в v1. Счётчик наследует общий размер/палитру, не наследует `url`, `name`, `status` и extra последнего участника. `items` не мутируется, входной порядок сохраняется. `id` предпочтительнее URL: одна картинка может быть у разных людей, а URL одного человека может обновляться.

Default size — отдельное продуктовое решение. В документе предложен `xxl` для совпадения с FinAI. Размер `s` для default Canvas был бы разумным удобством таблицы, но должен быть описан как намеренное отличие. В примерах в любом случае задавать размер явно.

Пустой input-массив и загрузка бизнес-списка — разные состояния. Если totalCount ещё неизвестен, не придумывать `+N`; при необходимости consumer показывает `Canvas.Skeleton` до получения данных. Отсутствие `url` у известного человека означает инициалы, а не отсутствие самого участника.

### 5.1. Расчёт

Для валидных целых неотрицательных входов:

```text
L = items.length
V = visibleCount ?? 3
T = max(L, totalCount ?? L)
K = min(L, V)
visibleItems = items.slice(0, K)
hiddenItems = items.slice(K)
hiddenCount = T - K
showOverflow = hiddenCount > 0
slotCount = K + (showOverflow ? 1 : 0)
```

`T - K`, а не `T - V`: при недостаточном количестве загруженных items нужно считать фактически показанных. `totalCount` означает общее число людей, включая имеющиеся в items; это не число скрытых.

Пример: `items.length=2`, `totalCount=5`, `visibleCount=3` → две фотографии и `+3`. В `hiddenItems` пусто; это не означает, что скрытых людей нет. Callback не должен обещать полный список скрытых участников.

| items.length | totalCount | visibleCount | Результат |
| ---: | ---: | ---: | --- |
| 5 | — | 3 | A B C +2 |
| 3 | — | 3 | A B C; без +0 |
| 4 | — | 3 | A B C +1, не четыре фото |
| 2 | — | 3 | A B |
| 0 | — | 3 | Пусто, intrinsic size 0×0 |
| 5 | — | 0 | Только +5 |
| 0 | 5 | 3 | Только +5 |
| 2 | 5 | 3 | A B +3 |
| 5 | 100 | 3 | A B C +97 |
| 5 | 2 | 3 | Конфликт; нормализовать T до 5, A B C +2 |
| 5 | — | 10 | Все пять, без overflow |

Предлагаемая защита runtime: конечные числа округлять вниз и ограничивать снизу нулём; для NaN/Infinity использовать default (`3` для V, `L` для T), верхнюю числовую границу ограничить `Number.MAX_SAFE_INTEGER`. Для `T<L` использовать `L`. В dev можно диагностировать некорректный ввод, но не печатать warning на каждом draw. Не принимать отрицательные/дробные значения как валидный контракт.

Дублирующиеся item id — ошибка данных; диагностировать в dev, обеспечивать детерминированный внутренний suffix в production, не перезаписывать чужую ноду. Внутренний id overflow должен иметь отдельное пространство имён, а не совпадать с произвольным `item.id="overflow"`.

В v1 `+N` — точная строка без локализованных разделителей/лимита. Для больших значений текст обрезается внутренней формой Avatar, полное число доступно в tooltip/текстовом описании. Варианты `+99`, `99+`, `+99+`, `+1K` не вводить молча: у них разная семантика, а Plasma story рисует точную разницу. При запросе компактного формата добавить отдельную спецификацию formatter/max label.

### 5.2. Пример потребителя

```tsx
import { Canvas } from '@daisforge/ui/components/TableCanvas';

// Внутри renderCell; row.participants содержит id/name/url.
<Canvas.Container direction="row" alignItems="center" padding={8}>
  <Canvas.AvatarGroup
    items={row.participants}
    totalCount={row.participantsCount}
    visibleCount={3}
    size="s"
    onItemClick={({ item }) => openProfile(item.id)}
    onOverflowClick={({ hiddenCount, event }) =>
      openParticipants(row.id, { hiddenCount, anchor: event.currentTarget?.rect })
    }
  />
</Canvas.Container>
```

Это пример предполагаемого API. `rect` ноды — координаты внутри canvas-root; для DOM popover требуется перевод в viewport через `event.cellBounds`/существующий механизм portal. Нельзя передать этот rect как готовый DOMRect. Group сам ничего не загружает из API участников и не открывает overlay.

## 6. Точная геометрия группы

Для одинакового диаметра D:

```text
overlap = 0.2D
step = 0.8D
x(i) = x0 + i * step
width(M) = M === 0 ? 0 : D + (M - 1) * step
height(M) = M === 0 ? 0 : D
```

При трёх людях и overflow `M=4`: ширины `81.6`, `122.4`, `163.2`, `299.2` px для s/m/l/xxl. Не округлять каждый шаг отдельно — это накапливает ошибку. Canvas и размеры layout используют CSS pixels; DPR применяется backing store/Glide, не повторно к layout.

### 6.1. Маски

В локальных координатах каждого Avatar правый вырез — окружность с центром `(1.3D, D/2)` и радиусом `0.58D`. Центр следующего аватара как раз находится в этой точке: `0.8D + 0.5D = 1.3D`.

Сам аватар имеет радиус `0.5D`; разница `0.08D` создаёт видимый зазор до соседа. Зазор — прозрачная область, а не border фиксированного цвета. Его нельзя залить белым или даже `theme.bgCell`: под ним может быть selected/hover/editable/полупрозрачный фон либо другой контент.

В обычном состоянии все элементы, кроме последнего, имеют правый вырез. Последний остаётся целым. В hover/focus-visible элемента i:

- элемент i теряет свою групповую маску;
- непосредственно следующий i+1 получает левый вырез с центром `(-0.3D, D/2)`, радиусом `0.58D`;
- если i+1 не последний, у него остаётся также правый вырез;
- остальные сохраняют исходные маски;
- на последнем при hover достаточно убрать маску; предыдущий всё ещё имеет правый вырез.

Не заменять это правилом «нарисовать наведённый аватар поверх всех» без пересчёта маски следующего: изображение будет другим. У исходной группы hover меняет CSS positioning и mask; постоянного явного `z-index: 999` в ней нет. Canvas-порядок должен воспроизводить результат без выхода над чужими overlay-ноды в ячейке.

### 6.2. Как рисовать безопасно для остальной ячейки

Рекомендуется одна `batcher.custom(ctx => ...)` команда на один Avatar: сохранить ctx, применить групповые ограничения, нарисовать фон/контент, затем status/extra при наличии, восстановить ctx. `DrawBatcher.flush` после custom уже сбрасывает собственные кеши стилей.

Каждый вырез можно реализовать дополнительным clip: большой охватывающий прямоугольник + окружность-отверстие, `clip(path, 'evenodd')`, пересечённый с текущим clip. Затем отдельно clip формы Wrapper для его содержимого. Для двух вырезов применять два последовательных clip, чтобы пересечение разрешённых областей оставалось корректным и при будущих изменениях геометрии. Охватывающий прямоугольник должен учитывать согласованные paint bounds, включая extra, если они поддержаны. Основа механизма описана в [Canvas clip](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clip).

Групповая маска действует на Root целиком, включая status и extra. Круглый clip Wrapper действует только на основной фон/фото/текст. Если обрезать status общей круглой формой Wrapper, поведение будет ошибочным.

Не применять `destination-out` прямо к общему ctx таблицы: он стирает уже нарисованную ячейку. Если понадобится сложная alpha-mask, compositing допустим на изолированном offscreen-слое с последующим `drawImage`, но это отдельная цена по памяти/DPR. Для бинарных вырезов текущего CSS clip обычно достаточен; сглаживание границ нужно проверить визуально.

Нельзя делать `ctx.save(); ctx.clip(); batcher.drawImage(...); ctx.restore()` во время постановки команд: `drawImage` исполнится позднее, после снятия clip. Все операции рисования под маской должны исполняться внутри одного callback или единой команды с собственным clip.

Не добавлять команды в тот же batcher из исполняемого custom callback: это нарушает предположения текущего flush. Если нужен reuse badge renderer, выделить синхронную draw-функцию либо явно управлять отдельным локальным batcher с завершением внутри callback.

## 7. Layout и дерево нод dais-ui

Корень путей дальнейших разделов: `/Users/artur/WebstormProjects/sber/dais-ui`.

### 7.1. Текущий путь

```text
renderCell → Canvas.* marker JSX
  → glideCellRenderer / buildCanvasTree
  → createNode → CanvasNode tree
  → CellCanvasRoot.prepareRootNode
  → measure / miniflex / absolute positioning
  → hover dispatch → paint → DrawBatcher.flush
```

`Canvas.*` — функции-маркеры, возвращающие null, с `__canvasType`. `buildCanvasTree` читает element.type и props сам. Он не запускает обычный React-компонент, возвращающий Canvas JSX. Поэтому новый marker нужно добавить в union/объект Canvas и switch `createNode`; просто написать `function AvatarGroup(){ return <Canvas.Container/> }` недостаточно.

### 7.2. Рекомендуемая структура

- `CanvasAvatar extends CanvasLeaf`: самостоятельная измеряемая и интерактивная нода с переиспользуемым draw-кодом.
- `CanvasAvatarGroup extends CanvasContainer`: специализированный контейнер с фиксированной вычисленной геометрией, `position='relative'` и внутренними absolute Avatar-детьми.
- Для каждого видимого item: `position='absolute'`, `left=i*0.8D`, `top=0`, размер D×D. Overflow создаётся так же.
- Группа сама считает intrinsic W/H; обычный CanvasContainer не включает absolute детей в intrinsic size. Размер нужно сообщать layout явно либо корректным override measure с сохранением внешних constraints.
- Внешний flex видит группу целиком. Внутри группы не нужен отрицательный `gap`, marginLeft или обычный flow, где miniflex может сжать детей.

Это предпочтительнее монолитного CanvasLeaf с ручными подзонами: внутренние ноды получают стабильные id, `currentTarget`, существующий tooltip и hit-test. Leaf запрещает `addChild`; обходить запрет записью прямо в children не следует.

В JSX-типе группы можно явно задать `children?: never`. Runtime builder тоже должен отклонять посторонние children: его общий код автоматически добавляет React children любому `instanceof CanvasContainer`, иначе можно случайно присоединить их к уже созданным из items аватарам. Внутренние children группы при этом остаются полноценными CanvasNode.

Не полагаться только на override `performLayout()` специализированной группы. При вложенности `FlexTreeBuilder` рекурсивно раскрывает контейнеры по наличию `flexOptions`, а `LayoutReconciler` отдельно раскладывает nested absolute children. Override корневого layout может не вызываться так, как ожидает автор. Использование стандартных relative/absolute children должно пройти обе ветви.

Точки проверки: группа как прямой ребёнок row/column контейнера, группа рядом с текстом, два уровня контейнеров, absolute group, resize родителя. `buildNode` позднее присваивает `node.style = props.style`, поэтому вычисленные размеры/`flexShrink:0` не должны потеряться при этом присваивании. Прописать merge/приоритеты в конструкторе и builder, а не надеяться на default.

### 7.3. Узкая колонка и высота

В первом релизе count управляется `visibleCount`; resize сам по себе не меняет число участников. Сохранять D и step; не растягивать круг в эллипс из-за flex shrink. Группа имеет естественную ширину W; если доступная область меньше, содержимое клипуется границей доступной области/ячейки без выхода в соседнюю колонку. Не обещать, что `+N` всегда виден в слишком узкой колонке.

Рекомендуется `flexShrink:0` для естественного размера группы и явный clip по ячейке. Если caller намеренно ограничил внешнюю width, рисование и hit-test должны одинаково соблюдать этот предел. Общий root ячейки получает width/height от grid: standalone Avatar прямо в корне может получить растянутый `style`; в примерах использовать Canvas.Container и отдельно проверить прямой root.

Для size s с padding 8 требуется минимум 40 px по высоте, m — 52 px, l — 64 px, xxl — 104 px. Точный rowHeight остаётся задачей конфигурации таблицы: изменение примитива не гарантирует автоматическое увеличение строки. `CanvasRenderResult` имеет `preferredHeight`, но текущий `glideCellRenderer` его не возвращает.

Автоподбор count в будущем: из доступной width посчитать вместимость слотов, затем при наличии скрытых резервировать один слот для overflow. Если ширины меньше D, отдельно выбрать политику. Нужен final allocated width после flex, а не только первый measure; иначе легко получить цикл measure/layout. Не включать это неявно в `visibleCount`.

## 8. Клики, hover и тултипы

### 8.1. Что уже есть

`CanvasNode.hitTest` собирает кандидатов рекурсивно, сортируя по cumulative zIndex и обратному source-order. Traversal сначала проверяет bounds родителя. `CanvasHoverController` посылает enter/leave только верхней ноде `hits[0]`, а portal target ищет вверх по parent. `CellCanvasRoot` диспатчит pointer events по списку hits; это не полностью DOM bubbling только по предкам.

**Следствие:** перекрывающиеся соседние аватары могут оба попасть в hits и получить click. Обработчик item должен проверять, что именно он является владельцем события (`event.target`/внутренний resolver), и не запускать callback для закрытого соседа. Одного правильного порядка рисования недостаточно. При этом не следует безусловно вызывать `stopPropagation`, если требуется обычное всплытие к group/таблице.

`containsHitPoint` защищённый и переопределяемый; `collectHitCandidates` приватный и рекурсивно вызывает себя. Override `hitTest` на вложенной группе не заменит рекурсивный обход root. Если нужна геометрическая фильтрация, делать её на уровне `containsHitPoint`/owner-логики, а не только в group.hitTest.

### 8.2. Маска и hit-test — разные вещи

CSS mask не меняет hit-testing CSS boxes: прозрачный вырез не обязательно является «дырой для мыши». Это прямо зафиксировано в [CSS Masking §7.10](https://www.w3.org/TR/css-masking-1/#the-mask-image). Поэтому вычитание окружностей маски из canvas hit-зоны само по себе не является точным переносом DOM-поведения.

Для v1 рекомендуются прямоугольные hit bounds D×D с однозначным верхним владельцем по порядку нод. Визуальные вырезы рассчитываются отдельно. Если продукт захочет выбирать только видимую круглую поверхность, это допустимое изменение UX, которое нужно зафиксировать и проверить на границах.

Не повышать hit zIndex при каждом hover без проверки: курсор в зоне перекрытия может начать перескакивать между соседями. Установить устойчивый порядок владения и проверить переход влево/вправо, прозрачный промежуток, первый/последний item и overflow. Для strict DOM parity отдельно прогнать browser reference pointer-переходы: mask и позиционирование создают stacking contexts, которые не сводятся автоматически к canvas zIndex.

### 8.3. Реализация состояния

- Hover Avatar уведомляет свою группу об активном id; группа пересчитывает mask flags для него и следующего.
- Внешние onMouseEnter/Leave нужно вызывать дополнительно к внутренним обработчикам. В существующем builder часто делают `node.onMouseEnter = handler`; такой приём может стереть встроенную логику нового примитива.
- Состояние hover должно восстанавливаться из текущей позиции указателя при перерисовке: дерево нод может пересоздаваться каждый draw, см. §9.
- `requestPaint()` у CanvasNode только делегирует родителю. CellCanvasRoot не наследует CanvasNode и не автоматически подключает эту цепочку к grid redraw; не считать вызов самостоятельной гарантией нового кадра.
- Существующий cell renderer уже запрашивает hover position. Использовать его цикл отрисовки; для async completion/анимации нужен явный мост.

Для tooltip item достаточно встроенной инфраструктуры, но `tooltip` не включает `portalHoverEnabled` автоматически для произвольной новой ноды. В реализации либо устанавливать флаг при наличии tooltip, либо явно документировать необходимость обоих props. Если item не имеет своего tooltip, group tooltip может работать через parent.

### 8.4. Публичный и внутренний interaction API

Внутренний TableGlide Canvas поддерживает `interaction` с selection/cellClick/editor/contextMenu. Однако `TableCanvas/TableGlideInstance/reexports-for-external.ts` **намеренно удаляет `interaction` из публичных Canvas props**. В примерах для `@daisforge/ui/components/TableCanvas` нельзя просто предложить этот prop.

Новые item-типы также не должны случайно вернуть скрытый API через `items[].interaction`: текущий Omit убирает только верхний prop. Оставить публичный контракт в рамках существующей политики. При необходимости внутренней кнопочной семантики привязать её в интеграции отдельно; новое публичное управление selection — самостоятельное решение.

Существующий pipeline подавляет повторную обработку одного click между `onCellClicked` и renderer.onClick. Пользоваться им, не создавать параллельный прямой DOM listener. Проверить обычный click, double click, editor, row selection и отсутствие действий на скрытых items. Отсутствие callback не означает, что декоративный hover Plasma должен исчезнуть; cursor политики следует явно согласовать с reference.

## 9. Изображения: кэш, загрузка, перерисовка

### 9.1. Почему нельзя создавать Image в ноде без менеджера

В `TableGlide/cellRenderer.ts` `cacheKeyValue` сейчас равен undefined; cache branch не активен. При каждом draw строится новое дерево, хотя экземпляр CellCanvasRoot может переиспользоваться. Поэтому кэш URL и pending state должны жить вне короткоживущих Avatar-нод. Нельзя вешать вечную подписку на каждую ноду: единого `dispose`-контракта у CanvasNode нет.

Рисовать только декодированное валидное изображение. Пока оно не готово — рекомендованный canvas fallback инициалы/пустой фон. Не отправлять запросы для скрытых items и URL, которые перекрыты truthy customText. Смена URL должна немедленно прекратить использование старого изображения, а запоздалый callback старого URL не должен менять содержимое новой ноды.

### 9.2. Существующие варианты reuse

| Вариант | Плюсы | Ограничения | Вывод |
| --- | --- | --- | --- |
| IconSpriteManager | Уже принимает URL, строит sprite, уведомляет о загрузке | Ключ зависит от size/color/DPR; нет ограниченного image cache/error policy; квадратизация; это прежде всего иконки | Не применять без анализа lifecycle и загрузочных ошибок |
| Glide imageLoader | Кэш по URL, tracking ячеек, window eviction, целевая перерисовка | Сейчас не проброшен в CanvasRenderArgs; API не отличает loading от error; собственный CORS/error режим не настраивается | Сильный кандидат для минимального контракта фото |
| Собственный AvatarImageManager | Явные ready/error/pending, CORS policy, LRU, отмена и общий доступ | Нужно написать и проверить, подключить корректный damage/redraw | Предпочтителен при обещании error fallback и управляемого lifecycle |

У Glide `loadOrGetImage(url, col, row)` возвращает изображение либо undefined, а callback загрузки вызывает damage нужных ячеек. Реализация находится в установленной версии `node_modules/@glideappsfinal/glide-data-grid/src/common/image-window-loader.ts`. Она не имеет публичного результата error, не задаёт crossOrigin, ожидает load и decode. Не приписывать ей обработку всех ошибок и retry. В pending/error случаях fallback можно показывать одинаково; точное различение потребует своего слоя.

Рекомендация для реализации: в начале сделать небольшой интеграционный прототип с Glide loader и подтвердить точечный redraw после прокрутки. Если выбран scope с error state/CORS/retry, использовать отдельный менеджер через тот же интерфейс ресурса. **Выбрать один основной backend**, не загружать URL одновременно Glide и своим Image.

### 9.3. Что потребуется для Glide loader

Протянуть `imageLoader`, `col`, `row` из штатных Glide draw args через:

1. `cells/renderer/types.ts` (`RendererDrawArgs`).
2. `cells/renderer/canvasCellRenderer.ts` → `CanvasRenderArgs`.
3. `cells/types.ts` и локальный тип renderArgs в `TableGlide/cellRenderer.ts`.
4. Контекст рисования ресурсов, доступный primitive: например отдельный ресурсный контекст DrawBatcher/CellCanvasRoot с setter на каждый render.

Лучше передавать контекст на время draw, чем замыкать координаты ячейки в глобальном URL cache. Координаты берутся у Glide, с учётом его row/column mapping, а не через предположение об индексе business row. `TableGlide.tsx` также строит Canvas tree для header/group header; если feature нужна там, отдельно предоставить loader context или ограничить её data cells в v1.

Уточнение после проверки форка: текущие `RendererDrawArgs.row` и `CanvasRenderArgs.row` описаны как объект бизнес-данных, тогда как реальный Glide draw передаёт `row: number`. Нельзя просто скопировать эти типы для imageLoader. Ресурсу нужны отдельные числовые `colIndex`/`rowIndex` из текущего draw. Подробности, включая изменяемый результат `getCellIndices`, — в 16.4. Не вызывать `setCallback`/`setWindow` из Avatar: ими уже управляет grid.

### 9.4. Если потребуется собственный менеджер

Минимальный контракт: `idle/pending/ready/error`, dedup по URL и request policy, ограниченный cache, subscription на уровень таблицы, unsubscribe при unmount, перерисовка реальных заинтересованных видимых ячеек с объединением в RAF. Ошибки не должны порождать новый запрос каждый draw; explicit retry/invalidation или error TTL. Ограничить параллельные запросы, старые результаты игнорировать по generation/token.

**Не копировать `useIconLoadRedraw` без изменений:** он использует `gridUpdateUtils.updateGridCells`, обновляющий только строки 0…29 и header rows. После прокрутки к строке 500 новое фото может не появиться до следующего события. Проверка stationary pointer на далёкой строке обязательна.

URL cache хранит декодированный source, не отдельную копию на каждый Avatar. Если добавится кэш обрезанных bitmap, его ключ включает размер и DPR; mask/hover/theme-зависимые варианты не должны бесконечно размножаться. При использовании ImageBitmap освобождать вытесненные ресурсы. Для больших исходников оценить downsample и лимит памяти измерениями, не угадывать «достаточное» число записей.

### 9.5. CORS и форматы

HTML `<img>` и canvas не полностью эквивалентны. Cross-origin изображение без CORS-разрешения может отображаться, но сделает canvas нечитаемым для pixel read/export. При `crossOrigin='anonymous'` сервер должен поддерживать CORS; простое добавление этого поля может сломать ранее отображавшиеся фотографии. Это объясняется в [MDN: cross-origin images in canvas](https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/CORS_enabled_image).

Нужно определить реальные источники фото: свой origin, CDN с разрешением, авторизованные URL. Не предполагать необходимость дополнительных заголовков/credentialed fetch без требования продукта. При отсутствии canvas export можно сохранить поведение обычного Image с явно описанным ограничением; при необходимости origin-clean canvas — использовать разрешённый источник и fallback при ошибке.

Тесты должны использовать локальные детерминированные картинки. Не привязывать визуальные проверки к GitHub avatar URL. Анимированные GIF/WebP не обещать как animated content: без отдельного redraw loop canvas не обновляет их как DOM img. Статические PNG/JPEG/WebP достаточны для первого релиза.

## 10. Extra, fit и масштабирование: если они войдут в scope

### 10.1. Extra не равен групповому overflow

Групповой `+2` — целый Avatar. Extra Counter — маленький бейдж в углу отдельного Avatar. Они различаются размером, цветом, форматированием и семантикой.

Фактические ограничения Plasma:

- extra показывается при `hasExtra` и `size !== 'fit'`;
- `type === 'counter'` выбирает Counter, иначе Badge;
- Badge дополнительно не показывается при `size === 's'`;
- default extra placement — top-right;
- Avatar подставляет `count || 1`; поэтому `0` становится `1` до Counter;
- Counter отдельно нормализует отрицательное число в 0, форматирует тысячи и дописывает `+` справа при превышении maxCount;
- у Badge выигрывает contentLeft, иначе используется contentRight; два слота одновременно не являются штатным контрактом;
- extra ограничен max-width Avatar, групповые mask могут его обрезать;
- `clear`/`transparent` из общих legacy типов не проброшены в ExtraBadge как такие flags. `appearance` исключён из Avatar extra type.

Не копировать странные edge cases `count || 1` без решения: либо сохранить совместимость, либо принять более строгий новый контракт, обозначив отличие.

Метрики extra при rem=16:

| Avatar | Badge height | Badge padding X | Badge radius | Counter height | Counter padding X |
| --- | ---: | ---: | ---: | ---: | ---: |
| xxl | 28 | 11.008 | 8 | 28 | 10 |
| l | 20 | 7.008 | 6 | 20 | 6 |
| m | 16 | 4 | 4 | 16 | 4 |
| s | Не отображается | — | — | 12 | 2 |

Badge icon-only padding и content margins тоже берутся из Avatar.config, а не из обычного Badge. Для xxl используется bodyS, остальных — bodyXXS, вместе с line-height/weight/family/letter-spacing. Round/pilled режимы и однозначные счётчики требуют отдельной проверки actual Counter/Badge styles.

`CanvasBadge.SIZE_CONFIG` сейчас имеет другую шкалу font/padding/radius. Прямое `new CanvasBadge(..., {size:'m'})` не воспроизведёт встроенный Avatar Badge. Варианты: выделить общий низкоуровневый draw helper с явными метриками или добавить внутренний metrics override, не меняющий существующий public CanvasBadge. Не создавать второй почти одинаковый badge renderer без нужды.

Для canvas API после v1 удобно:

```ts
type AvatarExtra =
  | { type: 'counter'; count: number; maxCount?: number; view?: ExtraView }
  | { type: 'badge'; text?: string; view?: ExtraView; pilled?: boolean };
```

`placement`, цвета, formatter/иконка добавляются осмысленно, а не копированием всех HTML props. Отсутствие `extra` заменяет `hasExtra=false` и уменьшает число противоречивых комбинаций.

### 10.2. fit

`fit` у Plasma устанавливает ширину/высоту 100%, font/status в 0, отключает extra. Это не «выбери меньший фиксированный размер». В группе процентная длина участвует ещё и в `calc` масок, поэтому однозначный canvas эквивалент не задан.

Для standalone можно позже определить `fit` как размер известного конечного rect, но надо выбрать квадратность, правило radii и обработку неограниченного parent. `customBorderRadius` в CSS может содержать произвольные CSS lengths; canvas лучше принимать числовые px/ограниченный формат. До принятия решения не включать `fit` в публичный union.

### 10.3. isScalable

Transform вокруг центра основного Wrapper, масштаб `1.02`; status/extra не масштабировать. Group-mask задаётся относительно исходного Root. Видимые границы расширяются на `0.01D` с каждой стороны, layout остаётся прежним. Родительский hit-test сейчас обрезает traversal по parent.rect: нельзя обещать клики по выступающим краям без изменения политики bounds.

Если анимация не нужна, достаточно мгновенного состояния hover, как в исходном CSS. Добавление плавного transition означает RAF/invalidation, сохранение времени между rebuild, а не просто новый boolean prop.

## 11. Доступность и текстовое представление

CanvasAvatar не становится доступным элементом только от наличия свойств `role`, `tabIndex` и `aria-label` в TypeScript. CanvasNode/CellCanvasRoot сейчас не имеют индивидуального keyboard focus-контракта для Avatar-детей.

Минимум для display-сценария: содержательное строковое представление ячейки и корректный clipboard. В установленном Glide `data-grid.tsx` custom cell озвучивается через `cell.copyData`. В dais-ui `glideCellRenderer` берёт `column.copyData(row)`/строку либо исходное `_data`. Рекомендуется задавать names + «ещё N участников», а не URL или `[object Object]`. При необходимости генерации helper-а передавать локализацию. Полный список names можно копировать из имеющихся данных независимо от visibleCount, но политика должна быть явной.

В чисто декларативном рендерере нельзя вычислить `copyData` только из результатa draw: текст нужен до рисования/для невидимых ячеек. Настроить его в column или отдельной чистой функции. Tooltip не заменяет доступное описание.

Если аватары открывают профиль или overflow-список, для клавиатуры нужно доступное действие через существующий editor/DOM overlay либо отдельная навигация внутри ячейки. Полная parity с Accessibility story требует:

- состояния focused item, клавиш Enter/Space и правил входа/выхода из группы;
- согласования стрелок/Tab с grid navigation;
- DOM accessibility представления или подходящего overlay;
- видимого focus ring и восстановления focus после виртуализации;
- statusLabels и имени каждого действия.

Это отдельная инфраструктурная задача. Не выпускать публичный `focused` с обещанием DOM-функциональности, если реализован только нарисованный круг. При scope A явно указать, что индивидуальная accessibility parity не достигнута; обеспечить текстовую доступность ячейки и альтернативный путь к действиям.

Для будущего focus ring FinAI задаёт outline size `0.1rem` (1.6 px), offset `-0.2rem` (-3.2 px) и цвет `surfaceAccent`; core использует `addFocus` с radius `100%`. `focused` по умолчанию true разрешает соответствующее оформление, но не означает, что Avatar уже находится в фокусе. Групповая реакция на `:focus-visible` задана отдельно в group CSS. При переносе нужно согласовать эти два механизма, а не автоматически считать `focused=true` активным item.

## 12. Файлы и точки интеграции для реализации

Все пути ниже относительно `/Users/artur/WebstormProjects/sber/dais-ui`.

| Файл/каталог | Планируемая работа |
| --- | --- |
| `packages/ui-kit/src/components/TableGlide/lib/canvas/primitives/CanvasAvatar.ts` | Новый leaf: measure/content/paint, внутренние события |
| `packages/ui-kit/src/components/TableGlide/lib/canvas/primitives/CanvasAvatarGroup.ts` | Новый composite/container: selection, slots, masks, callbacks |
| `.../lib/canvas/primitives/avatar/` (предлагаемый новый каталог) | Типы, metrics, pure count/layout helpers, drawing; не обязателен именно такой split |
| `.../lib/canvas/primitives/index.ts` | Экспорт классов/options/shared типов |
| `.../lib/canvas/components/index.tsx` | Props, CanvasComponentType, markers, Canvas map, createNode, передача общих props и событий |
| `.../lib/canvas/index.ts` | Проверить явные экспорты primitives и JSX props |
| `packages/ui-kit/src/components/TableCanvas/TableGlideInstance/type.ts` | Реэкспорт новых общих типов по существующему пути |
| `packages/ui-kit/src/components/TableCanvas/TableGlideInstance/reexports-for-external.ts` | Публичные Props и item/event types; сохранить скрытие interaction |
| `packages/ui-kit/src/components/TableGlide/tokens.ts` | `avatarBackground` и `avatarText` во всех поддерживаемых темах, оценка dark fallback |
| `.../lib/canvas/cells/renderer/types.ts`, `canvasCellRenderer.ts`, `../types.ts` | Контекст изображений/координат и передача в render |
| `packages/ui-kit/src/components/TableGlide/cellRenderer.ts` | Локальный renderArgs type, передача ресурсов к root/batcher |
| `.../lib/canvas/cells/CellCanvasRoot.ts`, `core/DrawBatcher.ts` | При необходимости ресурсный контекст на кадр; custom-команда уже есть |
| `packages/ui-kit/src/components/TableGlide/TableGlide.tsx` | Только нужные мосты загрузки/header rendering; не менять общую grid архитектуру без необходимости |
| `packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatar/` | Новые stories и API MDX по существующим соглашениям |
| `packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatarGroup/` | Stories счётчика, взаимодействия, узких колонок, async loading |
| `.../CanvasElements/CanvasElements.Docs.mdx` | Добавить новые примитивы в обзор |

Сокращение `.../lib/canvas` в таблице означает `packages/ui-kit/src/components/TableGlide/lib/canvas`.

Не нужен новый custom GridCellKind, отдельный полноценный DOM renderer каждого Avatar или React root на каждый item. Не менять Plasma для получения count semantics: она нужна в новом canvas API. Не добавлять новые зависимости до проверки существующих возможностей Canvas 2D/Glide.

## 13. План работ и оценка рисков

| Этап | Проверяемый результат | Основной риск |
| --- | --- | --- |
| 1. Уточнить scope A/B/C и defaults | Подтверждённые props и отличия от Plasma | Назвать частичный перенос «полной parity» |
| 2. Минимальный интеграционный прототип | Вложенная группа с 3 Avatar и +2, фото после async load на далёкой строке | Layout/invalidation выбранного подхода |
| 3. Pure model + CanvasAvatar | Count edge cases, метрики, initials, image fallback | Размер/текст/тема различаются с DOM |
| 4. CanvasAvatarGroup | Маски, позиционирование, hover, один click callback | Пересекающиеся hit-зоны и rebuild состояния |
| 5. Экспорты, theme, tooltip/copyData | Потребление через публичный TableCanvas entry | Типы не экспортированы или утёк internal interaction |
| 6. Visual и integration checks | Матрица ниже, документация API и ограничений | Проверили только статический первый экран |
| 7. Опциональные возможности | status, extra, fit/a11y отдельными законченными добавлениями | Незаметное расширение scope |

Относительная оценка всей задачи: **средняя/высокая**, несмотря на небольшой React-исходник группы. Арифметика overflow и sizes — малая часть работы; главные исследовательские риски — загрузка/перерисовка, hover ownership и интеграция layout. После этапа 2 оценку реализации можно уточнить существенно точнее. До прототипа обещать точный срок ненадёжно.

Если сокращать объём, сначала убирать extra, fit, mixed sizes, resize auto-count и анимацию. Не экономить на кэше, redraw после прокрутки, однозначном click и прозрачных масках: без них основной сценарий будет работать ненадёжно или выглядеть иначе.

## 14. Проверки и критерии готовности

### 14.1. Pure/model tests

- Все строки таблицы §5.1; никаких `+0` и отрицательных остатков.
- totalCount меньше items.length, ноль, NaN, Infinity, дробные/отрицательные значения.
- Число слотов, W/H, порядок items, массив не мутируется.
- У overflow собственный id, нет наследования фото/статуса последнего item.
- Приоритет customText > url > initials; строки `''` и `'0'`, двойные пробелы, одно/три слова, кириллица.
- URL скрытых items не запрашиваются; одинаковые URL не создают повторные pending loads.

### 14.2. Layout/events integration

- Прямой и вложенный row/column container, absolute group, группа рядом с text/button.
- Одинаковая геометрия до/после загрузки фото; никакого прыжка размеров.
- Узкая колонка, горизонтальный scroll, pinned columns, DPR 1/2; hit координаты остаются в CSS px.
- Hover каждого item и overflow, переходы в обоих направлениях и уход с ячейки.
- В перекрытии один физический click вызывает один item/overflow callback; закрытый сосед не получает действие.
- Стабильные id и тултипы после reorder/items replacement/column resize/scroll.
- Внешние mouse handlers не отключают внутреннюю mask state machine.
- Group zIndex не выводит элемент поверх независимого overlay в ячейке; не менять глобальные слои.
- Existing selection/editor/context menu не ломаются, public interaction не возникает случайно.
- Если status включён: правильная позиция, inactive цвет, обрезка group mask, без сдвига layout.

### 14.3. Изображения

- Cold load без движения мыши: placeholder сменяется фото.
- Та же проверка после прокрутки за 30-ю строку, например на строке 500.
- Успешная загрузка, медленная загрузка, broken URL, повтор URL в разных строках.
- Смена URL до завершения старого запроса, unmount таблицы, возврат в viewport.
- Смена размера/темы/DPR, отсутствие бесконечных listeners/retry и роста cache без границ.
- CORS поведение на реально используемом CDN; source с авторизацией, если такой поддерживается продуктом.
- Измерить количество загрузок, размер cache и плавность scroll на репрезентативном количестве строк; не назначать произвольный performance budget без baseline.

### 14.4. Визуальные stories

1. DOM FinAI и Canvas рядом с одинаковыми данными/шрифтом/фоном — четыре размера.
2. Пять items без ограничения и пять items с visibleCount=3 → три фото +2.
3. Инициалы, customText, пустой avatar, прямоугольное фото для проверки stretch/cover решения.
4. Hover первого/среднего/последнего/overflow, выбранная строка и editable cell background.
5. Светлая тема; затем поддерживаемые dark/HC/beta с явно зафиксированными ограничениями.
6. `+9`, `+10`, `+99`, большое число; text clipping и полный tooltip.
7. Соседние кнопки/текст и небольшой размер ячейки, отсутствие рисования поверх границы.
8. Status и extra — отдельные матрицы, только если включены.

Групповые snapshots Plasma проверяют в основном базовые состояния; их наличие не заменяет hover/async/event tests. Canvas и DOM могут отличаться субпиксельным сглаживанием: pixel-diff допуск задавать после сравнения, не скрывать им неверный radius/offset/color.

### 14.5. Команды для этапа реализации

Из `/Users/artur/WebstormProjects/sber/dais-ui`, с версиями Node/npm проекта:

```sh
npx nx run ui-kit:typecheck
npx nx run ui-kit:typecheck-tests
npx nx run ui-kit:lint
```

Для новых unit tests использовать Vitest-конфигурацию `packages/ui-kit/vite.config.ts`; пример целевого запуска из каталога пакета:

```sh
npx vitest run src/components/TableGlide/lib/canvas/primitives/__tests__/CanvasAvatarGroup.test.ts
```

Реальные имена test файлов определить при реализации. В `ui-kit/project.json` test target зависит от `typecheck-tests`; перед запуском общего Nx test проверить inferred target текущей конфигурации. Для visual проверок есть `npm run storybook` и `npm run screenshot:test:one -- <pattern>` на сервере `http://localhost:4400`; финальный pattern подобрать по новым story-файлам. Не обновлять все snapshots вместо разбора конкретных различий.

В рамках этого исследования эти команды не запускались: код не менялся, новых тестов нет. При передаче задачи не считать план проверок доказательством готовой реализации.

## 15. Решения, которые ещё предстоит принять

Исследование не блокируется этими вопросами; предлагаемые defaults позволяют начать проектирование. Перед реализацией/фиксацией API стоит подтвердить:

| Вопрос | Рекомендация |
| --- | --- |
| Scope первого релиза | Согласовано A + Canvas.Image; status/extra/fit/focus отдельно |
| Default visibleCount | 3, счётчик занимает дополнительный слот |
| Default size | Согласовано s (24 px), намеренное отличие от default xxl в FinAI |
| Фото: stretch или cover | stretch для точного исходного поведения; cover — отдельное улучшение |
| Loading/error fallback | Инициалы/пустой фон, явно документировать отличие от DOM Avatar |
| Цвета dark | Не заявлять полную parity поверх текущей копии light tokens; исправить используемые токены либо ограничить проверенный scope |
| Клик в вырезе/перекрытии | Прямоугольная DOM-подобная hit-модель, один верхний owner; уточнить browser reference для strict parity |
| Очень длинный +N | Точное число с clip и tooltip в v1, compact formatter позже |
| Индивидуальный keyboard доступ | Нужна отдельная задача, если есть per-avatar actions без доступной альтернативы |
| Backend изображений | Glide loader после прототипа; свой manager при требованиях error/CORS/retry |

Критерий завершения реализации: пример «5 участников → 3 фото и +2» работает через публичный `Canvas.AvatarGroup`, визуально повторяет согласованные состояния FinAI, корректно загружает фото при виртуализации, не путает события между соседями и имеет документированный фактический набор поддерживаемых props.

## 16. Дополнение: что взять из локального форка Glide

Повод: дополнительный запрос изучить `/Users/artur/WebstormProjects/sber/glide`, включая аватары и иконки, и оценить прямое переиспользование и перенос кода. Проверены исходники, экспорты, подключение к grid и существующие тесты; приложение и тесты форка в рамках этого дополнения не запускались. Возможные дефекты ниже отмечены по коду, без утверждения о воспроизведённом браузерном сбое.

### 16.1. Что действительно существует в форке

| Источник относительно `glide/` | Назначение и применимость |
| --- | --- |
| `packages/cells/src/cells/user-profile-cell.tsx` | Готовый custom cell renderer одного круглого фото/буквы с необязательным именем справа |
| `packages/cells/src/cell.stories.tsx` | Пример профиля; не AvatarGroup, без лимита видимых участников |
| `packages/core/src/cells/image-cell.tsx` | Ряд изображений с сохранением пропорций, отступом 4 px и общим выравниванием |
| `packages/core/src/cells/drilldown-cell.tsx` | Чипы с текстом и миниатюрами; содержит центральную квадратную обрезку фото |
| `packages/core/src/common/image-window-loader.ts` | Загрузка, кэш по URL, привязка изображения к координатам ячеек |
| `packages/core/src/common/render-state-provider.ts` | `WindowingTrackerBase`, упаковка координат, очистка за пределами окна с учётом закреплений |
| `packages/core/src/internal/data-grid/image-window-loader-interface.ts` | Контракт `ImageWindowLoader` |
| `packages/core/src/data-editor-all.tsx` | Создание одного loader на экземпляр DataEditor, возможность передать свой |
| `packages/core/src/internal/data-grid/data-grid.tsx` | Подключение callback loader к `damageInternal`, создание SpriteManager |
| `packages/core/src/internal/data-grid/render/data-grid-render.ts` | Обновление окна loader после отрисовки |
| `packages/core/src/internal/data-grid/render/data-grid-render.cells.ts` | Передача `imageLoader`, `spriteManager`, числовых `col`/`row` в renderer |
| `packages/core/src/internal/data-grid/data-grid-sprites.ts` | Растеризация SVG-иконок заголовков и их кэш |
| `packages/core/src/internal/data-grid/sprites.ts` | Набор SVG factories с цветами `fgColor`/`bgColor` |
| `packages/core/src/internal/data-grid/render/data-grid-lib.ts` | Публичные функции измерения текста, поправки вертикального центра и построения скруглённого пути |
| `packages/core/src/index.ts`, `packages/core/package.json` | Публичные экспорты и ограничения package exports |
| `packages/core/test/image-window-loader.test.ts`, `packages/core/test/data-grid-lib.test.ts` | Текущие проверки loader и image cell; не доказательство AvatarGroup parity |

Прямые ссылки: [UserProfileCell](/Users/artur/WebstormProjects/sber/glide/packages/cells/src/cells/user-profile-cell.tsx), [ImageWindowLoaderImpl](/Users/artur/WebstormProjects/sber/glide/packages/core/src/common/image-window-loader.ts), [SpriteManager](/Users/artur/WebstormProjects/sber/glide/packages/core/src/internal/data-grid/data-grid-sprites.ts), [центральная обрезка в drilldown](/Users/artur/WebstormProjects/sber/glide/packages/core/src/cells/drilldown-cell.tsx), [публичные экспорты](/Users/artur/WebstormProjects/sber/glide/packages/core/src/index.ts).

Побайтовое сравнение с `dais-ui/node_modules/@glideappsfinal/glide-data-grid` подтвердило совпадение шести файлов: loader, `render-state-provider.ts`, `data-grid-sprites.ts`, `image-cell.tsx`, `drilldown-cell.tsx`, `index.ts`. Это проверка конкретных файлов, а не утверждение об идентичности всего checkout опубликованному пакету. Для рекомендуемого использования существующего loader новая публикация форка не требуется.

### 16.2. Готовый аватар UserProfileCell: что взять, что заменить

Это **renderer целой ячейки**, а не отдельный универсальный Avatar. Контракт данных: `image`, `initial`, `tint`, необязательный `name`. Он экспортируется как `UserProfileCell` из отдельного `@glideappsfinal/glide-data-grid-cells`; в `dais-ui/packages/ui-kit/package.json` этот пакет не объявлен. Подключать весь пакет ради нескольких canvas-операций не требуется: его зависимости включают редактор статей и select, не относящиеся к AvatarGroup.

Алгоритм рисования:

1. Радиус `min(12, rect.height / 2 - theme.cellVerticalPadding)`, то есть диаметр максимум 24 px.
2. Слева отступ `theme.cellHorizontalPadding`, по вертикали центр ячейки.
3. Запрос `imageLoader.loadOrGetImage(image, col, row)` на каждом draw.
4. Круг с `tint` при `globalAlpha = 0.2`; затем `globalAlpha = 1` и первая буква `initial[0]` шрифтом `600 16px`.
5. Если фото готово — `save → arc → clip → drawImage → restore`; исходник растягивается до квадрата, без cover-crop.
6. Необязательное имя справа обычным текстом. Есть editor и paste для имени.

**Адаптировать стоит:** использование loader из draw args; локальный круговой clip; изоляцию состояния canvas через save/restore. Stretch фото совпадает с исходным поведением Plasma из раздела 3.2.

**Копировать renderer целиком не стоит**, поскольку потребуется заменить почти весь внешний контракт и геометрию:

- размеры/шрифты — на таблицу FinAI; при размере s у FinAI текст 8 px, у этого renderer 16 px;
- вычисление инициалов — на согласованный алгоритм `name`, а не обязательную строку и только первый символ;
- фон и цвет текста — на отдельные FinAI-токены; в исходнике после рисования круга `fillStyle` остаётся равным `tint`, и буква получает тот же цвет без прозрачности;
- приоритет контента — на `customText > url > initials`; в Glide буква рисуется всегда под готовым фото, из-за чего может просвечивать в прозрачных участках PNG;
- положительный размер — валидировать: исходная формула радиуса допускает отрицательное значение при слишком низкой строке;
- пустой URL — пропускать: исходник передаёт `image` в loader без проверки; story даже передаёт `undefined` через приведение типа при объявленном `image: string`;
- размещение — относительно `CanvasAvatar.rect`, без повторного добавления cell padding;
- имя справа, редактор и paste — оставить за пределами примитива; группу, маски, счётчик, tooltip, status и события реализовать в нашем дереве.

Вызов `UserProfileCell.draw` внутри ноды через искусственный объект GridCell технически потребовал бы адаптера, но сохранил бы чужие метрики и связь с целой ячейкой. Это сложнее и менее прозрачно, чем небольшая синхронная draw-функция собственного Avatar.

### 16.3. Загрузчик изображений: самая полезная часть reuse

Рабочая цепочка в форке:

```text
DataEditorAll: useMemo(imageWindowLoader ?? new ImageWindowLoaderImpl())
  → DataGrid: imageLoader.setCallback(damageInternal)
  → draw args: imageLoader + col + row
  → Avatar: loadOrGetImage(url, col, row)
  → URL cache / Image load / decode
  → накопление координат + throttle(20 ms)
  → damageInternal(CellSet)
  → перерисовка заинтересованных ячеек
```

На первом вызове создаётся cache entry, возвращается `undefined`, присвоение `img.src` откладывается в RAF. После `load` и `decode()` сохраняется готовый HTMLImageElement и отправляются координаты зарегистрированных ячеек. Повтор URL в той же или другой ячейке использует запись кэша; размер, цвет и DPR в ключ не входят. Интерфейс допускает ImageBitmap, но штатная реализация создаёт HTMLImageElement.

`setWindow` получает окно от grid, закреплённые колонки и индексы закреплённых нижних строк. Если хотя бы одна связанная ячейка остаётся в окне, ресурс сохраняется; иначе запись удаляется и вызывается `cancel`. Это прямо соответствует виртуализированной таблице и устраняет необходимость подписки на каждую короткоживущую Avatar-ноду.

**Правило владения:** ноды только вызывают `loadOrGetImage`. `setCallback` заменяет единственный callback, поэтому вызов из Avatar перехватит штатный redraw всей таблицы. `setWindow` также принадлежит grid; нельзя устанавливать окно равным одной группе. Не создавать loader на каждый Avatar, группу или draw. Не разделять один экземпляр loader между независимыми DataEditor: callback и окно у него одни.

Ограничения исходника, влияющие на обещания feature:

| Наблюдение по коду | Что означает для реализации |
| --- | --- |
| Promise ожидает только `load`, без `error` listener | Обычная ошибка сети может оставить запись в pending; `catch` после decode не покрывает отсутствие load |
| Ошибка decode вызывает cancel, но не удаляет запись из cache и не публикует error | Нельзя обещать явный error-state, автоматический retry и callback ошибки поверх штатного API |
| Cache очищается при изменении окна/закреплений, не по LRU или размеру памяти | Это window cache, не гарантированно ограниченный по памяти менеджер; смена множества URL в одной видимой ячейке без прокрутки может удерживать старые записи |
| Связь URL→ячейка не снимается при замене URL в этой ячейке | Поздняя загрузка старого URL может вызвать лишний redraw; содержимое при redraw должно читаться из текущих props |
| Глобальный pool до 12 Image, pending Image может попасть в pool; load listener не снимается, отложенный RAF не отменяется | Быстрая прокрутка и переиспользование pending Image требуют отдельной проверки; cancelled guard проверяется перед записью результата, но не перед установкой src |
| Нет public dispose, отмены throttle/RAF и настройки crossOrigin | Не объявлять полную отмену сети/unmount cleanup и CORS policy реализованными возможностями |

Эти ограничения **не запрещают минимальный display-сценарий**: пока loader возвращает undefined, показывать инициалы. Однако отсутствие отдельного error-state нужно явно документировать. Если требуется управляемый retry/CORS/ограничение памяти, выбрать собственный backend либо исправить loader в форке отдельной работой; изменения checkout `glide` сами по себе не попадут в установленную зависимость dais-ui.

В форке уже есть публичные `ImageWindowLoader`, `ImageWindowLoaderImpl`, `CellSet`, а `DataEditor` принимает `imageWindowLoader`. Поэтому альтернативный backend можно внедрить через существующую точку расширения, без deep import и без добавления нового API в Glide. Для этого в dais-ui потребуется внутреннее подключение prop к `StyledGlideDataEditor`; сейчас явного `imageWindowLoader` там нет. Пользовательский backend должен поддерживать всё окно grid и другие image cells. Если нужен независимый Avatar-only manager, его целевой redraw подключается отдельно, как описано в 9.4; выбрать один путь, не запускать две загрузки одного фото.

### 16.4. Конкретный мост к Canvas-примитивам

Рекомендуемый внутренний контракт, не публичный prop потребителя:

```ts
import type { ImageWindowLoader } from '@glideappsfinal/glide-data-grid';

interface CanvasImageResources {
  readonly loader: Pick<ImageWindowLoader, 'loadOrGetImage'>;
  readonly colIndex: number;
  readonly rowIndex: number;
}
```

Прокинуть его по цепочке раздела 9.3 в контекст текущего render/DrawBatcher. `Pick` намеренно не даёт Avatar управлять callback и окном. На draw взять source через `resources.loader.loadOrGetImage(url, resources.colIndex, resources.rowIndex)` и использовать его в синхронной custom-команде. При пустом URL, при приоритетном customText и для скрытых items загрузку не запрашивать. Диаметр и ширина группы известны до загрузки и не зависят от размеров фото.

Две особенности текущего dais-ui, которые легко пропустить:

1. `RendererDrawArgs.row` объявлен объектом бизнес-данных, но `Glide DrawArgs.row` — число; `col` вообще отсутствует в локальном интерфейсе. Исправить типизацию границы draw либо явно извлечь числовые координаты в отдельный ресурсный контекст. Не менять автоматически смысл `row` у click/tooltip API: там другие контракты. Бизнес-строка для тултипов уже берётся из `cellInfo.row`.
2. `getCellIndices` в `cells/helpers.ts` возвращает **один изменяемый module-level объект** `_tempIndices`. Его нельзя сохранить в loader context по ссылке или захватить в асинхронном callback. Скопировать числовые значения текущего вызова. Координаты из реального draw учитывают внутреннюю систему Glide; не заменять их индексом бизнес-строки или индексом из внешнего обработчика клика.

При отсутствии ресурса, например при standalone measure или пока не согласовано использование в заголовке, рисовать fallback без запуска загрузки. Для header/group header не подставлять произвольный row=-1: их отдельный draw-путь и жизненный цикл окна надо проверить до поддержки фото. В первой реализации можно явно ограничить загрузку изображений data cells.

В `batcher.custom` нужны явные font, fillStyle, textBaseline/textAlign и save/restore: контекст уже использовался другими примитивами. Clip и непосредственный `ctx.drawImage` должны исполняться вместе. Существующий `DrawBatcher.drawImage` поддерживает только destination rectangle; для cover-crop с source rectangle понадобится custom callback или отдельная команда, а не приведение аргументов к текущему методу.

### 16.5. Иконки Glide и иконки dais-ui — разные менеджеры

**Glide SpriteManager** принимает имя иконки из `headerIcons` и SVG factory `(fgColor, bgColor) => string`. Это не загрузчик произвольного URL. Он вычисляет цвета из вариантов normal/selected/special, создаёт data URL, декодирует SVG и кэширует canvas по цветам, имени и `size * ceil(devicePixelRatio)`. Когда все текущие decode завершились, callback grid инициирует общий redraw. Трекинга заинтересованных ячеек и окна изображений у него нет.

В проверенном `data-grid-sprites.ts` после `document.createElement('canvas')` **не присваиваются `canvas.width`/`height`**: растеризация идёт в стандартный canvas 300×150, хотя размер отрисовки вычислен как rSize. Для штатных мелких header icons это может не проявляться, но перенос на большие аватары/DPR создаёт риск обрезки. Также нет eviction, а цепочка decode заканчивается `finally` без `catch`. Эти участки нельзя считать готовым универсальным image manager. Изменение существующих header icons не входит в эту feature.

Класс SpriteManager не экспортирован значением из корневого `index.ts`; экземпляр доступен в draw args. `SpriteMap`, `Sprite` и `HeaderIcon` экспортированы как типы, `sprites` — как набор factories. Package exports не разрешает произвольные внутренние subpaths. Для Avatar не нужен обход exports через `src/internal/...`.

**dais-ui IconSpriteManager** уже лучше подходит локальным Canvas.Icon: принимает registry name, inline SVG, URL или HTMLImageElement; создаёт canvas корректного размера; рисует через DrawBatcher и предоставляет onLoad. Однако это кэш растеризованных квадратных иконок по source/color/size/DPR, а не оригиналов фото по URL. Готовый HTMLImageElement в основном пути тоже превращается в URL; прямой fallback вынесен отдельно. В комментарии `drawIcon` упомянут ImageBitmap, но фактический sprite здесь — HTMLCanvasElement: не строить оценку памяти на комментарии.

Для фото его минусы существенны: дублирование raster cache между размерами и цветовыми ключами, отсутствие window eviction, ошибок как состояния и привязки к ячейкам. После ошибки pending снимается, поэтому следующий draw может начать повторную загрузку без backoff. Текущий `useIconLoadRedraw` обновляет лишь строки 0…29 плюс headers. `reset`/`clearSpriteCache` не отменяют уже запущенные decode и не используют generation guard — старый результат может снова наполнить очищенный cache.

**Решение:** фото получают source через Glide imageLoader; существующие иконки, в том числе будущая маленькая иконка extra Badge, используют dais-ui icon infrastructure. Кружок status рисуется обычным `arc`/fill и вообще не требует SVG/sprite. Маски группы применяются в paint, а не включаются в ключ image cache. Так появление hover не создаёт новые изображения и повторные сетевые загрузки.

Если позже иконка extra должна попасть под общую маску Avatar, нельзя вызвать обычный отложенный `drawIcon(batcher, ...)` внутри custom callback. Получить готовый sprite через существующий manager и синхронно нарисовать его под активным clip либо выделить соответствующий draw helper. Риск redraw для дальних строк остаётся отдельной задачей иконок и не исчезает от использования loader для фото.

### 16.6. Небольшие алгоритмы и helpers для адаптации

| Кандидат | Решение | Обязательные условия |
| --- | --- | --- |
| `UserProfileCell`: круговой clip + фото | Адаптировать несколько операций в `drawAvatarContent` | Метрики FinAI, наш rect, свой приоритет контента, custom-команда DrawBatcher |
| `DrawArgs.imageLoader` | Переиспользовать существующий экземпляр напрямую | Пробросить ресурсный контекст, реальные числовые координаты; callback/window остаются у grid |
| `ImageWindowLoaderImpl` | Не копировать в dais-ui для первого релиза | Публичный экспорт уже есть; новая копия добавит второй lifecycle и те же ограничения |
| `measureTextCached` | Можно импортировать из корня core | До вызова выставить реальный `ctx.font`; аргумент font участвует в ключе, но сам не устанавливает ctx.font. Кэш общий, сбрасывается после 10 000 записей |
| `getMiddleCenterBias` | Только после визуальной проверки текста | Вычисляет поправку по метрикам латинских прописных; это не гарантия CSS line-height parity. Не добавлять поверх существующей коррекции CanvasText вслепую |
| `roundedRect` | Можно импортировать при необходимости rounded/fit | Это построитель path; beginPath, save/clip/restore и ограничения радиуса остаются у вызывающего кода |
| `drilldown-cell`: квадратный center-crop | Адаптировать, если согласован cover вместо stretch | `side=min(w,h)`, `sx=(w-side)/2`, `sy=(h-side)/2`; `drawImage(source,sx,sy,side,side,x,y,D,D)`, положительные размеры source |
| `imageCellRenderer` / его drawImage | Не использовать для AvatarGroup целиком | Он сохраняет пропорции, пропускает ещё не загруженные изображения, меняет суммарную ширину по мере загрузки, не резервирует Avatar-слоты |
| `drilldownCellRenderer` | Не переносить целиком | Чипы/тени/размеры зависят от текста и готовности фото; масок и overflow группы нет |
| Glide SpriteManager | Не копировать как AvatarImageManager | Другая модель входа, кэша и redraw; ограничения из 16.5 |

Для типографики самый простой путь — собственный короткий draw с метриками FinAI и осознанным baseline. Проверять кириллицу, латиницу, две буквы, `+2`, `+100` и загрузку шрифта; существование helper-а не делает его обязательной зависимостью.

При буквальном переносе существенных фрагментов сохранить происхождение: путь и commit форка в комментарии/описании изменения, а также copyright/permission notice из [локального LICENSE](/Users/artur/WebstormProjects/sber/glide/packages/cells/LICENSE) согласно условиям файла. Для core есть свой [LICENSE](/Users/artur/WebstormProjects/sber/glide/packages/core/LICENSE). Это практическая отметка для handoff; в данном исследовании код не переносился.

### 16.7. Как это меняет план реализации и проверки

Рекомендуемая последовательность теперь конкретнее:

1. Пробросить существующий imageLoader через внутренний render context; исправить конфликт числового row и business row на границе draw.
2. Выделить общий слой получения и синхронного рисования изображения; на нём сделать CanvasImage и CanvasAvatar с постоянными размерами (см. раздел 17). Использовать UserProfileCell как образец кругового clip. Не устанавливать `glide-data-grid-cells` ради этого.
3. Проверить cold load и redraw на строке 500, повтор одного URL в нескольких ячейках, закреплённые колонки/нижние строки, несколько таблиц на странице.
4. Поверх готового Avatar добавить группу, count model, маски и события из основного исследования. Их Glide не предоставляет.
5. По результатам проверки источников фото решить, достаточно ли pending fallback или необходим другой backend. Не откладывать обязательную CORS/error-функциональность, если она входит в согласованный scope.

Дополнения к тестам раздела 14:

- Пустой URL/customText/скрытый item вообще не вызывает loader; несколько размеров одного URL используют общий source, размер слотов не меняется после загрузки.
- Числовые координаты не подменяются бизнес-объектом row; ресурсы разных ячеек не получают ссылку на общий `_tempIndices`.
- Позднее завершение старого URL только инициирует redraw, но не подменяет новое фото; быстрая смена окна проверяет переиспользование pending Image.
- Broken URL проверять настоящим error event, а не только rejected decode. Существующий тест `should handle image loading failure gracefully` моделирует именно decode failure после load.
- При поддержке retry проверить отсутствие повторной загрузки на каждом draw; при поддержке bounded cache — смену многих URL в одной неподвижной видимой ячейке.
- Header support, если включён, проверять отдельно от data cells; негативные индексы и окно loader не считать автоматически корректными.
- Если добавлены extra icons, cold icon load на строке 500 проверять отдельно от cold photo load.
- Сопоставить stretch/cover на широком и высоком фото, прозрачный PNG, маленькую высоту строки, s/m/l/xxl и DPR 1/1.5/2/3.

Оценка выигрыша: штатный loader позволяет не писать с нуля URL cache, привязку к виртуализированным ячейкам и механизм damage для базового контракта. Круговой clip и crop экономят небольшой объём низкоуровневого рисования. Основная работа — FinAI-геометрия, групповые маски/hover, API items/count, layout и события — остаётся в dais-ui. Поэтому корректное ожидание: **переиспользовать инфраструктуру изображений и несколько алгоритмов; AvatarGroup реализовать как новый примитив**.

## 17. Нужен ли отдельный примитив Image

**Рекомендация: предусмотреть CanvasImage как базовый примитив для фотографий, логотипов и миниатюр в ячейках.** В текущем каталоге primitives его нет. `DrawBatcher.drawImage` — лишь отложенная команда для готового `CanvasImageSource`: она не принимает URL, не загружает фото, не участвует в layout и не рассчитывает crop. Поэтому она не заменяет Image-примитив.

Для одного Avatar публичный Image не является обязательной зависимостью: необходим прежде всего общий внутренний слой изображений. Но отдельный CanvasImage позволит следующим компонентам использовать тот же loader, расчёт вписывания и геометрию без повторения кода. Это архитектурная рекомендация для реализации, а не уже существующий API.

### 17.1. Разделение ответственности

| Слой | Ответственность |
| --- | --- |
| Glide imageLoader + мост из раздела 16.4 | Получить источник по URL, использовать общий кэш, перерисовать нужные ячейки после загрузки |
| Общие внутренние helpers изображений | Рассчитать source/destination rectangles; синхронно выполнить `ctx.drawImage` для готового источника |
| CanvasImage | Участвовать в layout как прямоугольный элемент, запросить изображение, поставить команду рисования с выбранным вписыванием и собственным clip |
| CanvasAvatar | Выбрать customText/фото/инициалы, применить FinAI-размеры и цвета, круговую форму, статус и собственные декоративные элементы |
| CanvasAvatarGroup | Рассчитать видимые элементы и +N, расположить слоты, управлять групповыми вырезами и взаимодействием |

CanvasAvatar и CanvasImage используют одни helpers и один источник ресурсов. **Не требуется создавать дочерний CanvasImage внутри каждого Avatar.** С текущим DrawBatcher надёжнее рисовать готовое фото общей синхронной функцией внутри единой custom-команды Avatar: `save → групповой clip → фон/контент/декорации → restore`, с отдельным внутренним круговым clip только для основного содержимого. Так групповая маска действует и на фото, и на остальные части Avatar. Постановка независимой команды дочернего Image между `save` и `restore` родителя этого не гарантирует (разделы 6 и 16.4).

### 17.2. Минимальный контракт и ограничения

- `src: string` — URL изображения. Пустой URL не вызывает loader. Не добавлять сразу union URL/SVG/HTMLImageElement: иконки уже обслуживает отдельная инфраструктура, а расширение типов источников требует отдельного контракта владения и готовности.
- Размер прямоугольника задаётся существующей layout/style-системой до загрузки. Не начинать с HTML-подобного intrinsic sizing по натуральному размеру картинки: иначе загрузка изменит layout строки или содержимого ячейки.
- `fit: 'fill' | 'cover' | 'contain'`: fill растягивает, cover заполняет с обрезкой, contain сохраняет всё изображение с возможными пустыми полями. На первом этапе достаточно центрального выравнивания. Для Avatar явно передавать fill ради совпадения с Plasma; универсальному Image можно выбрать cover по умолчанию и документировать это отдельно.
- Внутренний helper должен поддержать source rectangle для cover (9-аргументный `ctx.drawImage`), а не ограничиваться текущей 5-аргументной командой batcher. Нулевые размеры источника или destination не рисовать.
- При отсутствии готового источника Image оставляет зарезервированное место; фон можно задать обычным оформлением элемента. Инициалы и пользовательский fallback принадлежат Avatar/композиции, а не универсальному Image.
- Скругление прямоугольника полезно для миниатюр, но поддержку существующего style-поля следует подтвердить реализацией clip. Круг Avatar и соседские вырезы не превращать в специализированные публичные props Image.
- Не обещать `onError`, retry, `loading='lazy'`, `srcSet`, `crossOrigin` или произвольный React fallback в первом контракте. Штатный loader не предоставляет требуемого жизненного цикла (16.3), а виртуализация уже определяет, какие ячейки запрашивают фото. Добавлять эти возможности только вместе с соответствующей реализацией backend.
- CanvasImage сам по себе не создаёт DOM `<img>` и доступное описание. Текст для accessibility/copy должен формироваться на уровне ячейки; один проп `alt` без подключения к этому механизму не даёт семантики HTML-изображения.

### 17.3. Стоимость и влияние на scope

После моста к loader стоимость базового CanvasImage **небольшая или средняя**: основные добавления — layout-node, регистрация в builder/типах/экспортах и алгоритмы fit. Большая часть сложности загрузки уже описана в разделе 16 и будет нужна Avatar независимо от наличия публичного Image. Полноценный аналог HTML `<img>` существенно расширит задачу и здесь не предлагается.

Рекомендуемый порядок: мост ресурсов → общие helpers → базовый CanvasImage → CanvasAvatar → CanvasAvatarGroup. Если первый релиз ограничится только аватарами, можно отложить регистрацию публичного CanvasImage, сохранив общий внутренний слой. Не создавать второй URL-кэш или отдельный loader для Image.

Проверки общего слоя: широкое/высокое изображение для каждого fit, прозрачный PNG, пустой URL, нулевые размеры, стабильный layout до/после загрузки, повтор одного URL в Image и Avatar, корректное восстановление clip. Проверки cold load и виртуализации остаются общими из раздела 16.7.


## 18. Реализация варианта A — 29.09.2026

### 18.1. Что добавлено

- Публичные `Canvas.Image`, `Canvas.Avatar`, `Canvas.AvatarGroup`, их props и общие типы через TableCanvas. Публичный `interaction` не раскрыт; items имеют отдельный тип, children запрещены типами и runtime-проверкой.
- Image использует src и фиксированный layout, default fit=cover, также contain/fill. Avatar использует url, name, customText, default size=s; четыре размера и метрики FinAI. Группа сама рассчитывает visible/total/hidden, не требует Avatar children.
- Проброшен один штатный Glide imageLoader, colIndex/rowIndex копируются из текущего draw. Бизнес-строка не используется как индекс. Loader callback/window не переназначаются. Никаких новых зависимостей или копии Glide renderer.
- Общие helpers `imageRects`/`paintImage` обслуживают Image и Avatar. Clip и drawImage исполняются синхронно в одной custom-команде. При готовом фото инициалы не рисуются под прозрачными участками PNG.
- Группа — CanvasContainer с абсолютными Avatar-нодами. Стабильный source-order определяет владельца перекрытия; callback проверяет event.target. Hover заново определяется перед paint при каждом rebuild. Tooltip использует существующий portal и включается автоматически при заданном tooltip; overflow получает точное +N по умолчанию.
- Для прямого возврата Image/Avatar/AvatarGroup из renderCell добавляется внутренний контейнер: grid-sized root не затирает размеры нового примитива.
- Добавлены `avatarBackground` и отдельный `avatarText` во все canvas-палитры. Исходные значения сверены с установленными CSS FinAI/light/dark/HC/beta; light-фон затем уточнён по макету (§18.7). Отдельный text-токен позволяет исправить dark Avatar, не менять оформление остальных потребителей текущего textAccent. Общая dark-палитра таблицы по-прежнему частично скопирована из light.

### 18.2. Storybook и воспроизводимость

Новые разделы находятся в `TableCanvas/CanvasElements/CanvasImage`, `CanvasAvatar`, `CanvasAvatarGroup`. Есть API MDX и обзор. Тестовые изображения создаются SVG-генератором в `CanvasAvatar/avatarFixtures.ts`. Восемь первоначальных PNG удалены. Обычные stories используют стабильные data URL, MSW возвращает сгенерированный SVG для задержек и виртуализации; внешняя сеть не требуется.

Истории: Image Fits; Avatar ContentAndSizes, ChangingUrl, Loading (MSW-задержка 2 секунды и кнопка повторного сценария); AvatarGroup Playground, CountsAndClipping, Virtualized (700 строк с уникальными URL на строку), MultipleTables, Backgrounds. В рабочих примерах задан copyData с именами и неизвестным остатком. Строковый formatter локален примерам; локализация не зашита в публичный примитив.

Локальный запуск: `node node_modules/storybook/index.js dev -p 4400 --config-dir packages/storybook/.storybook --no-open --ci` из корня dais-ui.

### 18.3. Ограничения проверки

Typecheck установленного окружения воспроизводит пять ошибок в неизменённых местах: отсутствуют Glide `CellBorders`, `horizontalBorder`, `getCellBorder`, `rawLocation`. Для отделения регрессии выполнен typecheck чистого HEAD, распакованного в `/tmp/dais-avatar-baseline.4JNuZY` с той же node_modules: он выдаёт те же ошибки. Это существующее несоответствие установленного форка и исходников; dependency и эти API в рамках Avatar не менялись. Успех Vite-сборки при диагностике declaration plugin не означает чистый typecheck.

Браузерные проверки выполняются в Codex in-app browser с фактическим devicePixelRatio=2. Его доступный viewport API не предоставляет переключение DPR; отдельный реальный прогон DPR=1 не подтверждён. Проверка прозрачных масок не подменяется утверждением о полной pixel-perfect DOM parity.


### 18.4. Выполненные проверки и результат

| Проверка | Результат |
| --- | --- |
| Полный Vitest ui-kit | **29 файлов, 326 тестов прошли**, включая 20 новых сценариев Avatar/Image/Group |
| Повторный focused smoke после финальной правки импортов | **23 теста прошли**: Avatar/Image/Group и существующий CanvasEmbedIconButton |
| Typecheck ui-kit, тестов и Storybook | Во всех трёх — те же 5 диагностик Glide, что на чистом HEAD; новых диагностик в добавленных файлах нет |
| Vite build ui-kit | Завершён, декларации и бандлы созданы; declaration plugin печатает указанные baseline-диагностики |
| Production Storybook build | Завершён, включая новые stories и MDX |
| ESLint новых примитивов/helpers | **Прошёл** с `--no-ignore`, поскольку стандартный ignore исключает этот каталог |
| Browser: основная группа | Фото загружаются, +2 отдельный слот; клики по Анне/Борису и overflow возвращают правильный контент; tooltip имён и +N отображается |
| Browser: контент/геометрия | Все четыре размера, initials/customText, broken URL, transparent PNG, cover/contain/fill, длинный счётчик и клипование узкой колонки просмотрены |
| Browser: загрузка | MSW задерживает фото на 2 секунды: сначала инициалы, затем изображение; размер не меняется. Смена URL меняет изображение |
| Browser: виртуализация | Фото загружены после перехода к строкам 501–508 с уникальными URL; в двух таблицах скролл второй к 513–519 не меняет первую |
| Browser: темы | Переключение FinAI dark проверено через toolbar. Backgrounds показывает прозрачные вырезы на светлом и тёмном фоне. Общий dark-фон таблицы остаётся ограничением текущей темы |
| Browser: плотность | Фактический DPR=2; реальный DPR=1 не проверен, см. 18.3 |

Снимки проверок сохранены в `/tmp/canvas-avatar-verification`: `group-xxl.png`, `group-hover.png`, `image-fits.png`, `avatar-sizes.png`, `counts-clipping.png`, `dark-theme.png`, `virtualized-501.png`, `loading-complete.png`, `changed-photo.png`, `multiple-tables.png`, `backgrounds-hover.png`. Это артефакты ручной проверки, не утверждённые автоматические visual-regression baselines.

Изменения оставлены в рабочем дереве; публикация пакета и изменения репозиториев Plasma/Glide не выполнялись.


### 18.5. Смена фотографии без мерцания

При обновлении URL тот же аватар сохраняет последнее успешно показанное фото до готовности нового. Первая загрузка по-прежнему показывает инициалы. При недоступном новом URL остаётся старое фото, пока оно доступно в Glide; отдельный сигнал ошибки загрузчик не предоставляет.

`CanvasImageTransitions` хранит только URL последнего показанного фото и имя, без копий изображений и собственного загрузчика. Состояние живёт в batcher ячейки, переживает перестроение нод, ограничено рисуемыми Avatar и сбрасывается при смене loader или координат ячейки. Удалённые элементы очищаются после кадра. Смена id/имени, пустой URL и customText сбрасывают предыдущий URL. Для разных участников с одинаковыми именами необходимы разные id/key; в группе это обеспечивается item.id. Ссылки на HTMLImageElement не удерживаются: Glide может переиспользовать их после выхода из окна виртуализации.

В story «Смена фото без мерцания» новый URL задерживается через MSW на 1,5 секунды для проверки сохранения старого фото. Unit-проверки покрывают перестроение дерева, несколько последовательных смен URL, готовность нового изображения, сброс идентичности/контекста, удаление ноды и вытеснение фото загрузчиком.

Пример «Первая загрузка — инициалы» при повторе меняет URL и id аватара, чтобы воспроизводить первую загрузку, а не обновление уже показанного фото. Пример смены фото сохраняет id. Подписи, описания Docs и Show code отражают это различие.


### 18.6. SVG fixtures вместо PNG

Один `createAvatarSvg` формирует самостоятельный SVG с явными width/height/viewBox, цветом участника и опциональным прозрачным фоном. `createAvatarImage` кодирует его в data URL. Статические fixtures формируются на уровне модуля, чтобы их URL не менялись между рендерами. В MSW-сценариях SVG возвращается с Content-Type image/svg+xml. Для виртуализации сохранены уникальные HTTP URL по строкам; query-параметры не добавляются к data URL. Show code включает исходники генератора и сохраняет рабочие примеры без длинных сериализованных SVG-строк.


### 18.7. Уточнение реализации по макетам и ревью (30.09.2026)

- `CanvasRenderArgs.row` — числовой индекс, как в Glide. Необязательный `rowData` хранится отдельно; сам Glide не передаёт его при draw. Для кликов бизнес-строка приходит из `rows[index]`, для tooltip — из `cellInfo.row`.
- `imageResources` хранит числовые координаты. Ссылку на временный объект нашего `getCellIndices` сохранять нельзя: следующий вызов меняет этот объект.
- Одиночные Image/Avatar/AvatarGroup оборачиваются в контейнер ячейки, чтобы её ширина и высота не перезаписали размеры примитива.
- Светлый фон по предоставленному макету: `#199AF0` с непрозрачностью 20% = `#199AF033`. Это осознанное отличие от исходного Plasma `#118CDF33`. Используется отдельный `avatarBackground`; остальные темы сохраняют предыдущие значения. Текст light — `#0B7ECB`.
- Текст зависит от Avatar.size: 8/14/20/32 px, вес 600. Семейство наследуется из темы таблицы; размер обычного текста ячейки не наследуется. По умолчанию это SB Sans Text, хотя в макете указан SB Sans Display. Дополнительный font prop не вводится.
- Коэффициенты масок Plasma вынесены в `AVATAR_GROUP_GEOMETRY`: шаг 0.8D, радиус выреза 0.58D, центры справа 1.3D и слева −0.3D.
- JSX builder отдельно создаёт каждый тип ноды; общий helper переносит позиционирование, включает тултип и вызывает внутренние обработчики перед пользовательскими.


Проверки после уточнения:

- Полный ui-kit: 29 файлов, 349 тестов; после сортировки импортов повторно прошли 43 теста Avatar.
- Typecheck ui-kit, tests и Storybook: новых ошибок нет; остаются пять прежних ошибок интеграции Glide (`CellBorders`, `horizontalBorder`, `getCellBorder`, `rawLocation`).
- Production-сборка Storybook успешна. Генераторы типов и функций для API / Show code обновлены.
- Анализ исполняемых импортов от входов TableCanvas и TableGlide: 865 модулей против 859 в HEAD. Обе группы циклических зависимостей совпадают с HEAD; новые примитивы не добавили циклов. Существующие циклы находятся в старых модулях Table/FiltersActions и TableCanvas/widgets.
- В браузере просмотрены все четыре размера, светлый фон, готовые фотографии и инициалы, одиночный Avatar без контейнера до/после загрузки, клики по участникам и +N, документация и Show code. Снимок: `/tmp/avatar-refine-visual/sizes.jpg`.
- Hover-маски, восстановление hover и tooltip-контекст подтверждены unit-тестами. В этой браузерной сессии устойчивое состояние чистого наведения зафиксировать не удалось: доступное управление указателем предоставляет click/drag, но не отдельное перемещение без нажатия. Визуальную перепроверку hover и открытого тултипа нельзя считать завершённой.


### 18.8. Применение style без проверки классов в builder

Image, Avatar и AvatarGroup объединяют частичные стили в собственном `set style`, а `get style` возвращает `super.style` — по существующему подходу Checkbox/Button/Link. Builder снова выполняет обычное `node.style = props.style` без списка классов. Это сохраняет размеры и `flexShrink: 0` и при JSX, и при прямом присваивании стиля ноде. Явно переданные свойства имеют приоритет. Общий setter CanvasNode и поведение остальных примитивов не менялись.

46 тестов Avatar прошли, включая три новые проверки частичного обновления стиля и сохранения размеров в узкой ячейке.
