import{j as o}from"./react-D2T61mpp.js";import{cg as n,ch as s,ca as e}from"./vendor-DQE_v-3P.js";import{T as m}from"./TableCanvas.stickyRowsCols.stories-BlOHohsD.js";import"./react-is-Clcustum.js";import"./styled-components-CnJDq8_Y.js";import"./@tanstack/react-virtual-COmxIx-H.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CCVtLeWJ.js";import"./StoryHint-D7Z2UPWM.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DEWarj4I.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-sHkSbqrk.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-DEVB1MHB.js";import"./@salutejs/plasma-icons-C5hAfewY.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-dKd-5H9G.js";import"./IconButton-BFdcKLV4.js";import"./Box-D70Wu-J-.js";import"./TextField-C1W7ideM.js";import"./sharedUtilsInputs-CyoADmmX.js";import"./AiAgentPopup-17CXYnkt.js";import"./TextArea-iDWuvbHG.js";import"./sharedUtilsResizable-L-WgumPX.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-ByP8h4Tc.js";import"./Collapse-Bzr6KiQY.js";import"./react-data-grid-C31jW-aJ.js";import"./TableTabs-CdEhKw9I.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-D7duyfbc.js";import"./@glideappsfinal/glide-data-grid-DOgxh6RK.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BgqBx9fg.js";import"./ListOfFilters-DGg-L7ZP.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-vI2bNhRH.js";import"./EmptyState-Dx4mvkmG.js";import"./MassActions-BjHvz2ws.js";import"./Autocomplete-A4RSkvAu.js";import"./ErrorPage-BYeNAMVB.js";function r(t){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:m,name:"Docs"}),`
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
