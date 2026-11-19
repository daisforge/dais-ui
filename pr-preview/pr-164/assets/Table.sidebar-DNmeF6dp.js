import{j as n}from"./react-B60MRyL7.js";import{ck as o}from"./vendor-BOXbJjQW.js";import{M as l,S as s}from"./WithTooltip-KJL26V4Q-D1oqEq-B.js";import{T as t}from"./Table.sidebar.stories-DqkOLt6o.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-DN-dyp3E.js";import"./@tanstack/react-virtual--f9HMX-L.js";import"./preload-helper-Rbr_SUQB.js";import"./index-Cu4lwwaE.js";import"./index-B3szzMwc.js";import"./@salutejs/plasma-icons-LsCQzLxj.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-CbpbGoVx.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-fGUkz_i2.js";import"./index-b7WWv5em.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./@salutejs/sdds-finai-DDW327_Q.js";import"./Box-JkhPdOcO.js";import"./Collapse-BNL-7RWo.js";import"./utils-Bs8ZiKbo.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-Cyhpllwh.js";import"./TableTabs-dzgHMZvw.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DUjkhz5W.js";import"./@glideappsfinal/glide-data-grid-CaPCdkNo.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-DQwhVP-7.js";import"./TextField-B86jICzu.js";import"./sharedUtilsInputs-uFKaIJDG.js";import"./TypographyWithAutoTooltip-D4bbCBGZ.js";import"./Typography-Dhksu6ui.js";import"./ListOfFilters-D7npQKzu.js";import"./FiltersActions-B9A7BCia.js";import"./IconButton-CqyDmNx8.js";import"./TooltipList-CJDTIlLy.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-_bpb5vRV.js";import"./NumberFormat-CmAELO3o.js";import"./EmptyState-CciL3-J3.js";import"./unidentified@3x-DpaHf-Py.js";import"./MassActions-2-wzgpjN.js";import"./Autocomplete-MlzChFIs.js";function e(r){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:t,name:"Docs"}),`
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
`,n.jsx(s,{})]})}function on(r={}){const{wrapper:i}={...o(),...r.components};return i?n.jsx(i,{...r,children:n.jsx(e,{...r})}):e(r)}export{on as default};
