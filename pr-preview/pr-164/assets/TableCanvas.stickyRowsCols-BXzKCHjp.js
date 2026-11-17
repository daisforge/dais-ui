import{j as o}from"./react-D2T61mpp.js";import{cg as n,ch as s,ca as e}from"./vendor-CYVD37V9.js";import{T as m}from"./TableCanvas.stickyRowsCols.stories-Bko1VeWq.js";import"./react-is-Clcustum.js";import"./styled-components-C94YjM-8.js";import"./@tanstack/react-virtual-DYxCMooD.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DvUM61Pg.js";import"./StoryHint-D7Z2UPWM.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CHuwNZWq.js";import"./@sddsjs/sdds_finai-DdXz3JHO.js";import"./utils-OTWlClTX.js";import"./constants-BxGpUxiJ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-BT4-yN4n.js";import"./@salutejs/plasma-icons-Di_vIjuB.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-B0S9lToY.js";import"./IconButton-Bl9eVzQ1.js";import"./Box-BDjyaOfr.js";import"./TextField-DJ8wqApr.js";import"./sharedUtilsInputs-O8EZTBuY.js";import"./AiAgentPopup-CS0gDDq9.js";import"./TextArea-Er2Rljvl.js";import"./sharedUtilsResizable-CQuiSWfk.js";import"./Table-lyC942h-.js";import"./Collapse-CXaAgnpP.js";import"./react-data-grid-9BbtrEpY.js";import"./TableTabs-Bc0SII-y.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DpiyFBdU.js";import"./@glideappsfinal/glide-data-grid-Pr7m0T0T.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BE-fJFxc.js";import"./ListOfFilters-C94OnlYQ.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DQK6oHzg.js";import"./EmptyState-DN6TMa0i.js";import"./MassActions-CJNv5QLV.js";import"./Autocomplete-C-gIuhgS.js";import"./ErrorPage-DtTks04o.js";function r(t){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:m,name:"Docs"}),`
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
`,o.jsx(e,{})]})}function Y(t={}){const{wrapper:i}={...n(),...t.components};return i?o.jsx(i,{...t,children:o.jsx(r,{...t})}):r(t)}export{Y as default};
