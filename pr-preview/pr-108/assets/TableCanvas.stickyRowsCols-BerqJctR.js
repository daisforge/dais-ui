import{j as o}from"./react-D2T61mpp.js";import{cg as n,ch as s,ca as e}from"./vendor-y6J4V6et.js";import{T as c}from"./TableCanvas.stickyRowsCols.stories-uwcAESbq.js";import"./react-is-Clcustum.js";import"./styled-components-DJiEvwJZ.js";import"./@tanstack/react-virtual-by8lNOKG.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-C1WBAfeL.js";import"./StoryHint-D7Z2UPWM.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DuuY_pKr.js";import"./FiltersActions-BCmEgQgN.js";import"./IconButton-DscvSHWG.js";import"./@salutejs/plasma-icons-DVfRkl1w.js";import"./@salutejs/sdds-finai-xsnoJ7gQ.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-CzqykYZG.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BXL7hkL7.js";import"./TextField-Bd7lhmEf.js";import"./sharedUtilsInputs-C3rpGDqW.js";import"./AnalyticalWidget-BMFpB1Pk.js";import"./Collapse-B8YzBrEG.js";import"./Table-B0E2T0SF.js";import"./react-data-grid-ClyGA73Q.js";import"./TableTabs-BSAyvsLh.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-CeJ0kYKm.js";import"./ListOfFilters-v6uBj8AU.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Cf0Zrxbl.js";import"./EmptyState-CoB6U6uZ.js";import"./MassActions-Bjvw3dF4.js";import"./Autocomplete-CnVkchSP.js";import"./TableGlide-BKXASWJR.js";import"./@glideappsfinal/glide-data-grid-iYUWzTu5.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DOWzmFyF.js";function r(t){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:c,name:"Docs"}),`
`,o.jsx(i.h1,{id:"липкие-строки-и-колонки-tablecanvas",children:"Липкие строки и колонки (TableCanvas)"}),`
`,o.jsx(i.p,{children:o.jsx(i.strong,{children:"tableConfig.stickyColumns, tableConfig.stickyRows"})}),`
`,o.jsxs(i.p,{children:["Строки и колонки, которые прилипают к краю таблицы при прокрутке, как ",o.jsx(i.code,{children:"position: sticky"})," в CSS."]}),`
`,o.jsxs(i.ul,{children:[`
`,o.jsx(i.li,{children:"Элемент едет вместе с таблицей, пока не дойдёт до края, затем остаётся на месте."}),`
`,o.jsx(i.li,{children:"Следующие липкие встают под ним (строки) или правее него (колонки)."}),`
`,o.jsxs(i.li,{children:["В отличие от закреплённых колонок (",o.jsx(i.code,{children:"columnsControl.pinnedDefault"}),"), липкая колонка остаётся на своём месте в таблице."]}),`
`]}),`
`,o.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,o.jsxs(i.ul,{children:[`
`,o.jsx(i.li,{children:"Колонки задаются ключами или предикатом по колонке — порядок колонок и реордер не важны."}),`
`,o.jsx(i.li,{children:"Строки задаются предикатом или индексами. Предикат работает с сортировкой и фильтрами, его результаты кешируются (подгрузка чанками проверяет только новые строки). Индексы не требуют прохода по строкам — для таблиц на миллионы строк."}),`
`,o.jsx(i.li,{children:"Сочетается с закреплёнными колонками, нумерацией строк, группировкой колонок, итоговыми строками и слитыми ячейками."}),`
`,o.jsx(i.li,{children:"Разная высота строк поддерживается."}),`
`]}),`
`,o.jsxs(i.blockquote,{children:[`
`,o.jsxs(i.p,{children:["Подробнее о типах — ",o.jsx(i.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-stickyrowscols-api--docs",children:"StickyRowsCols API"})]}),`
`]}),`
`,o.jsx(e,{})]})}function U(t={}){const{wrapper:i}={...n(),...t.components};return i?o.jsx(i,{...t,children:o.jsx(r,{...t})}):r(t)}export{U as default};
