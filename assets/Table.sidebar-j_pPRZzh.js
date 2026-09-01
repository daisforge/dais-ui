import{j as e}from"./react-D2T61mpp.js";import{c6 as r,c7 as d,c0 as l}from"./vendor-DV2KdZ5r.js";import{T as c}from"./Table.sidebar.stories-BwB-m-55.js";import"./react-is-Clcustum.js";import"./styled-components-B-oogN2m.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-ote7_b2_.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-xgFuavQC.js";import"./FiltersActions-DP2v3BHl.js";import"./IconButton-BLqfRDb9.js";import"./@salutejs/plasma-icons-BcApNSC-.js";import"./@salutejs/sdds-finai-DjKHUVIR.js";import"./@salutejs/sdds-themes-CUTvIVmO.js";import"./utils-C2v3RG48.js";import"./constants-BudGGuoE.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-C4aqnFI9.js";import"./TextField-C-mzEJZ-.js";import"./sharedUtilsInputs-CEUY7-Bg.js";import"./AnalyticalWidget-DKd0bsXm.js";import"./Collapse-0UnD82N6.js";import"./Table-Csuvp2Qp.js";import"./react-data-grid-5SLMzt16.js";import"./TableTabs-u6HBlsm2.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-DFU4zpjH.js";import"./ListOfFilters-CcSoCsRE.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DzpvhCi2.js";import"./EmptyState-D8tjAmO4.js";import"./MassActions-B80w6JTh.js";import"./Autocomplete-3aLp74TY.js";import"./TableGlide-BMCA_ct2.js";import"./@glideappsfinal/glide-data-grid-C5jg3NuH.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-Bx1OSbWa.js";function s(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c,name:"Docs"}),`
`,e.jsx(n.h1,{id:"sidebar-tablecanvas",children:"Sidebar (TableCanvas)"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"tableConfig.sidebarConfig"})}),`
`,e.jsx(n.p,{children:"Правая панель таблицы с вкладками. Открывается через кнопку-шестерёнку в controlBlock. Позволяет управлять настройками таблицы, фильтрацией и колонками."}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Три стандартные вкладки: колонки, настройки таблицы, фильтры"}),`
`,e.jsxs(n.li,{children:["Добавление пользовательских вкладок через ",e.jsx(n.code,{children:"customTabs"})]}),`
`,e.jsxs(n.li,{children:["Управление порядком кастомных вкладок через ",e.jsx(n.code,{children:"customTabsOrder"})]}),`
`,e.jsxs(n.li,{children:["Кастомизация стандартных вкладок через ",e.jsx(n.code,{children:"defaultTabs"})]}),`
`,e.jsxs(n.li,{children:["Отключение sidebar через ",e.jsx(n.code,{children:"enabled: false"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"стандартные-вкладки",children:"Стандартные вкладки"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Настройка колонок"})," (",e.jsx(n.code,{children:"columns"}),") — управление видимостью, порядком и закреплением колонок. Появляется автоматически при наличии ",e.jsx(n.code,{children:"columnsControl"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Настройки таблицы"})," (",e.jsx(n.code,{children:"tableSettings"}),") — итоговые строки, выбор строк, кастомные фичи из ControlBlock. Поддерживает ",e.jsx(n.code,{children:"customGeneralSettingsSlot"})," для дополнительного контента"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Фильтры"})," (",e.jsx(n.code,{children:"filtering"}),") — управление фильтрацией данных. Появляется автоматически при наличии ",e.jsx(n.code,{children:"filtering"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"кастомизация-стандартных-вкладок",children:"Кастомизация стандартных вкладок"}),`
`,e.jsxs(n.p,{children:["Через ",e.jsx(n.code,{children:"defaultTabs"})," можно переопределить:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"label"})," — текст на горизонтальном табе в рамках общего одного таба со всеми дефолтными настройками"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"title"})," — заголовок в шапке сайдбара"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"domMetadata"})," — data-атрибуты для тестирования и аналитики"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"titleRightSlot"})," — кастомный элемент справа от заголовка"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"iconTooltipText"})," — текст тултипа у иконки шестеренки (передаем данное свойство только табу с id ",e.jsx(n.code,{children:"tableSettings"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"showInSidebar"})," — управление видимостью дефолтного таба"]}),`
`]}),`
`,e.jsx(n.h3,{id:"полное-отключение-стандартных-вкладок",children:"Полное отключение стандартных вкладок"}),`
`,e.jsxs(n.p,{children:["каждому табу в рамках массива ",e.jsx(n.code,{children:"defaultTabs"})," передать свойство ",e.jsx(n.code,{children:"showInSidebar"}),"=",e.jsx(n.code,{children:"true"})]}),`
`,e.jsx(n.h2,{id:"пользовательские-вкладки",children:"Пользовательские вкладки"}),`
`,e.jsxs(n.p,{children:["Через ",e.jsx(n.code,{children:"customTabs"})," можно добавить произвольные вкладки с ",e.jsx(n.code,{children:"label"}),", ",e.jsx(n.code,{children:"icon"})," и ",e.jsx(n.code,{children:"renderContent"}),"."]}),`
`,e.jsx(n.h2,{id:"управление-состоянием-сайдбара",children:"Управление состоянием сайдбара"}),`
`,e.jsxs(n.p,{children:["По умолчанию сайдбар закрыт (uncontrolled). Стартовое и внешнее состояние настраивается через ",e.jsx(n.code,{children:"sidebarConfig"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultOpen"})," — сайдбар открыт сразу при первом рендере."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultActiveTabId"})," — какая вкладка выбрана по умолчанию. Актуально при открытом сайдбаре; если id не найден или у вкладки ",e.jsx(n.code,{children:"showInSidebar=false"}),", берётся первая доступная."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"openState"})," — внешний контроль открытия/закрытия (",e.jsx(n.code,{children:"[boolean, setter]"}),"). Если передан, ",e.jsx(n.code,{children:"defaultOpen"})," игнорируется."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"activeTabState"})," — внешний контроль активной вкладки (",e.jsx(n.code,{children:"[string | null, setter]"}),"). Позволяет, например, открыть нужную вкладку по кнопке над таблицей. Если передан, ",e.jsx(n.code,{children:"defaultActiveTabId"})," игнорируется."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onActiveTabChange"})," — колбэк смены активной вкладки. Вызывается и в uncontrolled-режиме; при закрытии сайдбара приходит ",e.jsx(n.code,{children:"null"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Активная вкладка имеет смысл только при открытом сайдбаре — при закрытии она сбрасывается в ",e.jsx(n.code,{children:"null"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Подробнее о типах — ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-sidebar-api--docs",children:"Sidebar API"})]}),`
`]}),`
`,e.jsx(l,{})]})}function N(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{N as default};
