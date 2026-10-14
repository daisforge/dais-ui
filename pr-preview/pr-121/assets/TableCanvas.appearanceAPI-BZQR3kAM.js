import{j as e}from"./react-D2T61mpp.js";import{cf as c,cg as a}from"./vendor-Cy6vaFvA.js";import{T as r}from"./TypeSourceViewer-CapdRQd0.js";import"./react-is-Clcustum.js";import"./styled-components-BVG9KNaZ.js";import"./@tanstack/react-virtual-DuyFBKnT.js";import"./tslib-DoU9Jm1N.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",strong:"strong",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Локальные компоненты/TableCanvas/Appearance/API"}),`
`,e.jsx(n.h1,{id:"appearance-api",children:"Appearance API"}),`
`,e.jsx(n.h2,{id:"tableconfigappearance",children:"tableConfig.appearance"}),`
`,e.jsx(r,{language:"ts",filePath:"packages/ui-kit/src/components/TableGlide/types.ts",typeName:"AppearanceConfig"}),`
`,e.jsx(n.h2,{id:"appearancevariant",children:"AppearanceVariant"}),`
`,e.jsx(r,{language:"ts",filePath:"packages/ui-kit/src/components/TableGlide/types.ts",typeName:"AppearanceVariant"}),`
`,e.jsx(n.h2,{id:"как-чистый-вид-взаимодействует-с-другими-настройками",children:"Как чистый вид взаимодействует с другими настройками"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"borders"})}),` — в чистом виде линии сетки выключены, как при
`,e.jsx(n.code,{children:"{ vertical: false, horizontal: false }"}),". Явно заданные поля ",e.jsx(n.code,{children:"borders"}),`
сильнее и позволяют вернуть отдельные линии.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"hoverEffects"})}),` — hover строки работает как обычно; в чистом виде служебные
колонки темнеют вместе со строкой, а не своим цветом.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"cellsSelection"}),", выделение по нумерации и по шапке"]}),` — цвета выделения те
же; на строках зебры выделение на ступень темнее, служебные колонки следуют за
строкой.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"highlightActiveType: 'row'"}),", ",e.jsx(n.code,{children:"selecting"})]}),` — выбранная и отмеченная строки
красятся своими цветами поверх зебры.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"summaryRows"})}),` — итоговые строки в чистом виде на фоне ячеек, зебра на них не
распространяется.`]}),`
`]})]})}function j(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{j as default};
