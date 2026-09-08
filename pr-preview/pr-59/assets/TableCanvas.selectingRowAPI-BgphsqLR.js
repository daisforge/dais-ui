import{j as e}from"./react-D2T61mpp.js";import{cc as c,cd as i}from"./vendor-C-w11k8S.js";import{T as s}from"./TypeSourceViewer-BDeeEc2F.js";import"./react-is-Clcustum.js";import"./styled-components-Dp3rHGA3.js";import"./@tanstack/react-virtual-BuSs1H_i.js";import"./tslib-De9GV7Vy.js";function o(n){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Локальные компоненты/TableCanvas/SelectingRow/API"}),`
`,e.jsx(t.h1,{id:"selectingrow-api",children:"SelectingRow API"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Важно:"})," ",e.jsx(t.code,{children:"tableConfig.selecting"})," (этот раздел) — выбор строк ",e.jsx(t.strong,{children:"чекбоксами"}),`.
Это отдельный механизм от `,e.jsx(t.code,{children:"tableConfig.cellsSelection"}),` (см. ниже) — выделения
колонок по клику на шапку.`]}),`
`]}),`
`,e.jsx(t.h2,{id:"selectingrowconfig",children:"SelectingRowConfig"}),`
`,e.jsxs(t.p,{children:["Конфиг чекбоксного выбора строк (",e.jsx(t.code,{children:"tableConfig.selecting"}),")."]}),`
`,e.jsx(s,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-select-row/types.ts",typeName:"SelectingRowConfig"}),`
`,e.jsx(t.h2,{id:"cellsselectionconfig",children:"CellsSelectionConfig"}),`
`,e.jsxs(t.p,{children:["Конфиг выделения ",e.jsx(t.strong,{children:"колонок"})," по клику на шапку — ",e.jsx(t.code,{children:"tableConfig.cellsSelection"}),`. Не
зависит от `,e.jsx(t.code,{children:"highlightActiveType"}),`, по умолчанию включено. Поддерживает copy/paste
по выделенным колонкам.`]}),`
`,e.jsx(s,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts",typeName:"CellsSelectionConfig"}),`
`,e.jsx(t.h2,{id:"rowgetstatesprops",children:"RowGetStatesProps"}),`
`,e.jsxs(t.p,{children:["Аргумент функции ",e.jsx(t.code,{children:"rowGetStates"})," — позволяет полностью переопределить поведение чекбоксов для каждой строки."]}),`
`,e.jsx(s,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-select-row/types.ts",typeName:"RowGetStatesProps"}),`
`,e.jsx(t.h2,{id:"rowgetstatesreturntype",children:"RowGetStatesReturnType"}),`
`,e.jsxs(t.p,{children:["Возвращаемое значение ",e.jsx(t.code,{children:"rowGetStates"}),"."]}),`
`,e.jsx(s,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-select-row/types.ts",typeName:"RowGetStatesReturnType"}),`
`,e.jsx(t.h2,{id:"childreninfo",children:"ChildrenInfo"}),`
`,e.jsxs(t.p,{children:["Информация о дочерних строках, доступная через ",e.jsx(t.code,{children:"getRowChildrenInfo()"}),"."]}),`
`,e.jsx(s,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-select-row/types.ts",typeName:"ChildrenInfo"})]})}function x(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{x as default};
