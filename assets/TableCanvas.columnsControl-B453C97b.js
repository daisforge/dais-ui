import{j as n}from"./react-CAOzMBF_.js";import{cg as s,ch as r,ca as c}from"./vendor-CvBXOjQ8.js";import{T as l}from"./TableCanvas.columnsControl.stories-CRRjHz4U.js";import"./react-is-vVGXX3JE.js";import"./styled-components-BAnxJVQm.js";import"./@tanstack/react-virtual-Dq53HtnB.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DUx_jmLE.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-DBguVV_s.js";import"./TableCanvas-C7zQu677.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-D7J-sht1.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CrMFu5No.js";import"./@salutejs/plasma-icons-DBF9uERs.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-DQIafXVH.js";import"./IconButton-LdqUAZ_9.js";import"./TextField-CdBvT56k.js";import"./sharedUtilsInputs-CObshIdX.js";import"./AiAgentPopup-Daf-hVjc.js";import"./TextArea-DhB5rG4k.js";import"./sharedUtilsResizable-Bp8tiGu6.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-DEW4FVpB.js";import"./Collapse-DYelOQTz.js";import"./react-data-grid-C2AVEiS5.js";import"./TableTabs-BVHE5GYe.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-htUiPmaO.js";import"./@glideappsfinal/glide-data-grid-Bcb-KcLM.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DCkteRAr.js";import"./ListOfFilters-CdRKRvdX.js";import"./lodash.isequal-DxetvuAY.js";import"./NumberFormat-dsupaZnR.js";import"./EmptyState-BCVYrGwr.js";import"./MassActions-CrRWBdJV.js";import"./Autocomplete-ZEOAEz0E.js";import"./ErrorPage-BVW6VF7x.js";function d(i){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:l,name:"Docs"}),`
`,n.jsx(e.h1,{id:"columnscontrol-tablecanvas",children:"ColumnsControl (TableCanvas)"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"tableConfig.columnsControl"})}),`
`,n.jsx(e.p,{children:"Настройка колонок таблицы: скрытие, закрепление, изменение порядка (через Aside-панель и drag в header)."}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Активация через ",n.jsx(e.code,{children:"enable: true"})," — включает все подфичи по умолчанию"]}),`
`,n.jsxs(e.li,{children:["Скрытие колонок через свитчи в Aside (",n.jsx(e.code,{children:"hiding"}),")"]}),`
`,n.jsxs(e.li,{children:["Закрепление колонок (",n.jsx(e.code,{children:"pinning"}),")"]}),`
`,n.jsxs(e.li,{children:["Перетаскивание колонок в Aside (",n.jsx(e.code,{children:"reorderingAside"}),") и через header (",n.jsx(e.code,{children:"reorderingHeader"}),")"]}),`
`,n.jsxs(e.li,{children:["Дефолтные состояния при первом рендере (",n.jsx(e.code,{children:"pinnedDefault"}),", ",n.jsx(e.code,{children:"hiddenDefault"}),", ",n.jsx(e.code,{children:"orderDefault"}),")"]}),`
`,n.jsxs(e.li,{children:["Управление скрытыми колонками извне (",n.jsx(e.code,{children:"hiddenState"}),")"]}),`
`,n.jsxs(e.li,{children:["Переопределение названий колонок в Aside (",n.jsx(e.code,{children:"columnsLabel"}),")"]}),`
`,n.jsxs(e.li,{children:["Колбэк при применении настроек (",n.jsx(e.code,{children:"onConfirm"}),")"]}),`
`,n.jsxs(e.li,{children:["Синий индикатор скрытых столбцов в шапке (",n.jsx(e.code,{children:"hiddenColumnsIndicator"}),")"]}),`
`]}),`
`,n.jsx(e.h2,{id:"подфичи",children:"Подфичи"}),`
`,n.jsxs(e.p,{children:["Каждая подфича по умолчанию наследует значение ",n.jsx(e.code,{children:"enable"}),". Можно отключить отдельно:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"hiding"})})," — скрытие/показ колонок через свитчи. ",n.jsx(e.code,{children:"disableHiding"})," исключает конкретные колонки"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"pinning"})})," — закрепление колонок слева. ",n.jsx(e.code,{children:"disablePinning"})," исключает конкретные колонки"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"reorderingAside"})})," — drag-and-drop порядка колонок в Aside-панели"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"reorderingHeader"})})," — drag-and-drop заголовков колонок прямо в таблице. ",n.jsx(e.code,{children:"onReorderingHeader"})," — callback с новым порядком"]}),`
`]}),`
`,n.jsx(e.h2,{id:"дефолтные-состояния",children:"Дефолтные состояния"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"pinnedDefault"})})," — массив ключей колонок, закреплённых при первом рендере"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"hiddenDefault"})})," — массив ключей скрытых колонок при первом рендере"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"orderDefault"})})," — массив ключей, определяющий начальный порядок колонок"]}),`
`]}),`
`,n.jsx(e.h2,{id:"управление-скрытыми-колонками-извне-hiddenstate",children:"Управление скрытыми колонками извне (hiddenState)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"hiddenDefault"})," читается только при первом рендере. Если набор скрытых колонок зависит от состояния страницы, например часть колонок нужна только в режиме редактирования, список хранится у продукта и передаётся парой ",n.jsx(e.code,{children:"hiddenState: [hidden, setHidden]"}),", как значение и сеттер из ",n.jsx(e.code,{children:"useState"}),"."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Таблица показывает и прячет колонки по этому значению и не пересоздаётся: прокрутка, выделение, закрепление и порядок колонок сохраняются."}),`
`,n.jsxs(e.li,{children:["Свитчи в Aside, индикатор скрытых столбцов, меню закрепления и сеттеры в ",n.jsx(e.code,{children:"onConfirm"})," пишут через переданный сеттер, так что продукт всегда видит актуальный список."]}),`
`,n.jsxs(e.li,{children:["Когда ",n.jsx(e.code,{children:"hiddenState"})," передан, ",n.jsx(e.code,{children:"hiddenDefault"})," не читается. При ",n.jsx(e.code,{children:"hiding: false"})," скрытие выключено целиком: видны все колонки, значение ",n.jsx(e.code,{children:"hiddenState"})," не применяется. По умолчанию ",n.jsx(e.code,{children:"hiding"})," равен ",n.jsx(e.code,{children:"enable"}),", поэтому без ",n.jsx(e.code,{children:"enable: true"})," скрытие тоже не работает."]}),`
`,n.jsxs(e.li,{children:["Сеттер должен принимать и значение, и функцию от прежнего значения, как сеттер из ",n.jsx(e.code,{children:"useState"}),". Если состояние лежит в сторе, нужна обёртка, которая это умеет."]}),`
`,n.jsx(e.li,{children:"Если скрыть колонку, по которой отсортированы строки, сортировка снимается."}),`
`,n.jsx(e.li,{children:"Свои колонки удобно менять функциональным сеттером: тогда колонки, которые скрыл пользователь, остаются скрытыми."}),`
`,n.jsxs(e.li,{children:["Если показ зависит от режима редактирования, меняйте режим и ",n.jsx(e.code,{children:"hiddenState"})," в одном обработчике, тогда таблица перерисуется один раз."]}),`
`,n.jsxs(e.li,{children:["Колонку с парой key/text обозначайте исходным ключом из ",n.jsx(e.code,{children:"columnConfig"}),": он скрывает обе колонки пары, в том числе в режиме «Ключ», где на экране видна колонка второго ключа. Второй ключ без исходного пару не скрывает. Таблица пишет в список только исходный ключ, а ",n.jsx(e.code,{children:"onConfirm.hidden"})," отдаёт оба ключа пары; такой список тоже снимается одним исходным ключом."]}),`
`,n.jsxs(e.li,{children:["Массив держите в ",n.jsx(e.code,{children:"useState"}),", а не создавайте заново на каждом рендере."]}),`
`,n.jsxs(e.li,{children:["Не копируйте ",n.jsx(e.code,{children:"hidden"})," из ",n.jsx(e.code,{children:"onConfirm"})," обратно в ",n.jsx(e.code,{children:"hiddenState"}),": состояние уже обновлено через сеттер, повторная запись даст лишнюю перерисовку."]}),`
`,n.jsxs(e.li,{children:["В режиме ",n.jsx(e.code,{children:"confirm"})," изменение ",n.jsx(e.code,{children:"hiddenState"})," при открытой панели сбрасывает её неприменённые правки скрытия, как и закрепление из шапки."]}),`
`]}),`
`,n.jsx(e.p,{children:"Смена скрытых колонок только отфильтровывает готовые колонки: они не собираются заново, а строки не пересортировываются, если скрытая колонка не участвует в сортировке."}),`
`,n.jsx(e.p,{children:"Пример — стори «ColumnsControl: управление скрытыми столбцами извне»."}),`
`,n.jsx(e.h2,{id:"onconfirm",children:"onConfirm"}),`
`,n.jsxs(e.p,{children:["Callback вызывается при нажатии «Применить» в Aside. Получает текущее состояние (",n.jsx(e.code,{children:"pinned"}),", ",n.jsx(e.code,{children:"order"}),", ",n.jsx(e.code,{children:"hidden"}),", ",n.jsx(e.code,{children:"changed"}),") и сеттеры для программного управления состоянием."]}),`
`,n.jsx(e.h2,{id:"режим-применения-applymode",children:"Режим применения (applyMode)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"confirm"})})," (по умолчанию) — панель копит изменения локально, внизу кнопки «Отменить» и «Применить». В таблицу и в ",n.jsx(e.code,{children:"onConfirm"})," изменения уходят только по кнопке «Применить»."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"instant"})})," — кнопок нет. Каждое действие в панели (свитч видимости, пин, перенос, «открепить все», «сбросить порядок», «включить все столбцы») сразу меняет таблицу и вызывает ",n.jsx(e.code,{children:"onConfirm"})," с тем же контрактом, что и кнопка «Применить». Поле ",n.jsx(e.code,{children:"changed"})," описывает разницу с предыдущим применённым состоянием. Изменения вне панели (пин в шапке, перенос заголовка, раскрытие скрытых столбцов, запись в ",n.jsx(e.code,{children:"hiddenState"}),") ",n.jsx(e.code,{children:"onConfirm"})," не вызывают. Если сеттер продукта отказал или записал не то, что передала панель (например, обрезал список), ",n.jsx(e.code,{children:"onConfirm"})," тоже не вызывается."]}),`
`]}),`
`,n.jsx(e.p,{children:"Пример — стори «Мгновенное применение»."}),`
`,n.jsx(e.h2,{id:"индикатор-скрытых-столбцов-hiddencolumnsindicator",children:"Индикатор скрытых столбцов (hiddenColumnsIndicator)"}),`
`,n.jsx(e.p,{children:"Когда между двумя видимыми колонками спрятаны столбцы, на границе в шапке вместо обычного бордера рисуется толстая синяя полосатая линия. Так пользователь видит, что тут есть скрытый промежуток, и может быстро его раскрыть."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Фича ",n.jsx(e.strong,{children:"нативная"}),": включается сама вместе с ",n.jsx(e.code,{children:"hiding"}),". Отдельно управляется флагом ",n.jsx(e.code,{children:"hiddenColumnsIndicator"})," (по умолчанию ",n.jsx(e.code,{children:"true"})," при активном ",n.jsx(e.code,{children:"hiding"}),"). Отключается ",n.jsx(e.code,{children:"hiddenColumnsIndicator: false"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Одна полоса на весь промежуток"}),": сколько бы столбцов ни было скрыто подряд, линия одна. Двойной клик раскрывает сразу весь промежуток."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Наведение"})," на линию показывает тултип «Дважды нажмите, чтобы развернуть»."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Ресайз"})," соседней колонки за эту же границу работает как обычно (тянем перетаскиванием), меняется только двойной клик: он раскрывает промежуток вместо автосайза. Если полоса высокая, тянуть за ресайз можно по всей её высоте, а не только в листовом ряду."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Края таблицы"}),": если скрыт первый или последний столбец, линия прижимается к левому или правому краю."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Сгруппированная шапка"}),": фича относится только к колонкам, сами группы не скрываются, а высота полосы подстраивается под то, что скрыто. Если спрятаны только листья внутри групп, полоса низкая (в листовом ряду). Если среди скрытых есть большая колонка верхнего уровня, полоса тянется вверх на всю высоту шапки. Высоту дополнительно ограничивает общая группа видимых соседей: пока они под одной группой, полоса не поднимается выше её низа."]}),`
`]}),`
`,n.jsx(e.h3,{id:"onhiddencolumnsindicatorexpand",children:"onHiddenColumnsIndicatorExpand"}),`
`,n.jsxs(e.p,{children:["Колбэк-уведомление о раскрытии промежутка двойным кликом. Само раскрытие (снятие скрытия) делает обёртка; колбэк нужен, чтобы продукт мог подписаться на это событие. В него приходит объект с полями: ",n.jsx(e.code,{children:"keys"})," (ключи раскрываемых столбцов), ",n.jsx(e.code,{children:"leftKey"})," и ",n.jsx(e.code,{children:"rightKey"})," (видимые соседи слева и справа от линии, ",n.jsx(e.code,{children:"undefined"})," на краю таблицы)."]}),`
`,n.jsxs(e.p,{children:["Срабатывает ",n.jsx(e.strong,{children:"только"})," на двойной клик по линии индикатора. Обычное изменение видимости через панель настройки колонок (Aside) или контекстное меню продукта его не вызывает: для этих сценариев есть общий стейт скрытых колонок и ",n.jsx(e.code,{children:"onConfirm"}),"."]}),`
`,n.jsx(e.p,{children:"Примеры: стори «ColumnsControl: индикатор скрытых столбцов» и рядом (по бокам, выключен, в группе, в скваш-колонках)."}),`
`,n.jsx(e.h2,{id:"меню-закрепления-в-контрл-блоке-pinningmenu",children:"Меню закрепления в контрл-блоке (pinningMenu)"}),`
`,n.jsxs(e.p,{children:["Когда включено ",n.jsx(e.code,{children:"pinning"}),", в правой зоне иконок контрл-блока автоматически появляется нативная кнопка-иконка (пин + шеврон) — быстрый доступ к закреплению выбранных колонок, дополняющий Aside-панель. Задаётся через ",n.jsx(e.code,{children:"controlBlock.pinningMenu"}),"."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Фича ",n.jsx(e.strong,{children:"нативная"}),": появляется сама при активном ",n.jsx(e.code,{children:"pinning"}),", отдельно включать не нужно. Отключается ",n.jsx(e.code,{children:"controlBlock.pinningMenu.enable: false"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Размеры"})," завязаны на размер контрл-блока (",n.jsx(e.code,{children:"controlBlock.size"}),") — в компактном (",n.jsx(e.code,{children:"xs"}),") ужимается вместе с остальными иконками."]}),`
`,n.jsxs(e.li,{children:["Участвует в ",n.jsx(e.strong,{children:"компрессии"}),": при нехватке места уезжает в overflow-меню ",n.jsx(e.code,{children:"…"})," вложенным подменю."]}),`
`]}),`
`,n.jsx(e.p,{children:"Пункты меню:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Стандартные (из коробки):"})," «Открепить всё» и «Закрепить столбцы»."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Свои пункты"})," — через ",n.jsx(e.code,{children:"pinningMenu.items"})," (напр. «Закрепить строки», «Закрепить шапку»). Порядок задаётся ",n.jsx(e.code,{children:"order"})," (у нативных: ",n.jsx(e.code,{children:"Открепить всё"})," = 100, ",n.jsx(e.code,{children:"Закрепить столбцы"})," = 200), разделитель после пункта — ",n.jsx(e.code,{children:"dividerAfter"}),". Совпадение ",n.jsx(e.code,{children:"value"})," с нативным = переопределение."]}),`
`,n.jsxs(e.li,{children:["Состояние и иконку продуктовых пунктов ",n.jsx(e.strong,{children:"контролирует продукт"})," (иконка — ",n.jsx(e.code,{children:"ReactNode"})," или функция от ",n.jsx(e.code,{children:"rowSize"}),", может отражать состояние)."]}),`
`]}),`
`,n.jsx(e.p,{children:"Левая иконка (кнопка-действие):"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Синеет, когда среди ",n.jsx(e.strong,{children:"видимых"})," колонок есть хотя бы одна закреплённая (скрыли видимость закреплённой — снова обычный цвет)."]}),`
`,n.jsx(e.li,{children:"Tooltip и действие зависят от выделения: нет выделения — подсказка выбрать колонки; выбраны незакреплённые — «Закрепить»; выбраны только закреплённые — «Открепить»."}),`
`,n.jsxs(e.li,{children:["После закрепления выделение ",n.jsx(e.strong,{children:"переезжает"})," за колонками (закреплённые уезжают влево), соседние сливаются без разделителей."]}),`
`,n.jsxs(e.li,{children:["Клик по действию закрепления ",n.jsx(e.strong,{children:"без выделенных колонок"})," шлёт событие в ",n.jsx(e.code,{children:"tableConfig.notifications"})," (",n.jsx(e.code,{children:"type: 'pin'"}),", ",n.jsx(e.code,{children:"code: 'no-selection'"}),") — продукт показывает свою подсказку. Подробнее — в разделе ",n.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-notifications--docs",children:"Notifications"}),"."]}),`
`]}),`
`,n.jsx(e.p,{children:"Пример добавления своих пунктов — в стори «ColumnsControl: доп. пункты меню закрепления»."}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Подробнее о типах и пропсах — ",n.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-columnscontrol-api--docs",children:"ColumnsControl API"})]}),`
`]}),`
`,n.jsx(c,{})]})}function Y(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(d,{...i})}):d(i)}export{Y as default};
