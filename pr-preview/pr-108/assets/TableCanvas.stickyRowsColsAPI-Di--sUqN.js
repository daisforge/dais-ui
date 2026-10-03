import{j as n}from"./react-D2T61mpp.js";import{cg as i,ch as c}from"./vendor-y6J4V6et.js";import"./react-is-Clcustum.js";import"./styled-components-DJiEvwJZ.js";import"./@tanstack/react-virtual-by8lNOKG.js";import"./tslib-DoU9Jm1N.js";function l(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"Локальные компоненты/TableCanvas/StickyRowsCols/API"}),`
`,n.jsx(e.h1,{id:"stickyrowscols-api",children:"StickyRowsCols API"}),`
`,n.jsx(e.h2,{id:"tableconfigstickycolumns",children:"tableConfig.stickyColumns"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`stickyColumns?: string[];
`})}),`
`,n.jsxs(e.p,{children:["Ключи колонок (",n.jsx(e.code,{children:"key"})," из ",n.jsx(e.code,{children:"columnConfig"}),"), которые прилипают к левому краю при горизонтальной прокрутке."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`tableConfig={{ stickyColumns: ['region', 'total'] }}
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Порядок ключей не важен, несуществующие ключи игнорируются."}),`
`,n.jsxs(e.li,{children:["Липкие колонки встают правее закреплённых (",n.jsx(e.code,{children:"columnsControl.pinnedDefault"}),") и колонки нумерации."]}),`
`]}),`
`,n.jsx(e.h2,{id:"tableconfigstickyrows",children:"tableConfig.stickyRows"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`stickyRows?: (row: RowType, rowIndex: number) => boolean;
`})}),`
`,n.jsxs(e.p,{children:["Предикат: вызывается для каждой отображаемой строки, ",n.jsx(e.code,{children:"true"})," — строка прилипает под шапкой."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`tableConfig={{ stickyRows: (row) => row.kind === 'subtotal' }}
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"rowIndex"})," — индекс среди отображаемых строк (после сортировки и фильтрации)."]}),`
`,n.jsxs(e.li,{children:["Итоговые строки (",n.jsx(e.code,{children:"bottomSummaryRows"}),") закреплены снизу всегда и предикатом не проверяются."]}),`
`,n.jsxs(e.li,{children:["Чтобы избежать лишних пересчётов, передавайте стабильную функцию (",n.jsx(e.code,{children:"useCallback"})," / вынесенную константу)."]}),`
`]}),`
`,n.jsx(e.h2,{id:"рекомендации",children:"Рекомендации"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Держите число липких строк небольшим: прилипшие строки занимают место под шапкой, и при большом их числе для прокрутки остаётся мало места."}),`
`,n.jsx(e.li,{children:"Для отчётов удобно делать липкими итоговые строки по разделам — при прокрутке видно, к какому разделу относятся данные."}),`
`]})]})}function h(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(l,{...s})}):l(s)}export{h as default};
