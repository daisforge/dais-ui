import{j as o}from"./react-D2T61mpp.js";import{cf as n,cg as s,c9 as e}from"./vendor-CKkZ-t_g.js";import{T as m}from"./TableCanvas.stickyRowsCols.stories-D6x5OcUk.js";import"./react-is-Clcustum.js";import"./styled-components-CrBN_RvZ.js";import"./@tanstack/react-virtual-BloiM2g3.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-Jo2cEHjF.js";import"./StoryHint-D7Z2UPWM.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-MGn_2I6d.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-DbBmXt7Q.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-DQw3oYuX.js";import"./@salutejs/plasma-icons-DjKwx_w6.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-CUScWcJq.js";import"./IconButton--EqZ66VK.js";import"./Box-Cwvb02Al.js";import"./TextField-B6gJbNNO.js";import"./sharedUtilsInputs-CWJ6Gepf.js";import"./AiAgentPopup-q2XTGNrr.js";import"./TextArea-DYBF1Att.js";import"./sharedUtilsResizable-CrssgjcX.js";import"./Table-ow0wXPl_.js";import"./Collapse-CHw8S2JL.js";import"./react-data-grid-D4lRd-q3.js";import"./TableTabs-D0whfNQL.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-CW5qJ8PJ.js";import"./@glideappsfinal/glide-data-grid-DL53d1uD.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-B7ho-1kI.js";import"./ListOfFilters-ug9aOxDE.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CrrIJDKM.js";import"./EmptyState-BYcTkWht.js";import"./MassActions-EZ0rxgiz.js";import"./Autocomplete-D8RxP6EW.js";import"./ErrorPage-Cl65iHNk.js";function r(t){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:m,name:"Docs"}),`
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
