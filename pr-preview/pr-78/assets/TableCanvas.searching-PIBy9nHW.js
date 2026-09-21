import{j as e}from"./react-D2T61mpp.js";import{cg as o,ch as s,ca as c}from"./vendor-DhWFcJyQ.js";import{T as t}from"./TableCanvas.searching.stories-M56EBqah.js";import"./react-is-Clcustum.js";import"./styled-components-Cejviklg.js";import"./@tanstack/react-virtual-DeRSQr4k.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-C4kDHE18.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-sAkrCkb7.js";import"./FiltersActions-Bc6Y9-lL.js";import"./IconButton-JOgk26Qs.js";import"./@salutejs/plasma-icons-DGidcmWm.js";import"./@salutejs/sdds-finai-BFP0AIhT.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-D11d2JWz.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-C_yvhQXy.js";import"./TextField-Dm6oi5DO.js";import"./sharedUtilsInputs-BTpNb9Ur.js";import"./AnalyticalWidget-DSfzHp4h.js";import"./Collapse-e7DqV2AW.js";import"./Table-hcdSQnTA.js";import"./react-data-grid-zfC4loiI.js";import"./TableTabs-okR-M1w6.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-Ca7CAhR2.js";import"./ListOfFilters-g6uEUW0a.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DoQySbuM.js";import"./EmptyState-Ctnnxr7m.js";import"./MassActions-Dl0Ep_yB.js";import"./Autocomplete-iP0YW9Ml.js";import"./TableGlide-DYd-ue1e.js";import"./@glideappsfinal/glide-data-grid-C74ZS3pz.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DAKweZI5.js";function i(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:t,name:"Docs"}),`
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
`,e.jsx(c,{})]})}function K(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{K as default};
