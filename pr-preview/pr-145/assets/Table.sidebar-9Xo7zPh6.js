import{j as n}from"./react-D2T61mpp.js";import{cf as l,cg as s,c9 as o}from"./vendor-nSnuiptw.js";import{T as d}from"./Table.sidebar.stories-BB48wJul.js";import"./react-is-Clcustum.js";import"./styled-components-DsZNNs-w.js";import"./@tanstack/react-virtual-CAA0jjtQ.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-fXsRFEYa.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-S7696BPp.js";import"./FiltersActions-nBCTBnD3.js";import"./IconButton-CbPE_gWK.js";import"./@salutejs/plasma-icons-B_eXmh7u.js";import"./@salutejs/sdds-finai-CSFR0wVB.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-CHPzWAFN.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-JCo3npGg.js";import"./TextField-D7ZIctgB.js";import"./sharedUtilsInputs-DXjvF4h5.js";import"./AiAgentPopup-BuoscS2N.js";import"./TextArea-9kPq7Mwk.js";import"./sharedUtilsResizable-D3z9f6ge.js";import"./Collapse-dtWSPupa.js";import"./react-data-grid-C6hzsMmi.js";import"./TableTabs-BgUcvYrN.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-CWOrlegB.js";import"./@glideappsfinal/glide-data-grid-CdjXxGhJ.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BefrI-5j.js";import"./ListOfFilters-BQ0OPniP.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-8FbLn3N1.js";import"./EmptyState-CvzOjQ3o.js";import"./MassActions-RUCSa28k.js";import"./Autocomplete-CtDF64kr.js";function e(r){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:d,name:"Docs"}),`
`,n.jsx(i.h1,{id:"tablesidebar",children:"TableSidebar"}),`
`,n.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Правая боковая панель таблицы"}),`
`,n.jsx(i.li,{children:"Кастомные tabs и стандартные tabs таблицы"}),`
`,n.jsx(i.li,{children:"Интеграция с controlBlock и настройками фич"}),`
`]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"tableConfig.sidebarConfig"})}),`
`,n.jsx(i.p,{children:`Компонент Table предоставляет гибкую настройку сайдбара с вкладками,
позволяя добавлять новые.`}),`
`,n.jsx(i.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsx(i.h3,{id:"гибкая-настройка-вкладок",children:"Гибкая настройка вкладок"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Добавление пользовательских вкладок"}),`
`,n.jsx(i.li,{children:"Настройка порядка отображения"}),`
`]}),`
`,n.jsx(i.h3,{id:"стандартные-вкладки",children:"Стандартные вкладки"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Настройка колонок"})," (",n.jsx(i.code,{children:"columns"}),")"]}),`
`]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Управление видимостью, порядком и закреплением колонок"}),`
`]}),`
`,n.jsxs(i.ol,{start:"2",children:[`
`,n.jsx(i.li,{children:n.jsx(i.strong,{children:"Настройки таблицы"})}),`
`]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Управление итоговыми строками, выбором строк, инструментами в строках + кастомные фичи, которые не помещаются в ControlBlock"}),`
`]}),`
`,n.jsxs(i.ol,{start:"3",children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Фильтры"})," (",n.jsx(i.code,{children:"filtering"}),")"]}),`
`]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Управление фильтрацией данных"}),`
`]}),`
`,n.jsx(i.h3,{id:"управление-состоянием-сайдбара",children:"Управление состоянием сайдбара"}),`
`,n.jsxs(i.p,{children:["По умолчанию сайдбар закрыт (uncontrolled). Стартовое и внешнее состояние настраивается через ",n.jsx(i.code,{children:"sidebarConfig"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"defaultOpen"})," — сайдбар открыт сразу при первом рендере."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"defaultActiveTabId"})," — какая вкладка выбрана по умолчанию. Актуально при открытом сайдбаре; если id не найден или у вкладки ",n.jsx(i.code,{children:"showInSidebar=false"}),", берётся первая доступная."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"openState"})," — внешний контроль открытия/закрытия (",n.jsx(i.code,{children:"[boolean, setter]"}),"). Если передан, ",n.jsx(i.code,{children:"defaultOpen"})," игнорируется."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"activeTabState"})," — внешний контроль активной вкладки (",n.jsx(i.code,{children:"[string | null, setter]"}),"). Позволяет, например, открыть нужную вкладку по кнопке над таблицей. Если передан, ",n.jsx(i.code,{children:"defaultActiveTabId"})," игнорируется."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"onActiveTabChange"})," — колбэк смены активной вкладки. Вызывается и в uncontrolled-режиме; при закрытии сайдбара приходит ",n.jsx(i.code,{children:"null"}),"."]}),`
`]}),`
`,n.jsxs(i.p,{children:["Активная вкладка имеет смысл только при открытом сайдбаре — при закрытии она сбрасывается в ",n.jsx(i.code,{children:"null"}),"."]}),`
`,n.jsxs(i.p,{children:["Описание типов - в разделе ",n.jsx(i.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-table-sidebar-api--docs",children:"API"}),"."]}),`
`,n.jsx(o,{})]})}function Q(r={}){const{wrapper:i}={...l(),...r.components};return i?n.jsx(i,{...r,children:n.jsx(e,{...r})}):e(r)}export{Q as default};
