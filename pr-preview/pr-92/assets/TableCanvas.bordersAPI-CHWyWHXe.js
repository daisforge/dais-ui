import{j as e}from"./react-D2T61mpp.js";import{cg as l,ch as o}from"./vendor-BQJg2Bc2.js";import{T as s}from"./TypeSourceViewer-6skrTXdP.js";import"./react-is-Clcustum.js";import"./styled-components-CFcez-o8.js";import"./@tanstack/react-virtual-gmWiB3nU.js";import"./tslib-DoU9Jm1N.js";function i(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Локальные компоненты/TableCanvas/Borders/API"}),`
`,e.jsx(n.h1,{id:"borders-api",children:"Borders API"}),`
`,e.jsx(n.h2,{id:"tableconfigborders",children:"tableConfig.borders"}),`
`,e.jsx(s,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts",typeName:"BordersConfig"}),`
`,e.jsx(n.h2,{id:"cellbordervisibility",children:"CellBorderVisibility"}),`
`,e.jsxs(n.p,{children:["Стороны рамки одной ячейки, которые возвращает ",e.jsx(n.code,{children:"getCellBorder"}),`. Для каждой
стороны:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"true"})," — рисовать линию;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"false"})," — не рисовать линию;"]}),`
`,e.jsx(n.li,{children:`поле не задано — сторона берётся с уровня ниже (настройка колонки, строки или
общая).`}),`
`]}),`
`,e.jsx(s,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts",typeName:"CellBorderVisibility"}),`
`,e.jsx(n.h2,{id:"bordersgetverticalborder",children:"borders.getVerticalBorder"}),`
`,e.jsxs(n.p,{children:["Точечная вертикальная линия справа от колонки. Колбэк получает ",e.jsx(n.code,{children:"columnKey"}),` и
`,e.jsx(n.code,{children:"columnIndex"})," (в порядке отрисовки, закреплённые в начале) и возвращает ",e.jsx(n.code,{children:"true"}),`
или `,e.jsx(n.code,{children:"false"}),", чтобы переопределить общую настройку ",e.jsx(n.code,{children:"borders.vertical"}),`, или
`,e.jsx(n.code,{children:"undefined"}),", чтобы оставить её."]}),`
`,e.jsxs(n.p,{children:[`Колбэк зовётся на каждую видимую колонку при каждой перерисовке, поэтому должен
быть быстрым. Если условие зависит от набора колонок, держите этот набор в `,e.jsx(n.code,{children:"Set"}),`
заранее (вне колбэка) и проверяйте через `,e.jsx(n.code,{children:"has"}),` — так проверка остаётся дешёвой
и не растёт с числом колонок:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const COLUMNS_WITHOUT_RIGHT_BORDER = new Set(['priority', 'issueType']);

borders={{
  getVerticalBorder: ({ columnKey }) =>
    COLUMNS_WITHOUT_RIGHT_BORDER.has(columnKey) ? false : undefined,
}}
`})}),`
`,e.jsxs(n.p,{children:["Тот же приём подходит и для ",e.jsx(n.code,{children:"getHorizontalBorder"})," и ",e.jsx(n.code,{children:"getCellBorder"}),`: тяжёлые
вычисления и наборы данных готовьте заранее, а в колбэке оставляйте только
быструю проверку.`]})]})}function p(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{p as default};
