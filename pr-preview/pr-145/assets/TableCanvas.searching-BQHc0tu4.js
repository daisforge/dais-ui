import{j as e}from"./react-D2T61mpp.js";import{cf as o,cg as s,c9 as c}from"./vendor-nSnuiptw.js";import{T as t}from"./TableCanvas.searching.stories-DFr-OdSR.js";import"./react-is-Clcustum.js";import"./styled-components-DsZNNs-w.js";import"./@tanstack/react-virtual-CAA0jjtQ.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-fXsRFEYa.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CBHVGFur.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-CHPzWAFN.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CSFR0wVB.js";import"./@salutejs/plasma-icons-B_eXmh7u.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-nBCTBnD3.js";import"./IconButton-CbPE_gWK.js";import"./Box-JCo3npGg.js";import"./TextField-D7ZIctgB.js";import"./sharedUtilsInputs-DXjvF4h5.js";import"./AiAgentPopup-BuoscS2N.js";import"./TextArea-9kPq7Mwk.js";import"./sharedUtilsResizable-D3z9f6ge.js";import"./Table-S7696BPp.js";import"./Collapse-dtWSPupa.js";import"./react-data-grid-C6hzsMmi.js";import"./TableTabs-BgUcvYrN.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-CWOrlegB.js";import"./@glideappsfinal/glide-data-grid-CdjXxGhJ.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BefrI-5j.js";import"./ListOfFilters-BQ0OPniP.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-8FbLn3N1.js";import"./EmptyState-CvzOjQ3o.js";import"./MassActions-RUCSa28k.js";import"./Autocomplete-CtDF64kr.js";import"./ErrorPage-CwD4HFYS.js";function i(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:t,name:"Docs"}),`
`,e.jsx(n.h1,{id:"searching-tablecanvas",children:"Searching (TableCanvas)"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"tableConfig.searching"})}),`
`,e.jsx(n.p,{children:"Расширенные возможности поиска по данным, включая клиентскую и серверную фильтрацию, а также автокомплит с подсказками."}),`
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
`,e.jsxs(n.p,{children:["При передаче ",e.jsx(n.code,{children:"autocomplete"})," в конфигурацию поиска поле ввода заменяется на компонент Autocomplete с выпадающим списком подсказок. С помощью пропсов Autocomplete можно настроить историю поиска, кастомизировать рендер элементов и другое. Подробнее — в разделе ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-searching-api--docs",children:"API"}),"."]}),`
`,e.jsx(n.h2,{id:"пагинация-и-поиск",children:"Пагинация и поиск"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Важно:"})," если в таблице используется пагинация, поиск необходимо либо ",e.jsx(n.strong,{children:"отключать"}),", либо ",e.jsx(n.strong,{children:"переводить в ручной режим"})," (",e.jsx(n.code,{children:"manualSearching: true"}),") и фильтровать строки самостоятельно с учётом всех страниц, взаимодействуя с бэкендом. Клиентский поиск при пагинации будет фильтровать только текущую страницу, что приведёт к некорректным результатам."]}),`
`]}),`
`,e.jsx(n.h2,{id:"приоритет-фильтрации",children:"Приоритет фильтрации"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Сначала применяется глобальный поиск (если ",e.jsx(n.code,{children:"manualSearching"})," выключен)"]}),`
`,e.jsx(n.li,{children:"Затем применяются колоночные фильтры (если есть)"}),`
`]}),`
`,e.jsx(c,{})]})}function W(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{W as default};
