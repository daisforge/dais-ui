import{j as o}from"./react-D2T61mpp.js";import{cf as n,cg as s,c9 as e}from"./vendor-Drxgg0rk.js";import{T as m}from"./TableCanvas.stickyRowsCols.stories-DD9MNdJA.js";import"./react-is-Clcustum.js";import"./styled-components-DcK5R8Fb.js";import"./@tanstack/react-virtual-jg8eP7gb.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-h6L55mj3.js";import"./StoryHint-D7Z2UPWM.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CCpfu5Qw.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-BVL9FlQU.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-B5c9tUhj.js";import"./@salutejs/plasma-icons-DhN4W4fR.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-MagC-eOi.js";import"./IconButton-CWM8CfCh.js";import"./Box-xj2JZS06.js";import"./TextField-CxxXKDSK.js";import"./sharedUtilsInputs-fFIdmTGL.js";import"./AiAgentPopup-B1ZXYUQU.js";import"./TextArea-DOJDfK-7.js";import"./sharedUtilsResizable-C3pkB6lf.js";import"./Table-BojYrzz-.js";import"./Collapse-2gLAuci-.js";import"./react-data-grid-Cj6te99D.js";import"./TableTabs-CHblTDPr.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BdzHcb2z.js";import"./@glideappsfinal/glide-data-grid-zQj-MghF.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CDyjwP5Z.js";import"./ListOfFilters-BJAVLEss.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-I4Yo8Ep8.js";import"./EmptyState-BFDsDepI.js";import"./MassActions-w5ew8M1R.js";import"./Autocomplete-C7B6LVYI.js";import"./ErrorPage-BrXK2Ju3.js";function r(t){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:m,name:"Docs"}),`
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
