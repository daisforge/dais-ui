import{j as e}from"./react-D2T61mpp.js";import{c2 as s,c3 as l,bY as c}from"./vendor-Q_a-vZxa.js";import{T as d}from"./TableCanvas.filtering.stories-_dMa2Jas.js";import"./react-is-Clcustum.js";import"./styled-components-BEUoKpTk.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-BrdyFHCL.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CK57Dyn0.js";import"./FiltersActions-B-mBzd1m.js";import"./IconButton-CAd1yL2a.js";import"./@salutejs/plasma-icons-CyB4sZm3.js";import"./@salutejs/sdds-finai-DlWkRcaV.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-CVuocYtt.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DPpgRiC8.js";import"./TextField-DnCCqDPb.js";import"./sharedUtilsInputs-Cb9Dqfue.js";import"./AnalyticalWidget-CFaIt6MZ.js";import"./Collapse-hikrfMQ3.js";import"./Table-DZrBAsi_.js";import"./react-data-grid-Di3Gdpz3.js";import"./TableTabs-DE_IuWyO.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-C6ZDRcIM.js";import"./ListOfFilters-ByqPjdsY.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CE0F4EJa.js";import"./EmptyState-C_R0nxfe.js";import"./MassActions-DWGb3um6.js";import"./Autocomplete-BanrLP6T.js";import"./TableGlide-ChEefO75.js";import"./@glideappsfinal/glide-data-grid-Cq3uVkfu.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-vISWMkkh.js";function r(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d,name:"Docs"}),`
`,e.jsx(i.h1,{id:"filtering",children:"Filtering"}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"tableConfig.filtering"})}),`
`,e.jsx(i.p,{children:"Фильтрация данных таблицы с поддержкой автоматического и ручного режимов."}),`
`,e.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Три типа фильтров: ",e.jsx(i.code,{children:"input"}),", ",e.jsx(i.code,{children:"select"}),", ",e.jsx(i.code,{children:"custom"})]}),`
`,e.jsxs(i.li,{children:["Автоматическая фильтрация по умолчанию, ручная через ",e.jsx(i.code,{children:"manualFiltering: true"})]}),`
`,e.jsx(i.li,{children:"Отображение активных фильтров в виде chip-элементов"}),`
`,e.jsx(i.li,{children:"Поддержка фильтрации через sidebar с настройкой порядка и глобальных фильтров"}),`
`,e.jsx(i.li,{children:"Кастомизация chip-стилей и лейблов"}),`
`]}),`
`,e.jsx(i.h2,{id:"типы-фильтров",children:"Типы фильтров"}),`
`,e.jsx(i.h3,{id:"input",children:"Input"}),`
`,e.jsxs(i.p,{children:["Текстовый фильтр с режимами: ",e.jsx(i.code,{children:"'includes'"}),", ",e.jsx(i.code,{children:"'startWith'"}),", ",e.jsx(i.code,{children:"'equal'"})," или кастомная функция."]}),`
`,e.jsx(i.h3,{id:"select",children:"Select"}),`
`,e.jsxs(i.p,{children:["Фильтр выбором из списка. Поддержка одиночного (",e.jsx(i.code,{children:"'single'"}),") и множественного (",e.jsx(i.code,{children:"'multiple'"}),") выбора."]}),`
`,e.jsx(i.h3,{id:"custom",children:"Custom"}),`
`,e.jsxs(i.p,{children:["Полностью кастомный компонент фильтра через ",e.jsx(i.code,{children:"customRender"}),"."]}),`
`,e.jsx(i.h2,{id:"конфигурация-filteringconfig",children:"Конфигурация FilteringConfig"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"state"})})," ",e.jsx(i.code,{children:"[T, setState]"})," — стейт фильтров (обязательный)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"manualFiltering"})})," ",e.jsx(i.code,{children:"boolean"})," — ручная фильтрация (данные не фильтруются таблицей)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"filtersInfo"})})," ",e.jsx(i.code,{children:"Record<keyof T, { label, clearedValue }>"})," — метки и дефолтные значения фильтров"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"sidebarConfig"})})," ",e.jsx(i.code,{children:"{ order?, items }"})," — конфигурация sidebar с фильтрами"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"chipStyle"})})," ",e.jsx(i.code,{children:"(itemOrGroup, item) => CSSObject"})," — кастомные стили для chip-элементов"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"renderGroupLabel"})})," ",e.jsx(i.code,{children:"(group) => string"})," — кастомный заголовок группы чипсов"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"renderChipLabel"})})," ",e.jsx(i.code,{children:"(group, item) => string"})," — кастомный текст чипса"]}),`
`]}),`
`,e.jsx(i.h2,{id:"кастомизация-чипсов",children:"Кастомизация чипсов"}),`
`,e.jsx(i.h3,{id:"chipstyle",children:"chipStyle"}),`
`,e.jsx(i.p,{children:"Позволяет динамически задавать стили для каждого чипа фильтра в зависимости от его типа и содержимого."}),`
`,e.jsx(i.h3,{id:"rendergrouplabel",children:"renderGroupLabel"}),`
`,e.jsx(i.p,{children:"Форматтер заголовка группы чипсов. Полезен для i18n или добавления счётчика выбранных элементов."}),`
`,e.jsx(i.h3,{id:"renderchiplabel",children:"renderChipLabel"}),`
`,e.jsxs(i.p,{children:["Форматтер текста внутри чипса. Полезен при серверной пагинации, когда в стейте хранится только ",e.jsx(i.code,{children:"value"}),", а ",e.jsx(i.code,{children:"label"})," подставляется из кэша."]}),`
`,e.jsx(i.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["При ",e.jsx(i.code,{children:"manualFiltering: true"})," таблица не фильтрует данные — ожидается внешняя логика (серверная)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"sidebarConfig"})," позволяет добавлять глобальные фильтры, не привязанные к колонкам"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"filtersInfo"})," задаёт лейблы и значения по умолчанию для каждого фильтра"]}),`
`]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["Подробнее о типах — ",e.jsx(i.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-filtering-api--docs",children:"Filtering API"})]}),`
`]}),`
`,e.jsx(c,{})]})}function H(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{H as default};
