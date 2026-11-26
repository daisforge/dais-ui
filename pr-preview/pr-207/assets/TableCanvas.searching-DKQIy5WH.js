import{j as r}from"./react-UEdzNlUe.js";import{df as o}from"./vendor-DTHFTCxs.js";import{M as s,S as t}from"./WithTooltip-KJL26V4Q-C3x9tCBM.js";import{T as c}from"./TableCanvas.searching.stories-Bjqvehey.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-BDqbx52B.js";import"./@tanstack/react-virtual-Cc6cMCGC.js";import"./preload-helper-BOyu4uG3.js";import"./index-Cu4lwwaE.js";import"./index-D2sVbA6U.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-DUafcp_1.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-Bonjfc9S.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./utils-Cc8UerBz.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-Jb2Onqi_.js";import"./@salutejs/plasma-icons-C6iRh3Pq.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-DUic9P4N.js";import"./Box-CAVr5OBu.js";import"./Collapse-CKKPV_S6.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./TableGlide-LZ3j6XP4.js";import"./@daisforge/glide-data-grid-7SWKw7OM.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUtilsSearch-blgVacgU.js";import"./TableTabs-GaaUELLw.js";import"./sharedUiSearch-Br8C3RCh.js";import"./TextField-Cu6HokJS.js";import"./sharedUtilsInputs-t7ShkDmK.js";import"./Typography-D4wO0shv.js";import"./ListOfFilters-CaFybgEu.js";import"./FiltersActions-BQ_4x4XD.js";import"./IconButton-s9L26CSR.js";import"./Tooltip-DNh4Yts8.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-uBgqq2ir.js";import"./NumberFormat-DF3lboLZ.js";import"./EmptyState-CwC_Yow0.js";import"./unidentified@3x-9d_s2m7N.js";import"./ErrorPage-BysYIOVJ.js";import"./Autocomplete-zKBYUNFR.js";function i(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:c,name:"Docs"}),`
`,r.jsx(e.h1,{id:"searching-tablecanvas",children:"Searching (TableCanvas)"}),`
`,r.jsx(e.p,{children:r.jsx(e.strong,{children:"tableConfig.searching"})}),`
`,r.jsx(e.p,{children:"Расширенные возможности поиска по данным, включая клиентскую и серверную фильтрацию, а также автокомплит с подсказками."}),`
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
`,r.jsxs(e.p,{children:["При передаче ",r.jsx(e.code,{children:"autocomplete"})," в конфигурацию поиска поле ввода заменяется на компонент Autocomplete с выпадающим списком подсказок. С помощью пропсов Autocomplete можно настроить историю поиска, кастомизировать рендер элементов и другое. Подробнее — в разделе ",r.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-searching-api--docs",children:"API"}),"."]}),`
`,r.jsx(e.h2,{id:"пагинация-и-поиск",children:"Пагинация и поиск"}),`
`,r.jsxs(e.blockquote,{children:[`
`,r.jsxs(e.p,{children:[r.jsx(e.strong,{children:"Важно:"})," если в таблице используется пагинация, поиск необходимо либо ",r.jsx(e.strong,{children:"отключать"}),", либо ",r.jsx(e.strong,{children:"переводить в ручной режим"})," (",r.jsx(e.code,{children:"manualSearching: true"}),") и фильтровать строки самостоятельно с учётом всех страниц, взаимодействуя с бэкендом. Клиентский поиск при пагинации будет фильтровать только текущую страницу, что приведёт к некорректным результатам."]}),`
`]}),`
`,r.jsx(e.h2,{id:"приоритет-фильтрации",children:"Приоритет фильтрации"}),`
`,r.jsxs(e.ol,{children:[`
`,r.jsxs(e.li,{children:["Сначала применяется глобальный поиск (если ",r.jsx(e.code,{children:"manualSearching"})," выключен)"]}),`
`,r.jsx(e.li,{children:"Затем применяются колоночные фильтры (если есть)"}),`
`]}),`
`,r.jsx(t,{})]})}function ir(n={}){const{wrapper:e}={...o(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(i,{...n})}):i(n)}export{ir as default};
