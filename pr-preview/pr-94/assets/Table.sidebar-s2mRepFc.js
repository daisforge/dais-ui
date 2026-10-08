import{j as e}from"./react-D2T61mpp.js";import{cg as s,ch as d,ca as l}from"./vendor-DXdfnwad.js";import{T as c}from"./Table.sidebar.stories-0nz8b-gQ.js";import"./react-is-Clcustum.js";import"./styled-components-C8QokrFs.js";import"./@tanstack/react-virtual-cZI7JMKe.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-fXm3C628.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CVDJrWJb.js";import"./FiltersActions-aJaeqtti.js";import"./IconButton-Bl2UBdAa.js";import"./@salutejs/plasma-icons-EjQFeqZJ.js";import"./@salutejs/sdds-finai-DV8XcQV0.js";import"./@salutejs/sdds-themes-DL6tmVfr.js";import"./utils-DPjVldhU.js";import"./constants-rCJTDDk_.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CA0XSL2K.js";import"./TextField-VTRFhKVE.js";import"./sharedUtilsInputs-CuFk2zN1.js";import"./AiAgentPopup-BLFPDkW5.js";import"./TextArea-yHmHiOj9.js";import"./sharedUtilsResizable-CAZWAHxi.js";import"./Table-BCrtpPFY.js";import"./Collapse-fFVUKsg0.js";import"./react-data-grid-B52RWvTe.js";import"./TableTabs-3MefgBAM.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-6sr9gTuy.js";import"./ListOfFilters-BgvN0Ngs.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BKvjTwEP.js";import"./EmptyState-DfxP_Lxo.js";import"./MassActions-C9XZXzdZ.js";import"./Autocomplete-DfjSvcGN.js";import"./TableGlide-BNjefo9T.js";import"./@glideappsfinal/glide-data-grid-YheYrnEY.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DfBl-5Zu.js";function r(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c,name:"Docs"}),`
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
`,e.jsx(l,{})]})}function V(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{V as default};
