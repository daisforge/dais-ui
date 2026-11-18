import{j as o}from"./react-D2T61mpp.js";import{cg as n,ch as s,ca as e}from"./vendor-CNADM64k.js";import{T as m}from"./TableCanvas.stickyRowsCols.stories-BGJICBi0.js";import"./react-is-Clcustum.js";import"./styled-components-BgHfMvxH.js";import"./@tanstack/react-virtual-BSHnyjh7.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-C8-atugo.js";import"./StoryHint-D7Z2UPWM.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BE_lK6KB.js";import"./@sddsjs/sdds_finai-DdXz3JHO.js";import"./utils-CKn6Yuqm.js";import"./constants-BxGpUxiJ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-BEm6Z2Pr.js";import"./@salutejs/plasma-icons-CNxBuWJ1.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-BiKzT8rz.js";import"./IconButton-xwYe75ww.js";import"./Box-CNu36ura.js";import"./TextField-DBpK6G19.js";import"./sharedUtilsInputs-rprt-bQ0.js";import"./AiAgentPopup-nd5JpRDn.js";import"./TextArea-BvBISU5C.js";import"./sharedUtilsResizable-CT3CPyAy.js";import"./Table-Dp9VDEh7.js";import"./Collapse-BCNOa_3J.js";import"./react-data-grid-Cp9Ct-OV.js";import"./TableTabs-D4j17SEq.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-CLIv2zZ-.js";import"./@glideappsfinal/glide-data-grid-D0QSDvg1.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BJ4l-5wL.js";import"./ListOfFilters-D6A52LDg.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-B0gh1Gph.js";import"./EmptyState-BPfWoJpy.js";import"./MassActions-BxRUHtUx.js";import"./Autocomplete-Dq1woIgD.js";import"./ErrorPage-B0DpjF-9.js";function r(t){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:m,name:"Docs"}),`
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
