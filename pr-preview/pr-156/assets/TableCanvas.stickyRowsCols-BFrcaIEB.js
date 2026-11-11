import{j as o}from"./react-D2T61mpp.js";import{cg as n,ch as s,ca as e}from"./vendor-DUH6w104.js";import{T as m}from"./TableCanvas.stickyRowsCols.stories-DVIlD7ya.js";import"./react-is-Clcustum.js";import"./styled-components-BIBdMInn.js";import"./@tanstack/react-virtual-By-KMx3X.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CvzRUXck.js";import"./StoryHint-D7Z2UPWM.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-MhxRxTXf.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-C4okYHmO.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CWFSUQrv.js";import"./@salutejs/plasma-icons-fBmsGZ6U.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-CupW_6YN.js";import"./IconButton-C3QH-C5V.js";import"./Box-cYx5Dgn-.js";import"./TextField-DLIlJdtn.js";import"./sharedUtilsInputs-DopeaoFC.js";import"./AiAgentPopup-C3e-u073.js";import"./TextArea-D3706QnC.js";import"./sharedUtilsResizable-WAcBXqNx.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-U891BNbk.js";import"./Collapse-BHl1jN1R.js";import"./react-data-grid-6F92uXix.js";import"./TableTabs-w4wLv6-U.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-Da2DE29d.js";import"./@glideappsfinal/glide-data-grid-BroSLIXN.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CYhuhZI8.js";import"./ListOfFilters-DTlsZTxj.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CbgPA0Af.js";import"./EmptyState-B1w78bpi.js";import"./MassActions-CH75-9Am.js";import"./Autocomplete-BFXQawtk.js";import"./ErrorPage-Dnla6MJv.js";function r(t){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:m,name:"Docs"}),`
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
`,o.jsx(e,{})]})}function Z(t={}){const{wrapper:i}={...n(),...t.components};return i?o.jsx(i,{...t,children:o.jsx(r,{...t})}):r(t)}export{Z as default};
