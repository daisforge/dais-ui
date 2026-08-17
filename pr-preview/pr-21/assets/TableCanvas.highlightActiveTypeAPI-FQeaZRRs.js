import{j as e}from"./react-D2T61mpp.js";import{c2 as s,c3 as i}from"./vendor-DT6IGIg7.js";import"./react-is-Clcustum.js";import"./styled-components-DjqeMLnE.js";import"./tslib-De9GV7Vy.js";function c(n){const l={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Локальные компоненты/TableCanvas/HighlightActiveType/API"}),`
`,e.jsx(l.h1,{id:"highlightactivetype--cellsselectionmode-api",children:"HighlightActiveType / CellsSelectionMode API"}),`
`,e.jsx(l.h2,{id:"cellsselectionmode",children:"CellsSelectionMode"}),`
`,e.jsx(l.p,{children:`Режим фактического выделения ячеек. По нему работают copy/paste, рамка выделения,
fill-handle, затемнение шапки/нумерации.`}),`
`,e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-ts",children:`type CellsSelectionMode = 'cell' | 'range-cell' | 'disabled';
`})}),`
`,e.jsxs(l.ul,{children:[`
`,e.jsxs(l.li,{children:[e.jsx(l.strong,{children:e.jsx(l.code,{children:"'range-cell'"})})," — выделение диапазона ячеек (по умолчанию)"]}),`
`,e.jsxs(l.li,{children:[e.jsx(l.strong,{children:e.jsx(l.code,{children:"'cell'"})})," — выделение одной ячейки"]}),`
`,e.jsxs(l.li,{children:[e.jsx(l.strong,{children:e.jsx(l.code,{children:"'disabled'"})})," — выделение ячеек отключено"]}),`
`]}),`
`,e.jsx(l.h2,{id:"highlightactivetype",children:"HighlightActiveType"}),`
`,e.jsx(l.p,{children:"Чисто визуальная подсветка строки (не влияет на copy/paste)."}),`
`,e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-ts",children:`type HighlightActiveType = 'cell' | 'row' | 'range-cell' | 'disabled';
`})}),`
`,e.jsxs(l.ul,{children:[`
`,e.jsxs(l.li,{children:[e.jsx(l.strong,{children:e.jsx(l.code,{children:"'row'"})})," — подсветка строки активной ячейки"]}),`
`,e.jsxs(l.li,{children:[e.jsx(l.strong,{children:e.jsx(l.code,{children:"'disabled'"})})," — без подсветки строки (по умолчанию)"]}),`
`,e.jsxs(l.li,{children:[e.jsx(l.strong,{children:e.jsx(l.code,{children:"'cell'"})}),", ",e.jsx(l.strong,{children:e.jsx(l.code,{children:"'range-cell'"})})," — ",e.jsx(l.code,{children:"@deprecated"}),`, режим выделения теперь задаётся
через `,e.jsx(l.code,{children:"cellsSelection.mode"})]}),`
`]})]})}function x(n={}){const{wrapper:l}={...s(),...n.components};return l?e.jsx(l,{...n,children:e.jsx(c,{...n})}):c(n)}export{x as default};
