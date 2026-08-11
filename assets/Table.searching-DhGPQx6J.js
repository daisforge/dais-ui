import{j as e}from"./react-D2T61mpp.js";import{c2 as s,c3 as c,bY as o}from"./vendor-Q_a-vZxa.js";import{T as l}from"./Table.searching.stories-b3SnU84B.js";import"./react-is-Clcustum.js";import"./styled-components-BEUoKpTk.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-BrdyFHCL.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-D8HUedaB.js";import"./FiltersActions-Bchg31Hk.js";import"./IconButton-CAd1yL2a.js";import"./@salutejs/plasma-icons-CyB4sZm3.js";import"./@salutejs/sdds-finai-DlWkRcaV.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-CVuocYtt.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DPpgRiC8.js";import"./TextField-DnCCqDPb.js";import"./sharedUtilsInputs-Cb9Dqfue.js";import"./AnalyticalWidget-CFaIt6MZ.js";import"./Collapse-hikrfMQ3.js";import"./react-data-grid-Di3Gdpz3.js";import"./TableTabs-DE_IuWyO.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-C6ZDRcIM.js";import"./ListOfFilters-C5Apgwx-.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CE0F4EJa.js";import"./EmptyState-C_R0nxfe.js";import"./MassActions-CFD3HnUh.js";import"./Autocomplete-BanrLP6T.js";function i(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:l,name:"Docs"}),`
`,e.jsx(n.h1,{id:"searching-table",children:"Searching (Table)"}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Контролируемый и неконтролируемый поиск"}),`
`,e.jsx(n.li,{children:"Ручной поиск для серверных сценариев"}),`
`,e.jsx(n.li,{children:"История автодополнения в поиске"}),`
`]}),`
`,e.jsx(n.p,{children:"Компонент Table предоставляет расширенные возможности поиска по данным, включая клиентскую и серверную фильтрацию, а также автокомплит с подсказками."}),`
`,e.jsx(n.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Включение/выключение функционала поиска (",e.jsx(n.code,{children:"enabled"}),")"]}),`
`,e.jsxs(n.li,{children:["Начальное значение поиска (",e.jsx(n.code,{children:"defaultSearchQuery"}),")"]}),`
`,e.jsxs(n.li,{children:["Управление видимостью UI поиска (",e.jsx(n.code,{children:"showSearchBlock"}),")"]}),`
`,e.jsxs(n.li,{children:["Контролируемый и неконтролируемый режимы (",e.jsx(n.code,{children:"searchQueryState"}),")"]}),`
`,e.jsxs(n.li,{children:["Настройка debounce для оптимизации производительности (",e.jsx(n.code,{children:"debounceDelay"}),")"]}),`
`,e.jsxs(n.li,{children:["Ручной режим поиска — по Enter или клику (",e.jsx(n.code,{children:"searchOnType: false"}),")"]}),`
`,e.jsxs(n.li,{children:["Автокомплит с подсказками (",e.jsx(n.code,{children:"autocomplete"}),")"]}),`
`]}),`
`,e.jsx(n.h2,{id:"режимы-поиска",children:"Режимы поиска"}),`
`,e.jsx(n.h3,{id:"автоматический-по-умолчанию",children:"Автоматический (по умолчанию)"}),`
`,e.jsx(n.p,{children:"Поиск запускается при вводе текста с debounce. Подходит для клиентской фильтрации."}),`
`,e.jsxs(n.h3,{id:"по-нажатию-searchontype-false",children:["По нажатию (",e.jsx(n.code,{children:"searchOnType: false"}),")"]}),`
`,e.jsx(n.p,{children:"Поиск запускается только по нажатию Enter или клику на иконку. Подходит для серверной фильтрации и больших наборов данных."}),`
`,e.jsxs(n.h3,{id:"ручной-manualsearching-true",children:["Ручной (",e.jsx(n.code,{children:"manualSearching: true"}),")"]}),`
`,e.jsxs(n.p,{children:["Фронтенд-фильтрация отключена. Данные фильтруются на бэкенде, результат передаётся в ",e.jsx(n.code,{children:"rows"}),"."]}),`
`,e.jsx(n.h2,{id:"автокомплит",children:"Автокомплит"}),`
`,e.jsxs(n.p,{children:["При передаче ",e.jsx(n.code,{children:"autocomplete"})," в конфигурацию поиска поле ввода заменяется на компонент Autocomplete с выпадающим списком подсказок. С помощью пропсов Autocomplete можно настроить историю поиска, кастомизировать рендер элементов и другое. Подробнее — в разделе ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-table-searching-api--docs",children:"API"}),"."]}),`
`,e.jsx(n.h2,{id:"пагинация-и-поиск",children:"Пагинация и поиск"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Важно:"})," если в таблице используется пагинация, поиск необходимо либо ",e.jsx(n.strong,{children:"отключать"}),", либо ",e.jsx(n.strong,{children:"переводить в ручной режим"})," (",e.jsx(n.code,{children:"manualSearching: true"}),") и фильтровать строки самостоятельно с учётом всех страниц, взаимодействуя с бэкендом. Клиентский поиск при пагинации будет фильтровать только текущую страницу, что приведёт к некорректным результатам."]}),`
`]}),`
`,e.jsx(n.h2,{id:"приоритет-фильтрации",children:"Приоритет фильтрации"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Сначала применяется глобальный поиск (если ",e.jsx(n.code,{children:"manualSearching"})," выключен)"]}),`
`,e.jsx(n.li,{children:"Затем применяются колоночные фильтры (если есть)"}),`
`]}),`
`,e.jsx(o,{})]})}function U(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{U as default};
