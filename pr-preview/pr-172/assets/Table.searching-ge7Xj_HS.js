import{j as r}from"./react-UEdzNlUe.js";import{dd as o}from"./vendor-DnY5x8t2.js";import{M as s,S as c}from"./WithTooltip-KJL26V4Q-Cluo7wsc.js";import{T as t}from"./Table.searching.stories-CcbhxPyS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-C2sulCCv.js";import"./@tanstack/react-virtual-BA3RmMS7.js";import"./preload-helper-j-yXN3k7.js";import"./index-Cu4lwwaE.js";import"./index-BS0iAW2I.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-BT387RgP.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-BppiMsXu.js";import"./index-BX5D65Tl.js";import"./@sddsjs/sdds_finai-D-xd8Ig6.js";import"./@salutejs/sdds-finai-2QW4XiOx.js";import"./Box-CmkBCCp8.js";import"./Collapse-cxu7l_pA.js";import"./utils-NDBGknB_.js";import"./constants-DTh3jAtl.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-67FHeKcG.js";import"./react-data-grid-gn-LnSw-.js";import"./TableTabs-CfJtCWr8.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-Dc6dleod.js";import"./@glideappsfinal/glide-data-grid-2J2Wx1jC.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./Dropdown-D5RtHXQZ.js";import"./sharedUiSearch-CoeTfsOr.js";import"./TextField-DXOe7TwE.js";import"./sharedUtilsInputs-BEEVjYrl.js";import"./TypographyWithAutoTooltip-DyfRXyRD.js";import"./Typography-CTBLgXaA.js";import"./ListOfFilters-CClYEnvR.js";import"./FiltersActions-41lXv-ok.js";import"./IconButton-pD4wRJBG.js";import"./TooltipList-DyLslyRz.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-DkYs5ioR.js";import"./NumberFormat-KGmYOFb9.js";import"./EmptyState-Clcxu70W.js";import"./unidentified@3x-DP8hWoDe.js";import"./MassActions-BUdib6KL.js";import"./Autocomplete-BHfvRrfM.js";function n(i){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:t,name:"Docs"}),`
`,r.jsx(e.h1,{id:"searching-table",children:"Searching (Table)"}),`
`,r.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:"Контролируемый и неконтролируемый поиск"}),`
`,r.jsx(e.li,{children:"Ручной поиск для серверных сценариев"}),`
`,r.jsx(e.li,{children:"История автодополнения в поиске"}),`
`]}),`
`,r.jsx(e.p,{children:"Компонент Table предоставляет расширенные возможности поиска по данным, включая клиентскую и серверную фильтрацию, а также автокомплит с подсказками."}),`
`,r.jsx(e.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:["Включение/выключение функционала поиска (",r.jsx(e.code,{children:"enabled"}),")"]}),`
`,r.jsxs(e.li,{children:["Начальное значение поиска (",r.jsx(e.code,{children:"defaultSearchQuery"}),")"]}),`
`,r.jsxs(e.li,{children:["Управление видимостью UI поиска (",r.jsx(e.code,{children:"showSearchBlock"}),")"]}),`
`,r.jsxs(e.li,{children:["Контролируемый и неконтролируемый режимы (",r.jsx(e.code,{children:"searchQueryState"}),")"]}),`
`,r.jsxs(e.li,{children:["Настройка debounce для оптимизации производительности (",r.jsx(e.code,{children:"debounceDelay"}),")"]}),`
`,r.jsxs(e.li,{children:["Ручной режим поиска — по Enter или клику (",r.jsx(e.code,{children:"searchOnType: false"}),")"]}),`
`,r.jsxs(e.li,{children:["Автокомплит с подсказками (",r.jsx(e.code,{children:"autocomplete"}),")"]}),`
`]}),`
`,r.jsx(e.h2,{id:"режимы-поиска",children:"Режимы поиска"}),`
`,r.jsx(e.h3,{id:"автоматический-по-умолчанию",children:"Автоматический (по умолчанию)"}),`
`,r.jsx(e.p,{children:"Поиск запускается при вводе текста с debounce. Подходит для клиентской фильтрации."}),`
`,r.jsxs(e.h3,{id:"по-нажатию-searchontype-false",children:["По нажатию (",r.jsx(e.code,{children:"searchOnType: false"}),")"]}),`
`,r.jsx(e.p,{children:"Поиск запускается только по нажатию Enter или клику на иконку. Подходит для серверной фильтрации и больших наборов данных."}),`
`,r.jsxs(e.h3,{id:"ручной-manualsearching-true",children:["Ручной (",r.jsx(e.code,{children:"manualSearching: true"}),")"]}),`
`,r.jsxs(e.p,{children:["Фронтенд-фильтрация отключена. Данные фильтруются на бэкенде, результат передаётся в ",r.jsx(e.code,{children:"rows"}),"."]}),`
`,r.jsx(e.h2,{id:"автокомплит",children:"Автокомплит"}),`
`,r.jsxs(e.p,{children:["При передаче ",r.jsx(e.code,{children:"autocomplete"})," в конфигурацию поиска поле ввода заменяется на компонент Autocomplete с выпадающим списком подсказок. С помощью пропсов Autocomplete можно настроить историю поиска, кастомизировать рендер элементов и другое. Подробнее — в разделе ",r.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-table-searching-api--docs",children:"API"}),"."]}),`
`,r.jsx(e.h2,{id:"пагинация-и-поиск",children:"Пагинация и поиск"}),`
`,r.jsxs(e.blockquote,{children:[`
`,r.jsxs(e.p,{children:[r.jsx(e.strong,{children:"Важно:"})," если в таблице используется пагинация, поиск необходимо либо ",r.jsx(e.strong,{children:"отключать"}),", либо ",r.jsx(e.strong,{children:"переводить в ручной режим"})," (",r.jsx(e.code,{children:"manualSearching: true"}),") и фильтровать строки самостоятельно с учётом всех страниц, взаимодействуя с бэкендом. Клиентский поиск при пагинации будет фильтровать только текущую страницу, что приведёт к некорректным результатам."]}),`
`]}),`
`,r.jsx(e.h2,{id:"приоритет-фильтрации",children:"Приоритет фильтрации"}),`
`,r.jsxs(e.ol,{children:[`
`,r.jsxs(e.li,{children:["Сначала применяется глобальный поиск (если ",r.jsx(e.code,{children:"manualSearching"})," выключен)"]}),`
`,r.jsx(e.li,{children:"Затем применяются колоночные фильтры (если есть)"}),`
`]}),`
`,r.jsx(c,{})]})}function or(i={}){const{wrapper:e}={...o(),...i.components};return e?r.jsx(e,{...i,children:r.jsx(n,{...i})}):n(i)}export{or as default};
