import{j as o}from"./react-D2T61mpp.js";import{cf as n,cg as s,c9 as e}from"./vendor-9B2hbkG6.js";import{T as m}from"./TableCanvas.stickyRowsCols.stories-CUsk6pU1.js";import"./react-is-Clcustum.js";import"./styled-components-ez3N8xZd.js";import"./@tanstack/react-virtual-CUqgBIE3.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CdHHDC6W.js";import"./StoryHint-D7Z2UPWM.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-r4y9aj8Y.js";import"./FiltersActions-DtarGT3y.js";import"./IconButton-hGj94ADB.js";import"./@salutejs/plasma-icons--VRxTmky.js";import"./@salutejs/sdds-finai-DAeykpwI.js";import"./@salutejs/sdds-themes-DvXSb3wc.js";import"./utils-C6Rp7Mm0.js";import"./constants-ZywluL5g.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-COYwCtIH.js";import"./TextField-3j84s4wg.js";import"./sharedUtilsInputs-nH3zTuRf.js";import"./AiAgentPopup-BJQ1tlEF.js";import"./TextArea-BschVoDn.js";import"./sharedUtilsResizable-C0T1tyTQ.js";import"./Table-BMOR8dF2.js";import"./Collapse-Qqh3QbJP.js";import"./react-data-grid-DQ4yailp.js";import"./TableTabs-CuSt3HAP.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BHezZ6sf.js";import"./@glideappsfinal/glide-data-grid-DCYnKkBB.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-1YCK01iC.js";import"./ListOfFilters-w_sVVQMO.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DUL2cq19.js";import"./EmptyState-KiLHs88G.js";import"./MassActions-EHhyZfxe.js";import"./Autocomplete-Ba-s2Y4S.js";import"./ErrorPage-B8UOrt2y.js";function r(t){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:m,name:"Docs"}),`
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
`,o.jsx(e,{})]})}function W(t={}){const{wrapper:i}={...n(),...t.components};return i?o.jsx(i,{...t,children:o.jsx(r,{...t})}):r(t)}export{W as default};
