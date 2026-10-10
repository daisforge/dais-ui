import{j as n}from"./react-D2T61mpp.js";import{cg as r,ch as s,ca as c}from"./vendor-BGzzYN-b.js";import{T as l}from"./TableCanvas.columnsControl.stories-BTNgimrS.js";import"./react-is-Clcustum.js";import"./styled-components-CD4KFY2h.js";import"./@tanstack/react-virtual-7i3ITNa_.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-fMZZ290W.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-B5Lk0A0c.js";import"./TableCanvas-wkKiHt_9.js";import"./FiltersActions-a7bIw2Fz.js";import"./IconButton-BsuSMrKD.js";import"./@salutejs/plasma-icons-DoqG1pWM.js";import"./@salutejs/sdds-finai-DvhCM2Xz.js";import"./@salutejs/sdds-themes-DL6tmVfr.js";import"./utils-BopI5f_-.js";import"./constants-rCJTDDk_.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-1s64aVQu.js";import"./sharedUtilsInputs-D8S3qiky.js";import"./AiAgentPopup-BjpWl_pW.js";import"./TextArea-Dx3aHTDW.js";import"./sharedUtilsResizable-CdV8UiPe.js";import"./Table-CA6ZUQ5N.js";import"./Collapse-CWsg-GsF.js";import"./react-data-grid-BIBmSmvS.js";import"./TableTabs-BxgxHb0J.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-tcONULjm.js";import"./@glideappsfinal/glide-data-grid-BU--_Fv5.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-y7IwLXgM.js";import"./ListOfFilters-BuQDevqY.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-D8XT1I-j.js";import"./EmptyState-DMkiJ__L.js";import"./MassActions-C5VaWbKf.js";import"./Autocomplete-BFrIC_iF.js";import"./ErrorPage-D7Xw8vJ0.js";function d(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:l,name:"Docs"}),`
`,n.jsx(i.h1,{id:"columnscontrol-tablecanvas",children:"ColumnsControl (TableCanvas)"}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"tableConfig.columnsControl"})}),`
`,n.jsx(i.p,{children:"Настройка колонок таблицы: скрытие, закрепление, изменение порядка (через Aside-панель и drag в header)."}),`
`,n.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Активация через ",n.jsx(i.code,{children:"enable: true"})," — включает все подфичи по умолчанию"]}),`
`,n.jsxs(i.li,{children:["Скрытие колонок через свитчи в Aside (",n.jsx(i.code,{children:"hiding"}),")"]}),`
`,n.jsxs(i.li,{children:["Закрепление колонок (",n.jsx(i.code,{children:"pinning"}),")"]}),`
`,n.jsxs(i.li,{children:["Перетаскивание колонок в Aside (",n.jsx(i.code,{children:"reorderingAside"}),") и через header (",n.jsx(i.code,{children:"reorderingHeader"}),")"]}),`
`,n.jsxs(i.li,{children:["Дефолтные состояния при первом рендере (",n.jsx(i.code,{children:"pinnedDefault"}),", ",n.jsx(i.code,{children:"hiddenDefault"}),", ",n.jsx(i.code,{children:"orderDefault"}),")"]}),`
`,n.jsxs(i.li,{children:["Переопределение названий колонок в Aside (",n.jsx(i.code,{children:"columnsLabel"}),")"]}),`
`,n.jsxs(i.li,{children:["Колбэк при применении настроек (",n.jsx(i.code,{children:"onConfirm"}),")"]}),`
`,n.jsxs(i.li,{children:["Синий индикатор скрытых столбцов в шапке (",n.jsx(i.code,{children:"hiddenColumnsIndicator"}),")"]}),`
`]}),`
`,n.jsx(i.h2,{id:"подфичи",children:"Подфичи"}),`
`,n.jsxs(i.p,{children:["Каждая подфича по умолчанию наследует значение ",n.jsx(i.code,{children:"enable"}),". Можно отключить отдельно:"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:n.jsx(i.code,{children:"hiding"})})," — скрытие/показ колонок через свитчи. ",n.jsx(i.code,{children:"disableHiding"})," исключает конкретные колонки"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:n.jsx(i.code,{children:"pinning"})})," — закрепление колонок слева. ",n.jsx(i.code,{children:"disablePinning"})," исключает конкретные колонки"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:n.jsx(i.code,{children:"reorderingAside"})})," — drag-and-drop порядка колонок в Aside-панели"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:n.jsx(i.code,{children:"reorderingHeader"})})," — drag-and-drop заголовков колонок прямо в таблице. ",n.jsx(i.code,{children:"onReorderingHeader"})," — callback с новым порядком"]}),`
`]}),`
`,n.jsx(i.h2,{id:"дефолтные-состояния",children:"Дефолтные состояния"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:n.jsx(i.code,{children:"pinnedDefault"})})," — массив ключей колонок, закреплённых при первом рендере"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:n.jsx(i.code,{children:"hiddenDefault"})})," — массив ключей скрытых колонок при первом рендере"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:n.jsx(i.code,{children:"orderDefault"})})," — массив ключей, определяющий начальный порядок колонок"]}),`
`]}),`
`,n.jsx(i.h2,{id:"onconfirm",children:"onConfirm"}),`
`,n.jsxs(i.p,{children:["Callback вызывается при нажатии «Применить» в Aside. Получает текущее состояние (",n.jsx(i.code,{children:"pinned"}),", ",n.jsx(i.code,{children:"order"}),", ",n.jsx(i.code,{children:"hidden"}),", ",n.jsx(i.code,{children:"changed"}),") и сеттеры для программного управления состоянием."]}),`
`,n.jsx(i.h2,{id:"индикатор-скрытых-столбцов-hiddencolumnsindicator",children:"Индикатор скрытых столбцов (hiddenColumnsIndicator)"}),`
`,n.jsx(i.p,{children:"Когда между двумя видимыми колонками спрятаны столбцы, на границе в шапке вместо обычного бордера рисуется толстая синяя полосатая линия. Так пользователь видит, что тут есть скрытый промежуток, и может быстро его раскрыть."}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Фича ",n.jsx(i.strong,{children:"нативная"}),": включается сама вместе с ",n.jsx(i.code,{children:"hiding"}),". Отдельно управляется флагом ",n.jsx(i.code,{children:"hiddenColumnsIndicator"})," (по умолчанию ",n.jsx(i.code,{children:"true"})," при активном ",n.jsx(i.code,{children:"hiding"}),"). Отключается ",n.jsx(i.code,{children:"hiddenColumnsIndicator: false"}),"."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Одна полоса на весь промежуток"}),": сколько бы столбцов ни было скрыто подряд, линия одна. Двойной клик раскрывает сразу весь промежуток."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Наведение"})," на линию показывает тултип «Дважды нажмите, чтобы развернуть»."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Ресайз"})," соседней колонки за эту же границу работает как обычно (тянем перетаскиванием), меняется только двойной клик: он раскрывает промежуток вместо автосайза. Если полоса высокая, тянуть за ресайз можно по всей её высоте, а не только в листовом ряду."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Края таблицы"}),": если скрыт первый или последний столбец, линия прижимается к левому или правому краю."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Сгруппированная шапка"}),": фича относится только к колонкам, сами группы не скрываются, а высота полосы подстраивается под то, что скрыто. Если спрятаны только листья внутри групп, полоса низкая (в листовом ряду). Если среди скрытых есть большая колонка верхнего уровня, полоса тянется вверх на всю высоту шапки. Высоту дополнительно ограничивает общая группа видимых соседей: пока они под одной группой, полоса не поднимается выше её низа."]}),`
`]}),`
`,n.jsx(i.h3,{id:"onhiddencolumnsindicatorexpand",children:"onHiddenColumnsIndicatorExpand"}),`
`,n.jsxs(i.p,{children:["Колбэк-уведомление о раскрытии промежутка двойным кликом. Само раскрытие (снятие скрытия) делает обёртка; колбэк нужен, чтобы продукт мог подписаться на это событие. В него приходит объект с полями: ",n.jsx(i.code,{children:"keys"})," (ключи раскрываемых столбцов), ",n.jsx(i.code,{children:"leftKey"})," и ",n.jsx(i.code,{children:"rightKey"})," (видимые соседи слева и справа от линии, ",n.jsx(i.code,{children:"undefined"})," на краю таблицы)."]}),`
`,n.jsxs(i.p,{children:["Срабатывает ",n.jsx(i.strong,{children:"только"})," на двойной клик по линии индикатора. Обычное изменение видимости через панель настройки колонок (Aside) или контекстное меню продукта его не вызывает: для этих сценариев есть общий стейт скрытых колонок и ",n.jsx(i.code,{children:"onConfirm"}),"."]}),`
`,n.jsx(i.p,{children:"Примеры: стори «ColumnsControl: индикатор скрытых столбцов» и рядом (по бокам, выключен, в группе, в скваш-колонках)."}),`
`,n.jsx(i.h2,{id:"меню-закрепления-в-контрл-блоке-pinningmenu",children:"Меню закрепления в контрл-блоке (pinningMenu)"}),`
`,n.jsxs(i.p,{children:["Когда включено ",n.jsx(i.code,{children:"pinning"}),", в правой зоне иконок контрл-блока автоматически появляется нативная кнопка-иконка (пин + шеврон) — быстрый доступ к закреплению выбранных колонок, дополняющий Aside-панель. Задаётся через ",n.jsx(i.code,{children:"controlBlock.pinningMenu"}),"."]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Фича ",n.jsx(i.strong,{children:"нативная"}),": появляется сама при активном ",n.jsx(i.code,{children:"pinning"}),", отдельно включать не нужно. Отключается ",n.jsx(i.code,{children:"controlBlock.pinningMenu.enable: false"}),"."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Размеры"})," завязаны на размер контрл-блока (",n.jsx(i.code,{children:"controlBlock.size"}),") — в компактном (",n.jsx(i.code,{children:"xs"}),") ужимается вместе с остальными иконками."]}),`
`,n.jsxs(i.li,{children:["Участвует в ",n.jsx(i.strong,{children:"компрессии"}),": при нехватке места уезжает в overflow-меню ",n.jsx(i.code,{children:"…"})," вложенным подменю."]}),`
`]}),`
`,n.jsx(i.p,{children:"Пункты меню:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Стандартные (из коробки):"})," «Открепить всё» и «Закрепить столбцы»."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Свои пункты"})," — через ",n.jsx(i.code,{children:"pinningMenu.items"})," (напр. «Закрепить строки», «Закрепить шапку»). Порядок задаётся ",n.jsx(i.code,{children:"order"})," (у нативных: ",n.jsx(i.code,{children:"Открепить всё"})," = 100, ",n.jsx(i.code,{children:"Закрепить столбцы"})," = 200), разделитель после пункта — ",n.jsx(i.code,{children:"dividerAfter"}),". Совпадение ",n.jsx(i.code,{children:"value"})," с нативным = переопределение."]}),`
`,n.jsxs(i.li,{children:["Состояние и иконку продуктовых пунктов ",n.jsx(i.strong,{children:"контролирует продукт"})," (иконка — ",n.jsx(i.code,{children:"ReactNode"})," или функция от ",n.jsx(i.code,{children:"rowSize"}),", может отражать состояние)."]}),`
`]}),`
`,n.jsx(i.p,{children:"Левая иконка (кнопка-действие):"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Синеет, когда среди ",n.jsx(i.strong,{children:"видимых"})," колонок есть хотя бы одна закреплённая (скрыли видимость закреплённой — снова обычный цвет)."]}),`
`,n.jsx(i.li,{children:"Tooltip и действие зависят от выделения: нет выделения — подсказка выбрать колонки; выбраны незакреплённые — «Закрепить»; выбраны только закреплённые — «Открепить»."}),`
`,n.jsxs(i.li,{children:["После закрепления выделение ",n.jsx(i.strong,{children:"переезжает"})," за колонками (закреплённые уезжают влево), соседние сливаются без разделителей."]}),`
`,n.jsxs(i.li,{children:["Клик по действию закрепления ",n.jsx(i.strong,{children:"без выделенных колонок"})," шлёт событие в ",n.jsx(i.code,{children:"tableConfig.notifications"})," (",n.jsx(i.code,{children:"type: 'pin'"}),", ",n.jsx(i.code,{children:"code: 'no-selection'"}),") — продукт показывает свою подсказку. Подробнее — в разделе ",n.jsx(i.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-notifications--docs",children:"Notifications"}),"."]}),`
`]}),`
`,n.jsx(i.p,{children:"Пример добавления своих пунктов — в стори «ColumnsControl: доп. пункты меню закрепления»."}),`
`,n.jsxs(i.blockquote,{children:[`
`,n.jsxs(i.p,{children:["Подробнее о типах и пропсах — ",n.jsx(i.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-columnscontrol-api--docs",children:"ColumnsControl API"})]}),`
`]}),`
`,n.jsx(c,{})]})}function V(e={}){const{wrapper:i}={...r(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(d,{...e})}):d(e)}export{V as default};
