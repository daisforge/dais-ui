import{j as r}from"./react-D2T61mpp.js";import{cf as o,cg as t,c9 as s}from"./vendor-BBRwy0t2.js";import{A as c}from"./TableCanvas.appearance.stories-BM6Bqg1s.js";import"./react-is-Clcustum.js";import"./styled-components-CfSii9H4.js";import"./@tanstack/react-virtual-BGPVwFH0.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-0wZYW6u5.js";import"./storySourceDoc-tVKyHcEN.js";import"./FiltersActions-DAksWy8P.js";import"./IconButton-CzRzITs0.js";import"./@salutejs/plasma-icons-BOHkKNG4.js";import"./@salutejs/sdds-finai-CFzxfIrR.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-BOrhfGN8.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-n-WFuYAo.js";import"./TextField-CKLjdk0_.js";import"./sharedUtilsInputs-DUHtF0ge.js";import"./AiAgentPopup-B9k1QLvP.js";import"./TextArea-CDEuovAh.js";import"./sharedUtilsResizable-CJPklFyL.js";import"./Table-CAi5lPL5.js";import"./Collapse-vFTRrVGh.js";import"./react-data-grid-B3Kmg-0Y.js";import"./TableTabs-CJUqjSUo.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Pbvwb9aS.js";import"./@glideappsfinal/glide-data-grid-BugNyQcG.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-sMO9qYMt.js";import"./ListOfFilters-Dy9DrttD.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-D0pyp6bB.js";import"./EmptyState-BfHjCuYu.js";import"./MassActions-B19dUgW5.js";import"./Autocomplete-BUof7gwC.js";import"./TableCanvas-kf8GrWsi.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./ErrorPage-CxjlzrpR.js";function i(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:c,name:"Docs"}),`
`,r.jsx(n.h1,{id:"appearance-tablecanvas",children:"Appearance (TableCanvas)"}),`
`,r.jsx(n.p,{children:r.jsx(n.strong,{children:"tableConfig.appearance"})}),`
`,r.jsx(n.p,{children:"Готовые варианты внешнего вида таблицы: «чистый» вид и зебра."}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-tsx",children:`<TableCanvas
  tableConfig={{
    appearance: { variant: 'clean', zebra: true },
  }}
/>
`})}),`
`,r.jsxs(n.p,{children:["Все поля необязательные. Без ",r.jsx(n.code,{children:"appearance"}),` таблица выглядит как обычно:
`,r.jsx(n.code,{children:"variant"})," по умолчанию ",r.jsx(n.code,{children:"'default'"}),", ",r.jsx(n.code,{children:"zebra"})," по умолчанию ",r.jsx(n.code,{children:"false"}),"."]}),`
`,r.jsxs(n.h2,{id:"чистый-вид--variant-clean",children:["Чистый вид — ",r.jsx(n.code,{children:"variant: 'clean'"})]}),`
`,r.jsx(n.p,{children:`Таблица без линий сетки и внешних рамок. Шапка на белом фоне с серым текстом.
Остальное выглядит как в обычном виде.`}),`
`,r.jsxs(n.h2,{id:"зебра--zebra-true",children:["Зебра — ",r.jsx(n.code,{children:"zebra: true"})]}),`
`,r.jsx(n.p,{children:`Строки через одну окрашены серым. Работает в любом варианте, по умолчанию
выключена.`}),`
`,r.jsx(n.h2,{id:"как-чистый-вид-работает-с-другими-настройками",children:"Как чистый вид работает с другими настройками"}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:r.jsx(n.code,{children:"borders"})}),` — линии сетки выключены. Если нужно вернуть отдельные линии,
задайте их в `,r.jsx(n.code,{children:"borders"})," явно."]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Наведение и выделение"}),` работают как обычно. Нумерация и чекбоксы
подсвечиваются вместе со строкой.`]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Отмеченные и выбранные строки"}),` красятся своим цветом, в том числе поверх
зебры.`]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Итоговые строки"}),` остаются голубыми, как в обычном виде. Зебра на них не
распространяется.`]}),`
`]}),`
`,r.jsxs(n.blockquote,{children:[`
`,r.jsxs(n.p,{children:["Типы — ",r.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-appearance-api--docs",children:"Appearance API"})]}),`
`]}),`
`,r.jsx(s,{})]})}function W(e={}){const{wrapper:n}={...o(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(i,{...e})}):i(e)}export{W as default};
