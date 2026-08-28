import{j as n}from"./react-D2T61mpp.js";import{c6 as r,c7 as l,c0 as o}from"./vendor-DT8K_viV.js";import{T as c}from"./TableCanvas.columnsGrouping.stories-Cu7rjVRp.js";import"./react-is-Clcustum.js";import"./styled-components-DEDUmVg1.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-DUyg7UYc.js";import"./storySourceDoc-tVKyHcEN.js";import"./FiltersActions-c6icdUJZ.js";import"./IconButton-DIIP0vcQ.js";import"./@salutejs/plasma-icons-Cu-rfY0-.js";import"./@salutejs/sdds-finai-CYXfGDBj.js";import"./@salutejs/sdds-themes-CUTvIVmO.js";import"./utils-Bwg3Gt1v.js";import"./constants-BudGGuoE.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Du2rMdpX.js";import"./TextField-Bn345EpI.js";import"./sharedUtilsInputs-Deg7Qajn.js";import"./AnalyticalWidget-CkX_Td5z.js";import"./Collapse-DrbR_3vO.js";import"./Table-BS8OBk7t.js";import"./react-data-grid-B_KJC-8i.js";import"./TableTabs-DJ7tk115.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CYnqANGM.js";import"./ListOfFilters-ChIAHktu.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-D7WoUcIS.js";import"./EmptyState-B4iyeMnk.js";import"./MassActions-CG92uQ-g.js";import"./Autocomplete-LYuGcFS4.js";import"./TableCanvas-CayT_SxA.js";import"./TableGlide-Br2D1hj3.js";import"./@glideappsfinal/glide-data-grid-COl_EnJb.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DQtFoRKx.js";function i(s){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:c,name:"Docs"}),`
`,n.jsx(e.h1,{id:"columnsgrouping-tablecanvas",children:"ColumnsGrouping (TableCanvas)"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"columnConfig.children"})}),`
`,n.jsx(e.p,{children:"Группировка колонок — вложенная структура шапки таблицы. Позволяет объединять несколько колонок под одним общим заголовком, создавая иерархию в шапке."}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Поддержка многоуровневой вложенности (2, 3+ уровня)"}),`
`,n.jsxs(e.li,{children:["Совместимость с ",n.jsx(e.code,{children:"columnsControl"}),", ",n.jsx(e.code,{children:"resizableColumn"})]}),`
`,n.jsxs(e.li,{children:["Кастомизация ",n.jsx(e.code,{children:"name"})," через ",n.jsx(e.code,{children:"ReactNode"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"как-работает",children:"Как работает"}),`
`,n.jsxs(e.p,{children:["Для создания группы колонок используется ",n.jsx(e.code,{children:"ColumnGroupConfig"})," вместо обычного ",n.jsx(e.code,{children:"ColumnConfig"}),". Группа определяется наличием ключа ",n.jsx(e.code,{children:"children"}),", в котором перечисляются дочерние колонки или вложенные группы."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const columnConfig = [
  {
    name: 'Основные данные',
    children: [
      { key: 'name', name: 'Имя' },
      { key: 'age', name: 'Возраст' },
    ],
  },
  {
    name: 'Статистика',
    children: [
      { key: 'score', name: 'Баллы' },
      { key: 'rank', name: 'Ранг' },
    ],
  },
];
`})}),`
`,n.jsx(e.h2,{id:"особенности",children:"Особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Группа не имеет собственного ",n.jsx(e.code,{children:"key"})," — это чисто визуальный элемент шапки"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name"})," группы может быть строкой или ",n.jsx(e.code,{children:"ReactNode"})," для кастомного рендера"]}),`
`,n.jsxs(e.li,{children:["При использовании с ",n.jsx(e.code,{children:"columnsControl"})," скрытие/показ работает на уровне дочерних колонок, не на уровне группы"]}),`
`,n.jsxs(e.li,{children:["При ",n.jsx(e.code,{children:"resizableColumn"})," ресайз работает на уровне дочерних колонок"]}),`
`]}),`
`,n.jsx(e.h2,{id:"слияние-ячеек-шапки-squashemptycells",children:"Слияние ячеек шапки (squashEmptyCells)"}),`
`,n.jsxs(e.p,{children:["В многоуровневой шапке рядом с группами остаются пустые ячейки: у одиночной колонки без группы — пустая полоса СВЕРХУ, у «мелкой» группы (под которой нет более глубоких подгрупп) — пустая полоса СНИЗУ. ",n.jsx(e.code,{children:"tableConfig.columnsGrouping.squashEmptyCells"})," схлопывает их: одиночная колонка тянется вверх, мелкая группа — вниз, всё одной ячейкой без пустых полос. ",n.jsx(e.strong,{children:"Включено по умолчанию"}),"; выключить — ",n.jsx(e.code,{children:"squashEmptyCells: false"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`tableConfig={{ columnsGrouping: { squashEmptyCells: true } }}
`})}),`
`,n.jsx(e.p,{children:"Один переключатель на всю таблицу — не нужно решать по каждой колонке/группе. Пример с тумблером — стори «Группировка (squash)»."}),`
`,n.jsx(e.h3,{id:"выравнивание-заголовка-в-слитой-ячейке",children:"Выравнивание заголовка в слитой ячейке"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"squashedHeaderAlign: { horizontal, vertical }"})," задаёт положение текста в слитой ячейке:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["дефолт на таблице — ",n.jsx(e.code,{children:"tableConfig.columnsGrouping.squashedHeaderAlign"}),";"]}),`
`,n.jsxs(e.li,{children:["точечно на колонке (лист) — ",n.jsx(e.code,{children:"columnConfig[].squashedHeaderAlign"}),";"]}),`
`,n.jsxs(e.li,{children:["точечно на группе — ",n.jsx(e.code,{children:"ColumnGroupConfig.squashedHeaderAlign"}),"."]}),`
`]}),`
`,n.jsx(e.p,{children:"Значение на колонке или группе перекрывает табличный дефолт."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"horizontal"})," — ",n.jsx(e.code,{children:"left | center | right"}),"; ",n.jsx(e.code,{children:"vertical"})," — ",n.jsx(e.code,{children:"top | center | bottom"}),". Дефолт — ",n.jsx(e.code,{children:"left"})," / по центру по высоте. Действует только на слитой шапке. Пример — стори «Выравнивание заголовка»."]}),`
`,n.jsx(e.h3,{id:"кастомный-контент-в-слитой-шапке",children:"Кастомный контент в слитой шапке"}),`
`,n.jsxs(e.p,{children:["Если ",n.jsx(e.code,{children:"name"})," колонки или группы — canvas-элемент (",n.jsx(e.code,{children:"Canvas.Text"})," / ",n.jsx(e.code,{children:"Canvas.Container"}),"), в слитой шапке он центрируется по всей высоте объединённой ячейки. Пример — группа с кастомным ",n.jsx(e.code,{children:"name"})," в стори «Группировка (squash)»."]}),`
`,n.jsx(e.h3,{id:"реордер-и-группы",children:"Реордер и группы"}),`
`,n.jsxs(e.p,{children:["Слияние совместимо с реордером колонок за шапку (",n.jsx(e.code,{children:"columnsControl.reorderingHeader"}),", включён по умолчанию при ",n.jsx(e.code,{children:"columnsControl.enable"}),"). Drag-иконка показывается на листовых колонках, у групп своей нет — перетаскиваются листья."]}),`
`,n.jsx(e.h2,{id:"ограничения--edge-кейсы",children:"Ограничения / edge-кейсы"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Слияние имеет смысл при наличии групп в шапке (иначе групп-рядов нет и сливать нечего)."}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"squashedHeaderAlign"})," действует только на слитой шапке (при ",n.jsx(e.code,{children:"squashEmptyCells"}),")."]}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Подробнее о типах и пропсах — ",n.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-columnsgrouping-api--docs",children:"ColumnsGrouping API"})]}),`
`]}),`
`,n.jsx(o,{})]})}function O(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{O as default};
