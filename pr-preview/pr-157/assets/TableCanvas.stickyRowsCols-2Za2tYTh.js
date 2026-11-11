import{j as o}from"./react-D2T61mpp.js";import{cg as n,ch as s,ca as e}from"./vendor-7VnaVIpS.js";import{T as m}from"./TableCanvas.stickyRowsCols.stories-BQlgKv0u.js";import"./react-is-Clcustum.js";import"./styled-components-CFvxk-I1.js";import"./@tanstack/react-virtual-DLhPRxds.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DTbyk53y.js";import"./StoryHint-D7Z2UPWM.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BGcc87yF.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-DX7iE3l_.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-BIcmm3du.js";import"./@salutejs/plasma-icons-BYbOMVFw.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-BuJrGrZ8.js";import"./IconButton-CMFhYWGF.js";import"./Box-CT_TQepK.js";import"./TextField-BQZavz6y.js";import"./sharedUtilsInputs-o_SOTpff.js";import"./AiAgentPopup-3vHJ3j_d.js";import"./TextArea-B4mQ3bK9.js";import"./sharedUtilsResizable-DFCywCQF.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-B8Kqffoc.js";import"./Collapse-X771ClxU.js";import"./react-data-grid-jRoc5f7v.js";import"./TableTabs-C0M1y85Y.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DPdx2mAT.js";import"./@glideappsfinal/glide-data-grid-BIFd4p3p.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-B1cQWloY.js";import"./ListOfFilters-DyIr73Nv.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CJItZ0eh.js";import"./EmptyState-DiDcVCef.js";import"./MassActions-CD3Nj8gI.js";import"./Autocomplete-YBf59Vvw.js";import"./ErrorPage-CiyuwFP0.js";function r(t){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:m,name:"Docs"}),`
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
