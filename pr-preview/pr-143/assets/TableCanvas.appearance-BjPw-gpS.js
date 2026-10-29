import{j as r}from"./react-D2T61mpp.js";import{cf as o,cg as t,c9 as s}from"./vendor-Dov7lcnd.js";import{A as c}from"./TableCanvas.appearance.stories-DF9_J1u9.js";import"./react-is-Clcustum.js";import"./styled-components-Ke_BiRQi.js";import"./@tanstack/react-virtual-CfZrfYDd.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CXSs-ref.js";import"./storySourceDoc-tVKyHcEN.js";import"./FiltersActions-DwPPbWBC.js";import"./IconButton-BTx9fPoE.js";import"./@salutejs/plasma-icons-pFROsTm3.js";import"./@salutejs/sdds-finai-DSVjdAOr.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-Dfe4gMUl.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-B948mfxh.js";import"./TextField-CssRTeIq.js";import"./sharedUtilsInputs-DZU7ieGU.js";import"./AiAgentPopup-7Q7ThSgj.js";import"./TextArea-DkBAWUR6.js";import"./sharedUtilsResizable-fsLemrg8.js";import"./Table-yApPOcan.js";import"./Collapse-CVQHosTk.js";import"./react-data-grid-DGggzB1_.js";import"./TableTabs-CrSfltDJ.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Df11Itmg.js";import"./@glideappsfinal/glide-data-grid-CFj9HtB2.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DQWQsuV4.js";import"./ListOfFilters-Yo2fQzXD.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CYyuS_kw.js";import"./EmptyState-DU6VmXOw.js";import"./MassActions-Bhn6it7T.js";import"./Autocomplete-Bpp8FTQD.js";import"./TableCanvas-CcfJrYlm.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./ErrorPage-Dxl3k5LP.js";function i(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:c,name:"Docs"}),`
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
