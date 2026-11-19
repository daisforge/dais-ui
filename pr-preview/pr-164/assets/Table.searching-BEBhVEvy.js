import{j as e}from"./react-B60MRyL7.js";import{ck as o}from"./vendor-BOXbJjQW.js";import{M as s,S as c}from"./WithTooltip-KJL26V4Q-D1oqEq-B.js";import{T as t}from"./Table.searching.stories-BBgQa2Ht.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-DN-dyp3E.js";import"./@tanstack/react-virtual--f9HMX-L.js";import"./preload-helper-Rbr_SUQB.js";import"./index-Cu4lwwaE.js";import"./index-B3szzMwc.js";import"./@salutejs/plasma-icons-LsCQzLxj.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-CbpbGoVx.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-fGUkz_i2.js";import"./index-b7WWv5em.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./@salutejs/sdds-finai-DDW327_Q.js";import"./Box-JkhPdOcO.js";import"./Collapse-BNL-7RWo.js";import"./utils-Bs8ZiKbo.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-Cyhpllwh.js";import"./TableTabs-dzgHMZvw.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DUjkhz5W.js";import"./@glideappsfinal/glide-data-grid-CaPCdkNo.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-DQwhVP-7.js";import"./TextField-B86jICzu.js";import"./sharedUtilsInputs-uFKaIJDG.js";import"./TypographyWithAutoTooltip-D4bbCBGZ.js";import"./Typography-Dhksu6ui.js";import"./ListOfFilters-D7npQKzu.js";import"./FiltersActions-B9A7BCia.js";import"./IconButton-CqyDmNx8.js";import"./TooltipList-CJDTIlLy.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-_bpb5vRV.js";import"./NumberFormat-CmAELO3o.js";import"./EmptyState-CciL3-J3.js";import"./unidentified@3x-DpaHf-Py.js";import"./MassActions-2-wzgpjN.js";import"./Autocomplete-MlzChFIs.js";function n(i){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:t,name:"Docs"}),`
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
