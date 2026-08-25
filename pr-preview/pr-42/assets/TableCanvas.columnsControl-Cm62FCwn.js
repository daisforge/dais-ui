import{j as n}from"./react-D2T61mpp.js";import{c4 as s,c5 as d,b_ as c}from"./vendor-B9_16pJt.js";import{T as o}from"./TableCanvas.columnsControl.stories-Ds-YYjcq.js";import"./react-is-Clcustum.js";import"./styled-components-DsyoZJDS.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-DiJAdvEC.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-B55i4OlY.js";import"./TableCanvas-ByZWopgp.js";import"./FiltersActions-O5t9w8O4.js";import"./IconButton-BKcoDZsO.js";import"./@salutejs/plasma-icons-Dv1GxiBC.js";import"./@salutejs/sdds-finai-IZHEqlfF.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-D0DbmO16.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-DFKursCu.js";import"./sharedUtilsInputs-CGph2UpZ.js";import"./AnalyticalWidget-DLYuQFti.js";import"./Collapse-Caa0z_Ow.js";import"./Table-CglBQ-O2.js";import"./react-data-grid-CD7lGWrv.js";import"./TableTabs-DPTpudh-.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-BB99zeRt.js";import"./ListOfFilters-CRZsNuJw.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DbkvCu90.js";import"./EmptyState-C5WIHYMF.js";import"./MassActions-Cnw9OCOO.js";import"./Autocomplete-CjMKfftZ.js";import"./TableGlide-CULzmtyb.js";import"./@glideappsfinal/glide-data-grid-0ct_A4wu.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-CqpYoKmB.js";function r(i){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:o,name:"Docs"}),`
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
`,n.jsxs(e.li,{children:["Переопределение названий колонок в Aside (",n.jsx(e.code,{children:"columnsLabel"}),")"]}),`
`,n.jsxs(e.li,{children:["Колбэк при применении настроек (",n.jsx(e.code,{children:"onConfirm"}),")"]}),`
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
`,n.jsx(e.h2,{id:"onconfirm",children:"onConfirm"}),`
`,n.jsxs(e.p,{children:["Callback вызывается при нажатии «Применить» в Aside. Получает текущее состояние (",n.jsx(e.code,{children:"pinned"}),", ",n.jsx(e.code,{children:"order"}),", ",n.jsx(e.code,{children:"hidden"}),", ",n.jsx(e.code,{children:"changed"}),") и сеттеры для программного управления состоянием."]}),`
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
`,n.jsx(c,{})]})}function O(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{O as default};
