import{j as e}from"./react-B60MRyL7.js";import{ck as o}from"./vendor-OPtbd1lp.js";import{M as s,S as c}from"./WithTooltip-KJL26V4Q-D2QxBZA4.js";import{T as t}from"./Table.searching.stories-S3eh6kG9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-BRw6YPBr.js";import"./@tanstack/react-virtual-EFiood7F.js";import"./preload-helper-BnDtJV8M.js";import"./index-Cu4lwwaE.js";import"./index-B1pIjx6t.js";import"./@salutejs/plasma-icons-ByrhRzX2.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-9ZvOS3J-.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-B87AmCdC.js";import"./index-B7Wr7FLp.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./@salutejs/sdds-finai-K3Gf3X3y.js";import"./Box-CbEpyrne.js";import"./Collapse-B4Pt_8zE.js";import"./utils-CYK0V5oQ.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-CajG19ED.js";import"./TableTabs-BNIyHIhR.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BCFvwvMl.js";import"./@glideappsfinal/glide-data-grid-CK8QPVqj.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-B9tld89l.js";import"./TextField-Bp7ffrmf.js";import"./sharedUtilsInputs-wVAiPvsc.js";import"./TypographyWithAutoTooltip-CVRx3Ji6.js";import"./Typography-CkVSDpr_.js";import"./ListOfFilters-PkVmd9qw.js";import"./FiltersActions-DmLL2joa.js";import"./IconButton-C1QgcvzB.js";import"./TooltipList-C_-CLRgD.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Cf4MX0VM.js";import"./NumberFormat-BNkvGrJn.js";import"./EmptyState-CFVMNuoE.js";import"./unidentified@3x-DTMrHY6B.js";import"./MassActions-CCL9cJtX.js";import"./Autocomplete-pcaxmLXN.js";function n(i){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:t,name:"Docs"}),`
`,e.jsx(r.h1,{id:"searching-table",children:"Searching (Table)"}),`
`,e.jsx(r.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Контролируемый и неконтролируемый поиск"}),`
`,e.jsx(r.li,{children:"Ручной поиск для серверных сценариев"}),`
`,e.jsx(r.li,{children:"История автодополнения в поиске"}),`
`]}),`
`,e.jsx(r.p,{children:"Компонент Table предоставляет расширенные возможности поиска по данным, включая клиентскую и серверную фильтрацию, а также автокомплит с подсказками."}),`
`,e.jsx(r.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Включение/выключение функционала поиска (",e.jsx(r.code,{children:"enabled"}),")"]}),`
`,e.jsxs(r.li,{children:["Начальное значение поиска (",e.jsx(r.code,{children:"defaultSearchQuery"}),")"]}),`
`,e.jsxs(r.li,{children:["Управление видимостью UI поиска (",e.jsx(r.code,{children:"showSearchBlock"}),")"]}),`
`,e.jsxs(r.li,{children:["Контролируемый и неконтролируемый режимы (",e.jsx(r.code,{children:"searchQueryState"}),")"]}),`
`,e.jsxs(r.li,{children:["Настройка debounce для оптимизации производительности (",e.jsx(r.code,{children:"debounceDelay"}),")"]}),`
`,e.jsxs(r.li,{children:["Ручной режим поиска — по Enter или клику (",e.jsx(r.code,{children:"searchOnType: false"}),")"]}),`
`,e.jsxs(r.li,{children:["Автокомплит с подсказками (",e.jsx(r.code,{children:"autocomplete"}),")"]}),`
`]}),`
`,e.jsx(r.h2,{id:"режимы-поиска",children:"Режимы поиска"}),`
`,e.jsx(r.h3,{id:"автоматический-по-умолчанию",children:"Автоматический (по умолчанию)"}),`
`,e.jsx(r.p,{children:"Поиск запускается при вводе текста с debounce. Подходит для клиентской фильтрации."}),`
`,e.jsxs(r.h3,{id:"по-нажатию-searchontype-false",children:["По нажатию (",e.jsx(r.code,{children:"searchOnType: false"}),")"]}),`
`,e.jsx(r.p,{children:"Поиск запускается только по нажатию Enter или клику на иконку. Подходит для серверной фильтрации и больших наборов данных."}),`
`,e.jsxs(r.h3,{id:"ручной-manualsearching-true",children:["Ручной (",e.jsx(r.code,{children:"manualSearching: true"}),")"]}),`
`,e.jsxs(r.p,{children:["Фронтенд-фильтрация отключена. Данные фильтруются на бэкенде, результат передаётся в ",e.jsx(r.code,{children:"rows"}),"."]}),`
`,e.jsx(r.h2,{id:"автокомплит",children:"Автокомплит"}),`
`,e.jsxs(r.p,{children:["При передаче ",e.jsx(r.code,{children:"autocomplete"})," в конфигурацию поиска поле ввода заменяется на компонент Autocomplete с выпадающим списком подсказок. С помощью пропсов Autocomplete можно настроить историю поиска, кастомизировать рендер элементов и другое. Подробнее — в разделе ",e.jsx(r.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-table-searching-api--docs",children:"API"}),"."]}),`
`,e.jsx(r.h2,{id:"пагинация-и-поиск",children:"Пагинация и поиск"}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Важно:"})," если в таблице используется пагинация, поиск необходимо либо ",e.jsx(r.strong,{children:"отключать"}),", либо ",e.jsx(r.strong,{children:"переводить в ручной режим"})," (",e.jsx(r.code,{children:"manualSearching: true"}),") и фильтровать строки самостоятельно с учётом всех страниц, взаимодействуя с бэкендом. Клиентский поиск при пагинации будет фильтровать только текущую страницу, что приведёт к некорректным результатам."]}),`
`]}),`
`,e.jsx(r.h2,{id:"приоритет-фильтрации",children:"Приоритет фильтрации"}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:["Сначала применяется глобальный поиск (если ",e.jsx(r.code,{children:"manualSearching"})," выключен)"]}),`
`,e.jsx(r.li,{children:"Затем применяются колоночные фильтры (если есть)"}),`
`]}),`
`,e.jsx(c,{})]})}function ne(i={}){const{wrapper:r}={...o(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(n,{...i})}):n(i)}export{ne as default};
