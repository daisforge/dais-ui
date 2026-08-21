import{j as e}from"./react-D2T61mpp.js";import{c2 as c,c3 as i}from"./vendor-B0ELcGbr.js";import{T as s}from"./TypeSourceViewer-RXb7QuNQ.js";import"./react-is-Clcustum.js";import"./styled-components-C8vPRKee.js";import"./tslib-De9GV7Vy.js";function o(t){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Локальные компоненты/TableCanvas/SelectingRow/API"}),`
`,e.jsx(n.h1,{id:"selectingrow-api",children:"SelectingRow API"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Важно:"})," ",e.jsx(n.code,{children:"tableConfig.selecting"})," (этот раздел) — выбор строк ",e.jsx(n.strong,{children:"чекбоксами"}),`.
Это отдельный механизм от `,e.jsx(n.code,{children:"tableConfig.cellsSelection"}),` (см. ниже) — выделения
колонок по клику на шапку.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"selectingrowconfig",children:"SelectingRowConfig"}),`
`,e.jsxs(n.p,{children:["Конфиг чекбоксного выбора строк (",e.jsx(n.code,{children:"tableConfig.selecting"}),")."]}),`
`,e.jsx(s,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-select-row/types.ts",typeName:"SelectingRowConfig"}),`
`,e.jsx(n.h2,{id:"cellsselectionconfig",children:"CellsSelectionConfig"}),`
`,e.jsxs(n.p,{children:["Конфиг выделения ",e.jsx(n.strong,{children:"колонок"})," по клику на шапку — ",e.jsx(n.code,{children:"tableConfig.cellsSelection"}),`. Не
зависит от `,e.jsx(n.code,{children:"highlightActiveType"}),`, по умолчанию включено. Поддерживает copy/paste
по выделенным колонкам.`]}),`
`,e.jsx(s,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts",typeName:"CellsSelectionConfig"}),`
`,e.jsx(n.h2,{id:"rowgetstatesprops",children:"RowGetStatesProps"}),`
`,e.jsxs(n.p,{children:["Аргумент функции ",e.jsx(n.code,{children:"rowGetStates"})," — позволяет полностью переопределить поведение чекбоксов для каждой строки."]}),`
`,e.jsx(s,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-select-row/types.ts",typeName:"RowGetStatesProps"}),`
`,e.jsx(n.h2,{id:"rowgetstatesreturntype",children:"RowGetStatesReturnType"}),`
`,e.jsxs(n.p,{children:["Возвращаемое значение ",e.jsx(n.code,{children:"rowGetStates"}),"."]}),`
`,e.jsx(s,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-select-row/types.ts",typeName:"RowGetStatesReturnType"}),`
`,e.jsx(n.h2,{id:"childreninfo",children:"ChildrenInfo"}),`
`,e.jsxs(n.p,{children:["Информация о дочерних строках, доступная через ",e.jsx(n.code,{children:"getRowChildrenInfo()"}),"."]}),`
`,e.jsx(s,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-select-row/types.ts",typeName:"ChildrenInfo"})]})}function g(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{g as default};
