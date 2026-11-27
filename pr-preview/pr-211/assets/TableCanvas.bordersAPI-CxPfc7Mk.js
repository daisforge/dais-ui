import{j as e}from"./react-UEdzNlUe.js";import{df as o}from"./vendor-BjJ6Dniq.js";import{M as t}from"./WithTooltip-KJL26V4Q-8sW6qWBN.js";import{T as i}from"./TypeSourceViewer-B_U_2gkh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-DEOLQzLG.js";import"./@tanstack/react-virtual-CarK5-pf.js";import"./preload-helper-DihHaBn_.js";import"./index-Cu4lwwaE.js";import"./index-BWFFZcAS.js";import"./types.string-oxo7MFjR.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Локальные компоненты/TableCanvas/Borders/API"}),`
`,e.jsx(n.h1,{id:"borders-api",children:"Borders API"}),`
`,e.jsx(n.h2,{id:"tableconfigborders",children:"tableConfig.borders"}),`
`,e.jsx(i,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts",typeName:"BordersConfig"}),`
`,e.jsx(n.h2,{id:"cellbordervisibility",children:"CellBorderVisibility"}),`
`,e.jsxs(n.p,{children:["Стороны рамки одной ячейки, которые возвращает ",e.jsx(n.code,{children:"getCellBorder"}),`. Для каждой
стороны:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"true"})," — рисовать линию;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"false"})," — не рисовать линию;"]}),`
`,e.jsx(n.li,{children:`поле не задано — сторона берётся с уровня ниже (настройка колонки, строки или
общая).`}),`
`]}),`
`,e.jsx(i,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts",typeName:"CellBorderVisibility"}),`
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
быструю проверку.`]})]})}function C(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{C as default};
