import{j as e}from"./react-DYHuXpTF.js";import{dd as o}from"./vendor-Dy04e7eT.js";import{M as s,S as c}from"./WithTooltip-KJL26V4Q-Dieti3TI.js";import{T as t}from"./Table.searching.stories-DXdH6VyU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-D3uL8AgQ.js";import"./@tanstack/react-virtual-DpbU78q1.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-BkX6kR9J.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-C-m25YlE.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-D2PmPIhJ.js";import"./index-Cg1cr4lG.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./@salutejs/sdds-finai-CW-5BJnR.js";import"./Box-C_lQk7q2.js";import"./Collapse-zZc0zAuA.js";import"./utils-C324mS39.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-D-o9abDl.js";import"./react-data-grid-iaz8oMts.js";import"./TableTabs-aQ644jDa.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BTDMwK-G.js";import"./@daisforge/glide-data-grid-CnQtltGt.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-DepFlUD_.js";import"./TextField-DKmO_cMT.js";import"./sharedUtilsInputs-CoiSiHAi.js";import"./TypographyWithAutoTooltip-CF39c5mC.js";import"./Typography-BcsDSGcH.js";import"./ListOfFilters-BkuFS4mB.js";import"./FiltersActions-BqnuizuF.js";import"./IconButton-0ysLJmxH.js";import"./TooltipList-DjKz0BcB.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Cre-Xff_.js";import"./NumberFormat-ByzSbtjI.js";import"./EmptyState-v2opkloV.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-C97lOz8u.js";import"./Autocomplete-CBzySec7.js";function n(i){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:t,name:"Docs"}),`
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
