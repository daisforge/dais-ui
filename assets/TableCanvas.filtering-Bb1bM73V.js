import{j as i}from"./react-D2T61mpp.js";import{cg as s,ch as l,ca as c}from"./vendor-By2mUyvN.js";import{T as d}from"./TableCanvas.filtering.stories-BldISRDQ.js";import"./react-is-Clcustum.js";import"./styled-components-BPB167xT.js";import"./@tanstack/react-virtual-D5gG3S4Y.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-D0Pi0Ieo.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-BAebgheD.js";import"./Table-DaRv6zK8.js";import"./FiltersActions-CTR3Fm8A.js";import"./IconButton-CTpYu9_1.js";import"./@salutejs/plasma-icons-BcMtTKus.js";import"./@salutejs/sdds-finai-DyBnscko.js";import"./@salutejs/sdds-themes-DL6tmVfr.js";import"./utils-wfCbPX6f.js";import"./constants-rCJTDDk_.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-DUnsPpPp.js";import"./sharedUtilsInputs-C-L8Cndb.js";import"./AiAgentPopup-C45Hk4IG.js";import"./TextArea-CFK6o8G3.js";import"./sharedUtilsResizable-Cjft9ACi.js";import"./Collapse-BrQHV_dN.js";import"./react-data-grid-DlRlWyaC.js";import"./TableTabs-BYpO7zOG.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DnW94cb9.js";import"./@glideappsfinal/glide-data-grid-C-fDNxVh.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BK2O0N_0.js";import"./ListOfFilters-D4S71X7u.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DY47eufi.js";import"./EmptyState-Cqx44C3J.js";import"./MassActions-DLMB1J6K.js";import"./Autocomplete-L9U2-Hkg.js";import"./TableCanvas-C8V40a0g.js";import"./ErrorPage-BpftJTRS.js";function r(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(l,{of:d,name:"Docs"}),`
`,i.jsx(e.h1,{id:"filtering",children:"Filtering"}),`
`,i.jsx(e.p,{children:i.jsx(e.strong,{children:"tableConfig.filtering"})}),`
`,i.jsx(e.p,{children:"Фильтрация данных таблицы с поддержкой автоматического и ручного режимов."}),`
`,i.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["Три типа фильтров: ",i.jsx(e.code,{children:"input"}),", ",i.jsx(e.code,{children:"select"}),", ",i.jsx(e.code,{children:"custom"})]}),`
`,i.jsxs(e.li,{children:["Автоматическая фильтрация по умолчанию, ручная через ",i.jsx(e.code,{children:"manualFiltering: true"})]}),`
`,i.jsx(e.li,{children:"Отображение активных фильтров в виде chip-элементов"}),`
`,i.jsx(e.li,{children:"Поддержка фильтрации через sidebar с настройкой порядка и глобальных фильтров"}),`
`,i.jsx(e.li,{children:"Кастомизация chip-стилей и лейблов"}),`
`]}),`
`,i.jsx(e.h2,{id:"типы-фильтров",children:"Типы фильтров"}),`
`,i.jsx(e.h3,{id:"input",children:"Input"}),`
`,i.jsxs(e.p,{children:["Текстовый фильтр с режимами: ",i.jsx(e.code,{children:"'includes'"}),", ",i.jsx(e.code,{children:"'startWith'"}),", ",i.jsx(e.code,{children:"'equal'"})," или кастомная функция."]}),`
`,i.jsx(e.h3,{id:"select",children:"Select"}),`
`,i.jsxs(e.p,{children:["Фильтр выбором из списка. Поддержка одиночного (",i.jsx(e.code,{children:"'single'"}),") и множественного (",i.jsx(e.code,{children:"'multiple'"}),") выбора."]}),`
`,i.jsx(e.h3,{id:"custom",children:"Custom"}),`
`,i.jsxs(e.p,{children:["Полностью кастомный компонент фильтра через ",i.jsx(e.code,{children:"customRender"}),"."]}),`
`,i.jsx(e.h2,{id:"конфигурация-filteringconfig",children:"Конфигурация FilteringConfig"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.code,{children:"state"})})," ",i.jsx(e.code,{children:"[T, setState]"})," — стейт фильтров (обязательный)"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.code,{children:"manualFiltering"})})," ",i.jsx(e.code,{children:"boolean"})," — ручная фильтрация (данные не фильтруются таблицей)"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.code,{children:"filtersInfo"})})," ",i.jsx(e.code,{children:"Record<keyof T, { label, clearedValue }>"})," — метки и дефолтные значения фильтров"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.code,{children:"sidebarConfig"})})," ",i.jsx(e.code,{children:"{ order?, items }"})," — конфигурация sidebar с фильтрами"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.code,{children:"chipStyle"})})," ",i.jsx(e.code,{children:"(itemOrGroup, item) => CSSObject"})," — кастомные стили для chip-элементов"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.code,{children:"renderGroupLabel"})})," ",i.jsx(e.code,{children:"(group) => string"})," — кастомный заголовок группы чипсов"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.code,{children:"renderChipLabel"})})," ",i.jsx(e.code,{children:"(group, item) => string"})," — кастомный текст чипса"]}),`
`]}),`
`,i.jsx(e.h2,{id:"кастомизация-чипсов",children:"Кастомизация чипсов"}),`
`,i.jsx(e.h3,{id:"chipstyle",children:"chipStyle"}),`
`,i.jsx(e.p,{children:"Позволяет динамически задавать стили для каждого чипа фильтра в зависимости от его типа и содержимого."}),`
`,i.jsx(e.h3,{id:"rendergrouplabel",children:"renderGroupLabel"}),`
`,i.jsx(e.p,{children:"Форматтер заголовка группы чипсов. Полезен для i18n или добавления счётчика выбранных элементов."}),`
`,i.jsx(e.h3,{id:"renderchiplabel",children:"renderChipLabel"}),`
`,i.jsxs(e.p,{children:["Форматтер текста внутри чипса. Полезен при серверной пагинации, когда в стейте хранится только ",i.jsx(e.code,{children:"value"}),", а ",i.jsx(e.code,{children:"label"})," подставляется из кэша."]}),`
`,i.jsx(e.h2,{id:"особенности",children:"Особенности"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["При ",i.jsx(e.code,{children:"manualFiltering: true"})," таблица не фильтрует данные — ожидается внешняя логика (серверная)"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"sidebarConfig"})," позволяет добавлять глобальные фильтры, не привязанные к колонкам"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"filtersInfo"})," задаёт лейблы и значения по умолчанию для каждого фильтра"]}),`
`]}),`
`,i.jsxs(e.blockquote,{children:[`
`,i.jsxs(e.p,{children:["Подробнее о типах — ",i.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-filtering-api--docs",children:"Filtering API"})]}),`
`]}),`
`,i.jsx(c,{})]})}function Q(n={}){const{wrapper:e}={...s(),...n.components};return e?i.jsx(e,{...n,children:i.jsx(r,{...n})}):r(n)}export{Q as default};
