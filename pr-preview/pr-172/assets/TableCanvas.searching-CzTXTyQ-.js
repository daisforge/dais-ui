import{j as r}from"./react-UEdzNlUe.js";import{dd as o}from"./vendor-DKFmtNka.js";import{M as s,S as t}from"./WithTooltip-KJL26V4Q-DHpG5auW.js";import{T as c}from"./TableCanvas.searching.stories-SVTrsD3d.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-CDfPITHT.js";import"./@tanstack/react-virtual-0hY7ij6n.js";import"./preload-helper-j-yXN3k7.js";import"./index-Cu4lwwaE.js";import"./index-CLqcrFDJ.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-kYrQscWY.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DZTYadTk.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./utils-Booj3GAg.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CkM2RoIx.js";import"./@salutejs/plasma-icons-BPl9HMYM.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-By_8dfga.js";import"./Box-CZ_ZQ2uM.js";import"./Collapse-je_wNoe6.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-tUCAU4AC.js";import"./@glideappsfinal/glide-data-grid-FxykUbRj.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-HvjNq9qy.js";import"./sharedUiSearch-DYvRq6Y1.js";import"./TextField-U5vj9Sk3.js";import"./sharedUtilsInputs-DKhoD9kx.js";import"./TypographyWithAutoTooltip-CRh_swnh.js";import"./Typography-zuoL-GwX.js";import"./ListOfFilters-Co-jp33h.js";import"./Table-ddz6Ll2D.js";import"./react-data-grid-zJbN7yQ-.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-C6JBaB8n.js";import"./NumberFormat-zDalxEv_.js";import"./EmptyState-DRz_KoAX.js";import"./unidentified@3x-DP8hWoDe.js";import"./MassActions-CVGlpOmh.js";import"./Autocomplete-BZdAUz1o.js";import"./FiltersActions-D2LIoH33.js";import"./IconButton-DE-9S934.js";import"./TooltipList--BueJEoS.js";import"./ErrorPage-BuTEqvxl.js";function n(i){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:c,name:"Docs"}),`
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
`,r.jsx(t,{})]})}function tr(i={}){const{wrapper:e}={...o(),...i.components};return e?r.jsx(e,{...i,children:r.jsx(n,{...i})}):n(i)}export{tr as default};
