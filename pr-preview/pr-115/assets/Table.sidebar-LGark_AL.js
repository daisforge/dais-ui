import{j as e}from"./react-D2T61mpp.js";import{cg as s,ch as c,ca as r}from"./vendor-DytfkxZa.js";import{T as l}from"./Table.sidebar.stories-CqIyUus2.js";import"./react-is-Clcustum.js";import"./styled-components-DtjY5eIH.js";import"./@tanstack/react-virtual-CMbBvweu.js";import"./tslib-DoU9Jm1N.js";import"./getFuncAsString-CiehoYHv.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-Cqd_sxAx.js";import"./FiltersActions-BbzbpGzl.js";import"./IconButton-CjBwG6MJ.js";import"./@salutejs/plasma-icons-DjnWHCmH.js";import"./@salutejs/sdds-finai-CUQOpsCT.js";import"./@salutejs/sdds-themes-qyCoD_pW.js";import"./utils-DvMjk4sn.js";import"./constants-DI5pidOH.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BiStHutz.js";import"./TextField-DPQLjTxL.js";import"./sharedUtilsInputs-B0Z3RgiF.js";import"./AnalyticalWidget-8C6KZAoO.js";import"./Collapse-HzfvcQkf.js";import"./Table-DTTgU6fK.js";import"./react-data-grid-DH1VEV1U.js";import"./TableTabs-DzhZa-1k.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DnRbcD6U.js";import"./ListOfFilters-D06BT2Zo.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-oYlOiJp2.js";import"./EmptyState-C06GSPsG.js";import"./MassActions-RyqVh5jm.js";import"./Autocomplete-CNHPz3h8.js";import"./TableGlide-DPdzgWdw.js";import"./@glideappsfinal/glide-data-grid-u6Jxz2sP.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-3fS8ikOo.js";import"./Table.sidebar.examples-C1qYFhCk.js";function d(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:l,name:"Docs"}),`
`,e.jsx(i.h1,{id:"sidebar-tablecanvas",children:"Sidebar (TableCanvas)"}),`
`,e.jsxs(i.p,{children:["Боковые панели таблицы с независимыми вкладками и произвольным React-контентом. Левая панель задаётся через ",e.jsx(i.code,{children:"tableConfig.leftSidebarConfig"}),", правая — через ",e.jsx(i.code,{children:"tableConfig.rightSidebarConfig"}),"."]}),`
`,e.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Пользовательские вкладки с обеих сторон: навигация, сведения, дополнительные действия."}),`
`,e.jsx(i.li,{children:"Встроенные настройки таблицы, колонок и фильтров в правой панели."}),`
`,e.jsx(i.li,{children:"Независимое управление открытием и активной вкладкой каждой панели."}),`
`,e.jsxs(i.li,{children:["Динамическая ширина в пикселях, CSS-единицах, процентах и ",e.jsx(i.code,{children:"calc()"}),"."]}),`
`,e.jsx(i.li,{children:"Разная ширина панели для разных вкладок."}),`
`,e.jsxs(i.li,{children:["Совместимость правой панели с ",e.jsx(i.code,{children:"tableConfig.sidebarConfig"}),"."]}),`
`]}),`
`,e.jsx(i.h2,{id:"левая-и-правая-панели",children:"Левая и правая панели"}),`
`,e.jsx(i.p,{children:"Настройки пользовательских вкладок, ширины и открытия одинаковы для обеих сторон. Панелями можно управлять независимо."}),`
`,e.jsxs(i.p,{children:["Слева доступны пользовательские вкладки. Справа дополнительно поддерживается ",e.jsx(i.code,{children:"defaultTabs"})," для встроенных настроек таблицы, колонок и фильтров. Обе панели могут быть открыты одновременно на разных вкладках."]}),`
`,e.jsxs(i.p,{children:["Для правой панели ",e.jsx(i.code,{children:"sidebarConfig"})," поддерживается как алиас ",e.jsx(i.code,{children:"rightSidebarConfig"}),". Если переданы оба имени, используется ",e.jsx(i.code,{children:"rightSidebarConfig"}),"."]}),`
`,e.jsx(i.h2,{id:"пользовательские-вкладки",children:"Пользовательские вкладки"}),`
`,e.jsxs(i.p,{children:["В ",e.jsx(i.code,{children:"customTabs"})," передайте вкладки с уникальным ",e.jsx(i.code,{children:"id"}),", текстом подсказки ",e.jsx(i.code,{children:"label"}),", иконкой ",e.jsx(i.code,{children:"icon"})," и содержимым ",e.jsx(i.code,{children:"content: ReactNode"}),". На полоске вкладок показывается иконка. ",e.jsx(i.code,{children:"title"})," задаёт заголовок открытого контента; если его нет, используется ",e.jsx(i.code,{children:"label"}),". ",e.jsx(i.code,{children:"titleRightSlot"})," добавляет элемент справа от заголовка. ",e.jsx(i.code,{children:"domMetadata"})," позволяет добавить data-атрибуты и классы для тестирования и аналитики."]}),`
`,e.jsxs(i.p,{children:["Тип пользовательской вкладки импортируется как ",e.jsx(i.code,{children:"TableCanvasSidebarTab"})," из ",e.jsx(i.code,{children:"@daisforge/ui/components/TableCanvas"}),"."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"showInSidebar: false"})," скрывает вкладку. Через ",e.jsx(i.code,{children:"customTabsOrder"})," можно изменить порядок пользовательских вкладок. Клик по вкладке открывает её; повторный клик по активной вкладке или крестик закрывает соответствующую панель. ",e.jsx(i.code,{children:"enabled: false"})," отключает интерфейс панели."]}),`
`,e.jsx(i.h2,{id:"встроенные-настройки-справа",children:"Встроенные настройки справа"}),`
`,e.jsx(i.p,{children:"Настройки открываются одной кнопкой-шестерёнкой. Внутри доступны разделы:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Общие настройки"})," (",e.jsx(i.code,{children:"tableSettings"}),") — итоговые строки, выбор строк и пользовательские возможности из ControlBlock. ",e.jsx(i.code,{children:"customGeneralSettingsSlot"})," добавляет контент после общих настроек."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Колонки"})," (",e.jsx(i.code,{children:"columns"}),") — видимость, порядок и закрепление колонок. Доступен при включённом ",e.jsx(i.code,{children:"columnsControl"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Фильтры"})," (",e.jsx(i.code,{children:"filtering"}),") — управление фильтрацией данных. Доступен при включённом ",e.jsx(i.code,{children:"filtering"}),"."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Через ",e.jsx(i.code,{children:"defaultTabs"})," можно переопределить подпись ",e.jsx(i.code,{children:"label"}),", заголовок ",e.jsx(i.code,{children:"title"}),", слот ",e.jsx(i.code,{children:"titleRightSlot"}),", метаданные ",e.jsx(i.code,{children:"domMetadata"})," и видимость ",e.jsx(i.code,{children:"showInSidebar"}),". Для ",e.jsx(i.code,{children:"tableSettings"})," также доступны ",e.jsx(i.code,{children:"customGeneralSettingsSlot"})," и ",e.jsx(i.code,{children:"iconTooltipText"})," — тултип кнопки-шестерёнки."]}),`
`,e.jsxs(i.p,{children:["Чтобы убрать все встроенные вкладки, передайте ",e.jsx(i.code,{children:"showInSidebar: false"})," для каждого ID: ",e.jsx(i.code,{children:"tableSettings"}),", ",e.jsx(i.code,{children:"columns"})," и ",e.jsx(i.code,{children:"filtering"}),". Пустой массив ",e.jsx(i.code,{children:"defaultTabs"})," не отключает автоматически появляющиеся настройки."]}),`
`,e.jsx(i.h2,{id:"управление-открытием-и-вкладкой",children:"Управление открытием и вкладкой"}),`
`,e.jsx(i.p,{children:"По умолчанию каждая панель закрыта. Можно задать начальное открытие и вкладку или управлять ими из своего компонента."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"defaultOpen"})," открывает панель при первом рендере."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"defaultActiveTabId"})," выбирает начальную вкладку. Если её нет или она скрыта, используется первая доступная."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"openState: [open, setOpen]"})," управляет открытием извне; при его наличии ",e.jsx(i.code,{children:"defaultOpen"})," игнорируется."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"activeTabState: [activeTabId, setActiveTabId]"})," управляет активной вкладкой извне; при его наличии ",e.jsx(i.code,{children:"defaultActiveTabId"})," игнорируется."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"onActiveTabChange(id, tab)"})," сообщает о выборе вкладки. При закрытии ",e.jsx(i.code,{children:"id"})," равен ",e.jsx(i.code,{children:"null"}),"."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Для внешнего открытия конкретной вкладки передайте ",e.jsx(i.code,{children:"openState"})," и ",e.jsx(i.code,{children:"activeTabState"}),", затем установите нужный ID и ",e.jsx(i.code,{children:"open: true"}),"."]}),`
`,e.jsx(i.h2,{id:"ширина",children:"Ширина"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"width"})," задаёт ширину контента без полоски вкладок 44px. Слева ширина контента по умолчанию 300px, справа — 400px; целиком открытые панели занимают 344px и 444px соответственно."]}),`
`,e.jsxs(i.p,{children:["Число означает пиксели; строка позволяет задать CSS-размер: ",e.jsx(i.code,{children:"'320px'"}),", ",e.jsx(i.code,{children:"'25%'"}),", ",e.jsx(i.code,{children:"'calc(20% + 40px)'"}),". Проценты считаются от общей ширины рабочей области TableCanvas. Изменение ",e.jsx(i.code,{children:"width"})," обновляет размер открытой панели; переход анимируется за 0.5 секунды."]}),`
`,e.jsxs(i.p,{children:["У отдельной вкладки нет собственного ",e.jsx(i.code,{children:"width"}),". Для разных размеров вкладок меняйте ширину панели по ID в ",e.jsx(i.code,{children:"onActiveTabChange"}),". При ",e.jsx(i.code,{children:"null"})," оставляйте прежний размер. Примеры ниже показывают 300px слева и 400px справа для вкладки «Отчёты», а для «Книги» — 35%."]}),`
`,e.jsx(i.p,{children:"На узком контейнере с левой или обеими панелями их контент сжимается, оставляя место для данных; полоски вкладок сохраняют ширину 44px. Если задана только правая панель, её ширина не сжимается."}),`
`,e.jsx(i.h2,{id:"хуки-внутри-контента",children:"Хуки внутри контента"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import {
  useLeftSidebar,
  useRightSidebar,
  useSidebar,
} from '@daisforge/ui/components/TableCanvas';
`})}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"useLeftSidebar()"})," возвращает ",e.jsx(i.code,{children:"isOpen"}),", ",e.jsx(i.code,{children:"width: string | number"})," и ",e.jsx(i.code,{children:"toggle()"}),". Шириной слева управляет ",e.jsx(i.code,{children:"leftSidebarConfig.width"}),"."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"useRightSidebar()"})," и его алиас ",e.jsx(i.code,{children:"useSidebar()"})," возвращают ",e.jsx(i.code,{children:"isOpen"}),", ",e.jsx(i.code,{children:"width: number"}),", ",e.jsx(i.code,{children:"toggle()"})," и ",e.jsx(i.code,{children:"setWidth(number)"}),". Если ширина не задана через ",e.jsx(i.code,{children:"rightSidebarConfig.width"}),", её можно менять вызовом ",e.jsx(i.code,{children:"setWidth(number)"}),"; по умолчанию она равна 400px. Ширина из конфига имеет приоритет."]}),`
`,e.jsxs(i.p,{children:["Используйте эти хуки в компонентах, переданных в ",e.jsx(i.code,{children:"content"})," вкладки. ",e.jsx(i.code,{children:"useLeftSidebar"})," и ",e.jsx(i.code,{children:"useRightSidebar"})," также доступны из ",e.jsx(i.code,{children:"@daisforge/ui"}),". Для TableCanvas импортируйте ",e.jsx(i.code,{children:"useSidebar"})," из ",e.jsx(i.code,{children:"@daisforge/ui/components/TableCanvas"}),": ",e.jsx(i.code,{children:"useSidebar"})," из корневого ",e.jsx(i.code,{children:"@daisforge/ui"})," относится к компоненту ",e.jsx(i.code,{children:"Table"}),"."]}),`
`,e.jsx(i.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsx(i.p,{children:"Панели отображаются в режиме строк. При сворачивании таблицы они скрываются и исключаются из фокуса; размеры и выбранные вкладки сохраняются до разворачивания. Поддерживаются полноэкранный режим и совместная работа с нижней панелью BottomSheet."}),`
`,e.jsx(i.p,{children:"Открытие любой Sidebar автоматически сворачивает панель массовых действий. Она автоматически разворачивается после закрытия всех Sidebar. Ручное сворачивание и разворачивание остаются доступными."}),`
`,e.jsxs(i.p,{children:["Нижняя панель и совместный пример со сворачиванием, пагинацией и другими возможностями — в разделе ",e.jsx(i.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-bottomsheet--docs",children:"BottomSheet"}),"."]}),`
`,e.jsx(i.h2,{id:"примеры",children:"Примеры"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"С кастомной вкладкой"})," — информация о строках и текущем выделении в правой панели."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Открыт по умолчанию"})," — начальная пользовательская вкладка."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Внешнее управление активной вкладкой"})," — открытие выбранной вкладки и закрытие панели кнопками."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Колбэк активной вкладки"})," — текущая вкладка по уведомлениям панели."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Левая панель"})," — пользовательская навигация с поиском, управлением открытием и шириной по ID вкладки."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Правая панель"})," — пользовательский контент с разной шириной вкладок и отключёнными встроенными настройками."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Описание типов — в разделе ",e.jsx(i.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-sidebar-api--docs",children:"Sidebar API"}),"."]}),`
`,e.jsx(r,{})]})}function K(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(d,{...n})}):d(n)}export{K as default};
