import{j as i}from"./react-D2T61mpp.js";import{cg as s,ch as l,ca as c}from"./vendor-BrHBSlJK.js";import{T as d}from"./TableCanvas.filtering.stories-D-hWK9Za.js";import"./react-is-Clcustum.js";import"./styled-components-VQhqWv3H.js";import"./@tanstack/react-virtual-VaQu0THI.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DMKGmJ6t.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-CAphnu1o.js";import"./Table-aOOzA70l.js";import"./FiltersActions-DS_Tb-6v.js";import"./IconButton-BD7PJEK-.js";import"./@salutejs/plasma-icons-DKlbVZSX.js";import"./@salutejs/sdds-finai-QR_WCRdF.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-ClMPg-JA.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-DwCSXYU-.js";import"./sharedUtilsInputs-BVZR2bw_.js";import"./AiAgentPopup-Dxgod_xL.js";import"./TextArea-CET7FF04.js";import"./sharedUtilsResizable-C5_x6ZS8.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-xVOKAYjw.js";import"./react-data-grid-BRVMtBW9.js";import"./TableTabs-DDTQKVAd.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-CkzHxqSd.js";import"./@glideappsfinal/glide-data-grid-Diog_OOt.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-D7mcEM-B.js";import"./ListOfFilters-DkWC9DXL.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-FmU7LToq.js";import"./EmptyState-qT_iyrIo.js";import"./MassActions-CjHVEw-x.js";import"./Autocomplete-DE8EekWl.js";import"./TableCanvas-cpRWq7p1.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./ErrorPage-Bi_Jgtfe.js";function r(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(l,{of:d,name:"Docs"}),`
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
`,i.jsx(c,{})]})}function Y(n={}){const{wrapper:e}={...s(),...n.components};return e?i.jsx(e,{...n,children:i.jsx(r,{...n})}):r(n)}export{Y as default};
