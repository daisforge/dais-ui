import{j as e}from"./react-D2T61mpp.js";import{c6 as i,c7 as g}from"./vendor-Ca3Rcr5K.js";import{T as l}from"./TypeSourceViewer-D-a8Uhll.js";import"./react-is-Clcustum.js";import"./styled-components-BlJZcR1N.js";import"./tslib-De9GV7Vy.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Локальные компоненты/TableCanvas/CellsMerging/API"}),`
`,e.jsx(n.h1,{id:"cellsmerging-api",children:"CellsMerging API"}),`
`,e.jsx(n.h2,{id:"tableconfigmergecells",children:"tableConfig.mergeCells"}),`
`,e.jsx(n.p,{children:"Точка входа для объединения ячеек тела. Все поля опциональны:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`mergeCells?: {
  /** Колонки, объединяемые по подряд идущим одинаковым значениям. */
  mergeByCellValues?: Array<string | { colKey: string; value: (row) => unknown }>;
  /** Управляемый список объединений по ключам строк и колонок. */
  mergedCellsRegions?: MergedCellsRegion[];
  /** Нужен для mergedCellsRegions: сопоставляет rowKeys со строками. */
  rowKeyGetter?: (row) => string | number;
  /** Общий (табличный) дефолт выравнивания контента в блоках. */
  mergedCellsAlign?: MergedCellsAlign;
};
`})}),`
`,e.jsx(n.h2,{id:"mergedcellsregion",children:"MergedCellsRegion"}),`
`,e.jsx(n.p,{children:"Один управляемый регион: ключи строк, ключи колонок и точечное выравнивание."}),`
`,e.jsx(l,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts",typeName:"MergedCellsRegion"}),`
`,e.jsx(n.h2,{id:"mergedcellsalign",children:"MergedCellsAlign"}),`
`,e.jsxs(n.p,{children:["Выравнивание контента в блоке. Задаётся на трёх уровнях: ",e.jsx(n.code,{children:"mergedCellsAlign"}),` региона,
`,e.jsx(n.code,{children:"columnConfig[].mergedCellsAlign"})," (колонка), ",e.jsx(n.code,{children:"mergeCells.mergedCellsAlign"}),` или
`,e.jsx(n.code,{children:"rowsGrouping.mergedCellsAlign"})," (дефолт). Точечное важнее общего."]}),`
`,e.jsxs(n.p,{children:["Колоночный ",e.jsx(n.code,{children:"mergedCellsAlign"})," — это ",e.jsx(n.code,{children:"MergedCellsAlign"}),` (одно на все блоки колонки) или
функция `,e.jsx(n.code,{children:"(row) => MergedCellsAlign | undefined"}),` по данным верхней строки блока. Функция
даёт разное выравнивание разным блокам, включая merged-виды группировки/subRows, где
границы блоков решает таблица.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`columnConfig={[
  { key: 'dept', mergedCellsAlign: (row) =>
      row.critical ? { vertical: 'top' } : { vertical: 'center' } },
]}
`})}),`
`,e.jsx(l,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/types/merged-cells.type.ts",typeName:"MergedCellsAlign"}),`
`,e.jsx(n.h2,{id:"rowsgrouping-merged-вид",children:"rowsGrouping (merged-вид)"}),`
`,e.jsxs(n.p,{children:["Поля группировки, относящиеся к merged-виду: ",e.jsx(n.code,{children:"view: 'merged'"}),`,
`,e.jsx(n.code,{children:"mergedCellsAlign"}),", ",e.jsx(n.code,{children:"disableGroupColumnsSort"}),"."]}),`
`,e.jsx(l,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-rows-grouping/types.ts",typeName:"RowsGrouping"}),`
`,e.jsx(n.h2,{id:"subrows-merged-вид",children:"subRows (merged-вид)"}),`
`,e.jsxs(n.p,{children:["Поля subRows, относящиеся к merged-виду: ",e.jsx(n.code,{children:"view: 'merged'"})," и ",e.jsx(n.code,{children:"mergedColumns"}),`
(упорядоченный список колонок-предков, индекс = глубина уровня дерева).`]}),`
`,e.jsx(l,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-tree/types.ts",typeName:"SubRows"})]})}function p(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{p as default};
